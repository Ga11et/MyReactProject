import { authMe } from "./authReducer"

const INITIALISE_APP = 'app/INITIALISE_APP'

let initialState = ({
    initialised: false
})

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALISE_APP:
            return {
                ...state,
                initialised: true
            }
        default:
            return state
    }
}

const initialiseApp = () => ({type: INITIALISE_APP})

export const initialiasationSuccess = () => (dispatch) => {
    let promise = dispatch(authMe())
    Promise.all([promise]).then( () => {
            dispatch(initialiseApp())
        })

} 