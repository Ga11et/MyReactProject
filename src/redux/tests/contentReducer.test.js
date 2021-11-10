import { contentReducer, createNewPost, deletePostAC, getStatusAC, setProfile, successedAC } from "../contentReducer";


let state = {
    profile: {},
    posts: [
        { id: 1, message: "Are there somebody, who is more clever then me?" },
        { id: 2, message: "Learning React.." },
        { id: 3, message: "I'm broken, bro" },
        { id: 4, message: "I want to say something" }
    ],
    status: 'write something',
    successed: false
}

test('Create new Post', () => {

    // 1 data
    let action = createNewPost('Hi, my name is Fred')

    // 2 action
    let newState = contentReducer(state, action)

    // 3 expectation
    expect(newState.posts.length).toBe(5);
    expect(newState.posts[4].message).toBe('Hi, my name is Fred');
})
test('Set profie', () => {

    // 1 data
    let data = {id: 15, userName: 'Huim', userEmail: 'vlolchai@inbox.ru'}
    let action = setProfile(data)

    // 2 action
    let newState = contentReducer(state, action)

    // 3 expectation
    expect(newState.profile.id).toBe(15);
    expect(newState.profile.userName).toBe('Huim');
    expect(newState.profile.userEmail).toBe('vlolchai@inbox.ru');
})
test('Get Status', () => {

    // 1 data
    let action = getStatusAC(`hi, i'm gay`)

    // 2 action
    let newState = contentReducer(state, action)

    // 3 expectation
    expect(newState.status).toBe(`hi, i'm gay`);
})
test('Successed dawnload page', () => {

    // 1 data
    let action = successedAC(true)

    // 2 action
    let newState = contentReducer(state, action)

    // 3 expectation
    expect(newState.successed).toBe(true);
})
test('Delete post', () => {

    // 1 data
    let action = deletePostAC(3)
 
    // 2 action
    let newState = contentReducer(state, action)

    // 3 expectation
    expect(newState.posts.length).toBe(3);
})