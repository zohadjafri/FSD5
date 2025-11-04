import React, { useState } from "react";
import { images } from "./assets/images";

const App = () => {
  const [ind, setInd] = useState(0);

  const prev = () => (ind == 0 ? setInd(0) : setInd(ind - 1));
  const next = () =>
    ind == images.length - 1 ? setInd(images.length - 1) : setInd(ind + 1);

  return (
    <div>
      <h1>Image Slider</h1>
      <img src={images[ind]} alt="" />
    
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default App;