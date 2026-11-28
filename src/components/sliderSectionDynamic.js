import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Button from "./button";
import DotNavigation from "./dotNavigation";
import { MOBILE_BREAKPOINT } from "../config";
import Sanity from '../sanity'
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = source => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import Animate from "./animate";

export default function SliderSection(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const sliderImgRef = useRef();
  const slider = useRef();
  const slideRef= useRef(null)
  const textSectionRef=useRef(null);

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
      <Animate>
        <div className="sliderSection positionRelative" ref={slideRef}>
          <div className="sliderContainer positionRelative">
            <Slider ref={slider} {...settings}>
              {props.sliderData.map((slide, index) => {
                return (
                  <div key={index}  className={`slide alignCenter ${slide.type === "2" ? "type2" : ""}`}>
                    <div ref={sliderImgRef} className="slideImage">
                      <img alt="Image" className="width-100" src={urlFor(slide.img).url()} />
                    </div>
                    <div className="textSection" ref={textSectionRef}>
                      <div className={`text1 ${ slide.type === "2" ? "bigDescription" : "description"}`}>{slide.text1}</div>
                      {slide.type === "1" && (<div className="text2 description">{slide.text2}</div>)}
                      {slide.type === "2" && (
                        <div className="text2">
                          <span className="blackCaption">{slide.text2}, </span>
                          <span className="greyCaption">{slide.text3}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </Slider>
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
          <div
            onClick={() => slider.current.slickNext()}
            className="circleWithRightArrow"
          >
            <Button buttonType="circleWithRightArrow" />
          </div>
          <div
            onClick={() => slider.current.slickPrev()}
            className="circleWithLeftArrow"
          >
            <Button buttonType="circleWithLeftArrow" />
          </div>
        </div>
      </Animate>
      <style jsx>{`
        .sliderSection {
          padding: 0 20% 0rem;
          overflow: hidden;
        }
        .circleWithRightArrow {
          position: absolute;
          top: 29rem;
          right: 85px;
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .circleWithLeftArrow {
          position: absolute;
          top: 29rem;
          left: 85px;
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .sliderSection:hover .circleWithRightArrow,
        .sliderSection:hover .circleWithLeftArrow {
          opacity: 1;
          transition: all 0.3s ease-out;
        }
        .textSection {
          padding: 0 7%;
        }
        .type2 .textSection {
          padding: 0 6%;
        }
        .slideImage {
          margin-bottom: 10.5rem;
        }
        .text1 {
          margin-bottom: 1.9rem;
        }
        .text2 {
          width: 97%;
        }
        .type2 .text1 {
          margin-bottom: 4.8rem;
        }
        .dotsWrapper {
          top: 627px;
          left: 50%;
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .sliderSection {
            padding: 0 0% 0rem;
          }
          .dotsWrapper {
            top: 278px;
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
            top: 13rem;
            right: 3rem;
            opacity: 1;
          }
          .circleWithLeftArrow {
            top: 13rem;
            left: 3rem;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
