import{Ba as O,Db as f,Eb as x,Ka as o,La as u,Lb as F,Rd as h,Ta as r,Va as d,Vg as $,Wg as U,Xa as E,Y as T,bc as B,bh as G,cb as c,ch as L,da as w,ge as j,hb as s,he as A,ib as p,ja as b,jb as v,k as N,ka as D,kb as C,lb as z,mb as k,nb as S,q as m,qb as I,ra as M,sa as g,sb as i,ta as y,vd as V,xh as P}from"./chunk-K77IP5TH.js";function q(n,e){n&1&&k(0)}function H(n,e){if(n&1&&r(0,q,1,0,"ng-container",6),n&2){let t=i(3);d("nzStringTemplateOutlet",t.nzIcon)}}function J(n,e){if(n&1&&v(0,"span",7),n&2){let t=i(3);d("nzType",t.nzIconType||t.inferredIconType)("nzTheme",t.iconTheme)}}function K(n,e){if(n&1&&(s(0,"div",2),r(1,H,1,1,"ng-container")(2,J,1,2),p()),n&2){let t=i(2);o(),c(1,t.nzIcon?1:2)}}function Q(n,e){if(n&1&&(C(0),f(1),z()),n&2){let t=i(4);o(),x(t.nzMessage)}}function X(n,e){if(n&1&&(s(0,"span",8),r(1,Q,2,1,"ng-container",6),p()),n&2){let t=i(3);o(),d("nzStringTemplateOutlet",t.nzMessage)}}function Y(n,e){if(n&1&&(C(0),f(1),z()),n&2){let t=i(4);o(),x(t.nzDescription)}}function nn(n,e){if(n&1&&(s(0,"span",9),r(1,Y,2,1,"ng-container",6),p()),n&2){let t=i(3);o(),d("nzStringTemplateOutlet",t.nzDescription)}}function tn(n,e){if(n&1&&(s(0,"div",3),r(1,X,2,1,"span",8)(2,nn,2,1,"span",9),p()),n&2){let t=i(2);o(),c(1,t.nzMessage?1:-1),o(),c(2,t.nzDescription?2:-1)}}function en(n,e){if(n&1&&(C(0),f(1),z()),n&2){let t=i(3);o(),x(t.nzAction)}}function on(n,e){if(n&1&&(s(0,"div",4),r(1,en,2,1,"ng-container",6),p()),n&2){let t=i(2);o(),d("nzStringTemplateOutlet",t.nzAction)}}function an(n,e){if(n&1&&(C(0),s(1,"span",11),f(2),p(),z()),n&2){let t=i(4);o(2),x(t.nzCloseText)}}function rn(n,e){if(n&1&&r(0,an,3,1,"ng-container",6),n&2){let t=i(3);d("nzStringTemplateOutlet",t.nzCloseText)}}function ln(n,e){n&1&&v(0,"span",12)}function cn(n,e){if(n&1){let t=S();s(0,"button",10),I("click",function(){g(t);let a=i(2);return y(a.closeAlert())}),r(1,rn,1,1,"ng-container")(2,ln,1,0),p()}if(n&2){let t=i(2);o(),c(1,t.nzCloseText?1:2)}}function sn(n,e){if(n&1){let t=S();s(0,"div",1),I("@slideAlertMotion.done",function(){g(t);let a=i();return y(a.onFadeAnimationDone())}),r(1,K,3,1,"div",2)(2,tn,3,2,"div",3)(3,on,2,1,"div",4)(4,cn,3,1,"button",5),p()}if(n&2){let t=i();E("ant-alert-rtl",t.dir==="rtl")("ant-alert-success",t.nzType==="success")("ant-alert-info",t.nzType==="info")("ant-alert-warning",t.nzType==="warning")("ant-alert-error",t.nzType==="error")("ant-alert-no-icon",!t.nzShowIcon)("ant-alert-banner",t.nzBanner)("ant-alert-closable",t.nzCloseable)("ant-alert-with-description",!!t.nzDescription),d("@.disabled",t.nzNoAnimation)("@slideAlertMotion",void 0),o(),c(1,t.nzShowIcon?1:-1),o(),c(2,t.nzMessage||t.nzDescription?2:-1),o(),c(3,t.nzAction?3:-1),o(),c(4,t.nzCloseable||t.nzCloseText?4:-1)}}var R="alert",pn=(()=>{let e=class e{constructor(l,a,_){this.nzConfigService=l,this.cdr=a,this.directionality=_,this._nzModuleName=R,this.nzAction=null,this.nzCloseText=null,this.nzIconType=null,this.nzMessage=null,this.nzDescription=null,this.nzType="info",this.nzCloseable=!1,this.nzShowIcon=!1,this.nzBanner=!1,this.nzNoAnimation=!1,this.nzIcon=null,this.nzOnClose=new O,this.closed=!1,this.iconTheme="fill",this.inferredIconType="info-circle",this.dir="ltr",this.isTypeSet=!1,this.isShowIconSet=!1,this.destroy$=new N,this.nzConfigService.getConfigChangeEventForComponent(R).pipe(T(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe(T(this.destroy$)).subscribe(l=>{this.dir=l,this.cdr.detectChanges()}),this.dir=this.directionality.value}closeAlert(){this.closed=!0}onFadeAnimationDone(){this.closed&&this.nzOnClose.emit(!0)}ngOnChanges(l){let{nzShowIcon:a,nzDescription:_,nzType:W,nzBanner:Z}=l;if(a&&(this.isShowIconSet=!0),W)switch(this.isTypeSet=!0,this.nzType){case"error":this.inferredIconType="close-circle";break;case"success":this.inferredIconType="check-circle";break;case"info":this.inferredIconType="info-circle";break;case"warning":this.inferredIconType="exclamation-circle";break}_&&(this.iconTheme=this.nzDescription?"outline":"fill"),Z&&(this.isTypeSet||(this.nzType="warning"),this.isShowIconSet||(this.nzShowIcon=!0))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};e.\u0275fac=function(a){return new(a||e)(u(j),u(B),u(V,8))},e.\u0275cmp=b({type:e,selectors:[["nz-alert"]],inputs:{nzAction:"nzAction",nzCloseText:"nzCloseText",nzIconType:"nzIconType",nzMessage:"nzMessage",nzDescription:"nzDescription",nzType:"nzType",nzCloseable:"nzCloseable",nzShowIcon:"nzShowIcon",nzBanner:"nzBanner",nzNoAnimation:"nzNoAnimation",nzIcon:"nzIcon"},outputs:{nzOnClose:"nzOnClose"},exportAs:["nzAlert"],standalone:!0,features:[M,F],decls:1,vars:1,consts:[[1,"ant-alert",3,"ant-alert-rtl","ant-alert-success","ant-alert-info","ant-alert-warning","ant-alert-error","ant-alert-no-icon","ant-alert-banner","ant-alert-closable","ant-alert-with-description"],[1,"ant-alert"],[1,"ant-alert-icon"],[1,"ant-alert-content"],[1,"ant-alert-action"],["type","button","tabindex","0",1,"ant-alert-close-icon"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType","nzTheme"],[1,"ant-alert-message"],[1,"ant-alert-description"],["type","button","tabindex","0",1,"ant-alert-close-icon",3,"click"],[1,"ant-alert-close-text"],["nz-icon","","nzType","close"]],template:function(a,_){a&1&&r(0,sn,5,24,"div",0),a&2&&c(0,_.closed?-1:0)},dependencies:[U,$,L,G],encapsulation:2,data:{animation:[P]},changeDetection:0});let n=e;return m([A(),h()],n.prototype,"nzCloseable",void 0),m([A(),h()],n.prototype,"nzShowIcon",void 0),m([h()],n.prototype,"nzBanner",void 0),m([h()],n.prototype,"nzNoAnimation",void 0),n})(),On=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=D({type:e}),e.\u0275inj=w({imports:[pn]});let n=e;return n})();export{pn as a,On as b};
