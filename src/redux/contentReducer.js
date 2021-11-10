import { stopSubmit } from "redux-form"
import { 
    getStatusApi, 
    getUser, 
    putStatusApi,
    putProfilePhotoApi,
    profileFormSubmitApi
} from "../dal/api"

const ADD_POST = 'profile/ADD_POST'
const SET_PROFILE = 'profile/SET_PROFILE'
const GET_STATUS = 'profile/GET_STATUS'
const SET_PROFILE_SUCCESS = 'profile/SET_PROFILE_SUCCESS'
const DELETE_POST = 'profile/DELETE_POST'
const SET_PROFILE_PHOTO = 'profile/SET_PROFILE_PHOTO'

let initialState = {
    profile: {},
    posts: [
        { id: 1, message: "Are there somebody, who is more clever then me?" },
        { id: 2, message: "Learning React.." },
        { id: 3, message: "I'm broken, bro" },
        { id: 4, message: "I want to say something" }
    ],
    status: 'write something',
    successed: false
}

export const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.text
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                writing: ''
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case GET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PROFILE_SUCCESS:
            return {
                ...state,
                successed: action.isTrue
            }
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(el => el.id !== action.postId)]
            }
        case SET_PROFILE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}

export const createNewPost = (text) => ({ type: ADD_POST, text })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const getStatusAC = (status) => ({ type: GET_STATUS, status })
export const successedAC = (isTrue) => ({ type: SET_PROFILE_SUCCESS, isTrue })
export const deletePostAC = (postId) => ({ type: DELETE_POST, postId })
export const newProfilePhotoAC = (photos) => ({ type: SET_PROFILE_PHOTO, photos })

export const getUserInfo = (userId) => async (dispatch) => {
    dispatch(successedAC(false))
    const dataUserInfo = await getUser(userId)
    dispatch(setProfile(dataUserInfo))
    const data = await getStatusApi(userId)
    dispatch(getStatusAC(data))
    dispatch(successedAC(true))
}
export const putStatus = (status) => async (dispatch) => {
    const data = await putStatusApi(status)
    if (data === 0) {
        dispatch(getStatusAC(status))
    }
}
export const changeProfilePhoto = (file) => async (dispatch) => {
    const status = await putProfilePhotoApi(file)
    if (status.resultCode === 0) {
        dispatch(newProfilePhotoAC(status.photos))
    }
}
export const profileFormSubmit = (info) => async (dispatch, setState) => {
    const userId = setState().auth.userId
    const status = await profileFormSubmitApi(info)
    if (status.resultCode === 0) {
        const dataUserInfo = await getUser(userId)
        dispatch(setProfile(dataUserInfo))
    } else {
        dispatch(stopSubmit("profileForm", { _error: status.errorMessage }))
        return Promise.reject(status.errorMessage)
    }
}