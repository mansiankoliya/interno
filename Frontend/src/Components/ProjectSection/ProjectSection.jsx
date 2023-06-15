import React from 'react'
import { Link } from 'react-router-dom'

const Project = (props) => {
    return (
        <>
            <div className="max-w-screen-lg mx-auto px-4 lg:py-20 md:py-16 sm:py-12 py-5">
                <div className="pb-5 flex justify-center items-center flex-col">
                    <h1 className="text-2xl lg:text-4xl font-semibold text-[#292F36]">
                        {props.heading}
                    </h1>
                    <p className="text-[#4D5053] lg:w-3/5 md:w-4/5 sm:w-full text-center pt-4">
                        {props.pera}
                    </p>
                </div>
                <div className="flex flex-wrap justify-between">
                    {props.data.map((project) => (
                        <div key={project.id} className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-1">
                            <div className="bg-white rounded-lg flex flex-col p-4">
                                <img src={project.ig} alt={project.title} className="w-full h-auto mb-4" />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                                        <p className="text-gray-500">{project.content}</p>
                                    </div>
                                    <Link to='/info'>
                                        <i className="sarrow fa-solid fa-chevron-right bg-[#F4F0EC] rounded-full p-5 text-[#292F36]">
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}   

export default Project