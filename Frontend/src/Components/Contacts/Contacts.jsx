import React from 'react'
import { Link } from 'react-router-dom'

const Contacts = () => {
    return (
        <>
            <div className="max-w-screen-lg mx-auto px-4 lg:py-1 md:py-16 sm:py-12 py-5 lg:pb-20">
                <div className="bg-[#292F36] rounded-3xl p-12">
                    <div className="text-[#FFFFFF] text-2xl">
                        <p className="text-center text-4xl">Wanna join the interno?</p>
                        <p className="text-center text-sm font-normal mt-3">It is a long established fact that will be distracted.</p>
                        <div className='flex justify-center lg:justify-center  mt-10'>
                            <Link to='/contact' >
                                <button className="rounded-xl bg-[#CDA274] text-[#FFFFFF] text-xl  justify-center items-center flex  w-[200px] lg:w-[250px] md:w-[230px] h-12 shadow-xl ">
                                    Contact With Us
                                    <i className="fa-solid fa-arrow-right text-[#292F36] ml-2"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contacts 