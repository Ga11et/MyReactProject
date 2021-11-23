import { API } from '../../dal/api';
import { personType } from '../../types/types';
import { FindPeopleRedThunks, findPeopleReducer, FindPeopleRedActions } from './../findPeopleReducer';
import imgandrey from '../img/andrey.jpg'
import imgfyodor from '../img/fyodor.jpg'
import imgkirill from '../img/kirill.jpg'
import imgsasha from '../img/sasha.jpg'
import imgvadim from '../img/vadim.jpg'
jest.mock('../../dal/api')

const APIMock = API as jest.Mocked<typeof API>

const dispatch = jest.fn()

const getPeopleData: personType[] = [
    { id: 1, followed: true, photos: { small: imgandrey, large: imgandrey }, name: 'Andrey', status: "I'm not gay", location: { city: 'London', country: 'Great Britan' } },
    { id: 2, followed: false, photos: { small: imgfyodor, large: imgfyodor }, name: 'Fyodor', status: "Hi, i'm your boss", location: { city: 'Syktyvkar', country: 'Russia' } },
    { id: 3, followed: false, photos: { small: imgkirill, large: imgkirill }, name: 'Kirill', status: "I live in Moskow", location: { city: 'Moskow', country: 'Russia' } },
    { id: 4, followed: false, photos: { small: imgsasha, large: imgsasha }, name: 'Sasha', status: "Hahaahahahaha", location: { city: 'Syktyvkar', country: 'Russia' } },
    { id: 5, followed: true, photos: { small: imgvadim, large: imgvadim }, name: 'Vadim', status: "Stop calling me Huim", location: { city: 'Kiev', country: 'Ukraine' } }
]

beforeEach(() => {
    APIMock.postFollow.mockReturnValue(Promise.resolve(0))
    APIMock.deleteFollow.mockReturnValue(Promise.resolve(0))
    APIMock.getPeople.mockReturnValue(Promise.resolve(getPeopleData))
})

test('followPerson', async () => {
    const thunk = FindPeopleRedThunks.followPerson(3)

    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(3)
    expect(dispatch).toHaveBeenNthCalledWith(1, FindPeopleRedActions.toggleButton(true, 3))
    expect(dispatch).toHaveBeenNthCalledWith(2, FindPeopleRedActions.follow(3))
    expect(dispatch).toHaveBeenNthCalledWith(3, FindPeopleRedActions.toggleButton(false, 3))
})
test('unFollowPerson', async () => {
    const thunk = FindPeopleRedThunks.unFollowPerson(3)

    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(3)
    expect(dispatch).toHaveBeenNthCalledWith(1, FindPeopleRedActions.toggleButton(true, 3))
    expect(dispatch).toHaveBeenNthCalledWith(2, FindPeopleRedActions.unFollow(3))
    expect(dispatch).toHaveBeenNthCalledWith(3, FindPeopleRedActions.toggleButton(false, 3))
})
test('showPeople', async () => {
    const thunk = FindPeopleRedThunks.showPeople(5,3)

    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(3)
    expect(dispatch).toHaveBeenNthCalledWith(1, FindPeopleRedActions.toggleLoading(true))
    expect(dispatch).toHaveBeenNthCalledWith(2, FindPeopleRedActions.toggleLoading(false))
    expect(dispatch).toHaveBeenNthCalledWith(3, FindPeopleRedActions.showMore(getPeopleData))
})