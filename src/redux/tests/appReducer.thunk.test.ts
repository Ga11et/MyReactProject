import { API, AuthMeDataType } from '../../dal/api';
import { AuthRedActions, AuthRedThunks } from '../authReducer';
import { AppRedThunks, AppRedActions } from './../appReducer';
jest.mock('../../dal/api')

const APIMock = API as jest.Mocked<typeof API>

const isAuthCheckData: AuthMeDataType = {
    data: {
        email: 'email',
        id: 12,
        login: 'login'
    },
    messages: [],
    resultCode: 0
}

const dispatch = jest.fn()

beforeEach(() => {
    APIMock.isAuthCheck.mockReturnValue(Promise.resolve(isAuthCheckData))
})

test('initialiseApp', async () => {
    const thunk = AppRedThunks.initialiasationSuccess()

    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(2, AppRedActions.initialiseApp())
})