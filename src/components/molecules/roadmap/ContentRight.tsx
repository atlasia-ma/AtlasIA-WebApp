import React from 'react'
// import image from '../../../assets/images/gen_ai.png'
import image from '../../../assets/images/roadmap.png'

const ContentRight: React.FC = () => {
    return (
        <div className='flex-grow-0 flex-shrink w-full xl:w-6/12 px-4 mb-16 xl:mb-0 flex justify-end'>
            <div className='relative'>
                <img src={image} alt="featured" className='w-full' style={{ maxWidth: '550px', maxHeight: '500px' }} />
            </div>
        </div>
    )
}

export default ContentRight
