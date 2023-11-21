"use strict";(self.webpackChunkyelon=self.webpackChunkyelon||[]).push([[925],{9925:(m,r,d)=>{d.r(r),d.d(r,{MockModule:()=>k});var i=d(3423),u=d(4400),p=d(7465),o=d(7716),n=d(3965);const h=[{path:"",component:p.S,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:(()=>{class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/mock/docs/getting-started.en-US.md","zh-CN":"packages/mock/docs/getting-started.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><h2 id="Foreword"><a class="lake-link"><i data-anchor="Foreword"></i></a>Foreword</h2><p><code>@yelon/mock</code> is a simulation data generator to help the front-end to develop and prototype separate from the back-end progress and reduce some monotony particularly while writing automated tests.</p><p><strong>Features</strong></p><ul><li><p>All of the Angular projects</p></li><li><p>Unobtrusive</p></li><li><p>Simple usage</p></li><li><p>Support <a target="_blank" href="http://mockjs.com/" data-url="http://mockjs.com/">mock.js</a></p></li></ul><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><p>Install <code>@yelon/mock</code> from <code>yarn</code>.</p><pre class="hljs language-bash"><code>yarn add @yelon/mock -D</code></pre><p>Please refer to <a target="_blank" href="https://github.com/hbyunzai/ng-yunzai/blob/master/src/app/global-config.module.ts#L26-L30" data-url="https://github.com/hbyunzai/ng-yunzai/blob/master/src/app/global-config.module.ts#L26-L30">global-config.module.ts</a> import the <a href="/mock/rule" data-url="/mock/rule">Mock Rule data</a>.</p><h3 id="MockOptions"><a class="lake-link"><i data-anchor="MockOptions"></i></a>MockOptions</h3><blockquote><p>You can override them via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>.</p></blockquote><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[data]</code></td><td><code>any</code></td><td>-</td><td>Mock data rule</td><td>\u2705</td></tr><tr><td><code>[delay]</code></td><td><code>number</code></td><td><code>300</code></td><td>Request delay, unit is milliseconds</td><td>\u2705</td></tr><tr><td><code>[force]</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether to force all requests to Mock, <code>true</code> means to return a 404 error directly when the requested URL does not exist, <code>false</code> means to send a real HTTP request when the request is missed</td><td>\u2705</td></tr><tr><td><code>[log]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether to print Mock request information, make up for the browser without Network information; it will output <span>\u{1f47d}Mock</span> when hit</td><td>\u2705</td></tr><tr><td><code>[executeOtherInterceptors]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether continue to call other interceptor <code>intercept</code> method after mock rule hit</td><td>\u2705</td></tr><tr><td><code>[copy]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether to return copy data</td><td>\u2705</td></tr></tbody></table><blockquote><p><strong>Lazy modules</strong> need to import <code>forChild</code>, You can import <code>forChild</code> in the <code>SharedModule</code>.</p></blockquote></section>',meta:{order:1,title:"Getting Started",type:"Documents"},toc:[{id:"Foreword",title:"Foreword",h:2},{id:"Usage",title:"Usage",h:2,children:[{id:"MockOptions",title:"MockOptions",h:3}]}]},"zh-CN":{content:'<section class="markdown"><h2 id="\u5199\u5728\u524d\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524d\u9762"></i></a>\u5199\u5728\u524d\u9762</h2><p>Mock \u662f\u6307\u901a\u8fc7\u751f\u6210\u6a21\u62df\u6570\u636e\u8ba9\u524d\u7aef\u5f00\u53d1\u4eba\u5458\u72ec\u7acb\u4e8e\u540e\u7aef\u8fdb\u884c\u5f00\u53d1\uff0c\u6709\u65f6\u6211\u4eec\u4e5f\u4f1a\u8fd0\u7528\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u3002</p><p><code>@yelon/mock</code> \u662f\u4e00\u4e2a\u7b80\u5355 Mock \u529f\u80fd\uff0c\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u7279\u5f81\uff1a</p><ul><li><p>\u4efb\u610f Angular \u9879\u76ee</p></li><li><p>\u5f00\u53d1\u65e0\u4fb5\u5165</p></li><li><p>\u8d85\u7b80\u5355\u7528\u6cd5</p></li><li><p>\u652f\u6301 <a target="_blank" href="http://mockjs.com/" data-url="http://mockjs.com/">mock.js</a></p></li></ul><h2 id="\u5982\u4f55\u4f7f\u7528"><a class="lake-link"><i data-anchor="\u5982\u4f55\u4f7f\u7528"></i></a>\u5982\u4f55\u4f7f\u7528</h2><p>\u5b89\u88c5 <code>@yelon/mock</code> \u4f9d\u8d56\u5305\uff1a</p><pre class="hljs language-bash"><code>yarn add @yelon/mock -D</code></pre><p>\u53c2\u8003 <a target="_blank" href="https://github.com/hbyunzai/ng-yunzai/blob/master/src/app/global-config.module.ts#L26-L30" data-url="https://github.com/hbyunzai/ng-yunzai/blob/master/src/app/global-config.module.ts#L26-L30">global-config.module.ts</a> \u5bfc\u5165<a href="/mock/rule" data-url="/mock/rule">Mock \u89c4\u5219\u6570\u636e</a>\u3002</p><h3 id="MockOptions\u914d\u7f6e"><a class="lake-link"><i data-anchor="MockOptions\u914d\u7f6e"></i></a>MockOptions \u914d\u7f6e</h3><blockquote><p>\u53ef\u4ee5\u901a\u8fc7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5c40\u914d\u7f6e</a>\u8986\u76d6\u5b83\u4eec\u3002</p></blockquote><table><thead><tr><th>\u6210\u5458</th><th>\u8bf4\u660e</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th><th>\u5168\u5c40\u914d\u7f6e</th></tr></thead><tbody><tr><td><code>[data]</code></td><td><code>any</code></td><td>-</td><td>Mock \u6570\u636e\u89c4\u5219</td><td>\u2705</td></tr><tr><td><code>[delay]</code></td><td><code>number</code></td><td><code>300</code></td><td>\u8bf7\u6c42\u5ef6\u8fdf\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2</td><td>\u2705</td></tr><tr><td><code>[force]</code></td><td><code>boolean</code></td><td><code>false</code></td><td>\u662f\u5426\u5f3a\u5236\u6240\u6709\u8bf7\u6c42\u90fdMock\uff0c<code>true</code> \u8868\u793a\u5f53\u8bf7\u6c42\u7684URL\u4e0d\u5b58\u5728\u65f6\u76f4\u63a5\u8fd4\u56de 404 \u9519\u8bef\uff0c<code>false</code> \u8868\u793a\u672a\u547d\u4e2d\u65f6\u53d1\u9001\u771f\u5b9eHTTP\u8bf7\u6c42</td><td>\u2705</td></tr><tr><td><code>[log]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>\u662f\u5426\u6253\u5370 Mock \u8bf7\u6c42\u4fe1\u606f\uff0c\u5f25\u8865\u6d4f\u89c8\u5668\u65e0Network\u4fe1\u606f\uff1b\u5f53\u8bf7\u6c42\u7ecf\u8fc7 Mock \u4f1a\u63a5\u6536\u3010\u{1f47d}Mock\u3011</td><td>\u2705</td></tr><tr><td><code>[executeOtherInterceptors]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>\u662f\u5426\u62e6\u622a\u547d\u4e2d\u540e\u7ee7\u7eed\u8c03\u7528\u540e\u7eed\u62e6\u622a\u5668\u7684 <code>intercept</code> \u65b9\u6cd5</td><td>\u2705</td></tr><tr><td><code>[copy]</code></td><td><code>boolean</code></td><td><code>true</code></td><td>\u662f\u5426\u8fd4\u56de\u526f\u672c\u6570\u636e</td><td>\u2705</td></tr></tbody></table><blockquote><p>\u82e5<strong>\u61d2\u6a21\u5757</strong>\u8fd8\u9700\u8981\u5bfc\u5165 <code>forChild</code> \u786e\u4fddHTTP\u62e6\u622a\u5668\u6709\u6548\uff0c\u4e00\u822c\u53ef\u4ee5\u76f4\u63a5\u5728 SharedModule \u76f4\u63a5\u4f7f\u7528 <code>forChild</code>\u3002</p></blockquote><h3 id="\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f"><a class="lake-link"><i data-anchor="\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f"></i></a>\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f</h3><p>Mock \u5e76\u975e\u662f\u771f\u5b9e\u6570\u636e\uff0c\u5927\u90e8\u5206\u573a\u666f\u662f\u9488\u5bf9\u5f00\u53d1\u672c\u5730\u6216\u6d4b\u8bd5\u73af\u5883\uff1b\u6240\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4e0d\u5e94\u8be5\u5305\u62ec Mock \u6a21\u5757\u4ee5\u53ca\u89c4\u5219\u6570\u636e\u3002\u56e0\u6b64\u4e0a\u8ff0\u624d\u4f1a\u6839\u636e <code>!environment.production</code> \u4f9d\u636e\u73af\u5883\u6765\u51b3\u5b9a\u662f\u5426\u52a0\u8f7d <code>YelonMockModule</code>\u3002</p><p>\u5f53\u7136\uff0c\u4f60\u4f9d\u7136\u53ef\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u4e5f\u4f7f\u7528\u8fd9\u79cd\u89c4\u5219\uff0c\u5c31\u50cf //ng-yunzai.github.io/ng-yunzai/ \u4e00\u6837\uff0c\u9700\u8981\u4e00\u4e9b\u6a21\u62df\u8bf7\u6c42\u6765\u4fdd\u8bc1\u73af\u5883\u7684\u8fd0\u884c\u3002</p><pre class="hljs language-ts"><code>import { YelonMockModule } from \'@yelon/mock\';\nimport * as MOCKDATA from \'../../_mock\';\n@NgModule({\n  imports: [\n    YelonMockModule.forRoot({ data: MOCKDATA })\n  ]\n})</code></pre></section>',meta:{order:1,title:"\u5f00\u59cb\u4f7f\u7528",type:"Documents"},toc:[{id:"\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{id:"\u5982\u4f55\u4f7f\u7528",title:"\u5982\u4f55\u4f7f\u7528",h:2,children:[{id:"MockOptions\u914d\u7f6e",title:"MockOptions \u914d\u7f6e",h:3},{id:"\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f",title:"\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u5f00\u53d1\u73af\u5883\u6709\u6548\uff1f",h:3}]}]}},demo:!1},this.codes=[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-mock-getting-started"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,a){1&t&&o._UZ(0,"app-docs",0),2&t&&o.Q6J("codes",a.codes)("item",a.item)},directives:[n.P],styles:["[_nghost-%COMP%]{display:block}"]}),e})()},{path:"rule",redirectTo:"rule/zh",pathMatch:"full"},{path:"rule/:lang",component:(()=>{class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/mock/docs/rule.en-US.md","zh-CN":"packages/mock/docs/rule.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><h2 id="Foreword"><a class="lake-link"><i data-anchor="Foreword"></i></a>Foreword</h2><p>The Mock rule data is an <code>Object</code> object, Key is request declaration, and Value is response data, for example:</p><pre class="hljs language-ts"><code>export const USERS = {\n  \'GET /users\': { users: [1, 2], total: 2 },\n}</code></pre><p>When send requesting <code>/users</code> via <code>HttpClient</code>, it will directly response <code>{ users: [1, 2], total: 2 }</code>, and will not send any HTTP requests in <code>Network</code> panel.</p><h2 id="Key"><a class="lake-link"><i data-anchor="Key"></i></a>Key</h2><p>Use <code>\' \'</code>space to separate the request method and URL, the request method can be ignored, the default is <code>GET</code>; the URL supports routing parameters and regular expressions. E.g:</p><pre class="hljs language-ts"><code>export const USERS = {\n  \'GET /users\': null,\n  // GET: can be ignored\n  \'/users/1\': null,\n  // POST\n  \'POST /users/1\': null,\n  // Routing parameters\n  \'/users/:id\': null,\n  // Regular expressions need to be wrapped with `()`\n  \'/data/(.*)\': null\n};</code></pre><h2 id="Value"><a class="lake-link"><i data-anchor="Value"></i></a>Value</h2><p>Supports three types: <code>Object</code>, <code>Array</code>, <code>(req: MockRequest) => any</code>.</p><pre class="hljs language-ts"><code>import { MockStatusError } from \'@yelon/mock\';\n\nexport const USERS = {\n  // Array\n  \'/users\': [ { uid: 1 }, { uid: 2 } ],\n  // Object\n  \'/users\': { uid: 1 },\n  // Function\n  \'/qs\': (req: MockRequest) => req.queryString.pi,\n  // Support HttpResponse\n  \'/http\': (req: MockRequest) => new HttpResponse({ body: \'Body\', headers: new HttpHeaders({ \'token\': \'1\' }) }),\n  // Send Status Error\n  \'/404\': () => { throw new MockStatusError(404); }\n};</code></pre><h3 id="MockRequest"><a class="lake-link"><i data-anchor="MockRequest"></i></a>MockRequest</h3><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>[params]</code></td><td><code>any</code></td><td>Routing parameter, <code>/:id</code> then <code>params.id</code></td></tr><tr><td><code>[queryString]</code></td><td><code>any</code></td><td>URL parameter, <code>/users?pi=1&ps=10</code> then <code>queryString.pi</code>, <code>queryString.ps</code></td></tr><tr><td><code>[headers]</code></td><td><code>any</code></td><td>Headers</td></tr><tr><td><code>[body]</code></td><td><code>any</code></td><td>Body</td></tr><tr><td><code>[original]</code></td><td><code>HttpRequest&lt;any></code></td><td><code>HttpRequest</code></td></tr></tbody></table><h3 id="MockStatusError"><a class="lake-link"><i data-anchor="MockStatusError"></i></a>MockStatusError</h3><p>When you want to respond to a <code>404</code> http status.</p><h2 id="Demo"><a class="lake-link"><i data-anchor="Demo"></i></a>Demo</h2><pre class="hljs language-ts"><code>import { MockStatusError } from \'@yelon/mock\';\n\nexport const USERS = {\n  // Support object or array values\n  \'GET /users\': { users: [1, 2], total: 2 },\n  // GET: can be ignored\n  \'/users/1\': { users: [1, 2], total: 2 },\n  // POST\n  \'POST /users/1\': { uid: 1 },\n  // Get request parameters: queryString\u3001headers\u3001body\n  \'/qs\': (req: MockRequest) => req.queryString.pi,\n  // Routing parameters\n  \'/users/:id\': (req: MockRequest) => req.params, // /users/100, output: { id: 100 }\n  // Send Status Error\n  \'/404\': () => { throw new MockStatusError(404); },\n  // Regular expressions need to be wrapped with `()`\n  \'/data/(.*)\': (req: MockRequest) => req\n};</code></pre><h2 id="Storagerule"><a class="lake-link"><i data-anchor="Storagerule"></i></a>Storage rule</h2><p>In general, Mock is required during development, so recommended to create <code>_mock</code> directory in the project root directory and create <code>index.ts</code> file to export all data rules. See <a target="_blank" href="https://github.com/hbyunzai/ng-yunzai/tree/master/_mock" data-url="https://github.com/hbyunzai/ng-yunzai/tree/master/_mock">ng-yunzai/_mock</a>.</p></section>',meta:{order:2,title:"Rule Data",type:"Documents"},toc:[{id:"Foreword",title:"Foreword",h:2},{id:"Key",title:"Key",h:2},{id:"Value",title:"Value",h:2,children:[{id:"MockRequest",title:"MockRequest",h:3},{id:"MockStatusError",title:"MockStatusError",h:3}]},{id:"Demo",title:"Demo",h:2},{id:"Storagerule",title:"Storage rule",h:2}]},"zh-CN":{content:'<section class="markdown"><h2 id="\u5199\u5728\u524d\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524d\u9762"></i></a>\u5199\u5728\u524d\u9762</h2><p>Mock \u89c4\u5219\u6570\u636e\u662f\u4e00\u4e2a <code>Object</code> \u5bf9\u8c61\uff0cKey \u4e3a\u8bf7\u6c42\u57df\u58f0\u660e\uff0cValue \u4e3a\u54cd\u5e94\u5185\u5bb9\uff0c\u4f8b\u5982\uff1a</p><pre class="hljs language-ts"><code>export const USERS = {\n  \'GET /users\': { users: [1, 2], total: 2 },\n}</code></pre><p>\u8868\u793a\u5f53\u901a\u8fc7 <code>HttpClient.get(\'/users\')</code> \u8bbf\u95ee\u65f6\uff0c\u4f1a\u76f4\u63a5\u8fd4\u56de <code>{ users: [1, 2], total: 2 }</code>\uff0c\u5e76\u4e14\u4e0d\u4f1a\u53d1\u9001\u4efb\u4f55 HTTP \u8bf7\u6c42\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 <code>Network</code> \u9762\u677f\u6765\u786e\u8ba4\u3002</p><h2 id="Key\u8bf7\u6c42\u57df\u58f0\u660e"><a class="lake-link"><i data-anchor="Key\u8bf7\u6c42\u57df\u58f0\u660e"></i></a>Key \u8bf7\u6c42\u57df\u58f0\u660e</h2><p>\u4f7f\u7528 <code>\' \'</code> \u7a7a\u683c\u6765\u533a\u9694\u8bf7\u6c42\u65b9\u6cd5\u548cURL\uff0c\u8bf7\u6c42\u65b9\u6cd5\u53ef\u5ffd\u7565\uff0c\u9ed8\u8ba4\u4e3a <code>GET</code>\uff1bURL \u652f\u6301\u8def\u7531\u53c2\u6570\u548c\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u4e00\u4e9b\u6709\u6548\u7684 Key\uff1a</p><pre class="hljs language-ts"><code>export const USERS = {\n  \'GET /users\': null,\n  // GET \u53ef\u7701\u7565\n  \'/users/1\': null,\n  // POST \u8bf7\u6c42\n  \'POST /users/1\': null,\n  // \u8def\u7531\u53c2\u6570\n  \'/users/:id\': null,\n  // \u6b63\u5219\u8868\u8fbe\u5f0f\u9700\u8981\u7528 `()` \u5305\u88f9\n  \'/data/(.*)\': null\n};</code></pre><h2 id="Value\u54cd\u5e94\u5185\u5bb9"><a class="lake-link"><i data-anchor="Value\u54cd\u5e94\u5185\u5bb9"></i></a>Value \u54cd\u5e94\u5185\u5bb9</h2><p>\u54cd\u5e94\u5185\u5bb9\u652f\u6301\u4e09\u79cd\u7c7b\u578b\uff1a<code>Object</code>\u3001<code>Array</code>\u3001<code>(req: MockRequest) => any</code>\u3002</p><pre class="hljs language-ts"><code>import { MockStatusError } from \'@yelon/mock\';\n\nexport const USERS = {\n  // Array\n  \'/users\': [ { uid: 1 }, { uid: 2 } ],\n  // Object\n  \'/users\': { uid: 1 },\n  // Function\n  \'/qs\': (req: MockRequest) => req.queryString.pi,\n  // \u652f\u6301\u8fd4\u56de\u5b8c\u6574\u7684 HttpResponse\n  \'/http\': (req: MockRequest) => new HttpResponse({ body: \'Body\', headers: new HttpHeaders({ \'token\': \'1\' }) }),\n  // \u53d1\u9001 Status \u9519\u8bef\n  \'/404\': () => { throw new MockStatusError(404); }\n};</code></pre><h3 id="MockRequest"><a class="lake-link"><i data-anchor="MockRequest"></i></a>MockRequest</h3><table><thead><tr><th>\u540d\u79f0</th><th>\u7c7b\u578b</th><th>\u63cf\u8ff0</th></tr></thead><tbody><tr><td><code>[params]</code></td><td><code>any</code></td><td>\u8def\u7531\u53c2\u6570\uff0c<code>/:id</code> \u5219 <code>params.id</code></td></tr><tr><td><code>[queryString]</code></td><td><code>any</code></td><td>URL\u53c2\u6570\uff0c<code>/users?pi=1&ps=10</code> \u5219 <code>queryString.pi</code>\u3001<code>queryString.ps</code></td></tr><tr><td><code>[headers]</code></td><td><code>any</code></td><td>Headers \u503c</td></tr><tr><td><code>[body]</code></td><td><code>any</code></td><td>\u8bf7\u6c42 body</td></tr><tr><td><code>[original]</code></td><td><code>HttpRequest&lt;any></code></td><td>\u539f\u59cb <code>HttpRequest</code></td></tr></tbody></table><h3 id="MockStatusError"><a class="lake-link"><i data-anchor="MockStatusError"></i></a>MockStatusError</h3><p>\u5f53\u4f60\u5e0c\u671b\u54cd\u5e94\u4e00\u4e2a <code>404</code> \u5f02\u5e38\u65f6\u3002</p><h2 id="\u4e00\u4e9b\u793a\u4f8b"><a class="lake-link"><i data-anchor="\u4e00\u4e9b\u793a\u4f8b"></i></a>\u4e00\u4e9b\u793a\u4f8b</h2><pre class="hljs language-ts"><code>import { MockStatusError } from \'@yelon/mock\';\n\nexport const USERS = {\n  // \u652f\u6301\u503c\u4e3a Object \u548c Array\n  \'GET /users\': { users: [1, 2], total: 2 },\n  // GET \u53ef\u7701\u7565\n  \'/users/1\': { users: [1, 2], total: 2 },\n  // POST \u8bf7\u6c42\n  \'POST /users/1\': { uid: 1 },\n  // \u83b7\u53d6\u8bf7\u6c42\u53c2\u6570 queryString\u3001headers\u3001body\n  \'/qs\': (req: MockRequest) => req.queryString.pi,\n  // \u8def\u7531\u53c2\u6570\n  \'/users/:id\': (req: MockRequest) => req.params, // /users/100, output: { id: 100 }\n  // \u53d1\u9001 Status \u9519\u8bef\n  \'/404\': () => { throw new MockStatusError(404); },\n  // \u4f7f\u7528 () \u8868\u793a\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\n  \'/data/(.*)\': (req: MockRequest) => req\n};</code></pre><h2 id="\u5b58\u50a8\u89c4\u5219"><a class="lake-link"><i data-anchor="\u5b58\u50a8\u89c4\u5219"></i></a>\u5b58\u50a8\u89c4\u5219</h2><p>\u4e00\u822c\u6765\u8bf4 Mock \u90fd\u662f\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u9700\u8981\uff0c\u56e0\u6b64\u5efa\u8bae\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a <code>_mock</code> \u76ee\u5f55\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a <code>index.ts</code> \u6587\u4ef6\u7528\u4e8e\u5bfc\u51fa\u6240\u6709\u6570\u636e\u89c4\u5219\uff0c\u53c2\u8003 <a target="_blank" href="https://github.com/hbyunzai/ng-yunzai/tree/master/_mock" data-url="https://github.com/hbyunzai/ng-yunzai/tree/master/_mock">ng-yunzai/_mock</a>\u3002</p></section>',meta:{order:2,title:"\u89c4\u5219\u6570\u636e",type:"Documents"},toc:[{id:"\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{id:"Key\u8bf7\u6c42\u57df\u58f0\u660e",title:"Key \u8bf7\u6c42\u57df\u58f0\u660e",h:2},{id:"Value\u54cd\u5e94\u5185\u5bb9",title:"Value \u54cd\u5e94\u5185\u5bb9",h:2,children:[{id:"MockRequest",title:"MockRequest",h:3},{id:"MockStatusError",title:"MockStatusError",h:3}]},{id:"\u4e00\u4e9b\u793a\u4f8b",title:"\u4e00\u4e9b\u793a\u4f8b",h:2},{id:"\u5b58\u50a8\u89c4\u5219",title:"\u5b58\u50a8\u89c4\u5219",h:2}]}},demo:!1},this.codes=[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-mock-rule"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,a){1&t&&o._UZ(0,"app-docs",0),2&t&&o.Q6J("codes",a.codes)("item",a.item)},directives:[n.P],styles:["[_nghost-%COMP%]{display:block}"]}),e})()}]}];let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[u.m,i.Bz.forChild(h)]]}),e})()}}]);