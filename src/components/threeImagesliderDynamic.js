import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Button from "./button";
import DotNavigation from "./dotNavigation";
import Sanity from "../sanity";
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import { MOBILE_BREAKPOINT } from "../config";
import Animate from "./animate";

export default function ThreeImageslider(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const slider = useRef();
  const shortHeadingRef = useRef();
  const mainHeadingRef = useRef();
  const sliderSecRef = useRef();
  const leftTextRef = useRef();
  const rightTextRef = useRef();

  function sliderUpdate(id) {
    slider.current.slickGoTo(id);
    setIndexSlider(id);
  }
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    className: "center",
    centerMode: true,
    centerPadding: "0rem",
    beforeChange: (current, next) => setIndexSlider(next),
    responsive: [
      {
        breakpoint: MOBILE_BREAKPOINT,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          initialSlide: 1,
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
      <div className="container sectionPaddingBottom threeImageSlider">
        <div className="textAndImage alignCenter">
          <Animate><h2 ref={shortHeadingRef} className="hideForMobile shortHeading mainShortHeading">{props.shortHeading}</h2></Animate>
          <Animate><h1 ref={mainHeadingRef} className="hideForMobile topText1 smallHeading">{props.mainHeading}</h1></Animate>
        </div>
        <div className="sliderSection positionRelative">
          <Animate>
            <div ref={sliderSecRef} className="sliderContainer positionRelative">
              <div className="slickSlider positionRelative">
                <Slider ref={slider} {...settings}>
                  {props.sliderPage.map((slide, index) => {
                    return (
                      <div key={index} className={`slide alignCenter`}>
                        <div className="slideImage">
                          <img alt="Image" className="width-100" src={urlFor(slide).url()}/>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
                <div onClick={() => slider.current.slickNext()} className="circleWithRightArrow"><Button buttonType="circleIconRight"/></div>
                <div onClick={() => slider.current.slickPrev()} className="circleWithLeftArrow"><Button buttonType="circleIconLeft"/></div>
              </div>
              <div className="dotsWrapper positionAbsolute">
                <DotNavigation
                  sliderData={props.sliderPage}
                  indexValue={indexSlider}
                  onClick={(id) => sliderUpdate(id)}
                  dotColor="#BDBDBD"
                  activeDotColor="#000000"
                />
              </div>
            </div>
          </Animate>
          <div className="text flexItems">
            <div ref={leftTextRef} className="text1"><Animate><p className="bigDescription">{props.text1}</p></Animate></div>
            <div ref={rightTextRef} className="text2 hideForMobile"><Animate><p className="descc description">{props.text2}</p></Animate></div>
            <div ref={rightTextRef} className="showForMobile"><Animate><p className="descc description" dangerouslySetInnerHTML={{ __html: props.text2Mobile }}></p></Animate></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .descc {
          margin-left: 30%;
        }
        .shortHeading {
          margin-bottom: 2.4rem;
        }
        .topText1 {
          margin-bottom: 4.9rem;
        }
        .sliderContainer {
          align-items: center;
          margin-bottom: 13rem;
        }
        .bigDescription {
          color: #9e9e9e;
          padding-right: 13.8rem;
          margin-right: -24.2rem;
        }
        .sliderSection {
          padding: 0 9.29% 0rem;
        }
        .circleWithRightArrow {
          position: absolute;
          top: 50%;
          right: -6%;
          transform: translateY(-50%);
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .circleWithLeftArrow {
          position: absolute;
          top: 50%;
          left: -6%;
          transform: translateY(-50%);
          opacity: 1;
          transition: all 0.3s ease-out;
        }
        .sliderSection:hover .circleWithRightArrow,
        .sliderSection:hover .circleWithLeftArrow {
          opacity: 1;
          transition: all 0.3s ease-out;
        }
        .type2 .textSection {
          padding: 0 6%;
        }
        .slideImage img {
          height: 100%;
          width: 100%;
        }
        .type2 .text1 {
          margin-bottom: 4.8rem;
        }
        .dotsWrapper {
          bottom: -5.2rem;
          left: 50%;
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .sliderSection {
            padding: 0 2.1rem;
          }
          .dotsWrapper {
            top: 45rem;
            bottom: 5rem;
          }
          .sliderContainer {
            align-items: center;
            margin-bottom: 2rem;
          }
          .slideImage {
            margin-bottom: 5.9rem;
          }
          .textSection {
            padding: 0 8%;
          }
          .type2 .text1 {
            margin-bottom: 2rem;
          }
          .circleWithRightArrow {
            top: 23rem;
            right: 1rem;
            opacity: 1;
          }
          .circleWithLeftArrow {
            top: 23rem;
            left: 1rem;
            opacity: 1;
          }
          .text {
            display: block;
          }
          .descc {
            margin: 0 5.1rem;
          }
          .bigDescription {
            font-size: 1.6rem;
            padding: 0 1rem 0 5.1rem;
            margin-right: 0;
          }
        }
      `}</style>
    </>
  );
}
