import React from 'react'

const LogoSection = () => {
    return (
        <>
            <div className="max-w-screen-lg mx-auto lg:flex flex-wrap justify-center items-center md:pt-16 sm:pt-12 pt-10 ml-auto mr-auto w-[80%] ">
                <div className="grid grid-cols-2 lg:grid-cols-5  sm:grid-cols-3 items-center justify-center">
                    <img src="Images/01.svg" alt="logo1" className="flex-shrink-0 max-w-full h-auto my-4 mx-10" />
                    <img src="Images/02.svg" alt="logo2" className="flex-shrink-0 max-w-full h-auto my-4 mx-10" />
                    <img src="Images/03.svg" alt="logo3" className="flex-shrink-0 max-w-full h-auto my-4 mx-10" />
                    <img src="Images/04.svg" alt="logo4" className="flex-shrink-0 max-w-full h-auto my-4 mx-10" />
                    <img src="Images/05.svg" alt="logo5" className="flex-shrink-0 max-w-full h-auto my-4 mx-10" />
                </div>
            </div>

        </>
    )
}

export default LogoSection  