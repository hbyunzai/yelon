import{a as ee,d as ne}from"./chunk-LLT56NTX.js";import{$c as Vt,Ab as $,Ae as qt,Ah as Jt,Bb as D,C as Q,Ca as ut,Cb as T,Db as _,De as Ut,Dh as te,Eb as Lt,Ee as Gt,Eh as ie,F as K,Fb as pt,Gb as Bt,H as kt,Hb as Wt,Hd as Qt,J as At,Jd as vt,Ka as u,Kf as st,La as d,Lf as at,Ma as J,Mb as Ft,Nb as N,Ob as it,P as Dt,Pa as tt,Ra as X,Sc as Ht,Sf as q,T as Nt,Tf as U,Va as f,Vd as k,Vf as Tt,Wa as j,X as dt,Xa as l,Ya as et,Yb as ft,Z as M,Za as w,_c as $t,ca as p,ea as A,fa as Rt,ga as O,h as V,he as Xt,ia as y,ja as C,jb as b,k as G,kb as z,ke as jt,lb as F,le as Z,ma as L,mb as P,n as St,na as ht,nb as H,nc as bt,o as wt,oc as Y,pa as Et,pb as B,q as v,qa as Mt,re as Yt,s as ct,sb as I,sc as Pt,ta as Ot,tc as gt,ub as h,vb as mt,ve as Zt,wb as nt,yh as Kt,zd as zt}from"./chunk-4LVFALOC.js";function ve(s,i){if(s&1&&(P(0),F(1,"span",1),H()),s&2){let o=i.$implicit;u(),l("nzType",o)}}function Te(s,i){if(s&1&&(P(0),pt(1),H()),s&2){let o=h().$implicit;u(),Wt(" ",o.tab.label," ")}}var _e=()=>({visible:!1});function ye(s,i){if(s&1){let o=B();b(0,"li",8),I("click",function(){let n=y(o).$implicit,a=h(2);return C(a.onSelect(n))})("contextmenu",function(e){let a=y(o).$implicit,r=h(2);return C(r.onContextmenu(a,e))}),f(1,Te,2,1,"ng-container",9),z()}if(s&2){let o=i.$implicit;w("ant-tabs-dropdown-menu-item-disabled",o.disabled),l("nzSelected",o.active)("nzDisabled",o.disabled),u(),l("nzStringTemplateOutlet",o.tab.label)("nzStringTemplateOutletContext",it(6,_e))}}function Ce(s,i){if(s&1&&(b(0,"ul",6),f(1,ye,2,7,"li",7),z()),s&2){let o=h();u(),l("ngForOf",o.items)}}function Ie(s,i){if(s&1){let o=B();b(0,"button",10),I("click",function(){y(o);let e=h();return C(e.addClicked.emit())}),z()}if(s&2){let o=h();l("addIcon",o.addIcon)}}var xe=()=>({minWidth:"46px"}),Se=["navWarp"],we=["navList"];function ke(s,i){if(s&1){let o=B();b(0,"button",8),I("click",function(){y(o);let e=h();return C(e.addClicked.emit())}),z()}if(s&2){let o=h();l("addIcon",o.addIcon),j("tabindex",-1)}}function Ae(s,i){}function De(s,i){if(s&1&&(b(0,"div",9),f(1,Ae,0,0,"ng-template",10),z()),s&2){let o=h();u(),l("ngTemplateOutlet",o.extraTemplate)}}var Ne=["*"],Re=["nz-tab-body",""];function Ee(s,i){}function Me(s,i){if(s&1&&(P(0),f(1,Ee,0,0,"ng-template",1),H()),s&2){let o=h();u(),l("ngTemplateOutlet",o.content)}}function Oe(s,i){if(s&1&&(P(0),F(1,"span",1),H()),s&2){let o=i.$implicit;u(),l("nzType",o)}}var Le=["contentTemplate"];function Be(s,i){s&1&&nt(0)}function We(s,i){s&1&&nt(0,1)}var Fe=[[["","nz-tab-link",""]],"*"],Pe=["[nz-tab-link]","*"];function He(s,i){if(s&1&&(P(0),pt(1),H()),s&2){let o=h().$implicit;u(),Bt(o.label)}}function $e(s,i){if(s&1){let o=B();b(0,"button",10),I("click",function(e){y(o);let n=h().index,a=h(2);return C(a.onClose(n,e))}),z()}if(s&2){let o=h().$implicit;l("closeIcon",o.nzCloseIcon)}}var Ve=()=>({visible:!0});function Qe(s,i){if(s&1){let o=B();b(0,"div",6),I("click",function(e){let n=y(o),a=n.$implicit,r=n.index,c=h(2);return C(c.clickNavItem(a,r,e))})("contextmenu",function(e){let a=y(o).$implicit,r=h(2);return C(r.contextmenuNavItem(a,e))}),b(1,"button",7),f(2,He,2,1,"ng-container",8)(3,$e,1,1,"button",9),z()()}if(s&2){let o=i.$implicit,t=i.index,e=h(2);et("margin-right",e.position==="horizontal"?e.nzTabBarGutter:null,"px")("margin-bottom",e.position==="vertical"?e.nzTabBarGutter:null,"px"),w("ant-tabs-tab-active",e.nzSelectedIndex===t)("ant-tabs-tab-disabled",o.nzDisabled),u(),l("id",e.getTabContentId(t))("disabled",o.nzDisabled)("tab",o)("active",e.nzSelectedIndex===t),j("tabIndex",e.getTabIndex(o,t))("aria-disabled",o.nzDisabled)("aria-selected",e.nzSelectedIndex===t&&!e.nzHideAll)("aria-controls",e.getTabContentId(t)),u(),l("nzStringTemplateOutlet",o.label)("nzStringTemplateOutletContext",it(19,Ve)),u(),l("ngIf",o.nzClosable&&e.closable&&!o.nzDisabled)}}function Xe(s,i){if(s&1){let o=B();b(0,"nz-tabs-nav",4),I("tabScroll",function(e){y(o);let n=h();return C(n.nzTabListScroll.emit(e))})("selectFocusedIndex",function(e){y(o);let n=h();return C(n.setSelectedIndex(e))})("addClicked",function(){y(o);let e=h();return C(e.onAdd())}),f(1,Qe,4,20,"div",5),z()}if(s&2){let o=h();l("ngStyle",o.nzTabBarStyle)("selectedIndex",o.nzSelectedIndex||0)("inkBarAnimated",o.inkBarAnimated)("addable",o.addable)("addIcon",o.nzAddIcon)("hideBar",o.nzHideAll)("position",o.position)("extraTemplate",o.nzTabBarExtraContent),u(),l("ngForOf",o.tabs)}}function je(s,i){if(s&1&&F(0,"div",11),s&2){let o=i.$implicit,t=i.index,e=h();l("id",e.getTabContentId(t))("active",e.nzSelectedIndex===t&&!e.nzHideAll)("content",o.content)("forceRender",o.nzForceRender)("tabPaneAnimated",e.tabPaneAnimated),j("aria-labelledby",e.getTabContentId(t))}}var rt=(()=>{let i=class i{constructor(t){this.elementRef=t,this.addIcon="plus",this.element=this.elementRef.nativeElement}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}};i.\u0275fac=function(e){return new(e||i)(d(L))},i.\u0275cmp=A({type:i,selectors:[["nz-tab-add-button"],["button","nz-tab-add-button",""]],hostAttrs:["aria-label","Add tab","type","button",1,"ant-tabs-nav-add"],inputs:{addIcon:"addIcon"},standalone:!0,features:[N],decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(e,n){e&1&&f(0,ve,2,1,"ng-container",0),e&2&&l("nzStringTemplateOutlet",n.addIcon)},dependencies:[U,q,at,st],encapsulation:2});let s=i;return s})(),se=(()=>{let i=class i{get _animated(){return this.animationMode!=="NoopAnimations"&&this.animated}constructor(t,e,n){this.elementRef=t,this.ngZone=e,this.animationMode=n,this.position="horizontal",this.animated=!0}alignToElement(t){this.ngZone.runOutsideAngular(()=>{Tt(()=>this.setStyles(t))})}setStyles(t){let e=this.elementRef.nativeElement;this.position==="horizontal"?(e.style.top="",e.style.height="",e.style.left=this.getLeftPosition(t),e.style.width=this.getElementWidth(t)):(e.style.left="",e.style.width="",e.style.top=this.getTopPosition(t),e.style.height=this.getElementHeight(t))}getLeftPosition(t){return t?`${t.offsetLeft||0}px`:"0"}getElementWidth(t){return t?`${t.offsetWidth||0}px`:"0"}getTopPosition(t){return t?`${t.offsetTop||0}px`:"0"}getElementHeight(t){return t?`${t.offsetHeight||0}px`:"0"}};i.\u0275fac=function(e){return new(e||i)(d(L),d(X),d(Ot,8))},i.\u0275dir=O({type:i,selectors:[["nz-tabs-ink-bar"],["","nz-tabs-ink-bar",""]],hostAttrs:[1,"ant-tabs-ink-bar"],hostVars:2,hostBindings:function(e,n){e&2&&w("ant-tabs-ink-bar-animated",n._animated)},inputs:{position:"position",animated:"animated"},standalone:!0});let s=i;return s})(),le=(()=>{let i=class i{constructor(t){this.elementRef=t,this.disabled=!1,this.active=!1,this.el=t.nativeElement,this.parentElement=this.el.parentElement}focus(){this.el.focus()}get width(){return this.parentElement.offsetWidth}get height(){return this.parentElement.offsetHeight}get left(){return this.parentElement.offsetLeft}get top(){return this.parentElement.offsetTop}};i.\u0275fac=function(e){return new(e||i)(d(L))},i.\u0275dir=O({type:i,selectors:[["","nzTabNavItem",""]],inputs:{disabled:"disabled",tab:"tab",active:"active"},standalone:!0});let s=i;return s})(),_t=(()=>{let i=class i{constructor(t,e){this.cdr=t,this.elementRef=e,this.items=[],this.addable=!1,this.addIcon="plus",this.addClicked=new p,this.selected=new p,this.closeAnimationWaitTimeoutId=-1,this.menuOpened=!1,this.element=this.elementRef.nativeElement}onSelect(t){t.disabled||(t.tab.nzClick.emit(),this.selected.emit(t))}onContextmenu(t,e){t.disabled||t.tab.nzContextmenu.emit(e)}showItems(){clearTimeout(this.closeAnimationWaitTimeoutId),this.menuOpened=!0,this.cdr.markForCheck()}menuVisChange(t){t||(this.closeAnimationWaitTimeoutId=setTimeout(()=>{this.menuOpened=!1,this.cdr.markForCheck()},150))}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}ngOnDestroy(){clearTimeout(this.closeAnimationWaitTimeoutId)}};i.\u0275fac=function(e){return new(e||i)(d(tt),d(L))},i.\u0275cmp=A({type:i,selectors:[["nz-tab-nav-operation"]],hostAttrs:[1,"ant-tabs-nav-operations"],hostVars:2,hostBindings:function(e,n){e&2&&w("ant-tabs-nav-operations-hidden",n.items.length===0)},inputs:{items:"items",addable:"addable",addIcon:"addIcon"},outputs:{addClicked:"addClicked",selected:"selected"},exportAs:["nzTabNavOperation"],standalone:!0,features:[N],decls:7,vars:6,consts:[["nz-dropdown","","type","button","tabindex","-1","aria-hidden","true","nzOverlayClassName","nz-tabs-dropdown",1,"ant-tabs-nav-more",3,"nzDropdownMenu","nzOverlayStyle","nzMatchWidthElement","nzVisibleChange","mouseenter"],["dropdownTrigger","nzDropdown"],["nz-icon","","nzType","ellipsis"],["menu","nzDropdownMenu"],["nz-menu","",4,"ngIf"],["nz-tab-add-button","",3,"addIcon","click",4,"ngIf"],["nz-menu",""],["nz-menu-item","","class","ant-tabs-dropdown-menu-item",3,"ant-tabs-dropdown-menu-item-disabled","nzSelected","nzDisabled","click","contextmenu",4,"ngFor","ngForOf"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"nzSelected","nzDisabled","click","contextmenu"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["nz-tab-add-button","",3,"addIcon","click"]],template:function(e,n){if(e&1&&(b(0,"button",0,1),I("nzVisibleChange",function(r){return n.menuVisChange(r)})("mouseenter",function(){return n.showItems()}),F(2,"span",2),z(),b(3,"nz-dropdown-menu",null,3),f(5,Ce,2,1,"ul",4),z(),f(6,Ie,1,1,"button",5)),e&2){let a=Lt(4);l("nzDropdownMenu",a)("nzOverlayStyle",it(5,xe))("nzMatchWidthElement",null),u(5),l("ngIf",n.menuOpened),u(),l("ngIf",n.addable)}},dependencies:[at,st,Y,bt,U,q,rt,ne,te,Jt,Kt,ee],encapsulation:2,changeDetection:0});let s=i;return s})(),Ye=.1,ae=.01,ot=20,oe=.995**ot,Ze=(()=>{let i=class i{constructor(t,e){this.ngZone=t,this.elementRef=e,this.lastWheelDirection=null,this.lastWheelTimestamp=0,this.lastTimestamp=0,this.lastTimeDiff=0,this.lastMixedWheel=0,this.lastWheelPrevent=!1,this.touchPosition=null,this.lastOffset=null,this.motion=-1,this.unsubscribe=()=>{},this.offsetChange=new p,this.tabScroll=new p,this.onTouchEnd=n=>{if(!this.touchPosition)return;let a=this.lastOffset,r=this.lastTimeDiff;if(this.lastOffset=this.touchPosition=null,a){let c=a.x/r,m=a.y/r,x=Math.abs(c),R=Math.abs(m);if(Math.max(x,R)<Ye)return;let S=c,E=m;this.motion=window.setInterval(()=>{if(Math.abs(S)<ae&&Math.abs(E)<ae){window.clearInterval(this.motion);return}S*=oe,E*=oe,this.onOffset(S*ot,E*ot,n)},ot)}},this.onTouchMove=n=>{if(!this.touchPosition)return;n.preventDefault();let{screenX:a,screenY:r}=n.touches[0],c=a-this.touchPosition.x,m=r-this.touchPosition.y;this.onOffset(c,m,n);let x=Date.now();this.lastTimeDiff=x-this.lastTimestamp,this.lastTimestamp=x,this.lastOffset={x:c,y:m},this.touchPosition={x:a,y:r}},this.onTouchStart=n=>{let{screenX:a,screenY:r}=n.touches[0];this.touchPosition={x:a,y:r},window.clearInterval(this.motion)},this.onWheel=n=>{let{deltaX:a,deltaY:r}=n,c,m=Math.abs(a),x=Math.abs(r);m===x?c=this.lastWheelDirection==="x"?a:r:m>x?(c=a,this.lastWheelDirection="x"):(c=r,this.lastWheelDirection="y");let R=Date.now(),S=Math.abs(c);(R-this.lastWheelTimestamp>100||S-this.lastMixedWheel>10)&&(this.lastWheelPrevent=!1),this.onOffset(-c,-c,n),(n.defaultPrevented||this.lastWheelPrevent)&&(this.lastWheelPrevent=!0),this.lastWheelTimestamp=R,this.lastMixedWheel=S}}ngOnInit(){this.unsubscribe=this.ngZone.runOutsideAngular(()=>{let t=this.elementRef.nativeElement,e=Q(t,"wheel"),n=Q(t,"touchstart"),a=Q(t,"touchmove"),r=Q(t,"touchend"),c=new V;return c.add(this.subscribeWrap("wheel",e,this.onWheel)),c.add(this.subscribeWrap("touchstart",n,this.onTouchStart)),c.add(this.subscribeWrap("touchmove",a,this.onTouchMove)),c.add(this.subscribeWrap("touchend",r,this.onTouchEnd)),()=>{c.unsubscribe()}})}subscribeWrap(t,e,n){return e.subscribe(a=>{this.tabScroll.emit({type:t,event:a}),a.defaultPrevented||n(a)})}onOffset(t,e,n){this.ngZone.run(()=>{this.offsetChange.emit({x:t,y:e,event:n})})}ngOnDestroy(){this.unsubscribe()}};i.\u0275fac=function(e){return new(e||i)(d(X),d(L))},i.\u0275dir=O({type:i,selectors:[["","nzTabScrollList",""]],outputs:{offsetChange:"offsetChange",tabScroll:"tabScroll"},standalone:!0});let s=i;return s})(),qe=typeof requestAnimationFrame<"u"?wt:St,re=150,yt=(()=>{let i=class i{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=vt(t);this._selectedIndex!==e&&(this._selectedIndex=t,this.selectedIndexChanged=!0,this.keyManager&&this.keyManager.updateActiveItem(t))}get focusIndex(){return this.keyManager?this.keyManager.activeItemIndex:0}set focusIndex(t){!this.isValidIndex(t)||this.focusIndex===t||!this.keyManager||this.keyManager.setActiveItem(t)}get showAddButton(){return this.hiddenItems.length===0&&this.addable}constructor(t,e,n,a,r){this.cdr=t,this.ngZone=e,this.viewportRuler=n,this.nzResizeObserver=a,this.dir=r,this.indexFocused=new p,this.selectFocusedIndex=new p,this.addClicked=new p,this.tabScroll=new p,this.position="horizontal",this.addable=!1,this.hideBar=!1,this.addIcon="plus",this.inkBarAnimated=!0,this.translate=null,this.transformX=0,this.transformY=0,this.pingLeft=!1,this.pingRight=!1,this.pingTop=!1,this.pingBottom=!1,this.hiddenItems=[],this.destroy$=new G,this._selectedIndex=0,this.wrapperWidth=0,this.wrapperHeight=0,this.scrollListWidth=0,this.scrollListHeight=0,this.operationWidth=0,this.operationHeight=0,this.addButtonWidth=0,this.addButtonHeight=0,this.selectedIndexChanged=!1,this.lockAnimationTimeoutId=-1,this.cssTransformTimeWaitingId=-1}ngAfterViewInit(){let t=this.dir?this.dir.change.asObservable():ct(null),e=this.viewportRuler.change(150),n=()=>{this.updateScrollListPosition(),this.alignInkBarToSelectedTab()};this.keyManager=new qt(this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap(),this.keyManager.updateActiveItem(this.selectedIndex),Tt(n),K(this.nzResizeObserver.observe(this.navWarpRef),this.nzResizeObserver.observe(this.navListRef)).pipe(M(this.destroy$),At(16,qe)).subscribe(()=>{n()}),K(t,e,this.items.changes).pipe(M(this.destroy$)).subscribe(()=>{Promise.resolve().then(n),this.keyManager.withHorizontalOrientation(this.getLayoutDirection())}),this.keyManager.change.pipe(M(this.destroy$)).subscribe(a=>{this.indexFocused.emit(a),this.setTabFocus(a),this.scrollToTab(this.keyManager.activeItem)})}ngAfterContentChecked(){this.selectedIndexChanged&&(this.updateScrollListPosition(),this.alignInkBarToSelectedTab(),this.selectedIndexChanged=!1,this.cdr.markForCheck())}ngOnDestroy(){clearTimeout(this.lockAnimationTimeoutId),clearTimeout(this.cssTransformTimeWaitingId),this.destroy$.next(),this.destroy$.complete()}onSelectedFromMenu(t){let e=this.items.toArray().findIndex(n=>n===t);e!==-1&&(this.keyManager.updateActiveItem(e),this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this.scrollToTab(t)))}onOffsetChange(t){if(this.position==="horizontal"){if(this.lockAnimationTimeoutId===-1&&(this.transformX>=0&&t.x>0||this.transformX<=this.wrapperWidth-this.scrollListWidth&&t.x<0))return;t.event.preventDefault(),this.transformX=this.clampTransformX(this.transformX+t.x),this.setTransform(this.transformX,0)}else{if(this.lockAnimationTimeoutId===-1&&(this.transformY>=0&&t.y>0||this.transformY<=this.wrapperHeight-this.scrollListHeight&&t.y<0))return;t.event.preventDefault(),this.transformY=this.clampTransformY(this.transformY+t.y),this.setTransform(0,this.transformY)}this.lockAnimation(),this.setVisibleRange(),this.setPingStatus()}handleKeydown(t){let e=this.navWarpRef.nativeElement.contains(t.target);if(!(Zt(t)||!e))switch(t.keyCode){case 37:case 38:case 39:case 40:this.lockAnimation(),this.keyManager.onKeydown(t);break;case 13:case 32:this.focusIndex!==this.selectedIndex&&this.selectFocusedIndex.emit(this.focusIndex);break;default:this.keyManager.onKeydown(t)}}isValidIndex(t){if(!this.items)return!0;let e=this.items?this.items.toArray()[t]:null;return!!e&&!e.disabled}scrollToTab(t){if(!this.items.find(n=>n===t))return;let e=this.items.toArray();if(this.position==="horizontal"){let n=this.transformX;if(this.getLayoutDirection()==="rtl"){let a=e[0].left+e[0].width-t.left-t.width;a<this.transformX?n=a:a+t.width>this.transformX+this.wrapperWidth&&(n=a+t.width-this.wrapperWidth)}else t.left<-this.transformX?n=-t.left:t.left+t.width>-this.transformX+this.wrapperWidth&&(n=-(t.left+t.width-this.wrapperWidth));this.transformX=n,this.transformY=0,this.setTransform(n,0)}else{let n=this.transformY;t.top<-this.transformY?n=-t.top:t.top+t.height>-this.transformY+this.wrapperHeight&&(n=-(t.top+t.height-this.wrapperHeight)),this.transformY=n,this.transformX=0,this.setTransform(0,n)}clearTimeout(this.cssTransformTimeWaitingId),this.cssTransformTimeWaitingId=setTimeout(()=>{this.setVisibleRange()},re)}lockAnimation(){this.lockAnimationTimeoutId===-1&&this.ngZone.runOutsideAngular(()=>{this.navListRef.nativeElement.style.transition="none",this.lockAnimationTimeoutId=setTimeout(()=>{this.navListRef.nativeElement.style.transition="",this.lockAnimationTimeoutId=-1},re)})}setTransform(t,e){this.navListRef.nativeElement.style.transform=`translate(${t}px, ${e}px)`}clampTransformX(t){let e=this.wrapperWidth-this.scrollListWidth;return this.getLayoutDirection()==="rtl"?Math.max(Math.min(e,t),0):Math.min(Math.max(e,t),0)}clampTransformY(t){return Math.min(Math.max(this.wrapperHeight-this.scrollListHeight,t),0)}updateScrollListPosition(){this.resetSizes(),this.transformX=this.clampTransformX(this.transformX),this.transformY=this.clampTransformY(this.transformY),this.setVisibleRange(),this.setPingStatus(),this.keyManager&&(this.keyManager.updateActiveItem(this.keyManager.activeItemIndex),this.keyManager.activeItem&&this.scrollToTab(this.keyManager.activeItem))}resetSizes(){this.addButtonWidth=this.addBtnRef?this.addBtnRef.getElementWidth():0,this.addButtonHeight=this.addBtnRef?this.addBtnRef.getElementHeight():0,this.operationWidth=this.operationRef.getElementWidth(),this.operationHeight=this.operationRef.getElementHeight(),this.wrapperWidth=this.navWarpRef.nativeElement.offsetWidth||0,this.wrapperHeight=this.navWarpRef.nativeElement.offsetHeight||0,this.scrollListHeight=this.navListRef.nativeElement.offsetHeight||0,this.scrollListWidth=this.navListRef.nativeElement.offsetWidth||0}alignInkBarToSelectedTab(){let t=this.items&&this.items.length?this.items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e&&this.inkBar.alignToElement(e.parentElement)}setPingStatus(){let t={top:!1,right:!1,bottom:!1,left:!1},e=this.navWarpRef.nativeElement;this.position==="horizontal"?this.getLayoutDirection()==="rtl"?(t.right=this.transformX>0,t.left=this.transformX+this.wrapperWidth<this.scrollListWidth):(t.left=this.transformX<0,t.right=-this.transformX+this.wrapperWidth<this.scrollListWidth):(t.top=this.transformY<0,t.bottom=-this.transformY+this.wrapperHeight<this.scrollListHeight),Object.keys(t).forEach(n=>{let a=`ant-tabs-nav-wrap-ping-${n}`;t[n]?e.classList.add(a):e.classList.remove(a)})}setVisibleRange(){let t,e,n,a,r,c,m=this.items.toArray(),x={width:0,height:0,left:0,top:0,right:0},R=g=>{let W,lt=m[g]||x;return e==="right"?W=m[0].left+m[0].width-m[g].left-m[g].width:W=lt[e],W};this.position==="horizontal"?(t="width",a=this.wrapperWidth,r=this.scrollListWidth-(this.hiddenItems.length?this.operationWidth:0),c=this.addButtonWidth,n=Math.abs(this.transformX),this.getLayoutDirection()==="rtl"?(e="right",this.pingRight=this.transformX>0,this.pingLeft=this.transformX+this.wrapperWidth<this.scrollListWidth):(this.pingLeft=this.transformX<0,this.pingRight=-this.transformX+this.wrapperWidth<this.scrollListWidth,e="left")):(t="height",a=this.wrapperHeight,r=this.scrollListHeight-(this.hiddenItems.length?this.operationHeight:0),c=this.addButtonHeight,e="top",n=-this.transformY,this.pingTop=this.transformY<0,this.pingBottom=-this.transformY+this.wrapperHeight<this.scrollListHeight);let S=a;if(r+c>a&&(S=a-c),!m.length){this.hiddenItems=[],this.cdr.markForCheck();return}let E=m.length,It=E;for(let g=0;g<E;g+=1){let W=R(g),lt=m[g]||x;if(W+lt[t]>n+S){It=g-1;break}}let xt=0;for(let g=E-1;g>=0;g-=1)if(R(g)<n){xt=g+1;break}let he=m.slice(0,xt),ue=m.slice(It+1);this.hiddenItems=[...he,...ue],this.cdr.markForCheck()}getLayoutDirection(){return this.dir&&this.dir.value==="rtl"?"rtl":"ltr"}setTabFocus(t){}ngOnChanges(t){let{position:e}=t;e&&!e.isFirstChange()&&(this.alignInkBarToSelectedTab(),this.lockAnimation(),this.updateScrollListPosition())}};i.\u0275fac=function(e){return new(e||i)(d(tt),d(X),d(Yt),d(ie),d(zt,8))},i.\u0275cmp=A({type:i,selectors:[["nz-tabs-nav"]],contentQueries:function(e,n,a){if(e&1&&$(a,le,5),e&2){let r;T(r=_())&&(n.items=r)}},viewQuery:function(e,n){if(e&1&&(D(Se,7),D(we,7),D(_t,7),D(rt,5),D(se,7)),e&2){let a;T(a=_())&&(n.navWarpRef=a.first),T(a=_())&&(n.navListRef=a.first),T(a=_())&&(n.operationRef=a.first),T(a=_())&&(n.addBtnRef=a.first),T(a=_())&&(n.inkBar=a.first)}},hostAttrs:[1,"ant-tabs-nav"],hostBindings:function(e,n){e&1&&I("keydown",function(r){return n.handleKeydown(r)})},inputs:{position:"position",addable:"addable",hideBar:"hideBar",addIcon:"addIcon",inkBarAnimated:"inkBarAnimated",extraTemplate:"extraTemplate",selectedIndex:"selectedIndex"},outputs:{indexFocused:"indexFocused",selectFocusedIndex:"selectFocusedIndex",addClicked:"addClicked",tabScroll:"tabScroll"},exportAs:["nzTabsNav"],standalone:!0,features:[ut,N],ngContentSelectors:Ne,decls:9,vars:16,consts:[[1,"ant-tabs-nav-wrap"],["navWarp",""],["nzTabScrollList","","role","tablist",1,"ant-tabs-nav-list",3,"offsetChange","tabScroll"],["navList",""],["role","tab","nz-tab-add-button","",3,"addIcon","click",4,"ngIf"],["nz-tabs-ink-bar","",3,"hidden","position","animated"],[3,"addIcon","addable","items","addClicked","selected"],["class","ant-tabs-extra-content",4,"ngIf"],["role","tab","nz-tab-add-button","",3,"addIcon","click"],[1,"ant-tabs-extra-content"],[3,"ngTemplateOutlet"]],template:function(e,n){e&1&&(mt(),b(0,"div",0,1)(2,"div",2,3),I("offsetChange",function(r){return n.onOffsetChange(r)})("tabScroll",function(r){return n.tabScroll.emit(r)}),nt(4),f(5,ke,1,2,"button",4),F(6,"div",5),z()(),b(7,"nz-tab-nav-operation",6),I("addClicked",function(){return n.addClicked.emit()})("selected",function(r){return n.onSelectedFromMenu(r)}),z(),f(8,De,2,1,"div",7)),e&2&&(w("ant-tabs-nav-wrap-ping-left",n.pingLeft)("ant-tabs-nav-wrap-ping-right",n.pingRight)("ant-tabs-nav-wrap-ping-top",n.pingTop)("ant-tabs-nav-wrap-ping-bottom",n.pingBottom),u(5),l("ngIf",n.showAddButton),u(),l("hidden",n.hideBar)("position",n.position)("animated",n.inkBarAnimated),u(),l("addIcon",n.addIcon)("addable",n.addable)("items",n.hiddenItems),u(),l("ngIf",n.extraTemplate))},dependencies:[Ze,Y,rt,se,_t,gt],encapsulation:2,changeDetection:0});let s=i;return s})(),Ue=(()=>{let i=class i{constructor(){this.content=null,this.active=!1,this.tabPaneAnimated=!0,this.forceRender=!1}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=A({type:i,selectors:[["","nz-tab-body",""]],hostAttrs:[1,"ant-tabs-tabpane"],hostVars:12,hostBindings:function(e,n){e&2&&(j("tabindex",n.active?0:-1)("aria-hidden",!n.active),et("visibility",n.tabPaneAnimated?n.active?null:"hidden":null)("height",n.tabPaneAnimated?n.active?null:0:null)("overflow-y",n.tabPaneAnimated?n.active?null:"none":null)("display",n.tabPaneAnimated||n.active?null:"none"),w("ant-tabs-tabpane-active",n.active))},inputs:{content:"content",active:"active",tabPaneAnimated:"tabPaneAnimated",forceRender:"forceRender"},exportAs:["nzTabBody"],standalone:!0,features:[N],attrs:Re,decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngTemplateOutlet"]],template:function(e,n){e&1&&f(0,Me,2,1,"ng-container",0),e&2&&l("ngIf",n.active||n.forceRender)},dependencies:[Y,gt],encapsulation:2,changeDetection:0});let s=i;return s})(),ce=(()=>{let i=class i{constructor(){this.closeIcon="close"}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=A({type:i,selectors:[["nz-tab-close-button"],["button","nz-tab-close-button",""]],hostAttrs:["aria-label","Close tab","type","button",1,"ant-tabs-tab-remove"],inputs:{closeIcon:"closeIcon"},standalone:!0,features:[N],decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(e,n){e&1&&f(0,Oe,2,1,"ng-container",0),e&2&&l("nzStringTemplateOutlet",n.closeIcon)},dependencies:[U,q,at,st],encapsulation:2});let s=i;return s})(),Ge=(()=>{let i=class i{constructor(t){this.templateRef=t}};i.\u0275fac=function(e){return new(e||i)(d(J,1))},i.\u0275dir=O({type:i,selectors:[["ng-template","nzTabLink",""]],exportAs:["nzTabLinkTemplate"],standalone:!0});let s=i;return s})(),Ke=(()=>{let i=class i{constructor(t,e){this.elementRef=t,this.routerLink=e}};i.\u0275fac=function(e){return new(e||i)(d(L),d(Vt,10))},i.\u0275dir=O({type:i,selectors:[["a","nz-tab-link",""]],exportAs:["nzTabLink"],standalone:!0});let s=i;return s})(),Je=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=O({type:i,selectors:[["","nz-tab",""]],exportAs:["nzTab"],standalone:!0});let s=i;return s})(),de=new Mt("NZ_TAB_SET"),tn=(()=>{let i=class i{get content(){return this.template||this.contentTemplate}get label(){return this.nzTitle||this.nzTabLinkTemplateDirective?.templateRef}constructor(t){this.closestTabSet=t,this.nzTitle="",this.nzClosable=!1,this.nzCloseIcon="close",this.nzDisabled=!1,this.nzForceRender=!1,this.nzSelect=new p,this.nzDeselect=new p,this.nzClick=new p,this.nzContextmenu=new p,this.template=null,this.isActive=!1,this.position=null,this.origin=null,this.stateChanges=new G}ngOnChanges(t){let{nzTitle:e,nzDisabled:n,nzForceRender:a}=t;(e||n||a)&&this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete()}};i.\u0275fac=function(e){return new(e||i)(d(de))},i.\u0275cmp=A({type:i,selectors:[["nz-tab"]],contentQueries:function(e,n,a){if(e&1&&($(a,Ge,5),$(a,Je,5,J),$(a,Ke,5)),e&2){let r;T(r=_())&&(n.nzTabLinkTemplateDirective=r.first),T(r=_())&&(n.template=r.first),T(r=_())&&(n.linkDirective=r.first)}},viewQuery:function(e,n){if(e&1&&D(Le,7),e&2){let a;T(a=_())&&(n.contentTemplate=a.first)}},inputs:{nzTitle:"nzTitle",nzClosable:"nzClosable",nzCloseIcon:"nzCloseIcon",nzDisabled:"nzDisabled",nzForceRender:"nzForceRender"},outputs:{nzSelect:"nzSelect",nzDeselect:"nzDeselect",nzClick:"nzClick",nzContextmenu:"nzContextmenu"},exportAs:["nzTab"],standalone:!0,features:[ut,N],ngContentSelectors:Pe,decls:4,vars:0,consts:[["tabLinkTemplate",""],["contentTemplate",""]],template:function(e,n){e&1&&(mt(Fe),f(0,Be,1,0,"ng-template",null,0,ft)(2,We,1,0,"ng-template",null,1,ft))},encapsulation:2,changeDetection:0});let s=i;return v([k()],s.prototype,"nzClosable",void 0),v([k()],s.prototype,"nzDisabled",void 0),v([k()],s.prototype,"nzForceRender",void 0),s})(),Ct=class{},en="tabs",nn=0,sn=(()=>{let i=class i{get nzSelectedIndex(){return this.selectedIndex}set nzSelectedIndex(t){this.indexToSelect=vt(t,null)}get position(){return["top","bottom"].indexOf(this.nzTabPosition)===-1?"vertical":"horizontal"}get addable(){return this.nzType==="editable-card"&&!this.nzHideAdd}get closable(){return this.nzType==="editable-card"}get line(){return this.nzType==="line"}get inkBarAnimated(){return this.line&&(typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.inkBar)}get tabPaneAnimated(){return this.position==="horizontal"&&this.line&&(typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.tabPane)}constructor(t,e,n,a,r){this.nzConfigService=t,this.ngZone=e,this.cdr=n,this.directionality=a,this.router=r,this._nzModuleName=en,this.nzTabPosition="top",this.nzCanDeactivate=null,this.nzAddIcon="plus",this.nzTabBarStyle=null,this.nzType="line",this.nzSize="default",this.nzAnimated=!0,this.nzTabBarGutter=void 0,this.nzHideAdd=!1,this.nzCentered=!1,this.nzHideAll=!1,this.nzLinkRouter=!1,this.nzLinkExact=!0,this.nzSelectChange=new p(!0),this.nzSelectedIndexChange=new p,this.nzTabListScroll=new p,this.nzClose=new p,this.nzAdd=new p,this.allTabs=new ht,this.tabs=new ht,this.dir="ltr",this.destroy$=new G,this.indexToSelect=0,this.selectedIndex=null,this.tabLabelSubscription=V.EMPTY,this.tabsSubscription=V.EMPTY,this.canDeactivateSubscription=V.EMPTY,this.tabSetId=nn++}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(M(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.tabs.destroy(),this.tabLabelSubscription.unsubscribe(),this.tabsSubscription.unsubscribe(),this.canDeactivateSubscription.unsubscribe()}ngAfterContentInit(){this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>this.setUpRouter())}),this.subscribeToTabLabels(),this.subscribeToAllTabChanges(),this.tabsSubscription=this.tabs.changes.subscribe(()=>{if(this.clampTabIndex(this.indexToSelect)===this.selectedIndex){let e=this.tabs.toArray();for(let n=0;n<e.length;n++)if(e[n].isActive){this.indexToSelect=this.selectedIndex=n;break}}this.subscribeToTabLabels(),this.cdr.markForCheck()})}ngAfterContentChecked(){let t=this.indexToSelect=this.clampTabIndex(this.indexToSelect);if(this.selectedIndex!==t){let e=this.selectedIndex==null;e||this.nzSelectChange.emit(this.createChangeEvent(t)),Promise.resolve().then(()=>{this.tabs.forEach((n,a)=>n.isActive=a===t),e||this.nzSelectedIndexChange.emit(t)})}this.tabs.forEach((e,n)=>{e.position=n-t,this.selectedIndex!=null&&e.position===0&&!e.origin&&(e.origin=t-this.selectedIndex)}),this.selectedIndex!==t&&(this.selectedIndex=t,this.cdr.markForCheck())}onClose(t,e){e.preventDefault(),e.stopPropagation(),this.nzClose.emit({index:t})}onAdd(){this.nzAdd.emit()}clampTabIndex(t){return Math.min(this.tabs.length-1,Math.max(t||0,0))}createChangeEvent(t){let e=new Ct;return e.index=t,this.tabs&&this.tabs.length&&(e.tab=this.tabs.toArray()[t],this.tabs.forEach((n,a)=>{a!==t&&n.nzDeselect.emit()}),e.tab.nzSelect.emit()),e}subscribeToTabLabels(){this.tabLabelSubscription&&this.tabLabelSubscription.unsubscribe(),this.tabLabelSubscription=K(...this.tabs.map(t=>t.stateChanges)).subscribe(()=>this.cdr.markForCheck())}subscribeToAllTabChanges(){this.allTabs.changes.pipe(dt(this.allTabs)).subscribe(t=>{this.tabs.reset(t.filter(e=>e.closestTabSet===this)),this.tabs.notifyOnChanges()})}canDeactivateFun(t,e){return typeof this.nzCanDeactivate=="function"?Xt(this.nzCanDeactivate(t,e)).pipe(Nt(),M(this.destroy$)):ct(!0)}clickNavItem(t,e,n){t.nzDisabled||(t.nzClick.emit(),this.isRouterLinkClickEvent(e,n)||this.setSelectedIndex(e))}isRouterLinkClickEvent(t,e){let n=e.target;return this.nzLinkRouter?!!this.tabs.toArray()[t]?.linkDirective?.elementRef.nativeElement.contains(n):!1}contextmenuNavItem(t,e){t.nzDisabled||t.nzContextmenu.emit(e)}setSelectedIndex(t){this.canDeactivateSubscription.unsubscribe(),this.canDeactivateSubscription=this.canDeactivateFun(this.selectedIndex,t).subscribe(e=>{e&&(this.nzSelectedIndex=t,this.tabNavBarRef.focusIndex=t,this.cdr.markForCheck())})}getTabIndex(t,e){return t.nzDisabled?null:this.selectedIndex===e?0:-1}getTabContentId(t){return`nz-tabs-${this.tabSetId}-tab-${t}`}setUpRouter(){if(this.nzLinkRouter){if(!this.router)throw new Error(`${Qt} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);this.router.events.pipe(M(this.destroy$),kt(t=>t instanceof Ht),dt(!0),Dt(0)).subscribe(()=>{this.updateRouterActive(),this.cdr.markForCheck()})}}updateRouterActive(){if(this.router.navigated){let t=this.findShouldActiveTabIndex();t!==this.selectedIndex&&this.setSelectedIndex(t),this.nzHideAll=t===-1}}findShouldActiveTabIndex(){let t=this.tabs.toArray(),e=this.isLinkActive(this.router);return t.findIndex(n=>{let a=n.linkDirective;return a?e(a.routerLink):!1})}isLinkActive(t){return e=>e?t.isActive(e.urlTree||"",{paths:this.nzLinkExact?"exact":"subset",queryParams:this.nzLinkExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"}):!1}getTabContentMarginValue(){return-(this.nzSelectedIndex||0)*100}getTabContentMarginLeft(){return this.tabPaneAnimated&&this.dir!=="rtl"?`${this.getTabContentMarginValue()}%`:""}getTabContentMarginRight(){return this.tabPaneAnimated&&this.dir==="rtl"?`${this.getTabContentMarginValue()}%`:""}};i.\u0275fac=function(e){return new(e||i)(d(jt),d(X),d(tt),d(zt,8),d($t,8))},i.\u0275cmp=A({type:i,selectors:[["nz-tabset"]],contentQueries:function(e,n,a){if(e&1&&$(a,tn,5),e&2){let r;T(r=_())&&(n.allTabs=r)}},viewQuery:function(e,n){if(e&1&&D(yt,5),e&2){let a;T(a=_())&&(n.tabNavBarRef=a.first)}},hostAttrs:[1,"ant-tabs"],hostVars:24,hostBindings:function(e,n){e&2&&w("ant-tabs-card",n.nzType==="card"||n.nzType==="editable-card")("ant-tabs-editable",n.nzType==="editable-card")("ant-tabs-editable-card",n.nzType==="editable-card")("ant-tabs-centered",n.nzCentered)("ant-tabs-rtl",n.dir==="rtl")("ant-tabs-top",n.nzTabPosition==="top")("ant-tabs-bottom",n.nzTabPosition==="bottom")("ant-tabs-left",n.nzTabPosition==="left")("ant-tabs-right",n.nzTabPosition==="right")("ant-tabs-default",n.nzSize==="default")("ant-tabs-small",n.nzSize==="small")("ant-tabs-large",n.nzSize==="large")},inputs:{nzSelectedIndex:"nzSelectedIndex",nzTabPosition:"nzTabPosition",nzTabBarExtraContent:"nzTabBarExtraContent",nzCanDeactivate:"nzCanDeactivate",nzAddIcon:"nzAddIcon",nzTabBarStyle:"nzTabBarStyle",nzType:"nzType",nzSize:"nzSize",nzAnimated:"nzAnimated",nzTabBarGutter:"nzTabBarGutter",nzHideAdd:"nzHideAdd",nzCentered:"nzCentered",nzHideAll:"nzHideAll",nzLinkRouter:"nzLinkRouter",nzLinkExact:"nzLinkExact"},outputs:{nzSelectChange:"nzSelectChange",nzSelectedIndexChange:"nzSelectedIndexChange",nzTabListScroll:"nzTabListScroll",nzClose:"nzClose",nzAdd:"nzAdd"},exportAs:["nzTabset"],standalone:!0,features:[Ft([{provide:de,useExisting:i}]),N],decls:4,vars:16,consts:[[3,"ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate","tabScroll","selectFocusedIndex","addClicked",4,"ngIf"],[1,"ant-tabs-content-holder"],[1,"ant-tabs-content"],["role","tabpanel","nz-tab-body","",3,"id","active","content","forceRender","tabPaneAnimated",4,"ngFor","ngForOf"],[3,"ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate","tabScroll","selectFocusedIndex","addClicked"],["class","ant-tabs-tab",3,"margin-right","margin-bottom","ant-tabs-tab-active","ant-tabs-tab-disabled","click","contextmenu",4,"ngFor","ngForOf"],[1,"ant-tabs-tab",3,"click","contextmenu"],["type","button","role","tab","nzTabNavItem","","cdkMonitorElementFocus","",1,"ant-tabs-tab-btn",3,"id","disabled","tab","active"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["type","button","nz-tab-close-button","",3,"closeIcon","click",4,"ngIf"],["type","button","nz-tab-close-button","",3,"closeIcon","click"],["role","tabpanel","nz-tab-body","",3,"id","active","content","forceRender","tabPaneAnimated"]],template:function(e,n){e&1&&(f(0,Xe,2,9,"nz-tabs-nav",0),b(1,"div",1)(2,"div",2),f(3,je,1,6,"div",3),z()()),e&2&&(l("ngIf",n.tabs.length||n.addable),u(2),et("margin-left",n.getTabContentMarginLeft())("margin-right",n.getTabContentMarginRight()),w("ant-tabs-content-top",n.nzTabPosition==="top")("ant-tabs-content-bottom",n.nzTabPosition==="bottom")("ant-tabs-content-left",n.nzTabPosition==="left")("ant-tabs-content-right",n.nzTabPosition==="right")("ant-tabs-content-animated",n.tabPaneAnimated),u(),l("ngForOf",n.tabs))},dependencies:[yt,Y,Pt,bt,le,Gt,Ut,U,q,ce,Ue],encapsulation:2});let s=i;return v([Z()],s.prototype,"nzType",void 0),v([Z()],s.prototype,"nzSize",void 0),v([Z()],s.prototype,"nzAnimated",void 0),v([Z()],s.prototype,"nzTabBarGutter",void 0),v([k()],s.prototype,"nzHideAdd",void 0),v([k()],s.prototype,"nzCentered",void 0),v([k()],s.prototype,"nzHideAll",void 0),v([k()],s.prototype,"nzLinkRouter",void 0),v([k()],s.prototype,"nzLinkExact",void 0),s})();var Yn=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=Rt({type:i}),i.\u0275inj=Et({imports:[sn,yt,_t,rt,ce]});let s=i;return s})();export{tn as a,sn as b,Yn as c};
