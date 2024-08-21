import{a as kt,b as Bt}from"./chunk-24UGX6Q3.js";import{a as St,e as yt}from"./chunk-7T7S7JLS.js";import{a as Rt,b as Mt}from"./chunk-T6APYXIQ.js";import{a as zt,b as Et}from"./chunk-PVPZHL3I.js";import{$c as k,$e as _t,Aa as qe,Ab as ae,Bb as le,Bc as nt,Bd as ee,Cb as N,Cg as Me,D as De,Db as E,Dg as bt,Eb as ce,F as Ke,Fa as V,Fb as H,H as I,Ha as Ze,Ia as Pe,Ja as l,Jd as mt,Ka as R,Kb as Te,L as Qe,La as Je,Lb as v,M as Oe,Mb as Ue,Na as Ce,Nb as tt,Pg as ze,Qe as ht,Qg as Ee,Rc as rt,Re as dt,Sa as L,Sc as ot,Ta as m,Tc as Z,Ua as $,Ue as ft,V as We,Va as f,Wa as et,Wb as W,X as Ne,Xa as G,Yc as J,_c as st,a as ne,ad as at,af as gt,ba as pe,ca as he,cb as _,cc as X,da as oe,db as Y,dc as C,ec as ue,fa as u,fb as D,gb as O,gd as lt,h as $e,ha as b,hb as h,ia as de,ib as d,ja as Xe,jb as xe,jc as it,k as re,kb as be,kf as Ct,l as Ge,lb as ve,nb as M,od as ct,pa as fe,pe as pt,pf as He,qa as S,qb as g,qd as z,ra as y,rf as xt,s as Ye,sb as c,sd as Se,tb as K,ub as Q,uc as q,ud as ye,va as _e,vd as Re,vh as vt,wa as ge,xa as U,xh as Tt,zb as se,zd as ut}from"./chunk-FLGCG6NR.js";var me=new oe("REUSE_TAB_CACHED_MANAGER");var w=function(i){return i[i.Menu=0]="Menu",i[i.MenuForce=1]="MenuForce",i[i.URL=2]="URL",i}(w||{});var te=new oe("REUSE_TAB_STORAGE_KEY"),ie=new oe("REUSE_TAB_STORAGE_STATE");var F=(()=>{let r=class r{get snapshot(){return this.injector.get(J).snapshot}get inited(){return this._inited}get curUrl(){return this.getUrl(this.snapshot)}set max(e){this._max=Math.min(Math.max(e,2),100);for(let t=this.cached.list.length;t>this._max;t--)this.cached.list.pop()}set keepingScroll(e){this._keepingScroll=e,this.initScroll()}get keepingScroll(){return this._keepingScroll}get items(){return this.cached.list}get count(){return this.cached.list.length}get change(){return this._cachedChange.asObservable()}set title(e){let t=this.curUrl;typeof e=="string"&&(e={text:e}),this.cached.title[t]=e,this.di("update current tag title: ",e),this._cachedChange.next({active:"title",url:t,title:e,list:this.cached.list})}index(e){return this.cached.list.findIndex(t=>t.url===e)}exists(e){return this.index(e)!==-1}get(e){return e&&this.cached.list.find(t=>t.url===e)||null}remove(e,t){let n=typeof e=="string"?this.index(e):e,s=n!==-1?this.cached.list[n]:null;return!s||!t&&!s.closable?!1:(this.destroy(s._handle),this.cached.list.splice(n,1),delete this.cached.title[e],!0)}close(e,t=!1){return this.removeUrlBuffer=e,this.remove(e,t),this._cachedChange.next({active:"close",url:e,list:this.cached.list}),this.di("close tag",e),!0}closeRight(e,t=!1){let n=this.index(e);for(let s=this.count-1;s>n;s--)this.remove(s,t);return this.removeUrlBuffer=null,this._cachedChange.next({active:"closeRight",url:e,list:this.cached.list}),this.di("close right tages",e),!0}clear(e=!1){this.cached.list.forEach(t=>{!e&&t.closable&&this.destroy(t._handle)}),this.cached.list=this.cached.list.filter(t=>!e&&!t.closable),this.removeUrlBuffer=null,this._cachedChange.next({active:"clear",list:this.cached.list}),this.di("clear all catch")}move(e,t){let n=this.cached.list.findIndex(a=>a.url===e);if(n===-1)return;let s=this.cached.list.slice();s.splice(t<0?s.length+t:t,0,s.splice(n,1)[0]),this.cached.list=s,this._cachedChange.next({active:"move",url:e,position:t,list:this.cached.list})}replace(e){let t=this.curUrl;this.injector.get(k).navigateByUrl(e).then(()=>{this.exists(t)?this.close(t,!0):this.removeUrlBuffer=t})}getTitle(e,t){if(this.cached.title[e])return this.cached.title[e];if(t&&t.data&&(t.data.titleI18n||t.data.title))return{text:t.data.title,i18n:t.data.titleI18n};let n=this.getMenu(e);return n?{text:n.text,i18n:n.i18n}:{text:e}}clearTitleCached(){this.cached.title={}}set closable(e){let t=this.curUrl;this.cached.closable[t]=e,this.di("update current tag closable: ",e),this._cachedChange.next({active:"closable",closable:e,list:this.cached.list})}getClosable(e,t){if(typeof this.cached.closable[e]<"u")return this.cached.closable[e];if(t&&t.data&&typeof t.data.reuseClosable=="boolean")return t.data.reuseClosable;let n=this.mode!==w.URL?this.getMenu(e):null;return n&&typeof n.reuseClosable=="boolean"?n.reuseClosable:!0}clearClosableCached(){this.cached.closable={}}getTruthRoute(e){let t=e;for(;t.firstChild;)t=t.firstChild;return t}getUrl(e){let t=this.getTruthRoute(e),n=[];for(;t;)n.push(t.url.join("/")),t=t.parent;return`/${n.filter(a=>a).reverse().join("/")}`}can(e){let t=this.getUrl(e);if(t===this.removeUrlBuffer)return!1;if(e.data&&typeof e.data.reuse=="boolean")return e.data.reuse;if(this.mode!==w.URL){let n=this.getMenu(t);if(!n)return!1;if(this.mode===w.Menu){if(n.reuse===!1)return!1}else if(!n.reuse||n.reuse!==!0)return!1;return!0}return!this.isExclude(t)}isExclude(e){return this.excludes.findIndex(t=>t.test(e))!==-1}refresh(e){this._cachedChange.next({active:"refresh",data:e})}destroy(e){e&&e.componentRef&&e.componentRef.destroy&&e.componentRef.destroy()}di(...e){}constructor(){this.injector=u(_e),this.menuService=u(ye),this.cached=u(me),this.stateKey=u(te),this.stateSrv=u(ie),this._inited=!1,this._max=10,this._keepingScroll=!1,this._cachedChange=new Ge(null),this.removeUrlBuffer=null,this.positionBuffer={},this.debug=!1,this.routeParamMatchMode="strict",this.mode=w.Menu,this.excludes=[],this.storageState=!1,this.cached==null&&(this.cached={list:[],title:{},closable:{}})}init(){this.initScroll(),this._inited=!0,this.loadState()}loadState(){this.storageState&&(this.cached.list=this.stateSrv.get(this.stateKey).map(e=>({title:{text:e.title},url:e.url,position:e.position})),this._cachedChange.next({active:"loadState"}))}getMenu(e){let t=this.menuService.getPathByUrl(e);return!t||t.length===0?null:t.pop()}runHook(e,t,n="init"){if(typeof t=="number"&&(t=this.cached.list[t]._handle?.componentRef),t==null||!t.instance)return;let s=t.instance,a=s[e];typeof a=="function"&&(e==="_onReuseInit"?a.call(s,n):a.call(s))}hasInValidRoute(e){return!e.routeConfig||!!e.routeConfig.loadChildren||!!e.routeConfig.children}shouldDetach(e){return this.hasInValidRoute(e)?!1:(this.di("#shouldDetach",this.can(e),this.getUrl(e)),this.can(e))}saveCache(e,t,n){let s=this.getTruthRoute(e),a=this.getUrl(e),p=this.index(a),x={title:this.getTitle(a,s),url:a,closable:this.getClosable(a,e),_snapshot:e,_handle:t};if(p<0){if(this.items.splice(n??this.items.length,0,x),this.count>this._max){let A=this.items.findIndex(B=>B.url!==a&&B.closable);if(A!==-1){let B=this.items[A];this.remove(A,!1),De(1).pipe(Oe(1)).subscribe(()=>this._cachedChange.next({active:"close",url:B.url,list:this.cached.list}))}}}else this.items[p]=x}store(e,t){let n=this.getUrl(e);t!=null&&this.saveCache(e,t);let s=this.cached.list,a={title:this.getTitle(n,e),closable:this.getClosable(n,e),position:this.getKeepingScroll(n,e)?this.positionBuffer[n]:null,url:n,_snapshot:e,_handle:t},p=this.index(n),x=s[p]?._handle?.componentRef;t==null&&x!=null&&De(100).pipe(Oe(1)).subscribe(()=>this.runHook("_onReuseInit",x)),s[p]=a,this.removeUrlBuffer=null,this.di("#store","[override]",n),t&&t.componentRef&&this.runHook("_onReuseDestroy",t.componentRef),this._cachedChange.next({active:"override",item:a,list:s})}shouldAttach(e){if(this.hasInValidRoute(e))return!1;let t=this.getUrl(e),n=this.get(t),s=!!(n&&n._handle);return this.di("#shouldAttach",s,t),s||this._cachedChange.next({active:"add",url:t,list:this.cached.list}),s}retrieve(e){if(this.hasInValidRoute(e))return null;let t=this.getUrl(e),n=this.get(t),s=n&&n._handle||null;return this.di("#retrieve",t,s),s}shouldReuseRoute(e,t){let n=e.routeConfig===t.routeConfig;if(!n)return!1;let s=e.routeConfig&&e.routeConfig.path||"";return s.length>0&&~s.indexOf(":")&&(this.routeParamMatchMode==="strict"?n=this.getUrl(e)===this.getUrl(t):n=s===(t.routeConfig&&t.routeConfig.path||"")),this.di("====================="),this.di("#shouldReuseRoute",n,`${this.getUrl(t)}=>${this.getUrl(e)}`,e,t),n}getKeepingScroll(e,t){if(t&&t.data&&typeof t.data.keepingScroll=="boolean")return t.data.keepingScroll;let n=this.mode!==w.URL?this.getMenu(e):null;return n&&typeof n.keepingScroll=="boolean"?n.keepingScroll:this.keepingScroll}get isDisabledInRouter(){return this.injector.get(st,{}).scrollPositionRestoration==="disabled"}get ss(){return this.injector.get(dt)}initScroll(){this._router$&&this._router$.unsubscribe(),this._router$=this.injector.get(k).events.subscribe(e=>{if(e instanceof ot){let t=this.curUrl;this.getKeepingScroll(t,this.getTruthRoute(this.snapshot))?this.positionBuffer[t]=this.ss.getScrollPosition(this.keepingScrollContainer):delete this.positionBuffer[t]}else if(e instanceof Z){let t=this.curUrl,n=this.get(t);n&&n.position&&this.getKeepingScroll(t,this.getTruthRoute(this.snapshot))&&(this.isDisabledInRouter?this.ss.scrollToPosition(this.keepingScrollContainer,n.position):setTimeout(()=>this.ss.scrollToPosition(this.keepingScrollContainer,n.position),1))}})}ngOnDestroy(){let{_cachedChange:e,_router$:t}=this;this.clear(),this.cached.list=[],e.complete(),t&&t.unsubscribe()}};r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=pe({token:r,factory:r.\u0275fac});let i=r;return i})();function Dt(i,r){if(i&1){let o=M();h(0,"li",5),g("click",function(t){S(o);let n=c();return y(n.click(t,"refresh"))}),d()}if(i&2){let o=c();f("innerHTML",o.i18n.refresh,V)}}function Ot(i,r){if(i&1){let o=M();h(0,"li",8),g("click",function(t){let n=S(o).$implicit,s=c(2);return y(s.click(t,"custom",n))}),d()}if(i&2){let o=r.$implicit,e=c(2);f("nzDisabled",e.isDisabled(o))("innerHTML",o.title,V),$("data-type",o.id)}}function Nt(i,r){if(i&1&&(xe(0,"li",6),D(1,Ot,1,3,"li",7,Y)),i&2){let o=c();l(),O(o.customContextMenu)}}var ke=(()=>{let r=class r{constructor(){this.i18nSrv=u(ft),this.close=new U}set i18n(e){this._i18n=ne(ne({},this.i18nSrv.getData("reuseTab")),e)}get i18n(){return this._i18n}get includeNonCloseable(){return this.event.ctrlKey}notify(e){this.close.next({type:e,item:this.item,includeNonCloseable:this.includeNonCloseable})}ngOnInit(){this.includeNonCloseable&&(this.item.closable=!0)}click(e,t,n){if(e.preventDefault(),e.stopPropagation(),!(t==="close"&&!this.item.closable)&&!(t==="closeRight"&&this.item.last)){if(n){if(this.isDisabled(n))return;n.fn(this.item,n)}this.notify(t)}}isDisabled(e){return e.disabled?e.disabled(this.item):!1}closeMenu(e){e.type==="click"&&e.button===2||this.notify(null)}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=b({type:r,selectors:[["reuse-tab-context-menu"]],hostBindings:function(t,n){t&1&&g("click",function(a){return n.closeMenu(a)},!1,Pe)("contextmenu",function(a){return n.closeMenu(a)},!1,Pe)},inputs:{i18n:"i18n",item:"item",event:"event",customContextMenu:"customContextMenu"},outputs:{close:"close"},standalone:!0,features:[v],decls:6,vars:7,consts:[["nz-menu",""],["nz-menu-item","","data-type","refresh",3,"innerHTML"],["nz-menu-item","","data-type","close",3,"click","nzDisabled","innerHTML"],["nz-menu-item","","data-type","closeOther",3,"click","innerHTML"],["nz-menu-item","","data-type","closeRight",3,"click","nzDisabled","innerHTML"],["nz-menu-item","","data-type","refresh",3,"click","innerHTML"],["nz-menu-divider",""],["nz-menu-item","",3,"nzDisabled","innerHTML"],["nz-menu-item","",3,"click","nzDisabled","innerHTML"]],template:function(t,n){t&1&&(h(0,"ul",0),m(1,Dt,1,1,"li",1),h(2,"li",2),g("click",function(a){return n.click(a,"close")}),d(),h(3,"li",3),g("click",function(a){return n.click(a,"closeOther")}),d(),h(4,"li",4),g("click",function(a){return n.click(a,"closeRight")}),d(),m(5,Nt,3,0),d()),t&2&&(l(),_(n.item.active?1:-1),l(),f("nzDisabled",!n.item.closable)("innerHTML",n.i18n.close,V),l(),f("innerHTML",n.i18n.closeOther,V),l(),f("nzDisabled",n.item.last)("innerHTML",n.i18n.closeRight,V),l(),_(n.customContextMenu.length>0?5:-1))},dependencies:[Tt,vt],encapsulation:2,changeDetection:0});let i=r;return i})();var j=(()=>{let r=class r{constructor(){this.overlay=u(xt),this.ref=null,this.show=new re,this.close=new re}remove(){this.ref&&(this.ref.detach(),this.ref.dispose(),this.ref=null)}open(e){this.remove();let{event:t,item:n,customContextMenu:s}=e,{x:a,y:p}=t,x=[new He({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new He({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})],A=this.overlay.position().flexibleConnectedTo({x:a,y:p}).withPositions(x);this.ref=this.overlay.create({positionStrategy:A,panelClass:"reuse-tab__cm",scrollStrategy:this.overlay.scrollStrategies.close()});let B=this.ref.attach(new Ct(ke)),T=B.instance;T.i18n=this.i18n,T.item=ne({},n),T.customContextMenu=s,T.event=t;let Le=new $e;Le.add(T.close.subscribe(At=>{this.close.next(At),this.remove()})),B.onDestroy(()=>Le.unsubscribe())}};r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=pe({token:r,factory:r.\u0275fac});let i=r;return i})();var Be=(()=>{let r=class r{set i18n(e){this.srv.i18n=e}constructor(){this.srv=u(j),this.change=new U,this.srv.show.pipe(z()).subscribe(e=>this.srv.open(e)),this.srv.close.pipe(z()).subscribe(e=>this.change.emit(e))}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=b({type:r,selectors:[["reuse-tab-context"]],inputs:{i18n:"i18n"},outputs:{change:"change"},standalone:!0,features:[v],decls:0,vars:0,template:function(t,n){},encapsulation:2});let i=r;return i})();var Ie=(()=>{let r=class r{constructor(){this.srv=u(j)}_onContextMenu(e){this.srv.show.next({event:e,item:this.item,customContextMenu:this.customContextMenu}),e.preventDefault(),e.stopPropagation()}};r.\u0275fac=function(t){return new(t||r)},r.\u0275dir=Xe({type:r,selectors:[["","reuse-tab-context-menu",""]],hostBindings:function(t,n){t&1&&g("contextmenu",function(a){return n._onContextMenu(a)})},inputs:{item:[0,"reuse-tab-context-menu","item"],customContextMenu:"customContextMenu"},exportAs:["reuseTabContextMenu"],standalone:!0});let i=r;return i})();var Pt=["tabset"],Ut=i=>({$implicit:i});function Ht(i,r){}function Ft(i,r){if(i&1&&m(0,Ht,0,0,"ng-template",7),i&2){let o=c(2).$implicit,e=c();f("ngTemplateOutlet",e.titleRender)("ngTemplateOutletContext",tt(2,Ut,o))}}function jt(i,r){if(i&1&&E(0),i&2){let o=c(2).$implicit;H(" ",o.title," ")}}function Vt(i,r){if(i&1){let o=M();h(0,"i",9),g("click",function(t){S(o);let n=c(2).$index,s=c();return y(s._close(t,n,!1))}),d()}}function Lt(i,r){if(i&1&&(h(0,"div",6)(1,"span"),m(2,Ft,1,4,null,7)(3,jt,1,1),d()(),m(4,Vt,1,0,"i",8)),i&2){let o=c().$implicit,e=c();f("reuse-tab-context-menu",o)("customContextMenu",e.customContextMenu),$("title",o.title),l(),et("max-width",e.tabMaxWidth,"px"),G("reuse-tab__name-width",e.tabMaxWidth),l(),_(e.titleRender?2:3),l(2),_(o.closable?4:-1)}}function $t(i,r){if(i&1){let o=M();h(0,"nz-tab",5),g("nzClick",function(){let t=S(o).$index,n=c();return y(n._to(t))}),m(1,Lt,5,9,"ng-template",null,1,W),d()}if(i&2){let o=N(2);f("nzTitle",o)}}var It=(()=>{let r=class r{constructor(){this.srv=u(F,{optional:!0}),this.cdr=u(X),this.router=u(k),this.route=u(J),this.i18nSrv=u(Se),this.doc=u(it),this.platform=u(Re),this.directionality=u(ee),this.stateKey=u(te),this.stateSrv=u(ie),this.destroy$=u(ge),this.list=[],this.pos=0,this.dir="ltr",this.mode=w.Menu,this.debug=!1,this.allowClose=!0,this.keepingScroll=!1,this.storageState=!1,this.customContextMenu=[],this.tabBarStyle=null,this.tabType="line",this.routeParamMatchMode="strict",this.disabled=!1,this.change=new U,this.close=new U}set keepingScrollContainer(e){this._keepingScrollContainer=typeof e=="string"?this.doc.querySelector(e):e}genTit(e){return e.i18n?this.i18nSrv.fanyi(e.i18n):e.text}get curUrl(){return this.srv.getUrl(this.route.snapshot)}genCurItem(){let e=this.curUrl,t=this.srv.getTruthRoute(this.route.snapshot);return{url:e,title:this.genTit(this.srv.getTitle(e,t)),closable:this.allowClose&&this.srv.count>0&&this.srv.getClosable(e,t),active:!1,last:!1,index:0}}genList(e){let t=this.srv.items.map((a,p)=>({url:a.url,title:this.genTit(a.title),closable:this.allowClose&&this.srv.count>0&&this.srv.getClosable(a.url,a._snapshot),position:a.position,index:p,active:!1,last:!1})),n=this.curUrl,s=t.findIndex(a=>a.url===n)===-1;if(e&&e.active==="close"&&e.url===n){s=!1;let a=0,p=this.list.find(x=>x.url===n);p.index===t.length?a=t.length-1:p.index<t.length&&(a=Math.max(0,p.index)),this.router.navigateByUrl(t[a].url)}if(s){let a=this.pos+1;t.splice(a,0,this.genCurItem()),this.srv.saveCache(this.route.snapshot,null,a)}t.forEach((a,p)=>a.index=p),t.length===1&&(t[0].closable=!1),this.list=t,this.cdr.detectChanges(),this.updatePos()}updateTitle(e){let t=this.list.find(n=>n.url===e.url);t&&(t.title=this.genTit(e.title),this.cdr.detectChanges())}refresh(e){this.srv.runHook("_onReuseInit",this.pos===e.index?this.srv.componentRef:e.index,"refresh")}saveState(){!this.srv.inited||!this.storageState||this.stateSrv?.update(this.stateKey,this.list)}contextMenuChange(e){let t=null;switch(e.type){case"refresh":this.refresh(e.item);break;case"close":this._close(null,e.item.index,e.includeNonCloseable);break;case"closeRight":t=()=>{this.srv.closeRight(e.item.url,e.includeNonCloseable),this.close.emit(null)};break;case"closeOther":t=()=>{this.srv.clear(e.includeNonCloseable),this.close.emit(null)};break}t&&(!e.item.active&&e.item.index<=this.list.find(n=>n.active).index?this._to(e.item.index,t):t())}_to(e,t){e=Math.max(0,Math.min(e,this.list.length-1));let n=this.list[e];this.router.navigateByUrl(n.url).then(s=>{s&&(this.item=n,this.change.emit(n),t?.())})}_close(e,t,n){e!=null&&(e.preventDefault(),e.stopPropagation());let s=this.list[t];return(this.canClose?this.canClose({item:s,includeNonCloseable:n}):Ye(!0)).pipe(I(a=>a)).subscribe(()=>{this.srv.close(s.url,n),this.close.emit(s),this.cdr.detectChanges()}),!1}activate(e){this.srv!=null&&(this.srv.componentRef={instance:e})}updatePos(){let e=this.srv.getUrl(this.route.snapshot),t=this.list.filter(p=>p.url===e||!this.srv.isExclude(p.url));if(t.length===0)return;let n=t[t.length-1],s=t.find(p=>p.url===e);n.last=!0;let a=s==null?n.index:s.index;t.forEach((p,x)=>p.active=a===x),this.pos=a,this.tabset.nzSelectedIndex=a,this.list=t,this.cdr.detectChanges(),this.saveState()}ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe(z(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),!(!this.platform.isBrowser||this.srv==null)&&(this.srv.change.pipe(z(this.destroy$)).subscribe(e=>{switch(e?.active){case"title":this.updateTitle(e);return;case"override":if(e?.list?.length===this.list.length){this.updatePos();return}break}this.genList(e)}),this.i18nSrv.change.pipe(I(()=>this.srv.inited),z(this.destroy$),Qe(100)).subscribe(()=>this.genList({active:"title"})),this.srv.init())}ngOnChanges(e){!this.platform.isBrowser||this.srv==null||(e.max&&(this.srv.max=this.max),e.excludes&&(this.srv.excludes=this.excludes),e.mode&&(this.srv.mode=this.mode),e.routeParamMatchMode&&(this.srv.routeParamMatchMode=this.routeParamMatchMode),e.keepingScroll&&(this.srv.keepingScroll=this.keepingScroll,this.srv.keepingScrollContainer=this._keepingScrollContainer),e.storageState&&(this.srv.storageState=this.storageState),this.srv.debug=this.debug,this.cdr.detectChanges())}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=b({type:r,selectors:[["reuse-tab"],["","reuse-tab",""]],viewQuery:function(t,n){if(t&1&&se(Pt,5),t&2){let s;ae(s=le())&&(n.tabset=s.first)}},hostVars:10,hostBindings:function(t,n){t&2&&G("reuse-tab",!0)("reuse-tab__line",n.tabType==="line")("reuse-tab__card",n.tabType==="card")("reuse-tab__disabled",n.disabled)("reuse-tab-rtl",n.dir==="rtl")},inputs:{mode:"mode",i18n:"i18n",debug:[2,"debug","debug",C],max:[2,"max","max",ue],tabMaxWidth:[2,"tabMaxWidth","tabMaxWidth",ue],excludes:"excludes",allowClose:[2,"allowClose","allowClose",C],keepingScroll:[2,"keepingScroll","keepingScroll",C],storageState:[2,"storageState","storageState",C],keepingScrollContainer:"keepingScrollContainer",customContextMenu:"customContextMenu",tabBarExtraContent:"tabBarExtraContent",tabBarGutter:"tabBarGutter",tabBarStyle:"tabBarStyle",tabType:"tabType",routeParamMatchMode:"routeParamMatchMode",disabled:[2,"disabled","disabled",C],titleRender:"titleRender",canClose:"canClose"},outputs:{change:"change",close:"close"},exportAs:["reuseTab"],standalone:!0,features:[Te([j]),L,fe,v],decls:5,vars:7,consts:[["tabset",""],["titleTemplate",""],[3,"nzSelectedIndex","nzAnimated","nzType","nzTabBarExtraContent","nzTabBarGutter","nzTabBarStyle"],[3,"nzTitle"],[3,"change","i18n"],[3,"nzClick","nzTitle"],[1,"reuse-tab__name",3,"reuse-tab-context-menu","customContextMenu"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-icon","","nzType","close",1,"reuse-tab__op"],["nz-icon","","nzType","close",1,"reuse-tab__op",3,"click"]],template:function(t,n){if(t&1){let s=M();h(0,"nz-tabset",2,0),D(2,$t,3,1,"nz-tab",3,Y),d(),h(4,"reuse-tab-context",4),g("change",function(p){return S(s),y(n.contextMenuChange(p))}),d()}t&2&&(f("nzSelectedIndex",n.pos)("nzAnimated",!1)("nzType",n.tabType)("nzTabBarExtraContent",n.tabBarExtraContent)("nzTabBarGutter",n.tabBarGutter)("nzTabBarStyle",n.tabBarStyle),l(2),O(n.list),l(2),f("i18n",n.i18n))},dependencies:[q,Bt,kt,Ie,Be,Me],encapsulation:2,changeDetection:0});let i=r;return i})();var Fe=["*"];function Qt(i,r){}function Wt(i,r){if(i&1&&(h(0,"span",1),m(1,Qt,0,0,"ng-template",2),xe(2,"span",3),d()),i&2){let o=c(),e=N(4);f("nzDropdownMenu",o.nzOverlay),l(),f("ngTemplateOutlet",e)}}function Xt(i,r){}function qt(i,r){if(i&1&&m(0,Xt,0,0,"ng-template",2),i&2){c();let o=N(4);f("ngTemplateOutlet",o)}}function Zt(i,r){if(i&1&&(be(0),E(1),ve()),i&2){let o=c(2);l(),H(" ",o.nzBreadCrumbComponent.nzSeparator," ")}}function Jt(i,r){if(i&1&&(h(0,"nz-breadcrumb-separator"),m(1,Zt,2,1,"ng-container",4),d()),i&2){let o=c();l(),f("nzStringTemplateOutlet",o.nzBreadCrumbComponent.nzSeparator)}}function ei(i,r){i&1&&(h(0,"span",5),Q(1),d())}var ti=(i,r)=>r.url;function ii(i,r){if(i&1){let o=M();h(0,"nz-breadcrumb-item")(1,"a",0),g("click",function(t){let n=S(o).$implicit,s=c(2);return y(s.navigate(n.url,t))}),E(2),d()()}if(i&2){let o=r.$implicit;l(),$("href",o.url,Ze),l(),ce(o.label)}}function ni(i,r){if(i&1&&D(0,ii,3,2,"nz-breadcrumb-item",null,ti),i&2){let o=c();O(o.breadcrumbs)}}var ri=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=b({type:r,selectors:[["nz-breadcrumb-separator"]],hostAttrs:[1,"ant-breadcrumb-separator"],exportAs:["nzBreadcrumbSeparator"],standalone:!0,features:[v],ngContentSelectors:Fe,decls:1,vars:0,template:function(t,n){t&1&&(K(),Q(0))},encapsulation:2});let i=r;return i})(),we=class{},Ae=(()=>{let r=class r{constructor(e){this.nzBreadCrumbComponent=e}};r.\u0275fac=function(t){return new(t||r)(R(we))},r.\u0275cmp=b({type:r,selectors:[["nz-breadcrumb-item"]],inputs:{nzOverlay:"nzOverlay"},exportAs:["nzBreadcrumbItem"],standalone:!0,features:[v],ngContentSelectors:Fe,decls:5,vars:2,consts:[["noMenuTpl",""],["nz-dropdown","",1,"ant-breadcrumb-overlay-link",3,"nzDropdownMenu"],[3,"ngTemplateOutlet"],["nz-icon","","nzType","down"],[4,"nzStringTemplateOutlet"],[1,"ant-breadcrumb-link"]],template:function(t,n){t&1&&(K(),m(0,Wt,3,2,"span",1)(1,qt,1,1,null,2)(2,Jt,2,1,"nz-breadcrumb-separator")(3,ei,2,0,"ng-template",null,0,W)),t&2&&(_(n.nzOverlay?0:1),l(2),_(n.nzBreadCrumbComponent.nzSeparator?2:-1))},dependencies:[q,ri,yt,St,bt,Me,Ee,ze],encapsulation:2,changeDetection:0});let i=r;return i})(),je=(()=>{let r=class r{constructor(e,t,n,s,a){this.injector=e,this.cdr=t,this.elementRef=n,this.renderer=s,this.directionality=a,this.nzAutoGenerate=!1,this.nzSeparator="/",this.nzRouteLabel="breadcrumb",this.nzRouteLabelFn=p=>p,this.nzRouteFn=p=>p,this.breadcrumbs=[],this.dir="ltr",this.destroy$=new re}ngOnInit(){this.nzAutoGenerate&&this.registerRouterChange(),this.directionality.change?.pipe(Ne(this.destroy$)).subscribe(e=>{this.dir=e,this.prepareComponentForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareComponentForRtl()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}navigate(e,t){t.preventDefault(),this.injector.get(k).navigateByUrl(e)}registerRouterChange(){try{let e=this.injector.get(k),t=this.injector.get(J);e.events.pipe(I(n=>n instanceof Z),Ne(this.destroy$),We(!0)).subscribe(()=>{this.breadcrumbs=this.getBreadcrumbs(t.root),this.cdr.markForCheck()})}catch{throw new Error(`${mt} You should import RouterModule if you want to use 'NzAutoGenerate'.`)}}getBreadcrumbs(e,t="",n=[]){let s=e.children;if(s.length===0)return n;for(let a of s)if(a.outlet===rt){let p=a.snapshot.url.map(T=>T.path).filter(T=>T).join("/"),x=p?`${t}/${p}`:t,A=this.nzRouteLabelFn(a.snapshot.data[this.nzRouteLabel]),B=this.nzRouteFn(x);if(p&&A){let T={label:A,params:a.snapshot.params,url:B};n.push(T)}return this.getBreadcrumbs(a,x,n)}return n}prepareComponentForRtl(){this.dir==="rtl"?this.renderer.addClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl")}};r.\u0275fac=function(t){return new(t||r)(R(_e),R(X),R(qe),R(Ce),R(ee))},r.\u0275cmp=b({type:r,selectors:[["nz-breadcrumb"]],hostAttrs:[1,"ant-breadcrumb"],inputs:{nzAutoGenerate:[2,"nzAutoGenerate","nzAutoGenerate",C],nzSeparator:"nzSeparator",nzRouteLabel:"nzRouteLabel",nzRouteLabelFn:"nzRouteLabelFn",nzRouteFn:"nzRouteFn"},exportAs:["nzBreadcrumb"],standalone:!0,features:[Te([{provide:we,useExisting:r}]),L,v],ngContentSelectors:Fe,decls:2,vars:1,consts:[[3,"click"]],template:function(t,n){t&1&&(K(),Q(0),m(1,ni,2,0)),t&2&&(l(),_(n.nzAutoGenerate&&n.breadcrumbs.length?1:-1))},dependencies:[Ae],encapsulation:2,changeDetection:0});let i=r;return i})(),wt=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=de({type:r}),r.\u0275inj=he({imports:[je,Ae]});let i=r;return i})();var oi=["conTpl"],si=["affix"],ai=["*"],li=()=>({rows:3}),ci=()=>({size:"large",shape:"circle"});function ui(i,r){}function mi(i,r){if(i&1&&(h(0,"nz-affix",3,1),m(2,ui,0,0,"ng-template",4),d()),i&2){let o=c(),e=N(3);f("nzOffsetTop",o.fixedOffsetTop),l(2),f("ngTemplateOutlet",e)}}function pi(i,r){}function hi(i,r){if(i&1&&m(0,pi,0,0,"ng-template",4),i&2){c();let o=N(3);f("ngTemplateOutlet",o)}}function di(i,r){}function fi(i,r){if(i&1&&m(0,di,0,0,"ng-template",4),i&2){let o=c(2);f("ngTemplateOutlet",o.breadcrumb)}}function _i(i,r){if(i&1&&(h(0,"a",15),E(1),d()),i&2){let o=c().$implicit;f("routerLink",o.link),l(),ce(o.title)}}function gi(i,r){if(i&1&&E(0),i&2){let o=c().$implicit;H(" ",o.title," ")}}function Ci(i,r){if(i&1&&(h(0,"nz-breadcrumb-item"),m(1,_i,2,2,"a",15)(2,gi,1,1),d()),i&2){let o=r.$implicit;l(),_(o.link?1:2)}}function xi(i,r){if(i&1&&(h(0,"nz-breadcrumb"),D(1,Ci,3,1,"nz-breadcrumb-item",null,Y),d()),i&2){let o=c(3);l(),O(o.paths)}}function bi(i,r){if(i&1&&m(0,xi,3,0,"nz-breadcrumb"),i&2){let o=c(2);_(o.paths&&o.paths.length>0?0:-1)}}function vi(i,r){}function Ti(i,r){if(i&1&&(h(0,"div",8),m(1,vi,0,0,"ng-template",4),d()),i&2){let o=c(2);l(),f("ngTemplateOutlet",o.logo)}}function Si(i,r){}function yi(i,r){if(i&1&&m(0,Si,0,0,"ng-template",4),i&2){let o=c(3);f("ngTemplateOutlet",o._titleTpl)}}function Ri(i,r){if(i&1&&(be(0),E(1),ve()),i&2){let o=c(5);l(),ce(o.titleSub)}}function Mi(i,r){if(i&1&&(h(0,"small"),m(1,Ri,2,1,"ng-container",16),d()),i&2){let o=c(4);l(),f("nzStringTemplateOutlet",o.titleSub)}}function zi(i,r){if(i&1&&(E(0),m(1,Mi,2,1,"small")),i&2){let o=c(3);H(" ",o._titleVal," "),l(),_(o.titleSub?1:-1)}}function Ei(i,r){if(i&1&&(h(0,"h1",11),m(1,yi,1,1,null,4)(2,zi,2,2),d()),i&2){let o=c(2);l(),_(o._titleTpl?1:2)}}function ki(i,r){}function Bi(i,r){if(i&1&&(h(0,"div",12),m(1,ki,0,0,"ng-template",4),d()),i&2){let o=c(2);l(),f("ngTemplateOutlet",o.action)}}function Ii(i,r){}function wi(i,r){}function Ai(i,r){if(i&1&&(h(0,"div",14),m(1,wi,0,0,"ng-template",4),d()),i&2){let o=c(2);l(),f("ngTemplateOutlet",o.extra)}}function Di(i,r){}function Oi(i,r){if(i&1){let o=M();h(0,"div",5)(1,"div")(2,"nz-skeleton",6),m(3,fi,1,1,null,4)(4,bi,1,1),h(5,"div",7),m(6,Ti,2,1,"div",8),h(7,"div",9)(8,"div",10),m(9,Ei,3,1,"h1",11)(10,Bi,2,1,"div",12),d(),h(11,"div",10)(12,"div",13,2),g("cdkObserveContent",function(){S(o);let t=c();return y(t.checkContent())}),Q(14),m(15,Ii,0,0,"ng-template",4),d(),m(16,Ai,2,1,"div",14),d()()(),m(17,Di,0,0,"ng-template",4),d()()()}if(i&2){let o=c();G("page-header-rtl",o.dir==="rtl"),l(),G("page-header__wide",o.wide),l(),f("nzLoading",o.loading)("nzTitle",!1)("nzActive",!0)("nzParagraph",Ue(16,li))("nzAvatar",Ue(17,ci)),l(),_(o.breadcrumb?3:4),l(3),_(o.logo?6:-1),l(3),_(o._titleVal||o._titleTpl?9:-1),l(),_(o.action?10:-1),l(5),f("ngTemplateOutlet",o.content),l(),_(o.extra?16:-1),l(),f("ngTemplateOutlet",o.tab)}}var Ve=(()=>{let r=class r{get menus(){return this.menuSrv.getPathByUrl(this.router.url,this.recursiveBreadcrumb)}set title(e){e instanceof Je?(this._title=null,this._titleTpl=e,this._titleVal=""):(this._title=e,this._titleVal=this._title)}constructor(e,t,n){this.renderer=u(Ce),this.router=u(k),this.cdr=u(X),this.menuSrv=u(ye),this.i18nSrv=u(Se),this.titleSrv=u(pt),this.reuseSrv=u(F,{optional:!0}),this.directionality=u(ee),this.destroy$=u(ge),this.inited=!1,this.isBrowser=!0,this.dir="ltr",this._titleVal="",this.paths=[],this._title=null,this._titleTpl=null,this.loading=!1,this.wide=!1,this.breadcrumb=null,this.logo=null,this.action=null,this.content=null,this.extra=null,this.tab=null,this.isBrowser=n.isBrowser,t.attach(this,"pageHeader",{home:"\u9996\u9875",homeLink:"/",autoBreadcrumb:!0,recursiveBreadcrumb:!1,autoTitle:!0,syncTitle:!0,fixed:!1,fixedOffsetTop:64}),e.notify.pipe(z(),I(a=>this.affix&&a.type==="layout"&&a.name==="collapsed")).subscribe(()=>this.affix.updatePosition({}));let s=[this.router.events.pipe(I(a=>a instanceof Z))];this.menuSrv!=null&&s.push(this.menuSrv.change),s.push(this.i18nSrv.change),Ke(...s).pipe(z(),I(()=>this.inited)).subscribe(()=>this.refresh())}refresh(){this.setTitle().genBreadcrumb(),this.cdr.detectChanges()}genBreadcrumb(){if(this.breadcrumb||!this.autoBreadcrumb||this.menus.length<=0){this.paths=[];return}let e=[];this.menus.forEach(t=>{if(typeof t.hideInBreadcrumb<"u"&&t.hideInBreadcrumb)return;let n=t.text;t.i18n&&(n=this.i18nSrv.fanyi(t.i18n)),e.push({title:n,link:t.link&&[t.link]})}),this.home&&e.splice(0,0,{title:this.homeI18n&&this.i18nSrv.fanyi(this.homeI18n)||this.home,link:[this.homeLink]}),this.paths=e}setTitle(){if(this._title==null&&this._titleTpl==null&&this.autoTitle&&this.menus.length>0){let e=this.menus[this.menus.length-1],t=e.text;e.i18n&&(t=this.i18nSrv.fanyi(e.i18n)),this._titleVal=t}return this._titleVal&&this.syncTitle&&(this.titleSrv.setTitle(this._titleVal),!this.inited&&this.reuseSrv&&(this.reuseSrv.title=this._titleVal)),this}checkContent(){ht(this.conTpl.nativeElement)?this.renderer.setAttribute(this.conTpl.nativeElement,"hidden",""):this.renderer.removeAttribute(this.conTpl.nativeElement,"hidden")}ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe(z(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.refresh(),this.inited=!0}ngAfterViewInit(){this.checkContent()}ngOnChanges(){this.inited&&this.refresh()}};r.\u0275fac=function(t){return new(t||r)(R(ut),R(ct),R(Re))},r.\u0275cmp=b({type:r,selectors:[["page-header"]],viewQuery:function(t,n){if(t&1&&(se(oi,5),se(si,5)),t&2){let s;ae(s=le())&&(n.conTpl=s.first),ae(s=le())&&(n.affix=s.first)}},inputs:{title:"title",titleSub:"titleSub",loading:[2,"loading","loading",C],wide:[2,"wide","wide",C],home:"home",homeLink:"homeLink",homeI18n:"homeI18n",autoBreadcrumb:[2,"autoBreadcrumb","autoBreadcrumb",C],autoTitle:[2,"autoTitle","autoTitle",C],syncTitle:[2,"syncTitle","syncTitle",C],fixed:[2,"fixed","fixed",C],fixedOffsetTop:[2,"fixedOffsetTop","fixedOffsetTop",ue],breadcrumb:"breadcrumb",recursiveBreadcrumb:[2,"recursiveBreadcrumb","recursiveBreadcrumb",C],logo:"logo",action:"action",content:"content",extra:"extra",tab:"tab"},exportAs:["pageHeader"],standalone:!0,features:[L,fe,v],ngContentSelectors:ai,decls:4,vars:1,consts:[["phTpl",""],["affix",""],["conTpl",""],[3,"nzOffsetTop"],[3,"ngTemplateOutlet"],[1,"page-header"],[1,"d-block",3,"nzLoading","nzTitle","nzActive","nzParagraph","nzAvatar"],[1,"page-header__detail"],[1,"page-header__logo"],[1,"page-header__main"],[1,"page-header__row"],[1,"page-header__title"],[1,"page-header__action"],[1,"page-header__desc",3,"cdkObserveContent"],[1,"page-header__extra"],[3,"routerLink"],[4,"nzStringTemplateOutlet"]],template:function(t,n){t&1&&(K(),m(0,mi,3,2,"nz-affix",3)(1,hi,1,1,null,4)(2,Oi,18,18,"ng-template",null,0,W)),t&2&&_(n.isBrowser&&n.fixed?0:1)},dependencies:[zt,q,Rt,je,Ae,at,ze,_t],encapsulation:2,changeDetection:0});let i=r;return i})();var Ni=[Ve],Pi=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=de({type:r}),r.\u0275inj=he({imports:[nt,lt,gt,Et,Mt,wt,Ee,Ni]});let i=r;return i})();export{F as a,It as b,Ae as c,je as d,wt as e,Ve as f,Pi as g};
