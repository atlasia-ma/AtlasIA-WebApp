import React from "react";
import TitleSection from "../TitleSection";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const ContentRight: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10">
      <TitleSection
        title="An Innovative Data Collection Platform"
        subtitle="Welcome to AtlasIA 🤗"
        classes="mb-4"
      />
      <div className="mt-10 text-muted text-xl">
        AtlasIA is an open-source initiative aimed at collecting the largest Moroccan Darija dataset for Darija ⇆ English translation. 
        <br />
        <br />
        Through our user-friendly interface, we collect and store data, making it accessible to the public to drive advancements in the Natural Language Processing field for Moroccan Darija.
        <br />
        <br />
        Our mission? To spearhead the development of the first Moroccan Darija Large Language Model (LLM). 
        <br />
        <br />
        Explore our latest models on <a href="https://huggingface.co/atlasia" style={{textDecoration: 'underline'}}>Huggingface</a> and join us in revolutionizing language technology.
        {/* Our aim? To pioneer the first <span className='font-bold'>Moroccan Darija LLM</span>. Checkout our latest models in <a href="https://huggingface.co/atlasia" style={{textDecoration: 'underline'}}>Huggingface</a>. */}
        <br />
        <br />
        Made with ❤️ by Moroccans for Moroccans ❤️.
        {/* <p style={{textAlign: 'center'}}>Made with ❤️ by Moroccans for Moroccans ❤️.</p> */}
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button className="bg-blue-100 hover:bg-blue-200 text-blue-900 font-bold py-2 px-4 rounded mr-4" onClick={() => scrollToSection('aji_terjem')}>Bghit nterjem!</button>
          <button className="bg-green-100 hover:bg-green-200 text-green-900 font-bold py-2 px-4 rounded ml-4" onClick={() => scrollToSection('ytb_transcripts')}>Bghit nvalider data!</button>
        </div>
      </div>
      
    </div>
  );
};

export default ContentRight;
