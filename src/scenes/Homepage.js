import React from "react";
import Fade from "react-reveal/Fade";
import Section from "elements/Section";
import Card from "elements/Card";
import Lists from "elements/Lists";
import Header from "parts/Header";
import Clients from "parts/Clients";
import Feature from "parts/Feature";
import Footer from "parts/Footer";

import HeroImage from "assets/images/hero-image.png";
import FeatureTitle01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTitle02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTitle03 from "assets/images/feature-tile-icon-03.svg";
import FeatureTitle04 from "assets/images/feature-tile-icon-04.svg";
import FeatureTitle05 from "assets/images/feature-tile-icon-05.svg";
import FeatureTitle06 from "assets/images/feature-tile-icon-06.svg";
import Button from "elements/Button";
export default function Homepage() {
  const features = [
    {
      imgSrc: FeatureTitle01,
      imgAlt: "Feature tile icon 01",
      title: "Join Chopo",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTitle02,
      imgAlt: "Feature tile icon 02",
      title: "Join Chopo",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTitle03,
      imgAlt: "Feature tile icon 03",
      title: "Join Chopo",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTitle04,
      imgAlt: "Feature tile icon 04",
      title: "Join Chopo",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTitle05,
      imgAlt: "Feature tile icon 05",
      title: "Join Chopo",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTitle06,
      imgAlt: "Feature tile icon 06",
      title: "Join Chopo",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
  ];

  const listPricing = [
    {
      price: 27,
      currencySymbol: "$",
      description: "Lorem ispum is a common text",
      features: [
        { isChecked: true, content: "Excepteur sint accaecat velit" },
        { isChecked: true, content: "Excepteur sint accaecat velit" },
        { isChecked: true, content: "Excepteur sint accaecat velit" },
        { isChecked: false, content: "Excepteur sint accaecat velit" },
        { isChecked: false, content: "Excepteur sint accaecat velit" },
      ],
    },
    {
      price: 47,
      currencySymbol: "$",
      description: "Lorem ispum is a common text",
      features: [
        { isChecked: true, content: "Excepteur sint accaecat velit" },
        { isChecked: true, content: "Excepteur sint accaecat velit" },
        { isChecked: true, content: "Excepteur sint accaecat velit" },
        { isChecked: true, content: "Excepteur sint accaecat velit" },
        { isChecked: false, content: "Excepteur sint accaecat velit" },
      ],
    },
    {
      price: 57,
      currencySymbol: "$",
      description: "Lorem ispum is a common text",
      features: [
        { isChecked: true, content: "Excepteur sint accaecat velit" },
        { isChecked: true, content: "Excepteur sint accaecat velit" },
        { isChecked: true, content: "Excepteur sint accaecat velit" },
        { isChecked: true, content: "Excepteur sint accaecat velit" },
        { isChecked: true, content: "Excepteur sint accaecat velit" },
      ],
    },
  ];
  return (
    <div className="body-wrap">
      <Header></Header>
      <Section className="hero illustration-section-01" isCenteredContent>
        <div className="container-sm">
          <div className="hero-inner section-inner">
            <div className="hero-content">
              <Fade bottom delay={500}>
                <h1 className="mt-0 mb-16">
                  The Chopo : Landing template for startups
                </h1>
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
      <Clients></Clients>
      <Section className="features-tiles">
        <div className="container">
          <div className="features-tiles-inner section-inner">
            <div className="tiles-wrap">
              {features.map((feature, index) => (
                <Feature
                  delayInMS={index * 500}
                  key={index}
                  data={feature}
                ></Feature>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section className="pricing">
        <div className="container">
          <div className="pricing-inner section-inner has-top-divider">
            <div className="section-header center-content">
              <Fade top delay={1200}>
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">Simple, transparent pricing</h2>
                  <p className="m-0">
                    Lorem ipsum is common placeholder text used to demonstrate
                    the graphic elements of a document or visual presentation.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="tiles-wrap">
              {listPricing.map((list, index) => (
                <Fade bottom delay={index * 1250}>
                  <Card hasShadow>
                    <div class="pricing-item-content">
                      <div class="pricing-item-header pb-24 mb-24">
                        <div class="pricing-item-price mb-4">
                          <span class="pricing-item-price-currency h2">
                            {list.currencySymbol}
                          </span>
                          <span
                            class="pricing-item-price-amount h1 pricing-switchable"
                            data-pricing-monthly="34"
                            data-pricing-yearly="27"
                          >
                            {list.price}
                          </span>
                        </div>
                        <div class="text-xs text-color-low">
                          {list.description}
                        </div>
                      </div>
                      <div class="pricing-item-features mb-40">
                        <div class="pricing-item-features-title h6 text-xs text-color-high mb-24">
                          What’s included
                        </div>
                        {
                          <Lists
                            data={list.features}
                            isSmall
                            className={"pricing-item-features-list mb-32"}
                          ></Lists>
                        }
                      </div>
                    </div>
                    <div className="pricing-item-cta mb-8">
                      <Button isPrimary isBlock>
                        Start free trial
                      </Button>
                    </div>
                  </Card>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Footer></Footer>
    </div>
  );
}
