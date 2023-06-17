import React from 'react'
import Topbg from '../Components/Topbg/Topbg'
import AboutCard from '../Components/AboutCard/AboutCard'
import AboutCard1 from '../Components/AboutCard1/AboutCard1'
import AboutClient from '../Components/AboutClient/AboutClient'

const About = () => {

    const aboutbgData = {
        ig: "Images/aboutbg.png",
        title: "About Us",
        subtitle: "Home / About Us"
    }

    const cardData = {
        ig: "Images/acard1.png",
        title: "What We Do",
        content: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more- or - less normal.",
        btn: "Our Concept"
    }

    const cardData1 = {
        ig: "Images/acard2.png",
        title: "The End Result",
        content: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
        btn: "Our Portfolio"
    }

    const AboutClientData = {
        heading: "What the People Think About Us",
        data:
            [
                {
                    id: 1,
                    ig: "Images/swipe1.png",
                    name: "Charlotte Levi",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Charlotte@email.com",
                    link: '/teamsingle'
                },
                {
                    id: 2,
                    ig: "Images/swipe2.png",
                    name: "Nattasha Julie",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Nattasha@email.com",
                    link: '/teamsingle'
                },
                {
                    id: 3,
                    ig: "Images/swipe3.png",
                    name: "John Smith",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "John@email.com",
                    link: '/teamsingle'
                },
                {
                    id: 4,
                    ig: "Images/swipe4.png",
                    name: "Nora Owen",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Nora@email.com",
                    link: '/teamsingle'
                },
            ]
    }

    return (
        <>
            <Topbg {...aboutbgData} />

            <div className='flex flex-col md:flex-row justify-center items-center my-32 mx-auto'>
                <div className='pattern p-1 md:mr-4'>
                    <img src="Images/Pattern.png" alt="pattern" className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col justify-center items-center text-center text-xl text-[#292F36] md:text-left md:w-1/2 lg:w-1/3'>
                    <p className="text-[#292F36] text-6xl">“</p>
                    <div className="text-xl md:text-xl lg:text-2xl lg:text-center">
                        <p>
                            I like an interior that defies labeling.
                        </p>
                        <p>
                            I don't really want someone to walk into a room
                        </p>
                        <p>
                            and know that I did it
                        </p>
                    </div>
                    <p className='text-[#4D5053] mt-4 text-xl md:text-xl sm:text-sm'>- BUNNY WILLIAMS</p>
                </div>
                <div className='pattern1 p-1 md:ml-4'>
                    <img src="Images/Pattern1.png" alt="pattern" className='w-full h-full object-cover' />
                </div>
            </div>

            <AboutCard {...cardData} />
            <AboutCard1 {...cardData1} />
            <AboutClient {...AboutClientData} />

            <div className="max-w-screen-lg lg:mx-auto py-20 px-4  rounded-3xl flex md:justify-center md:items-center flex-col mx-5">
                <h2 className="text-2xl lg:text-4xl font-semibold mb-4 flex text-center justify-center text-[#292F36]">
                    Creative project? Let's have
                    <br />
                    a productive talk.
                </h2>
                <form className="w-full max-w-lg mt-10  justify-center items-center flex flex-col">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative md:grid-cols-2 md:gap-6">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b border-[#504d4d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required />
                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-[#4D5053] text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Name
                            </label>
                        </div>
                        <div className="md:w-1/2 px-3 relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b border-[#504d4d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-[#4D5053] text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Email
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

                    <div className="flex justify-center mb-0 items-center">
                        <button className="rounded-xl bg-[#292F36] text-white py-4 px-6 mt-4 justify-center items-center flex ">
                            Send Now
                            <i className="fa-solid fa-arrow-right text-[#CDA274] ml-2"></i>
                        </button>
                    </div>

                </form>
            </div>



        </>
    )
}

export default About
