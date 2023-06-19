import { combineReducers } from "redux";

import {
    LoginDataReducer
} from './Reducer/LoginDataReducer'

import {
    ConatctDataReducer
} from "./Reducer/ContactDataReducer"


const rootReducer = combineReducers({
    LoginData: LoginDataReducer,
    ContactData: ConatctDataReducer
})

export default rootReducer;