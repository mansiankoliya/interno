import React from 'react'
import Topbg from '../Components/Topbg/Topbg'
import { Link } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const Team = () => {

    const Teambg = {
        ig: "Images/teambg.jpg",
        title: "Our Professional",
        subtitle: "Home / Team"
    }

    const AboutClientData = {
        data:
            [
                {
                    id: 1,
                    ig: "Images/swipe1.png",
                    name: "Charlotte Levi",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Charlotte@email.com",
                },
                {
                    id: 2,
                    ig: "Images/swipe2.png",
                    name: "Nattasha Julie",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Nattasha@email.com",
                },
                {
                    id: 3,
                    ig: "Images/swipe3.png",
                    name: "John Smith",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "John@email.com",
                },
                {
                    id: 4,
                    ig: "Images/swipe4.png",
                    name: "Nora Owen",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Nora@email.com",
                },
                {
                    id: 5,
                    ig: "Images/swipe5.png",
                    name: "Sofia Carter",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Sofia@email.com",
                },
                {
                    id: 6,
                    ig: "Images/swipe6.png",
                    name: "Avery Jackson",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Avery@email.com",
                },
                {
                    id: 7,
                    ig: "Images/swipe7.png",
                    name: "Luna James ",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Luna@email.com",
                },
                {
                    id: 8,
                    ig: "Images/swipe8.png",
                    name: "Gianna Mateo",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Gianna@email.com",
                },

            ]
    }


    return (
        <>
        
        <Header />
            <Topbg  {...Teambg} />
            <div className='max-w-screen-lg lg:mx-auto my-14 md:my-32 sm:my-24 mx-5 sm:mx-10 md:mx-10'>
                <div className=" flex flex-wrap justify-center">
                    {AboutClientData.data.map((card) => (
                        <Link to="/teamsingle">
                            <div className="flip-card mx-4 my-4" key={card.id}>
                                <div className="flip-card-inner shadow-sm">
                                    <div className="flip-card-front">
                                        <img src={card.ig} alt={card.name} className="w-full h-full" />
                                    </div>
                                    <div className="flip-card-back rounded-2xl flex flex-col items-center justify-center ">
                                        <div className='flex flex-col justify-center items-center'>
                                            <h1 className='text[#292F36] font-medium text-lg'>{card.name}</h1>
                                            <p className='text-[#4D5053] text-xs'>{card.work}</p>
                                            <div className="icons space-x-4 text-[#292F36] my-12">
                                                <i className="fa-brands fa-facebook-f"></i>
                                                <i className="fa-brands fa-twitter"></i>
                                                <i className="fa-brands fa-linkedin-in"></i>
                                                <i className="fa-brands fa-instagram"></i>
                                            </div>
                                            <div className='text-[#4D5053] text-sm '>
                                                <p className=''>{card.number}</p>
                                                <p className=''>{card.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Team