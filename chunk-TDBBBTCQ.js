import{a as Wt,b as Zt}from"./chunk-YWXGQQUK.js";import{a as Z,b as K}from"./chunk-F7XR7ZKI.js";import{a as qt}from"./chunk-WUT4MLWW.js";import{a as Pt}from"./chunk-Q6Z7JE74.js";import{E as Qt,G as Ut,P as W}from"./chunk-W6VIWJ3S.js";import{$ as _t,Aa as vt,Ae as M,Cb as w,Cc as P,Ed as Bt,Ee as $t,Fb as y,Gc as at,Hb as f,Hd as U,Ia as F,Ib as N,J as ut,Jb as E,Ka as xt,Kb as Dt,Kd as L,Ma as c,Md as Ft,Na as Tt,Nb as Ot,Ob as it,Pa as J,Pb as j,Qa as v,Qb as R,Rf as Vt,Ub as b,Vb as r,Wb as $,Xa as O,Xb as wt,Ya as yt,Z as zt,Za as kt,ad as Mt,bb as St,bf as q,cb as g,ea as gt,fc as ot,fe as st,ha as _,hb as At,ib as z,jc as Nt,kc as Et,l as ht,lb as It,ma as Ct,mb as X,md as Q,na as I,oa as D,oc as V,r as A,rb as C,s as x,sb as tt,tc as bt,ub as et,uc as rt,va as B,vb as nt,vc as Lt,wb as h,xb as m,xd as Ht,xe as jt,yb as T,ze as Rt}from"./chunk-SN7Y2XRP.js";var ie=["ink"],Jt=["*"],oe=e=>({"ant-anchor-wrapper-horizontal":e}),re=e=>({"ant-anchor-fixed":e});function ae(e,n){}function se(e,n){if(e&1&&(h(0,"nz-affix",2),g(1,ae,0,0,"ng-template",3),m()),e&2){let t=f(),i=b(3);z("nzOffsetTop",t.nzOffsetTop)("nzTarget",t.container),c(),z("ngTemplateOutlet",i)}}function ce(e,n){}function le(e,n){if(e&1&&g(0,ce,0,0,"ng-template",3),e&2){f();let t=b(3);z("ngTemplateOutlet",t)}}function pe(e,n){if(e&1&&(h(0,"div",4)(1,"div",5)(2,"div",6),T(3,"div",7,1),m(),E(5),m()()),e&2){let t=f();It(t.wrapperStyle),X(ot(6,oe,t.nzDirection==="horizontal")),c(),X(ot(8,re,!t.nzAffix&&!t.nzShowInkInFixed))}}var me=["nzTemplate"],fe=["linkTitle"];function de(e,n){if(e&1&&(h(0,"span"),r(1),m()),e&2){let t=f();c(),$(t.titleStr)}}function he(e,n){}function ue(e,n){if(e&1&&g(0,he,0,0,"ng-template",2),e&2){let t=f();z("ngTemplateOutlet",t.titleTpl||t.nzTemplate)}}function ze(e,n){e&1&&E(0)}function Kt(e,n){if(!e||!e.getClientRects().length)return 0;let t=e.getBoundingClientRect();if(t.width||t.height){if(n===window){let i=e.ownerDocument.documentElement;return t.top-i.clientTop}return t.top-n.getBoundingClientRect().top}return t.top}var Yt="ant-anchor-ink-ball-visible",_e="anchor",ge=/#([^#]+)$/,Ce=Ft({passive:!0}),Y=(()=>{let e,n=[],t=[],i,s=[],u=[],k,H=[],lt=[],pt,mt=[],ft=[];return class ct{static{let a=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;e=[M()],i=[M()],k=[M()],pt=[M()],A(null,null,e,{kind:"field",name:"nzShowInkInFixed",static:!1,private:!1,access:{has:o=>"nzShowInkInFixed"in o,get:o=>o.nzShowInkInFixed,set:(o,l)=>{o.nzShowInkInFixed=l}},metadata:a},n,t),A(null,null,i,{kind:"field",name:"nzBounds",static:!1,private:!1,access:{has:o=>"nzBounds"in o,get:o=>o.nzBounds,set:(o,l)=>{o.nzBounds=l}},metadata:a},s,u),A(null,null,k,{kind:"field",name:"nzOffsetTop",static:!1,private:!1,access:{has:o=>"nzOffsetTop"in o,get:o=>o.nzOffsetTop,set:(o,l)=>{o.nzOffsetTop=l}},metadata:a},H,lt),A(null,null,pt,{kind:"field",name:"nzTargetOffset",static:!1,private:!1,access:{has:o=>"nzTargetOffset"in o,get:o=>o.nzTargetOffset,set:(o,l)=>{o.nzTargetOffset=l}},metadata:a},mt,ft),a&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a})}constructor(a,o,l,p,d){this.nzConfigService=a,this.scrollSrv=o,this.cdr=l,this.platform=p,this.renderer=d,this._nzModuleName=_e,this.nzAffix=!0,this.nzShowInkInFixed=x(this,n,!1),this.nzBounds=(x(this,t),x(this,s,5)),this.nzOffsetTop=(x(this,u),x(this,H,void 0)),this.nzTargetOffset=(x(this,lt),x(this,mt,void 0)),this.nzContainer=x(this,ft),this.nzDirection="vertical",this.nzClick=new B,this.nzChange=new B,this.nzScroll=new B,this.visible=!1,this.wrapperStyle={"max-height":"100vh"},this.links=[],this.animating=!1,this.destroy$=new ht,this.doc=_(P)}registerLink(a){this.links.push(a)}unregisterLink(a){this.links.splice(this.links.indexOf(a),1)}getContainer(){return this.container||window}ngAfterViewInit(){this.registerScrollEvent()}ngOnDestroy(){clearTimeout(this.handleScrollTimeoutID),this.destroy$.next(!0),this.destroy$.complete()}registerScrollEvent(){this.platform.isBrowser&&(this.destroy$.next(!0),jt(this.getContainer(),"scroll",Ce).pipe(_t(50),zt(this.destroy$)).subscribe(()=>this.handleScroll()),this.handleScrollTimeoutID=setTimeout(()=>this.handleScroll()))}handleScroll(){if(typeof document>"u"||this.animating)return;let a=[],l=(this.nzTargetOffset?this.nzTargetOffset:this.nzOffsetTop||0)+this.nzBounds;if(this.links.forEach(p=>{let d=ge.exec(p.nzHref.toString());if(!d)return;let S=this.doc.getElementById(d[1]);if(S){let dt=Kt(S,this.getContainer());dt<l&&a.push({top:dt,comp:p})}}),this.visible=!!a.length,!this.visible)this.clearActive(),this.cdr.detectChanges();else{let p=a.reduce((d,S)=>S.top>d.top?S:d);this.handleActive(p.comp)}this.setVisible()}clearActive(){this.links.forEach(a=>{a.unsetActive()})}setActive(a){let o=this.activeLink,l=this.nzCurrentAnchor&&this.links.find(d=>d.nzHref===this.nzCurrentAnchor)||a;if(!l)return;l.setActive();let p=l.getLinkTitleElement();this.nzDirection==="vertical"?this.ink.nativeElement.style.top=`${p.offsetTop+p.clientHeight/2-4.5}px`:this.ink.nativeElement.style.left=`${p.offsetLeft+p.clientWidth/2}px`,this.activeLink=(a||l).nzHref,o!==this.activeLink&&this.nzChange.emit(this.activeLink)}handleActive(a){this.clearActive(),this.setActive(a),this.visible=!0,this.setVisible(),this.nzScroll.emit(a)}setVisible(){this.ink&&(this.visible?this.renderer.addClass(this.ink.nativeElement,Yt):this.renderer.removeClass(this.ink.nativeElement,Yt))}handleScrollTo(a){let o=this.doc.querySelector(a.nzHref);if(!o)return;this.animating=!0;let l=this.scrollSrv.getScroll(this.getContainer()),p=Kt(o,this.getContainer()),d=l+p;d-=this.nzTargetOffset!==void 0?this.nzTargetOffset:this.nzOffsetTop||0,this.scrollSrv.scrollTo(this.getContainer(),d,{callback:()=>{this.animating=!1,this.handleActive(a)}}),this.nzClick.emit(a.nzHref)}ngOnChanges(a){let{nzOffsetTop:o,nzContainer:l,nzCurrentAnchor:p}=a;if(o&&(this.wrapperStyle={"max-height":`calc(100vh - ${this.nzOffsetTop}px)`}),l){let d=this.nzContainer;this.container=typeof d=="string"?this.doc.querySelector(d):d,this.registerScrollEvent()}p&&this.setActive()}static{this.\u0275fac=function(o){return new(o||ct)(v(Rt),v(Vt),v(bt),v(L),v(J))}}static{this.\u0275cmp=O({type:ct,selectors:[["nz-anchor"]],viewQuery:function(o,l){if(o&1&&it(ie,5),o&2){let p;j(p=R())&&(l.ink=p.first)}},inputs:{nzAffix:[2,"nzAffix","nzAffix",rt],nzShowInkInFixed:[2,"nzShowInkInFixed","nzShowInkInFixed",rt],nzBounds:[2,"nzBounds","nzBounds",Lt],nzOffsetTop:[2,"nzOffsetTop","nzOffsetTop",st],nzTargetOffset:[2,"nzTargetOffset","nzTargetOffset",st],nzContainer:"nzContainer",nzCurrentAnchor:"nzCurrentAnchor",nzDirection:"nzDirection"},outputs:{nzClick:"nzClick",nzChange:"nzChange",nzScroll:"nzScroll"},exportAs:["nzAnchor"],features:[St,Ct],ngContentSelectors:Jt,decls:4,vars:1,consts:[["content",""],["ink",""],[3,"nzOffsetTop","nzTarget"],[3,"ngTemplateOutlet"],[1,"ant-anchor-wrapper"],[1,"ant-anchor"],[1,"ant-anchor-ink"],[1,"ant-anchor-ink-ball"]],template:function(o,l){o&1&&(N(),g(0,se,2,3,"nz-affix",2)(1,le,1,1,null,3)(2,pe,6,10,"ng-template",null,0,V)),o&2&&C(l.nzAffix?0:1)},dependencies:[at,K,Z],encapsulation:2,changeDetection:0})}}})(),Xt=(()=>{class e{set nzTitle(t){t instanceof Tt?(this.titleStr=null,this.titleTpl=t):this.titleStr=t}constructor(t,i,s,u){this.elementRef=t,this.anchorComp=i,this.platform=s,this.renderer=u,this.nzHref="#",this.titleStr="",this.nzDirection="vertical"}ngOnInit(){this.anchorComp.registerLink(this),this.nzDirection=this.anchorComp.nzDirection}getLinkTitleElement(){return this.linkTitle.nativeElement}setActive(){this.renderer.addClass(this.elementRef.nativeElement,"ant-anchor-link-active")}unsetActive(){this.renderer.removeClass(this.elementRef.nativeElement,"ant-anchor-link-active")}goToClick(t){t.preventDefault(),t.stopPropagation(),this.platform.isBrowser&&this.anchorComp.handleScrollTo(this)}ngOnDestroy(){this.anchorComp.unregisterLink(this)}static{this.\u0275fac=function(i){return new(i||e)(v(vt),v(Y),v(L),v(J))}}static{this.\u0275cmp=O({type:e,selectors:[["nz-link"]],contentQueries:function(i,s,u){if(i&1&&Ot(u,me,5),i&2){let k;j(k=R())&&(s.nzTemplate=k.first)}},viewQuery:function(i,s){if(i&1&&it(fe,5),i&2){let u;j(u=R())&&(s.linkTitle=u.first)}},hostAttrs:[1,"ant-anchor-link"],inputs:{nzHref:"nzHref",nzTarget:"nzTarget",nzTitle:"nzTitle"},exportAs:["nzLink"],ngContentSelectors:Jt,decls:5,vars:5,consts:[["linkTitle",""],[1,"ant-anchor-link-title",3,"click","href","target"],[3,"ngTemplateOutlet"]],template:function(i,s){if(i&1){let u=w();N(),h(0,"a",1,0),y("click",function(H){return I(u),D(s.goToClick(H))}),g(2,de,2,1,"span")(3,ue,1,1,null,2),m(),g(4,ze,1,0)}i&2&&(z("href",s.nzHref,xt)("target",s.nzTarget),At("title",s.titleStr),c(2),C(s.titleStr?2:3),c(2),C(s.nzDirection==="vertical"?4:-1))},dependencies:[at],encapsulation:2,changeDetection:0})}}return e})(),te=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=yt({type:e})}static{this.\u0275inj=gt({imports:[Y]})}}return e})();var G=class e{router=_(Q);msg=_(W);i18n=_(U);clickToc(n){let t=`#${n}`,i=document.querySelector(t);i&&i.scrollIntoView()}_click(n){let t=n.target;if(!t||!t.dataset||!["a","i"].includes(t.tagName.toLowerCase()))return;let i=t.dataset.anchor;if(i&&i.length>0){q(`${location.href.split("#")[0]}#${i}`).then(()=>{this.msg.success(this.i18n.fanyi("app.content.link.copied"))});return}let s=t.dataset.url;if(t.dataset.toc||s&&s.startsWith("#")){this.clickToc(t.dataset.toc||s.substring(1).replace(/ /g,"-")),n.preventDefault(),n.stopPropagation();return}if(s&&s.startsWith("/")&&!s.startsWith("//")){this.router.navigateByUrl(s);return}}static \u0275fac=function(t){return new(t||e)};static \u0275dir=kt({type:e,selectors:[["","routeTransfer",""]],hostBindings:function(t,i){t&1&&y("click",function(u){return i._click(u)})}})};var xe=["*"];function Te(e,n){if(e&1&&(r(0,`
              `),T(1,"nz-link",3),r(2,`
            `)),e&2){let t=n.$implicit;c(),z("nzHref","#"+t.id)("nzTitle",t.title)}}function ye(e,n){if(e&1&&(r(0,`
            `),et(1,Te,3,2,null,null,tt)),e&2){let t=f().$implicit;c(),nt(t.children)}}function ke(e,n){if(e&1&&(r(0,`
        `),h(1,"nz-link",3),r(2,`
          `),g(3,ye,3,0),m(),r(4,`
      `)),e&2){let t=n.$implicit;c(),z("nzHref","#"+t.id)("nzTitle",t.title),c(2),C(t.children&&t.children.length>0?3:-1)}}function Se(e,n){if(e&1){let t=w();r(0,`
  `),h(1,"nz-affix",1),r(2,`
    `),h(3,"nz-anchor",2),y("nzClick",function(s){I(t);let u=f();return D(u.goLink(s))}),r(4,`
      `),et(5,ke,5,3,null,null,tt),m(),r(7,`
  `),m(),r(8,`
