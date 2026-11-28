import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Button from "./button";
import DotNavigation from "./dotNavigation";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT } from "../config";
import Image from "./Image";
import Animate from "./animate";

export default function SliderSection(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const sliderImgRef = useRef();
  const slider = useRef();
  const imageSliderWrapperRef = useRef();
  const textSectionRef = useRef();

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
    autoplay: false,
    beforeChange: (current, next) => setIndexSlider(next)
  };


  return (
    <>
      <div className="sliderSection positionRelative">
        <div className="sliderContainer">
          <Animate>
            <div ref={imageSliderWrapperRef} className="imageSliderWrapper positionRelative">
              <Slider ref={slider} {...settings}>
                {props.sliderData.map((slide, index) => {
                  return (
                    <div key={index} className={`slide  ${slide.type === 2 ? "type2" : ""}`}>
                      <div ref={sliderImgRef} className="slideImage">
                        <Image
                          alt={"Image"} 
                          originalSrc={slide.img} 
                          width={862} 
                          height={571} 
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
              <div onClick={() => slider.current.slickNext()} className="circleWithRightArrow positionAbsolute">
                <Button buttonType="circleIconRight" />
              </div>
              <div onClick={() => slider.current.slickPrev()} className="circleWithLeftArrow positionAbsolute">
                <Button buttonType="circleIconLeft" />
              </div>
              <div className="dotsWrapper positionAbsolute">
                <DotNavigation
                  sliderData={props.sliderData}
                  indexValue={indexSlider}
                  onClick={(id) => sliderUpdate(id)}
                  dotColor="#BDBDBD"
                  activeDotColor="#000000"
                />
              </div>
            </div>
          </Animate>
          <Animate>
            <div ref={textSectionRef} className={`textSection alignCenter ${props.sliderData[indexSlider].type === 2 ? "type2" : ""}`}>
              <div className={`text1 ${props.sliderData[indexSlider].type === 2 ? "bigDescription black" : "description black"}`}>{props.sliderData[indexSlider].text1}</div>
              {props.sliderData[indexSlider].type === 1 && <div className="text2 description black">{props.sliderData[indexSlider].text2}</div>}
              {props.sliderData[indexSlider] === 2 && 
                <div className="text2">
                  <span className="blackCaption black">{props.sliderData[indexSlider].text2}, </span>
                  <span className="greyCaption">{props.sliderData[indexSlider].text3}</span>
                </div>
              }
            </div>
          </Animate>
        </div>
      </div>
      <style jsx>{`
        .sliderSection {
          padding: 0 20% 0rem;
          overflow: hidden;
        }
        .imageSliderWrapper{
          padding-bottom:3.3rem;
        }
        .dotsWrapper{
          bottom: 0;
          left: 50%;
        }
        .circleWithRightArrow {
          position: absolute;
          right: -20%;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .circleWithLeftArrow {
          position: absolute;
          opacity: 0;
          left: -20%;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.3s ease-out;
        }
        .sliderSection:hover .circleWithRightArrow,
        .sliderSection:hover .circleWithLeftArrow {
          opacity: 1;
          transition: all 0.3s ease-out;
        }
        .textSection {
          padding: 0 7%;
          margin-top:4rem;
        }
        .type2.textSection {
          padding: 0 6%;
        }
        .text1 {
          margin-bottom: 1.6rem;
        }
        .type2 .text1 {
          margin-bottom: 4.8rem;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .sliderSection {
            padding: 0 12.29% 0rem;
          }
          .circleWithRightArrow {
            opacity: 1;
            right:-10%;
          }
          .circleWithLeftArrow {
            opacity: 1;
            left:-10%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .sliderSection {
            padding: 0 9.7% 0rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .sliderSection {
            padding: 0 0% 0rem;
          }
          .textSection {
            padding: 0 8%;
            margin-top:3rem;
          }
          .type2 .text1 {
            margin-bottom: 2rem;
          }
          .circleWithRightArrow {
            opacity: 1;
            right:7%;
          }
          .circleWithLeftArrow {
            opacity: 1;
            left:7%;
          }
          .imageSliderWrapper{
            padding-bottom:1.3rem;
          }
        }
      `}</style>
    </>
  );
}
