"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[960],{38960:(et,f,r)=>{r.r(f),r.d(f,{FormPagesModule:()=>q});var D=r(52787),t=r(65879),m=r(60095),d=r(96814),S=r(92438),V=r(74825),N=r(48180),J=r(83620),p=r(71993);const g=new t.OlP("NU_MONACO_EDITOR_CONFIG");let C,v=!1,_=(()=>{class a{set disabled(e){this._disabled="string"==typeof e||e,this.setDisabled()}set options(e){this._options={...this._config.defaultOptions,...e}}get options(){return this._options}constructor(e,n,o,i,s){this.el=e,this.doc=o,this.ngZone=i,this.destroy$=s,this._resize$=null,this.height="200px",this.delay=0,this.event=new t.vpe,this._config={baseUrl:"https://cdn.jsdelivr.net/npm/monaco-editor/min",autoFormatTime:100,...n},this.options=this._config.defaultOptions}notifyEvent(e,n){this.ngZone.run(()=>this.event.emit({type:e,editor:this._editor,...n}))}setDisabled(){return this._editor&&this._editor.updateOptions({readOnly:this._disabled}),this}init(){v?C.then(()=>this.initMonaco(this.options,!0)):(v=!0,C=new Promise((e,n)=>{const o=window;if(null==o)return void e();if(o.monaco)return void e();const i=this._config.baseUrl,s=()=>{o.require.config({paths:{vs:`${i}/vs`}}),"function"==typeof this._config.monacoPreLoad&&this._config.monacoPreLoad(),o.require(["vs/editor/editor.main"],()=>{"function"==typeof this._config.monacoLoad&&this._config.monacoLoad(o.monaco),this.initMonaco(this.options,!0),e()},()=>{n("Unable to load editor/editor.main module, please check your network environment.")})};if(o.require)s();else{const l=this.doc.createElement("script");l.type="text/javascript",l.src=`${i}/vs/loader.js`,l.onload=s,l.onerror=()=>n(`Unable to load ${l.src}, please check your network environment.`),this.doc.getElementsByTagName("head")[0].appendChild(l)}}).catch(e=>this.notifyEvent("load-error",{error:e})))}cleanResize(){return this._resize$?.unsubscribe(),this}registerResize(){return this.cleanResize(),this._resize$=(0,S.R)(window,"resize").pipe((0,J.b)(100)).subscribe(()=>{this._editor.layout(),this.notifyEvent("resize")}),this}updateOptions(){this._editor&&this.ngZone.runOutsideAngular(()=>{this._editor.dispose(),this.initMonaco(this._options,!1)})}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>setTimeout(()=>this.init(),+this.delay))}ngOnChanges(e){const n=Object.keys(e);1===n.length&&"disabled"===n[0]||this.updateOptions()}ngOnDestroy(){this.cleanResize(),this._editor&&(this._editor.dispose(),this._editor=void 0)}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(t.SBq),t.Y36(g),t.Y36(d.K0),t.Y36(t.R0b),t.Y36(t.ktI))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["nu-monaco-base"]],inputs:{height:"height",delay:"delay",disabled:"disabled",options:"options"},outputs:{event:"event"},standalone:!0,features:[t.TTD,t.jDz],decls:0,vars:0,template:function(n,o){},encapsulation:2})}return a})(),z=(()=>{class a extends _{constructor(){super(...arguments),this._value="",this.autoFormat=!0,this.onChange=e=>{},this.onTouched=()=>{}}get editor(){return this._editor}initMonaco(e,n){const o=!!this.model;if(o){const l=monaco.editor.getModel(this.model.uri||"");if(l)e.model=l,e.model.setValue(this._value);else{const{value:c,language:h,uri:tt}=this.model;e.model=monaco.editor.createModel(c||this._value,h,tt)}}null!=this._disabled&&(e.readOnly=this._disabled);const i=this._editor=monaco.editor.create(this.el.nativeElement,e);o||i.setValue(this._value),i.onDidChangeModelContent(()=>{const l=i.getValue();this.ngZone.run(()=>{this._value=l,this.onChange(l)})}),i.onDidBlurEditorWidget(()=>this.onTouched()),this.registerResize();const s=n?"init":"re-init";this.autoFormat?(0,V.H)(this._config.autoFormatTime).pipe((0,p.sL)(this.destroy$),(0,N.q)(1)).subscribe(()=>{const l=i.getAction("editor.action.formatDocument");null!=l?l.run().then(()=>this.notifyEvent(s)):this.notifyEvent(s)}):this.notifyEvent(s)}writeValue(e){this._value=e||"",this._editor&&this._editor.setValue(this._value)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this.setDisabled()}static#t=this.\u0275fac=function(){let e;return function(o){return(e||(e=t.n5z(a)))(o||a)}}();static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["nu-monaco-editor"]],hostVars:4,hostBindings:function(n,o){2&n&&t.Udp("display","block")("height",o.height)},inputs:{model:"model",autoFormat:"autoFormat"},exportAs:["nuMonacoEditor"],standalone:!0,features:[t._Bn([{provide:m.JU,useExisting:(0,t.Gpc)(()=>a),multi:!0}]),t.qOj,t.jDz],decls:0,vars:0,template:function(n,o){},encapsulation:2,changeDetection:0})}return a})(),Z=(()=>{class a{static forRoot(e){return{ngModule:a,providers:[{provide:g,useValue:e}]}}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[d.ez]})}return a})();var y=r(980),A=r(24593),x=r(35822),B=r(87691),Q=r(43460),L=r(47535),M=r(42840),U=r(70855),G=r(41958),T=r(10095),j=r(96109),b=r(9691),R=r(90551),E=r(79382),u=r(57907),Y=r(63123);const $=["schemaEditor"],I=["formCodeEditor"],H=["uiEditor"];function w(a,F){if(1&a&&t._UZ(0,"nz-option",24),2&a){const e=F.$implicit;t.Q6J("nzValue",e.name)("nzLabel",e.title)}}function k(a,F){if(1&a){const e=t.EpF();t.TgZ(0,"div",1)(1,"sf",25),t.NdJ("formSubmit",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.submit(o))})("formChange",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.change(o))})("formValueChange",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.valueChange(o))})("formError",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.error(o))}),t.qZA()()}if(2&a){const e=t.oxw();t.Q6J("nzSpan",e.expand?12:24),t.xp6(1),t.Q6J("schema",e.schemaData)("formData",e.formData)("ui",e.uiSchema)("layout",e.layout)}}let O=(()=>{class a{constructor(e,n,o,i,s,l){this.i18n=e,this.codeSrv=n,this.http=o,this.msg=i,this.appService=s,this.cdr=l,this.files=[{name:"basic",title:"\u57fa\u672c"},{name:"conditional",title:"\u6761\u4ef6"},{name:"sort",title:"\u987a\u5e8f"},{name:"validation",title:"\u81ea\u5b9a\u4e49\u6821\u9a8c"},{name:"fixed",title:"\u4e0d\u89c4\u5219\u5e03\u5c40"}],this.layout="horizontal",this.expand=!0,this.editorOptions={language:"json",theme:"vs"},this.name=this.files[0].name,this.title=this.files[0].title,this.appService.theme$.pipe((0,p.sL)()).subscribe(h=>{this.editorOptions={language:"json",theme:"dark"===h?"vs-dark":"vs"}})}ngOnInit(){this.getSchema()}refreshLayout(e){setTimeout(()=>{this[e].editor.layout()},100)}getSchema(){const e=this.files.find(n=>n.name===this.name);if(e){if(this.name=e.name,this.title=e.title,e.cache)return this.schema=e.cache,void this.run();this.http.get(`./assets/schema/${e.name}.json`,null,{responseType:"text"}).subscribe(n=>{e.cache=n,this.schema=e.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){const e={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},n="\nimport { Component } from '@angular/core';\nimport { SFSchema } from '@yelon/form';\nimport { NzMessageService } from 'ng-zorro-antd/message';\n\n@Component({\n  selector: 'demo',\n  template: `\n  <sf [schema]=\"schema\" [formData]=\"formData\" [ui]=\"ui\" [layout]=\"layout\"\n      (formSubmit)=\"submit($event)\"\n      (formChange)=\"change($event)\"\n      (formError)=\"error($event)\"></sf>\n    `\n})\nexport class DemoComponent {\n  schema = {schema};\n  formData = {formData};\n  ui = {ui};\n  layout = '{layout}';\n\n  constructor(private msg: NzMessageService) { }\n\n  submit(value: any) {\n    this.msg.success(JSON.stringify(value));\n  }\n\n  change(value: any) {\n    console.log('formChange', value);\n  }\n\n  error(value: any) {\n    console.log('formError', value);\n  }\n}".replace(/\{(\w+)\}/g,(o,i)=>(e[i]||"").trim());this.codeSrv.openOnStackBlitz("sf-validator",n)}onCopy(){(0,A.J)(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(e){this.msg.success(JSON.stringify(e))}change(e){console.log("formChange",e)}valueChange(e){console.log("formChange",e)}error(e){console.log("formError",e)}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(y.FB),t.Y36(x.$),t.Y36(y.lP),t.Y36(Q.dD),t.Y36(B.z),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["form-validator"]],viewQuery:function(n,o){if(1&n&&(t.Gf($,5),t.Gf(I,5),t.Gf(H,5)),2&n){let i;t.iGM(i=t.CRH())&&(o.schemaEditor=i.first),t.iGM(i=t.CRH())&&(o.formCodeEditor=i.first),t.iGM(i=t.CRH())&&(o.uiEditor=i.first)}},decls:34,vars:23,consts:[["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"ml-sm",3,"ngModel","ngModelChange"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"nzTooltipTitle","click"],["nz-icon","",3,"nzType"],["nz-tooltip","","nz-button","",1,"ml-sm",3,"nzTooltipTitle","click"],["nz-icon","","nzType","form"],["nz-icon","","nzType","copy"],["nz-row","",1,"border-bottom-1","pb-sm","mb-md",3,"nzGutter"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModel","options","ngModelChange"],["schemaEditor",""],["nzTitle","Form Data",3,"nzClick"],["formCodeEditor",""],["nzTitle","UI Schema",3,"nzClick"],["uiEditor",""],["nz-col","",3,"nzSpan",4,"ngIf"],[3,"nzValue","nzLabel"],[3,"schema","formData","ui","layout","formSubmit","formChange","formValueChange","formError"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"nz-select",2),t.NdJ("ngModelChange",function(s){return o.name=s})("ngModelChange",function(){return o.getSchema()}),t.YNc(3,w,1,2,"nz-option",3),t.qZA(),t.TgZ(4,"nz-radio-group",4),t.NdJ("ngModelChange",function(s){return o.layout=s}),t.TgZ(5,"label",5),t._uU(6,"\u6c34\u5e73"),t.qZA(),t.TgZ(7,"label",6),t._uU(8,"\u5782\u76f4"),t.qZA(),t.TgZ(9,"label",7),t._uU(10,"\u884c\u5185"),t.qZA()()(),t.TgZ(11,"div",8)(12,"nz-button-group")(13,"button",9),t.NdJ("click",function(){return o.expand=!o.expand}),t._UZ(14,"i",10),t.qZA(),t.TgZ(15,"button",11),t.NdJ("click",function(){return o.openOnStackBlitz()}),t.ALo(16,"i18n"),t._UZ(17,"i",12),t.qZA(),t.TgZ(18,"button",11),t.NdJ("click",function(){return o.onCopy()}),t.ALo(19,"i18n"),t._UZ(20,"i",13),t.qZA()()()(),t.TgZ(21,"div",14)(22,"div",15)(23,"nz-tabset")(24,"nz-tab",16),t.NdJ("nzClick",function(){return o.refreshLayout("schemaEditor")}),t.TgZ(25,"nu-monaco-editor",17,18),t.NdJ("ngModelChange",function(s){return o.schema=s})("ngModelChange",function(){return o.run()}),t.qZA()(),t.TgZ(27,"nz-tab",19),t.NdJ("nzClick",function(){return o.refreshLayout("formCodeEditor")}),t.TgZ(28,"nu-monaco-editor",17,20),t.NdJ("ngModelChange",function(s){return o.formCode=s})("ngModelChange",function(){return o.run()}),t.qZA()(),t.TgZ(30,"nz-tab",21),t.NdJ("nzClick",function(){return o.refreshLayout("uiEditor")}),t.TgZ(31,"nu-monaco-editor",17,22),t.NdJ("ngModelChange",function(s){return o.uiCode=s})("ngModelChange",function(){return o.run()}),t.qZA()()()(),t.YNc(33,k,2,5,"div",23),t.qZA()),2&n&&(t.xp6(1),t.Q6J("nzSpan",18),t.xp6(1),t.Q6J("ngModel",o.name),t.xp6(1),t.Q6J("ngForOf",o.files),t.xp6(1),t.Q6J("ngModel",o.layout),t.xp6(7),t.Q6J("nzSpan",6),t.xp6(2),t.Q6J("nzTooltipTitle",o.expand?"Hide Code":"Show Code"),t.xp6(1),t.MGl("nzType","vertical-",o.expand?"right":"left",""),t.xp6(1),t.Q6J("nzTooltipTitle",t.lcZ(16,19,"app.demo.stackblitz")),t.xp6(3),t.Q6J("nzTooltipTitle",t.lcZ(19,21,"app.demo.copy")),t.xp6(3),t.Q6J("nzGutter",24),t.xp6(1),t.Q6J("nzSpan",12)("hidden",!o.expand),t.xp6(3),t.Q6J("ngModel",o.schema)("options",o.editorOptions),t.xp6(3),t.Q6J("ngModel",o.formCode)("options",o.editorOptions),t.xp6(3),t.Q6J("ngModel",o.uiCode)("options",o.editorOptions),t.xp6(2),t.Q6J("ngIf",o.schemaData))},dependencies:[d.sg,d.O5,m.JJ,m.On,L.k,M.ix,M.fY,U.w,G.dQ,T.t3,T.SK,j.SY,b.Ip,b.Vq,R.Ls,E.xH,E.xw,u.Of,u.Bq,u.Dg,z,Y.C],encapsulation:2,changeDetection:0})}return a})();var K=r(93285),X=r(30014);const W=[{path:"",component:K.S,children:[{path:"validator/:lang",component:O,data:{titleI18n:"app.header.menu.form.validator"}}]}];let q=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[X.m,Z.forRoot({defaultOptions:{scrollBeyondLastLine:!1}}),D.Bz.forChild(W)]})}return a})()}}]);