import axios from 'axios';
import { Baseurl } from '../../Baseurl.js'

//login api 
export function LogOut(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/admin/logout`, data)
            const return_response = {
                type: "LOGOUT_DATA",
                payload: response,
            }
            // const token = response.data?.data?.token
            // console.log("responseresponse", response);
            // localStorage.removeItem("token", token);
            console.log("Log out response", response);
            dispatch(return_response);
            return response;
        } catch (error) {
            console.log("LogoutApierr", error);
            throw error;
        }
    }
}   