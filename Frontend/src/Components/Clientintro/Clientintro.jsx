import React from 'react'
import Topbg from '../Topbg/Topbg'

const Clientintro = (props) => {

    const info = {
        image: "Images/info.jpg",
        title: "Info",
        subtitle: "Home / Info"
    }

    return (
        <>
            <Topbg {...info} />
            <div className="max-w-screen-lg lg:mx-auto my-12 md:my-28 sm:my-14 flex md:justify-center md:items-center md:flex-row flex-col mx-5 ">
                <div className="md:w-4/12  md:mr-10 bg-[#F4F0EC] rounded-3xl mb-10 md:mb-0 lg:h-[60%] sm:w-6/12 ">
                    <div className="flex flex-row py-10 px-10 mx-5 md:mx-0">
                        <div className="mr-10">
                            <ol className="leading-10 text-[#4D5053] font-semibold">
                                <li>Client</li>
                                <li>Category</li>
                                <li>Tags</li>
                                <li>Date</li>
                            </ol>
                        </div>
                        <div className="">
                            <ol className="leading-10 text-[#4D5053]">
                                <li>{props.name}</li>
                                <li>{props.cate}</li>
                                <li>{props.tag}</li>
                                <li>{props.date}</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="md:w-7/12 px-5 md:px-10 md:mt-7">
                    <div className="text-[#292F36] text-2xl md:text-4xl sm:text-2xl mb-3 font-semibold">
                        {props.title}
                    </div>
                    <div className="text-[#4D5053] mb-2 md:mb-5">
                        {props.pera1}
                    </div>
                    <div className="text-[#4D5053]">
                        {props.pera2}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Clientintro  