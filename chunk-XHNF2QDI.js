import{a as Ht,b as Bt}from"./chunk-TRBULLUN.js";import{a as Q,b as U}from"./chunk-3H4FBNJS.js";import{a as Mt}from"./chunk-2IFOQQDU.js";import{a as Ot}from"./chunk-TNQ3PHHZ.js";import{F as bt,H as Lt,R as P}from"./chunk-QDTQCLSP.js";import{Ab as H,Bb as w,C as nt,Cb as s,Db as B,Ea as L,Eb as Ct,Ga as ft,H as ot,Ia as c,Ja as z,Ka as dt,Kb as I,Ma as W,Mb as J,Me as V,Na as ht,Nc as St,Qb as _t,Ra as ut,Rb as xt,Rd as et,Sa as h,Ua as p,Vb as F,X as rt,Yc as R,Z as st,bb as u,bc as Tt,ca as at,cb as Z,cc as X,dc as vt,eb as K,fa as g,fb as Y,gb as d,gc as j,gd as At,ha as v,hb as m,ia as ct,ib as _,ie as It,ja as lt,je as N,k as it,kc as yt,mb as S,nd as Dt,ne as Et,pa as pt,pb as x,pd as $,q as T,qa as y,qc as kt,ra as k,rb as f,rc as tt,sb as A,sd as E,tb as D,ub as gt,ud as wt,xb as zt,xf as Nt,ya as mt,yb as G,za as b,zb as M}from"./chunk-B5KC2RQS.js";var qt=["ink"],$t=["*"],Wt=t=>({"ant-anchor-wrapper-horizontal":t}),Zt=t=>({"ant-anchor-fixed":t});function Kt(t,n){}function Yt(t,n){if(t&1&&(d(0,"nz-affix",2),h(1,Kt,0,0,"ng-template",3),m()),t&2){let o=f(),i=w(3);p("nzOffsetTop",o.nzOffsetTop)("nzTarget",o.container),c(),p("ngTemplateOutlet",i)}}function Gt(t,n){}function Jt(t,n){if(t&1&&h(0,Gt,0,0,"ng-template",3),t&2){f();let o=w(3);p("ngTemplateOutlet",o)}}function Xt(t,n){if(t&1&&(d(0,"div",4)(1,"div",5)(2,"div",6),_(3,"div",7,1),m(),D(5),m()()),t&2){let o=f();p("ngClass",J(3,Wt,o.nzDirection==="horizontal"))("ngStyle",o.wrapperStyle),c(),p("ngClass",J(5,Zt,!o.nzAffix&&!o.nzShowInkInFixed))}}var te=["nzTemplate"],ee=["linkTitle"];function ie(t,n){if(t&1&&(d(0,"span"),s(1),m()),t&2){let o=f();c(),B(o.titleStr)}}function ne(t,n){}function oe(t,n){if(t&1&&h(0,ne,0,0,"ng-template",2),t&2){let o=f();p("ngTemplateOutlet",o.titleTpl||o.nzTemplate)}}function re(t,n){t&1&&D(0)}function Ft(t,n){if(!t||!t.getClientRects().length)return 0;let o=t.getBoundingClientRect();if(o.width||o.height){if(n===window){let i=t.ownerDocument.documentElement;return o.top-i.clientTop}return o.top-n.getBoundingClientRect().top}return o.top}var jt="ant-anchor-ink-ball-visible",se="anchor",ae=/#([^#]+)$/,ce=wt({passive:!0}),q=(()=>{let n=class n{constructor(i,e,r,a,l,C,O){this.doc=i,this.nzConfigService=e,this.scrollSrv=r,this.cdr=a,this.platform=l,this.zone=C,this.renderer=O,this._nzModuleName=se,this.nzAffix=!0,this.nzShowInkInFixed=!1,this.nzBounds=5,this.nzOffsetTop=void 0,this.nzTargetOffset=void 0,this.nzDirection="vertical",this.nzClick=new b,this.nzChange=new b,this.nzScroll=new b,this.visible=!1,this.wrapperStyle={"max-height":"100vh"},this.links=[],this.animating=!1,this.destroy$=new it}registerLink(i){this.links.push(i)}unregisterLink(i){this.links.splice(this.links.indexOf(i),1)}getContainer(){return this.container||window}ngAfterViewInit(){this.registerScrollEvent()}ngOnDestroy(){clearTimeout(this.handleScrollTimeoutID),this.destroy$.next(!0),this.destroy$.complete()}registerScrollEvent(){this.platform.isBrowser&&(this.destroy$.next(!0),this.zone.runOutsideAngular(()=>{nt(this.getContainer(),"scroll",ce).pipe(st(50),rt(this.destroy$)).subscribe(()=>this.handleScroll())}),this.handleScrollTimeoutID=setTimeout(()=>this.handleScroll()))}handleScroll(){if(typeof document>"u"||this.animating)return;let i=[],r=(this.nzTargetOffset?this.nzTargetOffset:this.nzOffsetTop||0)+this.nzBounds;if(this.links.forEach(a=>{let l=ae.exec(a.nzHref.toString());if(!l)return;let C=this.doc.getElementById(l[1]);if(C){let O=Ft(C,this.getContainer());O<r&&i.push({top:O,comp:a})}}),this.visible=!!i.length,!this.visible)this.clearActive(),this.cdr.detectChanges();else{let a=i.reduce((l,C)=>C.top>l.top?C:l);this.handleActive(a.comp)}this.setVisible()}clearActive(){this.links.forEach(i=>{i.unsetActive()})}setActive(i){let e=this.activeLink,r=this.nzCurrentAnchor&&this.links.find(l=>l.nzHref===this.nzCurrentAnchor)||i;if(!r)return;r.setActive();let a=r.getLinkTitleElement();this.nzDirection==="vertical"?this.ink.nativeElement.style.top=`${a.offsetTop+a.clientHeight/2-4.5}px`:this.ink.nativeElement.style.left=`${a.offsetLeft+a.clientWidth/2}px`,this.activeLink=(i||r).nzHref,e!==this.activeLink&&this.nzChange.emit(this.activeLink)}handleActive(i){this.clearActive(),this.setActive(i),this.visible=!0,this.setVisible(),this.nzScroll.emit(i)}setVisible(){this.ink&&(this.visible?this.renderer.addClass(this.ink.nativeElement,jt):this.renderer.removeClass(this.ink.nativeElement,jt))}handleScrollTo(i){let e=this.doc.querySelector(i.nzHref);if(!e)return;this.animating=!0;let r=this.scrollSrv.getScroll(this.getContainer()),a=Ft(e,this.getContainer()),l=r+a;l-=this.nzTargetOffset!==void 0?this.nzTargetOffset:this.nzOffsetTop||0,this.scrollSrv.scrollTo(this.getContainer(),l,{callback:()=>{this.animating=!1,this.handleActive(i)}}),this.nzClick.emit(i.nzHref)}ngOnChanges(i){let{nzOffsetTop:e,nzContainer:r,nzCurrentAnchor:a}=i;if(e&&(this.wrapperStyle={"max-height":`calc(100vh - ${this.nzOffsetTop}px)`}),r){let l=this.nzContainer;this.container=typeof l=="string"?this.doc.querySelector(l):l,this.registerScrollEvent()}a&&this.setActive()}};n.\u0275fac=function(e){return new(e||n)(z(j),z(It),z(Nt),z(Tt),z(E),z(ht),z(W))},n.\u0275cmp=v({type:n,selectors:[["nz-anchor"]],viewQuery:function(e,r){if(e&1&&G(qt,5),e&2){let a;M(a=H())&&(r.ink=a.first)}},inputs:{nzAffix:[2,"nzAffix","nzAffix",X],nzShowInkInFixed:[2,"nzShowInkInFixed","nzShowInkInFixed",X],nzBounds:[2,"nzBounds","nzBounds",vt],nzOffsetTop:[2,"nzOffsetTop","nzOffsetTop",et],nzTargetOffset:[2,"nzTargetOffset","nzTargetOffset",et],nzContainer:"nzContainer",nzCurrentAnchor:"nzCurrentAnchor",nzDirection:"nzDirection"},outputs:{nzClick:"nzClick",nzChange:"nzChange",nzScroll:"nzScroll"},exportAs:["nzAnchor"],standalone:!0,features:[ut,pt,I],ngContentSelectors:$t,decls:4,vars:1,consts:[["content",""],["ink",""],[3,"nzOffsetTop","nzTarget"],[3,"ngTemplateOutlet"],[1,"ant-anchor-wrapper",3,"ngClass","ngStyle"],[1,"ant-anchor",3,"ngClass"],[1,"ant-anchor-ink"],[1,"ant-anchor-ink-ball"]],template:function(e,r){e&1&&(A(),h(0,Yt,2,3,"nz-affix",2)(1,Jt,1,1,null,3)(2,Xt,6,7,"ng-template",null,0,F)),e&2&&u(r.nzAffix?0:1)},dependencies:[yt,kt,tt,U,Q],encapsulation:2,changeDetection:0});let t=n;return T([N()],t.prototype,"nzShowInkInFixed",void 0),T([N()],t.prototype,"nzBounds",void 0),T([N()],t.prototype,"nzOffsetTop",void 0),T([N()],t.prototype,"nzTargetOffset",void 0),t})(),Vt=(()=>{let n=class n{set nzTitle(i){i instanceof dt?(this.titleStr=null,this.titleTpl=i):this.titleStr=i}constructor(i,e,r,a){this.elementRef=i,this.anchorComp=e,this.platform=r,this.renderer=a,this.nzHref="#",this.titleStr="",this.nzDirection="vertical"}ngOnInit(){this.anchorComp.registerLink(this),this.nzDirection=this.anchorComp.nzDirection}getLinkTitleElement(){return this.linkTitle.nativeElement}setActive(){this.renderer.addClass(this.elementRef.nativeElement,"ant-anchor-link-active")}unsetActive(){this.renderer.removeClass(this.elementRef.nativeElement,"ant-anchor-link-active")}goToClick(i){i.preventDefault(),i.stopPropagation(),this.platform.isBrowser&&this.anchorComp.handleScrollTo(this)}ngOnDestroy(){this.anchorComp.unregisterLink(this)}};n.\u0275fac=function(e){return new(e||n)(z(mt),z(q),z(E),z(W))},n.\u0275cmp=v({type:n,selectors:[["nz-link"]],contentQueries:function(e,r,a){if(e&1&&zt(a,te,5),e&2){let l;M(l=H())&&(r.nzTemplate=l.first)}},viewQuery:function(e,r){if(e&1&&G(ee,5),e&2){let a;M(a=H())&&(r.linkTitle=a.first)}},hostAttrs:[1,"ant-anchor-link"],inputs:{nzHref:"nzHref",nzTarget:"nzTarget",nzTitle:"nzTitle"},exportAs:["nzLink"],standalone:!0,features:[I],ngContentSelectors:$t,decls:5,vars:5,consts:[["linkTitle",""],[1,"ant-anchor-link-title",3,"click","href","title","target"],[3,"ngTemplateOutlet"]],template:function(e,r){if(e&1){let a=S();A(),d(0,"a",1,0),x("click",function(C){return y(a),k(r.goToClick(C))}),h(2,ie,2,1,"span")(3,oe,1,1,null,2),m(),h(4,re,1,0)}e&2&&(p("href",r.nzHref,ft)("title",r.titleStr)("target",r.nzTarget),c(2),u(r.titleStr?2:3),c(2),u(r.nzDirection==="vertical"?4:-1))},dependencies:[tt],encapsulation:2,changeDetection:0});let t=n;return t})(),Pt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=ct({type:n}),n.\u0275inj=at({imports:[q]});let t=n;return t})();var Qt=(()=>{let n=class n{constructor(){this.router=g(R),this.msg=g(P),this.i18n=g($)}clickToc(i){let e=`#${i}`,r=document.querySelector(e);r&&r.scrollIntoView()}_click(i){let e=i.target;if(!e||!e.dataset||!["a","i"].includes(e.tagName.toLowerCase()))return;let r=e.dataset.anchor;if(r&&r.length>0){V(`${location.href.split("#")[0]}#${r}`).then(()=>{this.msg.success(this.i18n.fanyi("app.content.link.copied"))});return}let a=e.dataset.url;if(e.dataset.toc||a&&a.startsWith("#")){this.clickToc(e.dataset.toc||a.substring(1).replace(/ /g,"-")),i.preventDefault(),i.stopPropagation();return}if(a&&a.startsWith("/")&&!a.startsWith("//")){this.router.navigateByUrl(a);return}}};n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=lt({type:n,selectors:[["","routeTransfer",""]],hostBindings:function(e,r){e&1&&x("click",function(l){return r._click(l)})},standalone:!0});let t=n;return t})();var pe=["*"];function me(t,n){if(t&1&&(s(0,`
              `),_(1,"nz-link",3),s(2,`
            `)),t&2){let o=n.$implicit;c(),p("nzHref","#"+o.id)("nzTitle",o.title)}}function fe(t,n){if(t&1&&(s(0,`
            `),K(1,me,3,2,null,null,Z)),t&2){let o=f().$implicit;c(),Y(o.children)}}function de(t,n){if(t&1&&(s(0,`
        `),d(1,"nz-link",3),s(2,`
          `),h(3,fe,3,0),m(),s(4,`
      `)),t&2){let o=n.$implicit;c(),p("nzHref","#"+o.id)("nzTitle",o.title),c(2),u(o.children&&o.children.length>0?3:-1)}}function he(t,n){if(t&1){let o=S();s(0,`
  `),d(1,"nz-affix",1),s(2,`
    `),d(3,"nz-anchor",2),x("nzClick",function(e){y(o);let r=f();return k(r.goLink(e))}),s(4,`
      `),K(5,de,5,3,null,null,Z),m(),s(7,`
  `),m(),s(8,`
