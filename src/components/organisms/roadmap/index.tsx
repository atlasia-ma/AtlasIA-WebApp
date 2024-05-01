import React from 'react'
import Content from '../../molecules/roadmap/Content'
import ContentRight from '../../molecules/roadmap/ContentRight'

const RoadMap : React.FC = () => {
    return (
        <div className='container mx-auto flex flex-col xl:flex-row flex-nowrap items-center'>
            <Content/>
            {/* <ContentRight /> */}
            {/* <ContentLeft /> */}
            {/* <ContentRight /> */}
        </div>
    )
}

export default RoadMap
