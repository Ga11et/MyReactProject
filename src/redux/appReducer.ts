import { actionsTypes } from "../types/types"
import { AuthRedThunks } from "./authReducer"

let initialState = {
    initialised: false as boolean
}

// Reducer

type initialStateType = typeof initialState
export const appReducer = (state = initialState, action: actionsTypes<typeof AppRedActions>): initialStateType => {
    switch (action.type) {
        case 'INITIALISE_APP':
            return {
                ...state,
                initialised: true
            }
        default:
            return state
    }
}

// Actions

export const AppRedActions = {
    initialiseApp: () => ({type: 'INITIALISE_APP'} as const)
}

// Thunks

// type dipatchType = Dispatch<actionsTypes<typeof AppRedActions>>

export const AppRedThunks = {
    initialiasationSuccess: () => async (dispatch: any) => {
        let promise = dispatch(AuthRedThunks.authMe())
        await Promise.all([promise])
        dispatch(AppRedActions.initialiseApp())

    
    } 
}
