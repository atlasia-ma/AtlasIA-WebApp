import React from 'react'
import CardAuction from '../../atoms/card/CardAuction'
import youtube from '../../../assets/images/gifs/youtube.gif'
import translation from '../../../assets/images/gifs/translation.gif'

const ListFeatures: React.FC = () => {
    return (
        <div className='flex justify-center flex-wrap'>
            <div className='flex-grow-0 flex-shrink p-8'>
                <CardAuction
                    image={youtube}
                />
            </div>
            <div className='flex-grow-0 flex-shrink p-8'>
                <CardAuction
                    image={translation}
                />
            </div>
        </div>
    )
}

export default ListFeatures
