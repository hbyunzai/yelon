import{a as ee,d as ie}from"./chunk-DQW7NPKP.js";import{Aa as B,Ab as y,Ba as p,Bb as C,C as Q,Ca as ut,Cb as Lt,Db as pt,Dd as Qt,Dh as Kt,Eb as Bt,F as K,Fa as Ot,Fb as Wt,Fd as vt,Fh as Jt,H as kt,I as At,Ih as te,Jh as ne,Ka as u,Kb as Ft,Kf as Tt,La as d,Lb as R,Ma as J,Mb as it,O as Dt,Oc as Vt,Pa as X,Rd as A,S as Nt,Ta as g,Ua as j,Va as c,Vg as st,W as dt,Wa as tt,Wb as ft,Wc as Ht,Wg as at,Xa as w,Xc as $t,Y as O,bc as nt,bh as q,ch as U,da as Rt,de as Xt,ea as Et,ge as jt,h as $,hb as z,he as Z,ib as T,if as Yt,ja as D,jb as F,k as G,ka as Mt,kb as P,kc as bt,la as L,lb as V,lc as Y,mf as Zt,n as St,nb as k,o as wt,pc as Pt,q as _,qb as I,qc as gt,ra as ht,rf as qt,s as ct,sa as f,sb as h,ta as b,tb as mt,ub as et,uf as Ut,vd as zt,vf as Gt,yb as H,zb as N}from"./chunk-MW3JJ3MN.js";function ve(s,n){if(s&1&&(P(0),F(1,"span",1),V()),s&2){let o=n.$implicit;u(),c("nzType",o)}}var Te=()=>({minWidth:"46px"}),_e=()=>({visible:!1});function ye(s,n){if(s&1&&(P(0),pt(1),V()),s&2){let o=h().$implicit;u(),Wt(" ",o.tab.label," ")}}function Ce(s,n){if(s&1){let o=k();z(0,"li",8),I("click",function(){let e=f(o).$implicit,i=h(2);return b(i.onSelect(e))})("contextmenu",function(e){let i=f(o).$implicit,a=h(2);return b(a.onContextmenu(i,e))}),g(1,ye,2,1,"ng-container",9),T()}if(s&2){let o=n.$implicit;w("ant-tabs-dropdown-menu-item-disabled",o.disabled),c("nzSelected",o.active)("nzDisabled",o.disabled),u(),c("nzStringTemplateOutlet",o.tab.label)("nzStringTemplateOutletContext",it(6,_e))}}function Ie(s,n){if(s&1&&(z(0,"ul",6),g(1,Ce,2,7,"li",7),T()),s&2){let o=h();u(),c("ngForOf",o.items)}}function xe(s,n){if(s&1){let o=k();z(0,"button",10),I("click",function(){f(o);let e=h();return b(e.addClicked.emit())}),T()}if(s&2){let o=h();c("addIcon",o.addIcon)}}var Se=["navWarp"],we=["navList"],ke=["*"];function Ae(s,n){if(s&1){let o=k();z(0,"button",8),I("click",function(){f(o);let e=h();return b(e.addClicked.emit())}),T()}if(s&2){let o=h();c("addIcon",o.addIcon),j("tabindex",-1)}}function De(s,n){}function Ne(s,n){if(s&1&&(z(0,"div",9),g(1,De,0,0,"ng-template",10),T()),s&2){let o=h();u(),c("ngTemplateOutlet",o.extraTemplate)}}var Re=["nz-tab-body",""];function Ee(s,n){}function Me(s,n){if(s&1&&(P(0),g(1,Ee,0,0,"ng-template",1),V()),s&2){let o=h();u(),c("ngTemplateOutlet",o.content)}}function Oe(s,n){if(s&1&&(P(0),F(1,"span",1),V()),s&2){let o=n.$implicit;u(),c("nzType",o)}}var Le=["contentTemplate"],Be=[[["","nz-tab-link",""]],"*"],We=["[nz-tab-link]","*"];function Fe(s,n){s&1&&et(0)}function Pe(s,n){s&1&&et(0,1)}var Ve=()=>({visible:!0});function He(s,n){if(s&1&&(P(0),pt(1),V()),s&2){let o=h().$implicit;u(),Bt(o.label)}}function $e(s,n){if(s&1){let o=k();z(0,"button",10),I("click",function(e){f(o);let i=h().index,a=h(2);return b(a.onClose(i,e))}),T()}if(s&2){let o=h().$implicit;c("closeIcon",o.nzCloseIcon)}}function Qe(s,n){if(s&1){let o=k();z(0,"div",6),I("click",function(e){let i=f(o),a=i.$implicit,r=i.index,l=h(2);return b(l.clickNavItem(a,r,e))})("contextmenu",function(e){let i=f(o).$implicit,a=h(2);return b(a.contextmenuNavItem(i,e))}),z(1,"button",7),g(2,He,2,1,"ng-container",8)(3,$e,1,1,"button",9),T()()}if(s&2){let o=n.$implicit,t=n.index,e=h(2);tt("margin-right",e.position==="horizontal"?e.nzTabBarGutter:null,"px")("margin-bottom",e.position==="vertical"?e.nzTabBarGutter:null,"px"),w("ant-tabs-tab-active",e.nzSelectedIndex===t)("ant-tabs-tab-disabled",o.nzDisabled),u(),c("id",e.getTabContentId(t))("disabled",o.nzDisabled)("tab",o)("active",e.nzSelectedIndex===t),j("tabIndex",e.getTabIndex(o,t))("aria-disabled",o.nzDisabled)("aria-selected",e.nzSelectedIndex===t&&!e.nzHideAll)("aria-controls",e.getTabContentId(t)),u(),c("nzStringTemplateOutlet",o.label)("nzStringTemplateOutletContext",it(19,Ve)),u(),c("ngIf",o.nzClosable&&e.closable&&!o.nzDisabled)}}function Xe(s,n){if(s&1){let o=k();z(0,"nz-tabs-nav",4),I("tabScroll",function(e){f(o);let i=h();return b(i.nzTabListScroll.emit(e))})("selectFocusedIndex",function(e){f(o);let i=h();return b(i.setSelectedIndex(e))})("addClicked",function(){f(o);let e=h();return b(e.onAdd())}),g(1,Qe,4,20,"div",5),T()}if(s&2){let o=h();c("ngStyle",o.nzTabBarStyle)("selectedIndex",o.nzSelectedIndex||0)("inkBarAnimated",o.inkBarAnimated)("addable",o.addable)("addIcon",o.nzAddIcon)("hideBar",o.nzHideAll)("position",o.position)("extraTemplate",o.nzTabBarExtraContent),u(),c("ngForOf",o.tabs)}}function je(s,n){if(s&1&&F(0,"div",11),s&2){let o=n.$implicit,t=n.index,e=h();c("id",e.getTabContentId(t))("active",e.nzSelectedIndex===t&&!e.nzHideAll)("content",o.content)("forceRender",o.nzForceRender)("tabPaneAnimated",e.tabPaneAnimated),j("aria-labelledby",e.getTabContentId(t))}}var rt=(()=>{let n=class n{constructor(t){this.elementRef=t,this.addIcon="plus",this.element=this.elementRef.nativeElement}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}};n.\u0275fac=function(e){return new(e||n)(d(B))},n.\u0275cmp=D({type:n,selectors:[["nz-tab-add-button"],["button","nz-tab-add-button",""]],hostAttrs:["aria-label","Add tab","type","button",1,"ant-tabs-nav-add"],inputs:{addIcon:"addIcon"},standalone:!0,features:[R],decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(e,i){e&1&&g(0,ve,2,1,"ng-container",0),e&2&&c("nzStringTemplateOutlet",i.addIcon)},dependencies:[U,q,at,st],encapsulation:2});let s=n;return s})(),se=(()=>{let n=class n{get _animated(){return this.animationMode!=="NoopAnimations"&&this.animated}constructor(t,e,i){this.elementRef=t,this.ngZone=e,this.animationMode=i,this.position="horizontal",this.animated=!0}alignToElement(t){this.ngZone.runOutsideAngular(()=>{Tt(()=>this.setStyles(t))})}setStyles(t){let e=this.elementRef.nativeElement;this.position==="horizontal"?(e.style.top="",e.style.height="",e.style.left=this.getLeftPosition(t),e.style.width=this.getElementWidth(t)):(e.style.left="",e.style.width="",e.style.top=this.getTopPosition(t),e.style.height=this.getElementHeight(t))}getLeftPosition(t){return t?`${t.offsetLeft||0}px`:"0"}getElementWidth(t){return t?`${t.offsetWidth||0}px`:"0"}getTopPosition(t){return t?`${t.offsetTop||0}px`:"0"}getElementHeight(t){return t?`${t.offsetHeight||0}px`:"0"}};n.\u0275fac=function(e){return new(e||n)(d(B),d(X),d(Ot,8))},n.\u0275dir=L({type:n,selectors:[["nz-tabs-ink-bar"],["","nz-tabs-ink-bar",""]],hostAttrs:[1,"ant-tabs-ink-bar"],hostVars:2,hostBindings:function(e,i){e&2&&w("ant-tabs-ink-bar-animated",i._animated)},inputs:{position:"position",animated:"animated"},standalone:!0});let s=n;return s})(),le=(()=>{let n=class n{constructor(t){this.elementRef=t,this.disabled=!1,this.active=!1,this.el=t.nativeElement,this.parentElement=this.el.parentElement}focus(){this.el.focus()}get width(){return this.parentElement.offsetWidth}get height(){return this.parentElement.offsetHeight}get left(){return this.parentElement.offsetLeft}get top(){return this.parentElement.offsetTop}};n.\u0275fac=function(e){return new(e||n)(d(B))},n.\u0275dir=L({type:n,selectors:[["","nzTabNavItem",""]],inputs:{disabled:"disabled",tab:"tab",active:"active"},standalone:!0});let s=n;return s})(),_t=(()=>{let n=class n{constructor(t,e){this.cdr=t,this.elementRef=e,this.items=[],this.addable=!1,this.addIcon="plus",this.addClicked=new p,this.selected=new p,this.closeAnimationWaitTimeoutId=-1,this.menuOpened=!1,this.element=this.elementRef.nativeElement}onSelect(t){t.disabled||(t.tab.nzClick.emit(),this.selected.emit(t))}onContextmenu(t,e){t.disabled||t.tab.nzContextmenu.emit(e)}showItems(){clearTimeout(this.closeAnimationWaitTimeoutId),this.menuOpened=!0,this.cdr.markForCheck()}menuVisChange(t){t||(this.closeAnimationWaitTimeoutId=setTimeout(()=>{this.menuOpened=!1,this.cdr.markForCheck()},150))}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}ngOnDestroy(){clearTimeout(this.closeAnimationWaitTimeoutId)}};n.\u0275fac=function(e){return new(e||n)(d(nt),d(B))},n.\u0275cmp=D({type:n,selectors:[["nz-tab-nav-operation"]],hostAttrs:[1,"ant-tabs-nav-operations"],hostVars:2,hostBindings:function(e,i){e&2&&w("ant-tabs-nav-operations-hidden",i.items.length===0)},inputs:{items:"items",addable:"addable",addIcon:"addIcon"},outputs:{addClicked:"addClicked",selected:"selected"},exportAs:["nzTabNavOperation"],standalone:!0,features:[R],decls:7,vars:6,consts:[["dropdownTrigger","nzDropdown"],["menu","nzDropdownMenu"],["nz-dropdown","","type","button","tabindex","-1","aria-hidden","true","nzOverlayClassName","nz-tabs-dropdown",1,"ant-tabs-nav-more",3,"nzVisibleChange","mouseenter","nzDropdownMenu","nzOverlayStyle","nzMatchWidthElement"],["nz-icon","","nzType","ellipsis"],["nz-menu","",4,"ngIf"],["nz-tab-add-button","",3,"addIcon","click",4,"ngIf"],["nz-menu",""],["nz-menu-item","","class","ant-tabs-dropdown-menu-item",3,"ant-tabs-dropdown-menu-item-disabled","nzSelected","nzDisabled","click","contextmenu",4,"ngFor","ngForOf"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"click","contextmenu","nzSelected","nzDisabled"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["nz-tab-add-button","",3,"click","addIcon"]],template:function(e,i){if(e&1){let a=k();z(0,"button",2,0),I("nzVisibleChange",function(l){return f(a),b(i.menuVisChange(l))})("mouseenter",function(){return f(a),b(i.showItems())}),F(2,"span",3),T(),z(3,"nz-dropdown-menu",null,1),g(5,Ie,2,1,"ul",4),T(),g(6,xe,1,1,"button",5)}if(e&2){let a=Lt(4);c("nzDropdownMenu",a)("nzOverlayStyle",it(5,Te))("nzMatchWidthElement",null),u(5),c("ngIf",i.menuOpened),u(),c("ngIf",i.addable)}},dependencies:[at,st,Y,bt,U,q,rt,ie,te,Jt,Kt,ee],encapsulation:2,changeDetection:0});let s=n;return s})(),Ye=.1,ae=.01,ot=20,oe=.995**ot,Ze=(()=>{let n=class n{constructor(t,e){this.ngZone=t,this.elementRef=e,this.lastWheelDirection=null,this.lastWheelTimestamp=0,this.lastTimestamp=0,this.lastTimeDiff=0,this.lastMixedWheel=0,this.lastWheelPrevent=!1,this.touchPosition=null,this.lastOffset=null,this.motion=-1,this.unsubscribe=()=>{},this.offsetChange=new p,this.tabScroll=new p,this.onTouchEnd=i=>{if(!this.touchPosition)return;let a=this.lastOffset,r=this.lastTimeDiff;if(this.lastOffset=this.touchPosition=null,a){let l=a.x/r,m=a.y/r,x=Math.abs(l),E=Math.abs(m);if(Math.max(x,E)<Ye)return;let S=l,M=m;this.motion=window.setInterval(()=>{if(Math.abs(S)<ae&&Math.abs(M)<ae){window.clearInterval(this.motion);return}S*=oe,M*=oe,this.onOffset(S*ot,M*ot,i)},ot)}},this.onTouchMove=i=>{if(!this.touchPosition)return;i.preventDefault();let{screenX:a,screenY:r}=i.touches[0],l=a-this.touchPosition.x,m=r-this.touchPosition.y;this.onOffset(l,m,i);let x=Date.now();this.lastTimeDiff=x-this.lastTimestamp,this.lastTimestamp=x,this.lastOffset={x:l,y:m},this.touchPosition={x:a,y:r}},this.onTouchStart=i=>{let{screenX:a,screenY:r}=i.touches[0];this.touchPosition={x:a,y:r},window.clearInterval(this.motion)},this.onWheel=i=>{let{deltaX:a,deltaY:r}=i,l,m=Math.abs(a),x=Math.abs(r);m===x?l=this.lastWheelDirection==="x"?a:r:m>x?(l=a,this.lastWheelDirection="x"):(l=r,this.lastWheelDirection="y");let E=Date.now(),S=Math.abs(l);(E-this.lastWheelTimestamp>100||S-this.lastMixedWheel>10)&&(this.lastWheelPrevent=!1),this.onOffset(-l,-l,i),(i.defaultPrevented||this.lastWheelPrevent)&&(this.lastWheelPrevent=!0),this.lastWheelTimestamp=E,this.lastMixedWheel=S}}ngOnInit(){this.unsubscribe=this.ngZone.runOutsideAngular(()=>{let t=this.elementRef.nativeElement,e=Q(t,"wheel"),i=Q(t,"touchstart"),a=Q(t,"touchmove"),r=Q(t,"touchend"),l=new $;return l.add(this.subscribeWrap("wheel",e,this.onWheel)),l.add(this.subscribeWrap("touchstart",i,this.onTouchStart)),l.add(this.subscribeWrap("touchmove",a,this.onTouchMove)),l.add(this.subscribeWrap("touchend",r,this.onTouchEnd)),()=>{l.unsubscribe()}})}subscribeWrap(t,e,i){return e.subscribe(a=>{this.tabScroll.emit({type:t,event:a}),a.defaultPrevented||i(a)})}onOffset(t,e,i){this.ngZone.run(()=>{this.offsetChange.emit({x:t,y:e,event:i})})}ngOnDestroy(){this.unsubscribe()}};n.\u0275fac=function(e){return new(e||n)(d(X),d(B))},n.\u0275dir=L({type:n,selectors:[["","nzTabScrollList",""]],outputs:{offsetChange:"offsetChange",tabScroll:"tabScroll"},standalone:!0});let s=n;return s})(),qe=typeof requestAnimationFrame<"u"?wt:St,re=150,yt=(()=>{let n=class n{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=vt(t);this._selectedIndex!==e&&(this._selectedIndex=t,this.selectedIndexChanged=!0,this.keyManager&&this.keyManager.updateActiveItem(t))}get focusIndex(){return this.keyManager?this.keyManager.activeItemIndex:0}set focusIndex(t){!this.isValidIndex(t)||this.focusIndex===t||!this.keyManager||this.keyManager.setActiveItem(t)}get showAddButton(){return this.hiddenItems.length===0&&this.addable}constructor(t,e,i,a,r){this.cdr=t,this.ngZone=e,this.viewportRuler=i,this.nzResizeObserver=a,this.dir=r,this.indexFocused=new p,this.selectFocusedIndex=new p,this.addClicked=new p,this.tabScroll=new p,this.position="horizontal",this.addable=!1,this.hideBar=!1,this.addIcon="plus",this.inkBarAnimated=!0,this.translate=null,this.transformX=0,this.transformY=0,this.pingLeft=!1,this.pingRight=!1,this.pingTop=!1,this.pingBottom=!1,this.hiddenItems=[],this.destroy$=new G,this._selectedIndex=0,this.wrapperWidth=0,this.wrapperHeight=0,this.scrollListWidth=0,this.scrollListHeight=0,this.operationWidth=0,this.operationHeight=0,this.addButtonWidth=0,this.addButtonHeight=0,this.selectedIndexChanged=!1,this.lockAnimationTimeoutId=-1,this.cssTransformTimeWaitingId=-1}ngAfterViewInit(){let t=this.dir?this.dir.change.asObservable():ct(null),e=this.viewportRuler.change(150),i=()=>{this.updateScrollListPosition(),this.alignInkBarToSelectedTab()};this.keyManager=new qt(this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap(),this.keyManager.updateActiveItem(this.selectedIndex),Tt(i),K(this.nzResizeObserver.observe(this.navWarpRef),this.nzResizeObserver.observe(this.navListRef)).pipe(O(this.destroy$),At(16,qe)).subscribe(()=>{i()}),K(t,e,this.items.changes).pipe(O(this.destroy$)).subscribe(()=>{Promise.resolve().then(i),this.keyManager.withHorizontalOrientation(this.getLayoutDirection())}),this.keyManager.change.pipe(O(this.destroy$)).subscribe(a=>{this.indexFocused.emit(a),this.setTabFocus(a),this.scrollToTab(this.keyManager.activeItem)})}ngAfterContentChecked(){this.selectedIndexChanged&&(this.updateScrollListPosition(),this.alignInkBarToSelectedTab(),this.selectedIndexChanged=!1,this.cdr.markForCheck())}ngOnDestroy(){clearTimeout(this.lockAnimationTimeoutId),clearTimeout(this.cssTransformTimeWaitingId),this.destroy$.next(),this.destroy$.complete()}onSelectedFromMenu(t){let e=this.items.toArray().findIndex(i=>i===t);e!==-1&&(this.keyManager.updateActiveItem(e),this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this.scrollToTab(t)))}onOffsetChange(t){if(this.position==="horizontal"){if(this.lockAnimationTimeoutId===-1&&(this.transformX>=0&&t.x>0||this.transformX<=this.wrapperWidth-this.scrollListWidth&&t.x<0))return;t.event.preventDefault(),this.transformX=this.clampTransformX(this.transformX+t.x),this.setTransform(this.transformX,0)}else{if(this.lockAnimationTimeoutId===-1&&(this.transformY>=0&&t.y>0||this.transformY<=this.wrapperHeight-this.scrollListHeight&&t.y<0))return;t.event.preventDefault(),this.transformY=this.clampTransformY(this.transformY+t.y),this.setTransform(0,this.transformY)}this.lockAnimation(),this.setVisibleRange(),this.setPingStatus()}handleKeydown(t){let e=this.navWarpRef.nativeElement.contains(t.target);if(!(Zt(t)||!e))switch(t.keyCode){case 37:case 38:case 39:case 40:this.lockAnimation(),this.keyManager.onKeydown(t);break;case 13:case 32:this.focusIndex!==this.selectedIndex&&this.selectFocusedIndex.emit(this.focusIndex);break;default:this.keyManager.onKeydown(t)}}isValidIndex(t){if(!this.items)return!0;let e=this.items?this.items.toArray()[t]:null;return!!e&&!e.disabled}scrollToTab(t){if(!this.items.find(i=>i===t))return;let e=this.items.toArray();if(this.position==="horizontal"){let i=this.transformX;if(this.getLayoutDirection()==="rtl"){let a=e[0].left+e[0].width-t.left-t.width;a<this.transformX?i=a:a+t.width>this.transformX+this.wrapperWidth&&(i=a+t.width-this.wrapperWidth)}else t.left<-this.transformX?i=-t.left:t.left+t.width>-this.transformX+this.wrapperWidth&&(i=-(t.left+t.width-this.wrapperWidth));this.transformX=i,this.transformY=0,this.setTransform(i,0)}else{let i=this.transformY;t.top<-this.transformY?i=-t.top:t.top+t.height>-this.transformY+this.wrapperHeight&&(i=-(t.top+t.height-this.wrapperHeight)),this.transformY=i,this.transformX=0,this.setTransform(0,i)}clearTimeout(this.cssTransformTimeWaitingId),this.cssTransformTimeWaitingId=setTimeout(()=>{this.setVisibleRange()},re)}lockAnimation(){this.lockAnimationTimeoutId===-1&&this.ngZone.runOutsideAngular(()=>{this.navListRef.nativeElement.style.transition="none",this.lockAnimationTimeoutId=setTimeout(()=>{this.navListRef.nativeElement.style.transition="",this.lockAnimationTimeoutId=-1},re)})}setTransform(t,e){this.navListRef.nativeElement.style.transform=`translate(${t}px, ${e}px)`}clampTransformX(t){let e=this.wrapperWidth-this.scrollListWidth;return this.getLayoutDirection()==="rtl"?Math.max(Math.min(e,t),0):Math.min(Math.max(e,t),0)}clampTransformY(t){return Math.min(Math.max(this.wrapperHeight-this.scrollListHeight,t),0)}updateScrollListPosition(){this.resetSizes(),this.transformX=this.clampTransformX(this.transformX),this.transformY=this.clampTransformY(this.transformY),this.setVisibleRange(),this.setPingStatus(),this.keyManager&&(this.keyManager.updateActiveItem(this.keyManager.activeItemIndex),this.keyManager.activeItem&&this.scrollToTab(this.keyManager.activeItem))}resetSizes(){this.addButtonWidth=this.addBtnRef?this.addBtnRef.getElementWidth():0,this.addButtonHeight=this.addBtnRef?this.addBtnRef.getElementHeight():0,this.operationWidth=this.operationRef.getElementWidth(),this.operationHeight=this.operationRef.getElementHeight(),this.wrapperWidth=this.navWarpRef.nativeElement.offsetWidth||0,this.wrapperHeight=this.navWarpRef.nativeElement.offsetHeight||0,this.scrollListHeight=this.navListRef.nativeElement.offsetHeight||0,this.scrollListWidth=this.navListRef.nativeElement.offsetWidth||0}alignInkBarToSelectedTab(){let t=this.items&&this.items.length?this.items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e&&this.inkBar.alignToElement(e.parentElement)}setPingStatus(){let t={top:!1,right:!1,bottom:!1,left:!1},e=this.navWarpRef.nativeElement;this.position==="horizontal"?this.getLayoutDirection()==="rtl"?(t.right=this.transformX>0,t.left=this.transformX+this.wrapperWidth<this.scrollListWidth):(t.left=this.transformX<0,t.right=-this.transformX+this.wrapperWidth<this.scrollListWidth):(t.top=this.transformY<0,t.bottom=-this.transformY+this.wrapperHeight<this.scrollListHeight),Object.keys(t).forEach(i=>{let a=`ant-tabs-nav-wrap-ping-${i}`;t[i]?e.classList.add(a):e.classList.remove(a)})}setVisibleRange(){let t,e,i,a,r,l,m=this.items.toArray(),x={width:0,height:0,left:0,top:0,right:0},E=v=>{let W,lt=m[v]||x;return e==="right"?W=m[0].left+m[0].width-m[v].left-m[v].width:W=lt[e],W};this.position==="horizontal"?(t="width",a=this.wrapperWidth,r=this.scrollListWidth-(this.hiddenItems.length?this.operationWidth:0),l=this.addButtonWidth,i=Math.abs(this.transformX),this.getLayoutDirection()==="rtl"?(e="right",this.pingRight=this.transformX>0,this.pingLeft=this.transformX+this.wrapperWidth<this.scrollListWidth):(this.pingLeft=this.transformX<0,this.pingRight=-this.transformX+this.wrapperWidth<this.scrollListWidth,e="left")):(t="height",a=this.wrapperHeight,r=this.scrollListHeight-(this.hiddenItems.length?this.operationHeight:0),l=this.addButtonHeight,e="top",i=-this.transformY,this.pingTop=this.transformY<0,this.pingBottom=-this.transformY+this.wrapperHeight<this.scrollListHeight);let S=a;if(r+l>a&&(S=a-l),!m.length){this.hiddenItems=[],this.cdr.markForCheck();return}let M=m.length,It=M;for(let v=0;v<M;v+=1){let W=E(v),lt=m[v]||x;if(W+lt[t]>i+S){It=v-1;break}}let xt=0;for(let v=M-1;v>=0;v-=1)if(E(v)<i){xt=v+1;break}let he=m.slice(0,xt),ue=m.slice(It+1);this.hiddenItems=[...he,...ue],this.cdr.markForCheck()}getLayoutDirection(){return this.dir&&this.dir.value==="rtl"?"rtl":"ltr"}setTabFocus(t){}ngOnChanges(t){let{position:e}=t;e&&!e.isFirstChange()&&(this.alignInkBarToSelectedTab(),this.lockAnimation(),this.updateScrollListPosition())}};n.\u0275fac=function(e){return new(e||n)(d(nt),d(X),d(Yt),d(ne),d(zt,8))},n.\u0275cmp=D({type:n,selectors:[["nz-tabs-nav"]],contentQueries:function(e,i,a){if(e&1&&H(a,le,5),e&2){let r;y(r=C())&&(i.items=r)}},viewQuery:function(e,i){if(e&1&&(N(Se,7),N(we,7),N(_t,7),N(rt,5),N(se,7)),e&2){let a;y(a=C())&&(i.navWarpRef=a.first),y(a=C())&&(i.navListRef=a.first),y(a=C())&&(i.operationRef=a.first),y(a=C())&&(i.addBtnRef=a.first),y(a=C())&&(i.inkBar=a.first)}},hostAttrs:[1,"ant-tabs-nav"],hostBindings:function(e,i){e&1&&I("keydown",function(r){return i.handleKeydown(r)})},inputs:{position:"position",addable:"addable",hideBar:"hideBar",addIcon:"addIcon",inkBarAnimated:"inkBarAnimated",extraTemplate:"extraTemplate",selectedIndex:"selectedIndex"},outputs:{indexFocused:"indexFocused",selectFocusedIndex:"selectFocusedIndex",addClicked:"addClicked",tabScroll:"tabScroll"},exportAs:["nzTabsNav"],standalone:!0,features:[ht,R],ngContentSelectors:ke,decls:9,vars:16,consts:[["navWarp",""],["navList",""],[1,"ant-tabs-nav-wrap"],["nzTabScrollList","","role","tablist",1,"ant-tabs-nav-list",3,"offsetChange","tabScroll"],["role","tab","nz-tab-add-button","",3,"addIcon","click",4,"ngIf"],["nz-tabs-ink-bar","",3,"hidden","position","animated"],[3,"addClicked","selected","addIcon","addable","items"],["class","ant-tabs-extra-content",4,"ngIf"],["role","tab","nz-tab-add-button","",3,"click","addIcon"],[1,"ant-tabs-extra-content"],[3,"ngTemplateOutlet"]],template:function(e,i){if(e&1){let a=k();mt(),z(0,"div",2,0)(2,"div",3,1),I("offsetChange",function(l){return f(a),b(i.onOffsetChange(l))})("tabScroll",function(l){return f(a),b(i.tabScroll.emit(l))}),et(4),g(5,Ae,1,2,"button",4),F(6,"div",5),T()(),z(7,"nz-tab-nav-operation",6),I("addClicked",function(){return f(a),b(i.addClicked.emit())})("selected",function(l){return f(a),b(i.onSelectedFromMenu(l))}),T(),g(8,Ne,2,1,"div",7)}e&2&&(w("ant-tabs-nav-wrap-ping-left",i.pingLeft)("ant-tabs-nav-wrap-ping-right",i.pingRight)("ant-tabs-nav-wrap-ping-top",i.pingTop)("ant-tabs-nav-wrap-ping-bottom",i.pingBottom),u(5),c("ngIf",i.showAddButton),u(),c("hidden",i.hideBar)("position",i.position)("animated",i.inkBarAnimated),u(),c("addIcon",i.addIcon)("addable",i.addable)("items",i.hiddenItems),u(),c("ngIf",i.extraTemplate))},dependencies:[Ze,Y,rt,se,_t,gt],encapsulation:2,changeDetection:0});let s=n;return s})(),Ue=(()=>{let n=class n{constructor(){this.content=null,this.active=!1,this.tabPaneAnimated=!0,this.forceRender=!1}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=D({type:n,selectors:[["","nz-tab-body",""]],hostAttrs:[1,"ant-tabs-tabpane"],hostVars:12,hostBindings:function(e,i){e&2&&(j("tabindex",i.active?0:-1)("aria-hidden",!i.active),tt("visibility",i.tabPaneAnimated?i.active?null:"hidden":null)("height",i.tabPaneAnimated?i.active?null:0:null)("overflow-y",i.tabPaneAnimated?i.active?null:"none":null)("display",i.tabPaneAnimated||i.active?null:"none"),w("ant-tabs-tabpane-active",i.active))},inputs:{content:"content",active:"active",tabPaneAnimated:"tabPaneAnimated",forceRender:"forceRender"},exportAs:["nzTabBody"],standalone:!0,features:[R],attrs:Re,decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngTemplateOutlet"]],template:function(e,i){e&1&&g(0,Me,2,1,"ng-container",0),e&2&&c("ngIf",i.active||i.forceRender)},dependencies:[Y,gt],encapsulation:2,changeDetection:0});let s=n;return s})(),ce=(()=>{let n=class n{constructor(){this.closeIcon="close"}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=D({type:n,selectors:[["nz-tab-close-button"],["button","nz-tab-close-button",""]],hostAttrs:["aria-label","Close tab","type","button",1,"ant-tabs-tab-remove"],inputs:{closeIcon:"closeIcon"},standalone:!0,features:[R],decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(e,i){e&1&&g(0,Oe,2,1,"ng-container",0),e&2&&c("nzStringTemplateOutlet",i.closeIcon)},dependencies:[U,q,at,st],encapsulation:2});let s=n;return s})(),Ge=(()=>{let n=class n{constructor(t){this.templateRef=t}};n.\u0275fac=function(e){return new(e||n)(d(J,1))},n.\u0275dir=L({type:n,selectors:[["ng-template","nzTabLink",""]],exportAs:["nzTabLinkTemplate"],standalone:!0});let s=n;return s})(),Ke=(()=>{let n=class n{constructor(t,e){this.elementRef=t,this.routerLink=e}};n.\u0275fac=function(e){return new(e||n)(d(B),d($t,10))},n.\u0275dir=L({type:n,selectors:[["a","nz-tab-link",""]],exportAs:["nzTabLink"],standalone:!0});let s=n;return s})(),Je=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=L({type:n,selectors:[["","nz-tab",""]],exportAs:["nzTab"],standalone:!0});let s=n;return s})(),de=new Et("NZ_TAB_SET"),ti=(()=>{let n=class n{get content(){return this.template||this.contentTemplate}get label(){return this.nzTitle||this.nzTabLinkTemplateDirective?.templateRef}constructor(t){this.closestTabSet=t,this.nzTitle="",this.nzClosable=!1,this.nzCloseIcon="close",this.nzDisabled=!1,this.nzForceRender=!1,this.nzSelect=new p,this.nzDeselect=new p,this.nzClick=new p,this.nzContextmenu=new p,this.template=null,this.isActive=!1,this.position=null,this.origin=null,this.stateChanges=new G}ngOnChanges(t){let{nzTitle:e,nzDisabled:i,nzForceRender:a}=t;(e||i||a)&&this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete()}};n.\u0275fac=function(e){return new(e||n)(d(de))},n.\u0275cmp=D({type:n,selectors:[["nz-tab"]],contentQueries:function(e,i,a){if(e&1&&(H(a,Ge,5),H(a,Je,5,J),H(a,Ke,5)),e&2){let r;y(r=C())&&(i.nzTabLinkTemplateDirective=r.first),y(r=C())&&(i.template=r.first),y(r=C())&&(i.linkDirective=r.first)}},viewQuery:function(e,i){if(e&1&&N(Le,7),e&2){let a;y(a=C())&&(i.contentTemplate=a.first)}},inputs:{nzTitle:"nzTitle",nzClosable:"nzClosable",nzCloseIcon:"nzCloseIcon",nzDisabled:"nzDisabled",nzForceRender:"nzForceRender"},outputs:{nzSelect:"nzSelect",nzDeselect:"nzDeselect",nzClick:"nzClick",nzContextmenu:"nzContextmenu"},exportAs:["nzTab"],standalone:!0,features:[ht,R],ngContentSelectors:We,decls:4,vars:0,consts:[["tabLinkTemplate",""],["contentTemplate",""]],template:function(e,i){e&1&&(mt(Be),g(0,Fe,1,0,"ng-template",null,0,ft)(2,Pe,1,0,"ng-template",null,1,ft))},encapsulation:2,changeDetection:0});let s=n;return _([A()],s.prototype,"nzClosable",void 0),_([A()],s.prototype,"nzDisabled",void 0),_([A()],s.prototype,"nzForceRender",void 0),s})(),Ct=class{},ei="tabs",ii=0,ni=(()=>{let n=class n{get nzSelectedIndex(){return this.selectedIndex}set nzSelectedIndex(t){this.indexToSelect=vt(t,null)}get position(){return["top","bottom"].indexOf(this.nzTabPosition)===-1?"vertical":"horizontal"}get addable(){return this.nzType==="editable-card"&&!this.nzHideAdd}get closable(){return this.nzType==="editable-card"}get line(){return this.nzType==="line"}get inkBarAnimated(){return this.line&&(typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.inkBar)}get tabPaneAnimated(){return this.position==="horizontal"&&this.line&&(typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.tabPane)}constructor(t,e,i,a,r){this.nzConfigService=t,this.ngZone=e,this.cdr=i,this.directionality=a,this.router=r,this._nzModuleName=ei,this.nzTabPosition="top",this.nzCanDeactivate=null,this.nzAddIcon="plus",this.nzTabBarStyle=null,this.nzType="line",this.nzSize="default",this.nzAnimated=!0,this.nzTabBarGutter=void 0,this.nzHideAdd=!1,this.nzCentered=!1,this.nzHideAll=!1,this.nzLinkRouter=!1,this.nzLinkExact=!0,this.nzSelectChange=new p(!0),this.nzSelectedIndexChange=new p,this.nzTabListScroll=new p,this.nzClose=new p,this.nzAdd=new p,this.allTabs=new ut,this.tabs=new ut,this.dir="ltr",this.destroy$=new G,this.indexToSelect=0,this.selectedIndex=null,this.tabLabelSubscription=$.EMPTY,this.tabsSubscription=$.EMPTY,this.canDeactivateSubscription=$.EMPTY,this.tabSetId=ii++}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(O(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.tabs.destroy(),this.tabLabelSubscription.unsubscribe(),this.tabsSubscription.unsubscribe(),this.canDeactivateSubscription.unsubscribe()}ngAfterContentInit(){this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>this.setUpRouter())}),this.subscribeToTabLabels(),this.subscribeToAllTabChanges(),this.tabsSubscription=this.tabs.changes.subscribe(()=>{if(this.clampTabIndex(this.indexToSelect)===this.selectedIndex){let e=this.tabs.toArray();for(let i=0;i<e.length;i++)if(e[i].isActive){this.indexToSelect=this.selectedIndex=i;break}}this.subscribeToTabLabels(),this.cdr.markForCheck()})}ngAfterContentChecked(){let t=this.indexToSelect=this.clampTabIndex(this.indexToSelect);if(this.selectedIndex!==t){let e=this.selectedIndex==null;e||this.nzSelectChange.emit(this.createChangeEvent(t)),Promise.resolve().then(()=>{this.tabs.forEach((i,a)=>i.isActive=a===t),e||this.nzSelectedIndexChange.emit(t)})}this.tabs.forEach((e,i)=>{e.position=i-t,this.selectedIndex!=null&&e.position===0&&!e.origin&&(e.origin=t-this.selectedIndex)}),this.selectedIndex!==t&&(this.selectedIndex=t,this.cdr.markForCheck())}onClose(t,e){e.preventDefault(),e.stopPropagation(),this.nzClose.emit({index:t})}onAdd(){this.nzAdd.emit()}clampTabIndex(t){return Math.min(this.tabs.length-1,Math.max(t||0,0))}createChangeEvent(t){let e=new Ct;return e.index=t,this.tabs&&this.tabs.length&&(e.tab=this.tabs.toArray()[t],this.tabs.forEach((i,a)=>{a!==t&&i.nzDeselect.emit()}),e.tab.nzSelect.emit()),e}subscribeToTabLabels(){this.tabLabelSubscription&&this.tabLabelSubscription.unsubscribe(),this.tabLabelSubscription=K(...this.tabs.map(t=>t.stateChanges)).subscribe(()=>this.cdr.markForCheck())}subscribeToAllTabChanges(){this.allTabs.changes.pipe(dt(this.allTabs)).subscribe(t=>{this.tabs.reset(t.filter(e=>e.closestTabSet===this)),this.tabs.notifyOnChanges()})}canDeactivateFun(t,e){return typeof this.nzCanDeactivate=="function"?Xt(this.nzCanDeactivate(t,e)).pipe(Nt(),O(this.destroy$)):ct(!0)}clickNavItem(t,e,i){t.nzDisabled||(t.nzClick.emit(),this.isRouterLinkClickEvent(e,i)||this.setSelectedIndex(e))}isRouterLinkClickEvent(t,e){let i=e.target;return this.nzLinkRouter?!!this.tabs.toArray()[t]?.linkDirective?.elementRef.nativeElement.contains(i):!1}contextmenuNavItem(t,e){t.nzDisabled||t.nzContextmenu.emit(e)}setSelectedIndex(t){this.canDeactivateSubscription.unsubscribe(),this.canDeactivateSubscription=this.canDeactivateFun(this.selectedIndex,t).subscribe(e=>{e&&(this.nzSelectedIndex=t,this.tabNavBarRef.focusIndex=t,this.cdr.markForCheck())})}getTabIndex(t,e){return t.nzDisabled?null:this.selectedIndex===e?0:-1}getTabContentId(t){return`nz-tabs-${this.tabSetId}-tab-${t}`}setUpRouter(){if(this.nzLinkRouter){if(!this.router)throw new Error(`${Qt} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);this.router.events.pipe(O(this.destroy$),kt(t=>t instanceof Vt),dt(!0),Dt(0)).subscribe(()=>{this.updateRouterActive(),this.cdr.markForCheck()})}}updateRouterActive(){if(this.router.navigated){let t=this.findShouldActiveTabIndex();t!==this.selectedIndex&&this.setSelectedIndex(t),this.nzHideAll=t===-1}}findShouldActiveTabIndex(){let t=this.tabs.toArray(),e=this.isLinkActive(this.router);return t.findIndex(i=>{let a=i.linkDirective;return a?e(a.routerLink):!1})}isLinkActive(t){return e=>e?t.isActive(e.urlTree||"",{paths:this.nzLinkExact?"exact":"subset",queryParams:this.nzLinkExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"}):!1}getTabContentMarginValue(){return-(this.nzSelectedIndex||0)*100}getTabContentMarginLeft(){return this.tabPaneAnimated&&this.dir!=="rtl"?`${this.getTabContentMarginValue()}%`:""}getTabContentMarginRight(){return this.tabPaneAnimated&&this.dir==="rtl"?`${this.getTabContentMarginValue()}%`:""}};n.\u0275fac=function(e){return new(e||n)(d(jt),d(X),d(nt),d(zt,8),d(Ht,8))},n.\u0275cmp=D({type:n,selectors:[["nz-tabset"]],contentQueries:function(e,i,a){if(e&1&&H(a,ti,5),e&2){let r;y(r=C())&&(i.allTabs=r)}},viewQuery:function(e,i){if(e&1&&N(yt,5),e&2){let a;y(a=C())&&(i.tabNavBarRef=a.first)}},hostAttrs:[1,"ant-tabs"],hostVars:24,hostBindings:function(e,i){e&2&&w("ant-tabs-card",i.nzType==="card"||i.nzType==="editable-card")("ant-tabs-editable",i.nzType==="editable-card")("ant-tabs-editable-card",i.nzType==="editable-card")("ant-tabs-centered",i.nzCentered)("ant-tabs-rtl",i.dir==="rtl")("ant-tabs-top",i.nzTabPosition==="top")("ant-tabs-bottom",i.nzTabPosition==="bottom")("ant-tabs-left",i.nzTabPosition==="left")("ant-tabs-right",i.nzTabPosition==="right")("ant-tabs-default",i.nzSize==="default")("ant-tabs-small",i.nzSize==="small")("ant-tabs-large",i.nzSize==="large")},inputs:{nzSelectedIndex:"nzSelectedIndex",nzTabPosition:"nzTabPosition",nzTabBarExtraContent:"nzTabBarExtraContent",nzCanDeactivate:"nzCanDeactivate",nzAddIcon:"nzAddIcon",nzTabBarStyle:"nzTabBarStyle",nzType:"nzType",nzSize:"nzSize",nzAnimated:"nzAnimated",nzTabBarGutter:"nzTabBarGutter",nzHideAdd:"nzHideAdd",nzCentered:"nzCentered",nzHideAll:"nzHideAll",nzLinkRouter:"nzLinkRouter",nzLinkExact:"nzLinkExact"},outputs:{nzSelectChange:"nzSelectChange",nzSelectedIndexChange:"nzSelectedIndexChange",nzTabListScroll:"nzTabListScroll",nzClose:"nzClose",nzAdd:"nzAdd"},exportAs:["nzTabset"],standalone:!0,features:[Ft([{provide:de,useExisting:n}]),R],decls:4,vars:16,consts:[[3,"ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate","tabScroll","selectFocusedIndex","addClicked",4,"ngIf"],[1,"ant-tabs-content-holder"],[1,"ant-tabs-content"],["role","tabpanel","nz-tab-body","",3,"id","active","content","forceRender","tabPaneAnimated",4,"ngFor","ngForOf"],[3,"tabScroll","selectFocusedIndex","addClicked","ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate"],["class","ant-tabs-tab",3,"margin-right","margin-bottom","ant-tabs-tab-active","ant-tabs-tab-disabled","click","contextmenu",4,"ngFor","ngForOf"],[1,"ant-tabs-tab",3,"click","contextmenu"],["type","button","role","tab","nzTabNavItem","","cdkMonitorElementFocus","",1,"ant-tabs-tab-btn",3,"id","disabled","tab","active"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["type","button","nz-tab-close-button","",3,"closeIcon","click",4,"ngIf"],["type","button","nz-tab-close-button","",3,"click","closeIcon"],["role","tabpanel","nz-tab-body","",3,"id","active","content","forceRender","tabPaneAnimated"]],template:function(e,i){e&1&&(g(0,Xe,2,9,"nz-tabs-nav",0),z(1,"div",1)(2,"div",2),g(3,je,1,6,"div",3),T()()),e&2&&(c("ngIf",i.tabs.length||i.addable),u(2),tt("margin-left",i.getTabContentMarginLeft())("margin-right",i.getTabContentMarginRight()),w("ant-tabs-content-top",i.nzTabPosition==="top")("ant-tabs-content-bottom",i.nzTabPosition==="bottom")("ant-tabs-content-left",i.nzTabPosition==="left")("ant-tabs-content-right",i.nzTabPosition==="right")("ant-tabs-content-animated",i.tabPaneAnimated),u(),c("ngForOf",i.tabs))},dependencies:[yt,Y,Pt,bt,le,Gt,Ut,U,q,ce,Ue],encapsulation:2});let s=n;return _([Z()],s.prototype,"nzType",void 0),_([Z()],s.prototype,"nzSize",void 0),_([Z()],s.prototype,"nzAnimated",void 0),_([Z()],s.prototype,"nzTabBarGutter",void 0),_([A()],s.prototype,"nzHideAdd",void 0),_([A()],s.prototype,"nzCentered",void 0),_([A()],s.prototype,"nzHideAll",void 0),_([A()],s.prototype,"nzLinkRouter",void 0),_([A()],s.prototype,"nzLinkExact",void 0),s})();var ji=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=Mt({type:n}),n.\u0275inj=Rt({imports:[ni,yt,_t,rt,ce]});let s=n;return s})();export{ti as a,ni as b,ji as c};
