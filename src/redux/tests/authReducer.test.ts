import { AuthRedActions, authReducer, AuthStateType } from "../authReducer";


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
    const localState = authReducer(state, AuthRedActions.authMeAC(123, 'fyodor', 'some', true))

    expect(localState.userId).toEqual(123)
    expect(localState.userName).toEqual('some')
    expect(localState.userEmail).toEqual('fyodor')
    expect(localState.isAuth).toBeTruthy()
    expect(localState.fieldError).toBeNull()
    expect(localState.captcha).toBeNull()
})

test('getCaptcha success', () => {
    const localState = authReducer(state, AuthRedActions.getCaptcha('some'))

    expect(localState.userId).toBeNull()
    expect(localState.userName).toBeNull()
    expect(localState.userEmail).toBeNull()
    expect(localState.isAuth).toBeFalsy()
    expect(localState.fieldError).toBeNull()
    expect(localState.captcha).toEqual('some')
})

test('findError success', () => {
    const localState = authReducer(state, AuthRedActions.findError('some Err'))

    expect(localState.userId).toBeNull()
    expect(localState.userName).toBeNull()
    expect(localState.userEmail).toBeNull()
    expect(localState.isAuth).toBeFalsy()
    expect(localState.fieldError).toEqual('some Err')
    expect(localState.captcha).toBeNull()
})