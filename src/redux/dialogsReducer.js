import imgandrey from './img/andrey.jpg'
import imgfyodor from './img/fyodor.jpg'
import imgkirill from './img/kirill.jpg'
import imgsasha from './img/sasha.jpg'
import imgvadim from './img/vadim.jpg'

const ADD_MESSAGE = 'dialogs/ADD_MESSAGE'



let initialState = {
    persons: [
        { img: imgvadim, url: "vadim", name: "Vadim", id: 1 },
        { img: imgfyodor, url: "fyodor", name: "Fyodor", id: 2 },
        { img: imgkirill, url: "kirill", name: "Kirill", id: 4 },
        { img: imgandrey, url: "andrey", name: "Andrey", id: 3 },
        { img: imgsasha, url: "sasha", name: "Sasha", id: 5 }
    ],
    messages: [
        { author: "you", id: 1, message: "Hello there" },
        { author: "not", id: 2, message: "Hi man" },
        { author: "you", id: 3, message: "How are you" },
        { author: "not", id: 4, message: "I'm good" }
    ],
}

export const dialogReducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_MESSAGE:
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

export const newMessage = (text) => { return ({ type : ADD_MESSAGE, text }) } 
