import React from 'react'

const AboutClient = (props) => {
    return (
        <>
            <div className="lg:mx-auto py-12 px-4 bg-[#F4F0EC] rounded-3xl flex md:justify-center md:items-center flex-col mx-5">
                <h2 className="text-2xl lg:text-4xl font-semibold mb-4 flex text-center justify-center text-[#292F36]">
                    What the People Think
                    <br />
                    About Us
                </h2>

                <div className="max-w-screen-lg flex flex-wrap justify-center">
                    {props.data.map((card) => (
                        <div className="flip-card mx-4 my-4" key={card.id}>
                            <div className="flip-card-inner shadow-sm">
                                <div className="flip-card-front">
                                    <img src={card.image} alt={card.name} className="w-full h-full" />
                                </div>
                                <div className="flip-card-back rounded-2xl flex flex-col items-center justify-center ">
                                    <div className='flex flex-col justify-center items-center'>
                                        <h1 className='text[#292F36] font-medium text-lg'>{card.name}</h1>
                                        <p className='text-[#4D5053] text-xs'>{card.work}</p>
                                        <div className="icons space-x-4 text-[#292F36] my-12">
                                            <i className="fa-brands fa-facebook-f"></i>
                                            <i className="fa-brands fa-twitter"></i>
                                            <i className="fa-brands fa-linkedin-in"></i>
                                            <i className="fa-brands fa-instagram"></i>
                                        </div>
                                        <div className='text-[#4D5053] text-sm '>
                                            <p className=''>{card.number}</p>
                                            <p className=''>{card.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </>
    )
}

export default AboutClient