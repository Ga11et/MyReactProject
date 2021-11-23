import { CommonDataType } from './../../dal/api';
import { API, PhotosDataType } from '../../dal/api';
import { profileType } from '../../types/types';
import { authReducer } from '../authReducer';
import { AppStateType } from '../redux-state';
import { ContentRedThunks, ContentRedActions } from './../contentReducer';
jest.mock('../../dal/api')

const APIMock = API as jest.Mocked<typeof API>

const getUserData: profileType = {
    fullName: 'name',
    aboutMe: 'aboutMe',
    contacts: {
        facebook: '',
        github: '', 
        instagram: '', 
        mainLink: '', 
        twitter: '', 
        vk: '', 
        website: '', 
        youtube: ''
    },
    lookingForAJob: true,
    lookingForAJobDescription: '',
    photos: {
        large: '',
        small: ''
    },
    userId: 15
}
const putProfilePhotoApiData: PhotosDataType = {
    data: {
        photos: {
            large: 'large',
            small: 'small'
        }
    },
    messages: [],
    resultCode: 0
}
const profileFormSubmitApiData: CommonDataType = {
    data: {},
    messages: [],
    resultCode: 0
}

const photos = new File(['blobparts'], 'some')

const dispatch = jest.fn()
const setState = jest.fn()

beforeEach(() => {
    APIMock.getUser.mockReturnValue(Promise.resolve(getUserData))
    APIMock.getStatusApi.mockReturnValue(Promise.resolve('status'))
    APIMock.putStatusApi.mockReturnValue(Promise.resolve(0))
    APIMock.putProfilePhotoApi.mockReturnValue(Promise.resolve(putProfilePhotoApiData))
    APIMock.profileFormSubmitApi.mockReturnValue(Promise.resolve(profileFormSubmitApiData))
    setState.mockReturnValue({auth: {userId: 15}})
})

test('GetUserInfo', async () => {
    const thunk = ContentRedThunks.getUserInfo(15)

    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(4)
    expect(dispatch).toHaveBeenNthCalledWith(1, ContentRedActions.successed(false))
    expect(dispatch).toHaveBeenNthCalledWith(2, ContentRedActions.setProfile(getUserData))
    expect(dispatch).toHaveBeenNthCalledWith(3, ContentRedActions.setStatus('status'))
    expect(dispatch).toHaveBeenNthCalledWith(4, ContentRedActions.successed(true))
})
test('PutStatus', async () => {
    const thunk = ContentRedThunks.putStatus('status')

    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(1)
    expect(dispatch).toHaveBeenNthCalledWith(1, ContentRedActions.setStatus('status'))
})
test('changeProfilePhoto', async () => {
    const thunk = ContentRedThunks.changeProfilePhoto(photos)

    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(1)
    expect(dispatch).toHaveBeenNthCalledWith(1, ContentRedActions.newProfilePhoto(putProfilePhotoApiData.data.photos))
})
test('profileFormSubmit', async () => {
    const thunk = ContentRedThunks.profileFormSubmit(getUserData)

    await thunk(dispatch, setState)

    expect(dispatch).toBeCalledTimes(1)
    expect(dispatch).toHaveBeenNthCalledWith(1, ContentRedActions.setProfile(getUserData))
})