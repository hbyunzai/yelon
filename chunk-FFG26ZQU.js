import{Ab as U,Ad as K,Ba as F,Bb as q,C as I,Cb as V,F as L,Ka as l,Mb as X,Na as _,Nd as v,Oa as $,Qa as A,Vd as w,Y as S,_ as j,a as u,ah as et,b as C,ba as P,da as B,de as z,ea as D,h as T,hc as k,ib as W,jb as H,je as tt,k as x,ke as O,la as M,m as E,oa as R,q as y,td as G,ub as Z,ud as Y,vb as Q,w as N,xh as it,yd as J}from"./chunk-ZKKUKXOF.js";var ot=["fixedEl"],nt=["*"],b=function(i){return i.resize="resize",i.scroll="scroll",i.touchstart="touchstart",i.touchmove="touchmove",i.touchend="touchend",i.pageshow="pageshow",i.load="LOAD",i}(b||{});function rt(i){return typeof window<"u"&&i===window}function st(i){return rt(i)?{top:0,left:0,bottom:0}:i.getBoundingClientRect()}var lt="affix",a="ant-affix",ht=20,ct=(()=>{let o=class o{get target(){let e=this.nzTarget;return(typeof e=="string"?this.document.querySelector(e):e)||window}constructor(e,t,s,n,r,h,d,c,f,g){this.nzConfigService=s,this.scrollSrv=n,this.ngZone=r,this.platform=h,this.renderer=d,this.nzResizeObserver=c,this.cdr=f,this.directionality=g,this._nzModuleName=lt,this.nzChange=new P,this.dir="ltr",this.positionChangeSubscription=T.EMPTY,this.offsetChanged$=new E(1),this.destroy$=new x,this.placeholderNode=e.nativeElement,this.document=t}ngOnInit(){this.directionality.change?.pipe(S(this.destroy$)).subscribe(e=>{this.dir=e,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(e){let{nzOffsetBottom:t,nzOffsetTop:s,nzTarget:n}=e;(t||s)&&this.offsetChanged$.next(),n&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();let e=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>L(...Object.keys(b).map(t=>I(this.target,t)),this.offsetChanged$.pipe(N(()=>({}))),this.nzResizeObserver.observe(e)).pipe(j(ht,void 0,{trailing:!0}),S(this.destroy$)).subscribe(t=>this.updatePosition(t))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(!0),this.destroy$.complete()}getOffset(e,t){let s=e.getBoundingClientRect(),n=st(t),r=this.scrollSrv.getScroll(t,!0),h=this.scrollSrv.getScroll(t,!1),d=this.document.body,c=d.clientTop||0,f=d.clientLeft||0;return{top:s.top-n.top+r-c,left:s.left-n.left+h-f,width:s.width,height:s.height}}setAffixStyle(e,t){let s=this.affixStyle,n=this.target===window;if(e.type==="scroll"&&s&&t&&n||v(s,t))return;let r=!!t,h=this.fixedEl.nativeElement;this.renderer.setStyle(h,"cssText",z(t)),this.affixStyle=t,r?h.classList.add(a):h.classList.remove(a),this.updateRtlClass(),(t&&!s||!t&&s)&&this.nzChange.emit(r)}setPlaceholderStyle(e){let t=this.placeholderStyle;v(e,t)||(this.renderer.setStyle(this.placeholderNode,"cssText",z(e)),this.placeholderStyle=e)}syncPlaceholderStyle(e){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;let t={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(e,u(u({},this.affixStyle),t)),this.setPlaceholderStyle(t)}updatePosition(e){if(!this.platform.isBrowser)return;let t=this.target,s=this.nzOffsetTop,n=this.scrollSrv.getScroll(t,!0),r=this.getOffset(this.placeholderNode,t),h=this.fixedEl.nativeElement,d={width:h.offsetWidth,height:h.offsetHeight},c={top:!1,bottom:!1};typeof s!="number"&&typeof this.nzOffsetBottom!="number"?(c.top=!0,s=0):(c.top=typeof s=="number",c.bottom=typeof this.nzOffsetBottom=="number");let f=st(t),g=t.innerHeight||t.clientHeight;if(n>=r.top-s&&c.top){let p=r.width,m=f.top+s;this.setAffixStyle(e,{position:"fixed",top:m,left:f.left+r.left,width:p}),this.setPlaceholderStyle({width:p,height:d.height})}else if(n<=r.top+d.height+this.nzOffsetBottom-g&&c.bottom){let p=t===window?0:window.innerHeight-f.bottom,m=r.width;this.setAffixStyle(e,{position:"fixed",bottom:p+this.nzOffsetBottom,left:f.left+r.left,width:m}),this.setPlaceholderStyle({width:m,height:r.height})}else e.type===b.resize&&this.affixStyle&&this.affixStyle.position==="fixed"&&this.placeholderNode.offsetWidth?this.setAffixStyle(e,C(u({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(e),this.setPlaceholderStyle();e.type==="resize"&&this.syncPlaceholderStyle(e)}updateRtlClass(){let e=this.fixedEl.nativeElement;this.dir==="rtl"?e.classList.contains(a)?e.classList.add(`${a}-rtl`):e.classList.remove(`${a}-rtl`):e.classList.remove(`${a}-rtl`)}};o.\u0275fac=function(t){return new(t||o)(l(M),l(k),l(tt),l(et),l(A),l(G),l(_),l(it),l($),l(J,8))},o.\u0275cmp=B({type:o,selectors:[["nz-affix"]],viewQuery:function(t,s){if(t&1&&U(ot,7),t&2){let n;q(n=V())&&(s.fixedEl=n.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:"nzOffsetTop",nzOffsetBottom:"nzOffsetBottom"},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],standalone:!0,features:[F,X],ngContentSelectors:nt,decls:3,vars:0,consts:[["fixedEl",""]],template:function(t,s){t&1&&(Z(),W(0,"div",null,0),Q(2),H())},dependencies:[K,Y],encapsulation:2,changeDetection:0});let i=o;return y([O(),w(void 0)],i.prototype,"nzOffsetTop",void 0),y([O(),w(void 0)],i.prototype,"nzOffsetBottom",void 0),i})(),Dt=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=D({type:o}),o.\u0275inj=R({imports:[ct]});let i=o;return i})();export{ct as a,Dt as b};