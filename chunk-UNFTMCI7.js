import{a as N}from"./chunk-E3U6W75C.js";import{Aa as M,Ba as D,C as h,D as f,Kb as F,L as m,La as d,Lb as l,M as p,Pa as b,Ra as O,Wa as C,a as c,ba as g,ea as v,gc as w,ja as u,ld as I,na as y,wa as _,za as E}from"./chunk-K77IP5TH.js";var V=new v("NU_MONACO_EDITOR_CONFIG");function ee(r){return y([{provide:V,useValue:r}])}var T=!1,R,U=(()=>{let i=class i{set disabled(e){this._disabled=typeof e=="string"?!0:e,this.setDisabled()}set options(e){this._options=c(c({},this._config.defaultOptions),e),this.updateOptions()}get options(){return this._options}constructor(e,o,t,s,a){this.el=e,this.doc=t,this.ngZone=s,this.destroy$=a,this._resize$=null,this.height="200px",this.delay=0,this.event=new D,this._config=c({baseUrl:"https://cdn.jsdelivr.net/npm/monaco-editor/min",autoFormatTime:100},o),this.options=this._config.defaultOptions}notifyEvent(e,o){this.ngZone.run(()=>this.event.emit(c({type:e,editor:this._editor},o)))}setDisabled(){return this._editor?.updateOptions({readOnly:this._disabled}),this}init(){if(T){R.then(()=>this.initMonaco(this.options,!0));return}T=!0,R=new Promise((e,o)=>{let t=window;if(t==null){e();return}if(t.monaco){e();return}let s=this._config.baseUrl,a=()=>{t.require.config({paths:{vs:`${s}/vs`}}),typeof this._config.monacoPreLoad=="function"&&this._config.monacoPreLoad(),t.require(["vs/editor/editor.main"],()=>{typeof this._config.monacoLoad=="function"&&this._config.monacoLoad(t.monaco),this.initMonaco(this.options,!0),e()},()=>{o("Unable to load editor/editor.main module, please check your network environment.")})};if(t.require)a();else{let n=this.doc.createElement("script");n.type="text/javascript",n.src=`${s}/vs/loader.js`,n.onload=a,n.onerror=()=>o(`Unable to load ${n.src}, please check your network environment.`),this.doc.getElementsByTagName("head")[0].appendChild(n)}}).catch(e=>this.notifyEvent("load-error",{error:e}))}cleanResize(){return this._resize$?.unsubscribe(),this}registerResize(){return this.cleanResize(),this._resize$=h(window,"resize").pipe(m(100)).subscribe(()=>{this._editor.layout(),this.notifyEvent("resize")}),this}updateOptions(){this._editor&&this.ngZone.runOutsideAngular(()=>{this._editor.dispose(),this.initMonaco(this._options,!1)})}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>setTimeout(()=>this.init(),+this.delay))}ngOnDestroy(){this.cleanResize(),this._editor?.dispose()}};i.\u0275fac=function(o){return new(o||i)(d(M),d(V,8),d(w),d(b),d(E))},i.\u0275cmp=u({type:i,selectors:[["nu-monaco-base"]],inputs:{height:"height",delay:"delay",disabled:"disabled",options:"options"},outputs:{event:"event"},standalone:!0,features:[l],decls:0,vars:0,template:function(o,t){},encapsulation:2});let r=i;return r})(),te=(()=>{let i=class i extends U{constructor(){super(...arguments),this._value="",this.autoFormat=!0,this.onChange=e=>{},this.onTouched=()=>{}}get editor(){return this._editor}initMonaco(e,o){let t=!!this.model;if(t){let n=monaco.editor.getModel(this.model.uri||"");if(n)e.model=n,e.model.setValue(this._value);else{let{value:j,language:x,uri:z}=this.model;e.model=monaco.editor.createModel(j||this._value,x,z)}}this._disabled!=null&&(e.readOnly=this._disabled);let s=this._editor=monaco.editor.create(this.el.nativeElement,e);t||s.setValue(this._value),s.onDidChangeModelContent(()=>{let n=s.getValue();this.ngZone.run(()=>{this._value=n,this.onChange(n)})}),s.onDidBlurEditorWidget(()=>this.onTouched()),this.registerResize();let a=o?"init":"re-init";if(this.autoFormat){f(this._config.autoFormatTime).pipe(I(this.destroy$),p(1)).subscribe(()=>{let n=s.getAction("editor.action.formatDocument");if(n==null){this.notifyEvent(a);return}n.run().then(()=>this.notifyEvent(a))});return}this.notifyEvent(a)}writeValue(e){this._value=e||"",this._editor?.setValue(this._value)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this.setDisabled()}};i.\u0275fac=(()=>{let e;return function(t){return(e||(e=_(i)))(t||i)}})(),i.\u0275cmp=u({type:i,selectors:[["nu-monaco-editor"]],hostVars:4,hostBindings:function(o,t){o&2&&C("display","block")("height",t.height)},inputs:{model:"model",autoFormat:"autoFormat"},exportAs:["nuMonacoEditor"],standalone:!0,features:[F([{provide:N,useExisting:g(()=>i),multi:!0}]),O,l],decls:0,vars:0,template:function(o,t){},encapsulation:2,changeDetection:0});let r=i;return r})();export{ee as a,te as b};