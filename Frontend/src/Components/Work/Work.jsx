import React from 'react';

const Work = (props) => {
    return (
        <>
            <div className="max-w-screen-lg mx-auto py-12 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {props.data.map((card) => (
                        <div key={card.id} className="p-5">
                            <div className="flex flex-col items-center mx-auto w-full dark:bg-gray-900 rounded-lg p-6 hover:bg-[#F4F0EC]">
                                <h2 className="text-xl font-semibold text-center text-[#292F36]">{card.title}</h2>
                                <p className="text-center mt-2 text-[#4D5053]">{card.description}</p>
                                <a href="/servicesingle" className="font-semibold text-[#4D5053] flex items-center justify-center py-3">
                                    Read More
                                    <i className="fa-solid fa-arrow-right text-[#CDA274] ml-2"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
};

export default Work;
