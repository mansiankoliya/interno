import React from 'react'

const Project = ({ projectData }) => {
    return (
        <>
            <div className="max-w-screen-lg mx-auto px-4 lg:py-20 md:py-16 sm:py-12 py-5">
                <div className="pb-5 flex justify-center items-center flex-col">
                    <h1 className="text-2xl lg:text-4xl font-semibold text-[#292F36]">
                        Follow Our Projects
                    </h1>
                    <p className="text-[#4D5053] lg:w-3/5 md:w-4/5 sm:w-full text-center pt-4">
                        It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
                    </p>
                </div>
                <div className="flex flex-wrap justify-between">
                    {projectData.map((project) => (
                        <div key={project.id} className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8">
                            <div className="bg-white rounded-lg flex flex-col p-4">
                                <img src={project.image} alt={project.title} className="w-full h-auto mb-4" />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                                        <p className="text-gray-500">{project.content}</p>
                                    </div>
                                    <i className="sarrow fa-solid fa-chevron-right bg-[#F4F0EC] rounded-full p-5 text-[#292F36]"></i>
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