import{Ag as U,Db as C,Eb as z,Ja as i,Ka as u,Lb as F,Mg as G,Ng as L,Ra as O,Sa as l,Va as d,Wg as P,X as x,Xa as E,ca as N,cb as r,cc as V,dc as f,ha as w,hb as s,ia as b,ib as p,ie as B,jb as y,je as S,k as I,kb as _,lb as m,mb as k,nb as v,pa as D,q as h,qa as T,qb as A,ra as g,sb as e,xa as M,yd as j,zg as $}from"./chunk-5G6CWZQB.js";function q(t,o){t&1&&k(0)}function H(t,o){if(t&1&&l(0,q,1,0,"ng-container",7),t&2){let n=e(3);d("nzStringTemplateOutlet",n.nzIcon)}}function J(t,o){if(t&1&&y(0,"span",6),t&2){let n=e(3);d("nzType",n.nzIconType||n.inferredIconType)("nzTheme",n.iconTheme)}}function K(t,o){if(t&1&&(s(0,"div",2),l(1,H,1,1,"ng-container")(2,J,1,2,"span",6),p()),t&2){let n=e(2);i(),r(n.nzIcon?1:2)}}function Q(t,o){if(t&1&&(_(0),C(1),m()),t&2){let n=e(4);i(),z(n.nzMessage)}}function X(t,o){if(t&1&&(s(0,"span",8),l(1,Q,2,1,"ng-container",7),p()),t&2){let n=e(3);i(),d("nzStringTemplateOutlet",n.nzMessage)}}function Y(t,o){if(t&1&&(_(0),C(1),m()),t&2){let n=e(4);i(),z(n.nzDescription)}}function nn(t,o){if(t&1&&(s(0,"span",9),l(1,Y,2,1,"ng-container",7),p()),t&2){let n=e(3);i(),d("nzStringTemplateOutlet",n.nzDescription)}}function tn(t,o){if(t&1&&(s(0,"div",3),l(1,X,2,1,"span",8)(2,nn,2,1,"span",9),p()),t&2){let n=e(2);i(),r(n.nzMessage?1:-1),i(),r(n.nzDescription?2:-1)}}function en(t,o){if(t&1&&(_(0),C(1),m()),t&2){let n=e(3);i(),z(n.nzAction)}}function on(t,o){if(t&1&&(s(0,"div",4),l(1,en,2,1,"ng-container",7),p()),t&2){let n=e(2);i(),d("nzStringTemplateOutlet",n.nzAction)}}function an(t,o){if(t&1&&(_(0),s(1,"span",12),C(2),p(),m()),t&2){let n=e(4);i(2),z(n.nzCloseText)}}function ln(t,o){if(t&1&&l(0,an,3,1,"ng-container",7),t&2){let n=e(3);d("nzStringTemplateOutlet",n.nzCloseText)}}function rn(t,o){t&1&&y(0,"span",11)}function cn(t,o){if(t&1){let n=v();s(0,"button",10),A("click",function(){T(n);let c=e(2);return g(c.closeAlert())}),l(1,ln,1,1,"ng-container")(2,rn,1,0,"span",11),p()}if(t&2){let n=e(2);i(),r(n.nzCloseText?1:2)}}function sn(t,o){if(t&1){let n=v();s(0,"div",1),A("@slideAlertMotion.done",function(){T(n);let c=e();return g(c.onFadeAnimationDone())}),l(1,K,3,1,"div",2)(2,tn,3,2,"div",3)(3,on,2,1,"div",4)(4,cn,3,1,"button",5),p()}if(t&2){let n=e();E("ant-alert-rtl",n.dir==="rtl")("ant-alert-success",n.nzType==="success")("ant-alert-info",n.nzType==="info")("ant-alert-warning",n.nzType==="warning")("ant-alert-error",n.nzType==="error")("ant-alert-no-icon",!n.nzShowIcon)("ant-alert-banner",n.nzBanner)("ant-alert-closable",n.nzCloseable)("ant-alert-with-description",!!n.nzDescription),d("@.disabled",n.nzNoAnimation)("@slideAlertMotion",void 0),i(),r(n.nzShowIcon?1:-1),i(),r(n.nzMessage||n.nzDescription?2:-1),i(),r(n.nzAction?3:-1),i(),r(n.nzCloseable||n.nzCloseText?4:-1)}}var R="alert",pn=(()=>{class t{constructor(n,a,c){this.nzConfigService=n,this.cdr=a,this.directionality=c,this._nzModuleName=R,this.nzAction=null,this.nzCloseText=null,this.nzIconType=null,this.nzMessage=null,this.nzDescription=null,this.nzType="info",this.nzCloseable=!1,this.nzShowIcon=!1,this.nzBanner=!1,this.nzNoAnimation=!1,this.nzIcon=null,this.nzOnClose=new M,this.closed=!1,this.iconTheme="fill",this.inferredIconType="info-circle",this.dir="ltr",this.isTypeSet=!1,this.isShowIconSet=!1,this.destroy$=new I,this.nzConfigService.getConfigChangeEventForComponent(R).pipe(x(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe(x(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value}closeAlert(){this.closed=!0}onFadeAnimationDone(){this.closed&&this.nzOnClose.emit(!0)}ngOnChanges(n){let{nzShowIcon:a,nzDescription:c,nzType:W,nzBanner:Z}=n;if(a&&(this.isShowIconSet=!0),W)switch(this.isTypeSet=!0,this.nzType){case"error":this.inferredIconType="close-circle";break;case"success":this.inferredIconType="check-circle";break;case"info":this.inferredIconType="info-circle";break;case"warning":this.inferredIconType="exclamation-circle";break}c&&(this.iconTheme=this.nzDescription?"outline":"fill"),Z&&(this.isTypeSet||(this.nzType="warning"),this.isShowIconSet||(this.nzShowIcon=!0))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static{this.\u0275fac=function(a){return new(a||t)(u(B),u(V),u(j))}}static{this.\u0275cmp=w({type:t,selectors:[["nz-alert"]],inputs:{nzAction:"nzAction",nzCloseText:"nzCloseText",nzIconType:"nzIconType",nzMessage:"nzMessage",nzDescription:"nzDescription",nzType:"nzType",nzCloseable:[2,"nzCloseable","nzCloseable",f],nzShowIcon:[2,"nzShowIcon","nzShowIcon",f],nzBanner:[2,"nzBanner","nzBanner",f],nzNoAnimation:[2,"nzNoAnimation","nzNoAnimation",f],nzIcon:"nzIcon"},outputs:{nzOnClose:"nzOnClose"},exportAs:["nzAlert"],standalone:!0,features:[O,D,F],decls:1,vars:1,consts:[[1,"ant-alert",3,"ant-alert-rtl","ant-alert-success","ant-alert-info","ant-alert-warning","ant-alert-error","ant-alert-no-icon","ant-alert-banner","ant-alert-closable","ant-alert-with-description"],[1,"ant-alert"],[1,"ant-alert-icon"],[1,"ant-alert-content"],[1,"ant-alert-action"],["type","button","tabindex","0",1,"ant-alert-close-icon"],["nz-icon","",3,"nzType","nzTheme"],[4,"nzStringTemplateOutlet"],[1,"ant-alert-message"],[1,"ant-alert-description"],["type","button","tabindex","0",1,"ant-alert-close-icon",3,"click"],["nz-icon","","nzType","close"],[1,"ant-alert-close-text"]],template:function(a,c){a&1&&l(0,sn,5,24,"div",0),a&2&&r(c.closed?-1:0)},dependencies:[U,$,L,G],encapsulation:2,data:{animation:[P]},changeDetection:0})}}return h([S()],t.prototype,"nzCloseable",void 0),h([S()],t.prototype,"nzShowIcon",void 0),t})(),Dn=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=b({type:t})}static{this.\u0275inj=N({imports:[pn]})}}return t})();export{pn as a,Dn as b};