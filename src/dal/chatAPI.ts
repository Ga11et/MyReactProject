
// Types

import { ChatMessageType } from "../types/types"


type SubscriberMessageRecievedType = (messages: ChatMessageType[]) => void
type SubscriberSetStatusType = (status: boolean) => void
type SubscribersType = SubscriberSetStatusType | SubscriberMessageRecievedType
type SubscribersEventsType = 'setStatus' | 'messageRecieved'

// consts

let ws: WebSocket
let subscribers = {
    'setStatus': [] as SubscriberSetStatusType[],
    'messageRecieved': [] as SubscriberMessageRecievedType[]
}

// Functions

const createChannel = () => {
    cleanUp()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    subscribers.setStatus.forEach((subscriber) => subscriber(false))
    ws.addEventListener('open', openHandler)
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
}
const closeHandler = () => {
    console.log('Unconnected, try to connect')
    setTimeout(createChannel, 1000)
}
const messageHandler = (event: MessageEvent) => {
    const newMessages = JSON.parse(event.data)
    subscribers['messageRecieved'].forEach( subscriber => subscriber(newMessages))
}
const openHandler = () => {
    console.log('channel opened')
    subscribers['setStatus'].forEach((subscriber) => subscriber(true))
}
const cleanUp = () => {
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.close()

}

// API

export const ChatAPI = {
    subscribe(event: SubscribersEventsType, callback: SubscribersType) {
        // @ts-ignore
        subscribers[event].push(callback)
        return () => {
            // @ts-ignore
            subscribers[event] = subscribers[event].filter( subscriber => subscriber !== callback)
        }
    },
    unSubscribe(event: SubscribersEventsType, callback: SubscribersType) {
            // @ts-ignore
            subscribers[event] = subscribers[event].filter( subscriber => subscriber !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    },
    start() {
        createChannel()
    },
    stop() {
        subscribers['messageRecieved'] = []
        subscribers['setStatus'] = []
        cleanUp()
    }
}