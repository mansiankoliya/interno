import React from 'react'
import { NavLink } from 'react-router-dom';

const Pagination = () => {
    return (
        <>
            <div className="cursor-pointer mb-6 md:mb-10 sm:mb:8">
                <div className="flex items-center justify-center">
                    <NavLink to="/project" className="ssarrow one mx-2   border-2 border-[#CDA274]  hover:bg-[#F4F0EC] rounded-full px-2 py-1 ">01</NavLink>
                    <NavLink to="/project" className="ssarrow two mx-2  border-2 border-[#CDA274]  hover:bg-[#F4F0EC] rounded-full px-2 py-1  ">02</NavLink>
                    <NavLink to="/project" className="ssarrow three mx-2  border-2 border-[#CDA274]  hover:bg-[#F4F0EC] rounded-full px-2 py-1 ">03</NavLink>
                    <div className="aarrow_part">
                        <i className="ssarrow fa-solid fa-chevron-right mx-2  border-2 border-[#CDA274]  hover:bg-[#F4F0EC] rounded-full px-3 py-2 "></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pagination