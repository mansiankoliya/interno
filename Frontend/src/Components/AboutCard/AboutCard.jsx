import React from 'react'

const AboutCard = (props) => {
    return (
        <>
            <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:items-center lg:pb-24 md:pb-16 sm:pb-12 justify-between md:justify-center md:items-center">
                <div className="lg:flex lg:items-center lg:justify-between bg-white rounded-lg  p-6">
                    <div className="lg:w-1/2 lg:pr-8">
                        <h2 className="text-2xl  md:text-4xl font-bold text-[#292F36] mb-4  md:justify-center md:flex lg:justify-start sm:justify-center sm:flex  md:w-[80%]">{props.title}</h2>
                        <p className="text-[#4D5053] justify-center items-center mb-4  md:w-[80%]">{props.content}</p>
                        <div className='flex justify-center lg:justify-start mb-6'>
                            <button className="rounded-lg bg-[#292F36] text-white py-2 px-4 mt-4  justify-center items-center flex ">
                                {props.btn}
                                <i className="fa-solid fa-arrow-right text-[#CDA274] ml-2"></i>
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-2/4  md:w-2/3 sm:justify-center sm:flex md:justify-center md:flex md:mx-auto sm:mx-auto">
                        <img src={props.image} alt="Card Image" className="w-full" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutCard