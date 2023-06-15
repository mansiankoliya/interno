import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {

    const cardData1 = {
        ig: "Images/error.png",
        title: "404",
        content: "We are sorry, but the page you requested was not found",
        btn: "Back To Home"
    }

    return (
        <>
            <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:items-center lg:pb-24 md:pb-16 sm:pb-12 justify-between md:justify-center md:items-center">
                <div className="lg:flex lg:items-center lg:justify-between bg-white rounded-lg  p-6">
                    <div className="lg:w-1/2 lg:pr-8">
                        <h2 className="text-2xl md:text-8xl font-bold text-[#CDA274] mb-4 md:justify-center md:flex lg:justify-start sm:justify-center sm:flex md:w-[80%]">{cardData1.title}</h2>
                        <p className="text-[#292F36] justify-center items-center mb-4 text-xl md:w-[80%]">{cardData1.content}</p>
                        <div className='flex justify-center lg:justify-start mb-6'>
                            <Link to="/">
                                <button className="rounded-lg bg-[#292F36] text-white py-2 px-4 mt-4  justify-center items-center flex ">
                                    {cardData1.btn}
                                    <i className="fa-solid fa-arrow-right text-[#CDA274] ml-2"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-2/4  md:w-2/3 sm:justify-center sm:flex md:justify-center md:flex md:mx-auto sm:mx-auto">
                        <img src={cardData1.ig} alt="Card" className="w-full" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Errorpage