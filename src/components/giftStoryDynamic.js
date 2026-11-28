import React, { useEffect, useRef, useState,useContext } from "react";
import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import Caret from "./caret";
import LongArrow from "./longArrow";
import Slider from "react-slick";
import Button from "../components/button";
import { MOBILE_BREAKPOINT,lineAnimationTiming, TABLET_BREAKPOINT } from "../config";
import { SmoothScrollContext } from "../function";
import { gsap } from "gsap/dist/gsap";
import Sanity from "../sanity";
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = source => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";

export default function Gifts(props) {
  const [topText1, setTopText1] = useState(true);
  const [bottomText1, setBottomText1] = useState(true);

  const slider = useRef();
  const shortHeadingRef = useRef();
  const topText1Ref = useRef();
  const sliderRef = useRef();
  const leftTextOne = useRef();
  const rightBottomText = useRef();

  const { scroll, ScrollTrigger } = useContext(SmoothScrollContext);

  useEffect(()=>{
    if(!!scroll && !!ScrollTrigger){
      const Splitting = require('splitting')

      function lineByLineAnimation(textElement){
          const lineByLineAnimation = textElement
          if(!!lineByLineAnimation){
            const resultslineByLineAnimation = Splitting({ target: lineByLineAnimation, by: 'lines' });
            resultslineByLineAnimation[0].lines.forEach((line, index) => {
              line.forEach((word) => {
                // console.log(word)
                gsap.from(word, { opacity: 0, y:30, delay: (index /  lineAnimationTiming)});
                gsap.to(word, { opacity: 1, y:0, delay: (index /  lineAnimationTiming)});
              })
            });
          }
      }
      
      const animationT16 = gsap.timeline();
      ScrollTrigger.create({
        trigger: shortHeadingRef.current,
        animation: animationT16,
      });
      animationT16.from(shortHeadingRef.current, {
        opacity:0,
        y:30,
      });
      animationT16.to(shortHeadingRef.current, {
        opacity:1,
        y:0,
      });

      const animationT19 = gsap.timeline();
      ScrollTrigger.create({
        trigger: topText1Ref.current,
        animation: animationT19,
        once: true,
        onEnter:()=>lineByLineAnimation(topText1Ref.current),
      });
      animationT19.from(topText1Ref.current, {
        opacity:0,
      });
      animationT19.to(topText1Ref.current, {
        opacity:1,
      });


      const animationT17 = gsap.timeline();
      ScrollTrigger.create({
        trigger: sliderRef.current,
        animation: animationT17,
      });
      animationT17.from(sliderRef.current, {
        opacity:0,
        y:30,
      });
      animationT17.to(sliderRef.current, {
        opacity:1,
        y:0,
      });


      const animationT20 = gsap.timeline();
      ScrollTrigger.create({
        trigger: leftTextOne.current,
        animation: animationT20,
        once: true,
        onEnter:()=>lineByLineAnimation(leftTextOne.current),
      });
      animationT20.from(leftTextOne.current, {
        opacity:0,
      });
      animationT20.to(leftTextOne.current, {
        opacity:1,
      });

      const animationT21 = gsap.timeline();
      ScrollTrigger.create({
        trigger: rightBottomText.current,
        animation: animationT21,
        once: true,
        onEnter:()=>lineByLineAnimation(rightBottomText.current),
      });
      animationT21.from(rightBottomText.current, {
        opacity:0,
      });
      animationT21.to(rightBottomText.current, {
        opacity:1,
      });
    }

  },[scroll,ScrollTrigger])


  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slider variable-width",
    variableWidth: true,
    responsive: [
      {
        breakpoint: MOBILE_BREAKPOINT,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="sectionPaddingBottom">
        <div className="giftImagesSlider">
          <div className="firstTextSection">
            <div ref={shortHeadingRef} className="shortHeading mainShortHeading">
              {props.shortHeading}
            </div>
            {topText1 && (
              <div ref={topText1Ref} className="topText smallHeading">{props.topText1}</div>
            )}
            {!topText1 && (
              <div className="topText two smallHeading fadeUpAnimation">
                {props.topText2}
              </div>
            )}
          </div>
          <div ref={sliderRef} className="allImagesSlider positionRelative">
            <Slider ref={slider} {...settings}>
              {props.giftStory.map((image, id) => {
                return (
                  <div className="sliderImage" key={id}>
                    <img alt="Image" className="imageCarousel width-100" src={urlFor(image).url()} />
                  </div>
                );
              })}
            </Slider>
            <div
              onClick={() => slider.current.slickNext()}
              className="buttonRight positionAbsolute  circleWithRightArrowContainer"
            >
              <Button buttonType="circleIconRight" />
            </div>
            <div
              onClick={() => slider.current.slickPrev()}
              className="buttonLeft positionAbsolute circleWithLeftArrowContainer"
            >
              <Button buttonType="circleIconLeft" />
            </div>
          </div>
          {bottomText1 && (
            <div className="bottomText first flexItems">
              <div className="leftText">
                <div className="textAndArrow flexItems">
                  <div className="arrow">
                    <LongArrow
                      arrowLength="5px"
                      lineLength="10px"
                      transformX="3.3px"
                      transformY="1px"
                      arrowWidth="1px"
                      color="black"
                      direction="up"
                      marginTop="7px"
                    />
                  </div>
                  {/* chronicleRoman */}
                  <div ref={leftTextOne} className="text greyCaption">
                    <span className="blackCaption">
                      {props.bottomSubText1}
                    </span>
                    {props.bottomSubText2}
                    <span className="blackCaption">
                      {props.bottomSubText3}
                    </span>
                    {props.bottomSubText4}
                    <span className="blackCaption">
                      {props.bottomSubText5}
                    </span>
                  </div>
                </div>
              </div>
              <div className="rightText">
                <div ref={rightBottomText} className="rightTextContainer">
                  <div className="rightTextOne bigDescription grey">
                    {props.bottomRightText1}
                  </div>
                  <div>
                    <span className="blackCaption">
                      {props.bottomRightSubText1}
                    </span>
                    <span className="greyCaption">{props.bottomRightSubText2}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .buttonLeft,
        buttonRight {
          margin: 0 -18px;
        }
        .buttonRight {
          margin-top: -1.6rem;
        }
        .buttonLeft {
          margin-top: -1.6rem;
        }
        .giftImagesSlider {
          padding-left: 12.29%;
        }
        .sliderImage {
          padding-left: 0px;
        }
        .circleWithRightArrowContainer,
        .circleWithLeftArrowContainer {
          top: 50%;
          z-index: 9;
          //transform: translateY(-50%);
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .circleWithRightArrowContainer {
          right: 8.5rem;
        }
        .circleWithLeftArrowContainer {
          left: -8.5rem;
        }
        .allImagesSlider:hover .circleWithRightArrowContainer,
        .allImagesSlider:hover .circleWithLeftArrowContainer {
          opacity: 1;
          transition: all 0.3s ease-out;
        }
        .text {
          padding-right: 1.2rem;
        }
        .rightTextOne {
          margin-bottom: 0.9rem;
          margin-right: -2.1rem;
        }
        .allImagesSlider {
          margin-bottom: 5.6rem;
        }
        .leftText,.rightText {
          width: 50%;
        }
        .shortHeading {
          margin-bottom: 2.5rem;
        }
        .topText {
          margin-bottom: 10rem;
          padding-right: 47%;
        }
        .topText.two {
          padding-right: 53%;
        }
        .sliderImage img {
          height: 100%;
          width: 100%;
        }
        .textAndArrow {
          align-items: flex-start;
          padding-right: 30%;
        }
        .textAndArrow .arrow {
          margin-right: 1.3rem;
          margin-bottom: 4px;
        }
        .rightTextContainer {
          padding-right: 25%;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .topText {
            margin-bottom: 10rem;
            padding-right: 5%;
          }
          .topText.two {
            padding-right: 53%;
          }
          .rightTextOne {
            margin-bottom: 2.1rem;
            margin-right: -2.1rem;
          }
          .designer {
            margin-left: 1rem;
          }
          .circleWithRightArrowContainer {
            right: 5.5rem;
          }
          .circleWithLeftArrowContainer {
            left: -3.5rem;
          }
          .text {
            padding-right: 1.2rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .giftImagesSlider {
            padding-left: 0%;
            overflow: hidden;
            width: auto;
          }
          .circleWithRightArrowContainer {
            right: 2.1rem;
          }
          .circleWithLeftArrowContainer {
            left: 2.1rem;
          }
          .bottomText {
            display: block;
          }
          .leftText,
          .rightText {
            width: auto;
          }
          .textAndArrow {
            padding-right: 0%;
          }
          .allImagesSlider {
            margin-bottom: 2.9rem;
          }
          .leftText,
          .shortHeading {
            padding: 0 2.1rem;
          }
          .leftText {
            margin-bottom: 3.1rem;
          }
          .rightText {
            padding-left: 2.9rem;
          }
          .rightTextContainer {
            padding-right: 0%;
          }
          .topText {
            margin-bottom: 3.8rem;
            padding-right: 2.1rem;
            padding-left: 2.1rem;
          }
          .topText.two {
            padding-right: 2.1rem;
            padding-left: 2.1rem;
          }
          .textAndArrow .arrow {
            margin-right: 0.7rem;
            margin-bottom: 4px;
          }
        }
      `}</style>
      {/* <style jsx>{`
        .buttonLeft,
        buttonRight {
          margin: 0 -18px;
        }
        .buttonRight {
          margin-top: -1.6rem;
        }
        .buttonLeft {
          margin-top: -1.6rem;
        }
        .giftImagesSlider {
          padding-left: 12.29%;
        }
        .sliderImage {
          padding-left: 0px;
        }

        .circleWithRightArrowContainer,
        .circleWithLeftArrowContainer {
          top: 50%;
          z-index: 9;
          //transform: translateY(-50%);
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .circleWithRightArrowContainer {
          right: 8.5rem;
        }
        .circleWithLeftArrowContainer {
          left: -8.5rem;
        }
        .allImagesSlider:hover .circleWithRightArrowContainer,
        .allImagesSlider:hover .circleWithLeftArrowContainer {
          opacity: 1;
          transition: all 0.3s ease-out;
        }
        .text {
          padding-right: 12px;
        }
        .rightTextOne {
          margin-bottom: 0.9rem;
          margin-right: 1.7rem;
          font-family: moderatLight;
          //width: 449px;

        }
        .allImagesSlider {
          margin-bottom: 5.6rem;
        
        }
        .leftText,
        .rightText {
          width: 50%;
        }
        .shortHeading {
          margin-bottom: 2.5rem;
        }
        .topText {
          margin-bottom: 10rem;
          padding-right: 47%;
        }
        .topText.two {
          padding-right: 53%;
        }
        .sliderImage img {
          height: 100%;
          width: 100%;
        }
        .textAndArrow {
          align-items: flex-start;
          padding-right: 30%;
        }
        .textAndArrow .arrow {
          margin-right: 1.3rem;
          margin-bottom: 4px;
        }
        .rightTextContainer {
          padding-right: 25%;
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .giftImagesSlider {
            padding-left: 0%;
            overflow: hidden;
            width: auto;
          }
          .circleWithRightArrowContainer {
            right: 2.1rem;
          }
          .circleWithLeftArrowContainer {
            left: 2.1rem;
          }
          .bottomText {
            display: block;
          }
          .leftText,
          .rightText {
            width: auto;
          }
          .textAndArrow {
            padding-right: 0%;
          }
          .allImagesSlider {
            margin-bottom: 2.9rem;
          }
          .leftText,
          .shortHeading {
            padding: 0 2.1rem;
          }
          .leftText {
            margin-bottom: 3.1rem;
          }
          .rightText {
            padding-left: 2.1rem;
          }
          .rightTextContainer {
            padding-right: 0%;
          }
          .rightTextOne {
            font-size: 1.7rem;
            line-height: 2.4rem;
            letter-spacing: -0.17px;
            padding-right: 2.1rem;
          }
          .topText {
            margin-bottom: 3.8rem;
            padding-right: 2.1rem;
            padding-left: 2.1rem;
          }
          .topText.two {
            padding-right: 2.1rem;
            padding-left: 2.1rem;
          }
          .textAndArrow .arrow {
            margin-right: 0.7rem;
            margin-bottom: 4px;
          }
          .imageCarousel {
            width: 100%;
          }
          .text {
            font-size: 1rem;
            padding-right: 0;
          }
        }
      `}</style> */}
    </>
  );
}
