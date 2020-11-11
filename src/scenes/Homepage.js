import React from "react";
import Fade from "react-reveal/Fade";
import Section from "elements/Section";
import Header from "parts/Header";

import HeroImage from "assets/images/hero-image.png";
export default function Homepage() {
  return (
    <div className="body-wrap">
      <Header></Header>
      <Section className="hero illustration-section-01" isCenteredContent>
        <div className="container-sm">
          <div className="hero-inner section-inner">
            <div className="hero-content">
              <Fade bottom delay={500}>
                <h1 className="mt-0 mb-16">Landing template for startups</h1>
              </Fade>
              <div className="container-xs">
                <Fade bottom delay={1000}>
                  <p className="mt-0 mb-32">
                    Our landing page template works on all devices, so you only
                    have to set it up once, and get beautiful results forever.
                  </p>
                </Fade>
              </div>
            </div>
            <div className="hero-figure illustration-element-01">
              <Fade bottom delay={1500}>
                <img
                  className="has-shadow"
                  src={HeroImage}
                  alt="Hero"
                  width="896"
                  height="504"
                />
              </Fade>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
