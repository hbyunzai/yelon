import{a as xt,b as ot}from"./chunk-CNDNBKXZ.js";import{e as pt,i as P}from"./chunk-HSFJ6G7K.js";import{a as rt,b as Y}from"./chunk-Z4FMCGAN.js";import{b as _e,c as Se,d as qt}from"./chunk-3GW3FQTO.js";import"./chunk-ST6ZQTJI.js";import{g as ze,m as be,n as $t}from"./chunk-LTEB3YW2.js";import"./chunk-KMDWPB6V.js";import"./chunk-W63CQER4.js";import"./chunk-BAPU3RXT.js";import{a as xe,b as jt}from"./chunk-SEATGLPR.js";import"./chunk-LLT56NTX.js";import"./chunk-PJC7XN3O.js";import{d as Ct}from"./chunk-VIXGYNFO.js";import{b as ue,d as Vt,e as he,f as fe,g as ye,h as Lt}from"./chunk-CWLYPJ3D.js";import"./chunk-HWVCW4DA.js";import{a as at}from"./chunk-QIROIAT5.js";import"./chunk-26YFVAT6.js";import{a as M}from"./chunk-32TA2PVO.js";import"./chunk-OFVIWSG4.js";import{a as Te}from"./chunk-7QWQMMPQ.js";import"./chunk-GT7J47QU.js";import"./chunk-EEIABIPE.js";import{e as lt,g as N,q as zt,r as R,s as Q,t as j,u as B}from"./chunk-2I5LH6TG.js";import{g as ce,m as me,v as At}from"./chunk-DALIXSDU.js";import{Ac as v,Ah as Ce,Bb as H,Cb as K,Cg as it,Db as W,Dh as Qt,Eb as x,Fb as r,Gb as I,Hb as ee,I as mt,Jb as ne,K as G,Ka as s,Kb as ie,Kf as ft,La as $,Lb as re,Lf as F,M as st,Mf as de,Nb as y,Nf as se,Pf as le,Pg as yt,Rf as Ot,Tb as ut,Ub as ht,Va as m,Wa as q,Xa as d,Y as gt,Yb as k,Z as A,Za as E,a as Et,ca as w,ea as f,fa as Z,ia as T,ja as _,jb as l,k as dt,kb as p,lb as z,mb as X,nb as tt,nc as Bt,oa as V,ob as S,oc as et,pa as J,pb as D,pc as oe,pe as Gt,qc as ae,s as U,sb as g,t as O,tc as nt,tg as pe,ub as c,v as te,va as L,w as b,yh as ge}from"./chunk-4LVFALOC.js";function ke(n,i,a,t){let e={properties:{search:{title:"search",type:"string",ui:{i18n:"input.search",widget:"string"}}}};return n&&(e.properties=Object.defineProperty(e.properties,"includeCLass",{value:{title:"includeClass",type:"boolean",enum:[{label:"true",value:!0},{label:"false",value:!1}],default:!0,ui:{i18n:"radio.class",widget:"radio"}},configurable:!0,enumerable:!0,writable:!0})),i&&(e.properties=Object.defineProperty(e.properties,"includeClassHistory",{value:{title:"includeClassHistory",type:"boolean",enum:[{label:"true",value:!0},{label:"false",value:!1}],default:!0,ui:{i18n:"radio.history",widget:"radio"}},configurable:!0,enumerable:!0,writable:!0})),a&&(e.properties=Object.defineProperty(e.properties,"gradeId",{value:{title:"gradeId",type:"string",ui:{i18n:"grade",widget:"select",asyncData:()=>t||U([])}},configurable:!0,enumerable:!0,writable:!0})),e}var ve=(()=>{let i=class i{constructor(t){this.http=t}tree(t,e,o,u){let h=Object.create({});return t&&(h.includeClass=!0),e&&(h.includeHisClass=!0),o&&(h.deptType=o.join(",")),u&&(h.gradeId=u),this.http.get("/auth/baseDepartMent/tree",h).pipe(b(ct=>ct.data),G(ct=>O(ct)))}};i.\u0275fac=function(e){return new(e||i)(L(it))},i.\u0275prov=V({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var Ye=(()=>{let i=class i{constructor(t){this.http=t}grades(){return this.http.get("/auth/gradeYear/queryListForPage").pipe(b(t=>t.data))}};i.\u0275fac=function(e){return new(e||i)(L(it))},i.\u0275prov=V({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var dn=["form"];function sn(n,i){if(n&1&&(X(0),r(1,`
        `),l(2,"nz-card"),r(3,`
          `),S(4,6),r(5,`
        `),p(),r(6,`
      `),tt()),n&2){c();let a=x(16);s(4),d("ngTemplateOutlet",a)}}function ln(n,i){if(n&1&&(X(0),r(1,`
        `),S(2,6),r(3,`
      `),tt()),n&2){c();let a=x(16);s(2),d("ngTemplateOutlet",a)}}function pn(n,i){if(n&1){let a=D();l(0,"nz-tree",8),g("nzClick",function(e){T(a);let o=c(2);return _(o.activeNode(e))}),p()}if(n&2){let a=c(2),t=x(28),e=x(21);d("nzExpandedKeys",a.state.expandKeys)("nzData",a.nodes)("nzShowLine",!0)("nzMultiple",a.isMultiple)("nzExpandedIcon",t)("nzBlockNode",!0)("nzHideUnMatched",!0)("nzTreeTemplate",e)}}function cn(n,i){n&1&&z(0,"nz-empty")}function mn(n,i){if(n&1&&(r(0,`
      `),S(1,6),r(2,`
      `),m(3,pn,1,8,"nz-tree",7),r(4,`
      `),m(5,cn,1,0,"nz-empty",1),r(6,`
    `)),n&2){let a=c(),t=x(25);s(),d("ngTemplateOutlet",t),s(2),d("ngIf",a.nodes.length>0),s(2),d("ngIf",a.nodes.length===0)}}function un(n,i){if(n&1){let a=D();l(0,"span",10),r(1,`
        `),l(2,"i",11),g("click",function(){T(a);let e=c().$implicit,o=c();return _(o.open(e))}),p(),r(3,`
        `),l(4,"span",12),r(5),p(),r(6,`
      `),p()}if(n&2){let a=c().$implicit;d("title",a.title),s(2),d("nzType",a.isExpanded?"minus-square":"plus-square"),s(3),I(a.title)}}function hn(n,i){if(n&1&&(l(0,"span",10),r(1,`
        `),z(2,"span",13),r(3,`
        `),l(4,"span",12),r(5),p(),r(6,`
      `),p()),n&2){let a=c().$implicit;d("title",a.title),s(5),I(a.title)}}function fn(n,i){if(n&1&&(r(0,`
      `),m(1,un,7,3,"span",9),r(2,`
      `),m(3,hn,7,2,"span",9),r(4,`
    `)),n&2){let a=i.$implicit;s(),d("ngIf",!a.isLeaf),s(2),d("ngIf",a.isLeaf)}}function yn(n,i){if(n&1&&(r(0,`
      `),z(1,"sf",14,15),r(3,`
    `)),n&2){let a=c();s(),d("button","none")("schema",a.state.schema)}}function zn(n,i){}var bt=(()=>{let i=class i{get data(){return this.props&&this.props.data?this.props.data:this.state.data}set data(t){this.props&&this.props.data?this.props.data=t:this.state.data=t}get nodes(){return this.data}get isMultiple(){return this.props?!!this.props.multiple:!1}get includeClass(){return this.props?!!this.props.class:!1}get includeClassHistory(){return this.props?!!this.props.historyClass:!1}get includeGrade(){return this.props?!!this.props.grade:!1}get deptTypes(){return this.props?this.props.types||[]:[]}get isWrapped(){return this.props?!!this.props.wrap:!1}get isExpanded(){return this.props?!!this.props.expand:!1}get gradeId(){return this.props?.gradeId}constructor(t,e){this.deptTreeService=t,this.gradeService=e,this.onQueryComplete=new w,this.onSelect=new w,this.$destroy=new dt,this.state={loading:!1,schema:{properties:{}},data:[],dataBackup:[],expandKeys:[]}}ngOnInit(){this.props?.data?(this.state.dataBackup=this.data,this.mapDeptTree(this.data)):this.query()}ngAfterViewInit(){this.hookFormChange(),this.setupSchema()}setupSchema(){let t=this.gradeService.grades().pipe(A(this.$destroy),b(e=>e.map(o=>({label:o.name,value:o.openId}))));this.sf.refreshSchema(ke(this.includeClass,this.includeClassHistory,this.includeGrade,t))}hookFormChange(){this.sf.formValueChange.pipe(st(1e3),b(t=>(this.load(),t)),gt(t=>{let{value:{search:e,includeClass:o,includeClassHistory:u,gradeId:h}}=t;return this.props&&this.props.data?mt(U(e),U(this.state.dataBackup)):mt(U(e),this.deptTreeService.tree(!!o,!!u,this.deptTypes,h))}),b(([t,e])=>{this.state.expandKeys=[],t&&t.trim()!==""&&(e=this.recursionSearch(t,e),this.onQueryComplete.emit(e)),this.mapDeptTree(e),this.data=e}),G(t=>(this.unload(),O(t)))).subscribe(()=>{this.unload()})}mapDeptTree(t){t&&t.length&&t.length>0&&t.forEach(e=>{this.isExpanded&&!this.state.expandKeys.includes(e.key)&&this.state.expandKeys.push(e.key),e.isExpanded=this.isExpanded,e.isLeaf=e.children===null||e.children.length===0,this.mapDeptTree(e.children)})}recursionSearch(t,e){let o=[],u=h=>{if(h.title.includes(t)&&o.push(h),h.children&&h.children.length>0)for(let ct of h.children)u(ct)};for(let h of e)u(h);return o}activeNode(t){if(t.node)this.onSelect.emit([t.node.origin]);else if(t.nodes){let e=t.nodes.map(o=>o.origin);this.onSelect.emit(e)}}query(){this.load(),this.deptTreeService.tree(this.includeClass,this.includeClassHistory,this.deptTypes,this.gradeId).pipe(A(this.$destroy),b(t=>{this.state.expandKeys=[],this.onQueryComplete.emit(t),this.mapDeptTree(t),this.data=t}),G(t=>(this.unload(),O(t)))).subscribe(()=>{this.unload()})}load(){this.state.loading=!0}unload(){this.state.loading=!1}open(t){if(t instanceof Ct)t.isExpanded=!t.isExpanded;else{let e=t.node;e&&(e.isExpanded=!e.isExpanded)}}ngOnDestroy(){this.$destroy.complete()}};i.\u0275fac=function(e){return new(e||i)($(ve),$(Ye))},i.\u0275cmp=f({type:i,selectors:[["yunzai-dept-tree"]],viewQuery:function(e,o){if(e&1&&H(dn,5),e&2){let u;K(u=W())&&(o.sf=u.first)}},inputs:{props:"props"},outputs:{onQueryComplete:"onQueryComplete",onSelect:"onSelect"},standalone:!0,features:[y],decls:30,vars:3,consts:[[3,"nzSpinning"],[4,"ngIf"],["content",""],["treeTemplate",""],["deptForm",""],["blank",""],[3,"ngTemplateOutlet"],[3,"nzExpandedKeys","nzData","nzShowLine","nzMultiple","nzExpandedIcon","nzBlockNode","nzHideUnMatched","nzTreeTemplate","nzClick",4,"ngIf"],[3,"nzExpandedKeys","nzData","nzShowLine","nzMultiple","nzExpandedIcon","nzBlockNode","nzHideUnMatched","nzTreeTemplate","nzClick"],[3,"title",4,"ngIf"],[3,"title"],["nz-icon","","nzTheme","twotone",3,"nzType","click"],[1,"leaf-name"],["nz-icon","","nzType","file","nzTheme","twotone"],["layout","inline",3,"button","schema"],["form",""]],template:function(e,o){e&1&&(r(0,`
    `),r(1,`
    `),l(2,"nz-spin",0),r(3,`
      `),r(4,`
      `),m(5,sn,7,1,"ng-container",1),r(6,`
      `),r(7,`

      `),r(8,`
      `),m(9,ln,4,1,"ng-container",1),r(10,`
      `),r(11,`
    `),p(),r(12,`
    `),r(13,`

    `),r(14,`
    `),m(15,mn,7,3,"ng-template",null,2,k),r(17,`
    `),r(18,`

    `),r(19,`
    `),m(20,fn,5,2,"ng-template",null,3,k),r(22,`
    `),r(23,`

    `),m(24,yn,4,2,"ng-template",null,4,k),r(26,`
    `),m(27,zn,0,0,"ng-template",null,5,k),r(29,`
  `)),e&2&&(s(2),d("nzSpinning",o.state.loading),s(3),d("ngIf",o.isWrapped),s(4),d("ngIf",!o.isWrapped))},dependencies:[v,et,nt,F,ft,N,lt,R,zt,ot,xt,Y,rt,P,pt],encapsulation:2});let n=i;return n})();var Wt=function(n){return n[n.DEPT=2]="DEPT",n.CLASS="class",n}(Wt||{});var gn=[bt],Tt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=Z({type:i}),i.\u0275inj=J({imports:[v,F,N,R,ot,Y,P,gn]});let n=i;return n})();var we={properties:{search:{title:"search",type:"string",ui:{i18n:"input.search",widget:"string"}}}};var Rt=function(n){return n[n.BUILDING=0]="BUILDING",n[n.BUILDING_FLOOR=1]="BUILDING_FLOOR",n[n.BUILDING_FLOORS_ROOMS=2]="BUILDING_FLOORS_ROOMS",n}(Rt||{});var Ne=(()=>{let i=class i{constructor(t){this.http=t}tree(t={isPower:!1,treeType:Rt.BUILDING_FLOORS_ROOMS}){return this.http.post("/auth/dorm/tree",t).pipe(b(e=>e.data))}};i.\u0275fac=function(e){return new(e||i)(L(it))},i.\u0275prov=V({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var xn=["form"];function bn(n,i){if(n&1&&(X(0),r(1,`
        `),l(2,"nz-card"),r(3,`
          `),S(4,6),r(5,`
        `),p(),r(6,`
      `),tt()),n&2){c();let a=x(16);s(4),d("ngTemplateOutlet",a)}}function Tn(n,i){if(n&1&&(X(0),r(1,`
        `),S(2,6),r(3,`
      `),tt()),n&2){c();let a=x(16);s(2),d("ngTemplateOutlet",a)}}function _n(n,i){if(n&1){let a=D();l(0,"nz-tree",8),g("nzClick",function(e){T(a);let o=c(2);return _(o.activeNode(e))}),p()}if(n&2){let a=c(2),t=x(28),e=x(21);d("nzExpandedKeys",a.state.expandKeys)("nzData",a.nodes)("nzShowLine",!0)("nzMultiple",a.isMultiple)("nzExpandedIcon",t)("nzBlockNode",!0)("nzHideUnMatched",!0)("nzTreeTemplate",e)}}function Sn(n,i){n&1&&z(0,"nz-empty")}function kn(n,i){if(n&1&&(r(0,`
      `),S(1,6),r(2,`
      `),m(3,_n,1,8,"nz-tree",7),r(4,`
      `),m(5,Sn,1,0,"nz-empty",1),r(6,`
    `)),n&2){let a=c(),t=x(25);s(),d("ngTemplateOutlet",t),s(2),d("ngIf",a.nodes.length>0),s(2),d("ngIf",a.nodes.length===0)}}function vn(n,i){if(n&1){let a=D();l(0,"span",10),r(1,`
        `),l(2,"i",11),g("click",function(){T(a);let e=c().$implicit,o=c();return _(o.open(e))}),p(),r(3,`
        `),l(4,"span",12),r(5),p(),r(6,`
      `),p()}if(n&2){let a=c().$implicit;d("title",a.title),s(2),d("nzType",a.isExpanded?"minus-square":"plus-square"),s(3),I(a.title)}}function Yn(n,i){if(n&1&&(l(0,"span",10),r(1,`
        `),z(2,"span",13),r(3,`
        `),l(4,"span",12),r(5),p(),r(6,`
      `),p()),n&2){let a=c().$implicit;d("title",a.title),s(5),I(a.title)}}function Dn(n,i){if(n&1&&(r(0,`
      `),m(1,vn,7,3,"span",9),r(2,`
      `),m(3,Yn,7,2,"span",9),r(4,`
    `)),n&2){let a=i.$implicit;s(),d("ngIf",!a.isLeaf),s(2),d("ngIf",a.isLeaf)}}function In(n,i){if(n&1&&(r(0,`
      `),z(1,"sf",14,15),r(3,`
    `)),n&2){let a=c();s(),d("button","none")("schema",a.state.schema)}}function wn(n,i){}var _t=(()=>{let i=class i{get data(){return this.props&&this.props.data?this.props.data:this.state.data}set data(t){this.props&&this.props.data?this.props.data=t:this.state.data=t}get nodes(){return this.data}get isMultiple(){return this.props?!!this.props.multiple:!1}get param(){return this.props&&this.props.param?this.props.param:{isPower:!1,treeType:Rt.BUILDING_FLOORS_ROOMS}}get isWrapped(){return this.props?!!this.props.wrap:!1}get isExpanded(){return this.props?!!this.props.expand:!1}constructor(t){this.dormitoryService=t,this.onQueryComplete=new w,this.onSelect=new w,this.$destroy=new dt,this.state={loading:!1,schema:we,data:[],dataBackup:[],expandKeys:[]}}ngOnInit(){this.props?.data?(this.state.dataBackup=this.data,this.mapDormTree(this.data)):this.query(this.param)}ngAfterViewInit(){this.hookFormChange()}hookFormChange(){this.sf.formValueChange.pipe(A(this.$destroy),st(1e3),b(t=>(this.load(),t)),gt(t=>{let{value:{search:e}}=t;return this.props&&this.props.data?mt(U(e),U(this.state.dataBackup)):mt(U(e),this.dormitoryService.tree(this.param))}),b(([t,e])=>{this.state.expandKeys=[],t&&t.trim()!==""&&(e=this.recursionSearch(t,e),this.onQueryComplete.emit(e)),this.mapDormTree(e),this.data=e}),G(t=>(this.unload(),O(t)))).subscribe(()=>{this.unload()})}recursionSearch(t,e){let o=[],u=h=>{if(h.title.includes(t)&&o.push(h),h.children&&h.children.length>0)for(let ct of h.children)u(ct)};for(let h of e)u(h);return o}query(t){this.load(),this.dormitoryService.tree(t).pipe(A(this.$destroy),b(e=>{this.state.expandKeys=[],this.onQueryComplete.emit(e),this.mapDormTree(e),this.data=e}),G(e=>(this.unload(),O(e)))).subscribe(()=>{this.unload()})}load(){this.state.loading=!0}unload(){this.state.loading=!1}mapDormTree(t){t&&t.length&&t.length>0&&t.forEach(e=>{this.isExpanded&&!this.state.expandKeys.includes(e.key)&&this.state.expandKeys.push(e.key),e.isExpanded=this.isExpanded,e.isLeaf=e.children===null||e.children.length===0,this.mapDormTree(e.children)})}activeNode(t){if(t.node)this.onSelect.emit([t.node.origin]);else if(t.nodes){let e=t.nodes.map(o=>o.origin);this.onSelect.emit(e)}}open(t){if(t instanceof Ct)t.isExpanded=!t.isExpanded;else{let e=t.node;e&&(e.isExpanded=!e.isExpanded)}}ngOnDestroy(){this.$destroy.complete()}};i.\u0275fac=function(e){return new(e||i)($(Ne))},i.\u0275cmp=f({type:i,selectors:[["yunzai-dormitory-tree"]],viewQuery:function(e,o){if(e&1&&H(xn,5),e&2){let u;K(u=W())&&(o.sf=u.first)}},inputs:{props:"props"},outputs:{onQueryComplete:"onQueryComplete",onSelect:"onSelect"},standalone:!0,features:[y],decls:30,vars:3,consts:[[3,"nzSpinning"],[4,"ngIf"],["content",""],["treeTemplate",""],["dormitoryForm",""],["blank",""],[3,"ngTemplateOutlet"],[3,"nzExpandedKeys","nzData","nzShowLine","nzMultiple","nzExpandedIcon","nzBlockNode","nzHideUnMatched","nzTreeTemplate","nzClick",4,"ngIf"],[3,"nzExpandedKeys","nzData","nzShowLine","nzMultiple","nzExpandedIcon","nzBlockNode","nzHideUnMatched","nzTreeTemplate","nzClick"],[3,"title",4,"ngIf"],[3,"title"],["nz-icon","","nzTheme","twotone",3,"nzType","click"],[1,"leaf-name"],["nz-icon","","nzType","file","nzTheme","twotone"],["layout","inline",3,"button","schema"],["form",""]],template:function(e,o){e&1&&(r(0,`
    `),r(1,`
    `),l(2,"nz-spin",0),r(3,`
      `),r(4,`
      `),m(5,bn,7,1,"ng-container",1),r(6,`
      `),r(7,`

      `),r(8,`
      `),m(9,Tn,4,1,"ng-container",1),r(10,`
      `),r(11,`
    `),p(),r(12,`
    `),r(13,`

    `),r(14,`
    `),m(15,kn,7,3,"ng-template",null,2,k),r(17,`
    `),r(18,`

    `),r(19,`
    `),m(20,Dn,5,2,"ng-template",null,3,k),r(22,`
    `),r(23,`

    `),m(24,In,4,2,"ng-template",null,4,k),r(26,`
    `),m(27,wn,0,0,"ng-template",null,5,k),r(29,`
  `)),e&2&&(s(2),d("nzSpinning",o.state.loading),s(3),d("ngIf",o.isWrapped),s(4),d("ngIf",!o.isWrapped))},dependencies:[v,et,nt,P,pt,F,ft,N,lt,ot,xt,R,zt,Y,rt],encapsulation:2});let n=i;return n})();var Nn=[_t],St=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=Z({type:i}),i.\u0275inj=J({imports:[v,P,F,N,ot,R,Y,Nn]});let n=i;return n})();var Ee={properties:{search:{title:"name",type:"string",ui:{i18n:"input.name",widget:"string"}}}};var Me=(()=>{let i=class i{constructor(t){this.http=t}groups(){return this.http.post("/contact/appcontact/findGroup",{}).pipe(b(t=>t.data))}};i.\u0275fac=function(e){return new(e||i)(L(it))},i.\u0275prov=V({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var En=["form"];function Mn(n,i){if(n&1&&(X(0),r(1,`
        `),l(2,"nz-card"),r(3,`
          `),S(4,4),r(5,`
        `),p(),r(6,`
      `),tt()),n&2){c();let a=x(9);s(4),d("ngTemplateOutlet",a)}}function Un(n,i){if(n&1&&(X(0),r(1,`
        `),S(2,4),r(3,`
      `),tt()),n&2){c();let a=x(9);s(2),d("ngTemplateOutlet",a)}}function Fn(n,i){if(n&1){let a=D();l(0,"nz-list-item",8),g("click",function(){let o=T(a).$implicit,u=c(3);return _(u.onItemClick(o))}),r(1),p()}if(n&2){let a=i.$implicit;s(),I(a.name)}}function Rn(n,i){if(n&1&&(l(0,"nz-list",6),r(1,`
        `),m(2,Fn,2,1,"nz-list-item",7),r(3,`
      `),p()),n&2){let a=c(2);s(2),d("ngForOf",a.data)}}function Bn(n,i){n&1&&z(0,"nz-empty")}function Gn(n,i){if(n&1&&(r(0,`
      `),S(1,4),r(2,`
      `),m(3,Rn,4,1,"nz-list",5),r(4,`
      `),m(5,Bn,1,0,"nz-empty",1),r(6,`
    `)),n&2){let a=c(),t=x(12);s(),d("ngTemplateOutlet",t),s(2),d("ngIf",a.data.length>0),s(2),d("ngIf",a.data.length===0)}}function On(n,i){if(n&1&&(r(0,`
      `),z(1,"sf",9,10),r(3,`
    `)),n&2){let a=c();s(),d("button","none")("schema",a.state.schema)}}var kt=(()=>{let i=class i{get isWrapped(){return!!this.props?.wrap}get data(){return this.props&&this.props.data?this.props.data:this.state.data}constructor(t){this.friendsService=t,this.onQueryComplete=new w,this.onSelect=new w,this.$destroy=new dt,this.state={loading:!1,schema:Ee,data:[],dataBackup:[]}}ngOnInit(){this.props?.data?(this.state.data=this.props.data,this.state.dataBackup=this.props.data):this.query()}ngAfterViewInit(){this.hookFormChange()}hookFormChange(){this.sf.formValueChange.pipe(A(this.$destroy),st(1e3)).subscribe(t=>{let{value:{search:e}}=t;e?this.state.data=this.state.dataBackup.filter(o=>o.name.includes(e)):this.state.data=this.state.dataBackup})}onItemClick(t){this.onSelect.emit(t)}query(){this.state.loading=!0,this.friendsService.groups().pipe(A(this.$destroy),G(t=>(this.state.loading=!1,O(t))),b(t=>{this.state.data=t,this.state.dataBackup=t,this.onQueryComplete.emit(this.state.data),this.state.loading=!1})).subscribe()}ngOnDestroy(){this.$destroy.complete()}};i.\u0275fac=function(e){return new(e||i)($(Me))},i.\u0275cmp=f({type:i,selectors:[["yunzai-friend-group"]],viewQuery:function(e,o){if(e&1&&H(En,5),e&2){let u;K(u=W())&&(o.sf=u.first)}},inputs:{props:"props"},outputs:{onQueryComplete:"onQueryComplete",onSelect:"onSelect"},standalone:!0,features:[y],decls:14,vars:3,consts:[[3,"nzSpinning"],[4,"ngIf"],["content",""],["friendForm",""],[3,"ngTemplateOutlet"],["nzSize","small",4,"ngIf"],["nzSize","small"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["layout","inline",3,"button","schema"],["form",""]],template:function(e,o){e&1&&(r(0,`
    `),l(1,"nz-spin",0),r(2,`
      `),m(3,Mn,7,1,"ng-container",1),r(4,`

      `),m(5,Un,4,1,"ng-container",1),r(6,`
    `),p(),r(7,`

    `),m(8,Gn,7,3,"ng-template",null,2,k),r(10,`

    `),m(11,On,4,2,"ng-template",null,3,k),r(13,`
  `)),e&2&&(s(),d("nzSpinning",o.state.loading),s(2),d("ngIf",o.isWrapped),s(2),d("ngIf",!o.isWrapped))},dependencies:[P,pt,v,Bt,et,nt,qt,_e,Se,Y,rt,R,zt,N,lt],encapsulation:2});let n=i;return n})();var An=[kt],vt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=Z({type:i}),i.\u0275inj=J({imports:[P,v,qt,Y,R,N,An]});let n=i;return n})();var Fe=(()=>{let i=class i{constructor(t){this.http=t}tree(t){return this.http.post("/auth/baseRole/findGroupRole",{roleGroupCode:t}).pipe(b(e=>e.data))}};i.\u0275fac=function(e){return new(e||i)(L(it))},i.\u0275prov=V({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var Re={properties:{search:{title:"search",type:"string",ui:{i18n:"input.search",widget:"string"}}}};var Ln=["form"];function Qn(n,i){if(n&1&&(X(0),r(1,`
        `),l(2,"nz-card"),r(3,`
          `),S(4,6),r(5,`
        `),p(),r(6,`
      `),tt()),n&2){c();let a=x(16);s(4),d("ngTemplateOutlet",a)}}function jn(n,i){if(n&1&&(X(0),r(1,`
        `),S(2,6),r(3,`
      `),tt()),n&2){c();let a=x(16);s(2),d("ngTemplateOutlet",a)}}function $n(n,i){if(n&1){let a=D();l(0,"nz-tree",8),g("nzClick",function(e){T(a);let o=c(2);return _(o.activeNode(e))}),p()}if(n&2){let a=c(2),t=x(28),e=x(21);d("nzExpandedKeys",a.state.expandKeys)("nzData",a.nodes)("nzShowLine",!0)("nzMultiple",a.isMultiple)("nzExpandedIcon",t)("nzBlockNode",!0)("nzHideUnMatched",!0)("nzTreeTemplate",e)}}function qn(n,i){n&1&&z(0,"nz-empty")}function Hn(n,i){if(n&1&&(r(0,`
      `),S(1,6),r(2,`
      `),m(3,$n,1,8,"nz-tree",7),r(4,`
      `),m(5,qn,1,0,"nz-empty",1),r(6,`
    `)),n&2){let a=c(),t=x(25);s(),d("ngTemplateOutlet",t),s(2),d("ngIf",a.nodes.length>0),s(2),d("ngIf",a.nodes.length===0)}}function Kn(n,i){if(n&1){let a=D();l(0,"span",10),r(1,`
        `),l(2,"i",11),g("click",function(){T(a);let e=c().$implicit,o=c();return _(o.open(e))}),p(),r(3,`
        `),l(4,"span",12),r(5),p(),r(6,`
      `),p()}if(n&2){let a=c().$implicit;d("title",a.title),s(2),d("nzType",a.isExpanded?"minus-square":"plus-square"),s(3),I(a.title)}}function Wn(n,i){if(n&1&&(l(0,"span",10),r(1,`
        `),z(2,"span",13),r(3,`
        `),l(4,"span",12),r(5),p(),r(6,`
      `),p()),n&2){let a=c().$implicit;d("title",a.title),s(5),I(a.title)}}function Zn(n,i){if(n&1&&(r(0,`
      `),m(1,Kn,7,3,"span",9),r(2,`
      `),m(3,Wn,7,2,"span",9),r(4,`
    `)),n&2){let a=i.$implicit;s(),d("ngIf",!a.isLeaf),s(2),d("ngIf",a.isLeaf)}}function Jn(n,i){if(n&1&&(r(0,`
      `),z(1,"sf",14,15),r(3,`
    `)),n&2){let a=c();s(),d("button","none")("schema",a.state.schema)}}function Xn(n,i){}var Yt=(()=>{let i=class i{get data(){return this.props&&this.props.data?this.props.data:this.state.data}set data(t){this.props&&this.props.data?this.props.data=t:this.state.data=t}get nodes(){return this.data}get isMultiple(){return this.props?!!this.props.multiple:!1}get roleGroupCode(){if(this.props&&this.props.roleGroupCode)return this.props.roleGroupCode}get isWrapped(){return this.props?!!this.props.wrap:!1}get isExpanded(){return this.props?!!this.props.expand:!1}constructor(t){this.roleTreeService=t,this.onQueryComplete=new w,this.onSelect=new w,this.$destroy=new dt,this.state={loading:!1,schema:Re,data:[],dataBackup:[],expandKeys:[]}}ngOnInit(){this.props?.data?(this.state.dataBackup=this.data,this.mapRoleTree(this.data)):this.query(this.roleGroupCode)}ngAfterViewInit(){this.hookFormChange()}hookFormChange(){this.sf.formValueChange.pipe(A(this.$destroy),st(1e3),b(t=>(this.load(),t)),gt(t=>{let{value:{search:e}}=t;return this.props&&this.props.data?mt(U(e),U(this.state.dataBackup)):mt(U(e),this.roleTreeService.tree(this.roleGroupCode))}),b(([t,e])=>{this.state.expandKeys=[],t&&t.trim()!==""&&(e=this.recursionSearch(t,e),this.onQueryComplete.emit(e)),this.mapRoleTree(e),this.data=e}),G(t=>(this.unload(),t))).subscribe(()=>{this.unload()})}recursionSearch(t,e){let o=[],u=h=>{if(h.title.includes(t)&&o.push(h),h.children&&h.children.length>0)for(let ct of h.children)u(ct)};for(let h of e)u(h);return o}query(t){this.load(),this.roleTreeService.tree(t).pipe(A(this.$destroy),b(e=>{this.state.expandKeys=[],this.onQueryComplete.emit(e),this.mapRoleTree(e),this.data=e}),G(e=>(this.unload(),O(e)))).subscribe(()=>{this.unload()})}load(){this.state.loading=!0}unload(){this.state.loading=!1}mapRoleTree(t){t&&t.length&&t.length>0&&t.forEach(e=>{this.isExpanded&&!this.state.expandKeys.includes(e.key)&&this.state.expandKeys.push(e.key),e.isExpanded=this.isExpanded,e.isLeaf=e.children===null||e.children.length===0,this.mapRoleTree(e.children)})}activeNode(t){if(t.node)this.onSelect.emit([t.node.origin]);else if(t.nodes){let e=t.nodes.map(o=>o.origin);this.onSelect.emit(e)}}open(t){if(t instanceof Ct)t.isExpanded=!t.isExpanded;else{let e=t.node;e&&(e.isExpanded=!e.isExpanded)}}ngOnDestroy(){this.$destroy.complete()}};i.\u0275fac=function(e){return new(e||i)($(Fe))},i.\u0275cmp=f({type:i,selectors:[["yunzai-role-tree"]],viewQuery:function(e,o){if(e&1&&H(Ln,5),e&2){let u;K(u=W())&&(o.sf=u.first)}},inputs:{props:"props"},outputs:{onQueryComplete:"onQueryComplete",onSelect:"onSelect"},standalone:!0,features:[y],decls:30,vars:3,consts:[[3,"nzSpinning"],[4,"ngIf"],["content",""],["treeTemplate",""],["roleForm",""],["blank",""],[3,"ngTemplateOutlet"],[3,"nzExpandedKeys","nzData","nzShowLine","nzMultiple","nzExpandedIcon","nzBlockNode","nzHideUnMatched","nzTreeTemplate","nzClick",4,"ngIf"],[3,"nzExpandedKeys","nzData","nzShowLine","nzMultiple","nzExpandedIcon","nzBlockNode","nzHideUnMatched","nzTreeTemplate","nzClick"],[3,"title",4,"ngIf"],[3,"title"],["nz-icon","","nzTheme","twotone",3,"nzType","click"],[1,"leaf-name"],["nz-icon","","nzType","file","nzTheme","twotone"],["layout","inline",3,"button","schema"],["form",""]],template:function(e,o){e&1&&(r(0,`
    `),r(1,`
    `),l(2,"nz-spin",0),r(3,`
      `),r(4,`
      `),m(5,Qn,7,1,"ng-container",1),r(6,`
      `),r(7,`

      `),r(8,`
      `),m(9,jn,4,1,"ng-container",1),r(10,`
      `),r(11,`
    `),p(),r(12,`
    `),r(13,`

    `),r(14,`
    `),m(15,Hn,7,3,"ng-template",null,2,k),r(17,`
    `),r(18,`

    `),r(19,`
    `),m(20,Zn,5,2,"ng-template",null,3,k),r(22,`
    `),r(23,`

    `),m(24,Jn,4,2,"ng-template",null,4,k),r(26,`
    `),m(27,Xn,0,0,"ng-template",null,5,k),r(29,`
  `)),e&2&&(s(2),d("nzSpinning",o.state.loading),s(3),d("ngIf",o.isWrapped),s(4),d("ngIf",!o.isWrapped))},dependencies:[v,et,nt,R,zt,P,pt,F,ft,N,lt,ot,xt,Y,rt],encapsulation:2});let n=i;return n})();var ti=[Yt],Dt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=Z({type:i}),i.\u0275inj=J({imports:[v,R,P,F,N,ot,Y,ti]});let n=i;return n})();var Ge=(()=>{let i=class i{constructor(t){this.http=t}users(t){return this.http.post("/auth/baseUser/queryListForPage",t).pipe(b(e=>e),G(e=>O(e)))}usersByIds(t){return this.http.post("/auth/baseUser/users",{userIds:t}).pipe(b(e=>e.data))}};i.\u0275fac=function(e){return new(e||i)(L(it))},i.\u0275prov=V({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var ii=["st"],ri=["sf"];function oi(n,i){if(n&1&&(l(0,"nz-card"),r(1,`
      `),S(2,5),r(3,`
    `),p()),n&2){c();let a=x(6);s(2),d("ngTemplateOutlet",a)}}function ai(n,i){if(n&1&&S(0,5),n&2){c();let a=x(6);d("ngTemplateOutlet",a)}}function di(n,i){if(n&1){let a=D();l(0,"label",14),g("change",function(e){T(a);let o=c(3);return _(o.onCheckedAll(e))}),p()}if(n&2){let a=c(3);d("nzChecked",a.isAllChecked())}}function si(n,i){if(n&1&&(r(0,`
            `),m(1,di,1,1,"label",13),r(2,`
          `)),n&2){let a=c(2);s(),d("ngIf",!a.disableCheck)}}function li(n,i){if(n&1){let a=D();l(0,"label",14),g("change",function(){T(a);let e=c().$implicit,o=c(2);return _(o.onCheckedItem(e))}),p()}if(n&2){let a=c().$implicit,t=c(2);d("nzChecked",t.isChecked(a))}}function pi(n,i){if(n&1&&(r(0,`
            `),m(1,li,1,1,"label",13),r(2,`
          `)),n&2){let a=c(2);s(),d("ngIf",!a.disableCheck)}}function ci(n,i){if(n&1&&r(0),n&2){let a=i.$implicit,t=c(2);I(t.renderRoles(a.roles))}}function mi(n,i){if(n&1&&S(0,5),n&2){c(2);let a=x(9);d("ngTemplateOutlet",a)}}function ui(n,i){if(n&1&&(r(0,`
      `),l(1,"div",6),r(2,`
        `),S(3,5),r(4,`
        `),l(5,"st",7,8),r(7,`
          `),m(8,si,3,1,"ng-template",9),r(9,`
          `),m(10,pi,3,1,"ng-template",10),r(11,`
          `),m(12,ci,1,1,"ng-template",11),r(13,`
        `),p(),r(14,`
      `),p(),r(15,`
      `),l(16,"div",12),r(17,`
        `),m(18,mi,1,1,"ng-container",1),r(19,`
      `),p(),r(20,`
    `)),n&2){let a=c(),t=x(12);s(3),d("ngTemplateOutlet",t),s(2),d("scroll",a.scroll)("size","small")("bordered",!0),s(13),d("ngIf",a.list)}}function hi(n,i){if(n&1){let a=D();l(0,"div"),r(1,`
          `),l(2,"a",20),r(3),p(),r(4,`
          `),z(5,"nz-divider",21),r(6,`
          `),l(7,"a",22),g("click",function(){T(a);let e=c(2);return _(e.unCheckAll())}),r(8),ut(9,"i18n"),p(),r(10,`
        `),p()}if(n&2){let a=c(2);s(3),ee("",a.checked.length," "),s(5),I(ht(9,2,"table-user.clear"))}}function fi(n,i){n&1&&z(0,"nz-empty",23)}function yi(n,i){if(n&1){let a=D();l(0,"li",24),r(1,`
            `),l(2,"div",25),r(3),p(),r(4,`
            `),l(5,"span",26),g("click",function(){let o=T(a).$implicit,u=c(2);return _(u.unCheck(o))}),r(6,`
              `),z(7,"i",27),r(8,`
            `),p(),r(9,`
          `),p()}if(n&2){let a=i.$implicit;s(3),I((a==null?null:a.realName)||"--")}}function zi(n,i){if(n&1&&(r(0,`
      `),l(1,"div",15),r(2,`
        `),l(3,"h3"),r(4),ut(5,"i18n"),p(),r(6,`
        `),m(7,hi,11,4,"div",0),r(8,`
      `),p(),r(9,`

      `),l(10,"div",16),r(11,`
        `),m(12,fi,1,0,"nz-empty",17),r(13,`
        `),l(14,"ul",18),r(15,`
          `),m(16,yi,10,1,"li",19),r(17,`
        `),p(),r(18,`
      `),p(),r(19,`
    `)),n&2){let a=c();s(4),I(ht(5,4,"table-user.checked")),s(3),d("ngIf",a.hasCheck),s(5),d("ngIf",!a.hasCheck),s(4),d("ngForOf",a.checked)}}function gi(n,i){if(n&1){let a=D();r(0,`
      `),z(1,"sf",28,29),r(3,`
      `),l(4,"button",30),g("click",function(){T(a);let e=c();return _(e.onReset())}),r(5),ut(6,"i18n"),p(),r(7,`
    `)}if(n&2){let a=c();s(),d("schema",a.schema),s(4),I(ht(6,2,"reset"))}}var It=(()=>{let i=class i{get wrapped(){return!!this.props?.wrap}get schema(){return this.state.schema}get disableCheck(){return!!this.props?.check?.disable}get pageCheck(){return!!this.props?.check?.pageCheck}get hasCheck(){return this.state.check.data.length>0}get list(){return!!this.props?.list}get checked(){return this.state.check.data}get scroll(){return this.props&&this.props.scroll?this.props.scroll:{x:"1200px",y:"600px"}}get inSearch(){let t=this.sf.value;return Object.keys(t).length>0}get userIds(){return this.props?.userIds||[]}constructor(t){this.service=t,this.onChecked=new w,this.$destroy=new dt,this.state={columns:[{index:"checkbox",render:"checkbox",renderTitle:"checkbox_all",width:20,fixed:"left"},{index:"no",type:"no",title:{i18n:"table-user.no"},width:50},{index:"realName",title:{i18n:"table-user.realName"},width:100},{index:"userCode",title:{i18n:"table-user.usercode"},width:100},{index:"dept.deptName",title:{i18n:"table-user.deptName"},width:100},{index:"rolesName",render:"rolesName",title:{i18n:"table-user.roleName"},width:100},{index:"idCard",title:{i18n:"table-user.idcard"},width:100}],data:[],dataBackup:[],page:{pageNum:1,pageSize:30,pageParam:{}},schema:{properties:{realName:{type:"string",ui:{widget:"string",i18n:"realName"}},userCode:{type:"string",ui:{i18n:"userCode"}},idCard:{type:"string",ui:{i18n:"idCard"}}}},check:{data:[]}}}ngOnInit(){this.setupPropsToState()}ngAfterViewInit(){this.setupTable(),this.hookSearch()}setupPropsToState(){this.props&&(this.setupPropsData(),this.setupPropsPage(),this.setupPropsColumns(),this.setupPropsFilteredColumns(),this.setupPropsCustomColumns(),this.setupPropsChecked())}setupTable(){this.st&&(this.setupTableData(),this.setupTablePage(),this.setupTableColumn(),this.setupTableRequest(),this.setupTableResponse(),this.onQuery())}setupPropsData(){this.props&&(this.props.data&&this.props.data.length>0?(this.state.data=this.props.data,this.state.dataBackup=this.props.data):this.state.data="/auth/baseUser/queryListForPage")}setupPropsPage(){!this.props||!this.props.page||(this.state.page=JSON.parse(JSON.stringify(this.props.page)))}setupPropsColumns(){if(!this.props||!this.props.additionalColumns)return;let t=[];this.props&&this.props.additionalColumns&&(t=t.concat(this.props.additionalColumns)),t=t.concat(this.state.columns),this.state.columns=t}setupPropsFilteredColumns(){!this.props||!this.props.filteredColumns||this.props.filteredColumns.length===0||(this.state.columns=this.state.columns.filter(t=>!this.props?.filteredColumns?.includes(t.index)))}setupPropsCustomColumns(){if(!this.props||!this.props.customColumns||this.props.customColumns.length===0)return;let t=[];this.state.columns.forEach(e=>{this.props?.customColumns?.forEach(o=>{e.index===o.index?t.push(o):t.push(e)})}),this.state.columns=[...t]}setupPropsChecked(){!this.props||!this.props.check||!this.props.check.data||(this.state.check.data=this.props.check.data,this.userIds.length>0?this.service.usersByIds(this.userIds).subscribe(t=>{this.state.check.data=this.state.check.data.concat(t),this.onChecked.emit(this.state.check.data)}):this.onChecked.emit(this.state.check.data))}setupTableData(){this.st&&(this.st.data=this.state.data)}setupTablePage(){this.st&&(this.st.pi=this.state.page.pageNum,this.st.ps=this.state.page.pageSize)}setupTableColumn(){this.st&&this.st.resetColumns({columns:this.state.columns})}setupTableRequest(){this.st&&(this.st.req={allInBody:!0,method:"POST",reName:{pi:"pageNum",ps:"pageSize"},process:t=>(t.body.pageParam=this.state.page.pageParam,t)})}setupTableResponse(){this.st&&(this.st.res={reName:{list:"list",total:"total"},process:t=>(this.pageCheck||this.resetChecked(),t)})}resetChecked(){!this.props||!this.props.check||!this.props.check.data||(this.state.check.data=this.props.check.data.map(t=>({userId:t})))}onCheckedItem(t){this.isChecked(t)?this.state.check.data=this.state.check.data.filter(e=>e.userId!==t.userId):this.isChecked(t)||(this.state.check.data=this.state.check.data.concat([t])),this.onChecked.emit(this.state.check.data)}onCheckedAll(t){if(t.target.labels[0].innerHTML.includes("checked")){let o=this.st._data.filter(u=>!this.state.check.data.find(h=>u.userId===h.userId));this.state.check.data=this.state.check.data.concat(o)}else this.state.check.data=this.state.check.data.filter(o=>!this.st._data.find(u=>u.userId===o.userId));this.onChecked.emit(this.state.check.data)}isChecked(t){return!!this.state.check.data.find(e=>e.userId===t.userId)}isAllChecked(){return this.st._data.length>0?this.isArraySubset(this.st._data,this.state.check.data):!1}isArraySubset(t,e){return t.every(o=>e.some(u=>u.userId===o.userId))}renderRoles(t){return t.map(e=>e.roleName).join(",")}unCheck(t){this.state.check.data=this.state.check.data.filter(e=>e.userId!=t.userId),this.onChecked.emit(this.state.check.data)}unCheckAll(){this.state.check.data=[],this.onChecked.emit(this.state.check.data)}hookSearch(){this.sf.formValueChange.pipe(A(this.$destroy),st(1e3)).subscribe(t=>{let{value:e}=t;this.onSearch(e)})}onSearch(t={}){if(this.inSearch){if(Array.isArray(this.state.data)&&Array.isArray(this.state.dataBackup)){let e=this.state.dataBackup;t.realName&&(e=e.filter(o=>o.realName.includes(t.realName))),t.idCard&&(e=this.state.dataBackup.filter(o=>o.idCard=t.idCard)),t.userCode&&(e=this.state.dataBackup.filter(o=>o.userCode=t.userCode)),this.st.data=e,this.st.reload()}typeof this.state.data=="string"&&(this.state.page.pageParam=Et(Et({},this.state.page.pageParam),t),this.onQuery())}}onReset(){this.sf.reset(),this.state.page.pageParam={},this.onQuery()}onQuery(){this.st&&(Array.isArray(this.state.data)&&Array.isArray(this.state.dataBackup)&&(this.st.data=this.state.dataBackup),this.st.reload())}setTableParam(t){this.inSearch&&(this.state.page.pageParam=Et(Et({},t),this.sf.value),this.onSearch(this.sf.value)),this.inSearch||(this.state.page.pageParam=t,this.setupTable())}};i.\u0275fac=function(e){return new(e||i)($(Ge))},i.\u0275cmp=f({type:i,selectors:[["yunzai-table-user"]],viewQuery:function(e,o){if(e&1&&(H(ii,5),H(ri,5)),e&2){let u;K(u=W())&&(o.st=u.first),K(u=W())&&(o.sf=u.first)}},inputs:{props:"props"},outputs:{onChecked:"onChecked"},standalone:!0,features:[y],decls:14,vars:2,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngIf"],["tableTpl",""],["listTpl",""],["form",""],[3,"ngTemplateOutlet"],[1,"yz-select-contacts-modal-right",2,"width","67%"],[3,"scroll","size","bordered"],["st",""],["st-row","checkbox_all","type","title"],["st-row","checkbox"],["st-row","rolesName"],[1,"yz-select-contacts-modal-right",2,"width","33%"],["nz-checkbox","",3,"nzChecked","change",4,"ngIf"],["nz-checkbox","",3,"nzChecked","change"],[1,"right-list-title"],[1,"yz-selected-contacts"],["style","margin: 90px auto;",4,"ngIf"],["nz-menu","","nzMode","inline",1,"yz-role-contacts"],["nz-menu-item","","class","people-item",4,"ngFor","ngForOf"],[2,"cursor","default"],["nzType","vertical"],["href","javascript:;",2,"cursor","pointer",3,"click"],[2,"margin","90px auto"],["nz-menu-item","",1,"people-item"],[1,"people-item-right"],[1,"del-btn",3,"click"],["nz-icon","","nzType","close","nzTheme","outline"],["layout","inline","button","none",3,"schema"],["sf",""],["nz-button","","nzType","primary",3,"click"]],template:function(e,o){e&1&&(r(0,`
    `),m(1,oi,4,1,"nz-card",0),r(2,`

    `),m(3,ai,1,1,"ng-container",1),r(4,`

    `),m(5,ui,21,5,"ng-template",null,2,k),r(7,`

    `),m(8,zi,20,6,"ng-template",null,3,k),r(10,`

    `),m(11,gi,8,4,"ng-template",null,4,k),r(13,`
  `)),e&2&&(s(),d("ngIf",o.wrapped),s(2),d("ngIf",!o.wrapped))},dependencies:[v,Bt,et,nt,P,pt,N,lt,jt,xe,Qt,Ce,ge,F,ft,Ot,le,de,se,Vt,ue,$t,be,ze,yt,Gt,Y,rt],encapsulation:2});let n=i;return n})();var Ci=[It],wt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=Z({type:i}),i.\u0275inj=J({imports:[v,P,N,jt,Qt,F,Ot,Vt,$t,yt,Y,Ci]});let n=i;return n})();var xi=["table"];function bi(n,i){if(n&1&&(l(0,"nz-card"),r(1,`
      `),S(2,3),r(3,`
    `),p()),n&2){c();let a=x(6);s(2),d("ngTemplateOutlet",a)}}function Ti(n,i){if(n&1&&S(0,3),n&2){c();let a=x(6);d("ngTemplateOutlet",a)}}function _i(n,i){n&1&&(l(0,"label",16),r(1),ut(2,"i18n"),p()),n&2&&(s(),I(ht(2,1,"deptTree")))}function Si(n,i){n&1&&(l(0,"label",17),r(1),ut(2,"i18n"),p()),n&2&&(s(),I(ht(2,1,"roleTree")))}function ki(n,i){n&1&&(l(0,"label",18),r(1),ut(2,"i18n"),p()),n&2&&(s(),I(ht(2,1,"dormitoryTree")))}function vi(n,i){n&1&&(l(0,"label",19),r(1),ut(2,"i18n"),p()),n&2&&(s(),I(ht(2,1,"friendGroup")))}function Yi(n,i){if(n&1){let a=D();l(0,"yunzai-dept-tree",20),g("onSelect",function(e){T(a);let o=c(2);return _(o.onDeptSelect(e))}),p()}if(n&2){let a=c(2);d("props",a.deptTree)}}function Di(n,i){if(n&1){let a=D();l(0,"yunzai-dormitory-tree",20),g("onSelect",function(e){T(a);let o=c(2);return _(o.onDormTreeSelect(e))}),p()}if(n&2){let a=c(2);d("props",a.dormitoryTree)}}function Ii(n,i){if(n&1){let a=D();l(0,"yunzai-role-tree",20),g("onSelect",function(e){T(a);let o=c(2);return _(o.onRoleTreeSelect(e))}),p()}if(n&2){let a=c(2);d("props",a.roleTree)}}function wi(n,i){if(n&1){let a=D();l(0,"yunzai-friend-group",20),g("onSelect",function(e){T(a);let o=c(2);return _(o.onFriendSelect(e))}),p()}if(n&2){let a=c(2);d("props",a.friendGroup)}}function Ni(n,i){if(n&1){let a=D();r(0,`
      `),l(1,"nz-row"),r(2,`
        `),l(3,"nz-col",4),r(4,`
          `),l(5,"div",5),r(6,`
            `),l(7,"nz-radio-group",6),re("ngModelChange",function(e){T(a);let o=c();return ie(o.state.cursor,e)||(o.state.cursor=e),_(e)}),r(8,`
              `),m(9,_i,3,3,"label",7),r(10,`
              `),m(11,Si,3,3,"label",8),r(12,`
              `),m(13,ki,3,3,"label",9),r(14,`
              `),m(15,vi,3,3,"label",10),r(16,`
            `),p(),r(17,`
          `),p(),r(18,`

          `),l(19,"nz-row",11),r(20,`
            `),l(21,"nz-col",12),r(22,`
              `),m(23,Yi,1,1,"yunzai-dept-tree",13),r(24,`
              `),m(25,Di,1,1,"yunzai-dormitory-tree",13),r(26,`
              `),m(27,Ii,1,1,"yunzai-role-tree",13),r(28,`
              `),m(29,wi,1,1,"yunzai-friend-group",13),r(30,`
            `),p(),r(31,`
          `),p(),r(32,`
        `),p(),r(33,`
        `),l(34,"nz-col",4),r(35,`
          `),l(36,"yunzai-table-user",14,15),g("onChecked",function(e){T(a);let o=c();return _(o.onTableUserChecked(e))}),p(),r(38,`
        `),p(),r(39,`
      `),p(),r(40,`
    `)}if(n&2){let a=c();s(3),d("nzSpan",6),s(4),ne("ngModel",a.state.cursor),s(2),d("ngIf",!a.disableDeptTree),s(2),d("ngIf",!a.disableRoleTree),s(2),d("ngIf",!a.disableDormitoryTree),s(2),d("ngIf",!a.disableFriendGroup),s(6),d("nzSpan",24)("ngSwitch",a.state.cursor),s(2),d("ngSwitchCase","deptTree"),s(2),d("ngSwitchCase","dormitoryTree"),s(2),d("ngSwitchCase","roleTree"),s(2),d("ngSwitchCase","friendGroup"),s(5),d("nzSpan",18),s(2),d("props",a.tableUserProps)}}var Pt=(()=>{let i=class i{get tableUserProps(){return this.tableUser?this.tableUser:{wrap:!1,page:{pageNum:1,pageSize:20},userIds:[],list:!0,check:{pageCheck:!0,disable:!1,data:[]}}}get disableDeptTree(){return!!this.props?.disableDeptTree}get disableRoleTree(){return!!this.props?.disableRoleTree}get disableDormitoryTree(){return!!this.props?.disableDormitoryTree}get disableFriendGroup(){return!!this.props?.disableFriendGroup}get isWarp(){return!!this.props?.wrap}constructor(){this.onSelect=new w,this.onSelectDept=new w,this.onSelectRole=new w,this.onSelectDormitory=new w,this.onSelectGroup=new w,this.state={cursor:"deptTree"}}onDeptSelect(t){this.table.setTableParam({deptId:t[0].key}),this.onSelectDept.emit(t)}onRoleTreeSelect(t){this.table.setTableParam({roleId:t[0].key}),this.onSelectRole.emit(t)}onDormTreeSelect(t){t[0].type==="building"?this.table.setTableParam({buildId:t[0].key}):t[0].type==="floor"?this.table.setTableParam({buildId:t[0].buildPid,floor:t[0].key}):t[0].type==="room"&&this.table.setTableParam({buildId:t[0].buildPid,floor:t[0].floorPid,roomId:t[0].key}),this.onSelectDormitory.emit(t)}onFriendSelect(t){this.table.setTableParam({friendGroupId:t.id}),this.onSelectGroup.emit(t)}onTableUserChecked(t){this.tableUserProps.check.data=t,this.onSelect.emit(t)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["yunzai-contact"]],viewQuery:function(e,o){if(e&1&&H(xi,5),e&2){let u;K(u=W())&&(o.table=u.first)}},inputs:{deptTree:"deptTree",dormitoryTree:"dormitoryTree",friendGroup:"friendGroup",roleTree:"roleTree",tableUser:"tableUser",props:"props"},outputs:{onSelect:"onSelect",onSelectDept:"onSelectDept",onSelectRole:"onSelectRole",onSelectDormitory:"onSelectDormitory",onSelectGroup:"onSelectGroup"},standalone:!0,features:[y],decls:8,vars:2,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngIf"],["content",""],[3,"ngTemplateOutlet"],[3,"nzSpan"],[1,"yz-select-contacts-modal-type"],[3,"ngModel","ngModelChange"],["nz-radio-button","","nzValue","deptTree",4,"ngIf"],["nz-radio-button","","nzValue","roleTree",4,"ngIf"],["nz-radio-button","","nzValue","dormitoryTree",4,"ngIf"],["nz-radio-button","","nzValue","friendGroup",4,"ngIf"],[1,"yz-select-contacts-modal-tree"],[3,"nzSpan","ngSwitch"],[3,"props","onSelect",4,"ngSwitchCase"],[3,"props","onChecked"],["table",""],["nz-radio-button","","nzValue","deptTree"],["nz-radio-button","","nzValue","roleTree"],["nz-radio-button","","nzValue","dormitoryTree"],["nz-radio-button","","nzValue","friendGroup"],[3,"props","onSelect"]],template:function(e,o){e&1&&(r(0,`
    `),m(1,bi,4,1,"nz-card",0),r(2,`

    `),m(3,Ti,1,1,"ng-container",1),r(4,`

    `),m(5,Ni,41,14,"ng-template",null,2,k),r(7,`
  `)),e&2&&(s(),d("ngIf",o.isWarp),s(2),d("ngIf",!o.isWarp))},dependencies:[yt,Gt,Tt,bt,St,_t,vt,kt,Dt,Yt,wt,It,v,et,nt,oe,ae,Y,rt,B,j,Q,Lt,ye,he,fe,At,ce,me],encapsulation:2});let n=i;return n})();var Ei=[Pt],Zt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=Z({type:i}),i.\u0275inj=J({imports:[yt,Tt,St,vt,Dt,wt,v,Y,B,Lt,At,Ei]});let n=i;return n})();var Ae=(()=>{let i=class i{constructor(t){this.modal=t}create(t,e={props:{wrap:!1,disableFriendGroup:!1,disableDormitoryTree:!1,disableDeptTree:!1,disableRoleTree:!1},deptTree:{multiple:!1,wrap:!1,expand:!0,class:!0,historyClass:!0,grade:!0,types:[Wt.DEPT,Wt.CLASS]},dormitoryTree:{multiple:!1,wrap:!1,expand:!0},roleTree:{wrap:!1,expand:!0,multiple:!1},friendGroup:{wrap:!1},tableUser:{wrap:!1,filteredColumns:[],page:{pageNum:1,pageSize:20,pageParam:{}},customColumns:[],list:!0,check:{pageCheck:!0,disable:!1,data:[]}}}){let o=[],u=this.modal.create({nzTitle:"\u4EBA\u5458\u9009\u62E9",nzContent:Pt,nzClassName:"yz-select-contacts-modal",nzWidth:1200,nzData:e,nzOnOk:()=>te(t(o))}).getContentComponent();u.deptTree=e.deptTree,u.props=e.props,u.roleTree=e.roleTree,u.dormitoryTree=e.dormitoryTree,u.friendGroup=e.friendGroup,u.tableUser=e.tableUser,u.onSelect.subscribe(h=>o=h)}};i.\u0275fac=function(e){return new(e||i)(L(pe))},i.\u0275prov=V({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var Ve=(()=>{let i=class i{constructor(){this.deptTree={multiple:!0,wrap:!0,expand:!0,data:[{title:"\u4E00\u7EA7\u90E8\u95E8",key:"1",value:"1",icon:"",children:[{title:"\u4E8C\u7EA7\u90E8\u95E8",key:"21",value:"21",icon:"",children:[]},{title:"\u4E8C\u7EA7\u90E8\u95E8",key:"22",value:"22",icon:"",children:[]},{title:"\u4E8C\u7EA7\u90E8\u95E8",key:"23",value:"23",icon:"",children:[]},{title:"\u4E8C\u7EA7\u90E8\u95E8",key:"24",value:"24",icon:"",children:[{title:"\u4E09\u7EA7\u90E8\u95E8",key:"31",value:"31",icon:"",children:[]}]}]}]},this.dormitoryTree={multiple:!0,wrap:!0,expand:!0,data:[{buildPid:"",expanded:!0,floorPid:"",isExpanded:!0,isLeaf:!1,key:"1",selected:!1,title:"1\u53F7\u697C",type:"0",children:[{buildPid:"1",expanded:!0,floorPid:"",isExpanded:!0,isLeaf:!1,key:"11",selected:!1,title:"1\u53F7\u697C1\u5355\u5143",type:"1",children:[{buildPid:"1",expanded:!0,floorPid:"11",isExpanded:!0,isLeaf:!0,key:"111",selected:!1,title:"1\u53F7\u697C1\u5355\u5143101",type:"2",children:[]}]}]}]},this.friendGroup={wrap:!0,data:[{id:"1",name:"\u597D\u53CB\u4E00\u7EC4",userAccount:"account",data:[{userId:"1",account:"11",realName:"\u6D4B\u8BD5\u5206\u9875",userType:1,userCode:"242424234",sex:0,email:null,mobile:"******",officePhone:null,readNumber:null,status:1,displayIndex:0,idCard:"******",lastDate:"2023-07-06T09:02:20.699+00:00",operUser:null,lastLoginTime:"2023-07-12T06:31:47.000+00:00",remark:null,errorCount:0,question:null,answer:null,theme:null,roles:[]}]}]},this.roleTree={multiple:!0,wrap:!0,expand:!0,data:[{title:"\u89D2\u8272\u7EC4",key:"1",code:"1",leaf:!1,type:"dept",children:[{title:"\u89D2\u82721",key:"21",code:"21",leaf:!0,type:"",children:[]}]}]},this.tableUser={wrap:!1,filteredColumns:[],page:{pageNum:1,pageSize:20,pageParam:{}},customColumns:[],list:!0,check:{pageCheck:!0,disable:!1,data:[]}},this.props={disableDeptTree:!1,disableRoleTree:!1,disableDormitoryTree:!1,disableFriendGroup:!1,wrap:!0}}onSelect(t){console.log(t)}onSelectDept(t){console.log(t)}onSelectRole(t){console.log(t)}onSelectDormitory(t){console.log(t)}onSelectGroup(t){console.log(t)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["bcs-yunzai-contact-static"]],standalone:!0,features:[y],decls:4,vars:6,consts:[[3,"deptTree","dormitoryTree","friendGroup","roleTree","tableUser","props","onSelect","onSelectDept","onSelectRole","onSelectDormitory","onSelectGroup"]],template:function(e,o){e&1&&(r(0,`
    `),l(1,"yunzai-contact",0),g("onSelect",function(h){return o.onSelect(h)})("onSelectDept",function(h){return o.onSelectDept(h)})("onSelectRole",function(h){return o.onSelectRole(h)})("onSelectDormitory",function(h){return o.onSelectDormitory(h)})("onSelectGroup",function(h){return o.onSelectGroup(h)}),r(2,`
    `),p(),r(3,`
    `)),e&2&&(s(),d("deptTree",o.deptTree)("dormitoryTree",o.dormitoryTree)("friendGroup",o.friendGroup)("roleTree",o.roleTree)("tableUser",o.tableUser)("props",o.props))},dependencies:[Zt,Pt],encapsulation:2});let n=i;return n})();var Le=(()=>{let i=class i{constructor(t){this.yunzaiContactService=t}ngOnInit(){}show(){this.yunzaiContactService.create(t=>(console.log(t),U(!0)))}};i.\u0275fac=function(e){return new(e||i)($(Ae))},i.\u0275cmp=f({type:i,selectors:[["bcs-yunzai-contact-service"]],standalone:!0,features:[y],decls:4,vars:0,consts:[["nz-button","","nzType","primary",3,"click"]],template:function(e,o){e&1&&(r(0,`
      `),l(1,"button",0),g("click",function(){return o.show()}),r(2,"show"),p(),r(3,`
    `))},dependencies:[Zt],encapsulation:2});let n=i;return n})();var Qe=(()=>{let i=class i{constructor(){this.item={cols:1,urls:{"en-US":"packages/bcs/yunzai-contact/index.en-US.md","zh-CN":"packages/bcs/yunzai-contact/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>\u8054\u7CFB\u4EBA\u7EC4\u4EF6\uFF0C\u805A\u5408\u5176\u4ED6\u7EC4\u4EF6\u800C\u6210</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="InputArguments"><a class="lake-link"><i data-anchor="InputArguments"></i></a>InputArguments</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>deptTree</td><td>\u90E8\u95E8\u6811\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiDeptTreeProps</td></tr><tr><td>dormitoryTree</td><td>\u5BBF\u820D\u6811\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiDormitoryTreeProps</td></tr><tr><td>friendGroup</td><td>\u597D\u53CB\u7EC4\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiFriendGroupProps</td></tr><tr><td>roleTree</td><td>\u89D2\u8272\u6811\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiRoleTreeProps</td></tr><tr><td>tableUser</td><td>\u7528\u6237\u5217\u8868\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiTableUserProps</td></tr><tr><td>props</td><td>\u8054\u7CFB\u4EBA\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiContactProps</td></tr><tr><td>onSelect</td><td>\u8F93\u51FA\u5C5E\u6027\u4EBA\u5458\u5217\u8868</td><td><code>EventEmitter&lt;YunzaiTableUser[]></code></td></tr><tr><td>onSelectDept</td><td>\u8F93\u51FA\u5C5E\u6027\u9009\u62E9\u7684\u90E8\u95E8</td><td><code>EventEmitter&lt;YunzaiDeptTree[]></code></td></tr><tr><td>onSelectRole</td><td>\u8F93\u51FA\u5C5E\u6027\u9009\u62E9\u7684\u89D2\u8272</td><td><code>EventEmitter&lt;YunzaiRoleTree[]></code></td></tr><tr><td>onSelectDormitory</td><td>\u8F93\u51FA\u5C5E\u6027\u9009\u62E9\u7684\u5BBF\u820D</td><td><code>EventEmitter&lt;YunzaiDormitoryTree[]></code></td></tr><tr><td>onSelectGroup</td><td>\u8F93\u51FA\u5C5E\u6027\u9009\u62E9\u7684\u597D\u53CB\u7EC4</td><td><code>EventEmitter&lt;YunzaiFriendGroup></code></td></tr></tbody></table><h3 id="YunzaiContactProps"><a class="lake-link"><i data-anchor="YunzaiContactProps"></i></a>YunzaiContactProps</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>disableDeptTree</td><td>\u662F\u5426\u5173\u95ED\u90E8\u95E8\u6811</td><td>bool</td></tr><tr><td>disableRoleTree</td><td>\u662F\u5426\u5173\u95ED\u89D2\u8272\u6811</td><td>bool</td></tr><tr><td>disableDormitoryTree</td><td>\u662F\u5426\u5173\u95ED\u5BBF\u820D\u6811</td><td>bool</td></tr><tr><td>disableFriendGroup</td><td>\u662F\u5426\u5173\u95ED\u597D\u53CB\u7EC4</td><td>bool</td></tr><tr><td>wrap</td><td>\u662F\u5426\u4F7F\u7528nz-card\u5305\u88F9</td><td>bool</td></tr></tbody></table><h3 id="\u51FD\u6570\u7B7E\u540D"><a class="lake-link"><i data-anchor="\u51FD\u6570\u7B7E\u540D"></i></a>\u51FD\u6570\u7B7E\u540D</h3><p>service\u51FD\u6570\u7B7E\u540D,<code>nzOnOk</code>\u4E3A\u56DE\u8C03\u51FD\u6570\uFF0C<code>param</code>\u4E3A\u4F20\u5165\u53C2\u6570</p><pre class="hljs language-ts"><code>const create = (
    nzOnOk: (users: YunzaiTableUser[]) => Observable<boolean>,
    param: YunzaiContactParam = {
        props: {
            wrap: false,
            disableFriendGroup: false,
            disableDormitoryTree: false,
            disableDeptTree: false,
            disableRoleTree: false
        },
        deptTree: {
            multiple: false,
            wrap: false,
            expand: true,
            class: true,
            historyClass: true,
            grade: true,
            types: [YUNZAI_DEPT_TYPES.DEPT, YUNZAI_DEPT_TYPES.CLASS],
        },
        dormitoryTree: {
            multiple: false,
            wrap: false,
            expand: true,
        },
        roleTree: {
            wrap: false,
            expand: true,
            multiple: false
        },
        friendGroup: {
            wrap: false
        },
        tableUser: {
            wrap: false,
            filteredColumns: [],
            page: {
                pageNum: 1,
                pageSize: 20,
                pageParam: {}
            },
            customColumns: [],
            list: true,
            check: {
                pageCheck: true,
                disable: false,
                data: [],
            }
        }
    }
): void => {
}</code></pre><h3 id="others"><a class="lake-link"><i data-anchor="others"></i></a>others</h3><p>\u5176\u4ED6\u5C5E\u6027\u8BF7\u67E5\u627E\u76F8\u5E94\u7EC4\u4EF6\u7684API</p>`,meta:{type:"Basic",title:"yunzai-contact",subtitle:"Contact",cols:1,order:20,module:"import { YunzaiTableUserModule } from '@yelon/bcs/yunzai-table-user';"},toc:[{id:"API",title:"API",h:2,children:[{id:"InputArguments",title:"Input Arguments",h:3},{id:"YunzaiContactProps",title:"YunzaiContactProps",h:3},{id:"\u51FD\u6570\u7B7E\u540D",title:"\u51FD\u6570\u7B7E\u540D",h:3},{id:"others",title:"others",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u8054\u7CFB\u4EBA\u7EC4\u4EF6\uFF0C\u805A\u5408\u5176\u4ED6\u7EC4\u4EF6\u800C\u6210</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="InputArguments"><a class="lake-link"><i data-anchor="InputArguments"></i></a>InputArguments</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>deptTree</td><td>\u90E8\u95E8\u6811\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiDeptTreeProps</td></tr><tr><td>dormitoryTree</td><td>\u5BBF\u820D\u6811\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiDormitoryTreeProps</td></tr><tr><td>friendGroup</td><td>\u597D\u53CB\u7EC4\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiFriendGroupProps</td></tr><tr><td>roleTree</td><td>\u89D2\u8272\u6811\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiRoleTreeProps</td></tr><tr><td>tableUser</td><td>\u7528\u6237\u5217\u8868\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiTableUserProps</td></tr><tr><td>props</td><td>\u8054\u7CFB\u4EBA\u7EC4\u4EF6\u8F93\u5165\u5C5E\u6027</td><td>YunzaiContactProps</td></tr><tr><td>onSelect</td><td>\u8F93\u51FA\u5C5E\u6027\u4EBA\u5458\u5217\u8868</td><td><code>EventEmitter&lt;YunzaiTableUser[]></code></td></tr><tr><td>onSelectDept</td><td>\u8F93\u51FA\u5C5E\u6027\u9009\u62E9\u7684\u90E8\u95E8</td><td><code>EventEmitter&lt;YunzaiDeptTree[]></code></td></tr><tr><td>onSelectRole</td><td>\u8F93\u51FA\u5C5E\u6027\u9009\u62E9\u7684\u89D2\u8272</td><td><code>EventEmitter&lt;YunzaiRoleTree[]></code></td></tr><tr><td>onSelectDormitory</td><td>\u8F93\u51FA\u5C5E\u6027\u9009\u62E9\u7684\u5BBF\u820D</td><td><code>EventEmitter&lt;YunzaiDormitoryTree[]></code></td></tr><tr><td>onSelectGroup</td><td>\u8F93\u51FA\u5C5E\u6027\u9009\u62E9\u7684\u597D\u53CB\u7EC4</td><td><code>EventEmitter&lt;YunzaiFriendGroup></code></td></tr></tbody></table><h3 id="YunzaiContactProps"><a class="lake-link"><i data-anchor="YunzaiContactProps"></i></a>YunzaiContactProps</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>disableDeptTree</td><td>\u662F\u5426\u5173\u95ED\u90E8\u95E8\u6811</td><td>bool</td></tr><tr><td>disableRoleTree</td><td>\u662F\u5426\u5173\u95ED\u89D2\u8272\u6811</td><td>bool</td></tr><tr><td>disableDormitoryTree</td><td>\u662F\u5426\u5173\u95ED\u5BBF\u820D\u6811</td><td>bool</td></tr><tr><td>disableFriendGroup</td><td>\u662F\u5426\u5173\u95ED\u597D\u53CB\u7EC4</td><td>bool</td></tr><tr><td>wrap</td><td>\u662F\u5426\u4F7F\u7528nz-card\u5305\u88F9</td><td>bool</td></tr></tbody></table><h3 id="\u51FD\u6570\u7B7E\u540D"><a class="lake-link"><i data-anchor="\u51FD\u6570\u7B7E\u540D"></i></a>\u51FD\u6570\u7B7E\u540D</h3><p>service\u51FD\u6570\u7B7E\u540D,<code>nzOnOk</code>\u4E3A\u56DE\u8C03\u51FD\u6570\uFF0C<code>param</code>\u4E3A\u4F20\u5165\u53C2\u6570</p><pre class="hljs language-ts"><code>const create = (
    nzOnOk: (users: YunzaiTableUser[]) => Observable<boolean>,
    param: YunzaiContactParam = {
        props: {
            wrap: false,
            disableFriendGroup: false,
            disableDormitoryTree: false,
            disableDeptTree: false,
            disableRoleTree: false
        },
        deptTree: {
            multiple: false,
            wrap: false,
            expand: true,
            class: true,
            historyClass: true,
            grade: true,
            types: [YUNZAI_DEPT_TYPES.DEPT, YUNZAI_DEPT_TYPES.CLASS],
        },
        dormitoryTree: {
            multiple: false,
            wrap: false,
            expand: true,
        },
        roleTree: {
            wrap: false,
            expand: true,
            multiple: false
        },
        friendGroup: {
            wrap: false
        },
        tableUser: {
            wrap: false,
            filteredColumns: [],
            page: {
                pageNum: 1,
                pageSize: 20,
                pageParam: {}
            },
            customColumns: [],
            list: true,
            check: {
                pageCheck: true,
                disable: false,
                data: [],
            }
        }
    }
): void => {
}</code></pre><h3 id="others"><a class="lake-link"><i data-anchor="others"></i></a>others</h3><p>\u5176\u4ED6\u5C5E\u6027\u8BF7\u67E5\u627E\u76F8\u5E94\u7EC4\u4EF6\u7684API</p>`,meta:{type:"Basic",title:"yunzai-contact",subtitle:"\u8054\u7CFB\u4EBA",cols:1,order:20,module:"import { YunzaiTableUserModule } from '@yelon/bcs/yunzai-table-user';"},toc:[{id:"API",title:"API",h:2,children:[{id:"InputArguments",title:"Input Arguments",h:3},{id:"YunzaiContactProps",title:"YunzaiContactProps",h:3},{id:"\u51FD\u6570\u7B7E\u540D",title:"\u51FD\u6570\u7B7E\u540D",h:3},{id:"others",title:"others",h:3}]}]}},demo:!0},this.codes=[{id:"bcs-yunzai-contact-static",meta:{order:0,title:{"zh-CN":"\u7EC4\u4EF6\u65B9\u5F0F","en-US":"use component"}},summary:"<p> \u4F7F\u7528\u7EC4\u4EF6\u65B9\u5F0F</p>",code:`import {Component} from "@angular/core";
import {YunzaiDeptTreeProps,YunzaiDeptTree} from "@yelon/bcs/yunzai-dept-tree";
import {YunzaiDormitoryTreeProps,YunzaiDormitoryTree} from "@yelon/bcs/yunzai-dormitory-tree";
import {YunzaiFriendGroupProps,YunzaiFriendGroup} from "@yelon/bcs/yunzai-friend-group";
import {YunzaiRoleTreeProps,YunzaiRoleTree} from "@yelon/bcs/yunzai-role-tree";
import {YunzaiTableUserProps,YunzaiTableUser} from "@yelon/bcs/yunzai-table-user";
import {YunzaiContactProps} from "@yelon/bcs/yunzai-contact";
import {YunzaiContactModule} from "@yelon/bcs/yunzai-contact";


@Component({
    selector: \`bcs-yunzai-contact-static\`,
    template: \`
    <yunzai-contact
        [deptTree]="deptTree"
        [dormitoryTree]="dormitoryTree"
        [friendGroup]="friendGroup"
        [roleTree]="roleTree"
        [tableUser]="tableUser"
        [props]="props"
        (onSelect)="onSelect($event)"
        (onSelectDept)="onSelectDept($event)"
        (onSelectRole)="onSelectRole($event)"
        (onSelectDormitory)="onSelectDormitory($event)"
        (onSelectGroup)="onSelectGroup($event)"
    >
    </yunzai-contact>
    \`,
  standalone:true,
  imports:[YunzaiContactModule]
})
export class BcsYunzaiContactStaticComponent {
    deptTree: YunzaiDeptTreeProps = {
        multiple: true,
        wrap: true,
        expand: true,
        data: [
            {
                title: "\u4E00\u7EA7\u90E8\u95E8", key: '1', value: '1', icon: '',
                children: [
                    {title: "\u4E8C\u7EA7\u90E8\u95E8", key: '21', value: '21', icon: '', children: []},
                    {title: "\u4E8C\u7EA7\u90E8\u95E8", key: '22', value: '22', icon: '', children: []},
                    {title: "\u4E8C\u7EA7\u90E8\u95E8", key: '23', value: '23', icon: '', children: []},
                    {
                        title: "\u4E8C\u7EA7\u90E8\u95E8", key: '24', value: '24', icon: '', children: [
                            {title: "\u4E09\u7EA7\u90E8\u95E8", key: '31', value: '31', icon: '', children: []},
                        ]
                    },
                ]
            }
        ]
    }
    dormitoryTree: YunzaiDormitoryTreeProps = {
        multiple: true,
        wrap: true,
        expand: true,
        data: [
            {
                buildPid: "",
                expanded: true,
                floorPid: "",
                isExpanded: true,
                isLeaf: false,
                key: '1',
                selected: false,
                title: "1\u53F7\u697C",
                type: "0",
                children: [
                    {
                        buildPid: "1",
                        expanded: true,
                        floorPid: "",
                        isExpanded: true,
                        isLeaf: false,
                        key: '11',
                        selected: false,
                        title: "1\u53F7\u697C1\u5355\u5143",
                        type: "1",
                        children: [
                            {
                                buildPid: "1",
                                expanded: true,
                                floorPid: "11",
                                isExpanded: true,
                                isLeaf: true,
                                key: '111',
                                selected: false,
                                title: "1\u53F7\u697C1\u5355\u5143101",
                                type: "2",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
    friendGroup: YunzaiFriendGroupProps = {
        wrap: true,
        data: [{
            id: "1",
            name: "\u597D\u53CB\u4E00\u7EC4",
            userAccount: "account",
            data: [{
                userId: "1",
                account: "11",
                realName: "\u6D4B\u8BD5\u5206\u9875",
                userType: 1,
                userCode: "242424234",
                sex: 0,
                email: null,
                mobile: "******",
                officePhone: null,
                readNumber: null,
                status: 1,
                displayIndex: 0,
                idCard: "******",
                lastDate: "2023-07-06T09:02:20.699+00:00",
                operUser: null,
                lastLoginTime: "2023-07-12T06:31:47.000+00:00",
                remark: null,
                errorCount: 0,
                question: null,
                answer: null,
                theme: null,
                roles: []
            }] as any
        }]
    }
    roleTree: YunzaiRoleTreeProps = {
        multiple: true,
        wrap: true,
        expand: true,
        data: [
            {
                title: "\u89D2\u8272\u7EC4", key: '1', code: "1", leaf: false, type: 'dept',
                children: [
                    {title: "\u89D2\u82721", key: '21', code: "21", leaf: true, type: '', children: []},
                ]
            }
        ]
    }
    tableUser: YunzaiTableUserProps = {
        wrap: false,
        filteredColumns: [],
        page: {
            pageNum: 1,
            pageSize: 20,
            pageParam: {}
        },
        customColumns: [],
        list: true,
        check: {
            pageCheck: true,
            disable: false,
            data: [],
        }
    }
    props: YunzaiContactProps = {
        disableDeptTree: false,
        disableRoleTree: false,
        disableDormitoryTree: false,
        disableFriendGroup: false,
        wrap: true
    }

    onSelect(user: YunzaiTableUser[]): void {
        console.log(user)
    }

    onSelectDept(dept: YunzaiDeptTree[]): void {
        console.log(dept)
    }

    onSelectRole(role: YunzaiRoleTree[]): void {
        console.log(role)
    }

    onSelectDormitory(dorm: YunzaiDormitoryTree[]): void {
        console.log(dorm)
    }

    onSelectGroup(group: YunzaiFriendGroup): void {
        console.log(group)
    }
}`,lang:"ts",componentName:"BcsYunzaiContactStaticComponent",point:0,name:"static",urls:"packages/bcs/yunzai-contact/demo/static.md",type:"demo"},{id:"bcs-yunzai-contact-service",meta:{order:1,title:{"zh-CN":"\u4F7F\u7528\u670D\u52A1\u65B9\u5F0F","en-US":"use service"}},summary:"<p>\u4F7F\u7528Service\u65B9\u5F0F</p>",code:`import {Component} from "@angular/core";
import {of} from "rxjs"
import {YunzaiContactService,YunzaiContactModule} from "@yelon/bcs/yunzai-contact";

@Component({
  selector: \`bcs-yunzai-contact-service\`,
  template: \`
      <button nz-button nzType="primary" (click)="show()">show</button>
    \`,
  standalone: true,
  imports: [YunzaiContactModule]
})
export class BcsYunzaiContactServiceComponent {
  constructor(private yunzaiContactService: YunzaiContactService) {

  }


  ngOnInit(): void {
  }

  show(): void {
    this.yunzaiContactService.create((users) => {
      console.log(users)
      return of(true)
    });
  }

}`,lang:"ts",componentName:"BcsYunzaiContactServiceComponent",point:1,name:"service",urls:"packages/bcs/yunzai-contact/demo/service.md",type:"demo"}]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-bcs-yunzai-contact"]],hostVars:2,hostBindings:function(e,o){e&2&&E("d-block","true")},standalone:!0,features:[y],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(l(0,"app-docs",0)(1,"div",1)(2,"div",2),r(3,`
        `),l(4,"code-box",3),r(5,`
          `),z(6,"bcs-yunzai-contact-static"),r(7,`
        `),p(),r(8,`
      
        `),l(9,"code-box",3),r(10,`
          `),z(11,"bcs-yunzai-contact-service"),r(12,`
        `),p(),r(13,`
      `),p()()()),e&2&&(d("codes",o.codes)("item",o.item),s(),d("nzGutter",16),s(3),d("item",o.codes[0]),q("id",o.codes[0].id),s(5),d("item",o.codes[1]),q("id",o.codes[1].id))},dependencies:[M,at,Ve,Le,B,j,Q],encapsulation:2});let n=i;return n})();var je=(()=>{let i=class i{constructor(){this.props={multiple:!0,wrap:!0,expand:!0,data:[{title:"\u4E00\u7EA7\u90E8\u95E8",key:"1",value:"1",icon:"",children:[{title:"\u4E8C\u7EA7\u90E8\u95E8",key:"21",value:"21",icon:"",children:[]},{title:"\u4E8C\u7EA7\u90E8\u95E8",key:"22",value:"22",icon:"",children:[]},{title:"\u4E8C\u7EA7\u90E8\u95E8",key:"23",value:"23",icon:"",children:[]},{title:"\u4E8C\u7EA7\u90E8\u95E8",key:"24",value:"24",icon:"",children:[{title:"\u4E09\u7EA7\u90E8\u95E8",key:"31",value:"31",icon:"",children:[]}]}]}]}}onQueryComplete(t){console.log(t)}onSelect(t){console.log(t)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["bcs-yunzai-dept-tree-static"]],standalone:!0,features:[y],decls:3,vars:1,consts:[[3,"props","onQueryComplete","onSelect"]],template:function(e,o){e&1&&(r(0,`
    `),l(1,"yunzai-dept-tree",0),g("onQueryComplete",function(h){return o.onQueryComplete(h)})("onSelect",function(h){return o.onSelect(h)}),p(),r(2,`
    `)),e&2&&(s(),d("props",o.props))},dependencies:[Tt,bt],encapsulation:2});let n=i;return n})();var $e=(()=>{let i=class i{constructor(){this.item={cols:1,urls:{"en-US":"packages/bcs/yunzai-dept-tree/index.en-US.md","zh-CN":"packages/bcs/yunzai-dept-tree/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>\u90E8\u95E8\u6811\u4E1A\u52A1\u7EC4\u4EF6</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>props</td><td>\u4F20\u5165\u53C2\u6570</td><td>YunzaiDeptTreeProps</td><td>undefined</td></tr><tr><td>onQueryComplete</td><td>\u90E8\u95E8\u6811\u67E5\u8BE2\u7ED3\u679C</td><td>EventEmitter<YunzaiDeptTree[]></td><td>undefined</td></tr><tr><td>onSelect</td><td>\u90E8\u95E8\u6811\u9009\u62E9\u7ED3\u679C</td><td>EventEmitter<YunzaiDeptTree[]></td><td>undefined</td></tr></tbody></table><h3 id="YunzaiDeptTreeProps"><a class="lake-link"><i data-anchor="YunzaiDeptTreeProps"></i></a>YunzaiDeptTreeProps</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>bool</td><td>false</td></tr><tr><td>wrap</td><td>\u662F\u5426NzCard\u5305\u88F9</td><td>bool</td><td>false</td></tr><tr><td>expand</td><td>\u662F\u5426\u5C55\u5F00</td><td>bool</td><td>false</td></tr><tr><td>types</td><td>\u90E8\u95E8\u6811\u8BF7\u6C42\u7C7B\u578B</td><td>YUNZAI_DEPT_TYPES[]</td><td><span>DEPT</span></td></tr><tr><td>grade</td><td>\u662F\u5426\u5305\u542B\u5E74\u7EA7</td><td>bool</td><td>false</td></tr><tr><td>gradeId</td><td>\u9ED8\u8BA4\u5E74\u7EA7ID</td><td>string?</td><td>undefined</td></tr><tr><td>class</td><td>\u662F\u5426\u5305\u542B\u73ED\u7EA7</td><td>bool</td><td>false</td></tr><tr><td>historyClass</td><td>\u662F\u5426\u5305\u542B\u5386\u53F2\u73ED\u7EA7</td><td>bool</td><td>false</td></tr><tr><td>data</td><td>\u9759\u6001\u6570\u636E\u6E90</td><td>YunzaiDeptTree[]</td><td>[]</td></tr></tbody></table><h3 id="YunzaiDeptTree"><a class="lake-link"><i data-anchor="YunzaiDeptTree"></i></a>YunzaiDeptTree</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>key</td><td>key</td><td>string</td></tr><tr><td>icon</td><td>icon</td><td>string</td></tr><tr><td>title</td><td>title</td><td>string</td></tr><tr><td>value</td><td>value</td><td>string</td></tr><tr><td>children</td><td>children</td><td>YunzaiDeptTree[]</td></tr></tbody></table>',meta:{type:"Basic",title:"yunzai-dept-tree",subtitle:"Dept Tree",cols:1,order:1,module:"import { YunzaiDeptTreeModule } from '@yelon/bcs/yunzai-dept-tree';"},toc:[{id:"API",title:"API",h:2,children:[{id:"YunzaiDeptTreeProps",title:"YunzaiDeptTreeProps",h:3},{id:"YunzaiDeptTree",title:"YunzaiDeptTree",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u90E8\u95E8\u6811\u4E1A\u52A1\u7EC4\u4EF6</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>props</td><td>\u4F20\u5165\u53C2\u6570</td><td>YunzaiDeptTreeProps</td><td>undefined</td></tr><tr><td>onQueryComplete</td><td>\u90E8\u95E8\u6811\u67E5\u8BE2\u7ED3\u679C</td><td>EventEmitter<YunzaiDeptTree[]></td><td>undefined</td></tr><tr><td>onSelect</td><td>\u90E8\u95E8\u6811\u9009\u62E9\u7ED3\u679C</td><td>EventEmitter<YunzaiDeptTree[]></td><td>undefined</td></tr></tbody></table><h3 id="YunzaiDeptTreeProps"><a class="lake-link"><i data-anchor="YunzaiDeptTreeProps"></i></a>YunzaiDeptTreeProps</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>bool</td><td>false</td></tr><tr><td>wrap</td><td>\u662F\u5426NzCard\u5305\u88F9</td><td>bool</td><td>false</td></tr><tr><td>expand</td><td>\u662F\u5426\u5C55\u5F00</td><td>bool</td><td>false</td></tr><tr><td>types</td><td>\u90E8\u95E8\u6811\u8BF7\u6C42\u7C7B\u578B</td><td>YUNZAI_DEPT_TYPES[]</td><td><span>DEPT</span></td></tr><tr><td>grade</td><td>\u662F\u5426\u5305\u542B\u5E74\u7EA7</td><td>bool</td><td>false</td></tr><tr><td>gradeId</td><td>\u9ED8\u8BA4\u5E74\u7EA7ID</td><td>string?</td><td>undefined</td></tr><tr><td>class</td><td>\u662F\u5426\u5305\u542B\u73ED\u7EA7</td><td>bool</td><td>false</td></tr><tr><td>historyClass</td><td>\u662F\u5426\u5305\u542B\u5386\u53F2\u73ED\u7EA7</td><td>bool</td><td>false</td></tr><tr><td>data</td><td>\u9759\u6001\u6570\u636E\u6E90</td><td>YunzaiDeptTree[]</td><td>[]</td></tr></tbody></table><h3 id="YunzaiDeptTree"><a class="lake-link"><i data-anchor="YunzaiDeptTree"></i></a>YunzaiDeptTree</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>key</td><td>key</td><td>string</td></tr><tr><td>icon</td><td>icon</td><td>string</td></tr><tr><td>title</td><td>title</td><td>string</td></tr><tr><td>value</td><td>value</td><td>string</td></tr><tr><td>children</td><td>children</td><td>YunzaiDeptTree[]</td></tr></tbody></table>',meta:{type:"Basic",title:"yunzai-dept-tree",subtitle:"\u90E8\u95E8\u6811",cols:1,order:1,module:"import { YunzaiDeptTreeModule } from '@yelon/bcs/yunzai-dept-tree';"},toc:[{id:"API",title:"API",h:2,children:[{id:"YunzaiDeptTreeProps",title:"YunzaiDeptTreeProps",h:3},{id:"YunzaiDeptTree",title:"YunzaiDeptTree",h:3}]}]}},demo:!0},this.codes=[{id:"bcs-yunzai-dept-tree-static",meta:{order:0,title:{"zh-CN":"\u9759\u6001\u6570\u636E\u6E90","en-US":"static datasource"}},summary:"",code:`import {Component} from "@angular/core";
import {YunzaiDeptTreeProps, YunzaiDeptTree} from "@yelon/bcs/yunzai-dept-tree";
import {YunzaiDeptTreeModule} from "@yelon/bcs/yunzai-dept-tree";

@Component({
  selector: \`bcs-yunzai-dept-tree-static\`,
  template: \`
    <yunzai-dept-tree [props]="props" (onQueryComplete)="onQueryComplete($event)" (onSelect)="onSelect($event)"></yunzai-dept-tree>
    \`,
  styles: [],
  standalone: true,
  imports: [YunzaiDeptTreeModule]
})
export class BcsYunzaiDeptTreeStaticComponent {

  props: YunzaiDeptTreeProps = {
    multiple: true,
    wrap: true,
    expand: true,
    data: [
      {
        title: "\u4E00\u7EA7\u90E8\u95E8", key: '1', value: '1', icon: '',
        children: [
          {title: "\u4E8C\u7EA7\u90E8\u95E8", key: '21', value: '21', icon: '', children: []},
          {title: "\u4E8C\u7EA7\u90E8\u95E8", key: '22', value: '22', icon: '', children: []},
          {title: "\u4E8C\u7EA7\u90E8\u95E8", key: '23', value: '23', icon: '', children: []},
          {
            title: "\u4E8C\u7EA7\u90E8\u95E8", key: '24', value: '24', icon: '', children: [
              {title: "\u4E09\u7EA7\u90E8\u95E8", key: '31', value: '31', icon: '', children: []},
            ]
          },
        ]
      }
    ]
  }

  onQueryComplete(e: YunzaiDeptTree[]): void {
    console.log(e)
  }

  onSelect(e: YunzaiDeptTree[]): void {
    console.log(e)
  }
}`,lang:"ts",componentName:"BcsYunzaiDeptTreeStaticComponent",point:0,name:"static",urls:"packages/bcs/yunzai-dept-tree/demo/static.md",type:"demo"}]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-bcs-yunzai-dept-tree"]],hostVars:2,hostBindings:function(e,o){e&2&&E("d-block","true")},standalone:!0,features:[y],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(l(0,"app-docs",0)(1,"div",1)(2,"div",2),r(3,`
        `),l(4,"code-box",3),r(5,`
          `),z(6,"bcs-yunzai-dept-tree-static"),r(7,`
        `),p(),r(8,`
      `),p()()()),e&2&&(d("codes",o.codes)("item",o.item),s(),d("nzGutter",16),s(3),d("item",o.codes[0]),q("id",o.codes[0].id))},dependencies:[M,at,je,B,j,Q],encapsulation:2});let n=i;return n})();var qe=(()=>{let i=class i{constructor(){this.props={multiple:!0,wrap:!0,expand:!0,data:[{buildPid:"",expanded:!0,floorPid:"",isExpanded:!0,isLeaf:!1,key:"1",selected:!1,title:"1\u53F7\u697C",type:"0",children:[{buildPid:"1",expanded:!0,floorPid:"",isExpanded:!0,isLeaf:!1,key:"11",selected:!1,title:"1\u53F7\u697C1\u5355\u5143",type:"1",children:[{buildPid:"1",expanded:!0,floorPid:"11",isExpanded:!0,isLeaf:!0,key:"111",selected:!1,title:"1\u53F7\u697C1\u5355\u5143101",type:"2",children:[]}]}]}]}}onQueryComplete(t){console.log(t)}onSelect(t){console.log(t)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["bcs-yunzai-dormitory-tree-static"]],standalone:!0,features:[y],decls:3,vars:1,consts:[[3,"props","onQueryComplete","onSelect"]],template:function(e,o){e&1&&(r(0,`
    `),l(1,"yunzai-dormitory-tree",0),g("onQueryComplete",function(h){return o.onQueryComplete(h)})("onSelect",function(h){return o.onSelect(h)}),p(),r(2,`
    `)),e&2&&(s(),d("props",o.props))},dependencies:[St,_t],encapsulation:2});let n=i;return n})();var He=(()=>{let i=class i{constructor(){this.item={cols:1,urls:{"en-US":"packages/bcs/yunzai-dormitory-tree/index.en-US.md","zh-CN":"packages/bcs/yunzai-dormitory-tree/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>\u516C\u5BD3\u6811\u4E1A\u52A1\u7EC4\u4EF6</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>wrap</td><td>\u662F\u5426\u7528nz-card\u5305\u88F9</td><td>bool</td></tr><tr><td>expand</td><td>\u662F\u5426\u5C55\u5F00</td><td>bool</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>bool</td></tr><tr><td>param</td><td>\u5BBF\u820D\u5217\u8868\u67E5\u8BE2\u53C2\u6570</td><td>YunzaiDormitoryTreeParam</td></tr><tr><td>data</td><td>\u9759\u6001\u6570\u636E\u6E90</td><td>YunzaiDormitoryTree[]</td></tr></tbody></table><h3 id="YunzaiDormitoryTreeParam"><a class="lake-link"><i data-anchor="YunzaiDormitoryTreeParam"></i></a>YunzaiDormitoryTreeParam</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>isPower</td><td>\u662F\u5426\u643A\u5E26\u6743\u9650</td><td>bool</td></tr><tr><td>userId</td><td>\u7528\u6237ID</td><td>string</td></tr><tr><td>treeType</td><td>\u5BBF\u820D\u6811\u7C7B\u578B</td><td>YunzaiDormitoryTreeType</td></tr></tbody></table><h3 id="YunzaiDormitoryTreeType"><a class="lake-link"><i data-anchor="YunzaiDormitoryTreeType"></i></a>YunzaiDormitoryTreeType</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>BUILDING</td><td>\u5EFA\u7B51</td><td>0</td></tr><tr><td>BUILDING_FLOOR</td><td>\u697C\u5C42</td><td>1</td></tr><tr><td>BUILDING_FLOORS_ROOMS</td><td>\u623F\u95F4</td><td>2</td></tr></tbody></table>',meta:{type:"Basic",title:"yunzai-dormitory-tree",subtitle:"Dormitory Tree",cols:1,module:"import { YunzaiDormitoryTreeModule } from '@yelon/bcs/yunzai-dormitory-tree';"},toc:[{id:"API",title:"API",h:2,children:[{id:"YunzaiDormitoryTreeParam",title:"YunzaiDormitoryTreeParam",h:3},{id:"YunzaiDormitoryTreeType",title:"YunzaiDormitoryTreeType",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u516C\u5BD3\u6811\u4E1A\u52A1\u7EC4\u4EF6</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>wrap</td><td>\u662F\u5426\u7528nz-card\u5305\u88F9</td><td>bool</td></tr><tr><td>expand</td><td>\u662F\u5426\u5C55\u5F00</td><td>bool</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>bool</td></tr><tr><td>param</td><td>\u5BBF\u820D\u5217\u8868\u67E5\u8BE2\u53C2\u6570</td><td>YunzaiDormitoryTreeParam</td></tr><tr><td>data</td><td>\u9759\u6001\u6570\u636E\u6E90</td><td>YunzaiDormitoryTree[]</td></tr></tbody></table><h3 id="YunzaiDormitoryTreeParam"><a class="lake-link"><i data-anchor="YunzaiDormitoryTreeParam"></i></a>YunzaiDormitoryTreeParam</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>isPower</td><td>\u662F\u5426\u643A\u5E26\u6743\u9650</td><td>bool</td></tr><tr><td>userId</td><td>\u7528\u6237ID</td><td>string</td></tr><tr><td>treeType</td><td>\u5BBF\u820D\u6811\u7C7B\u578B</td><td>YunzaiDormitoryTreeType</td></tr></tbody></table><h3 id="YunzaiDormitoryTreeType"><a class="lake-link"><i data-anchor="YunzaiDormitoryTreeType"></i></a>YunzaiDormitoryTreeType</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>BUILDING</td><td>\u5EFA\u7B51</td><td>0</td></tr><tr><td>BUILDING_FLOOR</td><td>\u697C\u5C42</td><td>1</td></tr><tr><td>BUILDING_FLOORS_ROOMS</td><td>\u623F\u95F4</td><td>2</td></tr></tbody></table>',meta:{type:"Basic",title:"yunzai-dormitory-tree",subtitle:"\u516C\u5BD3\u6811",cols:1,module:"import { YunzaiDormitoryTreeModule } from '@yelon/bcs/yunzai-dormitory-tree';"},toc:[{id:"API",title:"API",h:2,children:[{id:"YunzaiDormitoryTreeParam",title:"YunzaiDormitoryTreeParam",h:3},{id:"YunzaiDormitoryTreeType",title:"YunzaiDormitoryTreeType",h:3}]}]}},demo:!0},this.codes=[{id:"bcs-yunzai-dormitory-tree-static",meta:{order:0,title:{"zh-CN":"\u9759\u6001\u6570\u636E\u6E90","en-US":"static datasource"}},summary:"",code:`import {Component} from "@angular/core";
import {YunzaiDormitoryTreeProps, YunzaiDormitoryTree} from "@yelon/bcs/yunzai-dormitory-tree";
import {YunzaiDormitoryTreeModule} from "@yelon/bcs/yunzai-dormitory-tree";

@Component({
  selector: \`bcs-yunzai-dormitory-tree-static\`,
  template: \`
    <yunzai-dormitory-tree [props]="props" (onQueryComplete)="onQueryComplete($event)" (onSelect)="onSelect($event)"></yunzai-dormitory-tree>
    \`,
  styles: [],
  standalone: true,
  imports: [YunzaiDormitoryTreeModule]
})
export class BcsYunzaiDormitoryTreeStaticComponent {
  props: YunzaiDormitoryTreeProps = {
    multiple: true,
    wrap: true,
    expand: true,
    data: [
      {
        buildPid: "",
        expanded: true,
        floorPid: "",
        isExpanded: true,
        isLeaf: false,
        key: '1',
        selected: false,
        title: "1\u53F7\u697C",
        type: "0",
        children: [
          {
            buildPid: "1",
            expanded: true,
            floorPid: "",
            isExpanded: true,
            isLeaf: false,
            key: '11',
            selected: false,
            title: "1\u53F7\u697C1\u5355\u5143",
            type: "1",
            children: [
              {
                buildPid: "1",
                expanded: true,
                floorPid: "11",
                isExpanded: true,
                isLeaf: true,
                key: '111',
                selected: false,
                title: "1\u53F7\u697C1\u5355\u5143101",
                type: "2",
                children: []
              }
            ]
          }
        ]
      }
    ]
  }

  onQueryComplete(e: YunzaiDormitoryTree[]): void {
    console.log(e)
  }

  onSelect(e: YunzaiDormitoryTree[]): void {
    console.log(e)
  }
}`,lang:"ts",componentName:"BcsYunzaiDormitoryTreeStaticComponent",point:0,name:"static",urls:"packages/bcs/yunzai-dormitory-tree/demo/static.md",type:"demo"}]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-bcs-yunzai-dormitory-tree"]],hostVars:2,hostBindings:function(e,o){e&2&&E("d-block","true")},standalone:!0,features:[y],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(l(0,"app-docs",0)(1,"div",1)(2,"div",2),r(3,`
        `),l(4,"code-box",3),r(5,`
          `),z(6,"bcs-yunzai-dormitory-tree-static"),r(7,`
        `),p(),r(8,`
      `),p()()()),e&2&&(d("codes",o.codes)("item",o.item),s(),d("nzGutter",16),s(3),d("item",o.codes[0]),q("id",o.codes[0].id))},dependencies:[M,at,qe,B,j,Q],encapsulation:2});let n=i;return n})();var Ke=(()=>{let i=class i{constructor(){this.props={wrap:!0,data:[{id:"1",name:"\u597D\u53CB\u4E00\u7EC4",userAccount:"account",data:[{userId:"1",account:"11",realName:"\u6D4B\u8BD5\u5206\u9875",userType:1,userCode:"242424234",sex:0,email:null,mobile:"******",officePhone:null,readNumber:null,status:1,displayIndex:0,idCard:"******",lastDate:"2023-07-06T09:02:20.699+00:00",operUser:null,lastLoginTime:"2023-07-12T06:31:47.000+00:00",remark:null,errorCount:0,question:null,answer:null,theme:null,roles:[]}]}]}}onSelect(t){console.log(t)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["bcs-yunzai-friend-group-static"]],standalone:!0,features:[y],decls:3,vars:1,consts:[[3,"props","onSelect"]],template:function(e,o){e&1&&(r(0,`
    `),l(1,"yunzai-friend-group",0),g("onSelect",function(h){return o.onSelect(h)}),p(),r(2,`
    `)),e&2&&(s(),d("props",o.props))},dependencies:[vt,kt],encapsulation:2});let n=i;return n})();var We=(()=>{let i=class i{constructor(){this.item={cols:1,urls:{"en-US":"packages/bcs/yunzai-friend-group/index.en-US.md","zh-CN":"packages/bcs/yunzai-friend-group/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>\u597D\u53CB\u7EC4</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>wrap</td><td>\u662F\u5426\u4F7F\u7528nz-card\u5305\u88F9</td><td>bool</td></tr><tr><td>data</td><td>\u9759\u6001\u6570\u636E\u6E90</td><td>YunzaiFriendGroup[]</td></tr></tbody></table><h3 id="YunzaiFriendGroup"><a class="lake-link"><i data-anchor="YunzaiFriendGroup"></i></a>YunzaiFriendGroup</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>id</td><td>\u597D\u53CB\u7EC4ID</td><td>string</td></tr><tr><td>name</td><td>\u597D\u53CB\u7EC4\u540D\u79F0</td><td>YunzaiFriendGroup[]</td></tr><tr><td>userAccount</td><td>\u8D26\u53F7?</td><td>string</td></tr><tr><td>data</td><td>\u7528\u6237\u7EC4\u5305\u542B \u4EBA\u5458</td><td>YunzaiTableUser[]</td></tr></tbody></table>',meta:{type:"Basic",title:"yunzai-friend-group",subtitle:"Yunzai Friend Group",cols:1,module:"import { YunzaiFriendGroupModule } from '@yelon/bcs/yunzai-friend-group';"},toc:[{id:"API",title:"API",h:2,children:[{id:"YunzaiFriendGroup",title:"YunzaiFriendGroup",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u597D\u53CB\u7EC4</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>wrap</td><td>\u662F\u5426\u4F7F\u7528nz-card\u5305\u88F9</td><td>bool</td></tr><tr><td>data</td><td>\u9759\u6001\u6570\u636E\u6E90</td><td>YunzaiFriendGroup[]</td></tr></tbody></table><h3 id="YunzaiFriendGroup"><a class="lake-link"><i data-anchor="YunzaiFriendGroup"></i></a>YunzaiFriendGroup</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>id</td><td>\u597D\u53CB\u7EC4ID</td><td>string</td></tr><tr><td>name</td><td>\u597D\u53CB\u7EC4\u540D\u79F0</td><td>YunzaiFriendGroup[]</td></tr><tr><td>userAccount</td><td>\u8D26\u53F7?</td><td>string</td></tr><tr><td>data</td><td>\u7528\u6237\u7EC4\u5305\u542B \u4EBA\u5458</td><td>YunzaiTableUser[]</td></tr></tbody></table>',meta:{type:"Basic",title:"yunzai-friend-group",subtitle:"\u597D\u53CB\u7EC4",cols:1,module:"import { YunzaiFriendGroupModule } from '@yelon/bcs/yunzai-friend-group';"},toc:[{id:"API",title:"API",h:2,children:[{id:"YunzaiFriendGroup",title:"YunzaiFriendGroup",h:3}]}]}},demo:!0},this.codes=[{id:"bcs-yunzai-friend-group-static",meta:{order:0,title:{"zh-CN":"\u9759\u6001\u6570\u636E\u6E90","en-US":"static datasource"}},summary:"",code:`import {Component} from "@angular/core";
import {YunzaiFriendGroupProps, YunzaiFriendGroup} from "@yelon/bcs/yunzai-friend-group";
import {YunzaiFriendGroupModule} from "@yelon/bcs/yunzai-friend-group";

@Component({
  selector: \`bcs-yunzai-friend-group-static\`,
  template: \`
    <yunzai-friend-group [props]="props" (onSelect)="onSelect($event)"></yunzai-friend-group>
    \`,
  styles: [],
  standalone: true,
  imports: [YunzaiFriendGroupModule]
})
export class BcsYunzaiFriendGroupStaticComponent {
  props: YunzaiFriendGroupProps = {
    wrap: true,
    data: [{
      id: "1",
      name: "\u597D\u53CB\u4E00\u7EC4",
      userAccount: "account",
      data: [{
        userId: "1",
        account: "11",
        realName: "\u6D4B\u8BD5\u5206\u9875",
        userType: 1,
        userCode: "242424234",
        sex: 0,
        email: null,
        mobile: "******",
        officePhone: null,
        readNumber: null,
        status: 1,
        displayIndex: 0,
        idCard: "******",
        lastDate: "2023-07-06T09:02:20.699+00:00",
        operUser: null,
        lastLoginTime: "2023-07-12T06:31:47.000+00:00",
        remark: null,
        errorCount: 0,
        question: null,
        answer: null,
        theme: null,
        roles: []
      }] as any
    }]
  }

  onSelect(data: YunzaiFriendGroup): void {
    console.log(data)
  }
}`,lang:"ts",componentName:"BcsYunzaiFriendGroupStaticComponent",point:0,name:"static",urls:"packages/bcs/yunzai-friend-group/demo/static.md",type:"demo"}]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-bcs-yunzai-friend-group"]],hostVars:2,hostBindings:function(e,o){e&2&&E("d-block","true")},standalone:!0,features:[y],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(l(0,"app-docs",0)(1,"div",1)(2,"div",2),r(3,`
        `),l(4,"code-box",3),r(5,`
          `),z(6,"bcs-yunzai-friend-group-static"),r(7,`
        `),p(),r(8,`
      `),p()()()),e&2&&(d("codes",o.codes)("item",o.item),s(),d("nzGutter",16),s(3),d("item",o.codes[0]),q("id",o.codes[0].id))},dependencies:[M,at,Ke,B,j,Q],encapsulation:2});let n=i;return n})();var Ze=(()=>{let i=class i{constructor(){this.item={cols:1,urls:{"en-US":"packages/bcs/yunzai-grade/index.en-US.md","zh-CN":"packages/bcs/yunzai-grade/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u67E5\u8BE2\u5B66\u5E74</p><pre class="hljs language-ts"><code>import {Component} from "@angular/core";
import {YunzaiGradeService} from "@yelon/bcs/yunzai-grade";

@Component({
    selector: \`app-demo\`,
    template: \`\`,
    styles: []
})
export class DemoComponent {

    constructor(private gradeService: YunzaiGradeService) {

    }

    test(): void {
        this.gradeService.grades().subscribe()
    }

}</code></pre></section>`,meta:{type:"Basic",title:"yunzai-grade",subtitle:"grade",cols:1},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2}]},"zh-CN":{content:`<section class="markdown"><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u67E5\u8BE2\u5B66\u5E74</p><pre class="hljs language-ts"><code>import {Component} from "@angular/core";
import {YunzaiGradeService} from "@yelon/bcs/yunzai-grade";

@Component({
    selector: \`app-demo\`,
    template: \`\`,
    styles: []
})
export class DemoComponent {

    constructor(private gradeService: YunzaiGradeService) {

    }

    test(): void {
        this.gradeService.grades().subscribe()
    }

}</code></pre></section>`,meta:{type:"Basic",title:"yunzai-grade",subtitle:"\u5B66\u5E74",cols:1},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2}]}},demo:!1},this.codes=[]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-bcs-yunzai-grade"]],hostVars:2,hostBindings:function(e,o){e&2&&E("d-block","true")},standalone:!0,features:[y],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,o){e&1&&z(0,"app-docs",0),e&2&&d("codes",o.codes)("item",o.item)},dependencies:[M],encapsulation:2});let n=i;return n})();var Je=(()=>{let i=class i{constructor(){this.item={cols:1,urls:{"en-US":"packages/bcs/yunzai-iframe-page/index.en-US.md","zh-CN":"packages/bcs/yunzai-iframe-page/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><h2 id="\u63CF\u8FF0"><a class="lake-link"><i data-anchor="\u63CF\u8FF0"></i></a>\u63CF\u8FF0</h2><p>\u67D0\u4E2A\u6A21\u5757\u4F5C\u4E3A\u5355\u4E2A\u5916\u90E8\u94FE\u63A5\u9875\u9762</p><h3 id="\u914D\u7F6E\u6B65\u9AA4"><a class="lake-link"><i data-anchor="\u914D\u7F6E\u6B65\u9AA4"></i></a>\u914D\u7F6E\u6B65\u9AA4</h3><ol><li><p>\u8FDB\u5165\u7EDF\u4E00\u95E8\u6237\u7BA1\u7406-web\u5E94\u7528\u7BA1\u7406-\u67E5\u770B\u5BFC\u822A\uFF0C\u589E\u52A0\u4E00\u4E2A\u83DC\u5355\uFF0C\u5176\u4E2D\u201C\u94FE\u63A5\u201D\u586B\u5199\u3010/iframePage\u3011\uFF1B</p></li><li><p>\u201C\u5916\u90E8\u94FE\u63A5\u201D\u5199\u8981\u5F15\u7528\u7684\u5916\u90E8\u7F51\u9875\u7684\u5730\u5740\uFF1B</p></li></ol><pre class="hljs language-ts"><code>   </code></pre></section>',meta:{type:"Basic",title:"yunzai-iframe-page",subtitle:"\u5916\u90E8\u94FE\u63A5\u9875\u9762",cols:1},toc:[{id:"\u63CF\u8FF0",title:"\u63CF\u8FF0",h:2,children:[{id:"\u914D\u7F6E\u6B65\u9AA4",title:"\u914D\u7F6E\u6B65\u9AA4",h:3}]}]},"zh-CN":{content:'<section class="markdown"><h2 id="\u63CF\u8FF0"><a class="lake-link"><i data-anchor="\u63CF\u8FF0"></i></a>\u63CF\u8FF0</h2><p>\u67D0\u4E2A\u6A21\u5757\u4F5C\u4E3A\u5355\u4E2A\u5916\u90E8\u94FE\u63A5\u9875\u9762</p><h3 id="\u914D\u7F6E\u6B65\u9AA4"><a class="lake-link"><i data-anchor="\u914D\u7F6E\u6B65\u9AA4"></i></a>\u914D\u7F6E\u6B65\u9AA4</h3><ol><li><p>\u8FDB\u5165\u7EDF\u4E00\u95E8\u6237\u7BA1\u7406-web\u5E94\u7528\u7BA1\u7406-\u67E5\u770B\u5BFC\u822A\uFF0C\u589E\u52A0\u4E00\u4E2A\u83DC\u5355\uFF0C\u5176\u4E2D\u201C\u94FE\u63A5\u201D\u586B\u5199\u3010/iframePage\u3011\uFF1B</p></li><li><p>\u201C\u5916\u90E8\u94FE\u63A5\u201D\u5199\u8981\u5F15\u7528\u7684\u5916\u90E8\u7F51\u9875\u7684\u5730\u5740\uFF1B</p></li></ol><pre class="hljs language-ts"><code>   </code></pre></section>',meta:{type:"Basic",title:"yunzai-iframe-page",subtitle:"\u5916\u90E8\u94FE\u63A5\u9875\u9762",cols:1},toc:[{id:"\u63CF\u8FF0",title:"\u63CF\u8FF0",h:2,children:[{id:"\u914D\u7F6E\u6B65\u9AA4",title:"\u914D\u7F6E\u6B65\u9AA4",h:3}]}]}},demo:!1},this.codes=[]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-bcs-yunzai-iframe-page"]],hostVars:2,hostBindings:function(e,o){e&2&&E("d-block","true")},standalone:!0,features:[y],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,o){e&1&&z(0,"app-docs",0),e&2&&d("codes",o.codes)("item",o.item)},dependencies:[M],encapsulation:2});let n=i;return n})();var Xe=(()=>{let i=class i{constructor(){this.props={multiple:!0,wrap:!0,expand:!0,data:[{title:"\u89D2\u8272\u7EC4",key:"1",code:"1",leaf:!1,type:"dept",children:[{title:"\u89D2\u82721",key:"21",code:"21",leaf:!0,type:"",children:[]}]}]}}onQueryComplete(t){console.log(t)}onSelect(t){console.log(t)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["bcs-yunzai-role-tree-static"]],standalone:!0,features:[y],decls:3,vars:1,consts:[[3,"props","onQueryComplete","onSelect"]],template:function(e,o){e&1&&(r(0,`
    `),l(1,"yunzai-role-tree",0),g("onQueryComplete",function(h){return o.onQueryComplete(h)})("onSelect",function(h){return o.onSelect(h)}),p(),r(2,`
    `)),e&2&&(s(),d("props",o.props))},dependencies:[Dt,Yt],encapsulation:2});let n=i;return n})();var tn=(()=>{let i=class i{constructor(){this.item={cols:1,urls:{"en-US":"packages/bcs/yunzai-role-tree/index.en-US.md","zh-CN":"packages/bcs/yunzai-role-tree/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>\u89D2\u8272\u6811\u4E1A\u52A1\u7EC4\u4EF6</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>wrap</td><td>\u662F\u5426\u4F7F\u7528nz-card\u5305\u88F9</td><td>bool</td></tr><tr><td>expand</td><td>\u662F\u5426\u5C55\u5F00</td><td>bool</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>bool</td></tr><tr><td>roleGroupCode</td><td>\u89D2\u8272\u7EC4\u4EE3\u7801</td><td>string</td></tr><tr><td>data</td><td>\u9759\u6001\u6570\u636E\u6E90</td><td>YunzaiRoleTree[]</td></tr></tbody></table><h3 id="YunzaiRoleTree"><a class="lake-link"><i data-anchor="YunzaiRoleTree"></i></a>YunzaiRoleTree</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>code</td><td>\u89D2\u8272\u7F16\u7801</td><td>string</td></tr><tr><td>key</td><td>\u89D2\u8272key</td><td>string</td></tr><tr><td>leaf</td><td>\u662F\u5426\u4E3A\u5B50\u8282\u70B9</td><td>bool</td></tr><tr><td>title</td><td>\u89D2\u8272\u540D\u79F0</td><td>string</td></tr><tr><td>type</td><td>\u89D2\u8272\u7C7B\u578B</td><td>string</td></tr><tr><td>children</td><td>\u597D\u53CB\u7EC4ID</td><td>YunzaiRoleTree []</td></tr></tbody></table>',meta:{type:"Basic",title:"yunzai-role-tree",subtitle:"Role Tree",cols:1,module:"import { YunzaiRoleTreeModule } from '@yelon/bcs/yunzai-role-tree';"},toc:[{id:"API",title:"API",h:2,children:[{id:"YunzaiRoleTree",title:"YunzaiRoleTree",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u89D2\u8272\u6811\u4E1A\u52A1\u7EC4\u4EF6</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>wrap</td><td>\u662F\u5426\u4F7F\u7528nz-card\u5305\u88F9</td><td>bool</td></tr><tr><td>expand</td><td>\u662F\u5426\u5C55\u5F00</td><td>bool</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>bool</td></tr><tr><td>roleGroupCode</td><td>\u89D2\u8272\u7EC4\u4EE3\u7801</td><td>string</td></tr><tr><td>data</td><td>\u9759\u6001\u6570\u636E\u6E90</td><td>YunzaiRoleTree[]</td></tr></tbody></table><h3 id="YunzaiRoleTree"><a class="lake-link"><i data-anchor="YunzaiRoleTree"></i></a>YunzaiRoleTree</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>code</td><td>\u89D2\u8272\u7F16\u7801</td><td>string</td></tr><tr><td>key</td><td>\u89D2\u8272key</td><td>string</td></tr><tr><td>leaf</td><td>\u662F\u5426\u4E3A\u5B50\u8282\u70B9</td><td>bool</td></tr><tr><td>title</td><td>\u89D2\u8272\u540D\u79F0</td><td>string</td></tr><tr><td>type</td><td>\u89D2\u8272\u7C7B\u578B</td><td>string</td></tr><tr><td>children</td><td>\u597D\u53CB\u7EC4ID</td><td>YunzaiRoleTree []</td></tr></tbody></table>',meta:{type:"Basic",title:"yunzai-role-tree",subtitle:"\u89D2\u8272\u6811",cols:1,module:"import { YunzaiRoleTreeModule } from '@yelon/bcs/yunzai-role-tree';"},toc:[{id:"API",title:"API",h:2,children:[{id:"YunzaiRoleTree",title:"YunzaiRoleTree",h:3}]}]}},demo:!0},this.codes=[{id:"bcs-yunzai-role-tree-static",meta:{order:0,title:{"zh-CN":"\u9759\u6001\u6570\u636E\u6E90","en-US":"static datasource"}},summary:"",code:`import {Component} from "@angular/core";
import {YunzaiRoleTreeProps, YunzaiRoleTree} from "@yelon/bcs/yunzai-role-tree";
import {YunzaiRoleTreeModule} from "@yelon/bcs/yunzai-role-tree";

@Component({
  selector: \`bcs-yunzai-role-tree-static\`,
  template: \`
    <yunzai-role-tree [props]="props" (onQueryComplete)="onQueryComplete($event)" (onSelect)="onSelect($event)"></yunzai-role-tree>
    \`,
  styles: [],
  standalone: true,
  imports: [YunzaiRoleTreeModule]
})
export class BcsYunzaiRoleTreeStaticComponent {

  props: YunzaiRoleTreeProps = {
    multiple: true,
    wrap: true,
    expand: true,
    data: [
      {
        title: "\u89D2\u8272\u7EC4", key: '1', code: "1", leaf: false, type: 'dept',
        children: [
          {title: "\u89D2\u82721", key: '21', code: "21", leaf: true, type: '', children: []},
        ]
      }
    ]
  }

  onQueryComplete(e: YunzaiRoleTree[]): void {
    console.log(e)
  }

  onSelect(e: YunzaiRoleTree[]): void {
    console.log(e)
  }
}`,lang:"ts",componentName:"BcsYunzaiRoleTreeStaticComponent",point:0,name:"static",urls:"packages/bcs/yunzai-role-tree/demo/static.md",type:"demo"}]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-bcs-yunzai-role-tree"]],hostVars:2,hostBindings:function(e,o){e&2&&E("d-block","true")},standalone:!0,features:[y],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(l(0,"app-docs",0)(1,"div",1)(2,"div",2),r(3,`
        `),l(4,"code-box",3),r(5,`
          `),z(6,"bcs-yunzai-role-tree-static"),r(7,`
        `),p(),r(8,`
      `),p()()()),e&2&&(d("codes",o.codes)("item",o.item),s(),d("nzGutter",16),s(3),d("item",o.codes[0]),q("id",o.codes[0].id))},dependencies:[M,at,Xe,B,j,Q],encapsulation:2});let n=i;return n})();var en=(()=>{let i=class i{constructor(){this.props={wrap:!0,data:[{userId:"1",account:"11",realName:"\u6D4B\u8BD5\u5206\u9875",userType:1,userCode:"242424234",sex:0,email:null,mobile:"******",officePhone:null,readNumber:null,status:1,displayIndex:0,idCard:"******",lastDate:"2023-07-06T09:02:20.699+00:00",operUser:null,lastLoginTime:"2023-07-12T06:31:47.000+00:00",remark:null,errorCount:0,question:null,answer:null,theme:null,roles:[]}],filteredColumns:[],customColumns:[],additionalColumns:[],list:!0,scroll:{x:"1000",y:"1200"},check:{disable:!1,data:[],pageCheck:!0}}}onChecked(t){console.log(t)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["bcs-yunzai-table-user-static"]],standalone:!0,features:[y],decls:3,vars:1,consts:[[3,"props","onChecked"]],template:function(e,o){e&1&&(r(0,`
    `),l(1,"yunzai-table-user",0),g("onChecked",function(h){return o.onChecked(h)}),p(),r(2,`
    `)),e&2&&(s(),d("props",o.props))},dependencies:[wt,It],encapsulation:2});let n=i;return n})();var nn=(()=>{let i=class i{constructor(){this.item={cols:1,urls:{"en-US":"packages/bcs/yunzai-table-user/index.en-US.md","zh-CN":"packages/bcs/yunzai-table-user/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>\u4EBA\u5458\u5217\u8868</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>wrap</td><td>\u662F\u5426\u4F7F\u7528nz-card\u5305\u88F9</td><td>bool</td></tr><tr><td>data</td><td>\u9759\u6001\u6570\u636E\u6E90</td><td>YunzaiTableUser[]</td></tr><tr><td>userIds</td><td>\u5DF2\u7ECF\u88AB\u9009\u62E9\u7684\u7528\u6237id\u96C6\u5408</td><td>string[]</td></tr><tr><td>filteredColumns</td><td>\u5217\u8FC7\u6EE4(\u901A\u8FC7index\u5C5E\u6027)</td><td>string[]</td></tr><tr><td>customColumns</td><td>\u81EA\u5B9A\u4E49\u5217(\u901A\u8FC7index\u5C5E\u6027)</td><td>STColumn[]</td></tr><tr><td>additionalColumns</td><td>\u9644\u52A0\u5217</td><td>STColumn[]</td></tr><tr><td>page</td><td>\u5206\u9875</td><td><code>{pageNum:number,pageSize:number,pageParam:{}}</code></td></tr><tr><td>list</td><td>\u662F\u5426\u663E\u793A\u53F3\u4FA7\u5217\u8868</td><td>bool</td></tr><tr><td>scroll</td><td>\u6EDA\u52A8\u8DDD\u79BB</td><td><code>{x:string,y:string}</code></td></tr><tr><td>check</td><td>\u9009\u6846</td><td><code>{disable:boolean,data:<a data-toc="YunzaiTableUser">YunzaiTableUser</a>[],pageCheck:boolean}</code></td></tr></tbody></table><h3 id="YunzaiTableUser"><a class="lake-link"><i data-anchor="YunzaiTableUser"></i></a>YunzaiTableUser</h3><table><thead><tr><th>\u6210\u5458</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>userId</td><td>string</td></tr><tr><td>account</td><td>string</td></tr><tr><td>realName</td><td>string</td></tr><tr><td>userType</td><td>number</td></tr><tr><td>userCode</td><td>string</td></tr><tr><td>sex</td><td>number</td></tr><tr><td>email</td><td>string</td></tr><tr><td>mobile</td><td>string</td></tr><tr><td>officePhone</td><td>string</td></tr><tr><td>readNumber</td><td>number</td></tr><tr><td>status</td><td>number</td></tr><tr><td>displayIndex</td><td>number</td></tr><tr><td>idCard</td><td>string</td></tr><tr><td>lastDate</td><td>string</td></tr><tr><td>operUser</td><td>string</td></tr><tr><td>lastLoginTime</td><td>string</td></tr><tr><td>remark</td><td>string</td></tr><tr><td>errorCount</td><td>number</td></tr><tr><td>question</td><td>string</td></tr><tr><td>answer</td><td>string</td></tr><tr><td>theme</td><td>string</td></tr><tr><td>roles</td><td>YunzaiTableUserRole[]</td></tr><tr><td>roleIdList</td><td>string[]</td></tr><tr><td>dept</td><td>YunzaiTableUserDept</td></tr><tr><td>deptId</td><td>string</td></tr><tr><td>isDelete</td><td>number</td></tr><tr><td>avatarId</td><td>string</td></tr><tr><td>bgimgId</td><td>string</td></tr><tr><td>profile</td><td>string</td></tr><tr><td>passwordStrength</td><td>string</td></tr><tr><td>lastLoginIp</td><td>string</td></tr></tbody></table><h3 id="YunzaiTableUserRole"><a class="lake-link"><i data-anchor="YunzaiTableUserRole"></i></a>YunzaiTableUserRole</h3><table><thead><tr><th>\u6210\u5458</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>createdDate</td><td>string</td></tr><tr><td>id</td><td>string</td></tr><tr><td>roleName</td><td>string</td></tr><tr><td>roleValue</td><td>string</td></tr><tr><td>status</td><td>number</td></tr><tr><td>roleDesc</td><td>string</td></tr><tr><td>displayIndex</td><td>number</td></tr><tr><td>landingPageUrl</td><td>string</td></tr><tr><td>roleGroups</td><td>any</td></tr><tr><td>thisDepartment</td><td>bool</td></tr><tr><td>onlyOne</td><td>bool</td></tr><tr><td>onlyDeptOne</td><td>bool</td></tr><tr><td>systemFlag</td><td>number</td></tr></tbody></table><h3 id="YunzaiTableUserDept"><a class="lake-link"><i data-anchor="YunzaiTableUserDept"></i></a>YunzaiTableUserDept</h3><table><thead><tr><th>\u6210\u5458</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>createdDate</td><td>string</td></tr><tr><td>deptId</td><td>string</td></tr><tr><td>deptName</td><td>string</td></tr><tr><td>deptType</td><td>string</td></tr><tr><td>deptComment</td><td>string</td></tr><tr><td>leaf</td><td>any</td></tr><tr><td>displayIndex</td><td>string</td></tr><tr><td>deptCode</td><td>string</td></tr><tr><td>status</td><td>number</td></tr><tr><td>deptLevel</td><td>any</td></tr><tr><td>children</td><td>YunzaiTableUserDept[]</td></tr><tr><td>pid</td><td>string</td></tr><tr><td>expand</td><td>bool</td></tr></tbody></table>',meta:{type:"Basic",title:"yunzai-table-user",subtitle:"Table User",cols:1,module:'import { YunzaiTableUserModule } from "@yelon/bcs/yunzai-table-user";'},toc:[{id:"API",title:"API",h:2,children:[{id:"YunzaiTableUser",title:"YunzaiTableUser",h:3},{id:"YunzaiTableUserRole",title:"YunzaiTableUserRole",h:3},{id:"YunzaiTableUserDept",title:"YunzaiTableUserDept",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4EBA\u5458\u5217\u8868</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>wrap</td><td>\u662F\u5426\u4F7F\u7528nz-card\u5305\u88F9</td><td>bool</td></tr><tr><td>data</td><td>\u9759\u6001\u6570\u636E\u6E90</td><td>YunzaiTableUser[]</td></tr><tr><td>userIds</td><td>\u5DF2\u7ECF\u88AB\u9009\u62E9\u7684\u7528\u6237id\u96C6\u5408</td><td>string[]</td></tr><tr><td>filteredColumns</td><td>\u5217\u8FC7\u6EE4(\u901A\u8FC7index\u5C5E\u6027)</td><td>string[]</td></tr><tr><td>customColumns</td><td>\u81EA\u5B9A\u4E49\u5217(\u901A\u8FC7index\u5C5E\u6027)</td><td>STColumn[]</td></tr><tr><td>additionalColumns</td><td>\u9644\u52A0\u5217</td><td>STColumn[]</td></tr><tr><td>page</td><td>\u5206\u9875</td><td><code>{pageNum:number,pageSize:number,pageParam:{}}</code></td></tr><tr><td>list</td><td>\u662F\u5426\u663E\u793A\u53F3\u4FA7\u5217\u8868</td><td>bool</td></tr><tr><td>scroll</td><td>\u6EDA\u52A8\u8DDD\u79BB</td><td><code>{x:string,y:string}</code></td></tr><tr><td>check</td><td>\u9009\u6846</td><td><code>{disable:boolean,data:<a data-toc="YunzaiTableUser">YunzaiTableUser</a>[],pageCheck:boolean}</code></td></tr></tbody></table><h3 id="YunzaiTableUser"><a class="lake-link"><i data-anchor="YunzaiTableUser"></i></a>YunzaiTableUser</h3><table><thead><tr><th>\u6210\u5458</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>userId</td><td>string</td></tr><tr><td>account</td><td>string</td></tr><tr><td>realName</td><td>string</td></tr><tr><td>userType</td><td>number</td></tr><tr><td>userCode</td><td>string</td></tr><tr><td>sex</td><td>number</td></tr><tr><td>email</td><td>string</td></tr><tr><td>mobile</td><td>string</td></tr><tr><td>officePhone</td><td>string</td></tr><tr><td>readNumber</td><td>number</td></tr><tr><td>status</td><td>number</td></tr><tr><td>displayIndex</td><td>number</td></tr><tr><td>idCard</td><td>string</td></tr><tr><td>lastDate</td><td>string</td></tr><tr><td>operUser</td><td>string</td></tr><tr><td>lastLoginTime</td><td>string</td></tr><tr><td>remark</td><td>string</td></tr><tr><td>errorCount</td><td>number</td></tr><tr><td>question</td><td>string</td></tr><tr><td>answer</td><td>string</td></tr><tr><td>theme</td><td>string</td></tr><tr><td>roles</td><td>YunzaiTableUserRole[]</td></tr><tr><td>roleIdList</td><td>string[]</td></tr><tr><td>dept</td><td>YunzaiTableUserDept</td></tr><tr><td>deptId</td><td>string</td></tr><tr><td>isDelete</td><td>number</td></tr><tr><td>avatarId</td><td>string</td></tr><tr><td>bgimgId</td><td>string</td></tr><tr><td>profile</td><td>string</td></tr><tr><td>passwordStrength</td><td>string</td></tr><tr><td>lastLoginIp</td><td>string</td></tr></tbody></table><h3 id="YunzaiTableUserRole"><a class="lake-link"><i data-anchor="YunzaiTableUserRole"></i></a>YunzaiTableUserRole</h3><table><thead><tr><th>\u6210\u5458</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>createdDate</td><td>string</td></tr><tr><td>id</td><td>string</td></tr><tr><td>roleName</td><td>string</td></tr><tr><td>roleValue</td><td>string</td></tr><tr><td>status</td><td>number</td></tr><tr><td>roleDesc</td><td>string</td></tr><tr><td>displayIndex</td><td>number</td></tr><tr><td>landingPageUrl</td><td>string</td></tr><tr><td>roleGroups</td><td>any</td></tr><tr><td>thisDepartment</td><td>bool</td></tr><tr><td>onlyOne</td><td>bool</td></tr><tr><td>onlyDeptOne</td><td>bool</td></tr><tr><td>systemFlag</td><td>number</td></tr></tbody></table><h3 id="YunzaiTableUserDept"><a class="lake-link"><i data-anchor="YunzaiTableUserDept"></i></a>YunzaiTableUserDept</h3><table><thead><tr><th>\u6210\u5458</th><th>\u6570\u636E\u7C7B\u578B</th></tr></thead><tbody><tr><td>createdDate</td><td>string</td></tr><tr><td>deptId</td><td>string</td></tr><tr><td>deptName</td><td>string</td></tr><tr><td>deptType</td><td>string</td></tr><tr><td>deptComment</td><td>string</td></tr><tr><td>leaf</td><td>any</td></tr><tr><td>displayIndex</td><td>string</td></tr><tr><td>deptCode</td><td>string</td></tr><tr><td>status</td><td>number</td></tr><tr><td>deptLevel</td><td>any</td></tr><tr><td>children</td><td>YunzaiTableUserDept[]</td></tr><tr><td>pid</td><td>string</td></tr><tr><td>expand</td><td>bool</td></tr></tbody></table>',meta:{type:"Basic",title:"yunzai-table-user",subtitle:"\u4EBA\u5458\u5217\u8868",cols:1,module:'import { YunzaiTableUserModule } from "@yelon/bcs/yunzai-table-user";'},toc:[{id:"API",title:"API",h:2,children:[{id:"YunzaiTableUser",title:"YunzaiTableUser",h:3},{id:"YunzaiTableUserRole",title:"YunzaiTableUserRole",h:3},{id:"YunzaiTableUserDept",title:"YunzaiTableUserDept",h:3}]}]}},demo:!0},this.codes=[{id:"bcs-yunzai-table-user-static",meta:{order:0,title:{"zh-CN":"\u9759\u6001\u6570\u636E\u6E90","en-US":"static datasource"}},summary:"",code:`import {Component} from "@angular/core";
import {YunzaiTableUserProps, YunzaiTableUser} from "@yelon/bcs/yunzai-table-user";
import {YunzaiTableUserModule} from "@yelon/bcs/yunzai-table-user";

@Component({
  selector: \`bcs-yunzai-table-user-static\`,
  template: \`
    <yunzai-table-user [props]="props" (onChecked)="onChecked($event)"></yunzai-table-user>
    \`,
  styles: [],
  standalone: true,
  imports: [YunzaiTableUserModule]
})
export class BcsYunzaiTableUserStaticComponent {
  props: YunzaiTableUserProps = {
    wrap: true,
    data: [{
      userId: "1",
      account: "11",
      realName: "\u6D4B\u8BD5\u5206\u9875",
      userType: 1,
      userCode: "242424234",
      sex: 0,
      email: null,
      mobile: "******",
      officePhone: null,
      readNumber: null,
      status: 1,
      displayIndex: 0,
      idCard: "******",
      lastDate: "2023-07-06T09:02:20.699+00:00",
      operUser: null,
      lastLoginTime: "2023-07-12T06:31:47.000+00:00",
      remark: null,
      errorCount: 0,
      question: null,
      answer: null,
      theme: null,
      roles: []
    }] as any,
    filteredColumns: [],
    customColumns: [],
    additionalColumns: [],
    list: true,
    scroll: {
      x: '1000',
      y: '1200'
    },
    check: {
      disable: false,
      data: [],
      pageCheck: true
    }
  }

  onChecked(data: YunzaiTableUser[]): void {
    console.log(data)
  }
}`,lang:"ts",componentName:"BcsYunzaiTableUserStaticComponent",point:0,name:"static",urls:"packages/bcs/yunzai-table-user/demo/static.md",type:"demo"}]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-bcs-yunzai-table-user"]],hostVars:2,hostBindings:function(e,o){e&2&&E("d-block","true")},standalone:!0,features:[y],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,o){e&1&&(l(0,"app-docs",0)(1,"div",1)(2,"div",2),r(3,`
        `),l(4,"code-box",3),r(5,`
          `),z(6,"bcs-yunzai-table-user-static"),r(7,`
        `),p(),r(8,`
      `),p()()()),e&2&&(d("codes",o.codes)("item",o.item),s(),d("nzGutter",16),s(3),d("item",o.codes[0]),q("id",o.codes[0].id))},dependencies:[M,at,en,B,j,Q],encapsulation:2});let n=i;return n})();var rn=(()=>{let i=class i{constructor(){this.item={cols:1,urls:{"en-US":"packages/bcs/docs/getting-started.en-US.md","zh-CN":"packages/bcs/docs/getting-started.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"></section>',meta:{order:1,title:"Getting Started",type:"Documents"},toc:[]},"zh-CN":{content:'<section class="markdown"></section>',meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",type:"Documents"},toc:[]}},demo:!1},this.codes=[]}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-bcs-getting-started"]],hostVars:2,hostBindings:function(e,o){e&2&&E("d-block","true")},standalone:!0,features:[y],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,o){e&1&&z(0,"app-docs",0),e&2&&d("codes",o.codes)("item",o.item)},dependencies:[M],encapsulation:2});let n=i;return n})();var nl=[{path:"",component:Te,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"yunzai-contact",redirectTo:"yunzai-contact/zh",pathMatch:"full"},{path:"yunzai-contact/:lang",component:Qe},{path:"yunzai-dept-tree",redirectTo:"yunzai-dept-tree/zh",pathMatch:"full"},{path:"yunzai-dept-tree/:lang",component:$e},{path:"yunzai-dormitory-tree",redirectTo:"yunzai-dormitory-tree/zh",pathMatch:"full"},{path:"yunzai-dormitory-tree/:lang",component:He},{path:"yunzai-friend-group",redirectTo:"yunzai-friend-group/zh",pathMatch:"full"},{path:"yunzai-friend-group/:lang",component:We},{path:"yunzai-grade",redirectTo:"yunzai-grade/zh",pathMatch:"full"},{path:"yunzai-grade/:lang",component:Ze},{path:"yunzai-iframe-page",redirectTo:"yunzai-iframe-page/zh",pathMatch:"full"},{path:"yunzai-iframe-page/:lang",component:Je},{path:"yunzai-role-tree",redirectTo:"yunzai-role-tree/zh",pathMatch:"full"},{path:"yunzai-role-tree/:lang",component:tn},{path:"yunzai-table-user",redirectTo:"yunzai-table-user/zh",pathMatch:"full"},{path:"yunzai-table-user/:lang",component:nn},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:rn}]}];export{nl as routes};
