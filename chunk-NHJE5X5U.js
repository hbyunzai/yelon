import{a as B}from"./chunk-VXEGY7DR.js";import{Aa as I,Ab as O,Ag as P,Bb as L,C as p,Db as w,Eb as _,Hg as Q,Ig as G,Ja as r,Ka as o,Kb as R,Lb as V,Mg as q,Ng as H,Ra as x,Sa as a,Ua as M,Va as l,X as s,Xa as T,aa as y,ca as E,cb as C,cc as A,cf as $,dc as u,ha as S,hb as f,ia as D,ib as m,ie as U,jb as z,je as W,k as b,kb as g,lb as v,q as k,sb as c,ya as N,yd as j,zb as F,zg as Z}from"./chunk-2WZDLBTH.js";var ie=["switchElement"];function ne(t,h){t&1&&z(0,"span",3)}function oe(t,h){if(t&1&&(g(0),w(1),v()),t&2){let e=c(2);r(),_(e.nzCheckedChildren)}}function se(t,h){if(t&1&&a(0,oe,2,1,"ng-container",6),t&2){let e=c();l("nzStringTemplateOutlet",e.nzCheckedChildren)}}function re(t,h){if(t&1&&(g(0),w(1),v()),t&2){let e=c(2);r(),_(e.nzUnCheckedChildren)}}function ae(t,h){if(t&1&&a(0,re,2,1,"ng-container",6),t&2){let e=c();l("nzStringTemplateOutlet",e.nzUnCheckedChildren)}}var ce="switch",he=(()=>{class t{updateValue(e){this.isChecked!==e&&(this.isChecked=e,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}constructor(e,i,n,d,J,K){this.nzConfigService=e,this.host=i,this.ngZone=n,this.cdr=d,this.focusMonitor=J,this.directionality=K,this._nzModuleName=ce,this.isChecked=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default",this.nzId=null,this.dir="ltr",this.destroy$=new b,this.isNzDisableFirstChange=!0}ngOnInit(){this.directionality.change.pipe(s(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{p(this.host.nativeElement,"click").pipe(s(this.destroy$)).subscribe(e=>{e.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),p(this.switchElement.nativeElement,"keydown").pipe(s(this.destroy$)).subscribe(e=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;let{keyCode:i}=e;i!==37&&i!==39&&i!==32&&i!==13||(e.preventDefault(),this.ngZone.run(()=>{i===37?this.updateValue(!1):i===39?this.updateValue(!0):(i===32||i===13)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe(s(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.isChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}static{this.\u0275fac=function(i){return new(i||t)(o(U),o(I),o(N),o(A),o($),o(j))}}static{this.\u0275cmp=S({type:t,selectors:[["nz-switch"]],viewQuery:function(i,n){if(i&1&&F(ie,7),i&2){let d;O(d=L())&&(n.switchElement=d.first)}},inputs:{nzLoading:[2,"nzLoading","nzLoading",u],nzDisabled:[2,"nzDisabled","nzDisabled",u],nzControl:[2,"nzControl","nzControl",u],nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize",nzId:"nzId"},exportAs:["nzSwitch"],standalone:!0,features:[R([{provide:B,useExisting:y(()=>t),multi:!0}]),x,V],decls:8,vars:15,consts:[["switchElement",""],["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],[1,"ant-switch-handle"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[1,"ant-switch-inner"],[1,"ant-click-animating-node"],[4,"nzStringTemplateOutlet"]],template:function(i,n){i&1&&(f(0,"button",1,0)(2,"span",2),a(3,ne,1,0,"span",3),m(),f(4,"span",4),a(5,se,1,1,"ng-container")(6,ae,1,1,"ng-container"),m(),z(7,"div",5),m()),i&2&&(T("ant-switch-checked",n.isChecked)("ant-switch-loading",n.nzLoading)("ant-switch-disabled",n.nzDisabled)("ant-switch-small",n.nzSize==="small")("ant-switch-rtl",n.dir==="rtl"),l("disabled",n.nzDisabled)("nzWaveExtraNode",!0),M("id",n.nzId),r(3),C(n.nzLoading?3:-1),r(2),C(n.isChecked?5:6))},dependencies:[G,Q,P,Z,H,q],encapsulation:2,changeDetection:0})}}return k([W()],t.prototype,"nzSize",void 0),t})(),Te=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=D({type:t})}static{this.\u0275inj=E({imports:[he]})}}return t})();export{he as a,Te as b};