`)}if(t&2){let o=f();c(5),Y(o.data.con.toc)}}function ue(t,n){if(t&1&&(s(0),d(1,"a",8),s(2," Help us!"),m(),s(3,`
      `)),t&2){let o=f(3);Ct(`
        `,o.data.con.meta.i18n==="need-update"?"This article need re-translated, hope that your can PR to translated it.":"This article has not been translated, hope that your can PR to translated it.",`
        `)}}function ge(t,n){if(t&1&&(s(0,`
    `),d(1,"nz-alert",7),s(2,`
      `),h(3,ue,4,1,"ng-template",null,0,F),s(5,`
    `),m(),s(6,`
  `)),t&2){let o=w(4);c(),p("nzType","warning")("nzCloseable","true")("nzMessage",o)}}function ze(t,n){if(t&1){let o=S();s(0,`
        `),d(1,"div",9),s(2,`
          `),d(3,"span",10),_t(4,"i18n"),x("click",function(){y(o);let e=f(2);return k(e.copyModule())}),s(5,`
            IMPORT MODULE
          `),m(),s(6,`
        `),m(),s(7,`
      `)}if(t&2){let o=f(2);c(3),p("nzTooltipTitle",xt(4,1,"app.content.copy-import-module")+o.data.con.module)}}function Ce(t,n){if(t&1&&(s(0,`
    `),_(1,"div",11),s(2,`
  `)),t&2){let o=f(2);c(),p("innerHTML",o.data.con.content,L)}}function _e(t,n){if(t&1&&(s(0,`
    `),_(1,"h2",12),s(2,`
    `),D(3),s(4,`
  `)),t&2){let o=f(2);c(),gt("id",o.demoStr),p("innerHTML",o.demoContent,L)}}function xe(t,n){if(t&1&&(s(0,`
    `),_(1,"div",13),s(2,`
  `)),t&2){let o=f(2);c(),p("innerHTML",o.data.con.api,L)}}function Te(t,n){if(t&1&&(s(0,`
  `),h(1,ge,7,3),d(2,"div",4),s(3,`
    `),d(4,"h1",5),s(5,`
      `),d(6,"strong"),s(7),m(),s(8,`
      `),h(9,ze,8,3),_(10,"edit-button",6),s(11,`
    `),m(),s(12,`
  `),m(),s(13,`
  `),h(14,Ce,3,1)(15,_e,5,2)(16,xe,3,1)),t&2){let o=f();c(),u(!o.meta.item.i18n||o.data.con.meta.i18n==="need-update"?1:-1),c(6),B(o.meta.item.subtitle||o.meta.item.title),c(2),u(o.data.con.module?9:-1),c(),p("item",o.item),c(4),u(o.data.con.content?14:-1),c(),u(o.data.demo?15:-1),c(),u(o.data.con.api?16:-1)}}var xi=(()=>{let n=class n{constructor(){this.meta=g(Ot),this.i18n=g($),this.msg=g(P),this.router=g(R),this.sanitizer=g(St),this.doc=g(j),this.data={},this.isBrowser=g(E).isBrowser,this.i18NChange$=this.i18n.change.pipe(Dt(),ot(()=>!!this.item)).subscribe(()=>{this.init()})}genData(){let i=At(this.item),e={demo:i.demo,urls:i.urls,con:i.content[this.i18n.currentLang]||i.content[this.i18n.defaultLang]};e.demo&&this.codes&&this.codes.length&&(this.genDemoTitle(),e.con.toc=this.codes.map(r=>({h:3,id:r.id,title:this.i18n.get(r.meta.title)})).concat({id:"API",title:"API",h:2})),e.con.content&&(e.con.content=this.sanitizer.bypassSecurityTrustHtml(e.con.content)),e.con.api&&(e.con.api=this.sanitizer.bypassSecurityTrustHtml(e.con.api)),e.con.meta.module&&(e.con.module=e.con.meta.module),this.data=e,setTimeout(()=>{let r=this.router.parseUrl(this.router.url).fragment||"";if(r){let a=this.doc.querySelector(`#${r}`);a&&a.scrollIntoView()}},200)}goLink(i){window&&(window.location.hash=i)}genDemoTitle(){this.demoStr=this.i18n.fanyi("app.component.examples"),this.demoContent=this.sanitizer.bypassSecurityTrustHtml(`<a class="lake-link"><i data-anchor="${this.demoStr}"></i></a>${this.demoStr}`)}init(){this.genData(),this.genDemoTitle(),this.isBrowser&&setTimeout(()=>{let i=this.doc.querySelectorAll('[class*="language-"], [class*="lang-"]');for(let e=0,r;r=i[e++];)hljs.highlightBlock(r)},250)}copyModule(){V(this.data.con.module).then(()=>{this.msg.success(this.i18n.fanyi("app.demo.copied"))})}ngOnInit(){this.init()}ngOnDestroy(){this.i18NChange$.unsubscribe()}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=v({type:n,selectors:[["app-docs"]],inputs:{codes:"codes",item:"item"},standalone:!0,features:[I],ngContentSelectors:pe,decls:2,vars:2,consts:[["message",""],["nzOffsetTop","16",1,"toc-affix"],["nzShowInkInFixed","","nzAffix","false",3,"nzClick"],[3,"nzHref","nzTitle"],[1,"markdown"],[1,"flex-center"],[3,"item"],["nzBanner","",1,"my-md",3,"nzType","nzCloseable","nzMessage"],["href","//github.com/hbyunzai/ng-yunzai/issues/74","target","_blank"],[1,"ml-sm"],["nz-tooltip","",1,"copy-import-module",3,"click","nzTooltipTitle"],["routeTransfer","",1,"markdown",3,"innerHTML"],["routeTransfer","",2,"margin","32px 0 24px 0",3,"id","innerHTML"],["routeTransfer","",1,"markdown","api-container",3,"innerHTML"]],template:function(e,r){e&1&&(A(),h(0,he,9,0)(1,Te,17,7)),e&2&&(u(r.isBrowser&&(r.data.con.toc!=null&&r.data.con.toc.length)?0:-1),c(),u(r.meta.item?1:-1))},dependencies:[Et,Qt,U,Q,Pt,q,Vt,Bt,Ht,Lt,bt,Mt],encapsulation:2});let t=n;return t})();export{xi as a};