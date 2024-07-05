import{a as S}from"./chunk-BAPU3RXT.js";import{a as ht,b as ct}from"./chunk-QOQPJMYA.js";import{Ab as K,C as k,Cb as X,Db as tt,H as d,Ia as I,Kb as et,L as E,Mg as st,Na as G,Ng as lt,Qa as M,Ra as f,Sa as Z,Ua as H,Va as R,X as m,a as T,ba as $,bb as Q,bc as it,ca as j,cc as g,dc as y,fa as s,gb as P,ha as F,hb as V,ia as _,ib as O,ja as L,jb as W,jd as ot,k as p,kb as U,ld as rt,pa as N,q as w,rb as q,sd as at,ua as A,ya as B,yb as Y,yc as nt,za as u,zb as J}from"./chunk-B5KC2RQS.js";var pt=(()=>{let t=class t{get cog(){return this._cog}set cog(n){this._cog=this.cogSrv.merge("chart",{theme:"",libs:["https://gw.alipayobjects.com/os/lib/antv/g2/4.1.46/dist/g2.min.js","https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js"]},n)}constructor(){this.cogSrv=s(rt),this.lazySrv=s(ot),this.loading=!1,this.loaded=!1,this.notify$=new p,this.cog={theme:""}}libLoad(){return this.loading?(this.loaded&&this.notify$.next(),this):(this.loading=!0,this.lazySrv.load(this.cog.libs).then(()=>{this.loaded=!0,this.notify$.next()}),this)}get notify(){return this.notify$.asObservable()}ngOnDestroy(){this.notify$.unsubscribe()}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var mt=["container"],h=class h{get chart(){return this._chart}get winG2(){return window.G2}constructor(){this.srv=s(pt),this.el=s(B),this.ngZone=s(G),this.platform=s(at),this.cdr=s(it),this.repaint=!0,this.destroy$=new p,this.loaded=!1,this.delay=0,this.ready=new u,this.theme=this.srv.cog.theme,this.srv.notify.pipe(m(this.destroy$),d(()=>!this.loaded)).subscribe(()=>this.load())}changeData(){}onInit(){}onChanges(t){}load(){this.ngZone.run(()=>{this.loaded=!0,this.cdr.detectChanges()}),setTimeout(()=>this.install(),this.delay)}ngOnInit(){this.platform.isBrowser&&(this.onInit(),this.winG2?this.load():this.srv.libLoad())}ngOnChanges(t){if(this.onChanges(t),this.onlyChangeData?this.onlyChangeData(t):Object.keys(t).length===1&&!!t.data){this.changeData();return}!this.chart||!this.repaint||this.ngZone.runOutsideAngular(()=>{this.destroyChart().install()})}destroyChart(){return this._chart&&this._chart.destroy(),this}ngOnDestroy(){this.resize$&&this.resize$.unsubscribe(),this.destroy$.next(),this.destroy$.complete(),this.destroyChart()}};h.\u0275fac=function(o){return new(o||h)},h.\u0275dir=L({type:h,viewQuery:function(o,n){if(o&1&&Y(mt,7),o&2){let e;J(e=K())&&(n.node=e.first)}},inputs:{repaint:[2,"repaint","repaint",g],delay:[2,"delay","delay",y],theme:"theme"},outputs:{ready:"ready"},features:[f,N]});var c=h;w([S()],c.prototype,"load",null);w([S()],c.prototype,"destroyChart",null);function Lt(i,t){let o=T({showTitle:!1,showMarkers:!0,enterable:!0,domStyles:{"g2-tooltip":{padding:"0px"},"g2-tooltip-title":{display:"none"},"g2-tooltip-list-item":{margin:"4px"}}},t);return i==="mini"&&(o.position="top",o.domStyles["g2-tooltip"]={padding:"0px",backgroundColor:"transparent",boxShadow:"none"},o.itemTpl="<li>{value}</li>",o.offset=8),o}function ut(i,t){if(i&1&&(W(0),P(1,"h4",2),X(2),V(),U()),i&2){let o=q();I(2),tt(o.title)}}function ft(i,t){i&1&&O(0,"nz-skeleton")}var gt=41,dt=(()=>{let t=class t extends c{constructor(){super(...arguments),this.color="rgba(24, 144, 255, 0.85)",this.height=0,this.padding="auto",this.data=[],this.autoLabel=!0,this.interaction="none",this.clickItem=new u}getHeight(){return this.title?this.height-gt:this.height}install(){let{node:n,padding:e,interaction:r,theme:b}=this,x=n.nativeElement,a=this._chart=new this.winG2.Chart({container:x,autoFit:!0,height:this.getHeight(),padding:e,theme:b});this.updatelabel(),a.axis("y",{title:null,line:null,tickLine:null}),a.scale({x:{type:"cat"},y:{min:0}}),a.tooltip({showTitle:!1}),r!=="none"&&a.interaction(r),a.legend(!1),a.interval().position("x*y").color("x*y",(l,v)=>{let C=this.data.find(z=>z.x===l&&z.y===v);return C&&C.color?C.color:this.color}).tooltip("x*y",(l,v)=>({name:l,value:v})),a.on("interval:click",l=>{this.ngZone.run(()=>this.clickItem.emit({item:l.data?.data,ev:l}))}),this.ready.next(a),this.changeData(),a.render(),this.installResizeEvent()}changeData(){let{_chart:n,data:e}=this;!n||!Array.isArray(e)||e.length<=0||n.changeData(e)}updatelabel(){let{node:n,data:e,_chart:r}=this,b=n.nativeElement.clientWidth,x=e.length*30;r.axis("x",b>x).render()}installResizeEvent(){!this.autoLabel||this.resize$||(this.resize$=k(window,"resize").pipe(m(this.destroy$),d(()=>!!this._chart),E(200)).subscribe(()=>this.ngZone.runOutsideAngular(()=>this.updatelabel())))}};t.\u0275fac=(()=>{let n;return function(r){return(n||(n=A(t)))(r||t)}})(),t.\u0275cmp=F({type:t,selectors:[["g2-bar"]],hostVars:2,hostBindings:function(e,r){e&2&&R("height",r.height,"px")},inputs:{title:"title",color:"color",height:[2,"height","height",y],padding:"padding",data:"data",autoLabel:[2,"autoLabel","autoLabel",g],interaction:"interaction"},outputs:{clickItem:"clickItem"},exportAs:["g2Bar"],standalone:!0,features:[f,M,et],decls:4,vars:2,consts:[["container",""],[4,"nzStringTemplateOutlet"],[2,"margin-bottom","20px"]],template:function(e,r){e&1&&(Z(0,ut,3,1,"ng-container",1)(1,ft,1,0,"nz-skeleton"),O(2,"div",null,0)),e&2&&(H("nzStringTemplateOutlet",r.title),I(),Q(r.loaded?-1:1))},dependencies:[st,ht],encapsulation:2,changeDetection:0});let i=t;return i})();var yt=[dt],se=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_({type:t}),t.\u0275inj=j({imports:[nt,lt,ct,yt]});let i=t;return i})();export{c as a,Lt as b,dt as c,se as d};