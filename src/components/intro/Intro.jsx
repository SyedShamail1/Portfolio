import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Full-Stack Developer","ASP.Net Developer", "React Developer", "React-Native Developer", "Angular Developer"]
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/self.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
        <h2>Hi There, I'm</h2>
          <h1>Shamail</h1>
          <span ref={textRef}></span>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
