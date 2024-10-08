import{f as D,g as w}from"./chunk-2R6N5AD6.js";import"./chunk-FGHMPI7V.js";import"./chunk-K7LFTOH6.js";import"./chunk-JMOWTM5A.js";import"./chunk-JKJ3YCBR.js";import{Db as e,Fb as c,Gb as x,Ja as s,Lb as f,Rb as p,Sb as a,Vc as g,Wc as M,fa as v,ha as u,hb as i,ib as o,jb as h,te as d,uc as y}from"./chunk-2WZDLBTH.js";var C=(()=>{class t{constructor(){this.now=d(new Date,"yyyy-MM-dd HH:mm:ss")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["dev-lazy-layout"]],standalone:!0,features:[f],decls:12,vars:3,consts:[[1,"p-lg"]],template:function(n,m){n&1&&(e(0,`
    `),h(1,"page-header"),e(2,`
    `),i(3,"h2"),e(4),p(5,"json"),o(),e(6,`
    `),i(7,"div",0),e(8,`
      `),h(9,"router-outlet"),e(10,`
    `),o(),e(11,`
  `)),n&2&&(s(4),c("Lazy Module, ",a(5,1,m.now),""))},dependencies:[M,w,D,y],encapsulation:2})}}return t})();var r=(()=>{class t{constructor(){this.route=v(g),this.first=d(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=d(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){this.route.params.subscribe(l=>this.id=+l.id)}_onReuseInit(){this.now=d(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.route.snapshot.url.toString())}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["dev-page"]],standalone:!0,features:[f],decls:14,vars:12,template:function(n,m){n&1&&(e(0,`
    `),i(1,"h3"),e(2,"Lazy child component"),o(),e(3,`
    `),i(4,"p"),e(5),p(6,"json"),p(7,"json"),o(),e(8,`
    `),i(9,"p"),e(10),p(11,"json"),o(),e(12),p(13,"json")),n&2&&(s(5),x("first: ",a(6,4,m.first),"\uFF0Cnow: ",a(7,6,m.now),""),s(5),c("id: ",a(11,8,m.id),""),s(2),c(`
    page: `,a(13,10,m.route.url),`
  `))},dependencies:[y],encapsulation:2})}}return t})();var _=[{path:"",component:C,children:[{path:"",pathMatch:"full",redirectTo:"p1"},{path:"p1",component:r},{path:"p2",component:r},{path:"p3",component:r},{path:"p4",component:r},{path:"p5",component:r},{path:":id/view",component:r}]}];export{_ as routes};
