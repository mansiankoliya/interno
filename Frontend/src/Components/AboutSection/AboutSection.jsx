import React from 'react'
import { Link } from 'react-router-dom'

const AboutSection = ({ aboutData }) => {
    return (
        <>
            <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:items-center lg:pb-24 md:pb-16 sm:pb-12 justify-between md:justify-center md:items-center">
                <div className="lg:w-[32%] w-[90%] sm:mt-4 md:pl-10  ">
                    <h2 className="text-2xl lg:text-4xl font-semibold mb-4 text-[#292F36] text-center lg:text-justify lg:w-[300px]">{aboutData.heading}</h2>
                    <p className="lg:text-lg lg:text-justify text-center text-[#4D5053] ">
                        {aboutData.pera}
                    </p>
                    <div className="flex items-center mt-4 justify-center lg:justify-start ">
                        <i className="fa-solid fa-phone text-[#CDA274] bg-[#F4F0EC] rounded-full p-5"></i>
                        <div className='flex flex-col ml-5'>
                            <span className="block font-semibold text-[ #4D5053]  ">
                                012345678
                            </span>
                            <span className="block text-sm text-[ #4D5053]">
                                Call Us Anytime
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-center lg:justify-start mb-6'>
                        <Link to="/contact" >
                            <button className="rounded-lg bg-[#292F36] text-white py-2 px-4 mt-4  justify-center items-center flex ">
                                {aboutData.btn}
                                <i className="fa-solid fa-arrow-right text-[#CDA274] ml-2"></i>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="lg:pl-24 justify-center items-center p-5 flex">
                    <img
                        src={aboutData.img}
                        alt="AboutImage"
                        className="object-cover lg:h-[640px] "
                    />
                </div>
            </div >
        </>
    )
}

export default AboutSection     