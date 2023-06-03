import React from 'react';

const Work = ({ workData }) => {
    return (
        <>
            <div className="max-w-screen-lg mx-auto lg:flex grid md:grid-cols-2 lg:py-24 md:py-16 sm:py-12">
                {workData.map((card) => (
                    <div key={card.id} className=" p-5">
                        <div className="flex  flex-col items-center mx-auto w-4/5 dark:bg-gray-900 rounded-lg p-6 shadow-lg shadow-white-400/10 ">
                            <h2 className="text-xl font-semibold text-center text-[#292F36]">{card.title}</h2>
                            <p className="text-center mt-2 text-[#4D5053]">{card.description}</p>
                            <a href='/'
                                className='font-semibold text-[#4D5053] flex items-center justify-center lg:py-6 sm:py-2 md:py-3'>
                                Read More
                                <i className="fa-solid fa-arrow-right text-[#CDA274] ml-2"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>


        </>
    );
};

export default Work;
