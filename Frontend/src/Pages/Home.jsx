import React from 'react'
import Bg from '../Components/BgSection/Bg'
import Work from '../Components/Work/Work'

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

    return (
        <>
            <Bg />
            <Work />
        </>
    )
}

export default Home

