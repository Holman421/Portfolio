import img1 from "../scss/Ellipse2.png";
import Aboutme1 from "../scss/Aboutme_icon.png";
import Aboutme2 from "../scss/Aboutme_icon2.png";
import { useState } from "react";

export default function Home() {

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <h3>This is home page</h3>
      wtf
      <div className="leftTopCircle"></div>
      <div className="rightTopCircle"></div>
      <div className="rightBottom1Circle"></div>
      <div className="rightBottom2Circle"></div>
      <div className="rightBottom3Circle"></div>
      <div className="leftBottom1Circle"></div>
      <div className="leftBotom2Circle"></div>
      <img className="iconHome" src={img1} alt="icon"></img>
      <img 
      onMouseEnter={() => setIsHovering(true)} 
      onMouseLeave={() => setIsHovering(false)} 
      className="AboutMe1" src={!isHovering? Aboutme1 : Aboutme2}  alt="icon"></img>
    </div>
  );
}