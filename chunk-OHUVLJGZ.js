import{a as d,c as s}from"./chunk-U3R22EPV.js";import{C as f,P as l,U as x,W as h,ac as g,ga as i,hc as u,pa as c,va as n,w as m}from"./chunk-HQY7S7TU.js";var I=(()=>{let t=class t{constructor(){this.srv=n(s)}transform(o,e){return this.srv.format(o,e)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i({name:"price",type:t,pure:!0,standalone:!0});let r=t;return r})();var F=(()=>{let t=class t{constructor(){this.srv=n(s),this.isCN=n(g).startsWith("zh")}transform(o,e){let a=this.srv.mega(o,e);return a.value+(this.isCN?a.unitI18n:a.unit)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i({name:"mega",type:t,pure:!0,standalone:!0});let r=t;return r})();var N=(()=>{let t=class t{constructor(){this.srv=n(s)}transform(o,e){return this.srv.cny(o,e)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i({name:"cny",type:t,pure:!0,standalone:!0});let r=t;return r})();var S=(()=>{let t=class t{transform(o,e){return d(o,e)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i({name:"mask",type:t,pure:!0,standalone:!0});let r=t;return r})();var y=(()=>{let t=class t{transform(o,e,...a){return o.filter(E=>e(E,...a))}};t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i({name:"filter",type:t,pure:!1,standalone:!0});let r=t;return r})();var Lt=new c("WINDOW",{factory:()=>{let{defaultView:r}=n(u);if(!r)throw new Error("Window is not available");return r}});var Mt=new c("PAGE_VISIBILITY`",{factory:()=>{let r=n(u);return f(r,"visibilitychange").pipe(h(0),m(()=>!r.hidden),l(),x())}});export{Lt as a,F as b,I as c,N as d,S as e,y as f};
