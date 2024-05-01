import React from "react";
import { ICardAuction } from "../../utils/types";
import { BsCheck } from "react-icons/bs";

const CardAuction: React.FC<ICardAuction> = ({
  image,
}) => {
  return (
    <div className="relative bg-navy-ascent rounded-lg duration-500 transform hover:scale-105 neon_simple">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="" src={image} alt="feature gif" style={{maxWidth: '320px', maxHeight: '300px', minWidth: '320px', minHeight: '300px'}} />
      </div>
    </div>
  );
};

export default CardAuction;
