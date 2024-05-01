import React from "react";
import TitleSectionNonGlowing from "../TitleSectionNonGlowing";

const Content: React.FC = () => {
  return (
    <div className="flex-grow-0 flex-shrink w-full xl:w-6/12 px-10 mx-auto roadmap">
      {/* <TitleSection title="ROADMAP" subtitle="" classes="mb-4 colorfull_text arrow_title_left glowing_txt text-center" /> */}
      <TitleSectionNonGlowing
        title=""
        subtitle="Roadmap 🎯"
        classes="mb-4"
      />
      <ul className="list">
        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg duration-500 transform hover:scale-105 neon_simple">
            <div className="text-pink text-2xl">01. Platform Development</div>
            <div className="text-blanc text-lg">
              <br />
              - Community Engagement
              <br />
              - Data Collection
              <br />
              - Dataset Validation
            </div>
          </div>
        </li>

        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg relative duration-500 transform hover:scale-105 neon_simple">
            <div className="text-pink text-2xl">02. Build the AI</div>
            <div className="text-white text-lg">
              <br />
              - Model Training
              <br />
              - Evaluation and Fine-tuning
              <br />
              - Benchmarking
            </div>
          </div>
        </li>
        <li
          style={{
            listStyle: "none",
            borderLeft: "1px dashed #fff",
            padding: "5px 0 5px 30px",
            position: "relative",
          }}
        >
          <div className="relative bg-navy-ascent p-3 rounded-lg duration-500 transform hover:scale-105 neon_simple">
            <div className="text-pink text-2xl">03. Deploy and Improve</div>
            <div className="text-white text-lg">
              <br />
              - Model Deployment
              <br />
              - Community Engagement
              <br />
              - Continuous Improvement
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Content;
