import { DialogRedActions, dialogReducer } from './../dialogsReducer';
import { dialogsPersonType, messageType } from "../../types/types"
import imgandrey from '../img/andrey.jpg'
import imgfyodor from '../img/fyodor.jpg'
import imgkirill from '../img/kirill.jpg'
import imgsasha from '../img/sasha.jpg'
import imgvadim from '../img/vadim.jpg'

let state = {
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

test('newMessage', () => {
    const action = DialogRedActions.newMessage('newMessage')

    const localstate = dialogReducer(state, action)

    expect(localstate.messages.length).toBe(5)
    expect(localstate.messages[4].message).toBe('newMessage')
})