import{a as oe,d as re}from"./chunk-K7LFTOH6.js";import{Aa as L,Ab as _,Ag as lt,Ba as pt,Bb as C,C as Q,Cb as Pt,Db as gt,Ea as Ft,Eb as Vt,F as J,Fb as Ht,Gd as Zt,H as At,I as Et,Id as Ct,Ja as d,Ka as h,Kb as $t,La as ft,Lb as A,Mb as at,Mg as U,Ng as G,O as Rt,Qc as Xt,R as Bt,Ra as W,Sa as g,Te as Gt,Ua as Y,V as mt,Va as u,Wa as bt,Wb as Tt,X as B,Xa as S,Xe as Kt,Xg as ie,Yc as Yt,Zc as jt,af as Jt,ca as Mt,cb as N,cc as ot,da as Lt,dc as v,df as te,eb as et,ef as ee,fa as F,fb as it,fe as qt,gb as nt,h as H,ha as k,hb as b,ia as Ot,ib as T,ie as Ut,ja as M,jb as P,je as q,k as K,kb as j,lb as Z,n as Nt,nb as w,o as Dt,pa as tt,pb as Wt,q as $,qa as p,qb as y,qc as Qt,ra as f,rc as vt,s as ut,sb as l,sh as ne,tb as zt,tf as yt,ub as st,uh as se,xa as m,xh as ae,ya as X,yb as V,yd as _t,yh as le,zb as D,zg as rt}from"./chunk-2WZDLBTH.js";function Ie(n,r){if(n&1&&(j(0),P(1,"span",1),Z()),n&2){let t=r.$implicit;d(),u("nzType",t)}}var xe=()=>({minWidth:"46px"}),Se=()=>({visible:!1});function we(n,r){if(n&1&&(j(0),gt(1),Z()),n&2){let t=l().$implicit;d(),Ht(" ",t.tab.label," ")}}function ke(n,r){if(n&1){let t=w();b(0,"li",7),y("click",function(){let i=p(t).$implicit,s=l(2);return f(s.onSelect(i))})("contextmenu",function(i){let s=p(t).$implicit,a=l(2);return f(a.onContextmenu(s,i))}),g(1,we,2,1,"ng-container",8),T()}if(n&2){let t=r.$implicit;S("ant-tabs-dropdown-menu-item-disabled",t.disabled),u("nzSelected",t.active)("nzDisabled",t.disabled),d(),u("nzStringTemplateOutlet",t.tab.label)("nzStringTemplateOutletContext",at(6,Se))}}function Ne(n,r){if(n&1&&(b(0,"ul",4),it(1,ke,2,7,"li",6,et),T()),n&2){let t=l();d(),nt(t.items)}}function De(n,r){if(n&1){let t=w();b(0,"button",9),y("click",function(){p(t);let i=l();return f(i.addClicked.emit())}),T()}if(n&2){let t=l();u("addIcon",t.addIcon)}}var Ae=["navWarp"],Ee=["navList"],Re=["*"];function Be(n,r){if(n&1){let t=w();b(0,"button",8),y("click",function(){p(t);let i=l();return f(i.addClicked.emit())}),T()}if(n&2){let t=l();u("addIcon",t.addIcon),Y("tabindex",-1)}}function Me(n,r){}function Le(n,r){if(n&1&&(b(0,"div",7),g(1,Me,0,0,"ng-template",9),T()),n&2){let t=l();d(),u("ngTemplateOutlet",t.extraTemplate)}}var Oe=["nz-tab-body",""];function Fe(n,r){}function We(n,r){if(n&1&&g(0,Fe,0,0,"ng-template",0),n&2){let t=l();u("ngTemplateOutlet",t.content)}}function Pe(n,r){if(n&1&&(j(0),P(1,"span",1),Z()),n&2){let t=r.$implicit;d(),u("nzType",t)}}var Ve=["contentTemplate"],He=[[["","nz-tab-link",""]],"*"],$e=["[nz-tab-link]","*"];function Qe(n,r){n&1&&st(0)}function Xe(n,r){n&1&&st(0,1)}var Ye=()=>({visible:!0});function je(n,r){if(n&1&&(j(0),gt(1),Z()),n&2){let t=l().$implicit;d(),Vt(t.label)}}function Ze(n,r){if(n&1){let t=w();b(0,"button",10),y("click",function(i){p(t);let s=l().$index,a=l(2);return f(a.onClose(s,i))}),T()}if(n&2){let t=l().$implicit;u("closeIcon",t.nzCloseIcon)}}function qe(n,r){if(n&1){let t=w();b(0,"div",6),y("click",function(i){let s=p(t),a=s.$implicit,o=s.$index,c=l(2);return f(c.clickNavItem(a,o,i))})("contextmenu",function(i){let s=p(t).$implicit,a=l(2);return f(a.contextmenuNavItem(s,i))}),b(1,"button",7),g(2,je,2,1,"ng-container",8)(3,Ze,1,1,"button",9),T()()}if(n&2){let t=r.$implicit,e=r.$index,i=l(2);bt("margin-right",i.position==="horizontal"?i.nzTabBarGutter:null,"px")("margin-bottom",i.position==="vertical"?i.nzTabBarGutter:null,"px"),S("ant-tabs-tab-active",i.nzSelectedIndex===e)("ant-tabs-tab-disabled",t.nzDisabled),d(),u("id",i.getTabContentId(e))("disabled",t.nzDisabled)("tab",t)("active",i.nzSelectedIndex===e),Y("tabIndex",i.getTabIndex(t,e))("aria-disabled",t.nzDisabled)("aria-selected",i.nzSelectedIndex===e&&!i.nzHideAll)("aria-controls",i.getTabContentId(e)),d(),u("nzStringTemplateOutlet",t.label)("nzStringTemplateOutletContext",at(19,Ye)),d(),N(t.nzClosable&&i.closable&&!t.nzDisabled?3:-1)}}function Ue(n,r){if(n&1){let t=w();b(0,"nz-tabs-nav",4),y("tabScroll",function(i){p(t);let s=l();return f(s.nzTabListScroll.emit(i))})("selectFocusedIndex",function(i){p(t);let s=l();return f(s.setSelectedIndex(i))})("addClicked",function(){p(t);let i=l();return f(i.onAdd())}),it(1,qe,4,20,"div",5,et),T()}if(n&2){let t=l();u("ngStyle",t.nzTabBarStyle)("selectedIndex",t.nzSelectedIndex||0)("inkBarAnimated",t.inkBarAnimated)("addable",t.addable)("addIcon",t.nzAddIcon)("hideBar",t.nzHideAll)("position",t.position)("extraTemplate",t.nzTabBarExtraContent),d(),nt(t.tabs)}}function Ge(n,r){if(n&1&&P(0,"div",3),n&2){let t=r.$implicit,e=r.$index,i=l();u("id",i.getTabContentId(e))("active",i.nzSelectedIndex===e&&!i.nzHideAll)("content",t.content)("forceRender",t.nzForceRender)("animated",i.tabPaneAnimated),Y("aria-labelledby",i.getTabContentId(e))}}var dt=(()=>{class n{constructor(t){this.elementRef=t,this.addIcon="plus",this.element=this.elementRef.nativeElement}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}static{this.\u0275fac=function(e){return new(e||n)(h(L))}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tab-add-button"],["button","nz-tab-add-button",""]],hostAttrs:["aria-label","Add tab","type","button",1,"ant-tabs-nav-add"],inputs:{addIcon:"addIcon"},standalone:!0,features:[A],decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(e,i){e&1&&g(0,Ie,2,1,"ng-container",0),e&2&&u("nzStringTemplateOutlet",i.addIcon)},dependencies:[G,U,lt,rt],encapsulation:2})}}return n})(),ce=(()=>{class n{get _animated(){return this.animationMode!=="NoopAnimations"&&this.animated}constructor(t,e){this.elementRef=t,this.ngZone=e,this.position="horizontal",this.animated=!0,this.animationMode=F(Ft,{optional:!0})}alignToElement(t){this.ngZone.runOutsideAngular(()=>{yt(()=>this.setStyles(t))})}setStyles(t){let e=this.elementRef.nativeElement;this.position==="horizontal"?(e.style.top="",e.style.height="",e.style.left=this.getLeftPosition(t),e.style.width=this.getElementWidth(t)):(e.style.left="",e.style.width="",e.style.top=this.getTopPosition(t),e.style.height=this.getElementHeight(t))}getLeftPosition(t){return t?`${t.offsetLeft||0}px`:"0"}getElementWidth(t){return t?`${t.offsetWidth||0}px`:"0"}getTopPosition(t){return t?`${t.offsetTop||0}px`:"0"}getElementHeight(t){return t?`${t.offsetHeight||0}px`:"0"}static{this.\u0275fac=function(e){return new(e||n)(h(L),h(X))}}static{this.\u0275dir=M({type:n,selectors:[["nz-tabs-ink-bar"],["","nz-tabs-ink-bar",""]],hostAttrs:[1,"ant-tabs-ink-bar"],hostVars:2,hostBindings:function(e,i){e&2&&S("ant-tabs-ink-bar-animated",i._animated)},inputs:{position:"position",animated:"animated"},standalone:!0})}}return n})(),me=(()=>{class n{constructor(t){this.elementRef=t,this.disabled=!1,this.active=!1,this.el=t.nativeElement,this.parentElement=this.el.parentElement}focus(){this.el.focus()}get width(){return this.parentElement.offsetWidth}get height(){return this.parentElement.offsetHeight}get left(){return this.parentElement.offsetLeft}get top(){return this.parentElement.offsetTop}static{this.\u0275fac=function(e){return new(e||n)(h(L))}}static{this.\u0275dir=M({type:n,selectors:[["","nzTabNavItem",""]],inputs:{disabled:[2,"disabled","disabled",v],tab:"tab",active:[2,"active","active",v]},standalone:!0,features:[W]})}}return n})(),It=(()=>{class n{constructor(t,e){this.cdr=t,this.elementRef=e,this.items=[],this.addable=!1,this.addIcon="plus",this.addClicked=new m,this.selected=new m,this.menuOpened=!1,this.element=this.elementRef.nativeElement}onSelect(t){t.disabled||(t.tab.nzClick.emit(),this.selected.emit(t))}onContextmenu(t,e){t.disabled||t.tab.nzContextmenu.emit(e)}showItems(){clearTimeout(this.closeAnimationWaitTimeoutId),this.menuOpened=!0,this.cdr.markForCheck()}menuVisChange(t){t||(this.closeAnimationWaitTimeoutId=setTimeout(()=>{this.menuOpened=!1,this.cdr.markForCheck()},150))}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}ngOnDestroy(){clearTimeout(this.closeAnimationWaitTimeoutId)}static{this.\u0275fac=function(e){return new(e||n)(h(ot),h(L))}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tab-nav-operation"]],hostAttrs:[1,"ant-tabs-nav-operations"],hostVars:2,hostBindings:function(e,i){e&2&&S("ant-tabs-nav-operations-hidden",i.items.length===0)},inputs:{items:"items",addable:[2,"addable","addable",v],addIcon:"addIcon"},outputs:{addClicked:"addClicked",selected:"selected"},exportAs:["nzTabNavOperation"],standalone:!0,features:[W,A],decls:7,vars:6,consts:[["dropdownTrigger","nzDropdown"],["menu","nzDropdownMenu"],["nz-dropdown","","type","button","tabindex","-1","aria-hidden","true","nzOverlayClassName","nz-tabs-dropdown",1,"ant-tabs-nav-more",3,"nzVisibleChange","mouseenter","nzDropdownMenu","nzOverlayStyle","nzMatchWidthElement"],["nz-icon","","nzType","ellipsis"],["nz-menu",""],["nz-tab-add-button","",3,"addIcon"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"ant-tabs-dropdown-menu-item-disabled","nzSelected","nzDisabled"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"click","contextmenu","nzSelected","nzDisabled"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["nz-tab-add-button","",3,"click","addIcon"]],template:function(e,i){if(e&1){let s=w();b(0,"button",2,0),y("nzVisibleChange",function(o){return p(s),f(i.menuVisChange(o))})("mouseenter",function(){return p(s),f(i.showItems())}),P(2,"span",3),T(),b(3,"nz-dropdown-menu",null,1),g(5,Ne,3,0,"ul",4),T(),g(6,De,1,1,"button",5)}if(e&2){let s=Pt(4);u("nzDropdownMenu",s)("nzOverlayStyle",at(5,xe))("nzMatchWidthElement",null),d(5),N(i.menuOpened?5:-1),d(),N(i.addable?6:-1)}},dependencies:[lt,rt,G,U,dt,re,ae,se,ne,oe],encapsulation:2,changeDetection:0})}}return n})(),Ke=.1,de=.01,ct=20,he=.995**ct,Je=(()=>{class n{constructor(t,e){this.ngZone=t,this.elementRef=e,this.lastWheelDirection=null,this.lastWheelTimestamp=0,this.lastTimestamp=0,this.lastTimeDiff=0,this.lastMixedWheel=0,this.lastWheelPrevent=!1,this.touchPosition=null,this.lastOffset=null,this.motion=-1,this.unsubscribe=()=>{},this.offsetChange=new m,this.tabScroll=new m,this.onTouchEnd=i=>{if(!this.touchPosition)return;let s=this.lastOffset,a=this.lastTimeDiff;if(this.lastOffset=this.touchPosition=null,s){let o=s.x/a,c=s.y/a,I=Math.abs(o),E=Math.abs(c);if(Math.max(I,E)<Ke)return;let x=o,R=c;this.motion=window.setInterval(()=>{if(Math.abs(x)<de&&Math.abs(R)<de){window.clearInterval(this.motion);return}x*=he,R*=he,this.onOffset(x*ct,R*ct,i)},ct)}},this.onTouchMove=i=>{if(!this.touchPosition)return;i.preventDefault();let{screenX:s,screenY:a}=i.touches[0],o=s-this.touchPosition.x,c=a-this.touchPosition.y;this.onOffset(o,c,i);let I=Date.now();this.lastTimeDiff=I-this.lastTimestamp,this.lastTimestamp=I,this.lastOffset={x:o,y:c},this.touchPosition={x:s,y:a}},this.onTouchStart=i=>{let{screenX:s,screenY:a}=i.touches[0];this.touchPosition={x:s,y:a},window.clearInterval(this.motion)},this.onWheel=i=>{let{deltaX:s,deltaY:a}=i,o,c=Math.abs(s),I=Math.abs(a);c===I?o=this.lastWheelDirection==="x"?s:a:c>I?(o=s,this.lastWheelDirection="x"):(o=a,this.lastWheelDirection="y");let E=Date.now(),x=Math.abs(o);(E-this.lastWheelTimestamp>100||x-this.lastMixedWheel>10)&&(this.lastWheelPrevent=!1),this.onOffset(-o,-o,i),(i.defaultPrevented||this.lastWheelPrevent)&&(this.lastWheelPrevent=!0),this.lastWheelTimestamp=E,this.lastMixedWheel=x}}ngOnInit(){this.unsubscribe=this.ngZone.runOutsideAngular(()=>{let t=this.elementRef.nativeElement,e=Q(t,"wheel"),i=Q(t,"touchstart"),s=Q(t,"touchmove"),a=Q(t,"touchend"),o=new H;return o.add(this.subscribeWrap("wheel",e,this.onWheel)),o.add(this.subscribeWrap("touchstart",i,this.onTouchStart)),o.add(this.subscribeWrap("touchmove",s,this.onTouchMove)),o.add(this.subscribeWrap("touchend",a,this.onTouchEnd)),()=>{o.unsubscribe()}})}subscribeWrap(t,e,i){return e.subscribe(s=>{this.tabScroll.emit({type:t,event:s}),s.defaultPrevented||i(s)})}onOffset(t,e,i){this.ngZone.run(()=>{this.offsetChange.emit({x:t,y:e,event:i})})}ngOnDestroy(){this.unsubscribe()}static{this.\u0275fac=function(e){return new(e||n)(h(X),h(L))}}static{this.\u0275dir=M({type:n,selectors:[["","nzTabScrollList",""]],outputs:{offsetChange:"offsetChange",tabScroll:"tabScroll"},standalone:!0})}}return n})(),ti=typeof requestAnimationFrame<"u"?Dt:Nt,ue=150,xt=(()=>{class n{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=Ct(t);this._selectedIndex!==e&&(this._selectedIndex=t,this.selectedIndexChanged=!0,this.keyManager&&this.keyManager.updateActiveItem(t))}get focusIndex(){return this.keyManager?this.keyManager.activeItemIndex:0}set focusIndex(t){!this.isValidIndex(t)||this.focusIndex===t||!this.keyManager||this.keyManager.setActiveItem(t)}get showAddButton(){return this.hiddenItems.length===0&&this.addable}constructor(t,e,i,s,a){this.cdr=t,this.ngZone=e,this.viewportRuler=i,this.nzResizeObserver=s,this.dir=a,this.indexFocused=new m,this.selectFocusedIndex=new m,this.addClicked=new m,this.tabScroll=new m,this.position="horizontal",this.addable=!1,this.hideBar=!1,this.addIcon="plus",this.inkBarAnimated=!0,this.translate=null,this.transformX=0,this.transformY=0,this.pingLeft=!1,this.pingRight=!1,this.pingTop=!1,this.pingBottom=!1,this.hiddenItems=[],this.destroy$=new K,this._selectedIndex=0,this.wrapperWidth=0,this.wrapperHeight=0,this.scrollListWidth=0,this.scrollListHeight=0,this.operationWidth=0,this.operationHeight=0,this.addButtonWidth=0,this.addButtonHeight=0,this.selectedIndexChanged=!1}ngAfterViewInit(){let t=this.dir?this.dir.change.asObservable():ut(null),e=this.viewportRuler.change(150),i=()=>{this.updateScrollListPosition(),this.alignInkBarToSelectedTab()};this.keyManager=new Jt(this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap(),this.keyManager.updateActiveItem(this.selectedIndex),yt(i),J(this.nzResizeObserver.observe(this.navWarpRef),this.nzResizeObserver.observe(this.navListRef)).pipe(B(this.destroy$),Et(16,ti)).subscribe(()=>{i()}),J(t,e,this.items.changes).pipe(B(this.destroy$)).subscribe(()=>{Promise.resolve().then(i),this.keyManager.withHorizontalOrientation(this.getLayoutDirection())}),this.keyManager.change.pipe(B(this.destroy$)).subscribe(s=>{this.indexFocused.emit(s),this.setTabFocus(s),this.scrollToTab(this.keyManager.activeItem)})}ngAfterContentChecked(){this.selectedIndexChanged&&(this.updateScrollListPosition(),this.alignInkBarToSelectedTab(),this.selectedIndexChanged=!1,this.cdr.markForCheck())}ngOnDestroy(){clearTimeout(this.lockAnimationTimeoutId),clearTimeout(this.cssTransformTimeWaitingId),this.destroy$.next(),this.destroy$.complete()}onSelectedFromMenu(t){let e=this.items.toArray().findIndex(i=>i===t);e!==-1&&(this.keyManager.updateActiveItem(e),this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this.scrollToTab(t)))}onOffsetChange(t){if(this.position==="horizontal"){if(!this.lockAnimationTimeoutId&&(this.transformX>=0&&t.x>0||this.transformX<=this.wrapperWidth-this.scrollListWidth&&t.x<0))return;t.event.preventDefault(),this.transformX=this.clampTransformX(this.transformX+t.x),this.setTransform(this.transformX,0)}else{if(!this.lockAnimationTimeoutId&&(this.transformY>=0&&t.y>0||this.transformY<=this.wrapperHeight-this.scrollListHeight&&t.y<0))return;t.event.preventDefault(),this.transformY=this.clampTransformY(this.transformY+t.y),this.setTransform(0,this.transformY)}this.lockAnimation(),this.setVisibleRange(),this.setPingStatus()}handleKeydown(t){let e=this.navWarpRef.nativeElement.contains(t.target);if(!(Kt(t)||!e))switch(t.keyCode){case 37:case 38:case 39:case 40:this.lockAnimation(),this.keyManager.onKeydown(t);break;case 13:case 32:this.focusIndex!==this.selectedIndex&&this.selectFocusedIndex.emit(this.focusIndex);break;default:this.keyManager.onKeydown(t)}}isValidIndex(t){if(!this.items)return!0;let e=this.items?this.items.toArray()[t]:null;return!!e&&!e.disabled}scrollToTab(t){if(!this.items.find(i=>i===t))return;let e=this.items.toArray();if(this.position==="horizontal"){let i=this.transformX;if(this.getLayoutDirection()==="rtl"){let s=e[0].left+e[0].width-t.left-t.width;s<this.transformX?i=s:s+t.width>this.transformX+this.wrapperWidth&&(i=s+t.width-this.wrapperWidth)}else t.left<-this.transformX?i=-t.left:t.left+t.width>-this.transformX+this.wrapperWidth&&(i=-(t.left+t.width-this.wrapperWidth));this.transformX=i,this.transformY=0,this.setTransform(i,0)}else{let i=this.transformY;t.top<-this.transformY?i=-t.top:t.top+t.height>-this.transformY+this.wrapperHeight&&(i=-(t.top+t.height-this.wrapperHeight)),this.transformY=i,this.transformX=0,this.setTransform(0,i)}clearTimeout(this.cssTransformTimeWaitingId),this.cssTransformTimeWaitingId=setTimeout(()=>{this.setVisibleRange()},ue)}lockAnimation(){this.lockAnimationTimeoutId||this.ngZone.runOutsideAngular(()=>{this.navListRef.nativeElement.style.transition="none",this.lockAnimationTimeoutId=setTimeout(()=>{this.navListRef.nativeElement.style.transition="",this.lockAnimationTimeoutId=void 0},ue)})}setTransform(t,e){this.navListRef.nativeElement.style.transform=`translate(${t}px, ${e}px)`}clampTransformX(t){let e=this.wrapperWidth-this.scrollListWidth;return this.getLayoutDirection()==="rtl"?Math.max(Math.min(e,t),0):Math.min(Math.max(e,t),0)}clampTransformY(t){return Math.min(Math.max(this.wrapperHeight-this.scrollListHeight,t),0)}updateScrollListPosition(){this.resetSizes(),this.transformX=this.clampTransformX(this.transformX),this.transformY=this.clampTransformY(this.transformY),this.setVisibleRange(),this.setPingStatus(),this.keyManager&&(this.keyManager.updateActiveItem(this.keyManager.activeItemIndex),this.keyManager.activeItem&&this.scrollToTab(this.keyManager.activeItem))}resetSizes(){this.addButtonWidth=this.addBtnRef?this.addBtnRef.getElementWidth():0,this.addButtonHeight=this.addBtnRef?this.addBtnRef.getElementHeight():0,this.operationWidth=this.operationRef.getElementWidth(),this.operationHeight=this.operationRef.getElementHeight(),this.wrapperWidth=this.navWarpRef.nativeElement.offsetWidth||0,this.wrapperHeight=this.navWarpRef.nativeElement.offsetHeight||0,this.scrollListHeight=this.navListRef.nativeElement.offsetHeight||0,this.scrollListWidth=this.navListRef.nativeElement.offsetWidth||0}alignInkBarToSelectedTab(){let t=this.items&&this.items.length?this.items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e&&this.inkBar.alignToElement(e.parentElement)}setPingStatus(){let t={top:!1,right:!1,bottom:!1,left:!1},e=this.navWarpRef.nativeElement;this.position==="horizontal"?this.getLayoutDirection()==="rtl"?(t.right=this.transformX>0,t.left=this.transformX+this.wrapperWidth<this.scrollListWidth):(t.left=this.transformX<0,t.right=-this.transformX+this.wrapperWidth<this.scrollListWidth):(t.top=this.transformY<0,t.bottom=-this.transformY+this.wrapperHeight<this.scrollListHeight),Object.keys(t).forEach(i=>{let s=`ant-tabs-nav-wrap-ping-${i}`;t[i]?e.classList.add(s):e.classList.remove(s)})}setVisibleRange(){let t,e,i,s,a,o,c=this.items.toArray(),I={width:0,height:0,left:0,top:0,right:0},E=z=>{let O,ht=c[z]||I;return e==="right"?O=c[0].left+c[0].width-c[z].left-c[z].width:O=ht[e],O};this.position==="horizontal"?(t="width",s=this.wrapperWidth,a=this.scrollListWidth-(this.hiddenItems.length?this.operationWidth:0),o=this.addButtonWidth,i=Math.abs(this.transformX),this.getLayoutDirection()==="rtl"?(e="right",this.pingRight=this.transformX>0,this.pingLeft=this.transformX+this.wrapperWidth<this.scrollListWidth):(this.pingLeft=this.transformX<0,this.pingRight=-this.transformX+this.wrapperWidth<this.scrollListWidth,e="left")):(t="height",s=this.wrapperHeight,a=this.scrollListHeight-(this.hiddenItems.length?this.operationHeight:0),o=this.addButtonHeight,e="top",i=-this.transformY,this.pingTop=this.transformY<0,this.pingBottom=-this.transformY+this.wrapperHeight<this.scrollListHeight);let x=s;if(a+o>s&&(x=s-o),!c.length){this.hiddenItems=[],this.cdr.markForCheck();return}let R=c.length,wt=R;for(let z=0;z<R;z+=1){let O=E(z),ht=c[z]||I;if(O+ht[t]>i+x){wt=z-1;break}}let kt=0;for(let z=R-1;z>=0;z-=1)if(E(z)<i){kt=z+1;break}let be=c.slice(0,kt),ze=c.slice(wt+1);this.hiddenItems=[...be,...ze],this.cdr.markForCheck()}getLayoutDirection(){return this.dir&&this.dir.value==="rtl"?"rtl":"ltr"}setTabFocus(t){}ngOnChanges(t){let{position:e}=t;e&&!e.isFirstChange()&&(this.alignInkBarToSelectedTab(),this.lockAnimation(),this.updateScrollListPosition())}static{this.\u0275fac=function(e){return new(e||n)(h(ot),h(X),h(Gt),h(le),h(_t))}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tabs-nav"]],contentQueries:function(e,i,s){if(e&1&&V(s,me,5),e&2){let a;_(a=C())&&(i.items=a)}},viewQuery:function(e,i){if(e&1&&(D(Ae,7),D(Ee,7),D(It,7),D(dt,5),D(ce,7)),e&2){let s;_(s=C())&&(i.navWarpRef=s.first),_(s=C())&&(i.navListRef=s.first),_(s=C())&&(i.operationRef=s.first),_(s=C())&&(i.addBtnRef=s.first),_(s=C())&&(i.inkBar=s.first)}},hostAttrs:[1,"ant-tabs-nav"],hostBindings:function(e,i){e&1&&y("keydown",function(a){return i.handleKeydown(a)})},inputs:{position:"position",addable:[2,"addable","addable",v],hideBar:[2,"hideBar","hideBar",v],addIcon:"addIcon",inkBarAnimated:"inkBarAnimated",extraTemplate:"extraTemplate",selectedIndex:"selectedIndex"},outputs:{indexFocused:"indexFocused",selectFocusedIndex:"selectFocusedIndex",addClicked:"addClicked",tabScroll:"tabScroll"},exportAs:["nzTabsNav"],standalone:!0,features:[W,tt,A],ngContentSelectors:Re,decls:9,vars:16,consts:[["navWarp",""],["navList",""],[1,"ant-tabs-nav-wrap"],["nzTabScrollList","","role","tablist",1,"ant-tabs-nav-list",3,"offsetChange","tabScroll"],["role","tab","nz-tab-add-button","",3,"addIcon"],["nz-tabs-ink-bar","",3,"hidden","position","animated"],[3,"addClicked","selected","addIcon","addable","items"],[1,"ant-tabs-extra-content"],["role","tab","nz-tab-add-button","",3,"click","addIcon"],[3,"ngTemplateOutlet"]],template:function(e,i){if(e&1){let s=w();zt(),b(0,"div",2,0)(2,"div",3,1),y("offsetChange",function(o){return p(s),f(i.onOffsetChange(o))})("tabScroll",function(o){return p(s),f(i.tabScroll.emit(o))}),st(4),g(5,Be,1,2,"button",4),P(6,"div",5),T()(),b(7,"nz-tab-nav-operation",6),y("addClicked",function(){return p(s),f(i.addClicked.emit())})("selected",function(o){return p(s),f(i.onSelectedFromMenu(o))}),T(),g(8,Le,2,1,"div",7)}e&2&&(S("ant-tabs-nav-wrap-ping-left",i.pingLeft)("ant-tabs-nav-wrap-ping-right",i.pingRight)("ant-tabs-nav-wrap-ping-top",i.pingTop)("ant-tabs-nav-wrap-ping-bottom",i.pingBottom),d(5),N(i.showAddButton?5:-1),d(),u("hidden",i.hideBar)("position",i.position)("animated",i.inkBarAnimated),d(),u("addIcon",i.addIcon)("addable",i.addable)("items",i.hiddenItems),d(),N(i.extraTemplate?8:-1))},dependencies:[Je,dt,ce,It,vt],encapsulation:2,changeDetection:0})}}return n})(),ei=(()=>{class n{constructor(){this.content=null,this.active=!1,this.animated=!0,this.forceRender=!1,this.hasBeenActive=!1}ngOnChanges(t){let{active:e}=t;e?.currentValue&&(this.hasBeenActive=!0)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=k({type:n,selectors:[["","nz-tab-body",""]],hostAttrs:[1,"ant-tabs-tabpane"],hostVars:10,hostBindings:function(e,i){e&2&&(Wt("@tabSwitchMotion",i.active?"enter":"leave")("@.disabled",!i.animated),Y("tabindex",i.active?0:-1)("aria-hidden",!i.active),bt("overflow-y",i.animated?i.active?null:"none":null),S("ant-tabs-tabpane-active",i.active)("ant-tabs-tabpane-hidden",i.animated?null:!i.active))},inputs:{content:"content",active:"active",animated:"animated",forceRender:"forceRender"},exportAs:["nzTabBody"],standalone:!0,features:[tt,A],attrs:Oe,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(e,i){e&1&&g(0,We,1,1,null,0),e&2&&N(i.hasBeenActive||i.forceRender?0:-1)},dependencies:[vt],encapsulation:2,data:{animation:[ie]},changeDetection:0})}}return n})(),pe=(()=>{class n{constructor(){this.closeIcon="close"}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tab-close-button"],["button","nz-tab-close-button",""]],hostAttrs:["aria-label","Close tab","type","button",1,"ant-tabs-tab-remove"],inputs:{closeIcon:"closeIcon"},standalone:!0,features:[A],decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(e,i){e&1&&g(0,Pe,2,1,"ng-container",0),e&2&&u("nzStringTemplateOutlet",i.closeIcon)},dependencies:[G,U,lt,rt],encapsulation:2})}}return n})(),ii=(()=>{class n{constructor(){this.templateRef=F(ft,{host:!0})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275dir=M({type:n,selectors:[["ng-template","nzTabLink",""]],exportAs:["nzTabLinkTemplate"],standalone:!0})}}return n})(),ni=(()=>{class n{constructor(t){this.elementRef=t,this.routerLink=F(jt,{self:!0,optional:!0})}static{this.\u0275fac=function(e){return new(e||n)(h(L))}}static{this.\u0275dir=M({type:n,selectors:[["a","nz-tab-link",""]],exportAs:["nzTabLink"],standalone:!0})}}return n})(),si=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275dir=M({type:n,selectors:[["","nz-tab",""]],exportAs:["nzTab"],standalone:!0})}}return n})(),fe=new Lt("NZ_TAB_SET"),ai=(()=>{class n{constructor(){this.nzTitle="",this.nzClosable=!1,this.nzCloseIcon="close",this.nzDisabled=!1,this.nzForceRender=!1,this.nzSelect=new m,this.nzDeselect=new m,this.nzClick=new m,this.nzContextmenu=new m,this.template=null,this.isActive=!1,this.position=null,this.origin=null,this.closestTabSet=F(fe),this.stateChanges=new K}get content(){return this.template||this.contentTemplate}get label(){return this.nzTitle||this.nzTabLinkTemplateDirective?.templateRef}ngOnChanges(t){let{nzTitle:e,nzDisabled:i,nzForceRender:s}=t;(e||i||s)&&this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete()}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tab"]],contentQueries:function(e,i,s){if(e&1&&(V(s,ii,5),V(s,si,5,ft),V(s,ni,5)),e&2){let a;_(a=C())&&(i.nzTabLinkTemplateDirective=a.first),_(a=C())&&(i.template=a.first),_(a=C())&&(i.linkDirective=a.first)}},viewQuery:function(e,i){if(e&1&&D(Ve,7),e&2){let s;_(s=C())&&(i.contentTemplate=s.first)}},inputs:{nzTitle:"nzTitle",nzClosable:[2,"nzClosable","nzClosable",v],nzCloseIcon:"nzCloseIcon",nzDisabled:[2,"nzDisabled","nzDisabled",v],nzForceRender:[2,"nzForceRender","nzForceRender",v]},outputs:{nzSelect:"nzSelect",nzDeselect:"nzDeselect",nzClick:"nzClick",nzContextmenu:"nzContextmenu"},exportAs:["nzTab"],standalone:!0,features:[W,tt,A],ngContentSelectors:$e,decls:4,vars:0,consts:[["tabLinkTemplate",""],["contentTemplate",""]],template:function(e,i){e&1&&(zt(He),g(0,Qe,1,0,"ng-template",null,0,Tt)(2,Xe,1,0,"ng-template",null,1,Tt))},encapsulation:2,changeDetection:0})}}return n})(),St=class{},oi="tabs",ri=0,li=(()=>{class n{get nzSelectedIndex(){return this.selectedIndex}set nzSelectedIndex(t){this.indexToSelect=Ct(t,null)}get position(){return["top","bottom"].indexOf(this.nzTabPosition)===-1?"vertical":"horizontal"}get addable(){return this.nzType==="editable-card"&&!this.nzHideAdd}get closable(){return this.nzType==="editable-card"}get line(){return this.nzType==="line"}get inkBarAnimated(){return this.line&&(typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.inkBar)}get tabPaneAnimated(){return typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.tabPane}constructor(t,e,i,s){this.nzConfigService=t,this.ngZone=e,this.cdr=i,this.directionality=s,this._nzModuleName=oi,this.nzTabPosition="top",this.nzCanDeactivate=null,this.nzAddIcon="plus",this.nzTabBarStyle=null,this.nzType="line",this.nzSize="default",this.nzAnimated=!0,this.nzTabBarGutter=void 0,this.nzHideAdd=!1,this.nzCentered=!1,this.nzHideAll=!1,this.nzLinkRouter=!1,this.nzLinkExact=!0,this.nzSelectChange=new m(!0),this.nzSelectedIndexChange=new m,this.nzTabListScroll=new m,this.nzClose=new m,this.nzAdd=new m,this.allTabs=new pt,this.tabs=new pt,this.dir="ltr",this.destroy$=new K,this.indexToSelect=0,this.selectedIndex=null,this.tabLabelSubscription=H.EMPTY,this.tabsSubscription=H.EMPTY,this.canDeactivateSubscription=H.EMPTY,this.router=F(Yt,{optional:!0}),this.tabSetId=ri++}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(B(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.tabs.destroy(),this.tabLabelSubscription.unsubscribe(),this.tabsSubscription.unsubscribe(),this.canDeactivateSubscription.unsubscribe()}ngAfterContentInit(){this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>this.setUpRouter())}),this.subscribeToTabLabels(),this.subscribeToAllTabChanges(),this.tabsSubscription=this.tabs.changes.subscribe(()=>{if(this.clampTabIndex(this.indexToSelect)===this.selectedIndex){let e=this.tabs.toArray();for(let i=0;i<e.length;i++)if(e[i].isActive){this.indexToSelect=this.selectedIndex=i;break}}this.subscribeToTabLabels(),this.cdr.markForCheck()})}ngAfterContentChecked(){let t=this.indexToSelect=this.clampTabIndex(this.indexToSelect);if(this.selectedIndex!==t){let e=this.selectedIndex==null;e||this.nzSelectChange.emit(this.createChangeEvent(t)),Promise.resolve().then(()=>{this.tabs.forEach((i,s)=>i.isActive=s===t),e||this.nzSelectedIndexChange.emit(t)})}this.tabs.forEach((e,i)=>{e.position=i-t,this.selectedIndex!=null&&e.position===0&&!e.origin&&(e.origin=t-this.selectedIndex)}),this.selectedIndex!==t&&(this.selectedIndex=t,this.cdr.markForCheck())}onClose(t,e){e.preventDefault(),e.stopPropagation(),this.nzClose.emit({index:t})}onAdd(){this.nzAdd.emit()}clampTabIndex(t){return Math.min(this.tabs.length-1,Math.max(t||0,0))}createChangeEvent(t){let e=new St;return e.index=t,this.tabs&&this.tabs.length&&(e.tab=this.tabs.toArray()[t],this.tabs.forEach((i,s)=>{s!==t&&i.nzDeselect.emit()}),e.tab.nzSelect.emit()),e}subscribeToTabLabels(){this.tabLabelSubscription&&this.tabLabelSubscription.unsubscribe(),this.tabLabelSubscription=J(...this.tabs.map(t=>t.stateChanges)).subscribe(()=>this.cdr.markForCheck())}subscribeToAllTabChanges(){this.allTabs.changes.pipe(mt(this.allTabs)).subscribe(t=>{this.tabs.reset(t.filter(e=>e.closestTabSet===this)),this.tabs.notifyOnChanges()})}canDeactivateFun(t,e){return typeof this.nzCanDeactivate=="function"?qt(this.nzCanDeactivate(t,e)).pipe(Bt(),B(this.destroy$)):ut(!0)}clickNavItem(t,e,i){t.nzDisabled||(t.nzClick.emit(),this.isRouterLinkClickEvent(e,i)||this.setSelectedIndex(e))}isRouterLinkClickEvent(t,e){let i=e.target;return this.nzLinkRouter?!!this.tabs.toArray()[t]?.linkDirective?.elementRef.nativeElement.contains(i):!1}contextmenuNavItem(t,e){t.nzDisabled||t.nzContextmenu.emit(e)}setSelectedIndex(t){this.canDeactivateSubscription.unsubscribe(),this.canDeactivateSubscription=this.canDeactivateFun(this.selectedIndex,t).subscribe(e=>{e&&(this.nzSelectedIndex=t,this.tabNavBarRef.focusIndex=t,this.cdr.markForCheck())})}getTabIndex(t,e){return t.nzDisabled?null:this.selectedIndex===e?0:-1}getTabContentId(t){return`nz-tabs-${this.tabSetId}-tab-${t}`}setUpRouter(){if(this.nzLinkRouter){if(!this.router)throw new Error(`${Zt} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);this.router.events.pipe(B(this.destroy$),At(t=>t instanceof Xt),mt(!0),Rt(0)).subscribe(()=>{this.updateRouterActive(),this.cdr.markForCheck()})}}updateRouterActive(){if(this.router?.navigated){let t=this.findShouldActiveTabIndex();t!==this.selectedIndex&&this.setSelectedIndex(t),this.nzHideAll=t===-1}}findShouldActiveTabIndex(){let t=this.tabs.toArray(),e=this.isLinkActive(this.router);return t.findIndex(i=>{let s=i.linkDirective;return s?e(s.routerLink):!1})}isLinkActive(t){return e=>e?!!t?.isActive(e.urlTree||"",{paths:this.nzLinkExact?"exact":"subset",queryParams:this.nzLinkExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"}):!1}static{this.\u0275fac=function(e){return new(e||n)(h(Ut),h(X),h(ot),h(_t))}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tabset"]],contentQueries:function(e,i,s){if(e&1&&V(s,ai,5),e&2){let a;_(a=C())&&(i.allTabs=a)}},viewQuery:function(e,i){if(e&1&&D(xt,5),e&2){let s;_(s=C())&&(i.tabNavBarRef=s.first)}},hostAttrs:[1,"ant-tabs"],hostVars:24,hostBindings:function(e,i){e&2&&S("ant-tabs-card",i.nzType==="card"||i.nzType==="editable-card")("ant-tabs-editable",i.nzType==="editable-card")("ant-tabs-editable-card",i.nzType==="editable-card")("ant-tabs-centered",i.nzCentered)("ant-tabs-rtl",i.dir==="rtl")("ant-tabs-top",i.nzTabPosition==="top")("ant-tabs-bottom",i.nzTabPosition==="bottom")("ant-tabs-left",i.nzTabPosition==="left")("ant-tabs-right",i.nzTabPosition==="right")("ant-tabs-default",i.nzSize==="default")("ant-tabs-small",i.nzSize==="small")("ant-tabs-large",i.nzSize==="large")},inputs:{nzSelectedIndex:"nzSelectedIndex",nzTabPosition:"nzTabPosition",nzTabBarExtraContent:"nzTabBarExtraContent",nzCanDeactivate:"nzCanDeactivate",nzAddIcon:"nzAddIcon",nzTabBarStyle:"nzTabBarStyle",nzType:"nzType",nzSize:"nzSize",nzAnimated:"nzAnimated",nzTabBarGutter:"nzTabBarGutter",nzHideAdd:[2,"nzHideAdd","nzHideAdd",v],nzCentered:[2,"nzCentered","nzCentered",v],nzHideAll:[2,"nzHideAll","nzHideAll",v],nzLinkRouter:[2,"nzLinkRouter","nzLinkRouter",v],nzLinkExact:[2,"nzLinkExact","nzLinkExact",v]},outputs:{nzSelectChange:"nzSelectChange",nzSelectedIndexChange:"nzSelectedIndexChange",nzTabListScroll:"nzTabListScroll",nzClose:"nzClose",nzAdd:"nzAdd"},exportAs:["nzTabset"],standalone:!0,features:[$t([{provide:fe,useExisting:n}]),W,A],decls:5,vars:11,consts:[[3,"ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate"],[1,"ant-tabs-content-holder"],[1,"ant-tabs-content"],["role","tabpanel","nz-tab-body","",3,"id","active","content","forceRender","animated"],[3,"tabScroll","selectFocusedIndex","addClicked","ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate"],[1,"ant-tabs-tab",3,"margin-right","margin-bottom","ant-tabs-tab-active","ant-tabs-tab-disabled"],[1,"ant-tabs-tab",3,"click","contextmenu"],["type","button","role","tab","nzTabNavItem","","cdkMonitorElementFocus","",1,"ant-tabs-tab-btn",3,"id","disabled","tab","active"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["type","button","nz-tab-close-button","",3,"closeIcon"],["type","button","nz-tab-close-button","",3,"click","closeIcon"]],template:function(e,i){e&1&&(g(0,Ue,3,8,"nz-tabs-nav",0),b(1,"div",1)(2,"div",2),it(3,Ge,1,6,"div",3,et),T()()),e&2&&(N(i.tabs.length||i.addable?0:-1),d(2),S("ant-tabs-content-top",i.nzTabPosition==="top")("ant-tabs-content-bottom",i.nzTabPosition==="bottom")("ant-tabs-content-left",i.nzTabPosition==="left")("ant-tabs-content-right",i.nzTabPosition==="right")("ant-tabs-content-animated",i.tabPaneAnimated),d(),nt(i.tabs))},dependencies:[xt,Qt,me,ee,te,G,U,pe,ei],encapsulation:2})}}return $([q()],n.prototype,"nzType",void 0),$([q()],n.prototype,"nzSize",void 0),$([q()],n.prototype,"nzAnimated",void 0),$([q()],n.prototype,"nzTabBarGutter",void 0),n})();var ji=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=Ot({type:n})}static{this.\u0275inj=Mt({imports:[li,xt,It,dt,pe]})}}return n})();export{ai as a,li as b,ji as c};
