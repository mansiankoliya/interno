import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
                                <button className="rounded-lg bg-[white] text-[#292F36]  h-11 hover:border-2 hover:border-gray-300  w-[60%] justify-center items-center flex text-center">
                                    <div className='flex text-center items-center'>
                                        <div className='mr-2'>
                                            <img src="Images/google.png" className='h-8' alt="google" />
                                        </div>
                                        Continue with google
                                    </div>
                                </button>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="flex items-center border-t border-[#C6C6C6] w-[40%]"></div>
                                <p className="text-[#292F36] px-4 text-sm">Or</p>
                                <div className="flex items-center border-t border-[#C6C6C6] w-[40%]"></div>
                            </div>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium  text-[#292F36]">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border-2 border-[#CDA274] text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white " placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-[#292F36]">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border-2 border-[#CDA274] text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white" required="" />
                                </div>
                                <div className='flex justify-center items-center '>
                                    <Link >
                                        <button className="rounded-lg bg-[#292F36] text-white  w-[150px] h-10">
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

export default Login