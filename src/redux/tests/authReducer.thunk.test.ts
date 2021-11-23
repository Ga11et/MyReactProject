import { CommonDataType } from './../../dal/api';
import { AuthRedActions } from './../authReducer';
import { API, AuthMeDataType, loginDataType } from "../../dal/api";
import { AuthRedThunks } from "../authReducer";
jest.mock("../../dal/api")

const APIMock = API as jest.Mocked<typeof API>

const postLoginDataAPIData: CommonDataType = {
    data: {},
    messages: [],
    resultCode: 0
}
const isAuthCheckData: AuthMeDataType = {
    data: {
        email: 'email',
        id: 12,
        login: 'login'
    },
    messages: [],
    resultCode: 0
}
const postLoginDataData: loginDataType = {
    captcha: null,
    email: 'email',
    password: '123',
    rememberMe: false
}

const dispatchMock = jest.fn()

beforeEach(() => {
    APIMock.postLoginDataApi.mockReturnValue(Promise.resolve(postLoginDataAPIData))
    APIMock.isAuthCheck.mockReturnValue(Promise.resolve(isAuthCheckData))
    APIMock.logoutApi.mockReturnValue(Promise.resolve(0))
})


test('authMe', async () => {
    const thunk = AuthRedThunks.authMe()
    
    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, AuthRedActions.authMeAC(12, 'email', 'login', true))
})
test('postLoginData', async () => {
    const thunk = AuthRedThunks.postLoginData(postLoginDataData)
    
    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(2)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, AuthRedActions.authMeAC(12, 'email', 'login', true))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, AuthRedActions.getCaptcha(null))
})
test('logout', async () => {
    const thunk = AuthRedThunks.logout()
    
    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, AuthRedActions.authMeAC(null, null, null, false))
})
