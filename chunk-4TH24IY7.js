import{Aa as D,Ab as U,Ad as K,Bb as k,C as N,F as E,Ka as l,Lb as q,Na as F,Nd as y,Ra as R,Rd as S,X as g,Z as L,a as m,b as O,ca as I,cc as V,ce as z,fa as j,h as b,ha as A,hb as $,ia as M,ib as W,ie as tt,jc as X,je as v,k as C,m as x,pa as P,q as u,sd as G,tb as Z,td as Y,ub as H,w as T,xa as _,xf as et,ya as B,yd as J,yh as it,zb as Q}from"./chunk-5G6CWZQB.js";var nt=["fixedEl"],rt=["*"],w=function(i){return i.resize="resize",i.scroll="scroll",i.touchstart="touchstart",i.touchmove="touchmove",i.touchend="touchend",i.pageshow="pageshow",i.load="LOAD",i}(w||{});function lt(i){return typeof window<"u"&&i===window}function ot(i){return lt(i)?{top:0,left:0,bottom:0}:i.getBoundingClientRect()}var ht="affix",d="ant-affix",ft=20,ct=(()=>{class i{get target(){let e=this.nzTarget;return(typeof e=="string"?this.document.querySelector(e):e)||window}constructor(e,t,o,s,n,r,c,h,f){this.nzConfigService=t,this.scrollSrv=o,this.ngZone=s,this.platform=n,this.renderer=r,this.nzResizeObserver=c,this.cdr=h,this.directionality=f,this._nzModuleName=ht,this.nzChange=new _,this.dir="ltr",this.positionChangeSubscription=b.EMPTY,this.offsetChanged$=new x(1),this.destroy$=new C,this.document=j(X),this.placeholderNode=e.nativeElement}ngOnInit(){this.directionality.change?.pipe(g(this.destroy$)).subscribe(e=>{this.dir=e,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(e){let{nzOffsetBottom:t,nzOffsetTop:o,nzTarget:s}=e;(t||o)&&this.offsetChanged$.next(),s&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();let e=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>E(...Object.keys(w).map(t=>N(this.target,t)),this.offsetChanged$.pipe(T(()=>({}))),this.nzResizeObserver.observe(e)).pipe(L(ft,void 0,{trailing:!0}),g(this.destroy$)).subscribe(t=>this.updatePosition(t))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(!0),this.destroy$.complete()}getOffset(e,t){let o=e.getBoundingClientRect(),s=ot(t),n=this.scrollSrv.getScroll(t,!0),r=this.scrollSrv.getScroll(t,!1),c=this.document.body,h=c.clientTop||0,f=c.clientLeft||0;return{top:o.top-s.top+n-h,left:o.left-s.left+r-f,width:o.width,height:o.height}}setAffixStyle(e,t){let o=this.affixStyle,s=this.target===window;if(e.type==="scroll"&&o&&t&&s||y(o,t))return;let n=!!t,r=this.fixedEl.nativeElement;this.renderer.setStyle(r,"cssText",z(t)),this.affixStyle=t,n?r.classList.add(d):r.classList.remove(d),this.updateRtlClass(),(t&&!o||!t&&o)&&this.nzChange.emit(n)}setPlaceholderStyle(e){let t=this.placeholderStyle;y(e,t)||(this.renderer.setStyle(this.placeholderNode,"cssText",z(e)),this.placeholderStyle=e)}syncPlaceholderStyle(e){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;let t={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(e,m(m({},this.affixStyle),t)),this.setPlaceholderStyle(t)}updatePosition(e){if(!this.platform.isBrowser)return;let t=this.target,o=this.nzOffsetTop,s=this.scrollSrv.getScroll(t,!0),n=this.getOffset(this.placeholderNode,t),r=this.fixedEl.nativeElement,c={width:r.offsetWidth,height:r.offsetHeight},h={top:!1,bottom:!1};typeof o!="number"&&typeof this.nzOffsetBottom!="number"?(h.top=!0,o=0):(h.top=typeof o=="number",h.bottom=typeof this.nzOffsetBottom=="number");let f=ot(t),st=t.innerHeight||t.clientHeight;if(s>=n.top-o&&h.top){let a=n.width,p=f.top+o;this.setAffixStyle(e,{position:"fixed",top:p,left:f.left+n.left,width:a}),this.setPlaceholderStyle({width:a,height:c.height})}else if(s<=n.top+c.height+this.nzOffsetBottom-st&&h.bottom){let a=t===window?0:window.innerHeight-f.bottom,p=n.width;this.setAffixStyle(e,{position:"fixed",bottom:a+this.nzOffsetBottom,left:f.left+n.left,width:p}),this.setPlaceholderStyle({width:p,height:n.height})}else e.type===w.resize&&this.affixStyle&&this.affixStyle.position==="fixed"&&this.placeholderNode.offsetWidth?this.setAffixStyle(e,O(m({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(e),this.setPlaceholderStyle();e.type==="resize"&&this.syncPlaceholderStyle(e)}updateRtlClass(){let e=this.fixedEl.nativeElement;this.dir==="rtl"?e.classList.contains(d)?e.classList.add(`${d}-rtl`):e.classList.remove(`${d}-rtl`):e.classList.remove(`${d}-rtl`)}static{this.\u0275fac=function(t){return new(t||i)(l(D),l(tt),l(et),l(B),l(G),l(F),l(it),l(V),l(J))}}static{this.\u0275cmp=A({type:i,selectors:[["nz-affix"]],viewQuery:function(t,o){if(t&1&&Q(nt,7),t&2){let s;U(s=k())&&(o.fixedEl=s.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:[2,"nzOffsetTop","nzOffsetTop",S],nzOffsetBottom:[2,"nzOffsetBottom","nzOffsetBottom",S]},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],standalone:!0,features:[R,P,q],ngContentSelectors:rt,decls:3,vars:0,consts:[["fixedEl",""]],template:function(t,o){t&1&&(Z(),$(0,"div",null,0),H(2),W())},dependencies:[K,Y],encapsulation:2,changeDetection:0})}}return u([v()],i.prototype,"nzOffsetTop",void 0),u([v()],i.prototype,"nzOffsetBottom",void 0),i})(),Mt=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=M({type:i})}static{this.\u0275inj=I({imports:[ct]})}}return i})();export{ct as a,Mt as b};