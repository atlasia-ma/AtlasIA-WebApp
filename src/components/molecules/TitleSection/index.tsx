import React from 'react'
import GlowingBigLabel from '../../atoms/control/GlowingBigLabel'
import { ITitleSection } from '../../utils/types'

const TitleSection : React.FC<ITitleSection> = ({ subtitle, title, classes, idname }) => {
    return (
        <div className={classes} id={idname}>

            <div>
                <h1 className='text-4xl text-white font-bold mt-2 glowing_txt' style={{textAlign: 'center'}}>{subtitle}</h1>
            </div>
            <br />
            <div>
                <h4 className='text-2xl text-white font-bold mt-2 colorfull_text' style={{textAlign: 'center'}}>{title}</h4>
            </div>

            
        </div>
    )
}

export default TitleSection
