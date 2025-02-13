import{a as I}from"./chunk-NYWYEBRZ.js";import{a as lt,b as ct}from"./chunk-TNI2SY7A.js";import{$a as A,Aa as L,Ab as W,Ad as nt,Cd as ot,E,Hb as U,J as p,Kd as rt,Ma as O,Nc as it,O as G,Ob as q,Pb as J,Qb as K,Vb as X,Wb as tt,Wg as at,Xa as M,Xg as st,Ya as N,Z as h,Za as F,a as z,bb as m,cb as R,da as k,ea as _,g as T,ha as r,ib as H,jb as Z,l as c,ma as B,ra as $,rb as Y,tc as et,uc as u,va as d,vc as f,wa as j,wb as P,xb as Q,yb as D,zb as V}from"./chunk-SN7Y2XRP.js";var g=class i{cogSrv=r(ot);lazySrv=r(nt);_cog;loading=!1;loaded=!1;notify$=new c;get cog(){return this._cog}set cog(e){this._cog=this.cogSrv.merge("chart",{theme:"",libs:["https://gw.alipayobjects.com/os/lib/antv/g2/4.1.46/dist/g2.min.js","https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js"]},e)}constructor(){this.cog={theme:""}}libLoad(){return this.loading?(this.loaded&&this.notify$.next(),this):(this.loading=!0,this.lazySrv.load(this.cog.libs).then(()=>{this.loaded=!0,this.notify$.next()}),this)}get notify(){return this.notify$.asObservable()}ngOnDestroy(){this.notify$.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})};var ht=["container"],l=class l{srv=r(g);el=r(L);ngZone=r(j);platform=r(rt);cdr=r(et);get chart(){return this._chart}get winG2(){return window.G2}constructor(){this.theme=this.srv.cog.theme,this.srv.notify.pipe(h(this.destroy$),p(()=>!this.loaded)).subscribe(()=>this.load())}repaint=!0;node;resize$;destroy$=new c;_chart;loaded=!1;delay=0;theme;ready=new d;onlyChangeData;changeData(){}onInit(){}onChanges(e){}load(){this.ngZone.run(()=>{this.loaded=!0,this.cdr.detectChanges()}),setTimeout(()=>this.install(),this.delay)}ngOnInit(){this.platform.isBrowser&&(this.onInit(),this.winG2?this.load():this.srv.libLoad())}ngOnChanges(e){if(this.onChanges(e),this.onlyChangeData?this.onlyChangeData(e):Object.keys(e).length===1&&!!e.data){this.changeData();return}!this.chart||!this.repaint||this.ngZone.runOutsideAngular(()=>{this.destroyChart().install()})}destroyChart(){return this._chart&&this._chart.destroy(),this}ngOnDestroy(){this.resize$&&this.resize$.unsubscribe(),this.destroy$.next(),this.destroy$.complete(),this.destroyChart()}static \u0275fac=function(t){return new(t||l)};static \u0275dir=F({type:l,viewQuery:function(t,n){if(t&1&&q(ht,7),t&2){let a;J(a=K())&&(n.node=a.first)}},inputs:{repaint:[2,"repaint","repaint",u],delay:[2,"delay","delay",f],theme:"theme"},outputs:{ready:"ready"},features:[m,B]})};T([I()],l.prototype,"load",1),T([I()],l.prototype,"destroyChart",1);var y=l;function Rt(i,e){let t=z({showTitle:!1,showMarkers:!0,enterable:!0,domStyles:{"g2-tooltip":{padding:"0px"},"g2-tooltip-title":{display:"none"},"g2-tooltip-list-item":{margin:"4px"}}},e);return i==="mini"&&(t.position="top",t.domStyles["g2-tooltip"]={padding:"0px",backgroundColor:"transparent",boxShadow:"none"},t.itemTpl="<li>{value}</li>",t.offset=8),t}function dt(i,e){if(i&1&&(V(0),P(1,"h4",2),X(2),Q(),W()),i&2){let t=U();O(2),tt(t.title)}}function mt(i,e){i&1&&D(0,"nz-skeleton")}var ut=41,v=class i extends y{title;color="rgba(24, 144, 255, 0.85)";height=0;padding="auto";data=[];autoLabel=!0;interaction="none";clickItem=new d;getHeight(){return this.title?this.height-ut:this.height}install(){let{node:e,padding:t,interaction:n,theme:a}=this,C=e.nativeElement,o=this._chart=new this.winG2.Chart({container:C,autoFit:!0,height:this.getHeight(),padding:t,theme:a});this.updatelabel(),o.axis("y",{title:null,line:null,tickLine:null}),o.scale({x:{type:"cat"},y:{min:0}}),o.tooltip({showTitle:!1}),n!=="none"&&o.interaction(n),o.legend(!1),o.interval().position("x*y").color("x*y",(s,b)=>{let x=this.data.find(w=>w.x===s&&w.y===b);return x&&x.color?x.color:this.color}).tooltip("x*y",(s,b)=>({name:s,value:b})),o.on("interval:click",s=>{this.ngZone.run(()=>this.clickItem.emit({item:s.data?.data,ev:s}))}),this.ready.next(o),this.changeData(),o.render(),this.installResizeEvent()}changeData(){let{_chart:e,data:t}=this;!e||!Array.isArray(t)||t.length<=0||e.changeData(t)}updatelabel(){let{node:e,data:t,_chart:n}=this,a=e.nativeElement.clientWidth,C=t.length*30;n.axis("x",a>C).render()}installResizeEvent(){!this.autoLabel||this.resize$||(this.resize$=E(window,"resize").pipe(h(this.destroy$),p(()=>!!this._chart),G(200)).subscribe(()=>this.ngZone.runOutsideAngular(()=>this.updatelabel())))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(i)))(n||i)}})();static \u0275cmp=M({type:i,selectors:[["g2-bar"]],hostVars:2,hostBindings:function(t,n){t&2&&Z("height",n.height,"px")},inputs:{title:"title",color:"color",height:[2,"height","height",f],padding:"padding",data:"data",autoLabel:[2,"autoLabel","autoLabel",u],interaction:"interaction"},outputs:{clickItem:"clickItem"},exportAs:["g2Bar"],features:[m,A],decls:4,vars:2,consts:[["container",""],[4,"nzStringTemplateOutlet"],[2,"margin-bottom","20px"]],template:function(t,n){t&1&&(R(0,dt,3,1,"ng-container",1)(1,mt,1,0,"nz-skeleton"),D(2,"div",null,0)),t&2&&(H("nzStringTemplateOutlet",n.title),O(),Y(n.loaded?-1:1))},dependencies:[at,lt],encapsulation:2,changeDetection:0})};var ft=[v],pt=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=N({type:i});static \u0275inj=_({imports:[it,st,ct,ft]})};export{y as a,Rt as b,v as c,pt as d};
