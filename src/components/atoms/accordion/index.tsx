import React, {useRef, useState} from "react";
import { IAccordion } from "../../utils/types";

const Accordion: React.FC<IAccordion> = ({ title, content}) => {
  const [selected, setSelected] = useState(false);
  const [setHeight, setHeightState] = useState("0px");
  const cnt = useRef(null);

  function toggleAccordion() {
      setSelected(!selected);
      setHeightState(selected === false && cnt.current != null ?  `${cnt.current['scrollHeight']}px` : "0px");
  }

  return (
    <div className="py-4">
      <button
        className="flex justify-between w-full py-2 text-lg font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 text-pink"
        style={{ transition: "background-color 0.6s ease" }}
        onClick={toggleAccordion}
      >
        {title}
      </button>
      <div
        ref={cnt}
        style={{ maxHeight: `${setHeight}`, transition: "max-height 0.6s ease", overflow: 'hidden' }}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
