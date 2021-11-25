import { friendsType, linkType } from '../types/types'
import imgandrey from './img/andrey.jpg'
import imgfyodor from './img/fyodor.jpg'
import imgkirill from './img/kirill.jpg'
import imgsasha from './img/sasha.jpg'
import imgvadim from './img/vadim.jpg'

// State

let initialState = {
    links: [
        {name: "Profile", to: "/profile", id: 1111},
        {name: "Messages", to: "/dialogs", id: 2222},
        {name: "News", to: "/news", id: 3333},
        {name: "Music", to: "/music", id: 4444},
        {name: "Find people", to: "/find", id: 5555},
        {name: "Settings", to: "/settings", id: 6666}
    ] as Array<linkType>,
    friends: [
        { img: imgvadim, name: "Vadim", id: 123 },
        { img: imgfyodor, name: "Fyodor", id: 124 },
        { img: imgkirill, name: "Kirill", id: 125 },
        { img: imgandrey, name: "Andrey", id: 126 },
        { img: imgsasha, name: "Sasha", id: 127 }
    ] as Array<friendsType>
}

export type NavStateType = typeof initialState

// Reducer

export const navReducer = (state = initialState): NavStateType => {
    return state
}
