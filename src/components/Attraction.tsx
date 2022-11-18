import { useState } from "react";
import Overlay from "./Overlay";

const Attraction = ({ ...attraction }) => {
  const { className, title, description, image } = attraction;

  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <div
      className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
      onMouseEnter={() => setShowInfo(!showInfo)}
      onMouseLeave={() => setShowInfo(!showInfo)}
    >
      <div className="relative">
        <Overlay showInfo={showInfo} title={title} description={description} />
        <img alt="Attraction" src={image} className="db" />
      </div>
    </div>
  );
};

export default Attraction;
