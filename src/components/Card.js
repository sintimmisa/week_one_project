import React from "react";
import sedan from "../images/icon-sedans.svg";
import luxury from "../images/icon-luxury.svg";
import suvs from "../images/icon-suvs.svg";
import  "./Card.css";

const Card = ({

    imgSrc,
    imgAlt,
    title,
    description,
    btnText,
    link
}) => {

  
  return (
    
    <div className="card" >
        <img src={imgSrc} alt={imgAlt} className="card-icon"/>
        <div className="card-body">
        
       < h2 className="card-title">{title}</h2>
       <p className="card-description">{description}</p>
       
       </div>
      
       <button class="card-btn"> Learn more</button>
       
      
    </div>
  );
};

export default Card;
