import{b as W,c as G}from"./chunk-S7RSDAIA.js";import{a as te}from"./chunk-B6EMJYQ2.js";import{F as Q,H as X,R as ee}from"./chunk-NVF533QB.js";import{Db as I,Eb as e,Fa as M,Fb as T,Gb as k,H as j,Ha as z,Ja as r,Ka as x,Mb as q,Me as Y,Oa as N,Ob as _,Oc as U,Pa as V,Pb as B,Sb as u,Tb as g,Ua as h,Wa as s,Xb as E,Ya as v,da as F,db as b,ha as f,hd as Z,ia as y,ib as c,jb as p,kb as w,kg as J,lc as P,lg as L,ob as S,od as D,oe as $,qd as A,rb as d,rc as R,tb as C,ub as H,va as O,vb as K}from"./chunk-ZKKUKXOF.js";function oe(t,a){if(t&1&&(e(0,`
    `),c(1,"div",13),e(2),w(3,"edit-button",14),e(4,`
    `),p(),e(5,`
    `),w(6,"div",15),e(7,`
  `)),t&2){let l=C();r(2),k(`
      `,l.item.title,`
      `),r(),s("item",l.item),r(3),s("innerHTML",l.item.summary,M)}}function re(t,a){if(t&1){let l=S();e(0,`
          (
          `),c(1,"a",18),d("click",function(){f(l);let o=C(3);return y(o.openOnlineIDE("CodeSandbox",!0))}),e(2),u(3,"i18n"),p(),e(4,`
          )
        `)}t&2&&(r(2),T(g(3,1,"app.demo.code-sandbox-cli")))}function ce(t,a){t&1&&(e(0),u(1,"i18n"),h(2,re,5,3)),t&2&&(k(`
        `,g(1,2,"app.demo.code-sandbox"),`
        `),r(2),b(2,-1))}function pe(t,a){if(t&1){let l=S();e(0,`
      `),c(1,"i",16),d("click",function(){f(l);let o=C();return y(o.openOnlineIDE("CodeSandbox",!0))}),p(),e(2,`
      `),h(3,ce,3,4,"ng-template",null,17,E),e(5,`
    `)}if(t&2){let l=I(4);r(),s("nzTooltipTitle",l)}}function ae(t,a){if(t&1){let l=S();e(0),u(1,"i18n"),c(2,"a",18),d("click",function(){f(l);let o=C();return y(o.openOnlineIDE("StackBlitz",!0))}),e(3),u(4,"i18n"),p(),e(5,`
      )
    `)}t&2&&(k(`
      `,g(1,2,"app.demo.stackblitz"),`
      (
      `),r(3),T(g(4,4,"app.demo.code-sandbox-cli")))}var se=t=>({background:t}),le=t=>({"browser-mockup":t}),de=t=>({"height.px":t}),me=t=>({"browser-scroll":t}),xe=(t,a)=>({"code-expand-icon-hide":t,"code-expand-icon-show":a}),he=(t,a)=>({"code-expand-icon-show":t,"code-expand-icon-hide":a}),_e=t=>({"highlight-wrapper-expand":t}),ue=["*"],Ve=(()=>{let a=class a{set item(n){this._orgItem||(this._orgItem=Z(n));let o={meta:n.meta,code:n.code.trim(),title:this.i18n.get(n.meta.title),summary:this.sanitizer.bypassSecurityTrustHtml(this.i18n.get(n.summary)),browser:+n.meta.browser>0?+n.meta.browser:null,bg:n.meta.bg,urls:n.urls};this._item=o}get item(){return this._item}constructor(n,o,i,m,ie,ne){this.appService=n,this.i18n=o,this.msg=i,this.codeSrv=m,this.sanitizer=ie,this.cdr=ne,this.destroy$=O(V),this.copied=!1,this.theme="default",this.type="default",this.expand=!1}ngOnInit(){this.appService.theme$.pipe(D(this.destroy$)).subscribe(n=>{this.theme=n,this.check()}),this.i18n.change.pipe(j(()=>!!this._orgItem),D(this.destroy$)).subscribe(()=>{this.item.title=this.i18n.get(this._orgItem.meta.title),this.item.summary=this.i18n.get(this._orgItem.summary),this.check()})}check(){this.cdr.markForCheck()}handle(){this.expand=!this.expand,this.check()}openOnlineIDE(n="StackBlitz",o=!1){n==="StackBlitz"?this.codeSrv.openOnStackBlitz(this.item.title,this.item.code,o):this.codeSrv.openOnCodeSandbox(this.item.title,this.item.code,o)}onCopy(n){Y(n).then(()=>{this.msg.success(this.i18n.fanyi("app.demo.copied")),this.copied=!0,this.check(),setTimeout(()=>{this.copied=!1,this.check()},1e3)})}};a.\u0275fac=function(o){return new(o||a)(x(W),x(A),x(ee),x(G),x(U),x(N))},a.\u0275cmp=F({type:a,selectors:[["code-box"]],hostVars:4,hostBindings:function(o,i){o&2&&v("code-box",!0)("expand",i.expand)},inputs:{item:"item",type:"type",expand:"expand"},standalone:!0,features:[q],ngContentSelectors:ue,decls:44,vars:36,consts:[[1,"code-box-demo",3,"ngStyle"],[3,"ngClass","ngStyle"],[3,"ngClass"],[1,"code-box-meta","markdown"],[1,"code-box-actions"],["nz-tooltip","","nz-icon","","nzType","thunderbolt","nzTheme","fill",1,"code-box-code-icon",3,"nzTooltipTitle","click"],["stackblitzTpl",""],["nz-tooltip","","nz-icon","",1,"code-box-code-icon",3,"nzTooltipTitle","nzType","click"],["nz-tooltip","",1,"code-expand-icon",3,"nzTooltipTitle"],["alt","expand code",3,"src","ngClass","click"],[1,"highlight-wrapper",3,"ngClass"],[1,"highlight"],[1,"hljs","language-ts"],[1,"code-box-title"],[3,"item"],[1,"code-box-description",3,"innerHTML"],["nz-tooltip","","nz-icon","","nzType","code-sandbox",1,"code-box-code-icon",3,"nzTooltipTitle","click"],["codeSandboxTpl",""],[3,"click"]],template:function(o,i){if(o&1&&(H(),c(0,"section",0),e(1,`
  `),c(2,"div",1),e(3,`
    `),c(4,"div",2),e(5,`
      `),K(6),e(7,`
    `),p(),e(8,`
  `),p(),e(9,`
`),p(),e(10,`
`),c(11,"section",3),e(12,`
  `),h(13,oe,8,3),c(14,"div",4),e(15,`
    `),h(16,pe,6,1),c(17,"i",5),d("click",function(){return i.openOnlineIDE()}),p(),e(18,`
    `),h(19,ae,6,6,"ng-template",null,6,E),e(21,`
    `),c(22,"i",7),d("click",function(){return i.onCopy(i.item.code)}),u(23,"i18n"),p(),e(24,`
    `),c(25,"i",8),e(26,`
      `),c(27,"img",9),d("click",function(){return i.handle()}),p(),e(28,`
      `),c(29,"img",9),d("click",function(){return i.handle()}),p(),e(30,`
    `),p(),e(31,`
  `),p(),e(32,`
`),p(),e(33,`
`),c(34,"section",10),e(35,`
  `),c(36,"div",11),e(37,`
    `),c(38,"pre",12)(39,"code"),e(40),p()(),e(41,`
  `),p(),e(42,`
`),p(),e(43,`
`)),o&2){let m=I(20);s("ngStyle",_(20,se,i.item.bg)),r(2),s("ngClass",_(22,le,i.item.browser))("ngStyle",_(24,de,i.item.browser)),r(2),s("ngClass",_(26,me,i.item.browser)),r(9),b(13,i.type==="default"?13:-1),r(3),b(16,-1),r(),s("nzTooltipTitle",m),r(5),v("ant-tooltip-open",i.copied),s("nzTooltipTitle",g(23,18,"app.demo.copy"))("nzType",i.copied?"check":"snippets"),r(3),s("nzTooltipTitle",i.expand?"Hide Code":"Show Code"),r(2),s("src",i.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",z)("ngClass",B(28,xe,i.expand,!i.expand)),r(2),s("src",i.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",z)("ngClass",B(31,he,i.expand,!i.expand)),r(5),s("ngClass",_(34,_e,i.expand)),r(6),T(i.item.code)}},dependencies:[R,P,$,X,Q,L,J,te],encapsulation:2,changeDetection:0});let t=a;return t})();export{Ve as a};