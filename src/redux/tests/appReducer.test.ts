import { AppRedActions, appReducer } from "../appReducer"

const state = {
    initialised: false as boolean
}

test('initialiseApp', () => {
    const action = AppRedActions.initialiseApp()

    const localState = appReducer(state, action)

    expect(localState.initialised).toBe(true)
})