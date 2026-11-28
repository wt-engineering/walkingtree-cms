import React, { useRef, useState } from "react";
import Slider from "react-slick";
import DotNavigation from "./dotNavigation";
import Button from "./button";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

export default function TwoImageSlideCenter(props) {
  const [indexSlider, setIndexSlider] = useState(0);

  const slider = useRef();
  const imageRef = useRef();
  const shortHeadingRef = useRef();
  const topText1 = useRef();

  function sliderUpdate(id) {
    slider.current.slickGoTo(id);
    setIndexSlider(id);
  }

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current, next) => setIndexSlider(next),
    responsive: [
      {
        breakpoint: MOBILE_BREAKPOINT,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  let springConfig = {
    duration: "0.9s",
    easeFunction: "cubic-bezier(0.1, 0.35, 0.2, 1)",
    delay: "0s",
  };

  return (
    <>
        <div className="sliderSection positionRelative ">
         <div className="sliderContainer positionRelative">
            <Animate>
              <div ref={imageRef}>
                <Slider ref={slider} {...settings}>
                  {props.sliderTwoImage.map((slide, index) => {
                    return (
                      <div key={index} className={`slide alignCenter marginBottom16`}>
                        <Image height={524 }width={418} alt="Image" className="marginBottom55 sliders width-100" originalSrc={slide.img}/>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Animate>
          </div>
          <div onClick={() => slider.current.slickNext()} className="positionAbsolute circleWithRightArrowContainer">
              <Button buttonType="circleIconRight" />
          </div>
          <div onClick={() => slider.current.slickPrev()} className="positionAbsolute circleWithLeftArrowContainer">
              <Button buttonType="circleIconLeft"/>
          </div>
          <div className="dotsWrapper positionAbsolute">
            <DotNavigation
              sliderData={props.sliderTwoImage}
              indexValue={indexSlider}
              onClick={(id) => sliderUpdate(id)}
              dotColor="#BDBDBD"
              activeDotColor="#000000"
            />
          </div>
          <div className="textAndImage alignCenter">
            <Animate><h2 ref={shortHeadingRef} className="marginBottom26 shortHeading mainShortHeading">{props.mainShortHeading}</h2></Animate>
            <Animate><h1 ref={topText1} className="topText1 bigDescription black">{props.bigHeading}</h1></Animate>
          </div>
         </div>
      <style jsx>{`
          .sliderContainer {
              padding: 0 20%;
          }
          .shortHeading {
              margin-top: 5.7rem;
          }
          .topText1 {
              padding: 0 20.8%;
          }
          .slideImage {
            padding-left: 2.4rem;
          }
          .dotsWrapper {
            left: 50%;
          }
          .slide {
            padding-right: 1.5rem;
          }
          .circleWithRightArrowContainer,.circleWithLeftArrowContainer{
              top: 35%;
              z-index: 9;
              opacity:0;
              transform:translateY(-50%);
              transition:all 0.3s ease-out;
           }
            .circleWithRightArrowContainer{
                right:8.5rem;
            }  
            .circleWithLeftArrowContainer{
                left:8.5rem;
            }
            .sliderSection:hover .circleWithRightArrowContainer,
            .sliderSection:hover .circleWithLeftArrowContainer{
                opacity:1;
                transition:all 0.3s ease-out;
            }
          @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
            .sliderContainer {
              padding: 0 19%;
            }
            .topText1 {
              padding: 0 18.8%;
            }
          }
          @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
            .sliderContainer {
              padding: 0 17%;
            }
            .topText1 {
              padding: 0 17%;
            }
          }
          @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
            .sliderContainer {
              padding: 0 9.7%;
            }
            .topText1 {
              padding: 0 8.7%;
            }
            .shortHeading {
              margin-top: 5rem;
            }
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .sliderContainer {
            padding: 0 0;
          }
          .slideImage {
            padding-left: 0rem;
          }
          .circleWithRightArrow {
            top: 8rem;
            right: 5rem;
          }
          .circleWithLeftArrow {
            top: 8rem;
            left: 5rem;
          }
          .topText1 {
            padding: 0 13.6%;
          }
        }
        `}
      </style>
    </>
  );
}

 
