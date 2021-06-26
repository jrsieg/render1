import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Landscape Architect", "Web Developer", "Graphic Designer"],
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Headshot Circle.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jonathan Sieg</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <br></br>
          <p>Holding a professional degree in landscape architecture and a certification in javascript, I'm uniquely prepared to help you create stunning digital and analog visualizations that will wow your clients. What can we create together?</p>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
