import React from 'react'
import Topbg from '../Components/Topbg/Topbg'
import LogoSection from '../Components/Logo/LogoSection'
import AboutCard1 from '../Components/AboutCard1/AboutCard1'
import Counter from '../Components/Counter/Counter'


const ServiceSingle = () => {

    const servicesbg = {
        ig: "Images/ssingle.jpg",
        title: "Service Single",
        subtitle: "Home / Services Single"
    }

    const cardData1 = {
        ig: "Images/ssinglecard.png",
        title: "We love design.That's how we got here.",
        content: "It is a long established fact that a reader will be distracted by the of readable content . ",
        btn: "Our Portfolio"
    }

    return (
        <>
            <Topbg {...servicesbg} />

            {/* text portion */}
            <div className='max-w-screen-lg lg:mx-auto lg:mt-28 md:mt-20 sm:mt-16 flex flex-col md:flex-row my-14 sm:mx-2 mx-2'>
                <div className='md:w-1/2'>
                    <div className='mb-3'>
                        <h1 className='text-[#292F36] md:text-4xl text-xl lg:text-5xl lg:w-[350px] sm:text-3xl md:w-[290px]'>
                            We set the trends of modern living Services.
                        </h1>
                    </div>
                </div>
                <div className='md:w-1/2  sm:pl-0'>
                    <div className='lg:mb-6'>
                        <p className='text-[#CDA274] md:text-lg text-sm '>
                            It is a long established fact that a reader will be distracted by the of readable content of a page
                        </p>
                    </div>
                    <div className='lg:mb-6'>
                        <p className='text-[#4D5053] md:text-lg text-sm'>
                            when lookings at its layouts the points spriof using that it has a more
                            less normal.A wonderful s   erenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart.
                            I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.
                        </p>
                    </div>
                    <div>
                        <p className='text-[#4D5053] md:text-lg text-sm '>
                            when lookings at its layouts the points spriof using that it has a more
                            less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart.
                            I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.
                        </p>
                    </div>
                </div>
            </div>


            {/* logo */}
            <LogoSection />


            {/* video part */}
            <div className='max-w-screen-lg lg:mx-auto lg:mt-28 md:mt-20 sm:mt-16 my-14 sm:mx-4 mx-5 flex  '>
                <video className="rounded-[90px] h-[390px] md:w-[100%] sm:w-[90%]" width="" controls loop>
                    <source src="Images/video3.mp4" type="video/mp4" />
                </video>
            </div>


            {/* diffrence part */}
            <div className="max-w-screen-lg lg:mx-auto sm:mx-20 mx-2 flex flex-col md:flex-row lg:mt-28 md:mt-20 sm:mt-16 mb-3 md:mb-10  ">
                <div className="lg:w-5/12 w-full md:ml-[15%] sm:ml-[20%] ml-[10%]">
                    <div className="mb-3">
                        <h1 className="flex md:text-4xl sm:text-3xl text-2xl text-[#292F36] font-semibold">
                            Use of Interior
                        </h1>
                    </div>
                    <div>
                        <ol className="text-[#4D5053] leading-10">
                            <li className="first-letter:text-[#CDA274]">
                                1 We provide high quality design services
                            </li>
                            <li className="first-letter:text-[#CDA274]">
                                2 Project on time and Latest Design.
                            </li>
                            <li className="first-letter:text-[#CDA274]">
                                3 Scientific Skills For getting a better result.
                            </li>
                            <li className="first-letter:text-[#CDA274]">
                                4 Renovations Benefit of Service
                            </li>
                            <li className="first-letter:text-[#CDA274]">
                                5 We are confident about our projects.
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="lg:w-7/12 w-full md:ml-[5%] sm:mt-[4%] md:mt-0 sm:ml-[20%] ml-[10%] mt-[1%]">
                    <div className="mb-3">
                        <h1 className="flex md:text-4xl sm:text-3xl text-2xl text-[#292F36] font-semibold">
                            Make An Art
                        </h1>
                    </div>
                    <div>
                        <ol className="text-[#4D5053] leading-10">
                            <li className="first-letter:text-[#CDA274]">
                                1 We provide high quality design services
                            </li>
                            <li className="first-letter:text-[#CDA274]">
                                2 Project on time and Latest Design.
                            </li>
                            <li className="first-letter:text-[#CDA274]">
                                3 Scientific Skills For getting a better result.
                            </li>
                            <li className="first-letter:text-[#CDA274]">
                                4 Renovations Benefit of Service
                            </li>
                            <li className="first-letter:text-[#CDA274]">
                                5 We are confident about our projects.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>


            <AboutCard1 {...cardData1} />

            <Counter />

        </>
    )
}

export default ServiceSingle