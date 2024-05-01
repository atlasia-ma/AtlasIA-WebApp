import React from 'react'
import image from '../../../assets/images/characters/character_2.png'

const ContentLeft: React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full xl:w-6/12 px-4 mb-16 xl:mb-0'>
            <div className='relative'>
                <img src={image} alt="featured" className='w-full' style={{ maxWidth: '450px', marginLeft: 'auto', marginRight: 0 }} />
            </div>
        </div>
    )
}

export default ContentLeft
