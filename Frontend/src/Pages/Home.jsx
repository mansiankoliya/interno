import React from 'react'
import Bg from '../Components/BgSection/Bg'
import Work from '../Components/Work/Work'
import AboutSection from '../Components/AboutSection/AboutSection'
import Client from '../Components/ClientsSection/Client'
import LogoSection from '../Components/Logo/LogoSection'
import ProjectSection from '../Components/ProjectSection/ProjectSection'
import Counter from '../Components/Counter/Counter'
import Blogs from '../Components/Blogs/Blogs'
import Contacts from '../Components/Contacts/Contacts'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'


const Home = () => {

    const workData = {
        data:
            [
                {
                    id: 1,
                    title: "Project Plan",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority."
                },
                {
                    id: 2,
                    title: "Interior Work",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority."
                },
                {
                    id: 3,
                    title: "Realization",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority."
                }
            ]
    }


    const aboutData =
    {
        img: 'Images/about.png',
        heading: "We Create The Art Of Stylish Living Stylishly",
        pera: 'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using  that it has a more-or-less normal.',
        btn: "Get Free Estimate"
    }

    const clientData =
        [
            {
                id: 1,
                img: 'Images/clien1.png',
                title: 'Nattasha Mith',
                city: 'Sydney, USA',
                pera: 'Lorem Ipsum is simply dummy text of the typesetting industry.Ipsum has been.'
            },
            {
                id: 2,
                img: 'Images/client2.png',
                title: 'Raymond Galario',
                city: 'Sydney, Australia',
                pera: 'Lorem Ipsum is simply dummy text of the typesetting industry.Ipsum has been scrambled it to make a type book.'
            },
            {
                id: 3,
                img: 'Images/client3.png',
                title: 'Benny Roll',
                city: 'Sydney, New York',
                pera: 'Lorem Ipsum is simply dummytext of the typesetting industry. Ipsum has been scrambled.'
            }
        ]

    const projectData = {
        heading: "Follow Our Projects",
        pera: "It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.",
        data:
            [
                {
                    id: 1,
                    ig: "Images/project1.png",
                    title: "Modern Kitchan",
                    content: "Decor / Artchitecture"
                },
                {
                    id: 2,
                    ig: "Images/project2.png",
                    title: "Modern Kitchan",
                    content: "Decor / Artchitecture"
                },
                {
                    id: 3,
                    ig: "Images/project3.png",
                    title: "Modern Kitchan",
                    content: "Decor / Artchitecture"
                },
                {
                    id: 4,
                    ig: "Images/project4.png",
                    title: "Modern Kitchan",
                    content: "Decor / Artchitecture"
                }
            ]
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
                }

            ]
    }


    return (
        <>
            <Header />
            <Bg />
            <Work {...workData} />
            <AboutSection aboutData={aboutData} />
            <Client clientData={clientData} />
            <LogoSection />
            <ProjectSection {...projectData} />
            <Counter />
            <Blogs {...blogsData} />
            <Contacts />
            <Footer />
        </>
    )
}

export default Home

