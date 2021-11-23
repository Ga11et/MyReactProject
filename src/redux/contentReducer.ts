import { Dispatch } from "redux"
import { stopSubmit } from "redux-form"
import { API } from "../dal/api"
import { actionsTypes, photosType, PostType, profileType } from "../types/types"
import { AppStateType } from "./redux-state.js"


const initialState = {
    profile: {} as profileType,
    posts: [
        { id: 1, message: "Are there somebody, who is more clever then me?" },
        { id: 2, message: "Learning React.." },
        { id: 3, message: "I'm broken, bro" },
        { id: 4, message: "I want to say something" }
    ] as Array<PostType>,
    status: 'write something' as string,
    successed: false as boolean,
}

// Reducer

type initialStateType = typeof initialState
export const contentReducer = (state = initialState, action: actionsTypes<typeof ContentRedActions>): initialStateType => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: 5,
                message: action.text
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'GET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'SET_PROFILE_SUCCESS':
            return {
                ...state,
                successed: action.isTrue
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts: [...state.posts.filter(el => el.id !== action.postId)]
            }
        case 'SET_PROFILE_PHOTO':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}

// Actions

export const ContentRedActions = {
    createNewPost: (text: string) => ({ type: 'ADD_POST', text } as const),
    setProfile: (profile: profileType) => ({ type: 'SET_PROFILE', profile } as const),
    setStatus: (status: string) => ({ type: 'GET_STATUS', status } as const),
    successed: (isTrue: boolean) => ({ type: 'SET_PROFILE_SUCCESS', isTrue } as const),
    deletePost: (postId: number) => ({ type: 'DELETE_POST', postId } as const),
    newProfilePhoto: (photos: photosType) => ({ type: 'SET_PROFILE_PHOTO', photos } as const) 
}

type dispatchType = Dispatch<actionsTypes<typeof ContentRedActions>>
type getStateType = () => AppStateType

// Thunks

export const ContentRedThunks = {
    getUserInfo: (userId: number) => async (dispatch: dispatchType) => {
        dispatch(ContentRedActions.successed(false))
        const dataUserInfo = await API.getUser(userId)
        dispatch(ContentRedActions.setProfile(dataUserInfo))
        const data = await API.getStatusApi(userId)
        dispatch(ContentRedActions.setStatus(data))
        dispatch(ContentRedActions.successed(true))
    },
    putStatus: (status: string) => async (dispatch: dispatchType) => {
        const data = await API.putStatusApi(status)
        if (data === 0) {
            dispatch(ContentRedActions.setStatus(status))
        }
    },
    changeProfilePhoto: (file: File) => async (dispatch: dispatchType) => {
        const status = await API.putProfilePhotoApi(file)
        if (status.resultCode === 0) {
            dispatch(ContentRedActions.newProfilePhoto(status.data.photos))
        }
    },
    profileFormSubmit: (info: profileType) => async (dispatch: dispatchType, setState: getStateType) => {
        const userId = setState().auth.userId
        const status = await API.profileFormSubmitApi(info)
        if (status.resultCode === 0) {
            const dataUserInfo = await API.getUser(userId)
            dispatch(ContentRedActions.setProfile(dataUserInfo))
        } else {
            // @ts-ignore
            dispatch(stopSubmit("profileForm", { _error: status.messages[0] }))
            return Promise.reject(status.messages[0])
        }
    }
}