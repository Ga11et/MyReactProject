import { stopSubmit } from "redux-form"
import { getCaptchaApi, isAuthCheck, logoutApi, postLoginDataApi } from "../dal/api"

const AUTH_ME = 'auth/AUTH_ME'
const FIND_ERROR = 'auth/FIND_ERROR'
const GET_CAPTCHA = 'auth/GET_CAPTCHA'

let initialState = {
    userId: null,
    userName: null,
    userEmail: null,
    isAuth: false,
    fieldError: null,
    captcha: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return {
                ...state,
                ...action.data
            }
        case FIND_ERROR:
            return {
                ...state,
                fieldError: action.error
            }
        case GET_CAPTCHA:
            return {
                ...state,
                captcha: action.captchaUrl
            }
        default:
            return state
    }
}

const authMeAC = (userId, userEmail, userName, isAuth) => ({
    type: AUTH_ME,
    data: { userId, userEmail, userName, isAuth }
})
const getCaptcha = (captchaUrl) => ({ type: GET_CAPTCHA, captchaUrl })

export const authMe = () => async (dispatch) => {
    const response = await isAuthCheck()
    if (response.resultCode === 0) {
        let { id, email, login } = response
        dispatch(authMeAC(id, email, login, true))
    }
}
export const postLoginData = (data) => async (dispatch) => {
    const loginData = await postLoginDataApi(data)
    if (loginData.resultCode === 0) {
        const authCheck = await isAuthCheck()
        if (authCheck.resultCode === 0) {
            let { id, email, login } = authCheck
            dispatch(authMeAC(id, email, login, true))
        }
        dispatch(getCaptcha(null))
    } else {
        dispatch(stopSubmit("login", { _error: loginData.message }))
        if (loginData.resultCode === 10) {
            const captchaUrl = await getCaptchaApi()
            dispatch(getCaptcha(captchaUrl))
        }
    } 
}
export const logout = () => async (dispatch) => {
    const response = await logoutApi()
    if (response.resultCode === 0) {
        dispatch(authMeAC(null, null, null, false))
    }
}
