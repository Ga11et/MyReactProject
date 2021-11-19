import { actionsTypes } from "../types/types"
import { AuthRedThunks } from "./authReducer"

let initialState = ({
    initialised: false as boolean
})

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

const AppRedActions = {
    initialiseApp: () => ({type: 'INITIALISE_APP'} as const)
}

// Thunks

export const AppRedThunks = {
    initialiasationSuccess: () => (dispatch: any) => {
        let promise = dispatch(AuthRedThunks.authMe())
        Promise.all([promise]).then( () => {
                dispatch(AppRedActions.initialiseApp())
            })
    
    } 
}
