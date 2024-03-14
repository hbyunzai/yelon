import{a as ct,b as pt}from"./chunk-2KMHHGS6.js";import{Aa as B,Ab as K,Ba as f,Bb as X,C as E,Db as tt,Eb as et,H as m,Ka as D,Ke as O,L as F,Lb as it,Pa as G,Ra as M,Sa as g,Ta as Z,Va as R,Wa as Q,Y as d,a as k,bc as nt,bh as lt,ca as $,cb as P,cc as y,ch as ht,da as j,dc as b,ga as s,hb as V,hd as rt,ia as h,ib as W,ja as _,jb as T,jd as at,k as u,ka as L,kb as U,la as N,lb as q,q as w,qd as st,ra as A,sb as Y,wa as H,wc as ot,zb as J}from"./chunk-MW3JJ3MN.js";var ut=(()=>{let t=class t{get cog(){return this._cog}set cog(n){this._cog=this.cogSrv.merge("chart",{theme:"",libs:["https://gw.alipayobjects.com/os/lib/antv/g2/4.1.46/dist/g2.min.js","https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js"]},n)}constructor(){this.cogSrv=s(at),this.lazySrv=s(rt),this.loading=!1,this.loaded=!1,this.notify$=new u,this.cog={theme:""}}libLoad(){return this.loading?(this.loaded&&this.notify$.next(),this):(this.loading=!0,this.lazySrv.load(this.cog.libs).then(()=>{this.loaded=!0,this.notify$.next()}),this)}get notify(){return this.notify$.asObservable()}ngOnDestroy(){this.notify$.unsubscribe()}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var dt=["container"],c=class c{get chart(){return this._chart}get winG2(){return window.G2}constructor(){this.srv=s(ut),this.el=s(B),this.ngZone=s(G),this.platform=s(st),this.cdr=s(nt),this.repaint=!0,this.destroy$=new u,this.loaded=!1,this.delay=0,this.ready=new f,this.theme=this.srv.cog.theme,this.srv.notify.pipe(d(this.destroy$),m(()=>!this.loaded)).subscribe(()=>this.load())}changeData(){}onInit(){}onChanges(t){}load(){this.ngZone.run(()=>{this.loaded=!0,this.cdr.detectChanges()}),setTimeout(()=>this.install(),this.delay)}ngOnInit(){this.platform.isBrowser&&(this.onInit(),this.winG2?this.load():this.srv.libLoad())}ngOnChanges(t){if(this.onChanges(t),this.onlyChangeData?this.onlyChangeData(t):Object.keys(t).length===1&&!!t.data){this.changeData();return}!this.chart||!this.repaint||this.ngZone.runOutsideAngular(()=>{this.destroyChart().install()})}destroyChart(){return this._chart&&this._chart.destroy(),this}ngOnDestroy(){this.resize$&&this.resize$.unsubscribe(),this.destroy$.next(),this.destroy$.complete(),this.destroyChart()}};c.\u0275fac=function(o){return new(o||c)},c.\u0275dir=N({type:c,viewQuery:function(o,n){if(o&1&&J(dt,7),o&2){let e;K(e=X())&&(n.node=e.first)}},inputs:{repaint:[h.HasDecoratorInputTransform,"repaint","repaint",y],delay:[h.HasDecoratorInputTransform,"delay","delay",b],theme:"theme"},outputs:{ready:"ready"},features:[g,A]});var p=c;w([O()],p.prototype,"load",null);w([O()],p.prototype,"destroyChart",null);function Nt(i,t){let o=k({showTitle:!1,showMarkers:!0,enterable:!0,domStyles:{"g2-tooltip":{padding:"0px"},"g2-tooltip-title":{display:"none"},"g2-tooltip-list-item":{margin:"4px"}}},t);return i==="mini"&&(o.position="top",o.domStyles["g2-tooltip"]={padding:"0px",backgroundColor:"transparent",boxShadow:"none"},o.itemTpl="<li>{value}</li>",o.offset=8),o}function ft(i,t){if(i&1&&(U(0),V(1,"h4",2),tt(2),W(),q()),i&2){let o=Y();D(2),et(o.title)}}function gt(i,t){i&1&&T(0,"nz-skeleton")}var yt=41,mt=(()=>{let t=class t extends p{constructor(){super(...arguments),this.color="rgba(24, 144, 255, 0.85)",this.height=0,this.padding="auto",this.data=[],this.autoLabel=!0,this.interaction="none",this.clickItem=new f}getHeight(){return this.title?this.height-yt:this.height}install(){let{node:n,padding:e,interaction:r,theme:x}=this,v=n.nativeElement,a=this._chart=new this.winG2.Chart({container:v,autoFit:!0,height:this.getHeight(),padding:e,theme:x});this.updatelabel(),a.axis("y",{title:null,line:null,tickLine:null}),a.scale({x:{type:"cat"},y:{min:0}}),a.tooltip({showTitle:!1}),r!=="none"&&a.interaction(r),a.legend(!1),a.interval().position("x*y").color("x*y",(l,C)=>{let I=this.data.find(z=>z.x===l&&z.y===C);return I&&I.color?I.color:this.color}).tooltip("x*y",(l,C)=>({name:l,value:C})),a.on("interval:click",l=>{this.ngZone.run(()=>this.clickItem.emit({item:l.data?.data,ev:l}))}),this.ready.next(a),this.changeData(),a.render(),this.installResizeEvent()}changeData(){let{_chart:n,data:e}=this;!n||!Array.isArray(e)||e.length<=0||n.changeData(e)}updatelabel(){let{node:n,data:e,_chart:r}=this,x=n.nativeElement.clientWidth,v=e.length*30;r.axis("x",x>v).render()}installResizeEvent(){!this.autoLabel||this.resize$||(this.resize$=E(window,"resize").pipe(d(this.destroy$),m(()=>!!this._chart),F(200)).subscribe(()=>this.ngZone.runOutsideAngular(()=>this.updatelabel())))}};t.\u0275fac=(()=>{let n;return function(r){return(n||(n=H(t)))(r||t)}})(),t.\u0275cmp=_({type:t,selectors:[["g2-bar"]],hostVars:2,hostBindings:function(e,r){e&2&&Q("height",r.height,"px")},inputs:{title:"title",color:"color",height:[h.HasDecoratorInputTransform,"height","height",b],padding:"padding",data:"data",autoLabel:[h.HasDecoratorInputTransform,"autoLabel","autoLabel",y],interaction:"interaction"},outputs:{clickItem:"clickItem"},exportAs:["g2Bar"],standalone:!0,features:[g,M,it],decls:4,vars:2,consts:[["container",""],[4,"nzStringTemplateOutlet"],[2,"margin-bottom","20px"]],template:function(e,r){e&1&&(Z(0,ft,3,1,"ng-container",1)(1,gt,1,0,"nz-skeleton"),T(2,"div",null,0)),e&2&&(R("nzStringTemplateOutlet",r.title),D(),P(1,r.loaded?-1:1))},dependencies:[lt,ct],encapsulation:2,changeDetection:0});let i=t;return i})();var bt=[mt],le=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=L({type:t}),t.\u0275inj=j({imports:[ot,ht,pt,bt]});let i=t;return i})();export{p as a,Nt as b,mt as c,le as d};
