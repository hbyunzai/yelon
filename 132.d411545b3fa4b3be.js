"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[132],{17132:(Q,y,i)=>{i.r(y),i.d(y,{DevTestModule:()=>I});var c=i(52787),Z=i(9857),t=i(65879);let C=(()=>{class n{_n(){console.log("n")}static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-demo"]],decls:0,vars:0,template:function(e,s){},encapsulation:2})}return n})();var T=i(18750),U=i(42840),z=i(70855),k=i(41958),m=i(96814);let A=(()=>{class n{constructor(o){this.srv=o}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(Z.xZ))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["dev-home"]],decls:22,vars:4,consts:[[3,"autoBreadcrumb"],[1,"mb-md"],["nz-button","",3,"click"]],template:function(e,s){1&e&&(t._UZ(0,"page-header",0),t._uU(1," home "),t.TgZ(2,"div",1),t._uU(3),t.ALo(4,"json"),t.qZA(),t.TgZ(5,"div",1)(6,"button",2),t.NdJ("click",function(){return s.srv.toggleCollapsed()}),t._uU(7,"\u5207\u6362\u6298\u53e0"),t.qZA(),t.TgZ(8,"button",2),t.NdJ("click",function(){return s.srv.setOptions({hideHeader:!0})}),t._uU(9,"\u9690\u85cf\u9876\u90e8"),t.qZA(),t.TgZ(10,"button",2),t.NdJ("click",function(){return s.srv.setOptions({hideAside:!0})}),t._uU(11,"\u9690\u85cf\u4fa7\u8fb9\u680f"),t.qZA(),t.TgZ(12,"button",2),t.NdJ("click",function(){return s.srv.setOptions({hideHeader:!0,hideAside:!0})}),t._uU(13,"\u9690\u85cf\u9876\u90e8\u4e0e\u4fa7\u8fb9\u680f"),t.qZA(),t.TgZ(14,"button",2),t.NdJ("click",function(){return s.srv.setOptions({showHeaderCollapse:!0})}),t._uU(15,"\u663e\u793a\u9876\u90e8\u6298\u53e0\u5f00\u5173"),t.qZA(),t.TgZ(16,"button",2),t.NdJ("click",function(){return s.srv.setOptions({showSiderCollapse:!0})}),t._uU(17,"\u663e\u793a\u4fa7\u8fb9\u680f\u5e95\u90e8\u6298\u53e0\u5f00\u5173"),t.qZA(),t.TgZ(18,"button",2),t.NdJ("click",function(){return s.srv.setOptions({showHeaderCollapse:!0,showSiderCollapse:!0})}),t._uU(19,"\u663e\u793a\u9876\u90e8\u4e0e\u4fa7\u8fb9\u680f\u5e95\u90e8\u6298\u53e0\u5f00\u5173"),t.qZA(),t.TgZ(20,"button",2),t.NdJ("click",function(){return s.srv.setOptions({})}),t._uU(21,"\u6062\u590d\u9ed8\u8ba4"),t.qZA()()),2&e&&(t.Q6J("autoBreadcrumb",!1),t.xp6(3),t.hij(" options: ",t.lcZ(4,2,s.srv.options)," "))},dependencies:[T.q,U.ix,z.w,k.dQ,m.Ts],encapsulation:2})}return n})();var l=i(14715),h=i(980),D=i(97940),x=i(90551),L=i(43460),E=i(31229),H=i(52500),_=i(73460),b=i(62787),O=i(96928),S=i(91421),B=i(45469),J=i(96674);function N(n,M){if(1&n){const o=t.EpF();t.TgZ(0,"layout-default-top-menu-item",12),t.NdJ("click",function(){const a=t.CHM(o).$implicit,r=t.oxw();return t.KtG(r.changeMenu(a.key))}),t._UZ(1,"i",3),t._uU(2),t.qZA()}if(2&n){const o=M.$implicit;t.Q6J("selected",o.selected)("disabled",o.disabled),t.xp6(2),t.hij(" ",o.label," ")}}function w(n,M){if(1&n&&(t.TgZ(0,"div",13),t._UZ(1,"nz-avatar",14),t.TgZ(2,"div",15)(3,"strong"),t._uU(4),t.qZA(),t.TgZ(5,"p",16),t._uU(6),t.qZA()()(),t.TgZ(7,"nz-dropdown-menu",null,17)(9,"ul",18)(10,"li",19),t._uU(11),t.qZA(),t.TgZ(12,"li",20),t._uU(13),t.qZA()()()),2&n){const o=t.MAs(8),e=t.oxw();t.Q6J("nzDropdownMenu",o),t.xp6(1),t.Q6J("nzSrc",e.user.avatar),t.xp6(3),t.Oqu(e.user.name),t.xp6(2),t.Oqu(e.user.email),t.xp6(5),t.Oqu("menu.account.center"),t.xp6(2),t.Oqu("menu.account.settings")}}const R=[l.LBP,l._ry,l.rHg,l.M4u,l.rk5,l.SFb,l.OeK,l.nZ9,l.zdJ,l.ECR,l.ItN,l.RU0,l.u8X,l.s4U,l.yhW];let F=(()=>{class n{get user(){return this.settings.user}constructor(o,e,s,a,r,d,p){this.menuSrv=e,this.settings=s,this.msgSrv=a,this.router=r,this.i18n=d,this.rtl=p,this.options={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",hideHeader:!1,showHeaderCollapse:!1,showSiderCollapse:!0},this.lang="zh-CN",this.topMenus=[{key:"",label:"Default",selected:!0},{key:"bus",label:"Bus",selected:!1},{key:"disabled",label:"Disabbled",disabled:!0}],this.menus=[{text:"test",group:!0,children:[{text:"Dashboard-DISABLED",link:"/dev/home",icon:"anticon anticon-dashboard",i18n:"app.header.menu.home",badge:5},{text:"\u6d4b\u8bd5view1-id",link:"/dev/view/1",icon:"anticon anticon-appstore"},{text:"\u6d4b\u8bd5view2-id",link:"/dev/view/2",icon:"anticon anticon-appstore"},{text:"lazy\u6d4b\u8bd51",link:"/dev/lazy/p1",icon:"anticon anticon-appstore"},{text:"lazy\u6d4b\u8bd52",link:"/dev/lazy/p2",icon:"anticon anticon-appstore"},{text:"lazy\u6d4b\u8bd5view1-id",link:"/dev/lazy/1/view",icon:"anticon anticon-appstore"},{text:"lazy\u6d4b\u8bd5view2-id",link:"/dev/lazy/2/view",icon:"anticon anticon-appstore"},{text:"Level1",link:"#",icon:"anticon anticon-appstore",children:[{text:"Level2",link:"#",children:[{text:"Level3A",link:"/dev/l1"},{text:"Level3B-DISABLED",link:"/dev/l1",disabled:!0}]},{text:"Level2-DISABLED",link:"/dev/l2",disabled:!0}]},{text:"ABC",icon:"anticon anticon-appstore",children:[{text:"Reuse Tab1",link:"/dev/l1",i18n:"app.header.menu.docs"},{text:"Reuse Tab2",link:"/dev/l2"},{text:"Reuse Tab3",link:"/dev/l3"},{text:"Reuse Tab4",link:"/dev/l4"},{text:"Reuse Tab5",link:"/dev/l5"},{text:"Reuse Tab6",link:"/dev/l6"},{text:"Reuse Tab7",link:"/dev/l7"},{text:"Ellipsis",link:"/dev/l8"}]},{text:"LIST",icon:"anticon anticon-appstore",children:[{text:"list",link:"/dev/list"},{text:"list/item",link:"/dev/list/item"}]}]}],this.customContextMenu=[{id:"custom1",title:"\u81ea\u5b9a\u4e491",fn:(g,f)=>{console.log("\u81ea\u5b9a\u4e491",g,f)}},{id:"custom2",title:"\u81ea\u5b9a\u4e492",disabled:()=>!0,fn:(g,f)=>{console.log("\u81ea\u5b9a\u4e492",g,f)}}],o.addIcon(...R)}changeMenu(o){this.menuSrv.add(""===o?(0,D.p$)(this.menus):[{text:"test",group:!0,children:[{text:`TYPE - ${o}`,link:"/dev/view/1",icon:"anticon anticon-appstore"}]}]);for(let e of this.topMenus)e.selected=e.key===o;this.loadFirstValidMenu()}toggleCollapsedSideabar(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}toggleLang(){this.lang="zh-CN"===this.lang?"en-US":"zh-CN",this.i18n.use(this.lang)}ngOnInit(){this.menuSrv.add((0,D.p$)(this.menus))}loadFirstValidMenu(){let o;this.menuSrv.visit(this.menuSrv.menus,e=>{null==o&&!0!==e.hide&&null!=e.link&&e.link.length>0&&(o=e)}),null!=o&&this.router.navigateByUrl(o.link)}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(x.H5),t.Y36(h.hl),t.Y36(h.gb),t.Y36(L.dD),t.Y36(c.F0),t.Y36(h.FB),t.Y36(h.aP))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["dev-layout"]],hostVars:2,hostBindings:function(e,s){2&e&&t.ekj("yunzai-default",!0)},decls:19,vars:8,consts:[[3,"options","asideUser"],["direction","left"],["href","//github.com/hbyunzai/ng-yunzai","target","_blank",1,"yunzai-default__nav-item"],["nz-icon","","nzType","github"],["direction","middle"],[3,"selected","disabled","click",4,"ngFor","ngForOf"],["direction","right"],[1,"yunzai-default__nav-item",3,"click"],["asideUserTpl",""],[3,"mode","customContextMenu"],["reuseTab",""],[3,"activate","attach"],[3,"selected","disabled","click"],["nz-dropdown","","nzTrigger","click",1,"yunzai-default__aside-user",3,"nzDropdownMenu"],[1,"yunzai-default__aside-user-avatar",3,"nzSrc"],[1,"yunzai-default__aside-user-info"],[1,"mb0"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","","routerLink","/pro/account/center"],["nz-menu-item","","routerLink","/pro/account/settings"]],template:function(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"layout-default",0)(1,"layout-default-header-item",1)(2,"a",2),t._UZ(3,"i",3),t.qZA()(),t.TgZ(4,"layout-default-header-item",4),t.YNc(5,N,3,3,"layout-default-top-menu-item",5),t.qZA(),t.TgZ(6,"layout-default-header-item",6)(7,"a",7),t.NdJ("click",function(){return s.rtl.toggle()}),t._uU(8),t.ALo(9,"uppercase"),t.qZA()(),t.TgZ(10,"layout-default-header-item",6)(11,"a",2),t._uU(12," githbu "),t.qZA()(),t.YNc(13,w,14,6,"ng-template",null,8,t.W1O),t._UZ(15,"reuse-tab",9,10),t.TgZ(17,"router-outlet",11),t.NdJ("activate",function(d){t.CHM(a);const p=t.MAs(16);return t.KtG(p.activate(d))})("attach",function(d){t.CHM(a);const p=t.MAs(16);return t.KtG(p.activate(d))}),t.qZA()(),t._UZ(18,"setting-drawer")}if(2&e){const a=t.MAs(14);t.Q6J("options",s.options)("asideUser",a),t.xp6(5),t.Q6J("ngForOf",s.topMenus),t.xp6(3),t.Oqu(t.lcZ(9,6,s.rtl.nextDir)),t.xp6(7),t.Q6J("mode",2)("customContextMenu",s.customContextMenu)}},dependencies:[m.sg,c.lC,c.rH,E.g,H.w,z.w,_.wO,_.u9,b.cm,b.RR,x.Ls,O.Dz,S.o,B.s,J.D,m.gd],encapsulation:2})}return n})();var v=i(89207);let u=(()=>{class n{constructor(o){this.route=o,this.first=(0,v.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=(0,v.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("ngoninit"),this.route.params.subscribe(o=>this.id=+o.id)}_onReuseInit(){this.now=(0,v.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.id)}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(c.gz))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["dev-page"]],decls:10,vars:12,template:function(e,s){1&e&&(t._UZ(0,"page-header"),t.TgZ(1,"p"),t._uU(2),t.ALo(3,"json"),t.ALo(4,"json"),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"json"),t.qZA(),t._uU(8),t.ALo(9,"json")),2&e&&(t.xp6(2),t.AsE("first: ",t.lcZ(3,4,s.first),"\uff0cnow: ",t.lcZ(4,6,s.now),""),t.xp6(4),t.hij("id: ",t.lcZ(7,8,s.id),""),t.xp6(2),t.hij(" page: ",t.lcZ(9,10,s.route.url)," "))},dependencies:[T.q,m.Ts],encapsulation:2})}return n})();var Y=i(30014);const j=[{path:"demo",component:C},{path:"",component:F,children:[{path:"home",component:A},{path:"l1",component:u},{path:"l2",component:u},{path:"l3",component:u},{path:"l4",component:u},{path:"l5",component:u},{path:"l6",component:u},{path:"l7",component:u},{path:"l8",component:u},{path:"login",component:u},{path:"view/:id",component:u},{path:"lazy",loadChildren:()=>i.e(811).then(i.bind(i,71440)).then(n=>n.DevLazyModule)},{path:"list",loadChildren:()=>i.e(324).then(i.bind(i,72324)).then(n=>n.DevListModule)}]}];let I=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[Y.m,c.Bz.forChild(j),Z.C8]})}return n})()}}]);