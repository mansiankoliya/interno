import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginData } from '../Store/Action/LoginData'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';



const Login = ({ res, dispatch }) => {

    const clientId = "724628691781-3p4b6ehdboub9q95s3p4a5diil4fehel.apps.googleusercontent.com"

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
            `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
        responseType: 'code',
        prompt: 'consent',
    });


    const navigate = useNavigate()

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handelInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    //login api call
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(LoginData(data));
            navigate('/')
        } catch (error) {
            console.log("LoginApiCallerr", error);
        }
    }


    return (
        <>
            <section class="">
                <div class="flex flex-col items-center justify-center mx-auto my-10 md:my-20 sm:my-16 ">
                    <div class="w-full bg-white rounded-lg shadow sm:max-w-md border-2  ">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-[#292F36] md:text-2xl">
                                Sign in to your account
                            </h1>
                            <div className='flex items-center justify-center'>
                                <button onClick={signIn} className="rounded-lg bg-[white] text-[#292F36]  h-11 hover:border-2 hover:border-gray-300  w-[60%] justify-center items-center flex text-center">
                                    <div className='flex text-center items-center'>
                                        <div className='mr-2'>
                                            <img src="Images/google.png" className='h-8' alt="google" />
                                        </div>
                                        Continue with google
                                    </div>
                                </button>
                                {/* <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Continue with Google"
                                    onSuccess={onSuccess}
                                    onFailure={onFailur}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                    // prompt="select_account"
                                    plugin_name="cricketwaves"
                                    prompt="consent"
                                /> */}
                                {/* <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Login"
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    style={{ marginTop: '100px' }}
                                    isSignedIn={true}
                                /> */}
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="flex items-center border-t border-[#C6C6C6] w-[40%]"></div>
                                <p className="text-[#292F36] px-4 text-sm">Or</p>
                                <div className="flex items-center border-t border-[#C6C6C6] w-[40%]"></div>
                            </div>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        for="email"
                                        class="block mb-2 text-sm font-medium  text-[#292F36]"
                                    >Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        class="bg-gray-50 border-2 border-[#CDA274] text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white "
                                        placeholder="name@company.com"
                                        required=""
                                        onChange={handelInput}
                                        value={data.email}
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-[#292F36]">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border-2 border-[#CDA274] text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white"
                                        required=""
                                        onChange={handelInput}
                                        value={data.password}
                                    />
                                </div>
                                <div className='flex justify-center items-center '>
                                    <Link >
                                        <button
                                            className="rounded-lg bg-[#292F36] text-white  w-[150px] h-10"
                                            onClick={handelSubmit} >
                                            Sign in
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.LoginData
})

export default connect(mapStateToProps)(Login)