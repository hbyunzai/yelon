import{b as ee}from"./chunk-SCMN6VTG.js";import{e as he,i as fe}from"./chunk-HSFJ6G7K.js";import"./chunk-Z4FMCGAN.js";import{a as ge,b as ze,c as ye}from"./chunk-CBCFIN2R.js";import"./chunk-LLT56NTX.js";import"./chunk-PJC7XN3O.js";import"./chunk-VIXGYNFO.js";import{e as ie,f as ne,g as oe,h as re}from"./chunk-CWLYPJ3D.js";import"./chunk-HWVCW4DA.js";import{b as H,c as K}from"./chunk-26YFVAT6.js";import{a as Ce}from"./chunk-7QWQMMPQ.js";import"./chunk-GT7J47QU.js";import{i as le,o as se,p as de,s as pe,t as ce,u as ue}from"./chunk-2I5LH6TG.js";import{F as ae,H as me,R as _e,g as Z,m as X,v as $}from"./chunk-DALIXSDU.js";import{Bb as v,Cb as T,Cg as A,Db as b,Fb as t,Jb as _,Ka as l,Kb as C,Kf as Q,La as h,Lb as g,Lf as P,Mf as G,Nb as W,Nf as J,Pa as F,Pf as U,Qf as Y,Rf as q,Tb as M,Tg as te,Ub as x,Va as N,Xa as s,ea as V,eb as w,fb as D,hb as k,ia as z,ib as I,ja as y,jb as o,kb as r,lb as S,pb as B,pd as j,pe as R,rd as L,sb as p,ub as f,yb as O}from"./chunk-4LVFALOC.js";var be=["schemaEditor"],Me=["formCodeEditor"],xe=["uiEditor"];function Ee(c,u){if(c&1&&(t(0,`
        `),S(1,"nz-option",22),t(2,`
      `)),c&2){let d=u.$implicit;l(),s("nzValue",d.name)("nzLabel",d.title)}}function Ve(c,u){if(c&1){let d=B();t(0,`
    `),o(1,"div",1),t(2,`
      `),o(3,"sf",23),p("formSubmit",function(a){z(d);let e=f();return y(e.submit(a))})("formChange",function(a){z(d);let e=f();return y(e.change(a))})("formValueChange",function(a){z(d);let e=f();return y(e.valueChange(a))})("formError",function(a){z(d);let e=f();return y(e.error(a))}),r(),t(4,`
    `),r(),t(5,`
  `)}if(c&2){let d=f();l(),s("nzSpan",d.expand?12:24),l(2),s("schema",d.schemaData)("formData",d.formData)("ui",d.uiSchema)("layout",d.layout)}}var Fe=`import { Component, inject } from '@angular/core';
import { YelonFormModule, SFLayout, SFSchema, SFUISchema } from '@yelon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'demo',
  template: \`
 <sf [schema]="schema" [formData]="formData" [ui]="ui" [layout]="layout"
      (formSubmit)="submit($event)"
      (formChange)="change($event)"
      (formError)="error($event)"></sf>
    \`,
  standalone: true,
  imports: [YelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {schema};
  formData: Record<string, any> = {formData};
  ui: SFUISchema = {ui};
  layout: SFLayout = '{layout}';

  submit(value: any): void {
    this.msg.success(JSON.stringify(value));
  }

  change(value: any): void {
    console.log('formChange', value);
  }

  error(value: any): void {
    console.log('formError', value);
  }
}`,Se=(()=>{let u=class u{constructor(i,a,e,n,m,ve){this.i18n=i,this.codeSrv=a,this.http=e,this.msg=n,this.appService=m,this.cdr=ve,this.files=[{name:"basic",title:"\u57FA\u672C"},{name:"conditional",title:"\u6761\u4EF6"},{name:"sort",title:"\u987A\u5E8F"},{name:"validation",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C"},{name:"fixed",title:"\u4E0D\u89C4\u5219\u5E03\u5C40"}],this.layout="horizontal",this.expand=!0,this.editorOptions={language:"json",theme:"vs"};let E=0;this.name=this.files[E].name,this.title=this.files[E].title,this.appService.theme$.pipe(j()).subscribe(Te=>{this.editorOptions={language:"json",theme:Te==="dark"?"vs-dark":"vs"}})}ngOnInit(){this.getSchema()}refreshLayout(i){setTimeout(()=>{this[i].editor?.layout()},100)}getSchema(){let i=this.files.find(a=>a.name===this.name);if(i){if(this.name=i.name,this.title=i.title,i.cache){this.schema=i.cache,this.run();return}this.http.get(`./assets/schema/${i.name}.json`,null,{responseType:"text"}).subscribe(a=>{i.cache=a,this.schema=i.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){let i={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},a=Fe.replace(/\{(\w+)\}/g,(e,n)=>(i[n]||"").trim());this.codeSrv.openOnStackBlitz("sf-validator",a)}onCopy(){te(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(i){this.msg.success(JSON.stringify(i))}change(i){console.log("formChange",i)}valueChange(i){console.log("formChange",i)}error(i){console.log("formError",i)}};u.\u0275fac=function(a){return new(a||u)(h(L),h(K),h(A),h(_e),h(H),h(F))},u.\u0275cmp=V({type:u,selectors:[["form-validator"]],viewQuery:function(a,e){if(a&1&&(v(be,5),v(Me,5),v(xe,5)),a&2){let n;T(n=b())&&(e.schemaEditor=n.first),T(n=b())&&(e.formCodeEditor=n.first),T(n=b())&&(e.uiEditor=n.first)}},standalone:!0,features:[W],decls:74,vars:22,consts:[["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModel","ngModelChange"],[1,"ml-sm",3,"ngModel","ngModelChange"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"nzTooltipTitle","click"],["nz-icon","",3,"nzType"],["nz-tooltip","","nz-button","",1,"ml-sm",3,"nzTooltipTitle","click"],["nz-icon","","nzType","form"],["nz-icon","","nzType","copy"],["nz-row","",1,"border-bottom-1","pb-sm","mb-md",3,"nzGutter"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModel","options","ngModelChange"],["schemaEditor",""],["nzTitle","Form Data",3,"nzClick"],["formCodeEditor",""],["nzTitle","UI Schema",3,"nzClick"],["uiEditor",""],[3,"nzValue","nzLabel"],[3,"schema","formData","ui","layout","formSubmit","formChange","formValueChange","formError"]],template:function(a,e){a&1&&(o(0,"div",0),t(1,`
  `),o(2,"div",1),t(3,`
    `),o(4,"nz-select",2),g("ngModelChange",function(m){return C(e.name,m)||(e.name=m),m}),p("ngModelChange",function(){return e.getSchema()}),t(5,`
      `),k(6,Ee,3,2,null,null,D),r(),t(8,`
    `),o(9,"nz-radio-group",3),g("ngModelChange",function(m){return C(e.layout,m)||(e.layout=m),m}),t(10,`
      `),o(11,"label",4),t(12,"\u6C34\u5E73"),r(),t(13,`
      `),o(14,"label",5),t(15,"\u5782\u76F4"),r(),t(16,`
      `),o(17,"label",6),t(18,"\u884C\u5185"),r(),t(19,`
    `),r(),t(20,`
  `),r(),t(21,`
  `),o(22,"div",7),t(23,`
    `),o(24,"nz-button-group"),t(25,`
      `),o(26,"button",8),p("click",function(){return e.expand=!e.expand}),t(27,`
        `),S(28,"i",9),t(29,`
      `),r(),t(30,`
      `),o(31,"button",10),p("click",function(){return e.openOnStackBlitz()}),M(32,"i18n"),t(33,`
        `),S(34,"i",11),t(35,`
      `),r(),t(36,`
      `),o(37,"button",10),p("click",function(){return e.onCopy()}),M(38,"i18n"),t(39,`
        `),S(40,"i",12),t(41,`
      `),r(),t(42,`
    `),r(),t(43,`
  `),r(),t(44,`
`),r(),t(45,`
`),o(46,"div",13),t(47,`
  `),o(48,"div",14),t(49,`
    `),o(50,"nz-tabset"),t(51,`
      `),o(52,"nz-tab",15),p("nzClick",function(){return e.refreshLayout("schemaEditor")}),t(53,`
        `),o(54,"nu-monaco-editor",16,17),g("ngModelChange",function(m){return C(e.schema,m)||(e.schema=m),m}),p("ngModelChange",function(){return e.run()}),r(),t(56,`
      `),r(),t(57,`
      `),o(58,"nz-tab",18),p("nzClick",function(){return e.refreshLayout("formCodeEditor")}),t(59,`
        `),o(60,"nu-monaco-editor",16,19),g("ngModelChange",function(m){return C(e.formCode,m)||(e.formCode=m),m}),p("ngModelChange",function(){return e.run()}),r(),t(62,`
      `),r(),t(63,`
      `),o(64,"nz-tab",20),p("nzClick",function(){return e.refreshLayout("uiEditor")}),t(65,`
        `),o(66,"nu-monaco-editor",16,21),g("ngModelChange",function(m){return C(e.uiCode,m)||(e.uiCode=m),m}),p("ngModelChange",function(){return e.run()}),r(),t(68,`
      `),r(),t(69,`
    `),r(),t(70,`
  `),r(),t(71,`
  `),N(72,Ve,6,5),r(),t(73,`
`)),a&2&&(l(2),s("nzSpan",18),l(2),_("ngModel",e.name),l(2),I(e.files),l(3),_("ngModel",e.layout),l(13),s("nzSpan",6),l(4),s("nzTooltipTitle",e.expand?"Hide Code":"Show Code"),l(2),O("nzType","vertical-",e.expand?"right":"left",""),l(3),s("nzTooltipTitle",x(32,18,"app.demo.stackblitz")),l(6),s("nzTooltipTitle",x(38,20,"app.demo.copy")),l(9),s("nzGutter",24),l(2),s("nzSpan",12)("hidden",!e.expand),l(6),_("ngModel",e.schema),s("options",e.editorOptions),l(6),_("ngModel",e.formCode),s("options",e.editorOptions),l(6),_("ngModel",e.uiCode),s("options",e.editorOptions),l(6),w(72,e.schemaData?72:-1))},dependencies:[$,Z,X,ue,ce,pe,de,le,se,re,oe,ie,ne,q,U,Y,G,J,me,ae,P,Q,ye,ze,ge,ee,fe,he,R],encapsulation:2,changeDetection:0});let c=u;return c})();var mt=[{path:"",component:Ce,children:[{path:"validator/:lang",component:Se,data:{titleI18n:"app.header.menu.form.validator"}}]}];export{mt as routes};
