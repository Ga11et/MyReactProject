import { AuthStateType } from "../authReducer";


let state: AuthStateType 

beforeEach(() => {
    state = {
        userId: null,
        userName: null,
        userEmail: null,
        isAuth: false,
        fieldError: null,
        captcha: null
    }
})

test('auth me success', () => {


})