import React from 'react'
import Topbg from '../Components/Topbg/Topbg'
import Blogs from '../Components/Blogs/Blogs'
import { Link } from 'react-router-dom'

const Blog = () => {

    const Blogbg = {
        ig: "Images/blogbg.jpg",
        title: "Articles & News",
        subtitle: "Home / Blog"
    }

    const blogsData = {
        data:
            [
                {
                    id: 1,
                    img: "Images/blogs1.png",
                    name: "Kitchan Design",
                    content: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022"
                },
                {

                    id: 2,
                    img: "Images/blogs2.png",
                    name: "Living Design",
                    content: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December,2022"
                },
                {

                    id: 3,
                    img: "Images/blogs3.png",
                    name: "Interior Design",
                    content: "Best For Any Office & Business Interior Solution",
                    date: "25 December,2022"
                },
                {

                    id: 4,
                    img: "Images/blogs4.png",
                    name: "Kitchan Design",
                    content: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022"
                },
                {

                    id: 5,
                    img: "Images/blogs5.png",
                    name: "Living Design",
                    content: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December,2022"
                }, {

                    id: 6,
                    img: "Images/blogs6.png",
                    name: "Interior Design",
                    content: "Best For Any Office & Business Interior Solution",
                    date: "25 December,2022"
                }

            ]
    }

    return (
        <>
            <Topbg {...Blogbg} />


            {/* latestpost */}
            <div className='max-w-screen-lg lg:mx-auto my-14 md:my-32 sm:my-24 mx-5 sm:mx-10 md:mx-10 ' >
                <div>
                    <h1 className='text-xl md:text-4xl sm:text-2xl font-semibold text-[#292F36]'>
                        Latest Post
                    </h1>
                </div>
                <div className='flex md:justify-center md:items-center md:flex-row flex-col mt-3 md:mt-4 sm:mt-1 '>
                    <div className='md:w-5/12 sm:w-6/12 '>  
                        <img src="Images/post.png" alt="" />
                    </div>
                    <div className='md:w-7/12 ml-12 mt-8 sm:w-6/12'>
                        <div className='md:w-[60%]'>
                            <p className='text-[#292F36] font-bold text-xl '>
                                Low Cost Latest Invented Interior Designing Ideas
                            </p>
                        </div>
                        <div className='mt-3 md:w-[55%]'>
                            <p className='text-[#4D5053]'>
                                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                            </p>
                        </div>
                        <div className='lg:my-6 md:my-2 md:w-[55%]'>
                            <p className='text-[#4D5053]'>
                                Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                            </p>
                        </div>
                        <div className='flex items-center justify-between md:w-[66%]'>
                            <p className='text-[#4D5053]'>
                                26 December,2022
                            </p>
                            <Link to="/project">
                                <i className="sarrow fa-solid fa-chevron-right bg-[#F4F0EC] rounded-full p-4 text-[#292F36]"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Blogs {...blogsData} />
        </>
    )
}

export default Blog