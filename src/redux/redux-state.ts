import thunk from "redux-thunk";
import { authReducer } from "./authReducer";
import findPeopleReducer from "./findPeopleReducer";
import { reducer as formReducer } from 'redux-form'
import { appReducer } from "./appReducer";
import { contentReducer } from "./contentReducer";
import { dialogReducer } from "./dialogsReducer";
import { navReducer } from "./navReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { chatReducer } from "./chatReducer";

let reducers = combineReducers({
    auth: authReducer,
    contentPage: contentReducer,
    dialogPage: dialogReducer,
    findpeople: findPeopleReducer,
    navPage: navReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers, applyMiddleware(thunk))

export default store