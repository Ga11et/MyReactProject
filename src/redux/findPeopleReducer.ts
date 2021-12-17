import { Dispatch } from 'redux';
import { API } from '../dal/api';
import { actionsTypes, personType, searchFormType } from '../types/types'
import imgandrey from './img/andrey.jpg'
import imgfyodor from './img/fyodor.jpg'
import imgkirill from './img/kirill.jpg'
import imgsasha from './img/sasha.jpg'
import imgvadim from './img/vadim.jpg'

// State

let initialState = {
    people: [
        { id: 1, followed: true, photos: { small: imgandrey, large: imgandrey }, name: 'Andrey', status: "I'm not gay", location: { city: 'London', country: 'Great Britan' } },
        { id: 2, followed: false, photos: { small: imgfyodor, large: imgfyodor }, name: 'Fyodor', status: "Hi, i'm your boss", location: { city: 'Syktyvkar', country: 'Russia' } },
        { id: 3, followed: false, photos: { small: imgkirill, large: imgkirill }, name: 'Kirill', status: "I live in Moskow", location: { city: 'Moskow', country: 'Russia' } },
        { id: 4, followed: false, photos: { small: imgsasha, large: imgsasha }, name: 'Sasha', status: "Hahaahahahaha", location: { city: 'Syktyvkar', country: 'Russia' } },
        { id: 5, followed: true, photos: { small: imgvadim, large: imgvadim }, name: 'Vadim', status: "Stop calling me Huim", location: { city: 'Kiev', country: 'Ukraine' } },
    ] as Array<personType>,
    countPeople: 10000,
    countPeopleOnPage: 10,
    active: 1 as number,
    isLoading: false,
    arrayButtonsLoading: [] as Array<number>,
    searchForm: {term: '', friend: ''} as searchFormType
}

// Reducer

type FindPeopleStateType = typeof initialState
const following = (item: Array<personType>, id: number, isTrue: boolean): Array<personType> => {
    return item.map((el) => {
        let element = el
        if (el.id === id) element = { ...el, followed: isTrue }
        return element
    })
}

export const findPeopleReducer = (state = initialState, action: actionsTypes<typeof FindPeopleRedActions>): FindPeopleStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                people: following(state.people, action.userId, true)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                people: following(state.people, action.userId, false)
            }
        case 'GET_PEOPLE':
            let newState = {
                ...state,
                people: [] as Array<personType>
            }
            action.people.forEach((el: personType) => newState.people.push(el))
            return newState
        case 'CHANGE_ACTIVE_PAGE':
            return {
                ...state,
                active: action.number
            }
        case 'TOGGLE_LOADING':
            return {
                ...state,
                isLoading: action.toggle
            }
        case 'TOGGLE_BUTTON':
            return {
                ...state,
                arrayButtonsLoading: action.bool ?
                    [...state.arrayButtonsLoading, action.userId]
                    : [...state.arrayButtonsLoading.filter(el => el !== action.userId)]
            }
        case 'PUT_SEARCH_FORM':
            return {
                ...state,
                searchForm: action.formik
            }
        case 'PUT_COUNT_PEOPLE':
            return {
                ...state,
                countPeople: action.newCount
            }
        default:
            return state
    }
}

// Actions

export const FindPeopleRedActions = {
    follow: (userId: number) => ({ type: 'FOLLOW', userId } as const),
    unFollow:  (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
    showMore: (people:  Array<personType>) => ({ type: 'GET_PEOPLE', people } as const),
    changeActivePage: (number: number) => ({ type: 'CHANGE_ACTIVE_PAGE', number } as const),
    toggleLoading: (toggle: boolean) => ({ type: 'TOGGLE_LOADING', toggle } as const),
    toggleButton: (bool: boolean, userId: number) => ({ type: 'TOGGLE_BUTTON', bool, userId } as const),
    putSearchForm: (formik: searchFormType) => ({ type: 'PUT_SEARCH_FORM', formik } as const),
    putCountPeople: (newCount: number) => ({ type: 'PUT_COUNT_PEOPLE', newCount } as const)
}

// Thunks

type dispatchType = Dispatch<actionsTypes<typeof FindPeopleRedActions>>
type getStateType = () => FindPeopleStateType

export const FindPeopleRedThunks = {
    showPeople: (number: number, count: number, searchForm: searchFormType) => async (dispatch: dispatchType, setState: getStateType) => {
        dispatch(FindPeopleRedActions.toggleLoading(true))
        const responce = await API.getPeople(number, count, searchForm)
        dispatch(FindPeopleRedActions.toggleLoading(false))
        dispatch(FindPeopleRedActions.putCountPeople(responce.totalCount))
        dispatch(FindPeopleRedActions.showMore(responce.items))
    },
    followPerson: (userId: number) => async (dispatch: dispatchType) => {
        dispatch(FindPeopleRedActions.toggleButton(true, userId))
        const response = await API.postFollow(userId)
        if (response === 0) {
            dispatch(FindPeopleRedActions.follow(userId))
        }
        dispatch(FindPeopleRedActions.toggleButton(false, userId))
    },
    unFollowPerson: (userId: number) => async (dispatch: dispatchType) => {
        dispatch(FindPeopleRedActions.toggleButton(true, userId))
        const response = await API.deleteFollow(userId)
        if (response === 0) {
            dispatch(FindPeopleRedActions.unFollow(userId))
        }
        dispatch(FindPeopleRedActions.toggleButton(false, userId))
    }
}

export default findPeopleReducer