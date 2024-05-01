import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitter, BsDiscord, BsMedium } from 'react-icons/bs'
// import image from '../../../assets/images/log_animated.gif'

const Footer : React.FC = () => {
    return (
    <>
        <div className='container mx-auto flex flex-row flex-wrap bg-navy-ascent rounded-xl py-1 rounded_neon_element'>
            <div className='flex flex-row w-full lg:w-4/12 p-2'>
                <div className="flex flex-row items-center mx-auto">
                    <a className='text-purple-800 w-10 h-10 my-1 rounded-lg hover:text-pink duration-300 block relative' href="#">
                        <i className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'><BsDiscord size={30} /></i>
                    </a>
                    <a href="https://discord.gg/cKPHh6rBej" className="mx-auto text-white text-xl">
                        JOIN US ON DISCORD
                    </a>
                </div>
            </div>
            <div className='flex flex-row w-full lg:w-4/12 p-2'>
                <div className="flex flex-row items-center mx-auto">
                    {/* <img src={image} style={{height: "120px"}}/> */}
                    {/* <a className='text-white w-10 h-10 my-1 rounded-lg hover:text-pink duration-300 block relative' href="#">
                        <i className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'><BsDiscord size={30} /></i>
                    </a>
                    <a href="https://discord.gg/c7txUnnJjY" className="mx-auto text-white text-xl">
                        JOIN US ON DISCORD
                    </a> */}
                </div>
            </div>
            <div className='flex flex-row w-full lg:w-4/12 p-2'>
                <div className="flex flex-row items-center mx-auto">
                    <a className='text-blue-400 w-10 h-10 my-1 rounded-lg hover:text-pink duration-300 block relative' href="#">
                        <i className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'><BsInstagram size={30} /></i>
                    </a>
                    <a href="https://twitter.com/DragoManiaGame" className="mx-auto text-white text-xl">
                        FOLLOW OUR INSTAGRAM
                    </a>
                </div>
            </div>

            {/* <div className='flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 xl:w-2/12 p-2'>
                <QuickLink />
            </div>

            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 xl:w-2/12 p-2'>
                <FeaturedLink />
            </div> */}

            {/* <div className='flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 xl:w-4/12 p-2'>
                <FooterMap />
            </div> */}
        </div>

            <div className='container mx-auto py-4 px-4'>
                <span className='text-white text-center block'>Copyright © 2024 – AtlasIA LLC. All Rights Reserved</span>
            </div>
        </>
        )
    }

    export default Footer
