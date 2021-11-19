import { actionsTypes, dialogsPersonType, messageType } from '../types/types'
import imgandrey from './img/andrey.jpg'
import imgfyodor from './img/fyodor.jpg'
import imgkirill from './img/kirill.jpg'
import imgsasha from './img/sasha.jpg'
import imgvadim from './img/vadim.jpg'




let initialState = {
    persons: [
        { img: imgvadim, url: "vadim", name: "Vadim", id: 1 },
        { img: imgfyodor, url: "fyodor", name: "Fyodor", id: 2 },
        { img: imgkirill, url: "kirill", name: "Kirill", id: 4 },
        { img: imgandrey, url: "andrey", name: "Andrey", id: 3 },
        { img: imgsasha, url: "sasha", name: "Sasha", id: 5 }
    ] as Array<dialogsPersonType>,
    messages: [
        { author: "you", id: 1, message: "Hello there" },
        { author: "not", id: 2, message: "Hi man" },
        { author: "you", id: 3, message: "How are you" },
        { author: "not", id: 4, message: "I'm good" }
    ] as Array<messageType>,
}

// Reducer

type initialStateType = typeof initialState
export const dialogReducer = (state = initialState, action: actionsTypes<typeof DialogRedActions>): initialStateType => {
    switch(action.type) {
        case 'ADD_MESSAGE':
            let newMessage = {
                author: "you",
                id: 7, 
                message: action.text
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state
    }
}

// Actions

export const DialogRedActions = {
    newMessage: (text: string) => ({ type : 'ADD_MESSAGE', text } as const)
}

