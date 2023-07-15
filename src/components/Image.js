import React from 'react';
import pastelImage from "../img/Pastel.jpg";
import "./image.css"

const Image = () => {
  return (
    <div className="image-container rounded">
      <img
        src={pastelImage}
        className="card-img-top"
        alt="pastel"
      />
    </div>
  );
};

export default Image;