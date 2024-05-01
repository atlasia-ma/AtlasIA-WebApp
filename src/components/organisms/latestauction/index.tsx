import React from 'react'
import ListFeatures from '../../molecules/features/ListFeatures'
import TitleSection from '../../molecules/TitleSection'

import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import "../../../index.css"

const Features: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <TitleSection
                title=''
                subtitle='Features'
                classes='text-center mb-10 colorfull_text arrow_title'
            />

            <ListFeatures />

            {/* <blockquote className="relative p-4 text-xl italic text-white quote">
                <cite className="flex items-center" id="earn" style={{ paddingTop: '100px' }}>
                    <p className="mb-4 text-center">
                        Dragos are little fierce dragons living on the Solana Blockchain. There are different classes of Dragos that players can collect with varying body parts and appearances. Some rarer than others. Body parts will unlock abilities that vary across games.
                        <br />
                        <br />
                        Build up a collection to battle, breed, collect, raise and build kingdoms for your Dragos!
                    </p>
                </cite>
            </blockquote> */}

            {/* Additional feature text */}
            {/* <div className="mt-10 text-center text-white" id="features">
                <h2 className="text-2xl font-semibold mb-4">Enhanced Translation Features</h2>
                <p className="text-lg">
                    Our platform offers a comprehensive set of features tailored to enhance your translation experience. Seamlessly translating Moroccan to Darija, the platform ensures accurate and culturally relevant conversions. With a meticulous examination process, we validate each translated Darija-English sentence pair, guaranteeing linguistic precision and contextual fidelity.
                    <br />
                    <br />
                    Furthermore, our integrated validation system extends beyond text translation. Leveraging advanced technology, we empower users to validate speech-to-text conversions, ensuring the accuracy of transcribed audio content. This multifaceted approach not only streamlines the translation process but also cultivates trust in the reliability of the produced outputs. Experience unparalleled efficiency and quality assurance with our robust suite of translation and validation tools.
                </p>
            </div> */}
            <div className="mt-10 text-center text-white">
                {/* <h2 className="text-2xl font-semibold mb-4">Enhanced Translation Features</h2> */}
                <ul className="list-disc text-lg text-left">
                    <li>Seamlessly translate Moroccan to Darija with accuracy and cultural relevance.</li>
                    <li>Meticulously validate translated Darija-English sentence pairs for linguistic precision and contextual fidelity.</li>
                    <li>Validate speech-to-text conversions to ensure accurate transcription of audio content.</li>
                    <li>Streamline the translation process and build trust in the reliability of the outputs.</li>
                    <li>Experience unparalleled efficiency and quality assurance with our robust suite of translation and validation tools.</li>
                </ul>
            </div>
        </div>
    )
}

export default Features
