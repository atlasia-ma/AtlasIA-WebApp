import React from "react";
import TitleSectionNonGlowing from "../TitleSectionNonGlowing";
import Accordion from "../../atoms/accordion";

const ContentRight: React.FC = () => {
  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10 text-white">
      {/* <TitleSection title="FAQ" subtitle="All you need is ask" classes="mb-4 colorfull_text arrow_title_left" /> */}
      <TitleSectionNonGlowing
        title="FAQ"
        subtitle="All you need is ask 🧐"
        classes="mb-4"
      />
      <div className="w-full pt-4">
        <div className="w-full mx-auto text-white rounded-2xl">
          <Accordion
            title="What is AtlasIA?"
            content="AtlasIA is an open-source initiative aimed at collecting the largest Moroccan Darija dataset for Darija ⇆ English translation. Through our user-friendly interface, we collect and store data, making it accessible to the public to drive advancements in the Natural Language Processing field for Moroccan Darija."
          />
          <hr className="border-pink"/>
          <Accordion
            title="What is the main goal?"
            content="Our mission? To spearhead the development of the first Moroccan Darija Large Language Model (LLM)."
          />
          <hr className="border-pink"/>
          <Accordion
            title="How to contribute?"
            content="You can easily contribute via the website or by joining our Discord Server."
          />
          <hr className="border-pink"/>
        </div>
      </div>
    </div>
  );
};

export default ContentRight;
