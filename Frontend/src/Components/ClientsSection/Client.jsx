import React from 'react'

const Client = ({ clientData }) => {
    return (
        <>
            <div className="max-w-screen-lg lg:mx-auto py-12 px-4 bg-[#F4F0EC] rounded-3xl flex md:justify-center md:items-center flex-col mx-5">
                <h2 className="text-2xl lg:text-4xl font-semibold mb-4 flex text-center justify-center text-[#292F36]">
                    What the People Thinks
                    <br />
                    About Us
                </h2>
                <div className="flex flex-wrap justify-center -mx-4">
                    {clientData.map((card) => (
                        <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mt-5">
                            <div className="flex flex-col bg-white rounded-2xl p-4 md:min-h-[250px]">
                                <div className='flex '>
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-10 h-10 mr-2 rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">{card.title}</h3>
                                        <p className="text-[#4D5053]">{card.city}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-700 mt-2">{card.pera}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}

export default Client