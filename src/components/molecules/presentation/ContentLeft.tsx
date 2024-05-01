import React from 'react'
import image from '../../../assets/images/characters/character_1.png'
import TitleSection from "../TitleSection";

const ContentLeft : React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full xl:w-6/12 px-4 mb-16 xl:mb-0'>
            
            <div className='relative'>
                {/* <img src='https://cdn.pixabay.com/animation/2022/08/29/18/04/18-04-11-163_512.gif' style={{width: "300px"}} alt="featured" className='w-full' /> */}
                <img src={image} style={{width: "600px"}} alt="featured" className='w-full' />
            </div>

            {/* <TitleSection
                title="By Moroccans, For Moroccans ❤️️"
                subtitle=""
                classes="mb-4 colorfull_text"
            /> */}
        </div>
    )
}

export default ContentLeft
