import React, { useState } from "react";
import { images } from "./assets/images";

const ImageRotate = () => {
  const [rotateDeg, setRotateDeg] = useState(0);

  const handleRotate = () => {
    setRotateDeg((prev) => (prev + 90) % 360);
  };

  return (
    <div>
      <h1>Image Rotate</h1>
      <img
        src={images[0]}
        alt=""
        style={{
          width: "300px",
          transform: `rotate(${rotateDeg}deg)`,
          transition: "transform 0.3s ease",
        }}
      />
      <br />
      <br />
      <button onClick={handleRotate}>Rotate</button>
    </div>
  );
};

export default ImageRotate;