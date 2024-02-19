import{f as D,g as H}from"./chunk-3MI7E427.js";import"./chunk-CBCFIN2R.js";import"./chunk-CCKEEZ5Y.js";import"./chunk-LLT56NTX.js";import"./chunk-GT7J47QU.js";import{Fb as e,Hb as u,Ib as M,Ka as d,Nb as y,Tb as a,Ub as r,Xc as g,Yc as w,dg as l,ea as f,jb as o,kb as p,lb as v,wa as x,wc as h}from"./chunk-4LVFALOC.js";var C=(()=>{let t=class t{constructor(){this.now=l(new Date,"yyyy-MM-dd HH:mm:ss")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=f({type:t,selectors:[["dev-lazy-layout"]],standalone:!0,features:[y],decls:12,vars:3,consts:[[1,"p-lg"]],template:function(n,s){n&1&&(e(0,`
    `),v(1,"page-header"),e(2,`
    `),o(3,"h2"),e(4),a(5,"json"),p(),e(6,`
    `),o(7,"div",0),e(8,`
      `),v(9,"router-outlet"),e(10,`
    `),p(),e(11,`
  `)),n&2&&(d(4),u("Lazy Module, ",r(5,1,s.now),""))},dependencies:[w,H,D,h],encapsulation:2});let i=t;return i})();var m=(()=>{let t=class t{constructor(){this.route=x(g),this.first=l(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=l(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){this.route.params.subscribe(c=>this.id=+c.id)}_onReuseInit(){this.now=l(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.route.snapshot.url.toString())}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=f({type:t,selectors:[["dev-page"]],standalone:!0,features:[y],decls:14,vars:12,template:function(n,s){n&1&&(e(0,`
    `),o(1,"h3"),e(2,"Lazy child component"),p(),e(3,`
    `),o(4,"p"),e(5),a(6,"json"),a(7,"json"),p(),e(8,`
    `),o(9,"p"),e(10),a(11,"json"),p(),e(12),a(13,"json")),n&2&&(d(5),M("first: ",r(6,4,s.first),"\uFF0Cnow: ",r(7,6,s.now),""),d(5),u("id: ",r(11,8,s.id),""),d(2),u(`
    page: `,r(13,10,s.route.url),`
  `))},dependencies:[h],encapsulation:2});let i=t;return i})();var k=[{path:"",component:C,children:[{path:"",pathMatch:"full",redirectTo:"p1"},{path:"p1",component:m},{path:"p2",component:m},{path:"p3",component:m},{path:"p4",component:m},{path:"p5",component:m},{path:":id/view",component:m}]}];export{k as routes};
