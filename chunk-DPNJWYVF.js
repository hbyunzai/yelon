import{Fb as e,Hb as s,Ka as r,Mf as z,Nb as u,Nf as y,Pf as h,Rf as D,Tb as f,Ub as v,Xa as l,ea as c,jb as n,kb as i,sb as p,sg as _,wa as d,wc as x,yg as k}from"./chunk-4LVFALOC.js";var I=(()=>{let t=class t{constructor(){this.modal=d(_)}ok(){this.modal.destroy(`new time: ${+new Date}`)}cancel(){this.modal.destroy()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c({type:t,selectors:[["app-demo-dialog-modal"]],inputs:{record:"record"},standalone:!0,features:[u],decls:20,vars:7,consts:[[1,"modal-header"],[1,"modal-title"],[1,"modal-footer"],["nz-button","",3,"nzType","nzSize","click"]],template:function(o,m){o&1&&(e(0,`
    `),n(1,"div",0),e(2,`
      `),n(3,"div",1),e(4,"Custom component"),i(),e(5,`
    `),i(),e(6,`
    `),n(7,"p"),e(8),f(9,"json"),i(),e(10,`
    `),n(11,"div",2),e(12,`
      `),n(13,"button",3),p("click",function(){return m.cancel()}),e(14," Cancel "),i(),e(15,`
      `),n(16,"button",3),p("click",function(){return m.ok()}),e(17," OK "),i(),e(18,`
    `),i(),e(19,`
  `)),o&2&&(r(8),s("\u53C2\u6570\uFF1A",v(9,5,m.record),""),r(5),l("nzType","default")("nzSize","large"),r(3),l("nzType","primary")("nzSize","large"))},dependencies:[D,h,z,y,x],encapsulation:2});let a=t;return a})();var $=(()=>{let t=class t{constructor(){this.ref=d(k)}ok(){this.ref.close(`new time: ${+new Date}`),this.cancel()}cancel(){this.ref.close()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c({type:t,selectors:[["app-demo-dialog-drawer"]],inputs:{record:"record"},standalone:!0,features:[u],decls:16,vars:5,consts:[[2,"height","1000px"],["routerLink","/"],[1,"drawer-footer"],["nz-button","",3,"nzType","click"]],template:function(o,m){o&1&&(e(0,`
    `),n(1,"p",0),e(2),f(3,"json"),n(4,"a",1),e(5,"Change Router"),i()(),e(6,`
    The end!
    `),n(7,"div",2),e(8,`
      `),n(9,"button",3),p("click",function(){return m.cancel()}),e(10," Cancel "),i(),e(11,`
      `),n(12,"button",3),p("click",function(){return m.ok()}),e(13," OK "),i(),e(14,`
    `),i(),e(15,`
  `)),o&2&&(r(2),s("\u53C2\u6570\uFF1A",v(3,3,m.record),","),r(7),l("nzType","default"),r(3),l("nzType","primary"))},dependencies:[D,h,z,y,x],encapsulation:2});let a=t;return a})();export{I as a,$ as b};
