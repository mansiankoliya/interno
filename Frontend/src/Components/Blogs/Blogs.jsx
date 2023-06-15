import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = ({ blogsData }) => {
    return (
        <>
            <div className="max-w-screen-lg mx-auto px-4 md:mb-24 mb:10 sm:mb-16 ">
                <div className="pb-5 flex justify-center items-center flex-col">
                    <h1 className="text-2xl lg:text-4xl font-semibold text-[#292F36]">
                        Articles & News
                    </h1>
                    <p className="text-[#4D5053] lg:w-3/5 md:w-4/5 sm:w-full text-center pt-4">
                        It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
                    {blogsData.map((blog) => (
                        <div key={blog.id} className="max-w-sm rounded-2xl overflow-hidden shadow-xl m-4 p-2 hover:bg-[#E7E7E7]">
                            <div className="relative">
                                <img className="w-full" src={blog.img} alt={blog.name} />
                                <div className="absolute bottom-0 left-0 bg-opacity-70 py-2 px-4 w-full">
                                    <div className="text-[#4D5053] bg-[#FFFFFF] font-normal text-[20px] rounded-lg p-1 text-center">
                                        {blog.name}
                                    </div>
                                </div>
                            </div>
                            <div className="px-1 py-4">
                                <p className="text-[#292F36] font-semibold">{blog.content}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="px-1 py-4">
                                    <span className="inline-block text-[#4D5053] rounded-full px-3 py-1 text-sm font-normal">
                                        {blog.date}
                                    </span>
                                </div>
                                <Link to="/project">  <i className="sarrow fa-solid fa-chevron-right bg-[#F4F0EC] rounded-full p-4 text-[#292F36] hover:bg-[#FFFFFF]"></i></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Blogs