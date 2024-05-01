import React from "react";
import { IImage } from "../../utils/types";

const CardImage: React.FC<IImage> = ({
  image,
  className="rounded-lg"
}) => {
  return (
    <div className="relative p-3 rounded-lg">
      <img  src={image} 
            className={className} 
            alt="team member"
            style={{maxHeight:"240px", maxWidth:"270px", position: "relative", top: "50%", transform: "translateY(-50%)"}}
      />
      
    </div>
  );
};

export default CardImage;
