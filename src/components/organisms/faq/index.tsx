import React from 'react'
import ContentLeft from '../../molecules/faq/ContentLeft'
import ContentRight from '../../molecules/faq/ContentRight'

const Faq : React.FC = () => {
    return (
        <div className='container mx-auto flex flex-col xl:flex-row flex-nowrap items-center'>
            <ContentLeft />
            <ContentRight />
        </div>
    )
}

export default Faq
