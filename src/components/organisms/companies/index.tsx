import React from 'react'
import CardImage from '../../atoms/image/'
import TitleSectionNonGlowing from '../../molecules/TitleSectionNonGlowing'

import IPP from '../../../assets/images/companies/ipp.jpg'
import IPP2 from '../../../assets/images/companies/ipp2.png'
import Google from '../../../assets/images/companies/Google-logo.png'
import TP from '../../../assets/images/companies/tp.png'
import TII from '../../../assets/images/companies/tii.jpg'
import mbzuai from '../../../assets/images/colabs/mbzuai.webp'
import twoA2I from '../../../assets/images/colabs/2A2I-transformed.webp'

const Companies : React.FC = () => {
    return (
        <div className='container mx-auto'>
            <TitleSectionNonGlowing
                title=''
                subtitle='We collaborate with'
                classes='text-center mb-10'
            />

            <div className='flex justify-center'>
            <div className='flex flex-row flex-wrap justify-center content-center companies_list'>
                <div className='flex-grow-0 flex-shrink w-3/9 xl:w-2/7 p-10'>
                    <CardImage image={mbzuai} className="w-full h-auto" />
                </div>
                <div className='flex-grow-0 flex-shrink w-3/9 xl:w-2/7 p-10'>
                    <CardImage image={twoA2I} className="w-full h-auto" />
                </div>
            </div>
            </div>


        </div>
    )
}

export default Companies
