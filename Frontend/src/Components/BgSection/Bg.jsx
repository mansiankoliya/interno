import React from 'react'
import { Link } from 'react-router-dom'

const Bg = () => {
    return (
        <>
            <div className="relative  mx-auto">
                <div className="homebg">
                    <div className="content flex flex-col justify-center py-52 px-10 md:py-60 md:px-20 absolute">
                        <h1 className="text-6xl text-light font-light">
                            Let Your Home
                            <br className="xxl:hidden" />
                            <span className="block md:inline">Be Unique</span>
                        </h1>
                        <p className="text-[#4D5053] my-2">
                            There are many variations of the passages of lorem Ipsum
                            <br className="xxl:hidden" />
                            <span className="block md:inline">from available variations of the passages.</span>
                        </p>
                        <Link to='/project' >
                            <button className="rounded-lg bg-[#292F36] text-white flex justify-center items-center w-[150px] h-10">
                                Get Started &nbsp;
                                <span>
                                    <img src="Images/arrow.png" alt="Arrow" />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Bg