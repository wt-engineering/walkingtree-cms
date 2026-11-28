import React, { useRef, useState } from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Slider from "react-slick";
import DotNavigation from "./dotNavigation";
import Button from "./button";
import Image from "./Image";
import Animate from "./animate";

function OneImageslider(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const sliderImgRef = useRef();
  const slider = useRef();
  const shortHeadingRef = useRef();
  const top_Text1 = useRef();

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


  return (
    <>
      <div className="sliderSection positionRelative">
        <Animate>
          <div className="marginBottom55 sliderContainer positionRelative">
            <div ref={sliderImgRef} className="slides positionRelative">
              <Slider ref={slider} {...settings}>
                {props.oneImageslider.map((slide, index) => {
                  return (
                    <div key={index} className={`slide alignCenter marginBottom30`}>
                      <Image height={527} width={420} alt="Image" className=" sliders width-100" originalSrc={slide.img}/>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="dotsWrapper positionAbsolute">
              <DotNavigation
                sliderData={props.oneImageslider}
                indexValue={indexSlider}
                onClick={(id) => sliderUpdate(id)}
                dotColor="#BDBDBD"
                activeDotColor="#000000"
              />
            </div>
          </div>
        </Animate>
        <div
          onClick={() => slider.current.slickNext()}
          className="circleWithRightArrow"
        >
          <Button buttonType="circleIconRight" />
        </div>
        <div
          onClick={() => slider.current.slickPrev()}
          className="circleWithLeftArrow"
        >
          <Button buttonType="circleIconLeft" />
        </div>

        <div className="textAndImage alignCenter">
          <Animate>
            <h2 ref={shortHeadingRef} className="marginBottom26 shortHeading mainShortHeading">{props.category}</h2>
            {props.cmsRichContent== true && <h1 ref={top_Text1} className="topText smallHeading" dangerouslySetInnerHTML={{ __html: props.heading}}></h1>}
            {!props.cmsRichContent &&<h1 ref={top_Text1} className="topText smallHeading">{props.heading}</h1>}
          </Animate>
        </div>
      </div>
      <style jsx>{`
        .sliderContainer {
          padding:0 35.4%;
        }
        .dotsWrapper {
          left: 50%;
        }
        .circleWithRightArrow {
          position: absolute;
          top: 25%;
          right: 20%;
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .circleWithLeftArrow {
          position: absolute;
          top: 25%;
          left: 20%;
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .sliderSection:hover .circleWithRightArrow,
        .sliderSection:hover .circleWithLeftArrow {
            opacity: 1;
            transition: all 0.3s ease-out;
          }
        .shortHeading {
          margin-top: 5.5rem;
        }
        .topText {
          padding:0 25.9%;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .topText {
            padding:0 22.9%;
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .topText {
            padding:0 21.9%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .sliderContainer {
           padding:0 30%;
          }
          .dotsWrapper {
            left: 50%;
          }
          .shortHeading {
            margin-top: 4.5rem;
          }
          .topText {
            padding:0 12.5%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .shortHeading {
            margin-top: 3.5rem;
          }
          .sliderContainer {
            padding:0 2.1rem;
          }
          .dotsWrapper {
            left: 50%;
          }
          .circleWithRightArrow {
            top: 25%;
            right: 35px;
            display: block;
          }
          .circleWithLeftArrow {
            top: 25%;
            left: 35px;
            display: block;
          }
          .sliderSection:hover .circleWithRightArrow,
          .sliderSection:hover .circleWithLeftArrow {
            opacity: 1;
            transition: all 0.3s ease-out;
          }
          .topText {
            padding: 0 15.5%;
          }
        }
      `}</style>
    </>
  );
}

export default OneImageslider;
