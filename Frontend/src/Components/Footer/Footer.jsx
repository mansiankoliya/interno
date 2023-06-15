import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="bg-white">
                <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div className="md:flex space-x-20">
                            <div className="text-center ">
                                <Link to="/" className="flex md:justify-start sm:justify-center lg:justify-start justify-center">
                                    <img src="/Images/Logo.png" className="h-8 mr-3" alt="Logo" />
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#292F36]">Interno</span>
                                </Link>
                                <p className="text-[#4D5053] text-lg lg:text-xl flex md:text-justify lg:w-[300px]  sm:justify-center lg:justify-start justify-center  ">
                                    It is a long established fact that a reader will be distracted looking.
                                </p>
                                <div className="lg:mt-6 space-x-10 mt-3 md:justify-start justify-center flex">
                                    <i className="fa-brands fa-facebook-f text-[#292F36]"></i>
                                    <i className="fa-brands fa-twitter text-[#292F36]"></i>
                                    <i className="fa-brands fa-linkedin-in text-[#292F36]"></i>
                                    <i className="fa-brands fa-instagram text-[#292F36] "></i>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 sm:gap-6  lg:mt-0">
                                <div>
                                    <h2 className="mb-6 text-xl font-semibold text-[#292F36]">Pages</h2>
                                    <ul className="text-gray-600 dark:text-gray-400 font-medium space-y-4">
                                        <li>
                                            <Link to="/about" className="hover:underline text-[#4D5053]">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/project" className="hover:underline text-[#4D5053]">Our Projects</Link>
                                        </li>
                                        <li>
                                            <Link to="/team" className="hover:underline text-[#4D5053]">Our Team</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact" className="hover:underline text-[#4D5053]">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/services" className="hover:underline text-[#4D5053]">Services</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-xl font-semibold text-[#292F36]">Services</h2>
                                    <ul className="text-gray-600 dark:text-gray-400 font-medium space-y-4">
                                        <li>
                                            <Link to="/project" className="hover:underline text-[#4D5053]">Kitchen</Link>
                                        </li>
                                        <li>
                                            <Link to="/project" className="hover:underline text-[#4D5053]">Living Area</Link>
                                        </li>
                                        <li>
                                            <Link to="/project" className="hover:underline text-[#4D5053]">Bathroom</Link>
                                        </li>
                                        <li>
                                            <Link to="/project" className="hover:underline text-[#4D5053]">Dining Hall</Link>
                                        </li>
                                        <li>
                                            <Link to="/project" className="hover:underline text-[#4D5053]">Bedroom</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-xl font-semibold text-[#292F36]">Contact</h2>
                                    <ul className="text-gray-600 dark:text-gray-400 font-medium space-y-4">
                                        <li>
                                            <Link to="/" className="text-[#4D5053]">55 East Birchwood Ave.<br /> Brooklyn, New York 11201</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="text-[#4D5053]">contact@interno.com</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="text-[#4D5053]">(123) 456 - 7890</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <div className="items-center justify-center flex">
                            <div className='text-[#4D5053]'>
                                &copy; Interno | Designed by Interno Team
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer