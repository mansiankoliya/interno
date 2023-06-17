import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Baseurl } from '../../Baseurl.js'

//login api 
export function LoginData(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/admin/login`, data)
            const return_response = {
                type: "LOGIN_DATA",
                payload: response,
            }
            const token = response.data?.data?.token
            localStorage.setItem("token", token);
            console.log("Login response", response);
            dispatch(return_response);
            return response;
        } catch (error) {
            console.log("LoginApierr", error);
            if (error.response && error.response.status === 404) {
                toast.error("Data Not Exists")
            } else {
                toast.error("Please Again Check Your Details")
            }
            throw error;
        }
    }
}