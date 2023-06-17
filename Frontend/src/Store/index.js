import { combineReducers } from "redux";

import {
    LoginDataReducer
} from './Reducer/LoginDataReducer'

const rootReducer = combineReducers({
    LoginData: LoginDataReducer
})

export default rootReducer;