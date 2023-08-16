import React from "react";
import Loader from "../assets/image/infinity.svg";

const FullScreenLoader = () => {
  return (
    <div>
      <div className="text-center">
        <img src={Loader} />
      </div>
    </div>
  );
};

export default FullScreenLoader;
