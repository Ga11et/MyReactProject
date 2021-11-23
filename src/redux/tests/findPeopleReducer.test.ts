import { personType } from '../../types/types';
import { FindPeopleRedActions, findPeopleReducer } from './../findPeopleReducer';
import imgandrey from '../img/andrey.jpg'
import imgfyodor from '../img/fyodor.jpg'
import imgkirill from '../img/kirill.jpg'
import imgsasha from '../img/sasha.jpg'
import imgvadim from '../img/vadim.jpg'

const state = {
    people: [
        { id: 1, followed: true, photos: { small: imgandrey, large: imgandrey }, name: 'Andrey', status: "I'm not gay", location: { city: 'London', country: 'Great Britan' } },
        { id: 2, followed: false, photos: { small: imgfyodor, large: imgfyodor }, name: 'Fyodor', status: "Hi, i'm your boss", location: { city: 'Syktyvkar', country: 'Russia' } },
        { id: 3, followed: false, photos: { small: imgkirill, large: imgkirill }, name: 'Kirill', status: "I live in Moskow", location: { city: 'Moskow', country: 'Russia' } },
        { id: 4, followed: false, photos: { small: imgsasha, large: imgsasha }, name: 'Sasha', status: "Hahaahahahaha", location: { city: 'Syktyvkar', country: 'Russia' } },
        { id: 5, followed: true, photos: { small: imgvadim, large: imgvadim }, name: 'Vadim', status: "Stop calling me Huim", location: { city: 'Kiev', country: 'Ukraine' } },
    ] as Array<personType>,
    countPages: 10000,
    countPeopleOnPage: 10,
    active: 0 as number,
    isLoading: false,
    arrayButtonsLoading: [] as Array<number>
}

test('follow', () => {
    const action = FindPeopleRedActions.follow(3)

    const localState = findPeopleReducer(state, action)

    expect(localState.people[2].followed).toBeTruthy()
    expect(localState.people[3].followed).toBeFalsy()
    expect(localState.people[1].followed).toBeFalsy()
})
test('unFollow', () => {
    const action = FindPeopleRedActions.unFollow(1)

    const localState = findPeopleReducer(state, action)

    expect(localState.people[0].followed).toBeFalsy()
    expect(localState.people[2].followed).toBeFalsy()
    expect(localState.people[3].followed).toBeFalsy()
    expect(localState.people[1].followed).toBeFalsy()
})
test('showMore', () => {
    const newPeople = [
        { id: 11, followed: true, photos: { small: imgandrey, large: imgandrey }, name: 'Andrey', status: "I'm not gay", location: { city: 'London', country: 'Great Britan' } },
        { id: 12, followed: false, photos: { small: imgfyodor, large: imgfyodor }, name: 'Fyodor', status: "Hi, i'm your boss", location: { city: 'Syktyvkar', country: 'Russia' } },
        { id: 13, followed: false, photos: { small: imgkirill, large: imgkirill }, name: 'Kirill', status: "I live in Moskow", location: { city: 'Moskow', country: 'Russia' } },
    ]
    const action = FindPeopleRedActions.showMore(newPeople)

    const localState = findPeopleReducer(state, action)

    expect(localState.people.length).toBe(3)
    expect(localState.people[0].id).toBe(11)
    expect(localState.people[1].id).toBe(12)
    expect(localState.people[2].id).toBe(13)
})
test('changeActivePage', () => {
    const action = FindPeopleRedActions.changeActivePage(5)

    const localState = findPeopleReducer(state, action)

    expect(localState.active).toBe(5)
})
test('toggleLoading', () => {
    const action = FindPeopleRedActions.toggleLoading(true)

    const localState = findPeopleReducer(state, action)

    expect(localState.isLoading).toBeTruthy()
})
test('toggleButton', () => {
    const action = FindPeopleRedActions.toggleButton(true, 4)

    const localState = findPeopleReducer(state, action)

    expect(localState.arrayButtonsLoading.length).toBe(1)
    expect(localState.arrayButtonsLoading[0]).toBe(4)
})