"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[910],{3910:(q,p,r)=>{r.r(p),r.d(p,{FormPagesModule:()=>W});var F=r(9826),t=r(5e3),u=r(2382),c=r(9808),N=r(4968),D=r(8372);const g=new t.OlP("NU_MONACO_EDITOR_CONFIG");let _,C=!1,v=(()=>{class n{constructor(o,e,i,a){this.el=o,this.doc=i,this.ngZone=a,this._resize$=null,this.height="200px",this.delay=0,this.event=new t.vpe,this._config=Object.assign({baseUrl:"https://cdn.jsdelivr.net/npm/monaco-editor/min"},e),this.options=this._config.defaultOptions}set disabled(o){this._disabled="string"==typeof o||o,this.setDisabled()}set options(o){this._options=Object.assign(Object.assign({},this._config.defaultOptions),o)}get options(){return this._options}notifyEvent(o,e){this.ngZone.run(()=>this.event.emit(Object.assign({type:o,editor:this._editor},e)))}setDisabled(){return this._editor&&this._editor.updateOptions({readOnly:this._disabled}),this}init(){C?_.then(()=>this.initMonaco(this.options,!0)):(C=!0,_=new Promise((o,e)=>{const i=window;if(null==i)return void o();if(i.monaco)return void o();const a=this._config.baseUrl,d=()=>{i.require.config({paths:{vs:`${a}/vs`}}),"function"==typeof this._config.monacoPreLoad&&this._config.monacoPreLoad(),i.require(["vs/editor/editor.main"],()=>{"function"==typeof this._config.monacoLoad&&this._config.monacoLoad(i.monaco),this.initMonaco(this.options,!0),o()},()=>{e("Unable to load editor/editor.main module, please check your network environment.")})};if(i.require)d();else{const l=this.doc.createElement("script");l.type="text/javascript",l.src=`${a}/vs/loader.js`,l.onload=d,l.onerror=()=>e(`Unable to load ${l.src}, please check your network environment.`),this.doc.getElementsByTagName("head")[0].appendChild(l)}}).catch(o=>this.notifyEvent("load-error",{error:o})))}cleanResize(){return this._resize$&&this._resize$.unsubscribe(),this}registerResize(){return this.cleanResize(),this._resize$=(0,N.R)(window,"resize").pipe((0,D.b)(100)).subscribe(()=>{this._editor.layout(),this.notifyEvent("resize")}),this}updateOptions(){!this._editor||this.ngZone.runOutsideAngular(()=>{this._editor.dispose(),this.initMonaco(this._options,!1)})}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>setTimeout(()=>this.init(),+this.delay))}ngOnChanges(o){const e=Object.keys(o);1===e.length&&"disabled"===e[0]||this.updateOptions()}ngOnDestroy(){this.cleanResize(),this._editor&&(this._editor.dispose(),this._editor=void 0)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(t.SBq),t.Y36(g),t.Y36(c.K0),t.Y36(t.R0b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nu-monaco-base"]],inputs:{height:"height",delay:"delay",disabled:"disabled",options:"options"},outputs:{event:"event"},features:[t.TTD],decls:0,vars:0,template:function(o,e){},encapsulation:2}),n})(),z=(()=>{class n extends v{constructor(){super(...arguments),this._value="",this.autoFormat=!0,this.onChange=o=>{},this.onTouched=()=>{}}get editor(){return this._editor}initMonaco(o,e){const i=!!this.model;if(i){const d=monaco.editor.getModel(this.model.uri||"");if(d)o.model=d,o.model.setValue(this._value);else{const{value:l,language:m,uri:f}=this.model;o.model=monaco.editor.createModel(l||this._value,m,f)}}null!=this._disabled&&(o.readOnly=this._disabled);const a=this._editor=monaco.editor.create(this.el.nativeElement,o);i||a.setValue(this._value),a.onDidChangeModelContent(()=>{const d=a.getValue();this.ngZone.run(()=>{this._value=d,this.onChange(d)})}),a.onDidBlurEditorWidget(()=>this.onTouched()),this.registerResize(),this.autoFormat?a.getAction("editor.action.formatDocument").run().then(()=>this.notifyEvent(e?"init":"re-init")):this.notifyEvent(e?"init":"re-init")}writeValue(o){this._value=o||"",this._editor&&this._editor.setValue(this._value)}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}setDisabledState(o){this.disabled=o,this.setDisabled()}}return n.\u0275fac=function(){let s;return function(e){return(s||(s=t.n5z(n)))(e||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["nu-monaco-editor"]],hostVars:4,hostBindings:function(o,e){2&o&&t.Udp("display","block")("height",e.height)},inputs:{model:"model",autoFormat:"autoFormat"},exportAs:["nuMonacoEditor"],features:[t._Bn([{provide:u.JU,useExisting:(0,t.Gpc)(()=>n),multi:!0}]),t.qOj],decls:0,vars:0,template:function(o,e){},encapsulation:2,changeDetection:0}),n})(),S=(()=>{class n{static forRoot(o){return{ngModule:n,providers:[{provide:g,useValue:o}]}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez]]}),n})();var V=r(7465),J=r(2013),Z=r(7579),x=r(2722),M=r(1035),B=r(766),A=r(859),Q=r(1807),U=r(9727),y=r(1894),T=r(8054),h=r(3868),b=r(6042),$=r(2683),L=r(2643),j=r(404),R=r(5017),E=r(868),Y=r(4927),w=r(4490);const G=["schemaEditor"],I=["formCodeEditor"],P=["uiEditor"];function H(n,s){if(1&n&&t._UZ(0,"nz-option",24),2&n){const o=s.$implicit;t.Q6J("nzValue",o.name)("nzLabel",o.title)}}function k(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"div",1)(1,"sf",25),t.NdJ("formSubmit",function(i){return t.CHM(o),t.oxw().submit(i)})("formChange",function(i){return t.CHM(o),t.oxw().change(i)})("formValueChange",function(i){return t.CHM(o),t.oxw().valueChange(i)})("formError",function(i){return t.CHM(o),t.oxw().error(i)}),t.qZA()()}if(2&n){const o=t.oxw();t.Q6J("nzSpan",o.expand?12:24),t.xp6(1),t.Q6J("schema",o.schemaData)("formData",o.formData)("ui",o.uiSchema)("layout",o.layout)}}const K=[{path:"",component:V.S,children:[{path:"validator/:lang",component:(()=>{class n{constructor(o,e,i,a,d,l){this.i18n=o,this.codeSrv=e,this.http=i,this.msg=a,this.appService=d,this.cdr=l,this.destroy$=new Z.x,this.files=[{name:"basic",title:"\u57fa\u672c"},{name:"conditional",title:"\u6761\u4ef6"},{name:"sort",title:"\u987a\u5e8f"},{name:"validation",title:"\u81ea\u5b9a\u4e49\u6821\u9a8c"},{name:"fixed",title:"\u4e0d\u89c4\u5219\u5e03\u5c40"}],this.layout="horizontal",this.expand=!0,this.editorOptions={language:"json",theme:"vs"},this.name=this.files[0].name,this.title=this.files[0].title,this.appService.theme$.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.editorOptions={language:"json",theme:"dark"===f?"vs-dark":"vs"}})}ngOnInit(){this.getSchema()}refreshLayout(o){setTimeout(()=>{this[o].editor.layout()},100)}getSchema(){const o=this.files.find(e=>e.name===this.name);if(o){if(this.name=o.name,this.title=o.title,o.cache)return this.schema=o.cache,void this.run();this.http.get(`./assets/schema/${o.name}.json`,null,{responseType:"text"}).subscribe(e=>{o.cache=e,this.schema=o.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){const o={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},e="\nimport { Component } from '@angular/core';\nimport { SFSchema } from '@yelon/form';\nimport { NzMessageService } from 'ng-zorro-antd/message';\n\n@Component({\n  selector: 'demo',\n  template: `\n  <sf [schema]=\"schema\" [formData]=\"formData\" [ui]=\"ui\" [layout]=\"layout\"\n      (formSubmit)=\"submit($event)\"\n      (formChange)=\"change($event)\"\n      (formError)=\"error($event)\"></sf>\n    `\n})\nexport class DemoComponent {\n  schema = {schema};\n  formData = {formData};\n  ui = {ui};\n  layout = '{layout}';\n\n  constructor(private msg: NzMessageService) { }\n\n  submit(value: any) {\n    this.msg.success(JSON.stringify(value));\n  }\n\n  change(value: any) {\n    console.log('formChange', value);\n  }\n\n  error(value: any) {\n    console.log('formError', value);\n  }\n}".replace(/\{(\w+)\}/g,(i,a)=>(o[a]||"").trim());this.codeSrv.openOnStackBlitz("sf-validator",e)}onCopy(){(0,B.J)(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(o){this.msg.success(JSON.stringify(o))}change(o){console.log("formChange",o)}valueChange(o){console.log("formChange",o)}error(o){console.log("formError",o)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(M.FB),t.Y36(A.$),t.Y36(M.lP),t.Y36(U.dD),t.Y36(Q.z),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["form-validator"]],viewQuery:function(o,e){if(1&o&&(t.Gf(G,5),t.Gf(I,5),t.Gf(P,5)),2&o){let i;t.iGM(i=t.CRH())&&(e.schemaEditor=i.first),t.iGM(i=t.CRH())&&(e.formCodeEditor=i.first),t.iGM(i=t.CRH())&&(e.uiEditor=i.first)}},decls:34,vars:23,consts:[["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"ml-sm",3,"ngModel","ngModelChange"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"nzTooltipTitle","click"],["nz-icon","",3,"nzType"],["nz-tooltip","","nz-button","",1,"ml-sm",3,"nzTooltipTitle","click"],["nz-icon","","nzType","form"],["nz-icon","","nzType","copy"],["nz-row","",1,"border-bottom-1","pb-sm","mb-md",3,"nzGutter"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModel","options","ngModelChange"],["schemaEditor",""],["nzTitle","Form Data",3,"nzClick"],["formCodeEditor",""],["nzTitle","UI Schema",3,"nzClick"],["uiEditor",""],["nz-col","",3,"nzSpan",4,"ngIf"],[3,"nzValue","nzLabel"],[3,"schema","formData","ui","layout","formSubmit","formChange","formValueChange","formError"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"nz-select",2),t.NdJ("ngModelChange",function(a){return e.name=a})("ngModelChange",function(){return e.getSchema()}),t.YNc(3,H,1,2,"nz-option",3),t.qZA(),t.TgZ(4,"nz-radio-group",4),t.NdJ("ngModelChange",function(a){return e.layout=a}),t.TgZ(5,"label",5),t._uU(6,"\u6c34\u5e73"),t.qZA(),t.TgZ(7,"label",6),t._uU(8,"\u5782\u76f4"),t.qZA(),t.TgZ(9,"label",7),t._uU(10,"\u884c\u5185"),t.qZA()()(),t.TgZ(11,"div",8)(12,"nz-button-group")(13,"button",9),t.NdJ("click",function(){return e.expand=!e.expand}),t._UZ(14,"i",10),t.qZA(),t.TgZ(15,"button",11),t.NdJ("click",function(){return e.openOnStackBlitz()}),t.ALo(16,"i18n"),t._UZ(17,"i",12),t.qZA(),t.TgZ(18,"button",11),t.NdJ("click",function(){return e.onCopy()}),t.ALo(19,"i18n"),t._UZ(20,"i",13),t.qZA()()()(),t.TgZ(21,"div",14)(22,"div",15)(23,"nz-tabset")(24,"nz-tab",16),t.NdJ("nzClick",function(){return e.refreshLayout("schemaEditor")}),t.TgZ(25,"nu-monaco-editor",17,18),t.NdJ("ngModelChange",function(a){return e.schema=a})("ngModelChange",function(){return e.run()}),t.qZA()(),t.TgZ(27,"nz-tab",19),t.NdJ("nzClick",function(){return e.refreshLayout("formCodeEditor")}),t.TgZ(28,"nu-monaco-editor",17,20),t.NdJ("ngModelChange",function(a){return e.formCode=a})("ngModelChange",function(){return e.run()}),t.qZA()(),t.TgZ(30,"nz-tab",21),t.NdJ("nzClick",function(){return e.refreshLayout("uiEditor")}),t.TgZ(31,"nu-monaco-editor",17,22),t.NdJ("ngModelChange",function(a){return e.uiCode=a})("ngModelChange",function(){return e.run()}),t.qZA()()()(),t.YNc(33,k,2,5,"div",23),t.qZA()),2&o&&(t.xp6(1),t.Q6J("nzSpan",18),t.xp6(1),t.Q6J("ngModel",e.name),t.xp6(1),t.Q6J("ngForOf",e.files),t.xp6(1),t.Q6J("ngModel",e.layout),t.xp6(7),t.Q6J("nzSpan",6),t.xp6(2),t.Q6J("nzTooltipTitle",e.expand?"Hide Code":"Show Code"),t.xp6(1),t.MGl("nzType","vertical-",e.expand?"right":"left",""),t.xp6(1),t.Q6J("nzTooltipTitle",t.lcZ(16,19,"app.demo.stackblitz")),t.xp6(3),t.Q6J("nzTooltipTitle",t.lcZ(19,21,"app.demo.copy")),t.xp6(3),t.Q6J("nzGutter",24),t.xp6(1),t.Q6J("nzSpan",12)("hidden",!e.expand),t.xp6(3),t.Q6J("ngModel",e.schema)("options",e.editorOptions),t.xp6(3),t.Q6J("ngModel",e.formCode)("options",e.editorOptions),t.xp6(3),t.Q6J("ngModel",e.uiCode)("options",e.editorOptions),t.xp6(2),t.Q6J("ngIf",e.schemaData))},directives:[y.SK,y.t3,T.Vq,u.JJ,u.On,c.sg,T.Ip,h.Dg,h.Of,h.Bq,b.fY,$.w,b.ix,L.dQ,j.SY,R.Ls,E.xH,E.xw,z,c.O5,Y.k],pipes:[w.C],encapsulation:2,changeDetection:0}),n})(),data:{titleI18n:"app.header.menu.form.validator"}}]}];let W=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[J.m,S.forRoot({defaultOptions:{scrollBeyondLastLine:!1}}),F.Bz.forChild(K)]]}),n})()}}]);