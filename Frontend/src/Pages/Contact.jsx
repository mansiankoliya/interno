import React from 'react'
import Topbg from '../Components/Topbg/Topbg'

const Contact = () => {

    const contactback = {
        ig: "Images/contactbg.jpg",
        title: "Contact Us",
        subtitle: "Home / Contact"
    }
    return (
        <>
            <Topbg {...contactback} />


            {/* contact section */}
            <div className='max-w-screen-lg lg:mx-auto my-14 md:my-32 sm:my-24 mx-5 sm:mx-10 md:mx-10 '>
                <div>
                    <h1 className='text-[#292F36] font-semibold md:text-3xl sm:text-2xl text-center mx-auto md:w-[40%]'>
                        We love meeting new people and helping them.
                    </h1>
                </div>
                <div className='flex mt-4 md:mt-10 sm:mt-6 md:flex-row flex-col'>
                    <div className='md:w-[4/12] bg-[#F4F0EC] rounded-3xl sm:w-[50%] sm:h-[300px] w-[100%] h-[300px] lg:w-[25%] lg:h-[300px]'>
                        <div className='flex-col items-center justify-center text-[#4D5053] ml-6 py-6  '>
                            <div className='flex mt-6'>
                                <i className="fa-solid fa-envelope text-[#CDA274] bg-[white] rounded-full p-2"></i>
                                <p className='ml-3'> info@yourdomain.com </p>
                            </div>
                            <div className='flex py-5'>
                                <i className="fa-solid fa-phone text-[#CDA274] bg-[white] rounded-full p-2"></i>
                                <p className='ml-3'> +1 (378) 400-1234 </p>
                            </div>
                            <div className='flex pb-5'>
                                <i className="fa-solid fa-globe text-[#CDA274] bg-[white] rounded-full p-2"></i>
                                <p className='ml-3'> www.yourdomain.com </p>
                            </div>
                        </div>
                        <div className="icons space-x-4 text-[#292F36] ml-6">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div className='md:w-[8/21] md:ml-28'>
                        <form className="w-full max-w-lg  justify-center items-center flex flex-col">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative md:grid-cols-2 md:gap-6">
                                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b border-[#504d4d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=""
                                        required />
                                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-[#4D5053] text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Name
                                    </label>
                                </div>
                                <div className="md:w-1/2 px-3 relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_Email" id="floating_Email" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b border-[#504d4d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=""
                                        required />
                                    <label for="floating_email" className="peer-focus:font-medium absolute text-[#4D5053] text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Email
                                    </label>
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative md:grid-cols-2 md:gap-6">
                                    <input type="text" name="floating_Subject" id="floating_Subject" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b border-[#504d4d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=""
                                        required />
                                    <label for="floating_Subject" className="peer-focus:font-medium absolute text-[#4D5053] text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Subject
                                    </label>
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative md:grid-cols-2 md:gap-6">
                                    <input type="number" name="floating_Phone" id="floating_Phone" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b border-[#504d4d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=""
                                        required />
                                    <label for="floating_Phone" className="peer-focus:font-medium absolute text-[#4D5053] text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Phone
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-10">
                                <div className="px-3 relative z-0 w-full mb-3 group outline-none border-none">
                                    <label for="floating_textarea" className="peer-focus:font-medium absolute text-[#4D5053] text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Hello Iam Intrested in..
                                    </label>
                                    <textarea id="message" rows="4" cols="50" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b border-[#504d4d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    </textarea>
                                </div>
                            </div>

                            <div className="flex md:ml-auto mb-0">
                                <button className="rounded-xl bg-[#292F36] text-white py-4 px-6 mt-2 justify-center items-center flex ">
                                    Send Now
                                    <i className="fa-solid fa-arrow-right text-[#CDA274] ml-2"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact