---
order: 101
title: Yunzai WS
type: Documents
---

The system integrates `RxStomp` and `RabbitMQ` for message transmission and push. But this architecture only involves the push and reception of messages in the foreground.

## How to configure

`stomp` information should be set in `environment.ts` and `environent.prod.ts` to distinguish the current development environment or production environment

### Local
```ts
export const environment = {
  ...
  api: {
    stomp: {
      connectHeaders: {
        login:'login',
        passcode:'passcode'
      },
      brokerURL:'ws://0.0.0.0:0000/ws',
      heartbeatIncoming: 1000 * 60,
      heartbeatOutgoing: 1000 * 60,
      reconnectDelay: 30000000
    }
  }
  ...
} as Environment;
```
### Online

```ts
export const environment = {
  api: {
    stomp: {
      connectHeaders: {
        login:'login',
        passcode:'passcode'
      },
      brokerURL:'/websocket/ws',
      heartbeatIncoming: 1000 * 60,
      heartbeatOutgoing: 1000 * 60,
      reconnectDelay: 30000000
    }
  }
} as Environment;
```

### Notice

**The login and passcode in connectHeader need to be replaced with the username of the `MQ` platform during development username and password**


## How to use
You should inject `YzStompService` when using it, which contains two functions `publish`,`watch`

```ts
// publish push message
publish(parameters:IRxStompPublishParams):void;
// watch subscription message
watch(destination:string, headers?:StompHeaders):Observable<IMessage>;
```
