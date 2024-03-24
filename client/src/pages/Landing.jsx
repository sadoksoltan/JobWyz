import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>traching</span> app
          </h1>
          <p>
            JobWyz is a ground-breaking platform that's transforming the
            Tunisian job hunting landscape. Our mission is to streamline and
            accelerate your career journey by providing an intuitive and
            personalized experience.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
