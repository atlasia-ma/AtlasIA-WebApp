import React from 'react'
import { ILabelSection } from '../../utils/types'

const GlowingLabel : React.FC<ILabelSection> = ({ text }) => {
    return (
        <span className='text-pink glowing_txt'>
            {text}
        </span>
    )
}

export default GlowingLabel
