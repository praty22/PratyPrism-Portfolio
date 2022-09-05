import React from "react";
import "./WaveAnim.css";

const About = (props) => {
  return (
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop" />
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle" />
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom" />
      </div>
    </div>
  );
};

export default About;
