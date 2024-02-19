import{a as m}from"./chunk-32TA2PVO.js";import"./chunk-OFVIWSG4.js";import{a as p}from"./chunk-7QWQMMPQ.js";import"./chunk-GT7J47QU.js";import"./chunk-EEIABIPE.js";import"./chunk-2I5LH6TG.js";import"./chunk-DALIXSDU.js";import{Nb as l,Xa as r,Za as s,ea as a,lb as c}from"./chunk-4LVFALOC.js";var d=(()=>{let n=class n{constructor(){this.item={cols:1,urls:{"en-US":"packages/socket/docs/getting-started.en-US.md","zh-CN":"packages/socket/docs/getting-started.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h1 id="env">env</h1><pre class="hljs language-ts"><code>import { YelonMockModule } from '@yelon/mock';
import { Environment } from '@yelon/theme';

import * as MOCKDATA from '../../_mock';

const form: FormData = new FormData();
form.set('username', 'cuihaonan');
form.set('password', 'com.apache.log4j');
form.set('grant_type', 'password');
form.set('client_id', 'webapp');
form.set('scope', 'webapp');
form.set('client_secret', '123456');

export const environment = {
  production: false,
  useHash: true,
  api: {
    ...
    socket: {
      connectHeaders: {
        login: 'guest',
        passcode: 'guest'
      },
      brokerURL: 'ws://222.30.194.61:15674/ws',
      heartbeatIncoming: 1000 * 60,
      heartbeatOutgoing: 1000 * 60,
      reconnectDelay: 30000000
    }
    ...
  },
  modules: [YelonMockModule.forRoot({ data: MOCKDATA })]
} as Environment;</code></pre><h1 id="config">config</h1><p>global-config.module.ts</p><pre class="hljs language-ts"><code>const yunzaiConfig: YunzaiConfig = {
  ...
  socket: { ...environment.api['socket'] },
  ...
};</code></pre><h1 id="api">api</h1><pre class="hljs language-ts"><code>export declare class RxStompConfig {
    /**
     * The URL for the STOMP broker to connect to.
     * Typically like \`"ws://broker.329broker.com:15674/ws"\` or \`"wss://broker.329broker.com:15674/ws"\`.
     *
     * Only one of this or [RxStompConfig#webSocketFactory]{@link RxStompConfig#webSocketFactory} need to be set.
     * If both are set, [RxStompConfig#webSocketFactory]{@link RxStompConfig#webSocketFactory} will be used.
     *
     * Maps to: [Client#brokerURL]{@link Client#brokerURL}
     */
    brokerURL?: string;
    /**
     * STOMP versions to attempt during STOMP handshake. By default versions \`1.0\`, \`1.1\`, and \`1.2\` are attempted.
     *
     * Example:
     * \`\`\`javascript
     *        // Try only versions 1.0 and 1.1
     *        rxStompConfig.stompVersions= new Versions(['1.0', '1.1']);
     * \`\`\`
     *
     * Maps to: [Client#stompVersions]{@link Client#stompVersions}
     */
    stompVersions?: Versions;
    /**
     * Set it to log the actual raw communication with the broker.
     * When unset, it logs headers of the parsed frames.
     *
     * Change in this effects from next broker reconnect.
     *
     * **Caution: this assumes that frames only have valid UTF8 strings.**
     *
     * Maps to: [Client#logRawCommunication]{@link Client#logRawCommunication}.
     */
    logRawCommunication?: boolean;
    /** Enable client debugging? */
    debug?: debugFnType;
    /**
     * This function should return a WebSocket or a similar (e.g. SockJS) object.
     * If your STOMP Broker supports WebSockets, prefer setting [Client#brokerURL]{@link Client#brokerURL}.
     *
     * If both this and [Client#brokerURL]{@link Client#brokerURL} are set, this will be used.
     *
     * Example:
     * \`\`\`javascript
     *        // use a WebSocket
     *        rxStompConfig.webSocketFactory= function () {
     *          return new WebSocket("wss://broker.329broker.com:15674/ws");
     *        };
     *
     *        // Typical usage with SockJS
     *        rxStompConfig.webSocketFactory= function () {
     *          return new SockJS("http://broker.329broker.com/stomp");
     *        };
     * \`\`\`
     *
     * Maps to: [Client#webSocketFactory]{@link Client#webSocketFactory}
     */
    webSocketFactory?: () => any;
    /**
     * Will retry if Stomp connection is not established in specified milliseconds.
     * Default 0, which implies wait for ever.
     *
     * Maps to: [Client#connectionTimeout]{@link Client#connectionTimeout}.
     */
    connectionTimeout?: number;
    /**
     * Automatically reconnect with delay in milliseconds, set to 0 to disable.
     *
     * Maps to: [Client#reconnectDelay]{@link Client#reconnectDelay}
     */
    reconnectDelay?: number;
    /**
     * Incoming heartbeat interval in milliseconds. Set to 0 to disable.
     *
     * Maps to: [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
     */
    heartbeatIncoming?: number;
    /**
     * Outgoing heartbeat interval in milliseconds. Set to 0 to disable.
     *
     * Maps to: [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}
     */
    heartbeatOutgoing?: number;
    /**
     * Enable non-standards compliant mode of splitting of outgoing large text packets.
     * See [Client#splitLargeFrames]{@link Client#splitLargeFrames} for details.
     * Useful with Java Spring based brokers.
     *
     * Maps to: [Client#splitLargeFrames]{@link Client#splitLargeFrames}.
     */
    splitLargeFrames?: boolean;
    /**
     * Maps to: [Client#forceBinaryWSFrames]{@link Client#forceBinaryWSFrames}.
     */
    forceBinaryWSFrames?: boolean;
    /**
     * See [Client#appendMissingNULLonIncoming]{@link Client#appendMissingNULLonIncoming}.
     */
    appendMissingNULLonIncoming?: boolean;
    /**
     * Maps to: [Client#maxWebSocketChunkSize]{@link Client#maxWebSocketChunkSize}.
     */
    maxWebSocketChunkSize?: number;
    /**
     * Maps to: [Client#discardWebsocketOnCommFailure]{@link Client#discardWebsocketOnCommFailure}.
     */
    discardWebsocketOnCommFailure?: boolean;
    /**
     * Connection headers, important keys - \`login\`, \`passcode\`, \`host\`.
     * Though STOMP 1.2 standard marks these keys to be present, check your broker documentation for
     * details specific to your broker.
     *
     * Maps to: [Client#connectHeaders]{@link Client#connectHeaders}
     */
    connectHeaders?: StompHeaders;
    /**
     * Disconnection headers.
     *
     * Maps to: [Client#disconnectHeaders]{@link Client#disconnectHeaders}
     */
    disconnectHeaders?: StompHeaders;
    /**
     * Callback, invoked on before a connection connection to the STOMP broker.
     *
     * You can change configuration of the rxStomp, which will impact the immediate connect.
     * It is valid to call [RxStomp#deactivate]{@link RxStomp#deactivate} in this callback.
     *
     * As of version 0.1.1, this callback can be
     * [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
     * (i.e., it can return a
     * [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)).
     * In that case connect will be called only after the Promise is resolved.
     * This can be used to reliably fetch credentials, access token etc. from some other service
     * in an asynchronous way.
     *
     * As of 0.3.5, this callback will receive [RxStomp]{@link RxStomp} as parameter.
     *
     * Maps to: [Client#beforeConnect]{@link Client#beforeConnect}
     */
    beforeConnect?: (client: RxStomp) => void | Promise<void>;
    /**
     * Callback invoked on every ERROR frame. If the callback returns the ID of a currently
     * subscribed destination, the frame will be emitted as an error on the corresponding
     * observable(s), terminating them.
     *
     * Importantly, since those observables are now closed, this means a re-SUBSCRIBE to
     * the erroneous destination will _not_ be attempted during an automatic reconnection of
     * the websocket.
     */
    correlateErrors?: (error: IFrame) => string;
}</code></pre></section>`,meta:{order:1,title:"Getting Started",type:"Documents"},toc:[{id:"env",title:"env",h:1},{id:"config",title:"config",h:1},{id:"api",title:"api",h:1}]},"zh-CN":{content:`<section class="markdown"><h1 id="env">env</h1><pre class="hljs language-ts"><code>import { YelonMockModule } from '@yelon/mock';
import { Environment } from '@yelon/theme';

import * as MOCKDATA from '../../_mock';

const form: FormData = new FormData();
form.set('username', 'cuihaonan');
form.set('password', 'com.apache.log4j');
form.set('grant_type', 'password');
form.set('client_id', 'webapp');
form.set('scope', 'webapp');
form.set('client_secret', '123456');

export const environment = {
  production: false,
  useHash: true,
  api: {
    ...
    socket: {
      connectHeaders: {
        login: 'guest',
        passcode: 'guest'
      },
      brokerURL: 'ws://222.30.194.61:15674/ws',
      heartbeatIncoming: 1000 * 60,
      heartbeatOutgoing: 1000 * 60,
      reconnectDelay: 30000000
    }
    ...
  },
  modules: [YelonMockModule.forRoot({ data: MOCKDATA })]
} as Environment;</code></pre><h1 id="config">config</h1><p>global-config.module.ts</p><pre class="hljs language-ts"><code>const yunzaiConfig: YunzaiConfig = {
  ...
  socket: { ...environment.api['socket'] },
  ...
};</code></pre><h1 id="api">api</h1><pre class="hljs language-ts"><code>export declare class RxStompConfig {
    /**
     * The URL for the STOMP broker to connect to.
     * Typically like \`"ws://broker.329broker.com:15674/ws"\` or \`"wss://broker.329broker.com:15674/ws"\`.
     *
     * Only one of this or [RxStompConfig#webSocketFactory]{@link RxStompConfig#webSocketFactory} need to be set.
     * If both are set, [RxStompConfig#webSocketFactory]{@link RxStompConfig#webSocketFactory} will be used.
     *
     * Maps to: [Client#brokerURL]{@link Client#brokerURL}
     */
    brokerURL?: string;
    /**
     * STOMP versions to attempt during STOMP handshake. By default versions \`1.0\`, \`1.1\`, and \`1.2\` are attempted.
     *
     * Example:
     * \`\`\`javascript
     *        // Try only versions 1.0 and 1.1
     *        rxStompConfig.stompVersions= new Versions(['1.0', '1.1']);
     * \`\`\`
     *
     * Maps to: [Client#stompVersions]{@link Client#stompVersions}
     */
    stompVersions?: Versions;
    /**
     * Set it to log the actual raw communication with the broker.
     * When unset, it logs headers of the parsed frames.
     *
     * Change in this effects from next broker reconnect.
     *
     * **Caution: this assumes that frames only have valid UTF8 strings.**
     *
     * Maps to: [Client#logRawCommunication]{@link Client#logRawCommunication}.
     */
    logRawCommunication?: boolean;
    /** Enable client debugging? */
    debug?: debugFnType;
    /**
     * This function should return a WebSocket or a similar (e.g. SockJS) object.
     * If your STOMP Broker supports WebSockets, prefer setting [Client#brokerURL]{@link Client#brokerURL}.
     *
     * If both this and [Client#brokerURL]{@link Client#brokerURL} are set, this will be used.
     *
     * Example:
     * \`\`\`javascript
     *        // use a WebSocket
     *        rxStompConfig.webSocketFactory= function () {
     *          return new WebSocket("wss://broker.329broker.com:15674/ws");
     *        };
     *
     *        // Typical usage with SockJS
     *        rxStompConfig.webSocketFactory= function () {
     *          return new SockJS("http://broker.329broker.com/stomp");
     *        };
     * \`\`\`
     *
     * Maps to: [Client#webSocketFactory]{@link Client#webSocketFactory}
     */
    webSocketFactory?: () => any;
    /**
     * Will retry if Stomp connection is not established in specified milliseconds.
     * Default 0, which implies wait for ever.
     *
     * Maps to: [Client#connectionTimeout]{@link Client#connectionTimeout}.
     */
    connectionTimeout?: number;
    /**
     * Automatically reconnect with delay in milliseconds, set to 0 to disable.
     *
     * Maps to: [Client#reconnectDelay]{@link Client#reconnectDelay}
     */
    reconnectDelay?: number;
    /**
     * Incoming heartbeat interval in milliseconds. Set to 0 to disable.
     *
     * Maps to: [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
     */
    heartbeatIncoming?: number;
    /**
     * Outgoing heartbeat interval in milliseconds. Set to 0 to disable.
     *
     * Maps to: [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}
     */
    heartbeatOutgoing?: number;
    /**
     * Enable non-standards compliant mode of splitting of outgoing large text packets.
     * See [Client#splitLargeFrames]{@link Client#splitLargeFrames} for details.
     * Useful with Java Spring based brokers.
     *
     * Maps to: [Client#splitLargeFrames]{@link Client#splitLargeFrames}.
     */
    splitLargeFrames?: boolean;
    /**
     * Maps to: [Client#forceBinaryWSFrames]{@link Client#forceBinaryWSFrames}.
     */
    forceBinaryWSFrames?: boolean;
    /**
     * See [Client#appendMissingNULLonIncoming]{@link Client#appendMissingNULLonIncoming}.
     */
    appendMissingNULLonIncoming?: boolean;
    /**
     * Maps to: [Client#maxWebSocketChunkSize]{@link Client#maxWebSocketChunkSize}.
     */
    maxWebSocketChunkSize?: number;
    /**
     * Maps to: [Client#discardWebsocketOnCommFailure]{@link Client#discardWebsocketOnCommFailure}.
     */
    discardWebsocketOnCommFailure?: boolean;
    /**
     * Connection headers, important keys - \`login\`, \`passcode\`, \`host\`.
     * Though STOMP 1.2 standard marks these keys to be present, check your broker documentation for
     * details specific to your broker.
     *
     * Maps to: [Client#connectHeaders]{@link Client#connectHeaders}
     */
    connectHeaders?: StompHeaders;
    /**
     * Disconnection headers.
     *
     * Maps to: [Client#disconnectHeaders]{@link Client#disconnectHeaders}
     */
    disconnectHeaders?: StompHeaders;
    /**
     * Callback, invoked on before a connection connection to the STOMP broker.
     *
     * You can change configuration of the rxStomp, which will impact the immediate connect.
     * It is valid to call [RxStomp#deactivate]{@link RxStomp#deactivate} in this callback.
     *
     * As of version 0.1.1, this callback can be
     * [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
     * (i.e., it can return a
     * [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)).
     * In that case connect will be called only after the Promise is resolved.
     * This can be used to reliably fetch credentials, access token etc. from some other service
     * in an asynchronous way.
     *
     * As of 0.3.5, this callback will receive [RxStomp]{@link RxStomp} as parameter.
     *
     * Maps to: [Client#beforeConnect]{@link Client#beforeConnect}
     */
    beforeConnect?: (client: RxStomp) => void | Promise<void>;
    /**
     * Callback invoked on every ERROR frame. If the callback returns the ID of a currently
     * subscribed destination, the frame will be emitted as an error on the corresponding
     * observable(s), terminating them.
     *
     * Importantly, since those observables are now closed, this means a re-SUBSCRIBE to
     * the erroneous destination will _not_ be attempted during an automatic reconnection of
     * the websocket.
     */
    correlateErrors?: (error: IFrame) => string;
}</code></pre></section>`,meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",type:"Documents"},toc:[{id:"env",title:"env",h:1},{id:"config",title:"config",h:1},{id:"api",title:"api",h:1}]}},demo:!1},this.codes=[]}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a({type:n,selectors:[["app-socket-getting-started"]],hostVars:2,hostBindings:function(e,o){e&2&&s("d-block","true")},standalone:!0,features:[l],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,o){e&1&&c(0,"app-docs",0),e&2&&r("codes",o.codes)("item",o.item)},dependencies:[m],encapsulation:2});let t=n;return t})();var C=[{path:"",component:p,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:d}]}];export{C as routes};