`)}if(e&2){let t=f();c(5),nt(t.data.con.toc)}}function Ae(e,n){if(e&1&&(r(0),h(1,"a",8),r(2," Help us!"),m(),r(3,`
      `)),e&2){let t=f(3);wt(`
        `,t.data.con.meta.i18n==="need-update"?"This article need re-translated, hope that your can PR to translated it.":"This article has not been translated, hope that your can PR to translated it.",`
        `)}}function Ie(e,n){if(e&1&&(r(0,`
    `),h(1,"nz-alert",7),r(2,`
      `),g(3,Ae,4,1,"ng-template",null,0,V),r(5,`
    `),m(),r(6,`
  `)),e&2){let t=b(4);c(),z("nzType","warning")("nzCloseable","true")("nzMessage",t)}}function De(e,n){if(e&1){let t=w();r(0,`
        `),h(1,"div",9),r(2,`
          `),h(3,"span",10),Nt(4,"i18n"),y("click",function(){I(t);let s=f(2);return D(s.copyModule())}),r(5,`
            IMPORT MODULE
          `),m(),r(6,`
        `),m(),r(7,`
      `)}if(e&2){let t=f(2);c(3),z("nzTooltipTitle",Et(4,1,"app.content.copy-import-module")+t.data.con.module)}}function Oe(e,n){if(e&1&&(r(0,`
    `),T(1,"div",11),r(2,`
  `)),e&2){let t=f(2);c(),z("innerHTML",t.data.con.content,F)}}function we(e,n){if(e&1&&(r(0,`
    `),T(1,"h2",12),r(2,`
    `),E(3),r(4,`
  `)),e&2){let t=f(2);c(),Dt("id",t.demoStr),z("innerHTML",t.demoContent,F)}}function Ne(e,n){if(e&1&&(r(0,`
    `),T(1,"div",13),r(2,`
  `)),e&2){let t=f(2);c(),z("innerHTML",t.data.con.api,F)}}function Ee(e,n){if(e&1&&(r(0,`
  `),g(1,Ie,7,3),h(2,"div",4),r(3,`
    `),h(4,"h1",5),r(5,`
      `),h(6,"strong"),r(7),m(),r(8,`
      `),g(9,De,8,3),T(10,"edit-button",6),r(11,`
    `),m(),r(12,`
  `),m(),r(13,`
  `),g(14,Oe,3,1)(15,we,5,2)(16,Ne,3,1)),e&2){let t=f();c(),C(!t.meta.item.i18n||t.data.con.meta.i18n==="need-update"?1:-1),c(6),$(t.meta.item.subtitle||t.meta.item.title),c(2),C(t.data.con.module?9:-1),c(),z("item",t.item),c(4),C(t.data.con.content?14:-1),c(),C(t.data.demo?15:-1),c(),C(t.data.con.api?16:-1)}}var ee=class e{meta=_(Pt);i18n=_(U);msg=_(W);router=_(Q);sanitizer=_(Mt);doc=_(P);i18NChange$;demoStr;demoContent;data={};isBrowser=_(L).isBrowser;codes;item;constructor(){this.i18NChange$=this.i18n.change.pipe(Bt(),ut(()=>!!this.item)).subscribe(()=>{this.init()})}genData(){let n=Ht(this.item),t={demo:n.demo,urls:n.urls,con:n.content[this.i18n.currentLang]||n.content[this.i18n.defaultLang]};t.demo&&this.codes&&this.codes.length&&(this.genDemoTitle(),t.con.toc=this.codes.map(i=>({h:3,id:i.id,title:this.i18n.get(i.meta.title)})).concat({id:"API",title:"API",h:2})),t.con.content&&(t.con.content=this.sanitizer.bypassSecurityTrustHtml(t.con.content)),t.con.api&&(t.con.api=this.sanitizer.bypassSecurityTrustHtml(t.con.api)),t.con.meta.module&&(t.con.module=t.con.meta.module),this.data=t,setTimeout(()=>{let i=this.router.parseUrl(this.router.url).fragment||"";if(i){let s=this.doc.querySelector(`#${i}`);s&&s.scrollIntoView()}},200)}goLink(n){window&&(window.location.hash=n)}genDemoTitle(){this.demoStr=this.i18n.fanyi("app.component.examples"),this.demoContent=this.sanitizer.bypassSecurityTrustHtml(`<a class="lake-link"><i data-anchor="${this.demoStr}"></i></a>${this.demoStr}`)}init(){this.genData(),this.genDemoTitle(),this.isBrowser&&setTimeout(()=>{this.doc.querySelectorAll('[class*="language-"], [class*="lang-"]').forEach(t=>{hljs.highlightBlock(t)})},250)}copyModule(){q(this.data.con.module).then(()=>{this.msg.success(this.i18n.fanyi("app.demo.copied"))})}ngOnInit(){this.init()}ngOnDestroy(){this.i18NChange$.unsubscribe()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=O({type:e,selectors:[["app-docs"]],inputs:{codes:"codes",item:"item"},ngContentSelectors:xe,decls:2,vars:2,consts:[["message",""],["nzOffsetTop","16",1,"toc-affix"],["nzShowInkInFixed","","nzAffix","false",3,"nzClick"],[3,"nzHref","nzTitle"],[1,"markdown"],[1,"flex-center"],[3,"item"],["nzBanner","",1,"my-md",3,"nzType","nzCloseable","nzMessage"],["href","//github.com/hbyunzai/ng-yunzai/issues/74","target","_blank"],[1,"ml-sm"],["nz-tooltip","",1,"copy-import-module",3,"click","nzTooltipTitle"],["routeTransfer","",1,"markdown",3,"innerHTML"],["routeTransfer","",2,"margin","32px 0 24px 0",3,"id","innerHTML"],["routeTransfer","",1,"markdown","api-container",3,"innerHTML"]],template:function(t,i){t&1&&(N(),g(0,Se,9,0)(1,Ee,17,7)),t&2&&(C(i.isBrowser&&(i.data.con.toc!=null&&i.data.con.toc.length)?0:-1),c(),C(i.meta.item?1:-1))},dependencies:[$t,G,K,Z,te,Y,Xt,Zt,Wt,Ut,Qt,qt],encapsulation:2})};export{ee as a};
