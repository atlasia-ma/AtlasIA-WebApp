import React from 'react'
import ContentLeft from '../../molecules/presentation/ContentLeft'
import ContentRight from '../../molecules/presentation/ContentRight'

const Presentation = () => {
    return (
        <div className='container mx-auto flex flex-col xl:flex-row flex-nowrap items-center'>
            <ContentLeft />
            <ContentRight />
        </div>
    )
}

export default Presentation
