import{a as wi,b as Ge}from"./chunk-XE5NLORM.js";import{d as Ke,e as Xe}from"./chunk-LRY5ZUN5.js";import{a as li}from"./chunk-GZAVAJ4I.js";import{a as ge}from"./chunk-QDLDUTZF.js";import{a as Ci,b as bi}from"./chunk-5EFYZ4FU.js";import"./chunk-6ELSXKNA.js";import{a as qe,b as zi}from"./chunk-SU56HIQO.js";import{a as xi,b as hi}from"./chunk-QS4PKLMP.js";import{a as vi,b as gi,c as yi}from"./chunk-OFMAY2AV.js";import{a as fi,d as _i,e as Je}from"./chunk-MRX2QMPA.js";import"./chunk-GYXAVGIK.js";import{a as Si}from"./chunk-2KDP4UT7.js";import"./chunk-SJZPH55C.js";import{E as Ye,G as pi,I as Di,N as Ti,P as Z,d as ri,g as We,m as Qe,v as Ze,x as si,y as di}from"./chunk-O6WTCFWA.js";import{$h as ci,Ag as ti,Bh as $e,Cb as d,Cd as Ot,Da as me,Db as X,Dh as ai,Eb as ee,Eh as je,Fa as fe,Fb as Ct,Fc as zt,Fd as ve,Gb as bt,Gc as te,Ha as xt,Hb as ke,Hc as z,Ia as r,Ib as Ie,Ic as St,Id as Ht,Ig as ii,J as ze,Jd as Ve,Lg as ni,Mb as L,Md as E,Mg as I,Na as Ee,Nb as Dt,Ng as Ue,Ob as T,Oc as ie,Oe as Vt,Pb as _e,Pd as At,Qa as h,Qb as st,Qc as wt,Ra as Me,Rb as t,Rc as Oe,Rd as Re,Sb as U,Tb as N,Ub as Tt,Ug as oe,Vb as $,Vc as Lt,Wa as g,Wb as j,Wd as M,We as Pe,Xb as W,Y as ue,Ya as ht,Yd as Be,Za as Ne,Zf as Ut,_f as $t,_g as ae,a as lt,ac as dt,ah as Q,bh as re,bi as ui,da as Se,db as J,ea as we,ei as mi,fb as y,fc as Fe,fh as oi,g as ce,gc as k,gg as jt,ha as u,hb as x,i as vt,ib as O,id as Et,kb as H,kc as R,kg as Wt,la as _,lb as A,lc as B,ld as He,m as gt,ma as v,mb as p,md as Mt,mf as Rt,mg as Qt,n as G,nb as l,nd as pt,nf as Bt,ng as Zt,ob as s,od as Nt,og as Yt,pb as m,pc as P,pd as kt,qa as K,qd as Ae,qf as Pt,ra as Le,rd as It,rg as Jt,sg as qt,ud as ne,ug as Gt,vb as V,vd as Ft,wb as b,wg as Kt,xg as Xt,ya as yt,zb as f,zg as ei}from"./chunk-C5ENAQHW.js";var et=class n{cookieSrv=u(Rt);msg=u(Z);key="test-key";value;constructor(){this.get()}get(){this.value=this.cookieSrv.get(this.key)}set(i){this.cookieSrv.put(this.key,(+new Date).toString(),i),this.msg.success("Success")}remove(){this.cookieSrv.remove(this.key)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-demo"]],decls:16,vars:1,consts:[["classs","mb-md"],["nz-button","",3,"click"]],template:function(e,o){e&1&&(t(0,`
    `),l(1,"p",0),t(2),s(),t(3,`
    `),l(4,"button",1),f("click",function(){return o.get()}),t(5,"Get"),s(),t(6,`
    `),l(7,"button",1),f("click",function(){return o.set()}),t(8,"Set"),s(),t(9,`
    `),l(10,"button",1),f("click",function(){return o.set({expires:10})}),t(11,"Set 10s expired"),s(),t(12,`
    `),l(13,"button",1),f("click",function(){return o.remove()}),t(14,"Remove"),s(),t(15,`
  `)),e&2&&(r(2),N("Result: ",o.value||"NULL"))},dependencies:[re,Q,oe,ae],encapsulation:2})};var tt=class n{displayNav=new G(!0);displayAside=new G(!0);displayReuseTab=new G(!0);$destroy=new gt;activatedRoute=u(Ae);constructor(){this.activatedRoute.queryParams.pipe(ue(this.$destroy)).subscribe(i=>{if(i.displayNav)try{let e=i.displayNav;/true/i.test(e)&&this.display("nav"),/false/i.test(e)&&this.hide("nav")}catch{throw Error("Error: displayNav is not a boolean value.")}if(i.displayReusetab)try{let e=i.displayReusetab;/true/i.test(e)&&this.display("reuseTab"),/false/i.test(e)&&this.hide("reuseTab")}catch{throw Error("Error: displayReuseTab is not a boolean value.")}if(i.displayAside)try{let e=i.displayAside;/true/i.test(e)&&this.display("aside"),/false/i.test(e)&&this.hide("aside")}catch{throw Error("Error: displayAside is not a boolean value.")}})}display(i){switch(i){case"nav":this.displayNav.next(!0);break;case"aside":this.displayAside.next(!0);break;case"reuseTab":this.displayReuseTab.next(!0);break}}hide(i){switch(i){case"nav":this.displayNav.next(!1);break;case"aside":this.displayAside.next(!1);break;case"reuseTab":this.displayReuseTab.next(!1);break}}listen(i,e){this.displayNav.pipe(ue(this.$destroy)).subscribe(o=>{i==="nav"&&(e(o),Ve())}),this.displayAside.pipe(ue(this.$destroy)).subscribe(o=>{i==="aside"&&(e(o),Ve())}),this.displayReuseTab.pipe(ue(this.$destroy)).subscribe(o=>{i==="reuseTab"&&(e(o),Ve())})}ngOnDestroy(){this.$destroy.complete()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Se({token:n,factory:n.\u0275fac,providedIn:"root"})};var Oi=["host"],Hi=["*"];function Ai(n,i){n&1&&(t(0,`
      `),ee(1),t(2,`
    `))}var q=class n{host;hidden="none";direction="right";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["layout-default-header-item"]],viewQuery:function(e,o){if(e&1&&bt(Oi,7),e&2){let a;ke(a=Ie())&&(o.host=a.first)}},inputs:{hidden:"hidden",direction:"direction"},standalone:!1,ngContentSelectors:Hi,decls:4,vars:0,consts:[["host",""]],template:function(e,o){e&1&&(X(),t(0,`
    `),g(1,Ai,3,0,"ng-template",null,0,P),t(3,`
  `))},encapsulation:2})};var ct={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",logoLink:"/",showHeaderCollapse:!0,showSiderCollapse:!1,hideAside:!1,hideHeader:!1},Y=class n{settings=u(M);_options$=new G(ct);_options=ct;bm=u(oi);get options(){return this._options}get options$(){return this._options$.asObservable()}get collapsedIcon(){let i=this.settings.layout.collapsed,e=i?"unfold":"fold";return this.settings.layout.direction==="rtl"&&(e=i?"fold":"unfold"),`menu-${e}`}constructor(){let i="only screen and (max-width: 767.99px)";this.bm.observe(i).pipe(E()).subscribe(e=>this.checkMedia(e.matches)),this.checkMedia(this.bm.isMatched(i))}checkMedia(i){this.settings.setLayout("collapsed",i)}notify(){this._options$.next(this._options)}setOptions(i){this._options=lt(lt({},ct),i),this.notify()}toggleCollapsed(i){this.settings.setLayout("collapsed",i??!this.settings.layout.collapsed),this.notify()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Se({token:n,factory:n.\u0275fac,providedIn:"root"})};var he=n=>({$implicit:n});function Ri(n,i){if(n&1&&(t(0,`
        `),m(1,"nz-icon",3),t(2,`
      `)),n&2){let e=d(2).$implicit;r(),p("nzType",e.value)("nzTheme",e.theme)("nzSpin",e.spin)("nzTwotoneColor",e.twoToneColor)("nzIconfont",e.iconfont)("nzRotate",e.rotate)}}function Bi(n,i){if(n&1&&(t(0,`
        `),m(1,"nz-icon",4),t(2,`
      `)),n&2){let e=d(2).$implicit;r(),p("nzIconfont",e.iconfont)}}function Pi(n,i){if(n&1&&(t(0,`
        `),m(1,"img",5),t(2,`
      `)),n&2){let e=d(2).$implicit;r(),p("src",e.value,fe)}}function Ui(n,i){if(n&1&&(t(0,`
        `),m(1,"span",6),t(2,`
      `)),n&2){let e=d(2).$implicit;r(),p("innerHTML",e.value,me)}}function $i(n,i){if(n&1&&(t(0,`
        `),m(1,"i"),t(2,`
      `)),n&2){let e=d(2).$implicit;r(),st(dt("sidebar-nav__item-icon ",e.value))}}function ji(n,i){if(n&1&&(t(0,`
    `),y(1,Ri,3,6)(2,Bi,3,1)(3,Pi,3,1)(4,Ui,3,1)(5,$i,3,3),t(6,`
  `)),n&2){let e,o=d().$implicit;r(),x((e=o.type)==="icon"?1:e==="iconfont"?2:e==="img"?3:e==="svg"?4:5)}}function Wi(n,i){if(n&1&&(t(0,`
  `),y(1,ji,7,1)),n&2){let e=i.$implicit;r(),x(e?1:-1)}}function Qi(n,i){n&1&&(t(0,`
        `),m(1,"li",7),t(2,`
      `))}function Zi(n,i){}function Yi(n,i){if(n&1&&(t(0,`
                  `),l(1,"span",11),t(2,`
                    `),g(3,Zi,0,0,"ng-template",12),t(4,`
                  `),s(),t(5,`
                `)),n&2){let e=d(5).$implicit;d(2);let o=L(1);r(),p("nzTooltipTitle",e.text),r(2),p("ngTemplateOutlet",o)("ngTemplateOutletContext",k(3,he,e.icon))}}function Ji(n,i){}function qi(n,i){if(n&1&&(t(0,`
                  `),g(1,Ji,0,0,"ng-template",12),t(2,`
                `)),n&2){let e=d(5).$implicit;d(2);let o=L(1);r(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",k(2,he,e.icon))}}function Gi(n,i){if(n&1&&(t(0,`
                `),y(1,Yi,6,5)(2,qi,3,4)),n&2){let e=d(6);r(),x(e.collapsed?1:2)}}function Ki(n,i){if(n&1){let e=b();t(0,`
            `),l(1,"a",9),f("click",function(){_(e);let a=d(3).$implicit,c=d(2);return v(c.to(a))})("mouseenter",function(){_(e);let a=d(5);return v(a.closeSubMenu())}),t(2,`
              `),y(3,Gi,3,1),m(4,"span",10),t(5,`
            `),s(),t(6,`
          `)}if(n&2){let e=d(3).$implicit;r(),T("sidebar-nav__item-disabled",e.disabled),J("data-id",e._id),r(2),x(e._needIcon?3:-1),r(),p("innerHTML",e._text,me),J("title",e.text)}}function Xi(n,i){}function en(n,i){if(n&1){let e=b();t(0,`
            `),l(1,"a",9),f("click",function(){_(e);let a=d(3).$implicit,c=d(2);return v(c.toggleOpen(a))})("mouseenter",function(a){_(e);let c=d(3).$implicit,C=d(2);return v(C.showSubMenu(a,c))}),t(2,`
              `),g(3,Xi,0,0,"ng-template",12),t(4,`
              `),m(5,"span",10),t(6,`
              `),m(7,"i",13),t(8,`
            `),s(),t(9,`
          `)}if(n&2){let e=d(3).$implicit;d(2);let o=L(1);r(3),p("ngTemplateOutlet",o)("ngTemplateOutletContext",k(4,he,e.icon)),r(2),p("innerHTML",e._text,me),J("title",e.text)}}function tn(n,i){if(n&1&&(t(0,`
            `),m(1,"nz-badge",14),t(2,`
          `)),n&2){let e=d(3).$implicit;r(),p("nzCount",e.badge)("nzDot",e.badgeDot)("nzOverflowCount",e.badgeOverflowCount?e.badgeOverflowCount:9)}}function nn(n,i){}function on(n,i){if(n&1&&(t(0,`
            `),l(1,"ul"),t(2,`
              `),g(3,nn,0,0,"ng-template",12),t(4,`
            `),s(),t(5,`
          `)),n&2){let e=d(3).$implicit;d(2);let o=L(4);r(),st(dt("sidebar-nav sidebar-nav__sub sidebar-nav__depth",e._depth)),r(2),p("ngTemplateOutlet",o)("ngTemplateOutletContext",k(5,he,e.children))}}function an(n,i){if(n&1&&(t(0,`
        `),l(1,"li",8),t(2,`
          `),t(3,`
          `),y(4,Ki,7,6),y(5,en,10,6),y(6,tn,3,3),y(7,on,6,7),s(),t(8,`
      `)),n&2){let e=d(2).$implicit;r(),T("sidebar-nav__selected",e._selected)("sidebar-nav__open",e.open),r(3),x(e.children.length===0?4:-1),r(),x(e.children.length>0?5:-1),r(),x(e.badge?6:-1),r(),x(e.children.length>0?7:-1)}}function rn(n,i){if(n&1&&(t(0,`
      `),y(1,Qi,3,0)(2,an,9,8)),n&2){let e=d().$implicit;r(),x(e.render_type==="divider"?1:2)}}function ln(n,i){if(n&1&&(t(0,`
    `),y(1,rn,3,1)),n&2){let e=i.$implicit;r(),x(e._hidden!==!0?1:-1)}}function sn(n,i){if(n&1&&(t(0,`
  `),H(1,ln,2,1,null,null,O)),n&2){let e=i.$implicit;r(),A(e)}}function dn(n,i){if(n&1&&(t(0,`
      `),l(1,"li",15),t(2,`
        `),m(3,"span",16),t(4,`
      `),s(),t(5,`
    `)),n&2){let e=d().$implicit;r(3),p("innerHTML",e._text,me)}}function pn(n,i){}function cn(n,i){if(n&1&&(t(0,`
    `),y(1,dn,6,1),g(2,pn,0,0,"ng-template",12),t(3,`
  `)),n&2){let e=i.$implicit;d();let o=L(4);r(),x(e.group?1:-1),r(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",k(3,he,e.children))}}var ut="sidebar-nav__floating-show",mt="sidebar-nav__floating",ye=class ye{doc=u(K);win=u(li);router=u(ne);render=u(Ee);menuSrv=u(Re);settings=u(M);cdr=u(te);ngZone=u(Ne);sanitizer=u(Et);bodyEl;destroy$=u(Le);floatingEl;dir=u(Be).valueSignal;list=[];disabledAcl=!1;autoCloseUnderPad=!0;recursivePath=!0;hideEmptyChildren=!0;set openStrictly(i){this.menuSrv.openStrictly=i}maxLevelIcon=3;select=new ht;get collapsed(){return this.settings.layout.collapsed}getLinkNode(i){return i=i.nodeName==="A"?i:i.parentNode,i.nodeName!=="A"?null:i}floatingClickHandle(i){i.stopPropagation();let e=this.getLinkNode(i.target);if(e==null)return!1;let o=+e.dataset.id;if(isNaN(o))return!1;let a;return this.menuSrv.visit(this.list,c=>{!a&&c._id===o&&(a=c)}),this.to(a),this.hideAll(),i.preventDefault(),!1}clearFloating(){this.floatingEl&&(this.floatingEl.removeEventListener("click",this.floatingClickHandle.bind(this)),this.floatingEl.parentNode?.removeChild(this.floatingEl))}genFloating(){this.clearFloating(),this.floatingEl=this.render.createElement("div"),this.floatingEl.classList.add(`${mt}-container`),this.floatingEl.addEventListener("click",this.floatingClickHandle.bind(this),!1),this.bodyEl.appendChild(this.floatingEl)}genSubNode(i,e){let o=`_sidebar-nav-${e._id}`,c=(e.badge?i.nextElementSibling.nextElementSibling:i.nextElementSibling).cloneNode(!0);return c.id=o,c.classList.add(mt),c.addEventListener("mouseleave",()=>{c.classList.remove(ut)},!1),this.floatingEl.appendChild(c),c}hideAll(){this.floatingEl.querySelectorAll(`.${mt}`).forEach(e=>e.classList.remove(ut))}calPos(i,e){let o=i.getBoundingClientRect(),a=Math.max(this.doc.documentElement.scrollTop,this.bodyEl.scrollTop),c=Math.max(this.doc.documentElement.clientHeight,this.bodyEl.clientHeight),C=5,D=-C;c<o.top+e.clientHeight&&(D=o.top+e.clientHeight-c+C),e.style.top=`${o.top+a-D}px`,this.dir()==="rtl"?e.style.right=`${o.width+C}px`:e.style.left=`${o.right+C}px`}showSubMenu(i,e){if(this.collapsed!==!0)return;i.preventDefault();let o=i.target;this.genFloating();let a=this.genSubNode(o,e);this.hideAll(),a.classList.add(ut),this.calPos(o,a)}to(i){if(this.select.emit(i),!i.disabled){if(i.externalLink){i.target==="_blank"?this.win.open(i.externalLink):(localStorage.setItem("iframeSrc",i.externalLink),this.menuSrv.setRouterLink(i.externalLink),this.router.navigate(["iframePage"]));return}this.ngZone.run(()=>this.router.navigateByUrl(i.link))}}toggleOpen(i){this.menuSrv.toggleOpen(i)}_click(){this.isPad&&this.collapsed&&(this.openAside(!1),this.hideAll())}closeSubMenu(){this.collapsed&&this.hideAll()}openByUrl(i){let{menuSrv:e,recursivePath:o}=this;this.menuSrv.open(e.find({url:i,recursive:o}))}ngOnInit(){let{doc:i,router:e,menuSrv:o,settings:a,cdr:c}=this;this.bodyEl=i.querySelector("body"),o.change.pipe(E(this.destroy$)).subscribe(C=>{o.visit(C,(D,oo,Fi)=>{D._text=this.sanitizer.bypassSecurityTrustHtml(D.text),D._needIcon=Fi<=this.maxLevelIcon&&!!D.icon,D._aclResult||(this.disabledAcl?D.disabled=!0:D._hidden=!0);let pe=D.icon;pe&&pe.type==="svg"&&typeof pe.value=="string"&&(pe.value=this.sanitizer.bypassSecurityTrustHtml(pe.value))}),this.hideEmptyChildren&&this.fixHide(C),this.list=C.filter(D=>D._hidden!==!0),c.detectChanges()}),e.events.pipe(E(this.destroy$)).subscribe(C=>{C instanceof He&&(this.openByUrl(C.urlAfterRedirects),this.underPad(),this.cdr.detectChanges())}),a.notify.pipe(E(this.destroy$),ze(C=>C.type==="layout"&&C.name==="collapsed")).subscribe(()=>this.clearFloating()),this.underPad(),this.openByUrl(e.url),this.ngZone.runOutsideAngular(()=>this.genFloating())}fixHide(i){let e=o=>{for(let a of o)a.children&&a.children.length>0&&(e(a.children),a._hidden||(a._hidden=a.children.every(c=>c._hidden)))};e(i)}ngOnDestroy(){this.clearFloating()}get isPad(){return this.doc.defaultView.innerWidth<768}underPad(){this.autoCloseUnderPad&&this.isPad&&!this.collapsed&&setTimeout(()=>this.openAside(!0))}openAside(i){this.settings.setLayout("collapsed",i)}static \u0275fac=function(e){return new(e||ye)};static \u0275cmp=h({type:ye,selectors:[["layout-default-nav"]],hostVars:2,hostBindings:function(e,o){e&1&&f("click",function(){return o._click()})("click",function(){return o.closeSubMenu()},xt),e&2&&T("d-block",!0)},inputs:{disabledAcl:[2,"disabledAcl","disabledAcl",z],autoCloseUnderPad:[2,"autoCloseUnderPad","autoCloseUnderPad",z],recursivePath:[2,"recursivePath","recursivePath",z],hideEmptyChildren:[2,"hideEmptyChildren","hideEmptyChildren",z],openStrictly:[2,"openStrictly","openStrictly",z],maxLevelIcon:[2,"maxLevelIcon","maxLevelIcon",St]},outputs:{select:"select"},standalone:!1,decls:11,vars:0,consts:[["icon",""],["tree",""],[1,"sidebar-nav"],[1,"sidebar-nav__item-icon",3,"nzType","nzTheme","nzSpin","nzTwotoneColor","nzIconfont","nzRotate"],[1,"sidebar-nav__item-icon",3,"nzIconfont"],[1,"sidebar-nav__item-icon","sidebar-nav__item-img",3,"src"],[1,"sidebar-nav__item-icon","sidebar-nav__item-svg",3,"innerHTML"],[1,"sidebar-nav__divider"],[1,"sidebar-nav__item"],[1,"sidebar-nav__item-link",3,"click","mouseenter"],[1,"sidebar-nav__item-text",3,"innerHTML"],["nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"sidebar-nav__sub-arrow"],["nzStandalone","",3,"nzCount","nzDot","nzOverflowCount"],[1,"sidebar-nav__item","sidebar-nav__group-title"],[3,"innerHTML"]],template:function(e,o){e&1&&(g(0,Wi,2,1,"ng-template",null,0,P),t(2,`
`),g(3,sn,3,0,"ng-template",null,1,P),t(5,`
`),l(6,"ul",2),t(7,`
  `),H(8,cn,4,5,null,null,O),s(),t(10,`
`)),e&2&&(r(8),A(o.list))},dependencies:[ie,Ye,I,si],encapsulation:2,changeDetection:0})};ce([ge()],ye.prototype,"showSubMenu",1);var xe=ye;var ki=n=>({$implicit:n});function mn(n,i){n&1&&V(0)}function fn(n,i){if(n&1&&(t(0,`
        `),l(1,"li"),t(2,`
          `),g(3,mn,1,0,"ng-container",5),t(4,`
        `),s(),t(5,`
      `)),n&2){let e=i.$implicit;r(),T("hidden-mobile",e.hidden==="mobile")("hidden-pc",e.hidden==="pc"),r(2),p("ngTemplateOutlet",e.host)}}function _n(n,i){if(n&1&&(t(0,`
      `),H(1,fn,6,5,null,null,O)),n&2){let e=i.$implicit;r(),A(e)}}function vn(n,i){n&1&&V(0)}function gn(n,i){if(n&1&&(t(0,`
        `),g(1,vn,1,0,"ng-container",5),t(2,`
      `)),n&2){let e=d();r(),p("ngTemplateOutlet",e.opt.logo)}}function yn(n,i){if(n&1&&(t(0,`
        `),l(1,"a",6),t(2,`
          `),m(3,"img",7),t(4,`
          `),m(5,"img",8),t(6,`
        `),s(),t(7,`
      `)),n&2){let e=d();r(),p("routerLink",e.opt.logoLink),r(2),J("src",e.opt.logoExpanded,fe)("alt",e.app.name),r(2),J("src",e.opt.logoCollapsed,fe)("alt",e.app.name)}}function xn(n,i){if(n&1){let e=b();t(0,`
          `),l(1,"li"),t(2,`
            `),l(3,"div",9),f("click",function(){_(e);let a=d();return v(a.toggleCollapsed())}),t(4,`
              `),m(5,"nz-icon",10),t(6,`
            `),s(),t(7,`
          `),s(),t(8,`
        `)}if(n&2){let e=d();r(5),p("nzType",e.collapsedIcon)}}function hn(n,i){}function Cn(n,i){n&1&&V(0)}function bn(n,i){if(n&1&&(t(0,`
        `),l(1,"div",11),t(2,`
          `),g(3,Cn,1,0,"ng-container",5),t(4,`
        `),s(),t(5,`
      `)),n&2){let e=d();r(3),p("ngTemplateOutlet",e.middle[0].host)}}function Dn(n,i){}var Ce=class n{settings=u(M);srv=u(Y);cdr=u(te);destroy$=u(Le);items;left=[];middle=[];right=[];get opt(){return this.srv.options}get app(){return this.settings.app}get collapsed(){return this.settings.layout.collapsed}get collapsedIcon(){return this.srv.collapsedIcon}refresh(){let i=this.items.toArray();this.left=i.filter(e=>e.direction==="left"),this.middle=i.filter(e=>e.direction==="middle"),this.right=i.filter(e=>e.direction==="right"),this.cdr.detectChanges()}ngAfterViewInit(){this.items.changes.pipe(E(this.destroy$)).subscribe(()=>this.refresh()),this.srv.options$.pipe(E(this.destroy$)).subscribe(()=>this.cdr.detectChanges()),this.refresh()}toggleCollapsed(){this.srv.toggleCollapsed()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["layout-default-header"]],hostVars:2,hostBindings:function(e,o){e&2&&T("yunzai-default__header",!0)},inputs:{items:"items"},standalone:!1,decls:24,vars:13,consts:[["render",""],[1,"yunzai-default__header-logo"],[1,"yunzai-default__nav-wrap"],[1,"yunzai-default__nav"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],[1,"yunzai-default__header-logo-link",3,"routerLink"],[1,"yunzai-default__header-logo-expanded"],[1,"yunzai-default__header-logo-collapsed"],[1,"yunzai-default__nav-item","yunzai-default__nav-item--collapse",3,"click"],[3,"nzType"],[1,"yunzai-default__nav","yunzai-default__nav-middle"]],template:function(e,o){if(e&1&&(t(0,`
    `),g(1,_n,3,0,"ng-template",null,0,P),t(3,`
    `),l(4,"div",1),t(5,`
      `),y(6,gn,3,1)(7,yn,8,5),s(),t(8,`
    `),l(9,"div",2),t(10,`
      `),l(11,"ul",3),t(12,`
        `),y(13,xn,9,1),g(14,hn,0,0,"ng-template",4),t(15,`
      `),s(),t(16,`
      `),y(17,bn,6,1),l(18,"ul",3),t(19,`
        `),g(20,Dn,0,0,"ng-template",4),t(21,`
      `),s(),t(22,`
    `),s(),t(23,`
  `)),e&2){let a=L(2);r(4),Dt("width",o.opt.logoFixWidth,"px"),r(2),x(o.opt.logo?6:7),r(7),x(!o.opt.hideAside&&o.opt.showHeaderCollapse?13:-1),r(),p("ngTemplateOutlet",a)("ngTemplateOutletContext",k(9,ki,o.left)),r(3),x(o.middle.length>0?17:-1),r(3),p("ngTemplateOutlet",a)("ngTemplateOutletContext",k(11,ki,o.right))}},dependencies:[ie,Ft,I],encapsulation:2,changeDetection:0})};var zn=["*"];function Sn(n,i){n&1&&(t(0,`
      `),m(1,"div",2),t(2,`
    `))}function wn(n,i){if(n&1&&(t(0,`
      `),m(1,"layout-default-header",3),t(2,`
    `)),n&2){let e=d();r(),p("items",e.headerItems)}}function Ln(n,i){n&1&&V(0)}function En(n,i){n&1&&V(0)}function Mn(n,i){n&1&&(t(0,`
              `),m(1,"layout-default-nav"),t(2,`
            `))}function Nn(n,i){n&1&&V(0)}function kn(n,i){if(n&1&&(t(0,`
                `),g(1,Nn,1,0,"ng-container",1),t(2,`
              `)),n&2){let e=d(3);r(),p("ngTemplateOutlet",e.asideBottom)}}function In(n,i){if(n&1){let e=b();t(0,`
                `),l(1,"div",8),f("click",function(){_(e);let a=d(3);return v(a.toggleCollapsed())}),t(2,`
                  `),m(3,"nz-icon",9),t(4,`
                `),s(),t(5,`
              `)}if(n&2){let e=d(3);r(3),p("nzType",e.collapsedIcon)}}function Fn(n,i){if(n&1&&(t(0,`
            `),l(1,"div",7),t(2,`
              `),y(3,kn,3,1)(4,In,6,1),s(),t(5,`
          `)),n&2){let e=d(2);r(3),x(e.asideBottom?3:4)}}function On(n,i){if(n&1&&(t(0,`
      `),l(1,"div",4),t(2,`
        `),l(3,"div",5),t(4,`
          `),l(5,"div",6),t(6,`
            `),g(7,Ln,1,0,"ng-container",1),t(8,`
            `),g(9,En,1,0,"ng-container",1),t(10,`
            `),y(11,Mn,3,0),s(),t(12,`
          `),y(13,Fn,6,1),s(),t(14,`
      `),s(),t(15,`
    `)),n&2){let e=d();r(),_e(e.asideStyle),r(6),p("ngTemplateOutlet",e.asideUser),r(2),p("ngTemplateOutlet",e.nav),r(2),x(e.nav?-1:11),r(2),x(e.opt.showSiderCollapse?13:-1)}}function Hn(n,i){n&1&&V(0)}var be=class n{headerItems;get opt(){return this.srv.options}set options(i){this.srv.setOptions(i)}asideUser=null;asideBottom=null;nav=null;content=null;customError;fetchingStrictly=!1;fetching=!1;displayNav=!0;displayAside=!0;isFetching=!1;get showFetching(){return this.fetchingStrictly?this.fetching:this.isFetching}get collapsed(){return this.settings.layout.collapsed}get collapsedIcon(){return this.srv.collapsedIcon}get contentStyle(){return{"margin-top":this.displayNav?"":"0px","margin-left":this.displayAside?"":"0px"}}get asideStyle(){return{"margin-top":this.displayNav?"":"0px"}}toggleCollapsed(){this.srv.toggleCollapsed()}router=u(ne);msgSrv=u(Z);settings=u(M);el=u(yt);renderer=u(Ee);doc=u(K);srv=u(Y);layoutDisplayService=u(tt);constructor(){this.router.events.pipe(E(),ze(()=>!this.fetchingStrictly)).subscribe(i=>this.processEv(i)),this.srv.options$.pipe(E()).subscribe(()=>this.setClass()),this.settings.notify.pipe(E()).subscribe(()=>this.setClass())}ngOnInit(){this.layoutDisplayService.listen("nav",i=>{this.displayNav=i}),this.layoutDisplayService.listen("aside",i=>{this.displayAside=i})}processEv(i){if(!this.isFetching&&i instanceof Nt&&(this.isFetching=!0),i instanceof pt||i instanceof Mt){this.isFetching=!1;let e=this.customError===null?null:this.customError??`Could not load ${i.url} route`;e&&i instanceof pt&&this.msgSrv.error(e,{nzDuration:1e3*3});return}(i instanceof He||i instanceof kt)&&this.isFetching&&setTimeout(()=>{this.isFetching=!1},100)}setClass(){let{el:i,doc:e,renderer:o,settings:a}=this,c=a.layout;Pt(i.nativeElement,o,{"yunzai-default":!0,"yunzai-default__fixed":c.fixed,"yunzai-default__collapsed":c.collapsed,"yunzai-default__hide-aside":this.opt.hideAside,"yunzai-default__hide-header":this.opt.hideHeader}),e.body.classList[c.colorWeak?"add":"remove"]("color-weak")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["layout-default"]],contentQueries:function(e,o,a){if(e&1&&Ct(a,q,4),e&2){let c;ke(c=Ie())&&(o.headerItems=c)}},inputs:{options:"options",asideUser:"asideUser",asideBottom:"asideBottom",nav:"nav",content:"content",customError:"customError",fetchingStrictly:[2,"fetchingStrictly","fetchingStrictly",z],fetching:[2,"fetching","fetching",z]},exportAs:["layoutDefault"],standalone:!1,ngContentSelectors:zn,decls:11,vars:6,consts:[[1,"yunzai-default__content"],[4,"ngTemplateOutlet"],[1,"yunzai-default__progress-bar"],[3,"items"],[1,"yunzai-default__aside"],[1,"yunzai-default__aside-wrap"],[1,"yunzai-default__aside-inner"],[1,"yunzai-default__aside-link"],[1,"yunzai-default__aside-link-collapsed",3,"click"],[3,"nzType"]],template:function(e,o){e&1&&(X(),t(0,`
    `),y(1,Sn,3,0),y(2,wn,3,1),y(3,On,16,6),l(4,"section",0),t(5,`
      `),g(6,Hn,1,0,"ng-container",1),t(7,`
      `),ee(8),t(9,`
    `),s(),t(10,`
  `)),e&2&&(r(),x(o.showFetching?1:-1),r(),x(!o.opt.hideHeader&&o.displayNav?2:-1),r(),x(!o.opt.hideAside&&o.displayAside?3:-1),r(),_e(o.contentStyle),r(2),p("ngTemplateOutlet",o.content))},dependencies:[ie,I,xe,Ce],encapsulation:2})};var Vn=["*"],De=class n{selected=!1;disabled=!1;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["layout-default-top-menu-item"]],hostVars:8,hostBindings:function(e,o){e&2&&T("yunzai-default__nav-item",!0)("yunzai-default__top-menu-item",!0)("yunzai-default__top-menu-item-selected",o.selected)("yunzai-default__top-menu-item-disabled",o.disabled)},inputs:{selected:[2,"selected","selected",z],disabled:[2,"disabled","disabled",z]},standalone:!1,ngContentSelectors:Vn,decls:1,vars:0,template:function(e,o){e&1&&(X(),ee(0))},encapsulation:2,changeDetection:0})};var it=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=Me({type:n});static \u0275inj=we({imports:[Lt,Ot,pi,Ue,Ge,Je,di]})};var nt=class n{srv=u(Y);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["dev-home"]],decls:34,vars:4,consts:[[3,"autoBreadcrumb"],[1,"mb-md"],["nz-button","",3,"click"]],template:function(e,o){e&1&&(t(0,`
    `),m(1,"page-header",0),t(2,`
    home
    `),l(3,"div",1),t(4),R(5,"json"),s(),t(6,`
    `),l(7,"div",1),t(8,`
      `),l(9,"button",2),f("click",function(){return o.srv.toggleCollapsed()}),t(10,"\u5207\u6362\u6298\u53E0"),s(),t(11,`
      `),l(12,"button",2),f("click",function(){return o.srv.setOptions({hideHeader:!0})}),t(13,"\u9690\u85CF\u9876\u90E8"),s(),t(14,`
      `),l(15,"button",2),f("click",function(){return o.srv.setOptions({hideAside:!0})}),t(16,"\u9690\u85CF\u4FA7\u8FB9\u680F"),s(),t(17,`
      `),l(18,"button",2),f("click",function(){return o.srv.setOptions({hideHeader:!0,hideAside:!0})}),t(19,"\u9690\u85CF\u9876\u90E8\u4E0E\u4FA7\u8FB9\u680F"),s(),t(20,`
      `),l(21,"button",2),f("click",function(){return o.srv.setOptions({showHeaderCollapse:!0})}),t(22,"\u663E\u793A\u9876\u90E8\u6298\u53E0\u5F00\u5173"),s(),t(23,`
      `),l(24,"button",2),f("click",function(){return o.srv.setOptions({showSiderCollapse:!0})}),t(25,"\u663E\u793A\u4FA7\u8FB9\u680F\u5E95\u90E8\u6298\u53E0\u5F00\u5173"),s(),t(26,`
      `),l(27,"button",2),f("click",function(){return o.srv.setOptions({showHeaderCollapse:!0,showSiderCollapse:!0})}),t(28,`
        \u663E\u793A\u9876\u90E8\u4E0E\u4FA7\u8FB9\u680F\u5E95\u90E8\u6298\u53E0\u5F00\u5173
      `),s(),t(29,`
      `),l(30,"button",2),f("click",function(){return o.srv.setOptions({})}),t(31,"\u6062\u590D\u9ED8\u8BA4"),s(),t(32,`
    `),s(),t(33,`
  `)),e&2&&(r(),p("autoBreadcrumb",!1),r(3),N(" options: ",B(5,2,o.srv.options)," "))},dependencies:[Xe,Ke,re,Q,oe,ae,Oe],encapsulation:2})};var _t=()=>({standalone:!0});function $n(n,i){if(n&1){let e=b();t(0,`
    `),l(1,"input",1),W("ngModelChange",function(a){_(e);let c=d();return j(c.i.value,a)||(c.i.value=a),v(a)}),s(),t(2,`
  `)}if(n&2){let e=d();r(),$("ngModel",e.i.value),p("ngModelOptions",Fe(2,_t))}}function jn(n,i){if(n&1){let e=b();t(0,`
    `),l(1,"input",2),W("ngModelChange",function(a){_(e);let c=d();return j(c.i.value,a)||(c.i.value=a),v(a)}),s(),t(2,`
  `)}if(n&2){let e=d();r(),$("ngModel",e.i.value),p("ngModelOptions",Fe(2,_t))}}function Wn(n,i){if(n&1){let e=b();t(0,`
    `),l(1,"nz-input-number",3),W("ngModelChange",function(a){_(e);let c=d();return j(c.pxVal,a)||(c.pxVal=a),v(a)}),f("ngModelChange",function(a){_(e);let c=d();return v(c.pxChange(a))}),s(),t(2,`
  `)}if(n&2){let e=d();r(),$("ngModel",e.pxVal),p("nzMin",e.i.min)("nzMax",e.i.max)("nzStep",e.i.step||2)("nzFormatter",e.format)}}function Qn(n,i){if(n&1){let e=b();t(0,`
    `),l(1,"nz-switch",4),W("ngModelChange",function(a){_(e);let c=d();return j(c.i.value,a)||(c.i.value=a),v(a)}),s(),t(2,`
  `)}if(n&2){let e=d();r(),$("ngModel",e.i.value),p("ngModelOptions",Fe(2,_t))}}function Zn(n,i){}function Yn(n,i){n&1&&(t(0,`
    `),g(1,Zn,0,0,"ng-template",5),t(2,`
  `))}var le=class n{i={};set data(i){this.i=i,i.type==="px"&&(this.pxVal=+i.value.replace("px",""))}pxVal=0;pxChange(i){this.i.value=`${i}px`}format=i=>`${i} px`;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["setting-drawer-item"]],hostVars:2,hostBindings:function(e,o){e&2&&T("setting-drawer__body-item",!0)},inputs:{data:"data"},decls:12,vars:3,consts:[[1,"pl-sm","text-grey"],["nz-input","","type","color",2,"width","88px",3,"ngModelChange","ngModel","ngModelOptions"],["nz-input","",2,"width","88px",3,"ngModelChange","ngModel","ngModelOptions"],[3,"ngModelChange","ngModel","nzMin","nzMax","nzStep","nzFormatter"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzDrawerContent",""]],template:function(e,o){if(e&1&&(l(0,"span"),t(1),l(2,"span",0),t(3),s(),t(4,`
`),s(),t(5,`
`),y(6,$n,3,3)(7,jn,3,3)(8,Wn,3,5)(9,Qn,3,3)(10,Yn,3,0),t(11,`
`)),e&2){let a;r(),N(`
  `,o.i.label,`
  `),r(2),U(o.i.tip),r(3),x((a=o.i.type)==="color"?6:a==="input"?7:a==="px"?8:a==="switch"?9:10)}},dependencies:[Ze,ri,We,Qe,Di,Ti,qe,je,$e],encapsulation:2})};var ot="yunzai-default-vars",Ii=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890ff"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"},{key:"black",color:"#001529"}],Te={"primary-color":{label:"\u4E3B\u989C\u8272",type:"color",default:"#1890ff"},"yunzai-default-header-hg":{label:"\u9AD8",type:"px",default:"64px",max:300,min:24},"yunzai-default-header-bg":{label:"\u80CC\u666F\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"yunzai-default-header-padding":{label:"\u9876\u90E8\u5DE6\u53F3\u5185\u8FB9\u8DDD",type:"px",default:"16px"},"yunzai-default-aside-wd":{label:"\u5BBD\u5EA6",type:"px",default:"200px"},"yunzai-default-aside-bg":{label:"\u80CC\u666F",type:"color",default:"#ffffff"},"yunzai-default-aside-collapsed-wd":{label:"\u6536\u7F29\u5BBD\u5EA6",type:"px",default:"64px"},"yunzai-default-aside-nav-padding-top-bottom":{label:"\u9879\u4E0A\u4E0B\u5185\u8FB9\u8DDD",type:"px",default:"8px",step:8},"yunzai-default-aside-nav-fs":{label:"\u83DC\u5355\u5B57\u53F7",type:"px",default:"14px",min:14,max:30},"yunzai-default-aside-collapsed-nav-fs":{label:"\u6536\u7F29\u83DC\u5355\u5B57\u53F7",type:"px",default:"24px",min:24,max:32},"yunzai-default-aside-nav-item-height":{label:"\u83DC\u5355\u9879\u9AD8\u5EA6",type:"px",default:"38px",min:24,max:64},"yunzai-default-aside-nav-text-color":{label:"\u83DC\u5355\u6587\u672C\u989C\u8272",type:"color",default:"rgba(0, 0, 0, 0.65)",rgba:!0},"yunzai-default-aside-nav-text-hover-color":{label:"\u83DC\u5355\u6587\u672C\u60AC\u505C\u989C\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"yunzai-default-aside-nav-group-text-color":{label:"\u83DC\u5355\u5206\u7EC4\u6587\u672C\u989C\u8272",type:"color",default:"rgba(0, 0, 0, 0.43)",rgba:!0},"yunzai-default-aside-nav-selected-text-color":{label:"\u83DC\u5355\u6FC0\u6D3B\u65F6\u6587\u672C\u989C\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"yunzai-default-aside-nav-selected-bg":{label:"\u83DC\u5355\u6FC0\u6D3B\u65F6\u80CC\u666F\u989C\u8272",type:"color",default:"#fcfcfc"},"yunzai-default-content-bg":{label:"\u80CC\u666F\u8272",type:"color",default:"#f5f7fa"},"yunzai-default-content-heading-bg":{label:"\u6807\u9898\u80CC\u666F\u8272",type:"color",default:"#fafbfc"},"yunzai-default-content-heading-border":{label:"\u6807\u9898\u5E95\u90E8\u8FB9\u6846\u8272",type:"color",default:"#efe3e5"},"yunzai-default-content-padding":{label:"\u5185\u8FB9\u8DDD",type:"px",default:"24px",min:0,max:128,step:8},"form-state-visual-feedback-enabled":{label:"\u5F00\u542F\u8868\u5355\u5143\u7D20\u7684\u89C6\u89C9\u53CD\u9988",type:"switch",default:!0},"preserve-white-spaces-enabled":{label:"\u5F00\u542F preserveWhitespaces",type:"switch",default:!0},"nz-table-img-radius":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u5706\u89D2",type:"px",default:"4px",min:0,max:128},"nz-table-img-margin-right":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u53F3\u5916\u8FB9\u8DDD",type:"px",default:"4px",min:0,max:128},"nz-table-img-max-width":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u6700\u5927\u5BBD\u5EA6",type:"px",default:"32px",min:8,max:128},"nz-table-img-max-height":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u6700\u5927\u9AD8\u5EA6",type:"px",default:"32px",min:8,max:128}};var Jn=n=>({"background-color":n});function qn(n,i){n&1&&(t(0,`
            `),m(1,"nz-icon",19),t(2,`
          `))}function Gn(n,i){if(n&1){let e=b();t(0,`
        `),l(1,"span",18),f("click",function(){let a=_(e).$implicit,c=d(2);return v(c.changeColor(a.color))}),t(2,`
          `),y(3,qn,3,0),s(),t(4,`
      `)}if(n&2){let e=i.$implicit,o=d(2);r(),_e(k(4,Jn,e.color)),p("nzTooltipTitle",e.key),r(2),x(o.color===e.color?3:-1)}}function Kn(n,i){if(n&1){let e=b();l(0,"div",4),t(1,`
    `),l(2,"div",5),t(3,`
      `),l(4,"h3",6),t(5,"\u4E3B\u9898\u8272"),s(),t(6,`
      `),H(7,Gn,5,6,null,null,O),s(),t(9,`
    `),m(10,"nz-divider"),t(11,`
    `),l(12,"div",7),t(13,`
      `),l(14,"h3",6),t(15,"\u8BBE\u7F6E"),s(),t(16,`
      `),l(17,"nz-tabs"),t(18,`
        `),l(19,"nz-tab",8),t(20,`
          `),l(21,"div",7),t(22,`
            `),m(23,"setting-drawer-item",9),t(24,`
            `),m(25,"setting-drawer-item",9),t(26,`
            `),m(27,"setting-drawer-item",9),t(28,`
          `),s(),t(29,`
        `),s(),t(30,`
        `),l(31,"nz-tab",10),t(32,`
          `),m(33,"setting-drawer-item",9),t(34,`
          `),m(35,"setting-drawer-item",9),t(36,`
          `),m(37,"setting-drawer-item",9),t(38,`
          `),m(39,"setting-drawer-item",9),t(40,`
        `),s(),t(41,`
        `),l(42,"nz-tab",11),t(43,`
          `),m(44,"setting-drawer-item",9),t(45,`
          `),m(46,"setting-drawer-item",9),t(47,`
          `),m(48,"setting-drawer-item",9),t(49,`
          `),m(50,"setting-drawer-item",9),t(51,`
        `),s(),t(52,`
        `),l(53,"nz-tab",12),t(54,`
          `),m(55,"setting-drawer-item",9),t(56,`
          `),m(57,"setting-drawer-item",9),t(58,`
          `),m(59,"setting-drawer-item",9),t(60,`
          `),m(61,"setting-drawer-item",9),t(62,`
          `),m(63,"setting-drawer-item",9),t(64,`
          `),m(65,"setting-drawer-item",9),t(66,`
        `),s(),t(67,`
      `),s(),t(68,`
    `),s(),t(69,`
    `),m(70,"nz-divider"),t(71,`
    `),l(72,"div",7),t(73,`
      `),l(74,"div",13),t(75,`
        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F
        `),l(76,"nz-switch",14),W("ngModelChange",function(a){_(e);let c=d();return j(c.layout.fixed,a)||(c.layout.fixed=a),v(a)}),f("ngModelChange",function(){_(e);let a=d();return v(a.setLayout("fixed",a.layout.fixed))}),s(),t(77,`
      `),s(),t(78,`
      `),l(79,"div",13),t(80,`
        \u8272\u5F31\u6A21\u5F0F
        `),l(81,"nz-switch",14),W("ngModelChange",function(a){_(e);let c=d();return j(c.layout.colorWeak,a)||(c.layout.colorWeak=a),v(a)}),f("ngModelChange",function(){_(e);let a=d();return v(a.setLayout("colorWeak",a.layout.colorWeak))}),s(),t(82,`
      `),s(),t(83,`
    `),s(),t(84,`
    `),m(85,"nz-divider"),t(86,`
    `),l(87,"button",15),f("click",function(){_(e);let a=d();return v(a.apply())}),t(88,"\u9884\u89C8"),s(),t(89,`
    `),l(90,"button",16),f("click",function(){_(e);let a=d();return v(a.reset())}),t(91,"\u91CD\u7F6E"),s(),t(92,`
    `),l(93,"button",16),f("click",function(){_(e);let a=d();return v(a.copyVar())}),t(94,"\u62F7\u8D1D"),s(),t(95,`
    `),m(96,"nz-alert",17),t(97,`
  `),s()}if(n&2){let e=d();r(7),A(e.colors),r(16),p("data",e.data["yunzai-default-header-hg"]),r(2),p("data",e.data["yunzai-default-header-bg"]),r(2),p("data",e.data["yunzai-default-header-padding"]),r(6),p("data",e.data["yunzai-default-aside-wd"]),r(2),p("data",e.data["yunzai-default-aside-bg"]),r(2),p("data",e.data["yunzai-default-aside-collapsed-wd"]),r(2),p("data",e.data["yunzai-default-aside-nav-padding-top-bottom"]),r(5),p("data",e.data["yunzai-default-content-bg"]),r(2),p("data",e.data["yunzai-default-content-heading-bg"]),r(2),p("data",e.data["yunzai-default-content-heading-border"]),r(2),p("data",e.data["yunzai-default-content-padding"]),r(5),p("data",e.data["form-state-visual-feedback-enabled"]),r(2),p("data",e.data["preserve-white-spaces-enabled"]),r(2),p("data",e.data["nz-table-img-radius"]),r(2),p("data",e.data["nz-table-img-margin-right"]),r(2),p("data",e.data["nz-table-img-max-width"]),r(2),p("data",e.data["nz-table-img-max-height"]),r(11),$("ngModel",e.layout.fixed),r(5),$("ngModel",e.layout.colorWeak)}}var se=class se{cdr=u(te);msg=u(Z);settingSrv=u(M);lazy=u(Ht);ngZone=u(Ne);doc=u(K);autoApplyColor=!0;compilingText="Compiling...";devTips="When the color can't be switched, you need to run it once: npm run color-less";lessJs="https://cdn.jsdelivr.net/npm/less";loadedLess=!1;dir=u(Be).valueSignal;isDev=zt();collapse=!1;get layout(){return this.settingSrv.layout}data={};color;colors=Ii;constructor(){this.color=this.cachedData["@primary-color"]||this.DEFAULT_PRIMARY,this.resetData(this.cachedData,!1)}get cachedData(){return this.settingSrv.layout[ot]||{}}get DEFAULT_PRIMARY(){return Te["primary-color"].default}ngOnInit(){this.autoApplyColor&&this.color!==this.DEFAULT_PRIMARY&&(this.changeColor(this.color),this.runLess())}loadLess(){return vt(this,null,function*(){return this.loadedLess?Promise.resolve():this.lazy.loadStyle("./assets/color.less",{rel:"stylesheet/less"}).then(()=>{let i=this.doc.createElement("script");i.innerHTML=`
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `,this.doc.body.appendChild(i)}).then(()=>this.lazy.loadScript(this.lessJs)).then(()=>{this.loadedLess=!0})})}genVars(){let{data:i,color:e,validKeys:o}=this,a={"@primary-color":e};return o.filter(c=>c!=="primary-color").forEach(c=>a[`@${c}`]=i[c].value),this.setLayout(ot,a),a}runLess(){let{ngZone:i,msg:e,cdr:o}=this,a=e.loading(this.compilingText,{nzDuration:0}).messageId;setTimeout(()=>{this.loadLess().then(()=>{window.less.modifyVars(this.genVars()).then(()=>{e.success("\u6210\u529F"),e.remove(a),i.run(()=>o.detectChanges())})})},200)}toggle(){this.collapse=!this.collapse}changeColor(i){this.color=i,Object.keys(Te).filter(e=>Te[e].default==="@primary-color").forEach(e=>delete this.cachedData[`@${e}`]),this.resetData(this.cachedData,!1)}setLayout(i,e){this.settingSrv.setLayout(i,e)}resetData(i,e=!0){i=i||{};let o=ve(Te);Object.keys(o).forEach(a=>{let c=i[`@${a}`]||o[a].default||"";o[a].value=c==="@primary-color"?this.color:c}),this.data=o,e&&(this.cdr.detectChanges(),this.runLess())}get validKeys(){return Object.keys(this.data).filter(i=>this.data[i].value!==this.data[i].default)}apply(){this.runLess()}reset(){this.color=this.DEFAULT_PRIMARY,this.settingSrv.setLayout(ot,{}),this.resetData({})}copyVar(){let i=this.genVars(),e=Object.keys(i).map(o=>`${o}: ${i[o]};`).join(`
`);Bt(e),this.msg.success("Copy success")}static \u0275fac=function(e){return new(e||se)};static \u0275cmp=h({type:se,selectors:[["setting-drawer"]],hostVars:4,hostBindings:function(e,o){e&2&&T("setting-drawer",!0)("setting-drawer-rtl",o.dir()==="rtl")},inputs:{autoApplyColor:[2,"autoApplyColor","autoApplyColor",z],compilingText:"compilingText",devTips:"devTips",lessJs:"lessJs"},decls:10,vars:7,consts:[[3,"nzOnClose","nzVisible","nzPlacement","nzWidth"],["class","setting-drawer__content",4,"nzDrawerContent"],["nz-tooltip","",1,"setting-drawer__handle",3,"click","nzTooltipTitle"],[1,"setting-drawer__handle-icon",3,"nzType"],[1,"setting-drawer__content"],[1,"setting-drawer__body","setting-drawer__theme"],[1,"setting-drawer__title"],[1,"setting-drawer__body"],["nzTitle","\u9876\u90E8"],[3,"data"],["nzTitle","\u4FA7\u8FB9\u680F"],["nzTitle","\u5185\u5BB9"],["nzTitle","\u5176\u5B83"],[1,"setting-drawer__body-item"],["nzSize","small",3,"ngModelChange","ngModel"],["type","button","nz-button","","nzType","primary",3,"click"],["type","button","nz-button","",3,"click"],["nzType","warning","nzMessage","\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less",1,"mt-md"],["nz-tooltip","",1,"setting-drawer__theme-tag",3,"click","nzTooltipTitle"],["nzType","check"]],template:function(e,o){e&1&&(l(0,"nz-drawer",0),f("nzOnClose",function(){return o.toggle()}),t(1,`
  `),g(2,Kn,98,19,"div",1),t(3,`
`),s(),t(4,`
`),l(5,"div",2),f("click",function(){return o.toggle()}),t(6,`
  `),m(7,"nz-icon",3),t(8,`
`),s(),t(9,`
`)),e&2&&(p("nzVisible",o.collapse)("nzPlacement",o.dir()==="rtl"?"left":"right")("nzWidth",500),r(5),T("setting-drawer__handle-opened",o.collapse),p("nzTooltipTitle",o.isDev?o.devTips:null),r(2),p("nzType",o.collapse?"close":"setting"))},dependencies:[Ze,We,Qe,je,ai,$e,Ye,I,bi,Ci,yi,gi,vi,le,zi,qe,Q,Si],encapsulation:2,changeDetection:0})};ce([ge()],se.prototype,"loadLess",1),ce([ge()],se.prototype,"runLess",1);var de=se;var eo=[le,de],at=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=Me({type:n});static \u0275inj=we({imports:[eo]})};function to(n,i){if(n&1){let e=b();t(0,`
          `),l(1,"layout-default-top-menu-item",12),f("click",function(){let a=_(e).$implicit,c=d();return v(c.changeMenu(a.key))}),t(2,`
            `),m(3,"nz-icon",6),t(4),s(),t(5,`
        `)}if(n&2){let e=i.$implicit;r(),p("selected",e.selected)("disabled",e.disabled),r(3),N(" ",e.label,`
          `)}}function io(n,i){if(n&1&&(t(0,`
        `),l(1,"div",13),t(2,`
          `),m(3,"nz-avatar",14),t(4,`
          `),l(5,"div",15),t(6,`
            `),l(7,"strong"),t(8),s(),t(9,`
            `),l(10,"p",16),t(11),s(),t(12,`
          `),s(),t(13,`
        `),s(),t(14,`
        `),l(15,"nz-dropdown-menu",null,2),t(17,`
          `),l(18,"ul",17),t(19,`
            `),l(20,"li",18),t(21),s(),t(22,`
            `),l(23,"li",19),t(24),s(),t(25,`
          `),s(),t(26,`
        `),s(),t(27,`
      `)),n&2){let e=L(16),o=d();r(),p("nzDropdownMenu",e),r(2),p("nzSrc",o.user.avatar),r(5),U(o.user.name),r(3),U(o.user.email),r(10),U("menu.account.center"),r(3),U("menu.account.settings")}}var no=[Kt,Gt,ei,ti,Wt,Qt,$t,qt,Xt,ii,Jt,jt,Zt,Yt,Ut],rt=class n{menuSrv=u(Re);router=u(ne);i18n=u(At);iconSrv=u(ni);rtl=u(Vt);settings=u(M);msgSrv=u(Z);options={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",hideHeader:!1,showHeaderCollapse:!0,showSiderCollapse:!0};lang="zh-CN";get user(){return this.settings.user}topMenus=[{key:"",label:"Default",selected:!0},{key:"bus",label:"Bus",selected:!1},{key:"disabled",label:"Disabbled",disabled:!0}];menus=[{text:"test",group:!0,children:[{text:"Dashboard-DISABLED",link:"/dev/home",icon:"anticon anticon-dashboard",i18n:"app.header.menu.home",badge:5},{text:"\u6D4B\u8BD5view1-id",link:"/dev/view/1",icon:"anticon anticon-appstore"},{text:"\u6D4B\u8BD5view2-id",link:"/dev/view/2",icon:"anticon anticon-appstore"},{render_type:"divider"},{text:"lazy\u6D4B\u8BD51",link:"/dev/lazy/p1",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD52",link:"/dev/lazy/p2",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD5view1-id",link:"/dev/lazy/1/view",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD5view2-id",link:"/dev/lazy/2/view",icon:"anticon anticon-appstore"},{text:"Level1",link:"#",icon:"anticon anticon-appstore",children:[{text:"Level2",link:"#",children:[{text:"Level3A",link:"/dev/l1"},{render_type:"divider"},{text:"Level3B-DISABLED",link:"/dev/l1",disabled:!0}]},{render_type:"divider"},{text:"Level2-DISABLED",link:"/dev/l2",disabled:!0}]},{text:"ABC",icon:"anticon anticon-appstore",children:[{text:"Reuse Tab1",link:"/dev/l1",i18n:"app.header.menu.docs"},{text:"Reuse Tab2",link:"/dev/l2"},{text:"Reuse Tab3",link:"/dev/l3"},{text:"Reuse Tab4",link:"/dev/l4"},{text:"Reuse Tab5",link:"/dev/l5"},{text:"Reuse Tab6",link:"/dev/l6"},{text:"Reuse Tab7",link:"/dev/l7"},{text:"Ellipsis",link:"/dev/l8"}]},{text:"LIST",icon:"anticon anticon-appstore",children:[{text:"list",link:"/dev/list"},{text:"list/item",link:"/dev/list/item"}]}]}];customContextMenu=[{id:"custom1",title:"\u81EA\u5B9A\u4E491",fn:(i,e)=>{console.log("\u81EA\u5B9A\u4E491",i,e)}},{id:"custom2",title:"\u81EA\u5B9A\u4E492",disabled:()=>!0,fn:(i,e)=>{console.log("\u81EA\u5B9A\u4E492",i,e)}}];constructor(){this.iconSrv.addIcon(...no)}changeMenu(i){let e={text:"test",group:!0,children:[{text:`TYPE - ${i}`,link:"/dev/view/1",icon:"anticon anticon-appstore"}]};this.menuSrv.add(i===""?ve(this.menus):[e]);for(let o of this.topMenus)o.selected=o.key===i;this.loadFirstValidMenu()}toggleCollapsedSideabar(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}toggleLang(){this.lang=this.lang==="zh-CN"?"en-US":"zh-CN",this.i18n.use(this.lang)}ngOnInit(){this.menuSrv.add(ve(this.menus))}loadFirstValidMenu(){let i;this.menuSrv.visit(this.menuSrv.menus,e=>{i==null&&e.hide!==!0&&e.link!=null&&e.link.length>0&&(i=e)}),i!=null&&this.router.navigateByUrl(i.link)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["dev-layout"]],hostVars:2,hostBindings:function(e,o){e&2&&T("yunzai-default",!0)},decls:40,vars:7,consts:[["asideUserTpl",""],["reuseTab",""],["userMenu","nzDropdownMenu"],[3,"options","asideUser"],["direction","left"],["href","//github.com/ng-yunzai/ng-yunzai","target","_blank",1,"yunzai-default__nav-item"],["nzType","github"],["direction","middle"],["direction","right"],[1,"yunzai-default__nav-item",3,"click"],[3,"mode","customContextMenu"],[3,"activate","attach"],[3,"click","selected","disabled"],["nz-dropdown","","nzTrigger","click",1,"yunzai-default__aside-user",3,"nzDropdownMenu"],[1,"yunzai-default__aside-user-avatar",3,"nzSrc"],[1,"yunzai-default__aside-user-info"],[1,"mb0"],["nz-menu",""],["nz-menu-item","","routerLink","/pro/account/center"],["nz-menu-item","","routerLink","/pro/account/settings"]],template:function(e,o){if(e&1){let a=b();t(0,`
    `),l(1,"layout-default",3),t(2,`
      `),l(3,"layout-default-header-item",4),t(4,`
        `),l(5,"a",5),t(6,`
          `),m(7,"nz-icon",6),t(8,`
        `),s(),t(9,`
      `),s(),t(10,`
      `),l(11,"layout-default-header-item",7),t(12,`
        `),H(13,to,6,3,null,null,O),s(),t(15,`
      `),l(16,"layout-default-header-item",8),t(17,`
        `),l(18,"a",9),f("click",function(){return _(a),v(o.rtl.toggle())}),t(19),R(20,"uppercase"),s(),t(21,`
      `),s(),t(22,`
      `),l(23,"layout-default-header-item",8),t(24,`
        `),l(25,"a",5),t(26," githbu "),s(),t(27,`
      `),s(),t(28,`
      `),g(29,io,28,6,"ng-template",null,0,P),t(31,`
      `),m(32,"reuse-tab",10,1),t(34,`
      `),l(35,"router-outlet",11),f("activate",function(C){_(a);let D=L(33);return v(D.activate(C))})("attach",function(C){_(a);let D=L(33);return v(D.activate(C))}),s(),t(36,`
    `),s(),t(37,`
    `),m(38,"setting-drawer"),t(39,`
  `)}if(e&2){let a=L(30);r(),p("options",o.options)("asideUser",a),r(12),A(o.topMenus),r(6),U(B(20,5,o.rtl.nextDir)),r(13),p("mode",2)("customContextMenu",o.customContextMenu)}},dependencies:[it,be,q,De,Ue,I,Je,ui,ci,fi,_i,Ge,wi,mi,hi,It,at,de,wt],encapsulation:2})};var w=class n{route=u(Ae);srv=u(xi);first=Pe(new Date,"yyyy-MM-dd HH:mm:ss");now=Pe(new Date,"yyyy-MM-dd HH:mm:ss");id=0;ngOnInit(){this.route.params.subscribe(i=>this.id=+i.id)}_onReuseInit(){this.now=Pe(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.id)}replace(i){this.srv.replace(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["dev-page"]],decls:19,vars:12,consts:[["nz-button","","nzType","primary",3,"click"]],template:function(e,o){e&1&&(t(0,`
    `),m(1,"page-header"),t(2,`
    `),l(3,"p"),t(4),R(5,"json"),R(6,"json"),s(),t(7,`
    `),l(8,"p"),t(9),R(10,"json"),s(),t(11),R(12,"json"),l(13,"div"),t(14,`
      `),l(15,"button",0),f("click",function(){return o.replace("/dev/view/2")}),t(16,"Replace /dev/view/2"),s(),t(17,`
    `),s(),t(18,`
  `)),e&2&&(r(4),Tt("first: ",B(5,4,o.first),"\uFF0Cnow: ",B(6,6,o.now)),r(5),N("id: ",B(10,8,o.id)),r(2),N(`
    page: `,B(12,10,o.route.url),`
    `))},dependencies:[Xe,Ke,re,Q,oe,ae,Oe],encapsulation:2})};var jl=[{path:"demo",component:et},{path:"",component:rt,children:[{path:"home",component:nt},{path:"l1",component:w},{path:"l2",component:w},{path:"l3",component:w},{path:"l4",component:w},{path:"l5",component:w},{path:"l6",component:w},{path:"l7",component:w},{path:"l8",component:w},{path:"login",component:w},{path:"view/1",component:w,data:{reuseClosable:!1}},{path:"view/:id",component:w},{path:"lazy",loadChildren:()=>import("./chunk-NOSDVWRW.js").then(n=>n.routes)},{path:"list",loadChildren:()=>import("./chunk-LOZ52ZKT.js").then(n=>n.routes)}]}];export{jl as routes};
