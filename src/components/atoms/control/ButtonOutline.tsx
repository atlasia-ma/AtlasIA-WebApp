import React from 'react'
import { IButton } from '../../utils/types'

const ButtonOutline : React.FC<IButton> = ({ onClick, text }) => {
    return (
        <button className='button button-outline font-bold hover:border-1' onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonOutline
