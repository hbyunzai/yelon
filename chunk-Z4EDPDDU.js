import{$b as w,_b as I,a as u,ba as C,da as _,ea as x,fa as M,jc as D,l as A,ld as S,wc as T}from"./chunk-B5KC2RQS.js";function X(a,r){if(!a)return"";let l=u({},typeof r=="string"?{mask:r}:r),e=u({0:{pattern:/\d/,default:"0"},9:{pattern:/\d/},"#":{pattern:/[a-zA-Z0-9]/},U:{pattern:/[a-zA-Z]/,transform:t=>t.toLocaleUpperCase()},L:{pattern:/[a-zA-Z]/,transform:t=>t.toLocaleLowerCase()},"*":{pattern:/.*/,transform:t=>"*"}},l.tokens),i=a.split("");return l.mask.split("").reduce((t,d)=>{let s=e[d];if(!s)return t.push(d),t;let c=i.shift()??"";return s.pattern.test(c)?(typeof s.transform=="function"?t.push(s.transform(c)):t.push(c),t):(s.default&&t.push(s.default),t)},[]).join("")}var k={num:"(([-+]?\\d+\\.\\d+)|([-+]?\\d+)|([-+]?\\.\\d+))(?:[eE]([-+]?\\d+))?",idCard:"(^\\d{15}$)|(^\\d{17}(?:[0-9]|X)$)",mobile:"^(0|\\+?86|17951)?1[0-9]{10}$",url:"(((^https?:(?://)?)(?:[-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+(?::\\d+)?|(?:www.|[-;:&=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&;%@.\\w_]*)#?(?:[\\w]*))?)",ip:"(?:^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$)|(?:^(?:(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)",color:"(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\\b|(?:rgb|hsl)a?\\([^\\)]*\\)",chinese:"[\u4E00-\u9FA5]+"};function g(a,r){return new RegExp(`^${a}$`,r)}var J={num:g(k.num),idCard:g(k.idCard,"i"),mobile:g(k.mobile),url:g(k.url),ip:g(k.ip),color:g(k.color),chinese:g(k.chinese)};var H=[{unit:"Q",value:Math.pow(10,15)},{unit:"T",value:Math.pow(10,12)},{unit:"B",value:Math.pow(10,9)},{unit:"M",value:Math.pow(10,6)},{unit:"K",value:1e3}];var ce=(()=>{let r=class r{constructor(e){this.locale=M(I),this.defCurrencyCode=M(w,{optional:!0})??"USD",this.currencyPipe=new T(this.locale,this.defCurrencyCode),this.c=e.merge("utilCurrency",{startingUnit:"yuan",megaUnit:{Q:"\u4EAC",T:"\u5146",B:"\u4EBF",M:"\u4E07",K:"\u5343"},precision:2,ignoreZeroPrecision:!0})}format(e,i){i=u({startingUnit:this.c.startingUnit,precision:this.c.precision,ignoreZeroPrecision:this.c.ignoreZeroPrecision,ngCurrency:this.c.ngCurrency},i);let t=Number(e);if(e==null||isNaN(t))return"";if(i.startingUnit==="cent"&&(t=t/100),i.ngCurrency!=null){let s=i.ngCurrency;return this.currencyPipe.transform(t,s.currencyCode,s.display,s.digitsInfo,s.locale||this.locale)}let d=D(t,this.locale,`.${i.ignoreZeroPrecision?1:i.precision}-${i.precision}`);return i.ignoreZeroPrecision?d.replace(/(?:\.[0]+)$/g,""):d}mega(e,i){i=u({precision:this.c.precision,unitI18n:this.c.megaUnit,startingUnit:this.c.startingUnit},i);let t=Number(e),d={raw:e,value:"",unit:"",unitI18n:""};if(isNaN(t)||t===0)return d.value=e.toString(),d;i.startingUnit==="cent"&&(t=t/100);let s=Math.abs(+t),c=Math.pow(10,i.precision),h=t<0;for(let o of H){let n=s/o.value;if(n=Math.round(n*c)/c,n>=1){s=n,d.unit=o.unit;break}}return d.value=(h?"-":"")+s,d.unitI18n=i.unitI18n[d.unit],d}cny(e,i){if(i=u({inWords:!0,minusSymbol:"\u8D1F",startingUnit:this.c.startingUnit},i),e=Number(e),isNaN(e))return"";i.startingUnit==="cent"&&(e=e/100),e=e.toString();let t,d;[t,d]=e.split(".");let s="";t.startsWith("-")&&(s=i.minusSymbol,t=t.substring(1)),/^-?\d+$/.test(e)&&(d=null),t=(+t).toString();let c=i.inWords,h={num:c?["","\u58F9","\u8D30","\u53C1","\u8086","\u4F0D","\u9646","\u67D2","\u634C","\u7396","\u70B9"]:["","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u70B9"],radice:c?["","\u62FE","\u4F70","\u4EDF","\u4E07","\u62FE","\u4F70","\u4EDF","\u4EBF","\u62FE","\u4F70","\u4EDF","\u4E07\u4EBF","\u62FE","\u4F70","\u4EDF","\u5146","\u62FE","\u4F70","\u4EDF"]:["","\u5341","\u767E","\u5343","\u4E07","\u5341","\u767E","\u5343","\u4EBF","\u5341","\u767E","\u5343","\u4E07\u4EBF","\u5341","\u767E","\u5343","\u5146","\u5341","\u767E","\u5343"],dec:["\u89D2","\u5206","\u5398","\u6BEB"]};c&&(e=(+e).toFixed(5).toString());let o="",n=t.length;if(t==="0"||n===0)o="\u96F6";else{let N="";for(let p=0;p<n;p++){let m=+t[p],b=n-p-1,R=p>1&&m!==0&&t[p-1]==="0"?"\u96F6":"",U=m===0&&b%4!==0||t.substring(p-3,p-3+4)==="0000",z=N,y=h.num[m];N=U?"":h.radice[b],p===0&&y==="\u4E00"&&N==="\u5341"&&(y=""),m>1&&y==="\u4E8C"&&["","\u5341","\u767E"].indexOf(N)===-1&&z!=="\u5341"&&(y="\u4E24"),o+=R+y+N}}let f="",j=d?d.toString().length:0;if(d===null)f=c?"\u6574":"";else if(d==="0")f="\u96F6";else for(let N=0;N<j&&!(c&&N>h.dec.length-1);N++){let p=d[N],m=p==="0"?"\u96F6":"",b=h.num[+p],v=c?h.dec[N]:"";f+=m+b+v}return s+(c?o+(f==="\u96F6"?"\u5143\u6574":`\u5143${f}`):o+(f===""?"":`\u70B9${f}`))}};r.\u0275fac=function(i){return new(i||r)(x(S))},r.\u0275prov=C({token:r,factory:r.\u0275fac,providedIn:"root"});let a=r;return a})();var L=class a{get treeService(){return this.service||this.parentNode&&this.parentNode.treeService}constructor(r,l=null,e=null){if(this._title="",this.level=0,this.parentNode=null,this._icon="",this._children=[],this._isLeaf=!1,this._isChecked=!1,this._isSelectable=!1,this._isDisabled=!1,this._isDisableCheckbox=!1,this._isExpanded=!1,this._isHalfChecked=!1,this._isSelected=!1,this._isLoading=!1,this.canHide=!1,this.isMatched=!1,this.service=null,r instanceof a)return r;this.service=e||null,this.origin=r,this.key=r.key,this.parentNode=l,this._title=r.title||"---",this._icon=r.icon||"",this._isLeaf=r.isLeaf||!1,this._children=[],this._isChecked=r.checked||!1,this._isSelectable=r.disabled||r.selectable!==!1,this._isDisabled=r.disabled||!1,this._isDisableCheckbox=r.disableCheckbox||!1,this._isExpanded=r.isLeaf?!1:r.expanded||!1,this._isHalfChecked=!1,this._isSelected=!r.disabled&&r.selected||!1,this._isLoading=!1,this.isMatched=!1,l?this.level=l.level+1:this.level=0,typeof r.children<"u"&&r.children!==null&&r.children.forEach(i=>{let t=this.treeService;t&&!t.isCheckStrictly&&r.checked&&!r.disabled&&!i.disabled&&!i.disableCheckbox&&(i.checked=r.checked),this._children.push(new a(i,this))})}get title(){return this._title}set title(r){this._title=r,this.update()}get icon(){return this._icon}set icon(r){this._icon=r,this.update()}get children(){return this._children}set children(r){this._children=r,this.update()}get isLeaf(){return this._isLeaf}set isLeaf(r){this._isLeaf=r,this.update()}get isChecked(){return this._isChecked}set isChecked(r){this._isChecked=r,this.origin.checked=r,this.afterValueChange("isChecked")}get isHalfChecked(){return this._isHalfChecked}set isHalfChecked(r){this._isHalfChecked=r,this.afterValueChange("isHalfChecked")}get isSelectable(){return this._isSelectable}set isSelectable(r){this._isSelectable=r,this.update()}get isDisabled(){return this._isDisabled}set isDisabled(r){this._isDisabled=r,this.update()}get isDisableCheckbox(){return this._isDisableCheckbox}set isDisableCheckbox(r){this._isDisableCheckbox=r,this.update()}get isExpanded(){return this._isExpanded}set isExpanded(r){this._isExpanded=r,this.origin.expanded=r,this.afterValueChange("isExpanded"),this.afterValueChange("reRender")}get isSelected(){return this._isSelected}set isSelected(r){this._isSelected=r,this.origin.selected=r,this.afterValueChange("isSelected")}get isLoading(){return this._isLoading}set isLoading(r){this._isLoading=r,this.update()}setSyncChecked(r=!1,l=!1){this.setChecked(r,l),this.treeService&&!this.treeService.isCheckStrictly&&this.treeService.conduct(this)}setChecked(r=!1,l=!1){this.origin.checked=r,this.isChecked=r,this.isHalfChecked=l}setExpanded(r){this._isExpanded=r,this.origin.expanded=r,this.afterValueChange("isExpanded")}getParentNode(){return this.parentNode}getChildren(){return this.children}addChildren(r,l=-1){this.isLeaf||(r.forEach(e=>{let i=d=>{d.getChildren().forEach(s=>{s.level=s.getParentNode().level+1,s.origin.level=s.level,i(s)})},t=e;t instanceof a?t.parentNode=this:t=new a(e,this),t.level=this.level+1,t.origin.level=t.level,i(t);try{l===-1?this.children.push(t):this.children.splice(l,0,t)}catch{}}),this.origin.children=this.getChildren().map(e=>e.origin),this.isLoading=!1),this.afterValueChange("addChildren"),this.afterValueChange("reRender")}clearChildren(){this.afterValueChange("clearChildren"),this.children=[],this.origin.children=[],this.afterValueChange("reRender")}remove(){let r=this.getParentNode();r&&(r.children=r.getChildren().filter(l=>l.key!==this.key),r.origin.children=r.origin.children.filter(l=>l.key!==this.key),this.afterValueChange("remove"),this.afterValueChange("reRender"))}afterValueChange(r){if(this.treeService)switch(r){case"isChecked":this.treeService.setCheckedNodeList(this);break;case"isHalfChecked":this.treeService.setHalfCheckedNodeList(this);break;case"isExpanded":this.treeService.setExpandedNodeList(this);break;case"isSelected":this.treeService.setNodeActive(this);break;case"clearChildren":this.treeService.afterRemove(this.getChildren());break;case"remove":this.treeService.afterRemove([this]);break;case"reRender":this.treeService.flattenTreeData(this.treeService.rootNodes,this.treeService.getExpandedNodeList().map(l=>l.key));break}this.update()}update(){this.component&&this.component.markForCheck()}};function E(a){let{isDisabled:r,isDisableCheckbox:l}=a;return!!(r||l)}function P(a,r){return r.length>0&&r.indexOf(a)>-1}function V(a,r){return`${a}-${r}`}function Z(a,r){return a??r}function K(a=[],r=[]){let l=new Set(r===!0?[]:r),e=[];function i(t,d=null){return t.map((s,c)=>{let h=V(d?d.pos:"0",c),o=Z(s.key,h);s.isStart=[...d?d.isStart:[],c===0],s.isEnd=[...d?d.isEnd:[],c===t.length-1];let n={parent:d,pos:h,children:[],data:s,isStart:[...d?d.isStart:[],c===0],isEnd:[...d?d.isEnd:[],c===t.length-1]};return e.push(n),r===!0||l.has(o)||s.isExpanded?n.children=i(s.children||[],n):n.children=[],n})}return i(a),e}var ge=(()=>{let r=class r{constructor(){this.DRAG_SIDE_RANGE=.25,this.DRAG_MIN_GAP=2,this.isCheckStrictly=!1,this.isMultiple=!1,this.rootNodes=[],this.flattenNodes$=new A([]),this.selectedNodeList=[],this.expandedNodeList=[],this.checkedNodeList=[],this.halfCheckedNodeList=[],this.matchedNodeList=[]}initTree(e){this.rootNodes=e,this.expandedNodeList=[],this.selectedNodeList=[],this.halfCheckedNodeList=[],this.checkedNodeList=[],this.matchedNodeList=[]}flattenTreeData(e,i=[]){this.flattenNodes$.next(K(e,i).map(t=>t.data))}getSelectedNode(){return this.selectedNode}getSelectedNodeList(){return this.conductNodeState("select")}getCheckedNodeKeys(){let e=[],i=this.getCheckedNodeList(),t=d=>{d.forEach(s=>{e.push(s.key),!(s.children.length<1)&&t(s.children)})};return t(i),e}getCheckedNodeList(){return this.conductNodeState("check")}getHalfCheckedNodeList(){return this.conductNodeState("halfCheck")}getExpandedNodeList(){return this.conductNodeState("expand")}getMatchedNodeList(){return this.conductNodeState("match")}isArrayOfNzTreeNode(e){return e.every(i=>i instanceof L)}setSelectedNode(e){this.selectedNode=e}setNodeActive(e){!this.isMultiple&&e.isSelected&&(this.selectedNodeList.forEach(i=>{e.key!==i.key&&(i.isSelected=!1)}),this.selectedNodeList=[]),this.setSelectedNodeList(e,this.isMultiple)}setSelectedNodeList(e,i=!1){let t=this.getIndexOfArray(this.selectedNodeList,e.key);i?e.isSelected&&t===-1&&this.selectedNodeList.push(e):e.isSelected&&t===-1&&(this.selectedNodeList=[e]),e.isSelected||(this.selectedNodeList=this.selectedNodeList.filter(d=>d.key!==e.key))}setHalfCheckedNodeList(e){let i=this.getIndexOfArray(this.halfCheckedNodeList,e.key);e.isHalfChecked&&i===-1?this.halfCheckedNodeList.push(e):!e.isHalfChecked&&i>-1&&(this.halfCheckedNodeList=this.halfCheckedNodeList.filter(t=>e.key!==t.key))}setCheckedNodeList(e){let i=this.getIndexOfArray(this.checkedNodeList,e.key);e.isChecked&&i===-1?this.checkedNodeList.push(e):!e.isChecked&&i>-1&&(this.checkedNodeList=this.checkedNodeList.filter(t=>e.key!==t.key))}conductNodeState(e="check"){let i=[];switch(e){case"select":i=this.selectedNodeList;break;case"expand":i=this.expandedNodeList;break;case"match":i=this.matchedNodeList;break;case"check":i=this.checkedNodeList;let t=d=>{let s=d.getParentNode();return s?this.checkedNodeList.findIndex(c=>c.key===s.key)>-1?!0:t(s):!1};this.isCheckStrictly||(i=this.checkedNodeList.filter(d=>!t(d)));break;case"halfCheck":this.isCheckStrictly||(i=this.halfCheckedNodeList);break}return i}setExpandedNodeList(e){if(e.isLeaf)return;let i=this.getIndexOfArray(this.expandedNodeList,e.key);e.isExpanded&&i===-1?this.expandedNodeList.push(e):!e.isExpanded&&i>-1&&this.expandedNodeList.splice(i,1)}setMatchedNodeList(e){let i=this.getIndexOfArray(this.matchedNodeList,e.key);e.isMatched&&i===-1?this.matchedNodeList.push(e):!e.isMatched&&i>-1&&this.matchedNodeList.splice(i,1)}refreshCheckState(e=!1){e||this.checkedNodeList.forEach(i=>{this.conduct(i,e)})}conduct(e,i=!1){let t=e.isChecked;e&&!i&&(this.conductUp(e),this.conductDown(e,t))}conductUp(e){let i=e.getParentNode();i&&(E(i)||(i.children.every(t=>E(t)||!t.isHalfChecked&&t.isChecked)?(i.isChecked=!0,i.isHalfChecked=!1):i.children.some(t=>t.isHalfChecked||t.isChecked)?(i.isChecked=!1,i.isHalfChecked=!0):(i.isChecked=!1,i.isHalfChecked=!1)),this.setCheckedNodeList(i),this.setHalfCheckedNodeList(i),this.conductUp(i))}conductDown(e,i){E(e)||(e.isChecked=i,e.isHalfChecked=!1,this.setCheckedNodeList(e),this.setHalfCheckedNodeList(e),e.children.forEach(t=>{this.conductDown(t,i)}))}afterRemove(e){let i=t=>{this.selectedNodeList=this.selectedNodeList.filter(d=>d.key!==t.key),this.expandedNodeList=this.expandedNodeList.filter(d=>d.key!==t.key),this.checkedNodeList=this.checkedNodeList.filter(d=>d.key!==t.key),t.children&&t.children.forEach(d=>{i(d)})};e.forEach(t=>{i(t)}),this.refreshCheckState(this.isCheckStrictly)}refreshDragNode(e){e.children.length===0?this.conductUp(e):e.children.forEach(i=>{this.refreshDragNode(i)})}resetNodeLevel(e){let i=e.getParentNode();i?e.level=i.level+1:e.level=0;for(let t of e.children)this.resetNodeLevel(t)}calcDropPosition(e){let{clientY:i}=e,{top:t,bottom:d,height:s}=e.target.getBoundingClientRect(),c=Math.max(s*this.DRAG_SIDE_RANGE,this.DRAG_MIN_GAP);return i<=t+c?-1:i>=d-c?1:0}dropAndApply(e,i=-1){if(!e||i>1)return;let t=e.treeService,d=e.getParentNode(),s=this.selectedNode.getParentNode();switch(s?s.children=s.children.filter(c=>c.key!==this.selectedNode.key):this.rootNodes=this.rootNodes.filter(c=>c.key!==this.selectedNode.key),i){case 0:e.addChildren([this.selectedNode]),this.resetNodeLevel(e);break;case-1:case 1:let c=i===1?1:0;if(d){d.addChildren([this.selectedNode],d.children.indexOf(e)+c);let h=this.selectedNode.getParentNode();h&&this.resetNodeLevel(h)}else{let h=this.rootNodes.indexOf(e)+c;this.rootNodes.splice(h,0,this.selectedNode),this.rootNodes[h].parentNode=null,this.resetNodeLevel(this.rootNodes[h])}break}this.rootNodes.forEach(c=>{c.treeService||(c.service=t),this.refreshDragNode(c)})}formatEvent(e,i,t){let d={eventName:e,node:i,event:t};switch(e){case"dragstart":case"dragenter":case"dragover":case"dragleave":case"drop":case"dragend":Object.assign(d,{dragNode:this.getSelectedNode()});break;case"click":case"dblclick":Object.assign(d,{selectedKeys:this.selectedNodeList}),Object.assign(d,{nodes:this.selectedNodeList}),Object.assign(d,{keys:this.selectedNodeList.map(c=>c.key)});break;case"check":let s=this.getCheckedNodeList();Object.assign(d,{checkedKeys:s}),Object.assign(d,{nodes:s}),Object.assign(d,{keys:s.map(c=>c.key)});break;case"search":Object.assign(d,{matchedKeys:this.getMatchedNodeList()}),Object.assign(d,{nodes:this.getMatchedNodeList()}),Object.assign(d,{keys:this.getMatchedNodeList().map(c=>c.key)});break;case"expand":Object.assign(d,{nodes:this.expandedNodeList}),Object.assign(d,{keys:this.expandedNodeList.map(c=>c.key)});break}return d}getIndexOfArray(e,i){return e.findIndex(t=>t.key===i)}conductCheck(e,i){this.checkedNodeList=[],this.halfCheckedNodeList=[];let t=d=>{d.forEach(s=>{e===null?s.isChecked=!!s.origin.checked:P(s.key,e||[])?(s.isChecked=!0,s.isHalfChecked=!1):(s.isChecked=!1,s.isHalfChecked=!1),s.children.length>0&&t(s.children)})};t(this.rootNodes),this.refreshCheckState(i)}conductExpandedKeys(e=[]){let i=new Set(e===!0?[]:e);this.expandedNodeList=[];let t=d=>{d.forEach(s=>{s.setExpanded(e===!0||i.has(s.key)||s.isExpanded===!0),s.isExpanded&&this.setExpandedNodeList(s),s.children.length>0&&t(s.children)})};t(this.rootNodes)}conductSelectedKeys(e,i){this.selectedNodeList.forEach(d=>d.isSelected=!1),this.selectedNodeList=[];let t=d=>d.every(s=>{if(P(s.key,e)){if(s.isSelected=!0,this.setSelectedNodeList(s),!i)return!1}else s.isSelected=!1;return s.children.length>0?t(s.children):!0});t(this.rootNodes)}expandNodeAllParentBySearch(e){let i=t=>{if(t&&(t.canHide=!1,t.setExpanded(!0),this.setExpandedNodeList(t),t.getParentNode()))return i(t.getParentNode())};i(e.getParentNode())}};r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=C({token:r,factory:r.\u0275fac});let a=r;return a})(),me=new _("NzTreeHigherOrder"),O=class{constructor(r){this.nzTreeService=r}coerceTreeNodes(r){let l=[];return this.nzTreeService.isArrayOfNzTreeNode(r)?l=r.map(e=>(e.service=this.nzTreeService,e)):l=r.map(e=>new L(e,null,this.nzTreeService)),l}getTreeNodes(){return this.nzTreeService.rootNodes}getTreeNodeByKey(r){let l=[],e=i=>{l.push(i),i.getChildren().forEach(t=>{e(t)})};return this.getTreeNodes().forEach(i=>{e(i)}),l.find(i=>i.key===r)||null}getCheckedNodeList(){return this.nzTreeService.getCheckedNodeList()}getSelectedNodeList(){return this.nzTreeService.getSelectedNodeList()}getHalfCheckedNodeList(){return this.nzTreeService.getHalfCheckedNodeList()}getExpandedNodeList(){return this.nzTreeService.getExpandedNodeList()}getMatchedNodeList(){return this.nzTreeService.getMatchedNodeList()}};var ye=(()=>{let r=class r{constructor(e){this.c=e.merge("utilArray",{deepMapName:"deep",parentMapName:"parent",idMapName:"id",parentIdMapName:"parent_id",childrenMapName:"children",titleMapName:"title",checkedMapname:"checked",selectedMapname:"selected",expandedMapname:"expanded",disabledMapname:"disabled"})}treeToArr(e,i){let t=u({deepMapName:this.c.deepMapName,parentMapName:this.c.parentMapName,childrenMapName:this.c.childrenMapName,clearChildren:!0,cb:null},i),d=[],s=(c,h,o=0)=>{for(let n of c){n[t.deepMapName]=o,n[t.parentMapName]=h,t.cb&&t.cb(n,h,o),d.push(n);let f=n[t.childrenMapName];f!=null&&Array.isArray(f)&&f.length>0&&s(f,n,o+1),t.clearChildren&&delete n[t.childrenMapName]}};return s(e,null),d}arrToTree(e,i){if(!Array.isArray(e)||e.length===0)return[];let t=u({idMapName:this.c.idMapName,parentIdMapName:this.c.parentIdMapName,childrenMapName:this.c.childrenMapName,cb:null},i),d=[],s={},c=t.rootParentIdValue,h=e;if(!c){let o=h.map(f=>f[t.parentIdMapName]),n=o.findIndex(f=>f==null);c=n!==-1?o[n]:o.sort()[0]}for(let o of h){let n=o[t.idMapName],f=o[t.parentIdMapName];s[n]=s[n]||[],o[t.childrenMapName]=s[n],t.cb&&t.cb(o),f!==c?(s[f]=s[f]||[],s[f].push(o)):d.push(o)}return d}arrToTreeNode(e,i){let t=u({idMapName:this.c.idMapName,parentIdMapName:this.c.parentIdMapName,titleMapName:this.c.titleMapName,isLeafMapName:"isLeaf",checkedMapname:this.c.checkedMapname,selectedMapname:this.c.selectedMapname,expandedMapname:this.c.expandedMapname,disabledMapname:this.c.disabledMapname,cb:null},i),d=this.arrToTree(e,{idMapName:t.idMapName,parentIdMapName:t.parentIdMapName,childrenMapName:"children"});return this.visitTree(d,(s,c,h)=>{s.key=s[t.idMapName],s.title=s[t.titleMapName],s.checked=s[t.checkedMapname],s.selected=s[t.selectedMapname],s.expanded=s[t.expandedMapname],s.disabled=s[t.disabledMapname],s[t.isLeafMapName]==null?s.isLeaf=s.children.length===0:s.isLeaf=s[t.isLeafMapName],t.cb&&t.cb(s,c,h)}),d.map(s=>new L(s))}visitTree(e,i,t){t=u({childrenMapName:this.c.childrenMapName},t);let d=(s,c,h)=>{for(let o of s){i(o,c,h);let n=o[t.childrenMapName];Array.isArray(n)&&n.length>0&&d(n,o,h+1)}};d(e,null,1)}findTree(e,i,t){let d;return this.visitTree(e,s=>{d===void 0&&i(s)&&(d=s)},t),d}getKeysByTreeNode(e,i){let t=u({includeHalfChecked:!0},i),d=[];return this.visitTree(e,(s,c,h)=>{(s.isChecked||t.includeHalfChecked&&s.isHalfChecked)&&d.push(t.cb?t.cb(s,c,h):t.keyMapName?s.origin[t.keyMapName]:s.key)}),d}baseFlat(e,i,t=[]){let d=-1;for(;++d<e.length;){let s=e[d];if(i>0&&Array.isArray(s))if(i>1)this.baseFlat(s,i-1,t);else{let c=-1,h=t.length;for(;++c<s.length;)t[h+c]=s[c]}else t[t.length]=s}return t}flat(e,i=1/0){return Array.isArray(e)?this.baseFlat(e,i):e}groupBy(e,i){return Array.isArray(e)?e.reduce((t,d)=>{let s=i(d);return Object.prototype.hasOwnProperty.call(t,s)?t[s].push(d):t[s]=[d],t},{}):{}}uniq(e,i){return Array.from(e.reduce((t,d)=>{let s=i?typeof i=="string"?d[i]:i(d):d;return t.has(s)||t.set(s,d),t},new Map).values())}};r.\u0275fac=function(i){return new(i||r)(x(S))},r.\u0275prov=C({token:r,factory:r.\u0275fac,providedIn:"root"});let a=r;return a})();export{X as a,J as b,ce as c,K as d,ge as e,me as f,O as g,ye as h};
