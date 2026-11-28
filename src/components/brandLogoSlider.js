import React, { useRef, useState } from "react";
import { MOBILE_BREAKPOINT} from "../config";
import Slider from "react-slick";
import Button from "./button";
import Image from "./Image";  
import Animate from "./animate";

export default function ThreeStepTextAndSingleImageCarousel(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const sliderImgRef = useRef();
  const slider = useRef();

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 700,
    autoplaySpeed:1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    swipeToSlide: true,
    // variableWidth: true,
    beforeChange: (current, next) => setIndexSlider(next),
    responsive: [
        {
          breakpoint: MOBILE_BREAKPOINT,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };
  return (
    <>
      <div className="container">
        {!!props.shortHeading && <Animate><div className="shortHeading mainShortHeading alignCenter marginBottom26">{props.shortHeading}</div></Animate>}
        <Animate>
          <div className="sliderSection positionRelative ">
            <div className="sliderContainer positionRelative">
              <Slider ref={slider} {...settings}>
                {Array.isArray(props.brandLogoSlider) &&
                  props.brandLogoSlider.map((slide, index) => {
                    return (
                        <div key={index} className={`slide alignCenter`} ref={sliderImgRef}>
                          <div><Image loading="eager" height={63} width={316} alt="Image" originalSrc={slide.img}/></div> 
                        </div>
                    );
                  })}
              </Slider>
            </div>
            {/* <div onClick={() => slider.current.slickNext()} className="positionAbsolute circleWithRightArrowContainer">
                <Button buttonType="circleIconRight" />
            </div>
            <div onClick={() => slider.current.slickPrev()} className="positionAbsolute circleWithLeftArrowContainer">
                <Button buttonType="circleIconLeft"/>
            </div> */}
          </div>
        </Animate>
      </div>
      <style jsx>{`
        .container {
          overflow: hidden;
        }
        .circleWithRightArrowContainer,.circleWithLeftArrowContainer{
          top: 50%;
          opacity:1;
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
        }
        .slide {
          padding:0 12.5%
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
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
        }
      `}</style>
    </>
  );
}

