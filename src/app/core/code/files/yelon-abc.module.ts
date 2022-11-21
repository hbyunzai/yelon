export default `import { NgModule } from '@angular/core';

// #region all modules
import { AvatarListModule } from '@yelon/abc/avatar-list';
import { CountDownModule } from '@yelon/abc/count-down';
import { DatePickerModule } from '@yelon/abc/date-picker';
import { DownFileModule } from '@yelon/abc/down-file';
import { EllipsisModule } from '@yelon/abc/ellipsis';
import { ErrorCollectModule } from '@yelon/abc/error-collect';
import { ExceptionModule } from '@yelon/abc/exception';
import { FooterToolbarModule } from '@yelon/abc/footer-toolbar';
import { FullContentModule } from '@yelon/abc/full-content';
import { GlobalFooterModule } from '@yelon/abc/global-footer';
import { ImageModule } from '@yelon/abc/image';
import { LoadingModule } from '@yelon/abc/loading';
import { HotkeyModule } from '@yelon/abc/hotkey';
import { LodopModule } from '@yelon/abc/lodop';
import { NoticeIconModule } from '@yelon/abc/notice-icon';
import { PageHeaderModule } from '@yelon/abc/page-header';
import { ObserversModule } from '@yelon/abc/observers';
import { QRModule } from '@yelon/abc/qr';
import { QuickMenuModule } from '@yelon/abc/quick-menu';
import { ResultModule } from '@yelon/abc/result';
import { ReuseTabModule } from '@yelon/abc/reuse-tab';
import { SEModule } from '@yelon/abc/se';
import { SGModule } from '@yelon/abc/sg';
import { STModule } from '@yelon/abc/st';
import { SVModule } from '@yelon/abc/sv';
import { TagSelectModule } from '@yelon/abc/tag-select';
import { MediaModule } from '@yelon/abc/media';
import { XlsxModule } from '@yelon/abc/xlsx';
import { ZipModule } from '@yelon/abc/zip';
import { OnboardingModule } from '@yelon/abc/onboarding';
import { LetModule } from '@yelon/abc/let';
import { AutoFocusModule } from '@yelon/abc/auto-focus';
import { PdfModule } from '@yelon/abc/pdf';

const MODULES = [
  ErrorCollectModule,
  FooterToolbarModule,
  DownFileModule,
  ImageModule,
  AvatarListModule,
  EllipsisModule,
  GlobalFooterModule,
  ExceptionModule,
  NoticeIconModule,
  ObserversModule,
  PageHeaderModule,
  ResultModule,
  TagSelectModule,
  CountDownModule,
  STModule,
  ReuseTabModule,
  FullContentModule,
  XlsxModule,
  ZipModule,
  LodopModule,
  QuickMenuModule,
  QRModule,
  SVModule,
  SEModule,
  SGModule,
  DatePickerModule,
  LoadingModule,
  HotkeyModule,
  MediaModule,
  OnboardingModule,
  LetModule,
  AutoFocusModule,
  PdfModule,
];

@NgModule({ exports: MODULES })
export class DemoYelonABCModule {}
`;
