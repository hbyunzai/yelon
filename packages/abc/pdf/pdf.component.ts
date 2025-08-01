import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChange,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, timer, debounceTime, filter } from 'rxjs';

// import type { PDFDocumentLoadingTask, PDFDocumentProxy } from 'pdfjs-dist';
// import type { EventBus } from 'pdfjs-dist/types/web/event_utils';
// import type { PDFFindController } from 'pdfjs-dist/types/web/pdf_find_controller';
// import type { PDFLinkService } from 'pdfjs-dist/types/web/pdf_link_service';
// import type { PDFViewer } from 'pdfjs-dist/types/web/pdf_viewer';

import { YunzaiConfigService } from '@yelon/util/config';
import { ZoneOutside } from '@yelon/util/decorator';
import { LazyService } from '@yelon/util/other';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

import { PDF_DEFULAT_CONFIG } from './pdf.config';
import { PdfChangeEvent, PdfChangeEventType, PdfExternalLinkTarget, PdfTextLayerMode, PdfZoomScale } from './pdf.types';

// TODO: Although pdfjs-dist is an optional dependency on canvas
// will be installed automatically when the dependency is installed by default;
// This requires a higher environment and often fails to install
type PDFDocumentLoadingTask = any;
type PDFDocumentProxy = any;
type EventBus = any;
type PDFFindController = any;
type PDFLinkService = any;
type PDFViewer = any;

const CSS_UNITS: number = 96.0 / 72.0;
const BORDER_WIDTH = 9;

@Component({
  selector: 'pdf',
  exportAs: 'pdf',
  template: `
    @if (!inited || loading) {
      <nz-skeleton />
    }
    <div class="pdf-container">
      <div class="pdfViewer"></div>
    </div>
  `,
  host: {
    '[class.d-block]': `true`
  },

  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent]
})
export class PdfComponent implements OnChanges, AfterViewInit, OnDestroy {
  private readonly lazySrv = inject(LazyService);
  private readonly platform = inject(Platform);
  private readonly _el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly doc = inject(DOCUMENT);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly ngZone = inject(NgZone);
  private readonly destroy$ = inject(DestroyRef);
  private readonly cogSrv = inject(YunzaiConfigService);

  inited = false;
  private lib: string = '';
  private _pdf?: PDFDocumentProxy | null;
  private loadingTask?: PDFDocumentLoadingTask;
  private _src: any;
  private lastSrc?: any;
  private _pi = 1;
  private _total = 0;
  private _showAll = true;
  private _rotation = 0;
  private _zoom = 1;
  private _renderText = true;
  private _loading = false;

  private multiPageViewer?: PDFViewer;
  private multiPageLinkService?: PDFLinkService;
  private multiPageFindController?: PDFFindController;
  private singlePageViewer?: PDFViewer;
  private singlePageLinkService?: PDFLinkService;
  private singlePageFindController?: PDFFindController;
  private _eventBus?: EventBus;

  @Input() set src(dataOrBuffer: any) {
    this._src = dataOrBuffer;
    this.load();
  }
  @Input({ transform: numberAttribute })
  set pi(val: number) {
    this._pi = this.getValidPi(val);
    if (this.pageViewer) {
      this.pageViewer.scrollPageIntoView({ pageNumber: this._pi });
    }
  }
  @Input({ transform: booleanAttribute }) set showAll(val: boolean) {
    this._showAll = val;
    this.resetDoc();
  }
  @Input({ transform: booleanAttribute }) set renderText(val: boolean) {
    this._renderText = val;
    if (this.pageViewer) {
      this.resetDoc();
    }
  }
  @Input() textLayerMode = PdfTextLayerMode.ENABLE;
  @Input({ transform: booleanAttribute }) showBorders = false;
  @Input({ transform: booleanAttribute }) stickToPage = false;
  @Input({ transform: booleanAttribute }) originalSize = true;
  @Input({ transform: booleanAttribute }) fitToPage = false;
  @Input({ transform: numberAttribute }) set zoom(val: number) {
    if (val <= 0) return;
    this._zoom = val;
  }
  @Input() zoomScale: PdfZoomScale = 'page-width';
  @Input({ transform: numberAttribute }) set rotation(val: number) {
    if (val % 90 !== 0) {
      console.warn(`Invalid rotation angle, shoule be divisible by 90.`);
      return;
    }
    this._rotation = val;
  }
  @Input({ transform: booleanAttribute }) autoReSize = true;
  @Input() externalLinkTarget = PdfExternalLinkTarget.BLANK;
  @Input({ transform: numberAttribute }) delay?: number;
  @Output() readonly change = new EventEmitter<PdfChangeEvent>();

  get loading(): boolean {
    return this._loading;
  }

  get pdf(): PDFDocumentProxy | undefined | null {
    return this._pdf;
  }

  get findController(): PDFFindController | undefined {
    return this._showAll ? this.multiPageFindController : this.singlePageFindController;
  }

  get pageViewer(): PDFViewer | undefined {
    return this._showAll ? this.multiPageViewer : this.singlePageViewer;
  }

  get linkService(): PDFLinkService | undefined {
    return this._showAll ? this.multiPageLinkService : this.singlePageLinkService;
  }

  get eventBus(): EventBus | undefined {
    return this._eventBus;
  }

  private get _textLayerMode(): PdfTextLayerMode {
    return this._renderText ? this.textLayerMode : PdfTextLayerMode.DISABLE;
  }

  private get win(): any {
    return this.doc.defaultView || window;
  }

  private get el(): HTMLElement {
    return this._el.querySelector('.pdf-container') as HTMLElement;
  }

  constructor() {
    const cog = this.cogSrv.merge('pdf', PDF_DEFULAT_CONFIG)!;
    Object.assign(this, cog);

    const lib = cog.lib!;
    this.lib = lib.endsWith('/') ? lib : `${lib}/`;
  }

  private getValidPi(pi: number): number {
    if (pi < 1) return 1;
    const pdf = this._pdf;
    return pdf && pi > pdf.numPages ? pdf.numPages : pi;
  }

  private emit(type: PdfChangeEventType, opt?: PdfChangeEvent): void {
    this.ngZone.run(() =>
      this.change.emit({
        type,
        pdf: this._pdf,
        pi: this._pi,
        total: this._total,
        ...opt
      })
    );
  }

  private initDelay(): void {
    if (!this.win.pdfjsLib) {
      throw new Error(
        `No window.pdfjsLib found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(
          this.lib
        )}`
      );
    }
    this.inited = true;
    this.cdr.detectChanges();
    this.win.pdfjsLib.GlobalWorkerOptions.workerSrc = `${this.lib}build/pdf.worker.min.js`;

    timer(this.delay ?? 0)
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(() => this.load());
  }

  setLoading(status: boolean): void {
    this.ngZone.run(() => {
      this._loading = status;
      this.cdr.detectChanges();
    });
  }

  @ZoneOutside()
  private load(): void {
    const { _src } = this;
    if (!this.inited || !_src) {
      return;
    }

    if (this.lastSrc === _src) {
      this.render();
      return;
    }

    this.destroy();
    this.ngZone.run(() => {
      this._loading = true;
      this.cdr.detectChanges();
    });
    this.setLoading(true);
    const loadingTask: PDFDocumentLoadingTask = (this.loadingTask = this.win.pdfjsLib.getDocument(_src));
    loadingTask.onProgress = (progress: { loaded: number; total: number }) => this.emit('load-progress', { progress });
    (loadingTask.promise as PromiseLike<PDFDocumentProxy>)
      .then(
        pdf => {
          this._pdf = pdf;
          this.lastSrc = _src;
          this._total = pdf.numPages;

          this.emit('loaded');

          if (!this.pageViewer) {
            this.setupPageViewer();
          }

          this.resetDoc();
          this.render();
        },
        error => this.emit('error', { error })
      )
      .then(() => this.setLoading(false));
  }

  @ZoneOutside()
  private resetDoc(): void {
    const pdf = this._pdf;
    if (!pdf) {
      return;
    }
    this.cleanDoc();

    this.findController!.setDocument(pdf);
    this.pageViewer!.setDocument(pdf);
    this.linkService!.setDocument(pdf, null);
  }

  private cleanDoc(): void {
    this.multiPageViewer!.setDocument(null as any);
    this.singlePageViewer!.setDocument(null as any);

    this.multiPageLinkService!.setDocument(null, null);
    this.singlePageLinkService!.setDocument(null, null);

    this.multiPageFindController!.setDocument(null as any);
    this.singlePageFindController!.setDocument(null as any);
  }

  private render(): void {
    const currentViewer = this.pageViewer;
    if (!currentViewer) {
      return;
    }

    if (this._rotation !== 0 || currentViewer.pagesRotation !== this._rotation) {
      this.timeExec(() => {
        currentViewer.pagesRotation = this._rotation;
      });
    }

    if (this.stickToPage) {
      this.timeExec(() => {
        currentViewer.currentPageNumber = this._pi;
      });
    }

    this.updateSize();
  }

  private timeExec(fn: () => void): void {
    this.ngZone.runOutsideAngular(() => {
      timer(0)
        .pipe(takeUntilDestroyed(this.destroy$))
        .subscribe(() => this.ngZone.runOutsideAngular(() => fn()));
    });
  }

  @ZoneOutside()
  private updateSize(): void {
    const currentViewer = this.pageViewer;
    if (!currentViewer) return;

    this._pdf!.getPage(currentViewer.currentPageNumber).then((page: any) => {
      const { _rotation, _zoom } = this;
      const rotation = _rotation || page.rotate;
      const viewportWidth =
        page.getViewport({
          scale: _zoom,
          rotation
        }).width * CSS_UNITS;
      let scale = _zoom;

      // Scale the document when it shouldn't be in original size or doesn't fit into the viewport
      if (!this.originalSize || (this.fitToPage && viewportWidth > this.el.clientWidth)) {
        const viewPort = page.getViewport({ scale: 1, rotation });
        scale = this.getScale(viewPort.width, viewPort.height);
      }

      currentViewer.currentScale = scale;
    });
  }

