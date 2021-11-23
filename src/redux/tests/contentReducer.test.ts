import { PostType, profileType } from "../../types/types";
import { ContentRedActions, contentReducer } from "../contentReducer";

const state = {
    profile: {} as profileType,
    posts: [
        { id: 1, message: "Are there somebody, who is more clever then me?" },
        { id: 2, message: "Learning React.." },
        { id: 3, message: "I'm broken, bro" },
        { id: 4, message: "I want to say something" }
    ] as Array<PostType>,
    status: 'write something' as string,
    successed: false as boolean,
}

const setProfileData: profileType = {
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

test('Create new Post', () => {
    let action = ContentRedActions.createNewPost('Hi, my name is Fred')

    let localState = contentReducer(state, action)

    expect(localState.posts.length).toBe(5);
    expect(localState.posts[4].message).toBe('Hi, my name is Fred');
})
test('Set profie', () => {
    let action = ContentRedActions.setProfile(setProfileData)

    let localState = contentReducer(state, action)

    expect(localState.profile.userId).toBe(15);
    expect(localState.profile.fullName).toBe('name');
    expect(localState.profile.aboutMe).toBe('aboutMe');
})
test('Get Status', () => {
    let action = ContentRedActions.setStatus(`hi, i'm gay`)

    let localState = contentReducer(state, action)

    expect(localState.status).toBe(`hi, i'm gay`);
})
test('Successed', () => {
    let action = ContentRedActions.successed(true)

    let localState = contentReducer(state, action)

    expect(localState.successed).toBe(true);
})
test('Delete post', () => {
    let action = ContentRedActions.deletePost(3)
 
    let localState = contentReducer(state, action)

    expect(localState.posts.length).toBe(3);
})
test('newProfilePhoto', () => {
    let action = ContentRedActions.newProfilePhoto({large: 'large', small: 'small'})
 
    let localState = contentReducer(state, action)
    
    expect(localState.profile.photos.large).toBe('large')
    expect(localState.profile.photos.small).toBe('small')
})