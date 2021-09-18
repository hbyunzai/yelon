---
order: 101
title: 云在WS
type: Documents
---

系统集成了`RxStomp`与`RabbitMQ`进行消息的传输与推送。 但此架构中只涉及到前台的消息推送与接收。

## 如何配置

`stomp`信息应设置于`environment.ts`与`environent.prod.ts`中以区分当下处于开发环境还是生产环境

### 本地
```ts
export const environment = {
  ...
  api: {
    stomp: {
      connectHeaders: {
        login: 'login',
        passcode: 'passcode'
      },
      brokerURL: 'ws://0.0.0.0:0000/ws',
      heartbeatIncoming: 1000 * 60,
      heartbeatOutgoing: 1000 * 60,
      reconnectDelay: 30000000
    }
  }
  ...
} as Environment;
```
### 线上

```ts
export const environment = {
  api: {
    stomp: {
      connectHeaders: {
        login: 'login',
        passcode: 'passcode'
      },
      brokerURL: '/websocket/ws',
      heartbeatIncoming: 1000 * 60,
      heartbeatOutgoing: 1000 * 60,
      reconnectDelay: 30000000
    }
  }
} as Environment;
```

### 注意

**connectHeader中的login和passcode在开发/部署时需要替换为`MQ`平台的用户名密码**


## 如何使用
使用时应注入`YzStompService`，其中含有两个函数`publish`,`watch`

```ts
// publish 推送消息
publish(parameters:IRxStompPublishParams):void;
// watch 订阅消息
watch(destination:string, headers?:StompHeaders):Observable<IMessage>;
```