  private getScale(viewportWidth: number, viewportHeight: number): number {
    const borderSize = this.showBorders ? 2 * BORDER_WIDTH : 0;
    const el = this.el;
    const containerWidth = el.clientWidth - borderSize;
    const containerHeight = el.clientHeight - borderSize;

    if (containerHeight === 0 || viewportHeight === 0 || containerWidth === 0 || viewportWidth === 0) {
      return 1;
    }

    let ratio = 1;
    switch (this.zoomScale) {
      case 'page-fit':
        ratio = Math.min(containerHeight / viewportHeight, containerWidth / viewportWidth);
        break;
      case 'page-height':
        ratio = containerHeight / viewportHeight;
        break;
      case 'page-width':
      default:
        ratio = containerWidth / viewportWidth;
        break;
    }

    return (this._zoom * ratio) / CSS_UNITS;
  }

  @ZoneOutside()
  private destroy(): void {
    const { loadingTask } = this;
    if (loadingTask && !loadingTask.destroyed) {
      loadingTask.destroy();
    }
    if (this._pdf) {
      this._pdf.destroy();
      this._pdf = null;
      this.cleanDoc();
    }
  }

  private setupPageViewer(): void {
    this.win.pdfjsLib.disableTextLayer = !this._renderText;
    this.win.pdfjsLib.externalLinkTarget = this.externalLinkTarget;

    this.setupMultiPageViewer();
    this.setupSinglePageViewer();
  }

  private createEventBus(): EventBus {
    const eventBus: EventBus = new this.win.pdfjsViewer.EventBus();
    eventBus.on(`pagesinit`, (ev: any) => {
      this.emit('pages-init', { ev });
    });
    eventBus.on(`pagerendered`, (ev: any) => {
      this.emit('page-rendered', { ev });
    });
    eventBus.on(`pagechanging`, (ev: any) => {
      const nowPi = ev.pageNumber;
      if (nowPi !== this._pi) {
        this._pi = nowPi;
        this.emit('pi', { ev });
      }
    });
    eventBus.on(`textlayerrendered`, (ev: any) => {
      this.emit('text-layer-rendered', { ev });
    });
    return eventBus;
  }

  private setupMultiPageViewer(): void {
    const VIEWER = this.win.pdfjsViewer;

    const eventBus = (this._eventBus = this.createEventBus());
    const linkService: PDFLinkService = (this.multiPageLinkService = new VIEWER.PDFLinkService({
      eventBus
    }));
    const findController: PDFFindController = (this.multiPageFindController = new VIEWER.PDFFindController({
      eventBus,
      linkService
    }));

    const viewer: PDFViewer = (this.multiPageViewer = new VIEWER.PDFViewer({
      eventBus,
      container: this.el,
      removePageBorders: !this.showBorders,
      textLayerMode: this._textLayerMode,
      linkService,
      findController
    }));
    linkService.setViewer(viewer);
  }

  private setupSinglePageViewer(): void {
    const VIEWER = this.win.pdfjsViewer;

    const eventBus = this.createEventBus();
    const linkService: PDFLinkService = (this.singlePageLinkService = new VIEWER.PDFLinkService({
      eventBus
    }));
    const findController: PDFFindController = (this.singlePageFindController = new VIEWER.PDFFindController({
      eventBus,
      linkService
    }));

    const pageViewer = (this.singlePageViewer = new VIEWER.PDFSinglePageViewer({
      eventBus,
      container: this.el,
      removePageBorders: !this.showBorders,
      textLayerMode: this._textLayerMode,
      linkService,
      findController
    }));
    linkService.setViewer(pageViewer);
    pageViewer._currentPageNumber = this._pi;
  }

  ngAfterViewInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    if (this.win.pdfjsLib) {
      this.initDelay();
      return;
    }
    const { lib } = this;
    this.lazySrv
      .load(`${lib}build/pdf.min.js`)
      .then(() => this.lazySrv.load([`${lib}web/pdf_viewer.js`, `${lib}web/pdf_viewer.css`]))
      .then(() => this.initDelay());

    this.ngZone.runOutsideAngular(() => this.initResize());
  }

  private initResize(): void {
    fromEvent(this.win, 'resize')
      .pipe(
        debounceTime(100),
        filter(() => this.autoReSize && this._pdf != null),
        takeUntilDestroyed(this.destroy$)
      )
      .subscribe(() => this.updateSize());
  }

  ngOnChanges(changes: { [p in keyof PdfComponent]?: SimpleChange }): void {
    if (this.inited && !changes.src) {
      this.render();
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
