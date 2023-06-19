import React from 'react'
import Topbg from '../Components/Topbg/Topbg'
import Work from '../Components/Work/Work'
import Contacts from '../Components/Contacts/Contacts'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'


const Services = () => {

    const servicesbg = {
        ig: "Images/servicesbg.jpg",
        title: "Services",
        subtitle: "Home / Services"
    }

    const workData = {
        data:
            [
                {
                    id: 1,
                    title: "Project Plan",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority."
                },
                {
                    id: 2,
                    title: "Interior Work",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority."
                },
                {
                    id: 3,
                    title: "Realization",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority."
                },
                {
                    id: 4,
                    title: "2d/3d Art Work",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority."
                },
                {
                    id: 5,
                    title: "Interior Work",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority."
                },
                {
                    id: 6,
                    title: "Decoration Work",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority."
                },
            ]
    }

    const cardFData = {
        ig: "Images/simg1.png",
        title: "Concept & Details",
        content: "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
        num: "01",
        icn: "Images/icon1.png"
    }

    const cardSData = {
        ig: "Images/simg2.png",
        title: "Idea for Work",
        content: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.  ",
        num: "02",
        icn: "Images/icon2.svg"
    }

    const cardTData = {
        ig: "Images/simg3.png",
        title: "Design",
        content: "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
        num: "03",
        icn: "Images/icon3.png"
    }

    const cardFoData = {
        ig: "Images/simg4.png",
        title: "Perfection",
        content: "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
        num: "04",
        icn: "Images/icon4.png"
    }

    return (
        <>
            <Header />
            <Topbg {...servicesbg} />
            <Work {...workData} />

            <div className="max-w-screen-lg lg:mb-28 md:mb-20 mb:12 sm:mb-14 sm:mx-2 lg:mx-auto py-6 sm:py-4 lg:py-12 bg-[#F4F0EC] rounded-3xl p-[10%]">
                <div className="mb-10">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-4 flex justify-center text-[#363B41]">
                        How We Work
                    </h2>
                    <p className="text-center text-[#4D5053] mx-auto max-w-[600px] text-sm sm:text-base md:px-0 px-5">
                        It is a long established fact that a reader will be distracted. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* First portion */}
                <div className="flex flex-col md:flex-row items-center justify-center rounded-lg">
                    <div className="md:w-1/2">
                        <img src={cardFData.ig} alt="Card" className="w-full" />
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <div className="text-center md:justify-start sm:justify-start justify-between flex sm:ml-4">
                            <div className="flex items-center">
                                <img src={cardFData.icn} alt="Card Icon" className="w-12 h-10 sm:w-18 sm:h-18 lg:w-18 lg:h-18 mr-2 sm:mr-10 lg:mr-44" />
                            </div>
                            <h1 className="text-[#FFFFFF] font-extrabold text-3xl sm:text-4xl lg:text-6xl">
                                {cardFData.num}
                            </h1>
                        </div>
                        <div className="md:w-2/3 mt-6 sm:mt-1 md:mt-3 justify-center flex flex-col ml-[0%] sm:ml-4 sm:justify-start md:justify-start lg:justify-start">
                            <h2 className="text-lg sm:text-xl lg:text-xl font-bold text-[#292F36] text-center md:text-left">
                                {cardFData.title}
                            </h2>
                            <p className="text-[#4D5053] text-center sm:text-left text-sm sm:text-base ml-0 sm:mr-4 lg:mr-6 lg:w-[350px]">
                                {cardFData.content}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second portion */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-center rounded-lg mt-8">
                    <div className="md:w-1/2">
                        <img src={cardSData.ig} alt="Card" className="w-full" />
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <div className="text-center md:justify-start sm:justify-start justify-between flex sm:ml-4">
                            <div className="flex items-center">
                                <img src={cardSData.icn} alt="Card Icon" className="w-12 h-10 sm:w-18 sm:h-18 lg:w-18 lg:h-18 mr-2 sm:mr-10 lg:mr-44" />
                            </div>
                            <h1 className="text-[#FFFFFF] font-extrabold text-3xl sm:text-4xl lg:text-6xl">
                                {cardSData.num}
                            </h1>
                        </div>
                        <div className="md:w-2/3 mt-6 sm:mt-1 md:mt-3 justify-center flex flex-col ml-[0%] sm:ml-4 sm:justify-start md:justify-start lg:justify-start">
                            <h2 className="text-lg sm:text-xl lg:text-xl font-bold text-[#292F36] text-center md:text-left">
                                {cardSData.title}
                            </h2>
                            <p className="text-[#4D5053] text-center sm:text-left text-sm sm:text-base  ml-0 sm:mr-4 lg:mr-6 lg:w-[350px]">
                                {cardSData.content}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third portion */}
                <div className="flex flex-col md:flex-row items-center justify-center rounded-lg">
                    <div className="md:w-1/2">
                        <img src={cardTData.ig} alt="Card" className="w-full" />
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <div className="text-center md:justify-start sm:justify-start justify-between flex sm:ml-4">
                            <div className="flex items-center">
                                <img src={cardTData.icn} alt="Card Icon" className="w-12 h-10 sm:w-18 sm:h-18 lg:w-18 lg:h-18 mr-2 sm:mr-10 lg:mr-44" />
                            </div>
                            <h1 className="text-[#FFFFFF] font-extrabold text-3xl sm:text-4xl lg:text-6xl">
                                {cardTData.num}
                            </h1>
                        </div>
                        <div className="md:w-2/3 mt-6 sm:mt-1 md:mt-3 justify-center flex flex-col ml-[0%] sm:ml-4 sm:justify-start md:justify-start lg:justify-start">
                            <h2 className="text-lg sm:text-xl lg:text-xl font-bold text-[#292F36] text-center md:text-left">
                                {cardTData.title}
                            </h2>
                            <p className="text-[#4D5053] text-center sm:text-left text-sm sm:text-base ml-0 sm:mr-4 lg:mr-6 lg:w-[350px]">
                                {cardTData.content}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fourth portion */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-center rounded-lg mt-8">
                    <div className="md:w-1/2">
                        <img src={cardFoData.ig} alt="Card" className="w-full" />
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <div className="text-center md:justify-start sm:justify-start justify-between flex sm:ml-4">
                            <div className="flex items-center">
                                <img src={cardFoData.icn} alt="Card Icon" className="w-12 h-10 sm:w-18 sm:h-18 lg:w-18 lg:h-18 mr-2 sm:mr-10 lg:mr-44" />
                            </div>
                            <h1 className="text-[#FFFFFF] font-extrabold text-3xl sm:text-4xl lg:text-6xl">
                                {cardFoData.num}
                            </h1>
                        </div>
                        <div className="md:w-2/3 mt-6 sm:mt-1 md:mt-3 justify-center flex flex-col ml-[0%] sm:ml-4 sm:justify-start md:justify-start lg:justify-start">
                            <h2 className="text-lg sm:text-xl lg:text-xl font-bold text-[#292F36] text-center md:text-left">
                                {cardFoData.title}
                            </h2>
                            <p className="text-[#4D5053] text-center sm:text-left text-sm sm:text-base  ml-0 sm:mr-4 lg:mr-6 lg:w-[350px] ">
                                {cardFoData.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            <Contacts />

            <Footer />
        </>
    )
}

export default Services 