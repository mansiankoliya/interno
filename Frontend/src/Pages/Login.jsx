import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginData } from '../Store/Action/LoginData';
import { connect } from 'react-redux';
import { useGoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = process.env.REACT_APP_MY_SECRET_KEY;

const Login = ({ res, dispatch }) => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: ""
    });


    // google with login
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scpoe: ""
            });
        }
        gapi.load('client:auth2', start);
    }, []);


    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        console.log('token..', res);
        const token = res.tokenObj?.id_token;
        localStorage.setItem("token", token);
        if (token) {
            window.location.href = '/home';
        }
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId: clientId,
        isSignedIn: false,
        cookiePolicy: "single_host_origin",
        prompt: "select_account"
    });

    const handleLoginClick = () => {
        signIn();
    };

    // Redirect to home page if already logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            window.location.href = '/home';
        }
    }, [navigate]);



    // Login API call
    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(LoginData(data));
            window.location.href = '/home';
        } catch (error) {
            console.log("LoginApiCallerr", error);
        }
    };

    return (
        <>
            <section>
                <div className="flex flex-col items-center justify-center mx-auto my-10 md:my-20 sm:my-16">
                    <div className="w-full bg-white rounded-lg shadow sm:max-w-md border-2">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#292F36] md:text-2xl">
                                Sign in to your account
                            </h1>
                            <div className="flex items-center justify-center">
                                <button onClick={handleLoginClick} className="rounded-lg bg-[white] text-[#292F36] h-11 hover:border-2 hover:border-gray-300 w-[60%] justify-center items-center flex text-center">
                                    <div className="flex text-center items-center">
                                        <div className="mr-2">
                                            <img src="Images/google.png" className="h-8" alt="google" />
                                        </div>
                                        Continue with Google
                                    </div>
                                </button>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="flex items-center border-t border-[#C6C6C6] w-[40%]"></div>
                                <p className="text-[#292F36] px-4 text-sm">Or</p>
                                <div className="flex items-center border-t border-[#C6C6C6] w-[40%]"></div>
                            </div>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#292F36]">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border-2 border-[#CDA274] text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="name@company.com"
                                        required=""
                                        onChange={handleInput}
                                        value={data.email}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#292F36]">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border-2 border-[#CDA274] text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                                        required=""
                                        onChange={handleInput}
                                        value={data.password}
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    {/* <Link to="/home"> */}
                                    <button onClick={handleSubmit} className="rounded-lg bg-[#292F36] text-white w-[150px] h-10">
                                        Sign in
                                    </button>
                                    {/* </Link> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state) => ({
    res: state.LoginData
});

export default connect(mapStateToProps)(Login);
