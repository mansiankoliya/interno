import { combineReducers } from "redux";

import {
    LoginDataReducer
} from './Reducer/LoginDataReducer'

import {
    ConatctDataReducer
} from "./Reducer/ContactDataReducer"

import {
    LogOutReducer
} from './Reducer/LogOutReducer'


const rootReducer = combineReducers({
    LoginData: LoginDataReducer,
    ContactData: ConatctDataReducer,
    LogOut: LogOutReducer
})

export default rootReducer;