import React from 'react'
import Topbg from '../Components/Topbg/Topbg'
import { Link } from 'react-router-dom'
import Pagination from '../Components/Pagination/Pagination'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const Project = () => {

    const projectsbg = {
        ig: "Images/projectbg.jpg",
        title: "Our Project",
        subtitle: "Home / Project"
    }

    const projectData = {
        data:
            [
                {
                    id: 1,
                    ig: "Images/p1.png",
                    title: "Minimal Bedroom",
                    content: "Decor / Artchitecture"
                },
                {
                    id: 2,
                    ig: "Images/p2.png",
                    title: "Minimal Bedroom",
                    content: "Decor / Artchitecture"
                },
                {
                    id: 3,
                    ig: "Images/p3.png",
                    title: "Classic Minimal Bedroom",
                    content: "Decor / Artchitecture"
                },
                {
                    id: 4,
                    ig: "Images/p4.png",
                    title: "Modern Bedroom",
                    content: "Decor / Artchitecture"
                }, {
                    id: 5,
                    ig: "Images/p5.png",
                    title: "Minimal Bedroom table",
                    content: "Decor / Artchitecture"
                },
                {
                    id: 6,
                    ig: "Images/p6.png",
                    title: "System Table",
                    content: "Decor / Artchitecture"
                }
                ,
                {
                    id: 7,
                    ig: "Images/p7.png",
                    title: "Modern Medroom",
                    content: "Decor / Artchitecture"
                },
                {
                    id: 8,
                    ig: "Images/p8.png",
                    title: "Modern Bedroom",
                    content: "Decor / Artchitecture"
                }
            ]
    }


    return (
        <>
            <Header />
            <Topbg {...projectsbg} />

            {/* button area */}
            <div className='max-w-screen-lg lg:mx-auto border-[1px] border-[#CDA274] mt-10 md:mt-28 sm:mt-16 flex flex-wrap justify-center lg:justify-start rounded-lg sm:mx-10 mx-5 md:mx-20 xl:w-[40%] lg:w-[63%] md:w-[80%] sm:w-11/12'>
                <div className='px-9'>
                    <button className="bg-transparent hover:bg-[#CDA274] text-[#292F36] font-semibold hover:text-white py-2 px-5 hover:border-transparent rounded-xl">
                        Bathroom
                    </button>
                </div>
                <div className=''>
                    <button className="bg-transparent hover:bg-[#CDA274] text-[#292F36] font-semibold hover:text-white py-2 px-5 hover:border-transparent rounded-xl">
                        Bedroom
                    </button>
                </div>
                <div className='px-9'>
                    <button className="bg-transparent hover:bg-[#CDA274] text-[#292F36] font-semibold hover:text-white py-2 px-5 hover:border-transparent rounded-xl">
                        Kitchen
                    </button>
                </div>
                <div className=''>
                    <button className="bg-transparent hover:bg-[#CDA274] text-[#292F36] font-semibold hover:text-white py-2 px-5 hover:border-transparent rounded-xl">
                        Living Area
                    </button>
                </div>
            </div>


            {/* project Section */}
            <div className="max-w-screen-lg mx-auto px-4 lg:py-20 md:py-16 sm:py-12 py-5">
                <div className="flex flex-wrap justify-between">
                    {projectData.data.map((project) => (
                        <div key={project.id} className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8" id='projectscards'>
                            <div className=" bg-white rounded-lg flex flex-col p-4 " >
                                <img src={project.ig} alt={project.title} className="w-full h-auto mb-4" />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
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


            {/* number section */}
            <Pagination />

            <Footer />

        </>
    )
}

export default Project
