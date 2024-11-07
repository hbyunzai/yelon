import{a as A}from"./chunk-YVNN56XS.js";import{Aa as O,C as m,D as p,Ka as d,Kb as w,L as g,Lb as u,M as v,Qa as F,Ra as h,Wa as N,a as l,aa as y,da as _,dc as I,ec as T,ha as c,jc as P,la as M,nd as x,ua as E,wa as D,xa as b,ya as C}from"./chunk-5G6CWZQB.js";var j=new _("NU_MONACO_EDITOR_CONFIG");function ne(n){return M([{provide:j,useValue:n}])}var R=!1,V,B=(()=>{class n{set disabled(e){this._disabled=typeof e=="string"?!0:e,this.setDisabled()}set options(e){this._options=l(l({},this._config.defaultOptions),e),this.updateOptions()}get options(){return this._options}constructor(e,i,t,r,a){this.el=e,this.doc=t,this.ngZone=r,this.destroy$=a,this._resize$=null,this.height="200px",this.delay=0,this.event=new b,this._config=l({baseUrl:"https://cdn.jsdelivr.net/npm/monaco-editor/min",autoFormatTime:100},i),this.options=this._config.defaultOptions}notifyEvent(e,i){this.ngZone.run(()=>this.event.emit(l({type:e,editor:this._editor},i)))}setDisabled(){return this._editor?.updateOptions({readOnly:this._disabled}),this}init(){if(R){V.then(()=>this.initMonaco(this.options,!0));return}R=!0,V=new Promise((e,i)=>{let t=window;if(t==null){e();return}if(t.monaco){e();return}let r=this._config.baseUrl,a=()=>{t.require.config({paths:{vs:`${r}/vs`}}),typeof this._config.monacoPreLoad=="function"&&this._config.monacoPreLoad(),t.require(["vs/editor/editor.main"],()=>{typeof this._config.monacoLoad=="function"&&this._config.monacoLoad(t.monaco),this.initMonaco(this.options,!0),e()},()=>{i("Unable to load editor/editor.main module, please check your network environment.")})};if(t.require)a();else{let o=this.doc.createElement("script");o.type="text/javascript",o.src=`${r}/vs/loader.js`,o.onload=a,o.onerror=()=>i(`Unable to load ${o.src}, please check your network environment.`),this.doc.getElementsByTagName("head")[0].appendChild(o)}}).catch(e=>this.notifyEvent("load-error",{error:e}))}cleanResize(){return this._resize$?.unsubscribe(),this}registerResize(){return this.cleanResize(),this._resize$=m(window,"resize").pipe(g(100)).subscribe(()=>{this._editor.layout(),this.notifyEvent("resize")}),this}updateOptions(){this._editor&&this.ngZone.runOutsideAngular(()=>{this._editor.dispose(),this.initMonaco(this._options,!1)})}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>setTimeout(()=>this.init(),+this.delay))}ngOnDestroy(){this.cleanResize(),this._editor?.dispose()}static{this.\u0275fac=function(i){return new(i||n)(d(O),d(j,8),d(P),d(C),d(D))}}static{this.\u0275cmp=c({type:n,selectors:[["nu-monaco-base"]],inputs:{height:"height",delay:[2,"delay","delay",T],disabled:"disabled",options:"options"},outputs:{event:"event"},standalone:!0,features:[h,u],decls:0,vars:0,template:function(i,t){},encapsulation:2})}}return n})(),f=class{constructor(s,e){this.ID="editor.widget.placeholderHint",this.placeholder=e,this.editor=s}update(s){this.node!=null&&(this.node.innerHTML=s??this.placeholder??"")}getId(){return this.ID}getDomNode(){if(this.node==null){let s=this.node=document.createElement("div");s.classList.add("monaco-editor-placeholder"),s.style.width="max-content",s.style.color="gray",s.innerHTML=this.placeholder,s.style.fontStyle="italic",this.editor.applyFontInfo(s)}return this.node}getPosition(){return{position:{lineNumber:1,column:1},preference:[monaco.editor.ContentWidgetPositionPreference.EXACT]}}dispose(){this.editor.removeContentWidget(this)}},se=(()=>{class n extends B{constructor(){super(...arguments),this._value="",this.autoFormat=!0,this.onChange=e=>{},this.onTouched=()=>{}}set placeholder(e){this._placeholder=e,this._placeholderWidget?.update(e)}get editor(){return this._editor}togglePlaceholder(){let e=this._placeholder;e==null||e.length<=0||this.editor==null||(this._placeholderWidget==null&&(this._placeholderWidget=new f(this.editor,e)),this._value.length>0?this.editor.removeContentWidget(this._placeholderWidget):this.editor.addContentWidget(this._placeholderWidget))}initMonaco(e,i){let t=!!this.model;if(t){let o=monaco.editor.getModel(this.model.uri||"");if(o)e.model=o,e.model.setValue(this._value);else{let{value:z,language:U,uri:k}=this.model;e.model=monaco.editor.createModel(z||this._value,U,k)}}this._disabled!=null&&(e.readOnly=this._disabled);let r=this._editor=monaco.editor.create(this.el.nativeElement,e);t||r.setValue(this._value),r.onDidChangeModelContent(()=>{let o=r.getValue();this.ngZone.run(()=>{this._value=o,this.onChange(o)}),this.togglePlaceholder()}),r.onDidBlurEditorWidget(()=>this.onTouched()),this.togglePlaceholder(),this.registerResize();let a=i?"init":"re-init";if(this.autoFormat){p(this._config.autoFormatTime).pipe(x(this.destroy$),v(1)).subscribe(()=>{let o=r.getAction("editor.action.formatDocument");if(o==null){this.notifyEvent(a);return}o.run().then(()=>this.notifyEvent(a))});return}this.notifyEvent(a)}writeValue(e){this._value=e||"",this._editor?.setValue(this._value)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this.setDisabled()}static{this.\u0275fac=(()=>{let e;return function(t){return(e||(e=E(n)))(t||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["nu-monaco-editor"]],hostVars:4,hostBindings:function(i,t){i&2&&N("display","block")("height",t.height)},inputs:{placeholder:"placeholder",model:"model",autoFormat:[2,"autoFormat","autoFormat",I]},exportAs:["nuMonacoEditor"],standalone:!0,features:[w([{provide:A,useExisting:y(()=>n),multi:!0}]),h,F,u],decls:0,vars:0,template:function(i,t){},encapsulation:2,changeDetection:0})}}return n})();export{ne as a,se as b};
