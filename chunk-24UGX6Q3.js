import{a as ae,d as oe}from"./chunk-7T7S7JLS.js";import{$c as Xt,Aa as B,Ab as y,Ah as se,Ba as ut,Bb as C,Bd as Tt,Bh as re,C as Y,Cb as Wt,Cg as at,Db as bt,Dg as ot,Ea as Lt,Eb as Pt,F as tt,Fb as Vt,H as Dt,I as Nt,Ja as h,Jd as jt,Ka as m,Kb as Ht,La as mt,Lb as N,Ld as _t,Mb as it,O as Et,Pg as G,Qg as K,R as Rt,Sa as W,Ta as g,Tc as Qt,Ua as Z,V as ht,Va as c,Wa as pt,Wb as gt,We as Ut,X as M,Xa as w,_e as Gt,_g as ee,ad as Yt,ca as Mt,cc as st,da as Ot,dc as _,df as Kt,fa as F,gf as Jt,h as Q,ha as A,hb as z,hf as te,ia as Bt,ib as T,ie as Zt,ja as O,jb as P,k as J,kb as V,lb as H,le as qt,me as U,n as kt,nb as k,o as At,oc as zt,pa as et,pb as Ft,pc as q,q as X,qa as f,qb as I,ra as b,s as dt,sb as d,tb as ft,tc as $t,ub as nt,uc as vt,vh as ne,wf as yt,xa as p,xh as ie,ya as j,yb as $,zb as D}from"./chunk-FLGCG6NR.js";function Ce(s,i){if(s&1&&(V(0),P(1,"span",1),H()),s&2){let o=i.$implicit;h(),c("nzType",o)}}var Ie=()=>({minWidth:"46px"}),xe=()=>({visible:!1});function Se(s,i){if(s&1&&(V(0),bt(1),H()),s&2){let o=d().$implicit;h(),Vt(" ",o.tab.label," ")}}function we(s,i){if(s&1){let o=k();z(0,"li",8),I("click",function(){let e=f(o).$implicit,n=d(2);return b(n.onSelect(e))})("contextmenu",function(e){let n=f(o).$implicit,a=d(2);return b(a.onContextmenu(n,e))}),g(1,Se,2,1,"ng-container",9),T()}if(s&2){let o=i.$implicit;w("ant-tabs-dropdown-menu-item-disabled",o.disabled),c("nzSelected",o.active)("nzDisabled",o.disabled),h(),c("nzStringTemplateOutlet",o.tab.label)("nzStringTemplateOutletContext",it(6,xe))}}function ke(s,i){if(s&1&&(z(0,"ul",6),g(1,we,2,7,"li",7),T()),s&2){let o=d();h(),c("ngForOf",o.items)}}function Ae(s,i){if(s&1){let o=k();z(0,"button",10),I("click",function(){f(o);let e=d();return b(e.addClicked.emit())}),T()}if(s&2){let o=d();c("addIcon",o.addIcon)}}var De=["navWarp"],Ne=["navList"],Ee=["*"];function Re(s,i){if(s&1){let o=k();z(0,"button",8),I("click",function(){f(o);let e=d();return b(e.addClicked.emit())}),T()}if(s&2){let o=d();c("addIcon",o.addIcon),Z("tabindex",-1)}}function Me(s,i){}function Oe(s,i){if(s&1&&(z(0,"div",9),g(1,Me,0,0,"ng-template",10),T()),s&2){let o=d();h(),c("ngTemplateOutlet",o.extraTemplate)}}var Be=["nz-tab-body",""];function Le(s,i){}function Fe(s,i){if(s&1&&(V(0),g(1,Le,0,0,"ng-template",1),H()),s&2){let o=d();h(),c("ngTemplateOutlet",o.content)}}function We(s,i){if(s&1&&(V(0),P(1,"span",1),H()),s&2){let o=i.$implicit;h(),c("nzType",o)}}var Pe=["contentTemplate"],Ve=[[["","nz-tab-link",""]],"*"],He=["[nz-tab-link]","*"];function $e(s,i){s&1&&nt(0)}function Qe(s,i){s&1&&nt(0,1)}var Xe=()=>({visible:!0});function Ye(s,i){if(s&1&&(V(0),bt(1),H()),s&2){let o=d().$implicit;h(),Pt(o.label)}}function je(s,i){if(s&1){let o=k();z(0,"button",10),I("click",function(e){f(o);let n=d().index,a=d(2);return b(a.onClose(n,e))}),T()}if(s&2){let o=d().$implicit;c("closeIcon",o.nzCloseIcon)}}function Ze(s,i){if(s&1){let o=k();z(0,"div",6),I("click",function(e){let n=f(o),a=n.$implicit,r=n.index,l=d(2);return b(l.clickNavItem(a,r,e))})("contextmenu",function(e){let n=f(o).$implicit,a=d(2);return b(a.contextmenuNavItem(n,e))}),z(1,"button",7),g(2,Ye,2,1,"ng-container",8)(3,je,1,1,"button",9),T()()}if(s&2){let o=i.$implicit,t=i.index,e=d(2);pt("margin-right",e.position==="horizontal"?e.nzTabBarGutter:null,"px")("margin-bottom",e.position==="vertical"?e.nzTabBarGutter:null,"px"),w("ant-tabs-tab-active",e.nzSelectedIndex===t)("ant-tabs-tab-disabled",o.nzDisabled),h(),c("id",e.getTabContentId(t))("disabled",o.nzDisabled)("tab",o)("active",e.nzSelectedIndex===t),Z("tabIndex",e.getTabIndex(o,t))("aria-disabled",o.nzDisabled)("aria-selected",e.nzSelectedIndex===t&&!e.nzHideAll)("aria-controls",e.getTabContentId(t)),h(),c("nzStringTemplateOutlet",o.label)("nzStringTemplateOutletContext",it(19,Xe)),h(),c("ngIf",o.nzClosable&&e.closable&&!o.nzDisabled)}}function qe(s,i){if(s&1){let o=k();z(0,"nz-tabs-nav",4),I("tabScroll",function(e){f(o);let n=d();return b(n.nzTabListScroll.emit(e))})("selectFocusedIndex",function(e){f(o);let n=d();return b(n.setSelectedIndex(e))})("addClicked",function(){f(o);let e=d();return b(e.onAdd())}),g(1,Ze,4,20,"div",5),T()}if(s&2){let o=d();c("ngStyle",o.nzTabBarStyle)("selectedIndex",o.nzSelectedIndex||0)("inkBarAnimated",o.inkBarAnimated)("addable",o.addable)("addIcon",o.nzAddIcon)("hideBar",o.nzHideAll)("position",o.position)("extraTemplate",o.nzTabBarExtraContent),h(),c("ngForOf",o.tabs)}}function Ue(s,i){if(s&1&&P(0,"div",11),s&2){let o=i.$implicit,t=i.index,e=d();c("id",e.getTabContentId(t))("active",e.nzSelectedIndex===t&&!e.nzHideAll)("content",o.content)("forceRender",o.nzForceRender)("animated",e.tabPaneAnimated),Z("aria-labelledby",e.getTabContentId(t))}}var lt=(()=>{let i=class i{constructor(t){this.elementRef=t,this.addIcon="plus",this.element=this.elementRef.nativeElement}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}};i.\u0275fac=function(e){return new(e||i)(m(B))},i.\u0275cmp=A({type:i,selectors:[["nz-tab-add-button"],["button","nz-tab-add-button",""]],hostAttrs:["aria-label","Add tab","type","button",1,"ant-tabs-nav-add"],inputs:{addIcon:"addIcon"},standalone:!0,features:[N],decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(e,n){e&1&&g(0,Ce,2,1,"ng-container",0),e&2&&c("nzStringTemplateOutlet",n.addIcon)},dependencies:[K,G,ot,at],encapsulation:2});let s=i;return s})(),le=(()=>{let i=class i{get _animated(){return this.animationMode!=="NoopAnimations"&&this.animated}constructor(t,e){this.elementRef=t,this.ngZone=e,this.position="horizontal",this.animated=!0,this.animationMode=F(Lt,{optional:!0})}alignToElement(t){this.ngZone.runOutsideAngular(()=>{yt(()=>this.setStyles(t))})}setStyles(t){let e=this.elementRef.nativeElement;this.position==="horizontal"?(e.style.top="",e.style.height="",e.style.left=this.getLeftPosition(t),e.style.width=this.getElementWidth(t)):(e.style.left="",e.style.width="",e.style.top=this.getTopPosition(t),e.style.height=this.getElementHeight(t))}getLeftPosition(t){return t?`${t.offsetLeft||0}px`:"0"}getElementWidth(t){return t?`${t.offsetWidth||0}px`:"0"}getTopPosition(t){return t?`${t.offsetTop||0}px`:"0"}getElementHeight(t){return t?`${t.offsetHeight||0}px`:"0"}};i.\u0275fac=function(e){return new(e||i)(m(B),m(j))},i.\u0275dir=O({type:i,selectors:[["nz-tabs-ink-bar"],["","nz-tabs-ink-bar",""]],hostAttrs:[1,"ant-tabs-ink-bar"],hostVars:2,hostBindings:function(e,n){e&2&&w("ant-tabs-ink-bar-animated",n._animated)},inputs:{position:"position",animated:"animated"},standalone:!0});let s=i;return s})(),ue=(()=>{let i=class i{constructor(t){this.elementRef=t,this.disabled=!1,this.active=!1,this.el=t.nativeElement,this.parentElement=this.el.parentElement}focus(){this.el.focus()}get width(){return this.parentElement.offsetWidth}get height(){return this.parentElement.offsetHeight}get left(){return this.parentElement.offsetLeft}get top(){return this.parentElement.offsetTop}};i.\u0275fac=function(e){return new(e||i)(m(B))},i.\u0275dir=O({type:i,selectors:[["","nzTabNavItem",""]],inputs:{disabled:[2,"disabled","disabled",_],tab:"tab",active:[2,"active","active",_]},standalone:!0,features:[W]});let s=i;return s})(),Ct=(()=>{let i=class i{constructor(t,e){this.cdr=t,this.elementRef=e,this.items=[],this.addable=!1,this.addIcon="plus",this.addClicked=new p,this.selected=new p,this.menuOpened=!1,this.element=this.elementRef.nativeElement}onSelect(t){t.disabled||(t.tab.nzClick.emit(),this.selected.emit(t))}onContextmenu(t,e){t.disabled||t.tab.nzContextmenu.emit(e)}showItems(){clearTimeout(this.closeAnimationWaitTimeoutId),this.menuOpened=!0,this.cdr.markForCheck()}menuVisChange(t){t||(this.closeAnimationWaitTimeoutId=setTimeout(()=>{this.menuOpened=!1,this.cdr.markForCheck()},150))}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}ngOnDestroy(){clearTimeout(this.closeAnimationWaitTimeoutId)}};i.\u0275fac=function(e){return new(e||i)(m(st),m(B))},i.\u0275cmp=A({type:i,selectors:[["nz-tab-nav-operation"]],hostAttrs:[1,"ant-tabs-nav-operations"],hostVars:2,hostBindings:function(e,n){e&2&&w("ant-tabs-nav-operations-hidden",n.items.length===0)},inputs:{items:"items",addable:[2,"addable","addable",_],addIcon:"addIcon"},outputs:{addClicked:"addClicked",selected:"selected"},exportAs:["nzTabNavOperation"],standalone:!0,features:[W,N],decls:7,vars:6,consts:[["dropdownTrigger","nzDropdown"],["menu","nzDropdownMenu"],["nz-dropdown","","type","button","tabindex","-1","aria-hidden","true","nzOverlayClassName","nz-tabs-dropdown",1,"ant-tabs-nav-more",3,"nzVisibleChange","mouseenter","nzDropdownMenu","nzOverlayStyle","nzMatchWidthElement"],["nz-icon","","nzType","ellipsis"],["nz-menu","",4,"ngIf"],["nz-tab-add-button","",3,"addIcon","click",4,"ngIf"],["nz-menu",""],["nz-menu-item","","class","ant-tabs-dropdown-menu-item",3,"ant-tabs-dropdown-menu-item-disabled","nzSelected","nzDisabled","click","contextmenu",4,"ngFor","ngForOf"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"click","contextmenu","nzSelected","nzDisabled"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["nz-tab-add-button","",3,"click","addIcon"]],template:function(e,n){if(e&1){let a=k();z(0,"button",2,0),I("nzVisibleChange",function(l){return f(a),b(n.menuVisChange(l))})("mouseenter",function(){return f(a),b(n.showItems())}),P(2,"span",3),T(),z(3,"nz-dropdown-menu",null,1),g(5,ke,2,1,"ul",4),T(),g(6,Ae,1,1,"button",5)}if(e&2){let a=Wt(4);c("nzDropdownMenu",a)("nzOverlayStyle",it(5,Ie))("nzMatchWidthElement",null),h(5),c("ngIf",n.menuOpened),h(),c("ngIf",n.addable)}},dependencies:[ot,at,q,zt,K,G,lt,oe,se,ie,ne,ae],encapsulation:2,changeDetection:0});let s=i;return s})(),Ge=.1,ce=.01,rt=20,de=.995**rt,Ke=(()=>{let i=class i{constructor(t,e){this.ngZone=t,this.elementRef=e,this.lastWheelDirection=null,this.lastWheelTimestamp=0,this.lastTimestamp=0,this.lastTimeDiff=0,this.lastMixedWheel=0,this.lastWheelPrevent=!1,this.touchPosition=null,this.lastOffset=null,this.motion=-1,this.unsubscribe=()=>{},this.offsetChange=new p,this.tabScroll=new p,this.onTouchEnd=n=>{if(!this.touchPosition)return;let a=this.lastOffset,r=this.lastTimeDiff;if(this.lastOffset=this.touchPosition=null,a){let l=a.x/r,u=a.y/r,x=Math.abs(l),E=Math.abs(u);if(Math.max(x,E)<Ge)return;let S=l,R=u;this.motion=window.setInterval(()=>{if(Math.abs(S)<ce&&Math.abs(R)<ce){window.clearInterval(this.motion);return}S*=de,R*=de,this.onOffset(S*rt,R*rt,n)},rt)}},this.onTouchMove=n=>{if(!this.touchPosition)return;n.preventDefault();let{screenX:a,screenY:r}=n.touches[0],l=a-this.touchPosition.x,u=r-this.touchPosition.y;this.onOffset(l,u,n);let x=Date.now();this.lastTimeDiff=x-this.lastTimestamp,this.lastTimestamp=x,this.lastOffset={x:l,y:u},this.touchPosition={x:a,y:r}},this.onTouchStart=n=>{let{screenX:a,screenY:r}=n.touches[0];this.touchPosition={x:a,y:r},window.clearInterval(this.motion)},this.onWheel=n=>{let{deltaX:a,deltaY:r}=n,l,u=Math.abs(a),x=Math.abs(r);u===x?l=this.lastWheelDirection==="x"?a:r:u>x?(l=a,this.lastWheelDirection="x"):(l=r,this.lastWheelDirection="y");let E=Date.now(),S=Math.abs(l);(E-this.lastWheelTimestamp>100||S-this.lastMixedWheel>10)&&(this.lastWheelPrevent=!1),this.onOffset(-l,-l,n),(n.defaultPrevented||this.lastWheelPrevent)&&(this.lastWheelPrevent=!0),this.lastWheelTimestamp=E,this.lastMixedWheel=S}}ngOnInit(){this.unsubscribe=this.ngZone.runOutsideAngular(()=>{let t=this.elementRef.nativeElement,e=Y(t,"wheel"),n=Y(t,"touchstart"),a=Y(t,"touchmove"),r=Y(t,"touchend"),l=new Q;return l.add(this.subscribeWrap("wheel",e,this.onWheel)),l.add(this.subscribeWrap("touchstart",n,this.onTouchStart)),l.add(this.subscribeWrap("touchmove",a,this.onTouchMove)),l.add(this.subscribeWrap("touchend",r,this.onTouchEnd)),()=>{l.unsubscribe()}})}subscribeWrap(t,e,n){return e.subscribe(a=>{this.tabScroll.emit({type:t,event:a}),a.defaultPrevented||n(a)})}onOffset(t,e,n){this.ngZone.run(()=>{this.offsetChange.emit({x:t,y:e,event:n})})}ngOnDestroy(){this.unsubscribe()}};i.\u0275fac=function(e){return new(e||i)(m(j),m(B))},i.\u0275dir=O({type:i,selectors:[["","nzTabScrollList",""]],outputs:{offsetChange:"offsetChange",tabScroll:"tabScroll"},standalone:!0});let s=i;return s})(),Je=typeof requestAnimationFrame<"u"?At:kt,he=150,It=(()=>{let i=class i{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=_t(t);this._selectedIndex!==e&&(this._selectedIndex=t,this.selectedIndexChanged=!0,this.keyManager&&this.keyManager.updateActiveItem(t))}get focusIndex(){return this.keyManager?this.keyManager.activeItemIndex:0}set focusIndex(t){!this.isValidIndex(t)||this.focusIndex===t||!this.keyManager||this.keyManager.setActiveItem(t)}get showAddButton(){return this.hiddenItems.length===0&&this.addable}constructor(t,e,n,a,r){this.cdr=t,this.ngZone=e,this.viewportRuler=n,this.nzResizeObserver=a,this.dir=r,this.indexFocused=new p,this.selectFocusedIndex=new p,this.addClicked=new p,this.tabScroll=new p,this.position="horizontal",this.addable=!1,this.hideBar=!1,this.addIcon="plus",this.inkBarAnimated=!0,this.translate=null,this.transformX=0,this.transformY=0,this.pingLeft=!1,this.pingRight=!1,this.pingTop=!1,this.pingBottom=!1,this.hiddenItems=[],this.destroy$=new J,this._selectedIndex=0,this.wrapperWidth=0,this.wrapperHeight=0,this.scrollListWidth=0,this.scrollListHeight=0,this.operationWidth=0,this.operationHeight=0,this.addButtonWidth=0,this.addButtonHeight=0,this.selectedIndexChanged=!1}ngAfterViewInit(){let t=this.dir?this.dir.change.asObservable():dt(null),e=this.viewportRuler.change(150),n=()=>{this.updateScrollListPosition(),this.alignInkBarToSelectedTab()};this.keyManager=new Kt(this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap(),this.keyManager.updateActiveItem(this.selectedIndex),yt(n),tt(this.nzResizeObserver.observe(this.navWarpRef),this.nzResizeObserver.observe(this.navListRef)).pipe(M(this.destroy$),Nt(16,Je)).subscribe(()=>{n()}),tt(t,e,this.items.changes).pipe(M(this.destroy$)).subscribe(()=>{Promise.resolve().then(n),this.keyManager.withHorizontalOrientation(this.getLayoutDirection())}),this.keyManager.change.pipe(M(this.destroy$)).subscribe(a=>{this.indexFocused.emit(a),this.setTabFocus(a),this.scrollToTab(this.keyManager.activeItem)})}ngAfterContentChecked(){this.selectedIndexChanged&&(this.updateScrollListPosition(),this.alignInkBarToSelectedTab(),this.selectedIndexChanged=!1,this.cdr.markForCheck())}ngOnDestroy(){clearTimeout(this.lockAnimationTimeoutId),clearTimeout(this.cssTransformTimeWaitingId),this.destroy$.next(),this.destroy$.complete()}onSelectedFromMenu(t){let e=this.items.toArray().findIndex(n=>n===t);e!==-1&&(this.keyManager.updateActiveItem(e),this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this.scrollToTab(t)))}onOffsetChange(t){if(this.position==="horizontal"){if(!this.lockAnimationTimeoutId&&(this.transformX>=0&&t.x>0||this.transformX<=this.wrapperWidth-this.scrollListWidth&&t.x<0))return;t.event.preventDefault(),this.transformX=this.clampTransformX(this.transformX+t.x),this.setTransform(this.transformX,0)}else{if(!this.lockAnimationTimeoutId&&(this.transformY>=0&&t.y>0||this.transformY<=this.wrapperHeight-this.scrollListHeight&&t.y<0))return;t.event.preventDefault(),this.transformY=this.clampTransformY(this.transformY+t.y),this.setTransform(0,this.transformY)}this.lockAnimation(),this.setVisibleRange(),this.setPingStatus()}handleKeydown(t){let e=this.navWarpRef.nativeElement.contains(t.target);if(!(Gt(t)||!e))switch(t.keyCode){case 37:case 38:case 39:case 40:this.lockAnimation(),this.keyManager.onKeydown(t);break;case 13:case 32:this.focusIndex!==this.selectedIndex&&this.selectFocusedIndex.emit(this.focusIndex);break;default:this.keyManager.onKeydown(t)}}isValidIndex(t){if(!this.items)return!0;let e=this.items?this.items.toArray()[t]:null;return!!e&&!e.disabled}scrollToTab(t){if(!this.items.find(n=>n===t))return;let e=this.items.toArray();if(this.position==="horizontal"){let n=this.transformX;if(this.getLayoutDirection()==="rtl"){let a=e[0].left+e[0].width-t.left-t.width;a<this.transformX?n=a:a+t.width>this.transformX+this.wrapperWidth&&(n=a+t.width-this.wrapperWidth)}else t.left<-this.transformX?n=-t.left:t.left+t.width>-this.transformX+this.wrapperWidth&&(n=-(t.left+t.width-this.wrapperWidth));this.transformX=n,this.transformY=0,this.setTransform(n,0)}else{let n=this.transformY;t.top<-this.transformY?n=-t.top:t.top+t.height>-this.transformY+this.wrapperHeight&&(n=-(t.top+t.height-this.wrapperHeight)),this.transformY=n,this.transformX=0,this.setTransform(0,n)}clearTimeout(this.cssTransformTimeWaitingId),this.cssTransformTimeWaitingId=setTimeout(()=>{this.setVisibleRange()},he)}lockAnimation(){this.lockAnimationTimeoutId||this.ngZone.runOutsideAngular(()=>{this.navListRef.nativeElement.style.transition="none",this.lockAnimationTimeoutId=setTimeout(()=>{this.navListRef.nativeElement.style.transition="",this.lockAnimationTimeoutId=void 0},he)})}setTransform(t,e){this.navListRef.nativeElement.style.transform=`translate(${t}px, ${e}px)`}clampTransformX(t){let e=this.wrapperWidth-this.scrollListWidth;return this.getLayoutDirection()==="rtl"?Math.max(Math.min(e,t),0):Math.min(Math.max(e,t),0)}clampTransformY(t){return Math.min(Math.max(this.wrapperHeight-this.scrollListHeight,t),0)}updateScrollListPosition(){this.resetSizes(),this.transformX=this.clampTransformX(this.transformX),this.transformY=this.clampTransformY(this.transformY),this.setVisibleRange(),this.setPingStatus(),this.keyManager&&(this.keyManager.updateActiveItem(this.keyManager.activeItemIndex),this.keyManager.activeItem&&this.scrollToTab(this.keyManager.activeItem))}resetSizes(){this.addButtonWidth=this.addBtnRef?this.addBtnRef.getElementWidth():0,this.addButtonHeight=this.addBtnRef?this.addBtnRef.getElementHeight():0,this.operationWidth=this.operationRef.getElementWidth(),this.operationHeight=this.operationRef.getElementHeight(),this.wrapperWidth=this.navWarpRef.nativeElement.offsetWidth||0,this.wrapperHeight=this.navWarpRef.nativeElement.offsetHeight||0,this.scrollListHeight=this.navListRef.nativeElement.offsetHeight||0,this.scrollListWidth=this.navListRef.nativeElement.offsetWidth||0}alignInkBarToSelectedTab(){let t=this.items&&this.items.length?this.items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e&&this.inkBar.alignToElement(e.parentElement)}setPingStatus(){let t={top:!1,right:!1,bottom:!1,left:!1},e=this.navWarpRef.nativeElement;this.position==="horizontal"?this.getLayoutDirection()==="rtl"?(t.right=this.transformX>0,t.left=this.transformX+this.wrapperWidth<this.scrollListWidth):(t.left=this.transformX<0,t.right=-this.transformX+this.wrapperWidth<this.scrollListWidth):(t.top=this.transformY<0,t.bottom=-this.transformY+this.wrapperHeight<this.scrollListHeight),Object.keys(t).forEach(n=>{let a=`ant-tabs-nav-wrap-ping-${n}`;t[n]?e.classList.add(a):e.classList.remove(a)})}setVisibleRange(){let t,e,n,a,r,l,u=this.items.toArray(),x={width:0,height:0,left:0,top:0,right:0},E=v=>{let L,ct=u[v]||x;return e==="right"?L=u[0].left+u[0].width-u[v].left-u[v].width:L=ct[e],L};this.position==="horizontal"?(t="width",a=this.wrapperWidth,r=this.scrollListWidth-(this.hiddenItems.length?this.operationWidth:0),l=this.addButtonWidth,n=Math.abs(this.transformX),this.getLayoutDirection()==="rtl"?(e="right",this.pingRight=this.transformX>0,this.pingLeft=this.transformX+this.wrapperWidth<this.scrollListWidth):(this.pingLeft=this.transformX<0,this.pingRight=-this.transformX+this.wrapperWidth<this.scrollListWidth,e="left")):(t="height",a=this.wrapperHeight,r=this.scrollListHeight-(this.hiddenItems.length?this.operationHeight:0),l=this.addButtonHeight,e="top",n=-this.transformY,this.pingTop=this.transformY<0,this.pingBottom=-this.transformY+this.wrapperHeight<this.scrollListHeight);let S=a;if(r+l>a&&(S=a-l),!u.length){this.hiddenItems=[],this.cdr.markForCheck();return}let R=u.length,St=R;for(let v=0;v<R;v+=1){let L=E(v),ct=u[v]||x;if(L+ct[t]>n+S){St=v-1;break}}let wt=0;for(let v=R-1;v>=0;v-=1)if(E(v)<n){wt=v+1;break}let fe=u.slice(0,wt),be=u.slice(St+1);this.hiddenItems=[...fe,...be],this.cdr.markForCheck()}getLayoutDirection(){return this.dir&&this.dir.value==="rtl"?"rtl":"ltr"}setTabFocus(t){}ngOnChanges(t){let{position:e}=t;e&&!e.isFirstChange()&&(this.alignInkBarToSelectedTab(),this.lockAnimation(),this.updateScrollListPosition())}};i.\u0275fac=function(e){return new(e||i)(m(st),m(j),m(Ut),m(re),m(Tt))},i.\u0275cmp=A({type:i,selectors:[["nz-tabs-nav"]],contentQueries:function(e,n,a){if(e&1&&$(a,ue,5),e&2){let r;y(r=C())&&(n.items=r)}},viewQuery:function(e,n){if(e&1&&(D(De,7),D(Ne,7),D(Ct,7),D(lt,5),D(le,7)),e&2){let a;y(a=C())&&(n.navWarpRef=a.first),y(a=C())&&(n.navListRef=a.first),y(a=C())&&(n.operationRef=a.first),y(a=C())&&(n.addBtnRef=a.first),y(a=C())&&(n.inkBar=a.first)}},hostAttrs:[1,"ant-tabs-nav"],hostBindings:function(e,n){e&1&&I("keydown",function(r){return n.handleKeydown(r)})},inputs:{position:"position",addable:[2,"addable","addable",_],hideBar:[2,"hideBar","hideBar",_],addIcon:"addIcon",inkBarAnimated:"inkBarAnimated",extraTemplate:"extraTemplate",selectedIndex:"selectedIndex"},outputs:{indexFocused:"indexFocused",selectFocusedIndex:"selectFocusedIndex",addClicked:"addClicked",tabScroll:"tabScroll"},exportAs:["nzTabsNav"],standalone:!0,features:[W,et,N],ngContentSelectors:Ee,decls:9,vars:16,consts:[["navWarp",""],["navList",""],[1,"ant-tabs-nav-wrap"],["nzTabScrollList","","role","tablist",1,"ant-tabs-nav-list",3,"offsetChange","tabScroll"],["role","tab","nz-tab-add-button","",3,"addIcon","click",4,"ngIf"],["nz-tabs-ink-bar","",3,"hidden","position","animated"],[3,"addClicked","selected","addIcon","addable","items"],["class","ant-tabs-extra-content",4,"ngIf"],["role","tab","nz-tab-add-button","",3,"click","addIcon"],[1,"ant-tabs-extra-content"],[3,"ngTemplateOutlet"]],template:function(e,n){if(e&1){let a=k();ft(),z(0,"div",2,0)(2,"div",3,1),I("offsetChange",function(l){return f(a),b(n.onOffsetChange(l))})("tabScroll",function(l){return f(a),b(n.tabScroll.emit(l))}),nt(4),g(5,Re,1,2,"button",4),P(6,"div",5),T()(),z(7,"nz-tab-nav-operation",6),I("addClicked",function(){return f(a),b(n.addClicked.emit())})("selected",function(l){return f(a),b(n.onSelectedFromMenu(l))}),T(),g(8,Oe,2,1,"div",7)}e&2&&(w("ant-tabs-nav-wrap-ping-left",n.pingLeft)("ant-tabs-nav-wrap-ping-right",n.pingRight)("ant-tabs-nav-wrap-ping-top",n.pingTop)("ant-tabs-nav-wrap-ping-bottom",n.pingBottom),h(5),c("ngIf",n.showAddButton),h(),c("hidden",n.hideBar)("position",n.position)("animated",n.inkBarAnimated),h(),c("addIcon",n.addIcon)("addable",n.addable)("items",n.hiddenItems),h(),c("ngIf",n.extraTemplate))},dependencies:[Ke,q,lt,le,Ct,vt],encapsulation:2,changeDetection:0});let s=i;return s})(),tn=(()=>{let i=class i{constructor(){this.content=null,this.active=!1,this.animated=!0,this.forceRender=!1,this.hasBeenActive=!1}ngOnChanges(t){let{active:e}=t;e?.currentValue&&(this.hasBeenActive=!0)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=A({type:i,selectors:[["","nz-tab-body",""]],hostAttrs:[1,"ant-tabs-tabpane"],hostVars:10,hostBindings:function(e,n){e&2&&(Ft("@tabSwitchMotion",n.active?"enter":"leave")("@.disabled",!n.animated),Z("tabindex",n.active?0:-1)("aria-hidden",!n.active),pt("overflow-y",n.animated?n.active?null:"none":null),w("ant-tabs-tabpane-active",n.active)("ant-tabs-tabpane-hidden",n.animated?null:!n.active))},inputs:{content:"content",active:"active",animated:"animated",forceRender:"forceRender"},exportAs:["nzTabBody"],standalone:!0,features:[et,N],attrs:Be,decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngTemplateOutlet"]],template:function(e,n){e&1&&g(0,Fe,2,1,"ng-container",0),e&2&&c("ngIf",n.hasBeenActive||n.forceRender)},dependencies:[q,vt],encapsulation:2,data:{animation:[ee]},changeDetection:0});let s=i;return s})(),me=(()=>{let i=class i{constructor(){this.closeIcon="close"}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=A({type:i,selectors:[["nz-tab-close-button"],["button","nz-tab-close-button",""]],hostAttrs:["aria-label","Close tab","type","button",1,"ant-tabs-tab-remove"],inputs:{closeIcon:"closeIcon"},standalone:!0,features:[N],decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(e,n){e&1&&g(0,We,2,1,"ng-container",0),e&2&&c("nzStringTemplateOutlet",n.closeIcon)},dependencies:[K,G,ot,at],encapsulation:2});let s=i;return s})(),en=(()=>{let i=class i{constructor(){this.templateRef=F(mt,{host:!0})}};i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=O({type:i,selectors:[["ng-template","nzTabLink",""]],exportAs:["nzTabLinkTemplate"],standalone:!0});let s=i;return s})(),nn=(()=>{let i=class i{constructor(t){this.elementRef=t,this.routerLink=F(Yt,{self:!0,optional:!0})}};i.\u0275fac=function(e){return new(e||i)(m(B))},i.\u0275dir=O({type:i,selectors:[["a","nz-tab-link",""]],exportAs:["nzTabLink"],standalone:!0});let s=i;return s})(),sn=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=O({type:i,selectors:[["","nz-tab",""]],exportAs:["nzTab"],standalone:!0});let s=i;return s})(),pe=new Ot("NZ_TAB_SET"),an=(()=>{let i=class i{constructor(){this.nzTitle="",this.nzClosable=!1,this.nzCloseIcon="close",this.nzDisabled=!1,this.nzForceRender=!1,this.nzSelect=new p,this.nzDeselect=new p,this.nzClick=new p,this.nzContextmenu=new p,this.template=null,this.isActive=!1,this.position=null,this.origin=null,this.closestTabSet=F(pe),this.stateChanges=new J}get content(){return this.template||this.contentTemplate}get label(){return this.nzTitle||this.nzTabLinkTemplateDirective?.templateRef}ngOnChanges(t){let{nzTitle:e,nzDisabled:n,nzForceRender:a}=t;(e||n||a)&&this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete()}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=A({type:i,selectors:[["nz-tab"]],contentQueries:function(e,n,a){if(e&1&&($(a,en,5),$(a,sn,5,mt),$(a,nn,5)),e&2){let r;y(r=C())&&(n.nzTabLinkTemplateDirective=r.first),y(r=C())&&(n.template=r.first),y(r=C())&&(n.linkDirective=r.first)}},viewQuery:function(e,n){if(e&1&&D(Pe,7),e&2){let a;y(a=C())&&(n.contentTemplate=a.first)}},inputs:{nzTitle:"nzTitle",nzClosable:[2,"nzClosable","nzClosable",_],nzCloseIcon:"nzCloseIcon",nzDisabled:[2,"nzDisabled","nzDisabled",_],nzForceRender:[2,"nzForceRender","nzForceRender",_]},outputs:{nzSelect:"nzSelect",nzDeselect:"nzDeselect",nzClick:"nzClick",nzContextmenu:"nzContextmenu"},exportAs:["nzTab"],standalone:!0,features:[W,et,N],ngContentSelectors:He,decls:4,vars:0,consts:[["tabLinkTemplate",""],["contentTemplate",""]],template:function(e,n){e&1&&(ft(Ve),g(0,$e,1,0,"ng-template",null,0,gt)(2,Qe,1,0,"ng-template",null,1,gt))},encapsulation:2,changeDetection:0});let s=i;return s})(),xt=class{},on="tabs",rn=0,ln=(()=>{let i=class i{get nzSelectedIndex(){return this.selectedIndex}set nzSelectedIndex(t){this.indexToSelect=_t(t,null)}get position(){return["top","bottom"].indexOf(this.nzTabPosition)===-1?"vertical":"horizontal"}get addable(){return this.nzType==="editable-card"&&!this.nzHideAdd}get closable(){return this.nzType==="editable-card"}get line(){return this.nzType==="line"}get inkBarAnimated(){return this.line&&(typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.inkBar)}get tabPaneAnimated(){return typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.tabPane}constructor(t,e,n,a){this.nzConfigService=t,this.ngZone=e,this.cdr=n,this.directionality=a,this._nzModuleName=on,this.nzTabPosition="top",this.nzCanDeactivate=null,this.nzAddIcon="plus",this.nzTabBarStyle=null,this.nzType="line",this.nzSize="default",this.nzAnimated=!0,this.nzTabBarGutter=void 0,this.nzHideAdd=!1,this.nzCentered=!1,this.nzHideAll=!1,this.nzLinkRouter=!1,this.nzLinkExact=!0,this.nzSelectChange=new p(!0),this.nzSelectedIndexChange=new p,this.nzTabListScroll=new p,this.nzClose=new p,this.nzAdd=new p,this.allTabs=new ut,this.tabs=new ut,this.dir="ltr",this.destroy$=new J,this.indexToSelect=0,this.selectedIndex=null,this.tabLabelSubscription=Q.EMPTY,this.tabsSubscription=Q.EMPTY,this.canDeactivateSubscription=Q.EMPTY,this.router=F(Xt,{optional:!0}),this.tabSetId=rn++}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(M(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.tabs.destroy(),this.tabLabelSubscription.unsubscribe(),this.tabsSubscription.unsubscribe(),this.canDeactivateSubscription.unsubscribe()}ngAfterContentInit(){this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>this.setUpRouter())}),this.subscribeToTabLabels(),this.subscribeToAllTabChanges(),this.tabsSubscription=this.tabs.changes.subscribe(()=>{if(this.clampTabIndex(this.indexToSelect)===this.selectedIndex){let e=this.tabs.toArray();for(let n=0;n<e.length;n++)if(e[n].isActive){this.indexToSelect=this.selectedIndex=n;break}}this.subscribeToTabLabels(),this.cdr.markForCheck()})}ngAfterContentChecked(){let t=this.indexToSelect=this.clampTabIndex(this.indexToSelect);if(this.selectedIndex!==t){let e=this.selectedIndex==null;e||this.nzSelectChange.emit(this.createChangeEvent(t)),Promise.resolve().then(()=>{this.tabs.forEach((n,a)=>n.isActive=a===t),e||this.nzSelectedIndexChange.emit(t)})}this.tabs.forEach((e,n)=>{e.position=n-t,this.selectedIndex!=null&&e.position===0&&!e.origin&&(e.origin=t-this.selectedIndex)}),this.selectedIndex!==t&&(this.selectedIndex=t,this.cdr.markForCheck())}onClose(t,e){e.preventDefault(),e.stopPropagation(),this.nzClose.emit({index:t})}onAdd(){this.nzAdd.emit()}clampTabIndex(t){return Math.min(this.tabs.length-1,Math.max(t||0,0))}createChangeEvent(t){let e=new xt;return e.index=t,this.tabs&&this.tabs.length&&(e.tab=this.tabs.toArray()[t],this.tabs.forEach((n,a)=>{a!==t&&n.nzDeselect.emit()}),e.tab.nzSelect.emit()),e}subscribeToTabLabels(){this.tabLabelSubscription&&this.tabLabelSubscription.unsubscribe(),this.tabLabelSubscription=tt(...this.tabs.map(t=>t.stateChanges)).subscribe(()=>this.cdr.markForCheck())}subscribeToAllTabChanges(){this.allTabs.changes.pipe(ht(this.allTabs)).subscribe(t=>{this.tabs.reset(t.filter(e=>e.closestTabSet===this)),this.tabs.notifyOnChanges()})}canDeactivateFun(t,e){return typeof this.nzCanDeactivate=="function"?Zt(this.nzCanDeactivate(t,e)).pipe(Rt(),M(this.destroy$)):dt(!0)}clickNavItem(t,e,n){t.nzDisabled||(t.nzClick.emit(),this.isRouterLinkClickEvent(e,n)||this.setSelectedIndex(e))}isRouterLinkClickEvent(t,e){let n=e.target;return this.nzLinkRouter?!!this.tabs.toArray()[t]?.linkDirective?.elementRef.nativeElement.contains(n):!1}contextmenuNavItem(t,e){t.nzDisabled||t.nzContextmenu.emit(e)}setSelectedIndex(t){this.canDeactivateSubscription.unsubscribe(),this.canDeactivateSubscription=this.canDeactivateFun(this.selectedIndex,t).subscribe(e=>{e&&(this.nzSelectedIndex=t,this.tabNavBarRef.focusIndex=t,this.cdr.markForCheck())})}getTabIndex(t,e){return t.nzDisabled?null:this.selectedIndex===e?0:-1}getTabContentId(t){return`nz-tabs-${this.tabSetId}-tab-${t}`}setUpRouter(){if(this.nzLinkRouter){if(!this.router)throw new Error(`${jt} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);this.router.events.pipe(M(this.destroy$),Dt(t=>t instanceof Qt),ht(!0),Et(0)).subscribe(()=>{this.updateRouterActive(),this.cdr.markForCheck()})}}updateRouterActive(){if(this.router?.navigated){let t=this.findShouldActiveTabIndex();t!==this.selectedIndex&&this.setSelectedIndex(t),this.nzHideAll=t===-1}}findShouldActiveTabIndex(){let t=this.tabs.toArray(),e=this.isLinkActive(this.router);return t.findIndex(n=>{let a=n.linkDirective;return a?e(a.routerLink):!1})}isLinkActive(t){return e=>e?!!t?.isActive(e.urlTree||"",{paths:this.nzLinkExact?"exact":"subset",queryParams:this.nzLinkExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"}):!1}};i.\u0275fac=function(e){return new(e||i)(m(qt),m(j),m(st),m(Tt))},i.\u0275cmp=A({type:i,selectors:[["nz-tabset"]],contentQueries:function(e,n,a){if(e&1&&$(a,an,5),e&2){let r;y(r=C())&&(n.allTabs=r)}},viewQuery:function(e,n){if(e&1&&D(It,5),e&2){let a;y(a=C())&&(n.tabNavBarRef=a.first)}},hostAttrs:[1,"ant-tabs"],hostVars:24,hostBindings:function(e,n){e&2&&w("ant-tabs-card",n.nzType==="card"||n.nzType==="editable-card")("ant-tabs-editable",n.nzType==="editable-card")("ant-tabs-editable-card",n.nzType==="editable-card")("ant-tabs-centered",n.nzCentered)("ant-tabs-rtl",n.dir==="rtl")("ant-tabs-top",n.nzTabPosition==="top")("ant-tabs-bottom",n.nzTabPosition==="bottom")("ant-tabs-left",n.nzTabPosition==="left")("ant-tabs-right",n.nzTabPosition==="right")("ant-tabs-default",n.nzSize==="default")("ant-tabs-small",n.nzSize==="small")("ant-tabs-large",n.nzSize==="large")},inputs:{nzSelectedIndex:"nzSelectedIndex",nzTabPosition:"nzTabPosition",nzTabBarExtraContent:"nzTabBarExtraContent",nzCanDeactivate:"nzCanDeactivate",nzAddIcon:"nzAddIcon",nzTabBarStyle:"nzTabBarStyle",nzType:"nzType",nzSize:"nzSize",nzAnimated:"nzAnimated",nzTabBarGutter:"nzTabBarGutter",nzHideAdd:[2,"nzHideAdd","nzHideAdd",_],nzCentered:[2,"nzCentered","nzCentered",_],nzHideAll:[2,"nzHideAll","nzHideAll",_],nzLinkRouter:[2,"nzLinkRouter","nzLinkRouter",_],nzLinkExact:[2,"nzLinkExact","nzLinkExact",_]},outputs:{nzSelectChange:"nzSelectChange",nzSelectedIndexChange:"nzSelectedIndexChange",nzTabListScroll:"nzTabListScroll",nzClose:"nzClose",nzAdd:"nzAdd"},exportAs:["nzTabset"],standalone:!0,features:[Ht([{provide:pe,useExisting:i}]),W,N],decls:4,vars:12,consts:[[3,"ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate","tabScroll","selectFocusedIndex","addClicked",4,"ngIf"],[1,"ant-tabs-content-holder"],[1,"ant-tabs-content"],["role","tabpanel","nz-tab-body","",3,"id","active","content","forceRender","animated",4,"ngFor","ngForOf"],[3,"tabScroll","selectFocusedIndex","addClicked","ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate"],["class","ant-tabs-tab",3,"margin-right","margin-bottom","ant-tabs-tab-active","ant-tabs-tab-disabled","click","contextmenu",4,"ngFor","ngForOf"],[1,"ant-tabs-tab",3,"click","contextmenu"],["type","button","role","tab","nzTabNavItem","","cdkMonitorElementFocus","",1,"ant-tabs-tab-btn",3,"id","disabled","tab","active"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["type","button","nz-tab-close-button","",3,"closeIcon","click",4,"ngIf"],["type","button","nz-tab-close-button","",3,"click","closeIcon"],["role","tabpanel","nz-tab-body","",3,"id","active","content","forceRender","animated"]],template:function(e,n){e&1&&(g(0,qe,2,9,"nz-tabs-nav",0),z(1,"div",1)(2,"div",2),g(3,Ue,1,6,"div",3),T()()),e&2&&(c("ngIf",n.tabs.length||n.addable),h(2),w("ant-tabs-content-top",n.nzTabPosition==="top")("ant-tabs-content-bottom",n.nzTabPosition==="bottom")("ant-tabs-content-left",n.nzTabPosition==="left")("ant-tabs-content-right",n.nzTabPosition==="right")("ant-tabs-content-animated",n.tabPaneAnimated),h(),c("ngForOf",n.tabs))},dependencies:[It,q,$t,zt,ue,te,Jt,K,G,me,tn],encapsulation:2});let s=i;return X([U()],s.prototype,"nzType",void 0),X([U()],s.prototype,"nzSize",void 0),X([U()],s.prototype,"nzAnimated",void 0),X([U()],s.prototype,"nzTabBarGutter",void 0),s})();var jn=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=Bt({type:i}),i.\u0275inj=Mt({imports:[ln,It,Ct,lt,me]});let s=i;return s})();export{an as a,ln as b,jn as c};
