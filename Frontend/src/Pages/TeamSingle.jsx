import React from 'react'
import Topbg from '../Components/Topbg/Topbg'
import AboutClient from '../Components/AboutClient/AboutClient'
import Slider from '@mui/material/Slider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const TeamSingle = () => {

    const Teamsinglebg = {
        ig: "Images/teamsinglebg.jpg",
        title: "Professional Single",
        subtitle: "Home / Team Single"
    }

    const AboutClientData = {
        heading: "Our Team Members",
        data:
            [
                {
                    id: 1,
                    ig: "Images/swipe1.png",
                    name: "Charlotte Levi",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Charlotte@email.com",
                    link: '/teamsingle'
                },
                {
                    id: 2,
                    ig: "Images/swipe2.png",
                    name: "Nattasha Julie",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Nattasha@email.com",
                    link: '/teamsingle'
                },
                {
                    id: 3,
                    ig: "Images/swipe3.png",
                    name: "John Smith",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "John@email.com",
                    link: '/teamsingle'
                },
                {
                    id: 4,
                    ig: "Images/swipe4.png",
                    name: "Nora Owen",
                    work: "Design, Australia",
                    number: "+1 (378) 400-1234",
                    email: "Nora@email.com",
                    link: '/teamsingle'
                },
            ]
    }

    return (
        <>
            <Topbg  {...Teamsinglebg} />


            {/* image part */}
            <div className='max-w-screen-lg lg:mx-auto my-14 md:my-32 sm:my-24 mx-5 sm:mx-10 md:mx-10 ' >
                <div className='flex md:justify-center md:items-center md:flex-row flex-col'>
                    <picture className='md:w-5/12  mx-auto'>
                        <img className='md:w-[80%] h-[420px]' src="Images/swipe1.png" alt="swipe" />
                    </picture>
                    <div className='md:w-7/12 '>
                        <div className='mt-4'>
                            <p className='text-[#292F36] font-semibold text-3xl'>
                                John Smith
                            </p>
                            <p className='text-[#4D5053]'>
                                Designer
                            </p>
                        </div>
                        <div className='py-2 md:py-5'>
                            <p className='text-[#4D5053] '>
                                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don't look even slightly believable.
                            </p>
                        </div>
                        <div className='flex-col items-center text-[#4D5053]'>
                            <div className='flex'>
                                <i className="fa-solid fa-envelope text-[#CDA274] bg-[#F4F0EC] rounded-full p-2"></i>
                                <p className='ml-3'> info@yourdomain.com </p>
                            </div>
                            <div className='flex py-5'>
                                <i className="fa-solid fa-phone text-[#CDA274] bg-[#F4F0EC] rounded-full p-2"></i>
                                <p className='ml-3'> +1 (378) 400-1234 </p>
                            </div>
                            <div className='flex pb-10'>
                                <i className="fa-solid fa-globe text-[#CDA274] bg-[#F4F0EC] rounded-full p-2"></i>
                                <p className='ml-3'> www.yourdomain.com </p>
                            </div>
                        </div>
                        <div className="icons space-x-4 text-[#292F36] ">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>

                {/* text part */}
                <div className='mt-6 md:mt-16'>
                    <div className='flex flex-row'>
                        <p className='text-3xl font-semibold text-[#292F36]'>
                            Short Biography
                        </p>
                    </div>
                    <div className='text-[#4D5053] mt-3 md:mt-7'>
                        <p>
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which don't look even slightly believable.
                        </p>
                        <p className='mt-2 md:mt-6'>
                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.
                        </p>
                    </div>
                </div>

                <div className='flex  lex md:justify-center md:items-center md:flex-row flex-col'>
                    <div className='md:w-7/12'>
                        <div className='mt-6'>
                            <p className='text-[#292F36] font-bold'>
                                Simplicity and Functionality
                            </p>
                        </div>
                        <div className='mt-3'>
                            <p className='text-[#4D5053] md:w-[90%] '>
                                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.
                            </p>
                        </div>
                        <div className='mt-6'>
                            <p className='text-[#4D5053] md:w-[100%]'>
                                There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour
                            </p>
                        </div>
                        <div className='mt-4'>
                            <p className='text-[#4D5053] font-semibold'>
                                Project Design
                            </p>
                            <Slider
                                size="small"
                                defaultValue={65}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                sx={{
                                    color: "#CDA274",
                                    height: 4,
                                    width: 360,
                                    "& .MuiSlider-track": {
                                        border: "none",
                                        color: "#CDA274",
                                    },
                                    "& .MuiSlider-thumb": {
                                        height: 20,
                                        width: 20,
                                        backgroundColor: "#fff",
                                        border: "2px solid #CDA274",
                                        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                                            boxShadow: "inherit",
                                        },
                                        "&:before": {
                                            display: "none",
                                        },
                                    },
                                    "& .MuiSlider-valueLabel": {
                                        lineHeight: 0,
                                        fontSize: 16,
                                        background: "unset",
                                        fontWeight: "bold",
                                        padding: 0,
                                        width: 32,
                                        color: "black",
                                        height: 20,
                                        // borderRadius: "50% 50% 50% 0",
                                        // backgroundColor: "#CDA274 ",

                                        transformOrigin: "bottom left",
                                        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
                                        "&:before": { display: "none" },
                                        "&.MuiSlider-valueLabelOpen": {
                                            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
                                        },
                                        "& > *": {
                                            transform: "rotate(45deg)",
                                        },
                                    },
                                }}
                            />

                            <p className='text-[#4D5053] font-semibold'>
                                Team Management
                            </p>
                            <Slider
                                size="small"
                                defaultValue={95}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                sx={{
                                    color: "#CDA274",
                                    height: 4,
                                    width: 360,
                                    "& .MuiSlider-track": {
                                        border: "none",
                                        color: "#CDA274",
                                    },
                                    "& .MuiSlider-thumb": {
                                        height: 20,
                                        width: 20,
                                        backgroundColor: "#fff",
                                        border: "2px solid #CDA274",
                                        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                                            boxShadow: "inherit",
                                        },
                                        "&:before": {
                                            display: "none",
                                        },
                                    },
                                    "& .MuiSlider-valueLabel": {
                                        lineHeight: 0,
                                        fontSize: 16,
                                        background: "unset",
                                        fontWeight: "bold",
                                        padding: 0,
                                        width: 32,
                                        color: "black",
                                        height: 20,
                                        // borderRadius: "50% 50% 50% 0",
                                        // backgroundColor: "#CDA274 ",

                                        transformOrigin: "bottom left",
                                        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
                                        "&:before": { display: "none" },
                                        "&.MuiSlider-valueLabelOpen": {
                                            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
                                        },
                                        "& > *": {
                                            transform: "rotate(45deg)",
                                        },
                                    },
                                }}
                            />

                            <p className='text-[#4D5053] font-semibold'>
                                Client Satisfaction
                            </p>
                            <Slider
                                size="small"
                                defaultValue={75}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                sx={{
                                    color: "#CDA274",
                                    height: 4,
                                    width: 360,
                                    "& .MuiSlider-track": {
                                        border: "none",
                                        color: "#CDA274",
                                    },
                                    "& .MuiSlider-thumb": {
                                        height: 20,
                                        width: 20,
                                        backgroundColor: "#fff",
                                        border: "2px solid #CDA274",
                                        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                                            boxShadow: "inherit",
                                        },
                                        "&:before": {
                                            display: "none",
                                        },
                                    },
                                    "& .MuiSlider-valueLabel": {
                                        lineHeight: 0,
                                        fontSize: 16,
                                        background: "unset",
                                        fontWeight: "bold",
                                        padding: 0,
                                        width: 32,
                                        color: "black",
                                        height: 20,
                                        // borderRadius: "50% 50% 50% 0",
                                        // backgroundColor: "#CDA274 ",

                                        transformOrigin: "bottom left",
                                        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
                                        "&:before": { display: "none" },
                                        "&.MuiSlider-valueLabelOpen": {
                                            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
                                        },
                                        "& > *": {
                                            transform: "rotate(45deg)",
                                        },
                                    },
                                }}
                            />

                        </div>
                    </div>
                    <div className='md:w-[5/12] md:ml-32'>
                        <div className='mt-6'>
                            <p className='text-[#292F36] font-bold'>
                                Qustion And Answer
                            </p>
                        </div>
                        <div>
                            <p className='text-[#4D5053] my-3'>
                                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.
                            </p>
                        </div>
                        <div>
                            <Accordion
                                sx={{
                                    border: "2px solid #CDA274",
                                    marginBottom: "25px",
                                    '& .MuiAccordionSummary-root': {
                                    },
                                    '& .MuiAccordionSummary-content': {
                                        fontFamily: "jost",
                                        color: '#292F36',

                                    },
                                    '& .MuiAccordionDetails-root': {
                                        backgroundColor: '#F4F0EC',
                                    },
                                    '& .MuiTypography-root': {
                                        fontFamily: 'Monospaced font',
                                        fontSize: "20px",
                                        color: '#4D5053',
                                    },
                                }}
                            >
                                <AccordionSummary
                                    sx={{
                                        '& .MuiAccordionSummary-content': {
                                            fontFamily: "jost",
                                            color: '#292F36',
                                        },
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Website & Mobile App Design?</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        '& .MuiTypography-root': {
                                            fontSize: "18px",
                                        }
                                    }}
                                >
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{
                                    border: "2px solid #CDA274",
                                    marginBottom: "25px",
                                    '& .MuiAccordionSummary-root': {
                                    },
                                    '& .MuiAccordionSummary-content': {
                                        fontFamily: "jost",
                                        color: '#292F36',

                                    },
                                    '& .MuiAccordionDetails-root': {
                                        backgroundColor: '#F4F0EC',
                                    },
                                    '& .MuiTypography-root': {
                                        fontFamily: 'Monospaced font',
                                        fontSize: "20px",
                                        color: '#4D5053',
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>How to Easy Successful Projects?</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        '& .MuiTypography-root': {
                                            fontSize: "18px",
                                        }
                                    }}
                                >
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{
                                    border: "2px solid #CDA274",
                                    marginBottom: "25px",
                                    '& .MuiAccordionSummary-root': {
                                    },
                                    '& .MuiAccordionSummary-content': {
                                        fontFamily: "jost",
                                        color: '#292F36',
                                    },
                                    '& .MuiAccordionDetails-root': {
                                        backgroundColor: '#F4F0EC',
                                    },
                                    '& .MuiTypography-root': {
                                        fontFamily: 'Monospaced font',
                                        fontSize: "20px",
                                        color: '#4D5053',
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>International Trade Experience?</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        '& .MuiTypography-root': {
                                            fontSize: "18px",
                                        }
                                    }}
                                >
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>

            </div>






            {/* clientdata */}
            <div className='my-14 md:my-32 sm:my-24'>
                <AboutClient {...AboutClientData} />
            </div>


            {/* contact */}
            <div className="max-w-screen-lg lg:mx-auto rounded-3xl flex md:justify-center md:items-center flex-col mx-5 mb-4 md:mb-20 sm:mb-14">
                <h2 className="text-2xl lg:text-4xl font-semibold mb-4 flex text-center justify-center text-[#292F36]">
                    Contact Me
                </h2>
                <form className="w-full max-w-lg mt-10  justify-center items-center flex flex-col">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative md:grid-cols-2 md:gap-6">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b border-[#504d4d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required />
                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-[#4D5053] text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Name
                            </label>
                        </div>
                        <div className="md:w-1/2 px-3 relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b border-[#504d4d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-[#4D5053] text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Email
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-10">
                        <div className="px-3 relative z-0 w-full mb-3 group outline-none border-none">
                            <label for="floating_textarea" className="peer-focus:font-medium absolute text-[#4D5053] text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Sent Your Message
                            </label>
                            <textarea id="message" rows="4" cols="50" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-t-0 border-r-0 border-l-0 border-b border-[#504d4d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                            </textarea>
                        </div>
                    </div>

                    <div className="flex justify-center mb-0 items-center">
                        <button className="rounded-xl bg-[#292F36] text-white py-4 px-6 mt-4 justify-center items-center flex ">
                            Send Now
                            <i className="fa-solid fa-arrow-right text-[#CDA274] ml-2"></i>
                        </button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default TeamSingle