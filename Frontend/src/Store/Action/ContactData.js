import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Baseurl } from "../../Baseurl";


//contact api call
export function ContactData(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/contact/insert`, data)
            const return_response = {
                type: "CONTACT_DATA",
                payload: response
            }
            console.log("contact response", response);
            if (response.data && response.data.status === 201) {
                toast.success("Message Sent Successfully")
            }
            dispatch(return_response)
            return response;
        } catch (error) {
            console.log("Contacterrr", error);
            if (error.response && error.response.status === 406) {
                toast.error("Email Is Already Exists")
            }
        }
    }
}