import React from 'react'
import { Link } from 'react-router-dom'

const Topbg = (props) => {
    return (
        <>
            <div className='flex items-center justify-center' style={{
                backgroundImage: `url(${props.ig})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: "250px",

            }} >
                <div className='bg-[white] h-[26vh] w-[50%] lg:w-[20%] lg:h-[20vh] md:h-[22vh] md:w-[30%] sm:w-[40%] sm:h-[25vh] flex items-center justify-center rounded-2xl mt-32 '>
                    <div className='flex flex-col'>
                        <div className='text-[#292F36] items-center justify-center text-center font-semibold text-2xl'>{props.title}</div>
                        <Link to="/home" >
                            <div className='text-[#4D5053] items-center justify-center text-center'>{props.subtitle}</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbg      