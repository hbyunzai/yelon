import{$ as M,Aa as Z,Ae as b,Cc as et,E as A,H as P,Ib as X,Jb as G,Kd as it,Ld as st,Ob as Y,Pa as H,Pb as J,Qa as l,Qb as K,Qd as ot,Rf as lt,Sd as nt,Wh as ft,Xa as k,Ya as Q,Z as O,a as g,b as E,bb as U,de as S,ea as D,fe as v,ha as F,i as I,l as B,ma as R,n as L,r as z,s as d,se as w,tc as tt,va as $,wa as W,wb as q,xb as V,y as j,ze as rt}from"./chunk-SN7Y2XRP.js";var at=["fixedEl"],dt=["*"],T=function(s){return s.resize="resize",s.scroll="scroll",s.touchstart="touchstart",s.touchmove="touchmove",s.touchend="touchend",s.pageshow="pageshow",s.load="LOAD",s}(T||{});function mt(s){return typeof window<"u"&&s===window}function ct(s){return mt(s)?{top:0,left:0,bottom:0}:s.getBoundingClientRect()}var pt="affix",a="ant-affix",ut=20,gt=(()=>{let s,C=[],y=[],m,_=[],N=[];return class x{static{let e=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;s=[b()],m=[b()],z(null,null,s,{kind:"field",name:"nzOffsetTop",static:!1,private:!1,access:{has:t=>"nzOffsetTop"in t,get:t=>t.nzOffsetTop,set:(t,i)=>{t.nzOffsetTop=i}},metadata:e},C,y),z(null,null,m,{kind:"field",name:"nzOffsetBottom",static:!1,private:!1,access:{has:t=>"nzOffsetBottom"in t,get:t=>t.nzOffsetBottom,set:(t,i)=>{t.nzOffsetBottom=i}},metadata:e},_,N),e&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:e})}get target(){let e=this.nzTarget;return(typeof e=="string"?this.document.querySelector(e):e)||window}constructor(e,t,i,o,n,r,h,f,c){this.nzConfigService=t,this.scrollSrv=i,this.ngZone=o,this.platform=n,this.renderer=r,this.nzResizeObserver=h,this.cdr=f,this.directionality=c,this._nzModuleName=pt,this.nzOffsetTop=d(this,C,void 0),this.nzOffsetBottom=(d(this,y),d(this,_,void 0)),this.nzChange=(d(this,N),new $),this.dir="ltr",this.positionChangeSubscription=I.EMPTY,this.offsetChanged$=new L(1),this.destroy$=new B,this.document=F(et),this.placeholderNode=e.nativeElement}ngOnInit(){this.directionality.change?.pipe(O(this.destroy$)).subscribe(e=>{this.dir=e,this.registerListeners(),this.updatePosition({}),this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(e){let{nzOffsetBottom:t,nzOffsetTop:i,nzTarget:o}=e;(t||i)&&this.offsetChanged$.next(),o&&this.registerListeners()}ngAfterViewInit(){this.registerListeners()}ngOnDestroy(){this.removeListeners()}registerListeners(){if(!this.platform.isBrowser)return;this.removeListeners();let e=this.target===window?this.document.body:this.target;this.positionChangeSubscription=this.ngZone.runOutsideAngular(()=>P(...Object.keys(T).map(t=>A(this.target,t)),this.offsetChanged$.pipe(j(()=>({}))),this.nzResizeObserver.observe(e)).pipe(M(ut,void 0,{trailing:!0}),O(this.destroy$)).subscribe(t=>this.updatePosition(t))),this.timeout=setTimeout(()=>this.updatePosition({}))}removeListeners(){clearTimeout(this.timeout),this.positionChangeSubscription.unsubscribe(),this.destroy$.next(!0),this.destroy$.complete()}getOffset(e,t){let i=e.getBoundingClientRect(),o=ct(t),n=this.scrollSrv.getScroll(t,!0),r=this.scrollSrv.getScroll(t,!1),h=this.document.body,f=h.clientTop||0,c=h.clientLeft||0;return{top:i.top-o.top+n-f,left:i.left-o.left+r-c,width:i.width,height:i.height}}setAffixStyle(e,t){let i=this.affixStyle,o=this.target===window;if(e.type==="scroll"&&i&&t&&o||S(i,t))return;let n=!!t,r=this.fixedEl.nativeElement;this.renderer.setStyle(r,"cssText",w(t)),this.affixStyle=t,n?r.classList.add(a):r.classList.remove(a),this.updateRtlClass(),(t&&!i||!t&&i)&&this.nzChange.emit(n)}setPlaceholderStyle(e){let t=this.placeholderStyle;S(e,t)||(this.renderer.setStyle(this.placeholderNode,"cssText",w(e)),this.placeholderStyle=e)}syncPlaceholderStyle(e){if(!this.affixStyle)return;this.renderer.setStyle(this.placeholderNode,"cssText",""),this.placeholderStyle=void 0;let t={width:this.placeholderNode.offsetWidth,height:this.fixedEl.nativeElement.offsetHeight};this.setAffixStyle(e,g(g({},this.affixStyle),t)),this.setPlaceholderStyle(t)}updatePosition(e){if(!this.platform.isBrowser)return;let t=this.target,i=this.nzOffsetTop,o=this.scrollSrv.getScroll(t,!0),n=this.getOffset(this.placeholderNode,t),r=this.fixedEl.nativeElement,h={width:r.offsetWidth,height:r.offsetHeight},f={top:!1,bottom:!1};typeof i!="number"&&typeof this.nzOffsetBottom!="number"?(f.top=!0,i=0):(f.top=typeof i=="number",f.bottom=typeof this.nzOffsetBottom=="number");let c=ct(t),ht=t.innerHeight||t.clientHeight;if(o>=n.top-i&&f.top){let p=n.width,u=c.top+i;this.setAffixStyle(e,{position:"fixed",top:u,left:c.left+n.left,width:p}),this.setPlaceholderStyle({width:p,height:h.height})}else if(o<=n.top+h.height+this.nzOffsetBottom-ht&&f.bottom){let p=t===window?0:window.innerHeight-c.bottom,u=n.width;this.setAffixStyle(e,{position:"fixed",bottom:p+this.nzOffsetBottom,left:c.left+n.left,width:u}),this.setPlaceholderStyle({width:u,height:n.height})}else e.type===T.resize&&this.affixStyle&&this.affixStyle.position==="fixed"&&this.placeholderNode.offsetWidth?this.setAffixStyle(e,E(g({},this.affixStyle),{width:this.placeholderNode.offsetWidth})):this.setAffixStyle(e),this.setPlaceholderStyle();e.type==="resize"&&this.syncPlaceholderStyle(e)}updateRtlClass(){let e=this.fixedEl.nativeElement;this.dir==="rtl"?e.classList.contains(a)?e.classList.add(`${a}-rtl`):e.classList.remove(`${a}-rtl`):e.classList.remove(`${a}-rtl`)}static{this.\u0275fac=function(t){return new(t||x)(l(Z),l(rt),l(lt),l(W),l(it),l(H),l(ft),l(tt),l(ot))}}static{this.\u0275cmp=k({type:x,selectors:[["nz-affix"]],viewQuery:function(t,i){if(t&1&&Y(at,7),t&2){let o;J(o=K())&&(i.fixedEl=o.first)}},inputs:{nzTarget:"nzTarget",nzOffsetTop:[2,"nzOffsetTop","nzOffsetTop",v],nzOffsetBottom:[2,"nzOffsetBottom","nzOffsetBottom",v]},outputs:{nzChange:"nzChange"},exportAs:["nzAffix"],features:[U,R],ngContentSelectors:dt,decls:3,vars:0,consts:[["fixedEl",""]],template:function(t,i){t&1&&(X(),q(0,"div",null,0),G(2),V())},dependencies:[nt,st],encapsulation:2,changeDetection:0})}}})(),Rt=(()=>{class s{static{this.\u0275fac=function(m){return new(m||s)}}static{this.\u0275mod=Q({type:s})}static{this.\u0275inj=D({imports:[gt]})}}return s})();export{gt as a,Rt as b};
