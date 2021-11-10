import { deleteFollow, getPeople, postFollow } from '../dal/api'
import imgandrey from './img/andrey.jpg'
import imgfyodor from './img/fyodor.jpg'
import imgkirill from './img/kirill.jpg'
import imgsasha from './img/sasha.jpg'
import imgvadim from './img/vadim.jpg'

const FOLLOW = 'findPeople/FOLLOW'
const UNFOLLOW = 'findPeople/UNFOLLOW'
const GET_PEOPLE = 'findPeople/GET_PEOPLE'
const CHANGE_ACTIVE_PAGE = 'findPeople/CHANGE_ACTIVE_PAGE'
const TOGGLE_LOADING = 'findPeople/TOGGLE_LOADING'
const TOGGLE_BUTTON = 'findPeople/TOGGLE_BUTTON'

let initialState = {
    people: [
        { id: 1, followed: true, photos: { small: imgandrey }, name: 'Andrey', status: "I'm not gay", location: { city: 'London', country: 'Great Britan' } },
        { id: 2, followed: false, photos: { small: imgfyodor }, name: 'Fyodor', status: "Hi, i'm your boss", location: { city: 'Syktyvkar', country: 'Russia' } },
        { id: 3, followed: false, photos: { small: imgkirill }, name: 'Kirill', status: "I live in Moskow", location: { city: 'Moskow', country: 'Russia' } },
        { id: 4, followed: false, photos: { small: imgsasha }, name: 'Sasha', status: "Hahaahahahaha", location: { city: 'Syktyvkar', country: 'Russia' } },
        { id: 5, followed: true, photos: { small: imgvadim }, name: 'Vadim', status: "Stop calling me Huim", location: { city: 'Kiev', country: 'Ukraine' } },
    ],
    countPages: 10000,
    countPeopleOnPage: 10,
    active: 0,
    isLoading: false,
    arrayButtonsLoading: []
}

const following = (item, id, isTrue) => {
    return item.map((el) => {
        let element = el
        if (el.id === id) element = { ...el, followed: isTrue }
        return element
    })
}

const findPeopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                people: following(state.people, action.userId, true)
            }
        case UNFOLLOW:
            return {
                ...state,
                people: following(state.people, action.userId, false)
            }
        case GET_PEOPLE:
            let newState = {
                ...state,
                people: []
            }
            action.people.forEach(element => {
                newState.people.push(element)
            })
            return newState
        case CHANGE_ACTIVE_PAGE:
            return {
                ...state,
                active: action.newNumber
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.toggle
            }
        case TOGGLE_BUTTON:
            return {
                ...state,
                arrayButtonsLoading: action.bool
                    ? [...state.arrayButtonsLoading, action.userId]
                    : [state.arrayButtonsLoading.filter(el => el !== action.userId)]
            }
        default:
            return state
    }
}

export const follow = (userId) => { return { type: FOLLOW, userId } }
export const unFollow = (userId) => { return { type: UNFOLLOW, userId } }
export const showMore = (people) => { return { type: GET_PEOPLE, people } }
export const changeActivePage = (number) => { return { type: CHANGE_ACTIVE_PAGE, number } }
export const toggleLoading = (toggle) => { return { type: TOGGLE_LOADING, toggle } }
export const toggleButton = (bool, userId) => { return { type: TOGGLE_BUTTON, bool, userId } }


export const showPeople = (number, count) => async (dispatch) => {
    dispatch(toggleLoading(true))
    const responce = await getPeople(number, count)
    dispatch(toggleLoading(false))
    dispatch(showMore(responce))
}
export const followPerson = (userId) => async (dispatch) => {
    dispatch(toggleButton(true, userId))
    const response = await postFollow(userId)
    if (response === 0) {
        dispatch(follow(userId))
    }
    dispatch(toggleButton(false, userId))
}
export const unFollowPerson = (userId) => async (dispatch) => {
    dispatch(toggleButton(true, userId))
    const response = await deleteFollow(userId)
    if (response === 0) {
        dispatch(unFollow(userId))
    }
    dispatch(toggleButton(false, userId))
}

export default findPeopleReducer