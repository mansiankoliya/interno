import React from 'react'
import Bg from '../Components/BgSection/Bg'
import Work from '../Components/Work/Work'
import AboutSection from '../Components/AboutSection/AboutSection'
import Client from '../Components/ClientsSection/Client'
import LogoSection from '../Components/Logo/LogoSection'
import Project from '../Components/ProjectSection/Project'
import Counter from '../Components/Counter/Counter'

const Home = () => {

    const workData = [
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

    const projectData =
        [
            {
                id: 1,
                image: "Images/project1.png",
                title: "Modern Kitchan",
                content: "Decor / Artchitecture"
            },
            {
                id: 2,
                image: "Images/project2.png",
                title: "Modern Kitchan",
                content: "Decor / Artchitecture"
            },
            {
                id: 3,
                image: "Images/project3.png",
                title: "Modern Kitchan",
                content: "Decor / Artchitecture"
            },
            {
                id: 4,
                image: "Images/project4.png",
                title: "Modern Kitchan",
                content: "Decor / Artchitecture"
            }
        ]

    return (
        <>
            <Bg />
            <Work workData={workData} />
            <AboutSection aboutData={aboutData} />
            <Client clientData={clientData} />
            <LogoSection />
            <Project projectData={projectData} />
            <Counter />
        </>
    )
}

export default Home

