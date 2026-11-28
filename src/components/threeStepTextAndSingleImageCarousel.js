import React, { useRef, useState } from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import Slider from "react-slick";
import DotNavigation from "./dotNavigation";
import Button from "./button";
import Sanity from "../sanity";
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import Image from "./Image";
import Animate from "./animate";

export default function ThreeStepTextAndSingleImageCarousel(props) {
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
    speed: 500,
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
        <div className=" textAndImage alignCenter">
          <Animate><h2 ref={shortHeadingRef} className="marginBottom26 shortHeading mainShortHeading black">{props.shortHeading}</h2></Animate>
          <Animate><h1 ref={sectionHeadingRef} className="marginBottom55 topText1 smallHeading black">{props.topText1_1}<span className="lpItalic"> {props.topText1_2} </span>{props.topText1_3}</h1></Animate>
          <Animate><p ref={descriptionRef} className="marginBottom90 topText2 bigDescription grey">{props.topText2}</p></Animate>
        </div>
        <Animate>
          <div ref={sliderSectionRef} className="sliderSection positionRelative">
            <div className="sliderContainer positionRelative">
              <Slider ref={slider} {...settings}>
                {Array.isArray(props.sliderDots) &&
                  props.sliderDots.map((slide, index) => {
                    // console.log("slide image",slide)
                    return (
                      <div key={index} className={`slide alignCenter`}>
                        <div><Image height={slide.height} width={slide.width} alt="Image" originalSrc={slide.img}/></div> 
                      </div>
                    );
                  })}
              </Slider>
            </div>
            <div onClick={() => slider.current.slickNext()} className="positionAbsolute circleWithRightArrowContainer">
                <Button buttonType="circleIconRight" />
            </div>
            <div onClick={() => slider.current.slickPrev()} className="positionAbsolute circleWithLeftArrowContainer">
                <Button buttonType="circleIconLeft"/>
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
          overflow: hidden;
        }
        .circleWithRightArrowContainer,.circleWithLeftArrowContainer{
          top: 50%;
          opacity:0;
          transform:translateY(-50%);
          transition:all 0.3s ease-out;
        }
        .circleWithRightArrowContainer{
            right:5.9%;
        }  
        .circleWithLeftArrowContainer{
            left:5.9%;
        }
        .sliderSection:hover .circleWithRightArrowContainer,
        .sliderSection:hover .circleWithLeftArrowContainer{
            opacity:1;
            transition:all 0.3s ease-out;
        }
        .sliderSection {
          overflow: hidden;
          padding-bottom: 1.6rem;
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
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            overflow: hidden;
          }
          .textAndImage {
            margin: 0 9.6rem;
          }   
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .sliderSection {
            padding-left: 0;
            padding-right: 0;
          }
          .textAndImage {
            margin: 0 0;
          }
          .topText1 {
            margin-right: 5.1rem;
            margin-left: 5.1rem;
          }
          .topText2 {
            margin-left:15.2%;
            margin-right:15.2%;
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
          .circleWithRightArrowContainer,.circleWithLeftArrowContainer{
            top: 30%;
          }
        }
      `}</style>
    </>
  );
}
