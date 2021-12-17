import { Dispatch } from "redux"
import { ChatAPI } from "../dal/chatAPI"
import { actionsTypes, ChatMessageType } from "../types/types"

const initialState = {
    messages: [] as ChatMessageType[],
    isConnection: false
}

// Reducer

export type ChatStateType = typeof initialState
export const chatReducer = (state = initialState, action: actionsTypes<typeof ChatRedActions>): ChatStateType => {
    switch (action.type) {
        case 'MESSAGES_RECIEVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        case 'SET_CONNECTION':
            console.log(action.payload.status)
            return {
                ...state,
                isConnection: action.payload.status
            }
        default:
            return state
    }
}

// Actions

export const ChatRedActions = {
    messagesRecieved: (messages: ChatMessageType[]) => ({ 
        type: 'MESSAGES_RECIEVED', payload: {messages}
    } as const),
    setConnection: (status: boolean) => ({ 
        type: 'SET_CONNECTION', payload: {status}
    } as const)
}

// Thunks

type AuthRedDispatchType = Dispatch<actionsTypes<typeof ChatRedActions>>

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: AuthRedDispatchType) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: ChatMessageType[]) => {
            dispatch(ChatRedActions.messagesRecieved(messages))
        }
    }
    return _newMessageHandler
}
let _setStatusHandler: ( (status: boolean) => void ) | null = null 
const setStatusHandlerCreator = (dispatch: AuthRedDispatchType) => {
    if (_setStatusHandler === null) {
        _setStatusHandler = (status: boolean) => {
            dispatch(ChatRedActions.setConnection(status))
        }
    }
    return _setStatusHandler
}

export const ChatRedThunks = {
    startMessagesListening: () => (dispatch: AuthRedDispatchType) => {
        ChatAPI.start()
        ChatAPI.subscribe( 'messageRecieved', newMessageHandlerCreator(dispatch) )
        ChatAPI.subscribe( 'setStatus', setStatusHandlerCreator(dispatch) )
    },
    stopMessagesListening: () => (dispatch: AuthRedDispatchType) => {
        ChatAPI.unSubscribe( 'messageRecieved', newMessageHandlerCreator(dispatch) )
        ChatAPI.unSubscribe( 'setStatus', setStatusHandlerCreator(dispatch) )
        ChatAPI.stop()
    },
    sendMessage: (message: string) => (dispatch: AuthRedDispatchType) => {
        ChatAPI.sendMessage(message)
    }
}

