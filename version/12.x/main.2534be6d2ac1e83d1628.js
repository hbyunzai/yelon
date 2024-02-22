              || (${W} == "string" && ${S} && ${S} == +${S})`).assign(J,t._`+${S}`);case"integer":return void O.elseIf(t._`${W} === "boolean" || ${S} === null
              || (${W} === "string" && ${S} && ${S} == +${S} && !(${S} % 1))`).assign(J,t._`+${S}`);case"boolean":return void O.elseIf(t._`${S} === "false" || ${S} === 0 || ${S} === null`).assign(J,!1).elseIf(t._`${S} === "true" || ${S} === 1`).assign(J,!0);case"null":return O.elseIf(t._`${S} === "" || ${S} === 0 || ${S} === false`),void O.assign(J,null);case"array":O.elseIf(t._`${W} === "string" || ${W} === "number"
              || ${W} === "boolean" || ${S} === null`).assign(J,t._`[${S}]`)}}O.else(),E(P),O.endIf(),O.if(t._`${J} !== undefined`,()=>{O.assign(S,J),function({gen:P,parentData:m,parentDataProperty:T},O){P.if(t._`${m} !== undefined`,()=>P.assign(t._`${m}[${T}]`,O))}(P,J)})}(P,m,L):E(P)})}return W};const y=new Set(["string","number","integer","boolean","null"]);function d(P,m,T,O=l.Correct){const S=O===l.Correct?t.operators.EQ:t.operators.NEQ;let L;switch(P){case"null":return t._`${m} ${S} null`;case"array":L=t._`Array.isArray(${m})`;break;case"object":L=t._`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;break;case"integer":L=W(t._`!(${m} % 1) && !isNaN(${m})`);break;case"number":L=W();break;default:return t._`typeof ${m} ${S} ${P}`}return O===l.Correct?L:(0,t.not)(L);function W(J=t.nil){return(0,t.and)(t._`typeof ${m} == "number"`,J,T?t._`isFinite(${m})`:t.nil)}}function z(P,m,T,O){if(1===P.length)return d(P[0],m,T,O);let S;const L=(0,c.toHash)(P);if(L.array&&L.object){const W=t._`typeof ${m} != "object"`;S=L.null?W:t._`!${m} || ${W}`,delete L.null,delete L.array,delete L.object}else S=t.nil;L.number&&delete L.integer;for(const W in L)S=(0,t.and)(S,d(W,m,T,O));return S}w.checkDataType=d,w.checkDataTypes=z;const b={message:({schema:P})=>`must be ${P}`,params:({schema:P,schemaValue:m})=>"string"==typeof P?t._`{type: ${P}}`:t._`{type: ${m}}`};function E(P){const m=function(P){const{gen:m,data:T,schema:O}=P,S=(0,c.schemaRefOrVal)(P,O,"type");return{gen:m,keyword:"type",data:T,schema:O.type,schemaCode:S,schemaValue:S,parentSchema:O,params:{},it:P}}(P);(0,n.reportError)(m,b)}w.reportTypeError=E},547:(We,w,s)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0}),w.assignDefaults=void 0;const r=s(4110),e=s(406);function t(c,l,f){const{gen:p,compositeRule:C,data:y,opts:_}=c;if(void 0===f)return;const g=r._`${y}${(0,r.getProperty)(l)}`;if(C)return void(0,e.checkStrictMode)(c,`default is ignored for: ${g}`);let v=r._`${g} === undefined`;"empty"===_.useDefaults&&(v=r._`${v} || ${g} === null || ${g} === ""`),p.if(v,r._`${g} = ${(0,r.stringify)(f)}`)}w.assignDefaults=function(c,l){const{properties:f,items:p}=c.schema;if("object"===l&&f)for(const C in f)t(c,C,f[C].default);else"array"===l&&Array.isArray(p)&&p.forEach((C,y)=>t(c,y,C.default))}},7279:(We,w,s)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0}),w.getData=w.KeywordCxt=w.validateFunctionCode=void 0;const r=s(3249),e=s(736),n=s(3716),t=s(736),c=s(547),l=s(8472),f=s(4182),p=s(4110),C=s(3906),y=s(6769),_=s(406),g=s(1207);function d({gen:ce,validateName:Ce,schema:Se,schemaEnv:Ve,opts:it},Et){it.code.es5?ce.func(Ce,p._`${C.default.data}, ${C.default.valCxt}`,Ve.$async,()=>{ce.code(p._`"use strict"; ${P(Se,it)}`),function(ce,Ce){ce.if(C.default.valCxt,()=>{ce.var(C.default.instancePath,p._`${C.default.valCxt}.${C.default.instancePath}`),ce.var(C.default.parentData,p._`${C.default.valCxt}.${C.default.parentData}`),ce.var(C.default.parentDataProperty,p._`${C.default.valCxt}.${C.default.parentDataProperty}`),ce.var(C.default.rootData,p._`${C.default.valCxt}.${C.default.rootData}`),Ce.dynamicRef&&ce.var(C.default.dynamicAnchors,p._`${C.default.valCxt}.${C.default.dynamicAnchors}`)},()=>{ce.var(C.default.instancePath,p._`""`),ce.var(C.default.parentData,p._`undefined`),ce.var(C.default.parentDataProperty,p._`undefined`),ce.var(C.default.rootData,C.default.data),Ce.dynamicRef&&ce.var(C.default.dynamicAnchors,p._`{}`)})}(ce,it),ce.code(Et)}):ce.func(Ce,p._`${C.default.data}, ${function(ce){return p._`{${C.default.instancePath}="", ${C.default.parentData}, ${C.default.parentDataProperty}, ${C.default.rootData}=${C.default.data}${ce.dynamicRef?p._`, ${C.default.dynamicAnchors}={}`:p.nil}}={}`}(it)}`,Ve.$async,()=>ce.code(P(Se,it)).code(Et))}function P(ce,Ce){const Se="object"==typeof ce&&ce[Ce.schemaId];return Se&&(Ce.code.source||Ce.code.process)?p._`/*# sourceURL=${Se} */`:p.nil}function T({schema:ce,self:Ce}){if("boolean"==typeof ce)return!ce;for(const Se in ce)if(Ce.RULES.all[Se])return!0;return!1}function O(ce){return"boolean"!=typeof ce.schema}function L(ce){(0,_.checkUnknownRules)(ce),function(ce){const{schema:Ce,errSchemaPath:Se,opts:Ve,self:it}=ce;Ce.$ref&&Ve.ignoreKeywordsWithRef&&(0,_.schemaHasRulesButRef)(Ce,it.RULES)&&it.logger.warn(`$ref: keywords ignored in schema at path "${Se}"`)}(ce)}function W(ce,Ce){if(ce.opts.jtd)return R(ce,[],!1,Ce);const Se=(0,e.getSchemaTypes)(ce.schema);R(ce,Se,!(0,e.coerceAndCheckDataType)(ce,Se),Ce)}function te({gen:ce,schemaEnv:Ce,schema:Se,errSchemaPath:Ve,opts:it}){const Et=Se.$comment;if(!0===it.$comment)ce.code(p._`${C.default.self}.logger.log(${Et})`);else if("function"==typeof it.$comment){const tt=p.str`${Ve}/$comment`,ht=ce.scopeValue("root",{ref:Ce.root});ce.code(p._`${C.default.self}.opts.$comment(${Et}, ${tt}, ${ht}.schema)`)}}function R(ce,Ce,Se,Ve){const{gen:it,schema:Et,data:tt,allErrors:ht,opts:He,self:Q}=ce,{RULES:fe}=Q;function A(x){!(0,n.shouldUseGroup)(Et,x)||(x.type?(it.if((0,t.checkDataType)(x.type,tt,He.strictNumbers)),k(ce,x),1===Ce.length&&Ce[0]===x.type&&Se&&(it.else(),(0,t.reportTypeError)(ce)),it.endIf()):k(ce,x),ht||it.if(p._`${C.default.errors} === ${Ve||0}`))}!Et.$ref||!He.ignoreKeywordsWithRef&&(0,_.schemaHasRulesButRef)(Et,fe)?(He.jtd||function(ce,Ce){ce.schemaEnv.meta||!ce.opts.strictTypes||(function(ce,Ce){if(Ce.length){if(!ce.dataTypes.length)return void(ce.dataTypes=Ce);Ce.forEach(Se=>{Ye(ce.dataTypes,Se)||nt(ce,`type "${Se}" not allowed by context "${ce.dataTypes.join(",")}"`)}),ce.dataTypes=ce.dataTypes.filter(Se=>Ye(Ce,Se))}}(ce,Ce),ce.opts.allowUnionTypes||function(ce,Ce){Ce.length>1&&(2!==Ce.length||!Ce.includes("null"))&&nt(ce,"use allowUnionTypes to allow union type keyword")}(ce,Ce),function(ce,Ce){const Se=ce.self.RULES.all;for(const Ve in Se){const it=Se[Ve];if("object"==typeof it&&(0,n.shouldUseRule)(ce.schema,it)){const{type:Et}=it.definition;Et.length&&!Et.some(tt=>Ue(Ce,tt))&&nt(ce,`missing type "${Et.join(",")}" for keyword "${Ve}"`)}}}(ce,ce.dataTypes))}(ce,Ce),it.block(()=>{for(const x of fe.rules)A(x);A(fe.post)})):it.block(()=>qe(ce,"$ref",fe.all.$ref.definition))}function k(ce,Ce){const{gen:Se,schema:Ve,opts:{useDefaults:it}}=ce;it&&(0,c.assignDefaults)(ce,Ce.type),Se.block(()=>{for(const Et of Ce.rules)(0,n.shouldUseRule)(Ve,Et)&&qe(ce,Et.keyword,Et.definition,Ce.type)})}function Ue(ce,Ce){return ce.includes(Ce)||"number"===Ce&&ce.includes("integer")}function Ye(ce,Ce){return ce.includes(Ce)||"integer"===Ce&&ce.includes("number")}function nt(ce,Ce){(0,_.checkStrictMode)(ce,Ce+=` at "${ce.schemaEnv.baseId+ce.errSchemaPath}" (strictTypes)`,ce.opts.strictTypes)}w.validateFunctionCode=function(ce){O(ce)&&(L(ce),T(ce))?function(ce){const{schema:Ce,opts:Se,gen:Ve}=ce;d(ce,()=>{Se.$comment&&Ce.$comment&&te(ce),function(ce){const{schema:Ce,opts:Se}=ce;void 0!==Ce.default&&Se.useDefaults&&Se.strictSchema&&(0,_.checkStrictMode)(ce,"default is ignored in the schema root")}(ce),Ve.let(C.default.vErrors,null),Ve.let(C.default.errors,0),Se.unevaluated&&function(ce){const{gen:Ce,validateName:Se}=ce;ce.evaluated=Ce.const("evaluated",p._`${Se}.evaluated`),Ce.if(p._`${ce.evaluated}.dynamicProps`,()=>Ce.assign(p._`${ce.evaluated}.props`,p._`undefined`)),Ce.if(p._`${ce.evaluated}.dynamicItems`,()=>Ce.assign(p._`${ce.evaluated}.items`,p._`undefined`))}(ce),W(ce),function(ce){const{gen:Ce,schemaEnv:Se,validateName:Ve,ValidationError:it,opts:Et}=ce;Se.$async?Ce.if(p._`${C.default.errors} === 0`,()=>Ce.return(C.default.data),()=>Ce.throw(p._`new ${it}(${C.default.vErrors})`)):(Ce.assign(p._`${Ve}.errors`,C.default.vErrors),Et.unevaluated&&function({gen:ce,evaluated:Ce,props:Se,items:Ve}){Se instanceof p.Name&&ce.assign(p._`${Ce}.props`,Se),Ve instanceof p.Name&&ce.assign(p._`${Ce}.items`,Ve)}(ce),Ce.return(p._`${C.default.errors} === 0`))}(ce)})}(ce):d(ce,()=>(0,r.topBoolOrEmptySchema)(ce))};class Te{constructor(Ce,Se,Ve){if((0,l.validateKeywordUsage)(Ce,Se,Ve),this.gen=Ce.gen,this.allErrors=Ce.allErrors,this.keyword=Ve,this.data=Ce.data,this.schema=Ce.schema[Ve],this.$data=Se.$data&&Ce.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,_.schemaRefOrVal)(Ce,this.schema,Ve,this.$data),this.schemaType=Se.schemaType,this.parentSchema=Ce.schema,this.params={},this.it=Ce,this.def=Se,this.$data)this.schemaCode=Ce.gen.const("vSchema",_e(this.$data,Ce));else if(this.schemaCode=this.schemaValue,!(0,l.validSchemaType)(this.schema,Se.schemaType,Se.allowUndefined))throw new Error(`${Ve} value must be ${JSON.stringify(Se.schemaType)}`);("code"in Se?Se.trackErrors:!1!==Se.errors)&&(this.errsCount=Ce.gen.const("_errs",C.default.errors))}result(Ce,Se,Ve){this.failResult((0,p.not)(Ce),Se,Ve)}failResult(Ce,Se,Ve){this.gen.if(Ce),Ve?Ve():this.error(),Se?(this.gen.else(),Se(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(Ce,Se){this.failResult((0,p.not)(Ce),void 0,Se)}fail(Ce){if(void 0===Ce)return this.error(),void(this.allErrors||this.gen.if(!1));this.gen.if(Ce),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(Ce){if(!this.$data)return this.fail(Ce);const{schemaCode:Se}=this;this.fail(p._`${Se} !== undefined && (${(0,p.or)(this.invalid$data(),Ce)})`)}error(Ce,Se,Ve){if(Se)return this.setParams(Se),this._error(Ce,Ve),void this.setParams({});this._error(Ce,Ve)}_error(Ce,Se){(Ce?g.reportExtraError:g.reportError)(this,this.def.error,Se)}$dataError(){(0,g.reportError)(this,this.def.$dataError||g.keyword$DataError)}reset(){if(void 0===this.errsCount)throw new Error('add "trackErrors" to keyword definition');(0,g.resetErrorsCount)(this.gen,this.errsCount)}ok(Ce){this.allErrors||this.gen.if(Ce)}setParams(Ce,Se){Se?Object.assign(this.params,Ce):this.params=Ce}block$data(Ce,Se,Ve=p.nil){this.gen.block(()=>{this.check$data(Ce,Ve),Se()})}check$data(Ce=p.nil,Se=p.nil){if(!this.$data)return;const{gen:Ve,schemaCode:it,schemaType:Et,def:tt}=this;Ve.if((0,p.or)(p._`${it} === undefined`,Se)),Ce!==p.nil&&Ve.assign(Ce,!0),(Et.length||tt.validateSchema)&&(Ve.elseIf(this.invalid$data()),this.$dataError(),Ce!==p.nil&&Ve.assign(Ce,!1)),Ve.else()}invalid$data(){const{gen:Ce,schemaCode:Se,schemaType:Ve,def:it,it:Et}=this;return(0,p.or)(function(){if(Ve.length){if(!(Se instanceof p.Name))throw new Error("ajv implementation error");const He=Array.isArray(Ve)?Ve:[Ve];return p._`${(0,t.checkDataTypes)(He,Se,Et.opts.strictNumbers,t.DataType.Wrong)}`}return p.nil}(),function(){if(it.validateSchema){const He=Ce.scopeValue("validate$data",{ref:it.validateSchema});return p._`!${He}(${Se})`}return p.nil}())}subschema(Ce,Se){const Ve=(0,f.getSubschema)(this.it,Ce);(0,f.extendSubschemaData)(Ve,this.it,Ce),(0,f.extendSubschemaMode)(Ve,Ce);const it=da(gr(gr({},this.it),Ve),{items:void 0,props:void 0});return function(ce,Ce){O(ce)&&(L(ce),T(ce))?function(ce,Ce){const{schema:Se,gen:Ve,opts:it}=ce;it.$comment&&Se.$comment&&te(ce),function(ce){const Ce=ce.schema[ce.opts.schemaId];Ce&&(ce.baseId=(0,y.resolveUrl)(ce.baseId,Ce))}(ce),function(ce){if(ce.schema.$async&&!ce.schemaEnv.$async)throw new Error("async schema in sync schema")}(ce);const Et=Ve.const("_errs",C.default.errors);W(ce,Et),Ve.var(Ce,p._`${Et} === ${C.default.errors}`)}(ce,Ce):(0,r.boolOrEmptySchema)(ce,Ce)}(it,Se),it}mergeEvaluated(Ce,Se){const{it:Ve,gen:it}=this;!Ve.opts.unevaluated||(!0!==Ve.props&&void 0!==Ce.props&&(Ve.props=_.mergeEvaluated.props(it,Ce.props,Ve.props,Se)),!0!==Ve.items&&void 0!==Ce.items&&(Ve.items=_.mergeEvaluated.items(it,Ce.items,Ve.items,Se)))}mergeValidEvaluated(Ce,Se){const{it:Ve,gen:it}=this;if(Ve.opts.unevaluated&&(!0!==Ve.props||!0!==Ve.items))return it.if(Se,()=>this.mergeEvaluated(Ce,p.Name)),!0}}function qe(ce,Ce,Se,Ve){const it=new Te(ce,Se,Ce);"code"in Se?Se.code(it,Ve):it.$data&&Se.validate?(0,l.funcKeywordCode)(it,Se):"macro"in Se?(0,l.macroKeywordCode)(it,Se):(Se.compile||Se.validate)&&(0,l.funcKeywordCode)(it,Se)}w.KeywordCxt=Te;const be=/^\/(?:[^~]|~0|~1)*$/,Ke=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function _e(ce,{dataLevel:Ce,dataNames:Se,dataPathArr:Ve}){let it,Et;if(""===ce)return C.default.rootData;if("/"===ce[0]){if(!be.test(ce))throw new Error(`Invalid JSON-pointer: ${ce}`);it=ce,Et=C.default.rootData}else{const Q=Ke.exec(ce);if(!Q)throw new Error(`Invalid JSON-pointer: ${ce}`);const fe=+Q[1];if(it=Q[2],"#"===it){if(fe>=Ce)throw new Error(He("property/index",fe));return Ve[Ce-fe]}if(fe>Ce)throw new Error(He("data",fe));if(Et=Se[Ce-fe],!it)return Et}let tt=Et;const ht=it.split("/");for(const Q of ht)Q&&(Et=p._`${Et}${(0,p.getProperty)((0,_.unescapeJsonPointer)(Q))}`,tt=p._`${tt} && ${Et}`);return tt;function He(Q,fe){return`Cannot access ${Q} ${fe} levels up, current level is ${Ce}`}}w.getData=_e},8472:(We,w,s)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0}),w.validateKeywordUsage=w.validSchemaType=w.funcKeywordCode=w.macroKeywordCode=void 0;const r=s(4110),e=s(3906),n=s(97),t=s(1207);function f(v){const{gen:d,data:z,it:b}=v;d.if(b.parentData,()=>d.assign(z,r._`${b.parentData}[${b.parentDataProperty}]`))}function y(v,d,z){if(void 0===z)throw new Error(`keyword "${d}" failed to compile`);return v.scopeValue("keyword","function"==typeof z?{ref:z}:{ref:z,code:(0,r.stringify)(z)})}w.macroKeywordCode=function(v,d){const{gen:z,keyword:b,schema:E,parentSchema:D,it:P}=v,m=d.macro.call(P.self,E,D,P),T=y(z,b,m);!1!==P.opts.validateSchema&&P.self.validateSchema(m,!0);const O=z.name("valid");v.subschema({schema:m,schemaPath:r.nil,errSchemaPath:`${P.errSchemaPath}/${b}`,topSchemaRef:T,compositeRule:!0},O),v.pass(O,()=>v.error(!0))},w.funcKeywordCode=function(v,d){var z;const{gen:b,keyword:E,schema:D,parentSchema:P,$data:m,it:T}=v;!function({schemaEnv:v},d){if(d.async&&!v.$async)throw new Error("async keyword in sync schema")}(T,d);const O=!m&&d.compile?d.compile.call(T.self,D,P,T):d.validate,S=y(b,E,O),L=b.let("valid");function K(te=(d.async?r._`await `:r.nil)){b.assign(L,r._`${te}${(0,n.callValidateCode)(v,S,T.opts.passContext?e.default.this:e.default.self,!("compile"in d&&!m||!1===d.schema))}`,d.modifying)}function oe(te){var re;b.if((0,r.not)(null!==(re=d.valid)&&void 0!==re?re:L),te)}v.block$data(L,function(){if(!1===d.errors)K(),d.modifying&&f(v),oe(()=>v.error());else{const te=d.async?function(){const te=b.let("ruleErrs",null);return b.try(()=>K(r._`await `),re=>b.assign(L,!1).if(r._`${re} instanceof ${T.ValidationError}`,()=>b.assign(te,r._`${re}.errors`),()=>b.throw(re))),te}():function(){const te=r._`${S}.errors`;return b.assign(te,null),K(r.nil),te}();d.modifying&&f(v),oe(()=>function(v,d){const{gen:z}=v;z.if(r._`Array.isArray(${d})`,()=>{z.assign(e.default.vErrors,r._`${e.default.vErrors} === null ? ${d} : ${e.default.vErrors}.concat(${d})`).assign(e.default.errors,r._`${e.default.vErrors}.length`),(0,t.extendErrors)(v)},()=>v.error())}(v,te))}}),v.ok(null!==(z=d.valid)&&void 0!==z?z:L)},w.validSchemaType=function(v,d,z=!1){return!d.length||d.some(b=>"array"===b?Array.isArray(v):"object"===b?v&&"object"==typeof v&&!Array.isArray(v):typeof v==b||z&&void 0===v)},w.validateKeywordUsage=function({schema:v,opts:d,self:z,errSchemaPath:b},E,D){if(Array.isArray(E.keyword)?!E.keyword.includes(D):E.keyword!==D)throw new Error("ajv implementation error");const P=E.dependencies;if(null==P?void 0:P.some(m=>!Object.prototype.hasOwnProperty.call(v,m)))throw new Error(`parent schema must have dependencies of ${D}: ${P.join(",")}`);if(E.validateSchema&&!E.validateSchema(v[D])){const T=`keyword "${D}" value is invalid at path "${b}": `+z.errorsText(E.validateSchema.errors);if("log"!==d.validateSchema)throw new Error(T);z.logger.error(T)}}},4182:(We,w,s)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0}),w.extendSubschemaMode=w.extendSubschemaData=w.getSubschema=void 0;const r=s(4110),e=s(406);w.getSubschema=function(l,{keyword:f,schemaProp:p,schema:C,schemaPath:y,errSchemaPath:_,topSchemaRef:g}){if(void 0!==f&&void 0!==C)throw new Error('both "keyword" and "schema" passed, only one allowed');if(void 0!==f){const v=l.schema[f];return void 0===p?{schema:v,schemaPath:r._`${l.schemaPath}${(0,r.getProperty)(f)}`,errSchemaPath:`${l.errSchemaPath}/${f}`}:{schema:v[p],schemaPath:r._`${l.schemaPath}${(0,r.getProperty)(f)}${(0,r.getProperty)(p)}`,errSchemaPath:`${l.errSchemaPath}/${f}/${(0,e.escapeFragment)(p)}`}}if(void 0!==C){if(void 0===y||void 0===_||void 0===g)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:C,schemaPath:y,topSchemaRef:g,errSchemaPath:_}}throw new Error('either "keyword" or "schema" must be passed')},w.extendSubschemaData=function(l,f,{dataProp:p,dataPropType:C,data:y,dataTypes:_,propertyName:g}){if(void 0!==y&&void 0!==p)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:v}=f;if(void 0!==p){const{errorPath:z,dataPathArr:b,opts:E}=f;d(v.let("data",r._`${f.data}${(0,r.getProperty)(p)}`,!0)),l.errorPath=r.str`${z}${(0,e.getErrorPath)(p,C,E.jsPropertySyntax)}`,l.parentDataProperty=r._`${p}`,l.dataPathArr=[...b,l.parentDataProperty]}function d(z){l.data=z,l.dataLevel=f.dataLevel+1,l.dataTypes=[],f.definedProperties=new Set,l.parentData=f.data,l.dataNames=[...f.dataNames,z]}void 0!==y&&(d(y instanceof r.Name?y:v.let("data",y,!0)),void 0!==g&&(l.propertyName=g)),_&&(l.dataTypes=_)},w.extendSubschemaMode=function(l,{jtdDiscriminator:f,jtdMetadata:p,compositeRule:C,createErrors:y,allErrors:_}){void 0!==C&&(l.compositeRule=C),void 0!==y&&(l.createErrors=y),void 0!==_&&(l.allErrors=_),l.jtdDiscriminator=f,l.jtdMetadata=p}},3291:(We,w,s)=>{"use strict";var r=s(1325).default;Object.defineProperty(w,"__esModule",{value:!0}),w.CodeGen=w.Name=w.nil=w.stringify=w.str=w._=w.KeywordCxt=void 0;var e=s(7279);Object.defineProperty(w,"KeywordCxt",{enumerable:!0,get:function(){return e.KeywordCxt}});var n=s(4110);Object.defineProperty(w,"_",{enumerable:!0,get:function(){return n._}}),Object.defineProperty(w,"str",{enumerable:!0,get:function(){return n.str}}),Object.defineProperty(w,"stringify",{enumerable:!0,get:function(){return n.stringify}}),Object.defineProperty(w,"nil",{enumerable:!0,get:function(){return n.nil}}),Object.defineProperty(w,"Name",{enumerable:!0,get:function(){return n.Name}}),Object.defineProperty(w,"CodeGen",{enumerable:!0,get:function(){return n.CodeGen}});const t=s(647),c=s(1718),l=s(7349),f=s(4763),p=s(4110),C=s(6769),y=s(736),_=s(406),g=s(4775),v=(G,ue)=>new RegExp(G,ue);v.code="new RegExp";const d=["removeAdditional","useDefaults","coerceTypes"],z=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),b={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},E={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'};class m{constructor(ue={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,ue=this.opts=gr(gr({},ue),function(G){var ue,we,Ue,Ye,nt,Te,qe,be,Ke,_e,ce,Ce,Se,Ve,it,Et,tt,ht,He,Q,fe,A,x,F;const Oe=G.strict,Ze=null===(ue=G.code)||void 0===ue?void 0:ue.optimize,Dt=!0===Ze||void 0===Ze?1:Ze||0,at=null!==(Ue=null===(we=G.code)||void 0===we?void 0:we.regExp)&&void 0!==Ue?Ue:v;return{strictSchema:null===(nt=null!==(Ye=G.strictSchema)&&void 0!==Ye?Ye:Oe)||void 0===nt||nt,strictNumbers:null===(qe=null!==(Te=G.strictNumbers)&&void 0!==Te?Te:Oe)||void 0===qe||qe,strictTypes:null!==(Ke=null!==(be=G.strictTypes)&&void 0!==be?be:Oe)&&void 0!==Ke?Ke:"log",strictTuples:null!==(ce=null!==(_e=G.strictTuples)&&void 0!==_e?_e:Oe)&&void 0!==ce?ce:"log",strictRequired:null!==(Se=null!==(Ce=G.strictRequired)&&void 0!==Ce?Ce:Oe)&&void 0!==Se&&Se,code:G.code?da(gr({},G.code),{optimize:Dt,regExp:at}):{optimize:Dt,regExp:at},loopRequired:null!==(Ve=G.loopRequired)&&void 0!==Ve?Ve:200,loopEnum:null!==(it=G.loopEnum)&&void 0!==it?it:200,meta:null===(Et=G.meta)||void 0===Et||Et,messages:null===(tt=G.messages)||void 0===tt||tt,inlineRefs:null===(ht=G.inlineRefs)||void 0===ht||ht,schemaId:null!==(He=G.schemaId)&&void 0!==He?He:"$id",addUsedSchema:null===(Q=G.addUsedSchema)||void 0===Q||Q,validateSchema:null===(fe=G.validateSchema)||void 0===fe||fe,validateFormats:null===(A=G.validateFormats)||void 0===A||A,unicodeRegExp:null===(x=G.unicodeRegExp)||void 0===x||x,int32range:null===(F=G.int32range)||void 0===F||F}}(ue));const{es5:we,lines:Ue}=this.opts.code;this.scope=new p.ValueScope({scope:{},prefixes:z,es5:we,lines:Ue}),this.logger=function(G){if(!1===G)return q;if(void 0===G)return console;if(G.log&&G.warn&&G.error)return G;throw new Error("logger must implement log, warn and error methods")}(ue.logger);const Ye=ue.validateFormats;ue.validateFormats=!1,this.RULES=(0,l.getRules)(),T.call(this,b,ue,"NOT SUPPORTED"),T.call(this,E,ue,"DEPRECATED","warn"),this._metaOpts=J.call(this),ue.formats&&L.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),ue.keywords&&W.call(this,ue.keywords),"object"==typeof ue.meta&&this.addMetaSchema(ue.meta),S.call(this),ue.validateFormats=Ye}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:ue,meta:we,schemaId:Ue}=this.opts;let Ye=g;"id"===Ue&&(Ye=gr({},g),Ye.id=Ye.$id,delete Ye.$id),we&&ue&&this.addMetaSchema(Ye,Ye[Ue],!1)}defaultMeta(){const{meta:ue,schemaId:we}=this.opts;return this.opts.defaultMeta="object"==typeof ue?ue[we]||ue:void 0}validate(ue,we){let Ue;if("string"==typeof ue){if(Ue=this.getSchema(ue),!Ue)throw new Error(`no schema with key or ref "${ue}"`)}else Ue=this.compile(ue);const Ye=Ue(we);return"$async"in Ue||(this.errors=Ue.errors),Ye}compile(ue,we){const Ue=this._addSchema(ue,we);return Ue.validate||this._compileSchemaEnv(Ue)}compileAsync(ue,we){if("function"!=typeof this.opts.loadSchema)throw new Error("options.loadSchema should be a function");const{loadSchema:Ue}=this.opts;return Ye.call(this,ue,we);function Ye(it,Et){return nt.apply(this,arguments)}function nt(){return(nt=r(function*(it,Et){yield Te.call(this,it.$schema);const tt=this._addSchema(it,Et);return tt.validate||be.call(this,tt)})).apply(this,arguments)}function Te(it){return qe.apply(this,arguments)}function qe(){return(qe=r(function*(it){it&&!this.getSchema(it)&&(yield Ye.call(this,{$ref:it},!0))})).apply(this,arguments)}function be(it){return Ke.apply(this,arguments)}function Ke(){return(Ke=r(function*(it){try{return this._compileSchemaEnv(it)}catch(Et){if(!(Et instanceof c.default))throw Et;return _e.call(this,Et),yield ce.call(this,Et.missingSchema),be.call(this,it)}})).apply(this,arguments)}function _e({missingSchema:it,missingRef:Et}){if(this.refs[it])throw new Error(`AnySchema ${it} is loaded but ${Et} cannot be resolved`)}function ce(it){return Ce.apply(this,arguments)}function Ce(){return(Ce=r(function*(it){const Et=yield Se.call(this,it);this.refs[it]||(yield Te.call(this,Et.$schema)),this.refs[it]||this.addSchema(Et,it,we)})).apply(this,arguments)}function Se(it){return Ve.apply(this,arguments)}function Ve(){return(Ve=r(function*(it){const Et=this._loading[it];if(Et)return Et;try{return yield this._loading[it]=Ue(it)}finally{delete this._loading[it]}})).apply(this,arguments)}}addSchema(ue,we,Ue,Ye=this.opts.validateSchema){if(Array.isArray(ue)){for(const Te of ue)this.addSchema(Te,void 0,Ue,Ye);return this}let nt;if("object"==typeof ue){const{schemaId:Te}=this.opts;if(nt=ue[Te],void 0!==nt&&"string"!=typeof nt)throw new Error(`schema ${Te} must be string`)}return we=(0,C.normalizeId)(we||nt),this._checkUnique(we),this.schemas[we]=this._addSchema(ue,Ue,we,Ye,!0),this}addMetaSchema(ue,we,Ue=this.opts.validateSchema){return this.addSchema(ue,we,!0,Ue),this}validateSchema(ue,we){if("boolean"==typeof ue)return!0;let Ue;if(Ue=ue.$schema,void 0!==Ue&&"string"!=typeof Ue)throw new Error("$schema must be a string");if(Ue=Ue||this.opts.defaultMeta||this.defaultMeta(),!Ue)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const Ye=this.validate(Ue,ue);if(!Ye&&we){const nt="schema is invalid: "+this.errorsText();if("log"!==this.opts.validateSchema)throw new Error(nt);this.logger.error(nt)}return Ye}getSchema(ue){let we;for(;"string"==typeof(we=O.call(this,ue));)ue=we;if(void 0===we){const{schemaId:Ue}=this.opts,Ye=new f.SchemaEnv({schema:{},schemaId:Ue});if(we=f.resolveSchema.call(this,Ye,ue),!we)return;this.refs[ue]=we}return we.validate||this._compileSchemaEnv(we)}removeSchema(ue){if(ue instanceof RegExp)return this._removeAllSchemas(this.schemas,ue),this._removeAllSchemas(this.refs,ue),this;switch(typeof ue){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const we=O.call(this,ue);return"object"==typeof we&&this._cache.delete(we.schema),delete this.schemas[ue],delete this.refs[ue],this}case"object":{this._cache.delete(ue);let Ue=ue[this.opts.schemaId];return Ue&&(Ue=(0,C.normalizeId)(Ue),delete this.schemas[Ue],delete this.refs[Ue]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(ue){for(const we of ue)this.addKeyword(we);return this}addKeyword(ue,we){let Ue;if("string"==typeof ue)Ue=ue,"object"==typeof we&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),we.keyword=Ue);else{if("object"!=typeof ue||void 0!==we)throw new Error("invalid addKeywords parameters");if(Ue=(we=ue).keyword,Array.isArray(Ue)&&!Ue.length)throw new Error("addKeywords: keyword must be string or non-empty array")}if(te.call(this,Ue,we),!we)return(0,_.eachItem)(Ue,nt=>re.call(this,nt)),this;R.call(this,we);const Ye=da(gr({},we),{type:(0,y.getJSONTypes)(we.type),schemaType:(0,y.getJSONTypes)(we.schemaType)});return(0,_.eachItem)(Ue,0===Ye.type.length?nt=>re.call(this,nt,Ye):nt=>Ye.type.forEach(Te=>re.call(this,nt,Ye,Te))),this}getKeyword(ue){const we=this.RULES.all[ue];return"object"==typeof we?we.definition:!!we}removeKeyword(ue){const{RULES:we}=this;delete we.keywords[ue],delete we.all[ue];for(const Ue of we.rules){const Ye=Ue.rules.findIndex(nt=>nt.keyword===ue);Ye>=0&&Ue.rules.splice(Ye,1)}return this}addFormat(ue,we){return"string"==typeof we&&(we=new RegExp(we)),this.formats[ue]=we,this}errorsText(ue=this.errors,{separator:we=", ",dataVar:Ue="data"}={}){return ue&&0!==ue.length?ue.map(Ye=>`${Ue}${Ye.instancePath} ${Ye.message}`).reduce((Ye,nt)=>Ye+we+nt):"No errors"}$dataMetaSchema(ue,we){const Ue=this.RULES.all;ue=JSON.parse(JSON.stringify(ue));for(const Ye of we){const nt=Ye.split("/").slice(1);let Te=ue;for(const qe of nt)Te=Te[qe];for(const qe in Ue){const be=Ue[qe];if("object"!=typeof be)continue;const{$data:Ke}=be.definition,_e=Te[qe];Ke&&_e&&(Te[qe]=$(_e))}}return ue}_removeAllSchemas(ue,we){for(const Ue in ue){const Ye=ue[Ue];(!we||we.test(Ue))&&("string"==typeof Ye?delete ue[Ue]:Ye&&!Ye.meta&&(this._cache.delete(Ye.schema),delete ue[Ue]))}}_addSchema(ue,we,Ue,Ye=this.opts.validateSchema,nt=this.opts.addUsedSchema){let Te;const{schemaId:qe}=this.opts;if("object"==typeof ue)Te=ue[qe];else{if(this.opts.jtd)throw new Error("schema must be object");if("boolean"!=typeof ue)throw new Error("schema must be object or boolean")}let be=this._cache.get(ue);if(void 0!==be)return be;Ue=(0,C.normalizeId)(Te||Ue);const Ke=C.getSchemaRefs.call(this,ue,Ue);return be=new f.SchemaEnv({schema:ue,schemaId:qe,meta:we,baseId:Ue,localRefs:Ke}),this._cache.set(be.schema,be),nt&&!Ue.startsWith("#")&&(Ue&&this._checkUnique(Ue),this.refs[Ue]=be),Ye&&this.validateSchema(ue,!0),be}_checkUnique(ue){if(this.schemas[ue]||this.refs[ue])throw new Error(`schema with key or id "${ue}" already exists`)}_compileSchemaEnv(ue){if(ue.meta?this._compileMetaSchema(ue):f.compileSchema.call(this,ue),!ue.validate)throw new Error("ajv implementation error");return ue.validate}_compileMetaSchema(ue){const we=this.opts;this.opts=this._metaOpts;try{f.compileSchema.call(this,ue)}finally{this.opts=we}}}function T(G,ue,we,Ue="error"){for(const Ye in G){const nt=Ye;nt in ue&&this.logger[Ue](`${we}: option ${Ye}. ${G[nt]}`)}}function O(G){return G=(0,C.normalizeId)(G),this.schemas[G]||this.refs[G]}function S(){const G=this.opts.schemas;if(G)if(Array.isArray(G))this.addSchema(G);else for(const ue in G)this.addSchema(G[ue],ue)}function L(){for(const G in this.opts.formats){const ue=this.opts.formats[G];ue&&this.addFormat(G,ue)}}function W(G){if(Array.isArray(G))this.addVocabulary(G);else{this.logger.warn("keywords option as map is deprecated, pass array");for(const ue in G){const we=G[ue];we.keyword||(we.keyword=ue),this.addKeyword(we)}}}function J(){const G=gr({},this.opts);for(const ue of d)delete G[ue];return G}w.default=m,m.ValidationError=t.default,m.MissingRefError=c.default;const q={log(){},warn(){},error(){}},oe=/^[a-z_$][a-z0-9_$:-]*$/i;function te(G,ue){const{RULES:we}=this;if((0,_.eachItem)(G,Ue=>{if(we.keywords[Ue])throw new Error(`Keyword ${Ue} is already defined`);if(!oe.test(Ue))throw new Error(`Keyword ${Ue} has invalid name`)}),ue&&ue.$data&&!("code"in ue)&&!("validate"in ue))throw new Error('$data keyword must have "code" or "validate" function')}function re(G,ue,we){var Ue;const Ye=null==ue?void 0:ue.post;if(we&&Ye)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:nt}=this;let Te=Ye?nt.post:nt.rules.find(({type:be})=>be===we);if(Te||(Te={type:we,rules:[]},nt.rules.push(Te)),nt.keywords[G]=!0,!ue)return;const qe={keyword:G,definition:da(gr({},ue),{type:(0,y.getJSONTypes)(ue.type),schemaType:(0,y.getJSONTypes)(ue.schemaType)})};ue.before?V.call(this,Te,qe,ue.before):Te.rules.push(qe),nt.all[G]=qe,null===(Ue=ue.implements)||void 0===Ue||Ue.forEach(be=>this.addKeyword(be))}function V(G,ue,we){const Ue=G.rules.findIndex(Ye=>Ye.keyword===we);Ue>=0?G.rules.splice(Ue,0,ue):(G.rules.push(ue),this.logger.warn(`rule ${we} is not defined`))}function R(G){let{metaSchema:ue}=G;void 0!==ue&&(G.$data&&this.opts.$data&&(ue=$(ue)),G.validateSchema=this.compile(ue,!0))}const k={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function $(G){return{anyOf:[G,k]}}},6552:(We,w,s)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});const r=s(5439);r.code='require("ajv/dist/runtime/equal").default',w.default=r},1813:(We,w)=>{"use strict";function s(r){const e=r.length;let c,n=0,t=0;for(;t<e;)n++,c=r.charCodeAt(t++),c>=55296&&c<=56319&&t<e&&(c=r.charCodeAt(t),56320==(64512&c)&&t++);return n}Object.defineProperty(w,"__esModule",{value:!0}),w.default=s,s.code='require("ajv/dist/runtime/ucs2length").default'},647:(We,w)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});class s extends Error{constructor(e){super("validation failed"),this.errors=e,this.ajv=this.validation=!0}}w.default=s},1076:(We,w,s)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0}),w.validateAdditionalItems=void 0;const r=s(4110),e=s(406),t={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:l}})=>r.str`must NOT have more than ${l} items`,params:({params:{len:l}})=>r._`{limit: ${l}}`},code(l){const{parentSchema:f,it:p}=l,{items:C}=f;Array.isArray(C)?c(l,C):(0,e.checkStrictMode)(p,'"additionalItems" is ignored when "items" is not an array of schemas')}};function c(l,f){const{gen:p,schema:C,data:y,keyword:_,it:g}=l;g.items=!0;const v=p.const("len",r._`${y}.length`);if(!1===C)l.setParams({len:f.length}),l.pass(r._`${v} <= ${f.length}`);else if("object"==typeof C&&!(0,e.alwaysValidSchema)(g,C)){const z=p.var("valid",r._`${v} <= ${f.length}`);p.if((0,r.not)(z),()=>function(z){p.forRange("i",f.length,v,b=>{l.subschema({keyword:_,dataProp:b,dataPropType:e.Type.Num},z),g.allErrors||p.if((0,r.not)(z),()=>p.break())})}(z)),l.ok(z)}}w.validateAdditionalItems=c,w.default=t},2:(We,w,s)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});const r=s(97),e=s(4110),n=s(3906),t=s(406);w.default={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:f})=>e._`{additionalProperty: ${f.additionalProperty}}`},code(f){const{gen:p,schema:C,parentSchema:y,data:_,errsCount:g,it:v}=f;if(!g)throw new Error("ajv implementation error");const{allErrors:d,opts:z}=v;if(v.props=!0,"all"!==z.removeAdditional&&(0,t.alwaysValidSchema)(v,C))return;const b=(0,r.allSchemaProperties)(y.properties),E=(0,r.allSchemaProperties)(y.patternProperties);function m(S){p.code(e._`delete ${_}[${S}]`)}function T(S){if("all"===z.removeAdditional||z.removeAdditional&&!1===C)m(S);else{if(!1===C)return f.setParams({additionalProperty:S}),f.error(),void(d||p.break());if("object"==typeof C&&!(0,t.alwaysValidSchema)(v,C)){const L=p.name("valid");"failing"===z.removeAdditional?(O(S,L,!1),p.if((0,e.not)(L),()=>{f.reset(),m(S)})):(O(S,L),d||p.if((0,e.not)(L),()=>p.break()))}}}function O(S,L,W){const J={keyword:"additionalProperties",dataProp:S,dataPropType:t.Type.Str};!1===W&&Object.assign(J,{compositeRule:!0,createErrors:!1,allErrors:!1}),f.subschema(J,L)}p.forIn("key",_,S=>{b.length||E.length?p.if(function(S){let L;if(b.length>8){const W=(0,t.schemaRefOrVal)(v,y.properties,"properties");L=(0,r.isOwnProperty)(p,W,S)}else L=b.length?(0,e.or)(...b.map(W=>e._`${S} === ${W}`)):e.nil;return E.length&&(L=(0,e.or)(L,...E.map(W=>e._`${(0,r.usePattern)(f,W)}.test(${S})`))),(0,e.not)(L)}(S),()=>T(S)):T(S)}),f.ok(e._`${g} === ${n.default.errors}`)}}},8329:(We,w,s)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});const r=s(406);w.default={keyword:"allOf",schemaType:"array",code(n){const{gen:t,schema:c,it:l}=n;if(!Array.isArray(c))throw new Error("ajv implementation error");const f=t.name("valid");c.forEach((p,C)=>{if((0,r.alwaysValidSchema)(l,p))return;const y=n.subschema({keyword:"allOf",schemaProp:C},f);n.ok(f),n.mergeEvaluated(y)})}}},9757:(We,w,s)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});const r=s(97);w.default={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:r.validateUnion,error:{message:"must match a schema in anyOf"}}},9536:(We,w,s)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});const r=s(4110),e=s(406);w.default={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:c,max:l}})=>void 0===l?r.str`must contain at least ${c} valid item(s)`:r.str`must contain at least ${c} and no more than ${l} valid item(s)`,params:({params:{min:c,max:l}})=>void 0===l?r._`{minContains: ${c}}`:r._`{minContains: ${c}, maxContains: ${l}}`},code(c){const{gen:l,schema:f,parentSchema:p,data:C,it:y}=c;let _,g;const{minContains:v,maxContains:d}=p;y.opts.next?(_=void 0===v?1:v,g=d):_=1;const z=l.const("len",r._`${C}.length`);if(c.setParams({min:_,max:g}),void 0===g&&0===_)return void(0,e.checkStrictMode)(y,'"minContains" == 0 without "maxContains": "contains" keyword ignored');if(void 0!==g&&_>g)return(0,e.checkStrictMode)(y,'"minContains" > "maxContains" is always invalid'),void c.fail();if((0,e.alwaysValidSchema)(y,f)){let m=r._`${z} >= ${_}`;return void 0!==g&&(m=r._`${m} && ${z} <= ${g}`),void c.pass(m)}y.items=!0;const b=l.name("valid");function E(){const m=l.name("_valid"),T=l.let("count",0);D(m,()=>l.if(m,()=>function(m){l.code(r._`${m}++`),void 0===g?l.if(r._`${m} >= ${_}`,()=>l.assign(b,!0).break()):(l.if(r._`${m} > ${g}`,()=>l.assign(b,!1).break()),1===_?l.assign(b,!0):l.if(r._`${m} >= ${_}`,()=>l.assign(b,!0)))}(T)))}function D(m,T){l.forRange("i",0,z,O=>{c.subschema({keyword:"contains",dataProp:O,dataPropType:e.Type.Num,compositeRule:!0},m),T()})}void 0===g&&1===_?D(b,()=>l.if(b,()=>l.break())):0===_?(l.let(b,!0),void 0!==g&&l.if(r._`${C}.length > 0`,E)):(l.let(b,!1),E()),c.result(b,()=>c.reset())}}},472:(We,w,s)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0}),w.validateSchemaDeps=w.validatePropertyDeps=w.error=void 0;const r=s(4110),e=s(406),n=s(97);w.error={message:({params:{property:p,depsCount:C,deps:y}})=>r.str`must have ${1===C?"property":"properties"} ${y} when property ${p} is present`,params:({params:{property:p,depsCount:C,deps:y,missingProperty:_}})=>r._`{property: ${p},
    missingProperty: ${_},
    depsCount: ${C},