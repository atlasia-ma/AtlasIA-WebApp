import React from 'react'
import { ILabelSection } from '../../utils/types'

const GlowingBigLabel : React.FC<ILabelSection> = ({ text }) => {
    return (
        <h1 className='glowing_txt'>
            {text}
        </h1>
    )
}

export default GlowingBigLabel
