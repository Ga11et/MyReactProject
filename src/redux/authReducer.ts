import { Dispatch } from "redux"
import { stopSubmit } from "redux-form"
import { API, loginDataType } from "../dal/api"
import { actionsTypes } from "../types/types"

const initialState = {
    userId: null as number | null,
    userName: null as string | null,
    userEmail: null as string | null,
    isAuth: false as boolean,
    fieldError: null as string | null,
    captcha: null as string | null
}

// Reducer

export type AuthStateType = typeof initialState
export const authReducer = (state = initialState, action: actionsTypes<typeof AuthRedActions>): AuthStateType => {
    switch (action.type) {
        case 'AUTH_ME':
            return {
                ...state,
                ...action.data
            }
        case 'FIND_ERROR':
            return {
                ...state,
                fieldError: action.error
            }
        case 'GET_CAPTCHA':
            return {
                ...state,
                captcha: action.captchaUrl
            }
        default:
            return state
    }
}

// Actions

export const AuthRedActions = {
    authMeAC: (userId: number | null, userEmail: string | null, userName: string | null, isAuth: boolean) => ({
        type: 'AUTH_ME',
        data: { userId, userEmail, userName, isAuth }
    } as const),
    getCaptcha: (captchaUrl: string | null) => ({ type: 'GET_CAPTCHA', captchaUrl } as const),
    findError: (error: string) => ({ type: 'FIND_ERROR', error} as const)
}

// Thunks

type AuthRedDispatchType = Dispatch<actionsTypes<typeof AuthRedActions>>

export const AuthRedThunks = {
    authMe: () => async (dispatch: AuthRedDispatchType) => {
        const response = await API.isAuthCheck()
        if (response.resultCode === 0) {
            const { id, email, login } = response.data
            dispatch(AuthRedActions.authMeAC(id, email, login, true))
        }
    },
    postLoginData: (data: loginDataType) => async (dispatch: AuthRedDispatchType) => {
        const loginData = await API.postLoginDataApi(data)
        if (loginData.resultCode === 0) {
            const authCheck = await API.isAuthCheck()
            if (authCheck.resultCode === 0) {
                let { id, email, login } = authCheck.data
                dispatch(AuthRedActions.authMeAC(id, email, login, true))
            }
            dispatch(AuthRedActions.getCaptcha(null))
        } else {
            // @ts-ignore
            dispatch(stopSubmit("login", { _error: loginData.messages[0] }))
            if (loginData.resultCode === 10) {
                const captchaUrl = await API.getCaptchaApi()
                dispatch(AuthRedActions.getCaptcha(captchaUrl))
            }
        } 
    },
    logout: () => async (dispatch: AuthRedDispatchType) => {
        const response = await API.logoutApi()
        if (response === 0) {
            dispatch(AuthRedActions.authMeAC(null, null, null, false))
        }
    }
}

