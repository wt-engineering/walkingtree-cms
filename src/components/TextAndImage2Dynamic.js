import React, { useRef, useState } from "react";
import { MOBILE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Slider from "react-slick";
import DotNavigation from "./dotNavigation";
import Sanity from "../sanity";
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import Animate from "./animate";

export default function TextAndImage2(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const slider = useRef();
  const shortHeadingRef = useRef(null);
  const sectionHeadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const sliderSectionRef = useRef(null);

  function sliderUpdate(id) {
    slider.current.slickGoTo(id);
    setIndexSlider(id);
  }

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current, next) => setIndexSlider(next),
  };

  let springConfig = {
    duration: "0.9s",
    easeFunction: "cubic-bezier(0.1, 0.35, 0.2, 1)",
    delay: "0s",
  };

  return (
    <>
      <div className="container">
        <div className="textAndImage alignCenter">
          <Animate><h2 ref={shortHeadingRef} className="shortHeading mainShortHeading">{props.shortHeading}</h2></Animate>
          <Animate>
            <h1 ref={sectionHeadingRef} className="topText1 smallHeading">
              {props.topText1_1}
              <span className="lpItalic"> {props.topText1_2} </span>
              {props.topText1_3}
            </h1>
          </Animate>
          <Animate><p ref={descriptionRef} className="topText2 bigDescription grey">{props.topText2}</p></Animate>
        </div>
        <Animate>
          <div ref={sliderSectionRef} className="sliderSection positionRelative">
            <div className="sliderContainer positionRelative">
              <Slider ref={slider} {...settings}>
                {Array.isArray(props.sliderDots) && props.sliderDots.map((slide, index) => {
                    // console.log("slide image",slide)
                    return (
                      <div key={index} className={`slide alignCenter`}>
                        <img alt="Image" className="width-100" src={urlFor(slide).url()}/>
                      </div>
                    );
                  })}
              </Slider>
            </div>
            <div className="dotsWrapper positionAbsolute">
              <DotNavigation
                sliderData={props.sliderDots}
                indexValue={indexSlider}
                onClick={(id) => sliderUpdate(id)}
                dotColor="#BDBDBD"
                activeDotColor="#000000"
              />
            </div>
          </div>
        </Animate>
      </div>
      <style jsx>{`
        .container {
          padding-top: 19.2rem;
          overflow: hidden;
          margin-bottom: 16.4rem;
        }
        .shortHeading {
          margin-bottom: 2.3rem;
        }
        .sliderSection {
          overflow: hidden;
          padding-bottom: 5.2rem;
          padding-left: 12.29%;
          padding-right: 12.29%;
        }
        .slide {
          margin-bottom: 5.5rem;
        }
        .textAndImage {
          margin: 0 20.3%;
        }
        .colImage {
          display: flex;
          margin-right: -2.4rem;
          margin-bottom: 11.4rem;
        }
        .topText1 {
          margin-bottom: 4.4rem;
        }
        .topText2 {
          margin: 0 -1rem 10.4rem -2rem;
        }
        .bottomText {
          letter-spacing: -0.27px;
          color: #9e9e9e;
          text-transform: uppercase;
          opacity: 1;
          font-family: Moderat;
          font-siz: 27px;
        }
        .dotsWrapper {
          left: 50%;
          //bottom:-6.2rem;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            padding-top: 11.3rem;
            overflow: hidden;
            margin-bottom: 6.1rem;
          }
          .shortHeading {
            margin-bottom: 2.7rem;
          }
          .topText1 {
            margin-bottom: 5.6rem;
          }
          .textAndImage {
            margin: 0 9.6rem;
          }
          .topText2 {
            margin: 0 2rem 7.7rem 2rem;
          }
          
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .container {
            padding-top: 7.1rem;
            margin-bottom: 2.4rem;
          }
          .sliderSection {
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 3rem;
          }
          .textAndImage {
            // padding:7.2rem 2.5rem 0rem;
            margin: 0 0;
          }
          .topText1 {
            margin-right: 5.1rem;
            margin-left: 5.1rem;
          }
          .topText2 {
            margin: 0 8.1rem 6.1rem;
          }
          .colImage {
            display: block;
            margin-right: 0rem;
            margin-bottom: 6rem;
          }
          .colImage div {
            width: 100%;
            padding-right: 0rem;
            margin-bottom: 1.1rem;
          }
          .colImage div:last-child {
            margin-bottom: 0rem;
          }
          .bottomText {
            padding: 0 2%;
          }
        }
      `}</style>
{/* 
      <style jsx>{`
        .container {
          padding-top: 19.2rem;
          margin-bottom: 16.4rem;
        }
        .shortHeading {
          margin-bottom: 2.3rem;
        }
        .sliderSection {
          overflow: hidden;
          padding-bottom: 5.2rem;
          padding-left: 12.29%;
          padding-right: 12.29%;
        }
        .slide {
          margin-bottom: 5.5rem;
        }
        .textAndImage {
          margin: 0 20.3%;
        }
        .colImage {
          display: flex;
          margin-right: -2.4rem;
          margin-bottom: 11.4rem;
        }
        .topText1 {
          margin-bottom: 4.4rem;
        }
        .topText2 {
          // margin-bottom: 10.4rem;
          margin: 0 2% 10.4rem;
        }
        .bottomText {
          letter-spacing: -0.27px;
          color: #9e9e9e;
          text-transform: uppercase;
          opacity: 1;
          font-family: Moderat;
          font-siz: 27px;
        }
        .dotsWrapper {
          left: 50%;
          //bottom:-6.2rem;
        }
      

        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .container {
            margin-bottom: 2.4rem;
          }
          .sliderSection {
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 3rem;
          }
          .textAndImage {
            // padding:7.2rem 2.5rem 0rem;
            margin: 0 0;
          }
          .topText1 {
            margin-right: 5.1rem;
            margin-left: 5.1rem;
          }
          .topText2 {
            margin: 0 5.1rem 6.1rem;
          }
          .colImage {
            display: block;
            margin-right: 0rem;
            margin-bottom: 6rem;
          }
          .colImage div {
            width: 100%;
            padding-right: 0rem;
            margin-bottom: 1.1rem;
          }
          .colImage div:last-child {
            margin-bottom: 0rem;
          }
          .bottomText {
            padding: 0 2%;
          }
        }
      `}</style> */}
    </>
  );
}
