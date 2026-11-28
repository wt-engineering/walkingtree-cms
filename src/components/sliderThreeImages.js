import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Button from "./button";
import DotNavigation from "./dotNavigation";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Image from './Image'
import Animate from "./animate";

export default function SliderThreeImages(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const slider = useRef();
  const sliderRef = useRef();
  const smallheading = useRef();
  const mainheading = useRef();
  const desc = useRef();

  function sliderUpdate(id) {
    slider.current.slickGoTo(id);
    setIndexSlider(id);
  }
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
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
          // initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <Animate>
          <div className="sliderSection positionRelative">
            <div ref={sliderRef} className="sliderContainer positionRelative">
              <Slider ref={slider} {...settings}>
                {props.slides.map((slide, index) => {
                  return (
                    <div key={index} className={`slide alignCenter`}>
                      <div className="marginBottom55 slideImage">
                        <div className="img"><Image height={359} width={269}alt="Image" className="img width-100" originalSrc={slide.img}/></div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
              <div className="dotsWrapper positionAbsolute">
                <DotNavigation
                  sliderData={props.slides}
                  indexValue={indexSlider}
                  onClick={(id) => sliderUpdate(id)}
                  dotColor="#BDBDBD"
                  activeDotColor="#000000"
                />
              </div>
            </div>
            <div
              onClick={() => slider.current.slickNext()}
              className="circleWithRightArrow positionAbolute"
            >
              <Button buttonType="circleIconRight" />
            </div>
            <div
              onClick={() => slider.current.slickPrev()}
              className="circleWithLeftArrow positionAbolute"
            >
              <Button buttonType="circleIconLeft" />
            </div>
          </div>
        </Animate>
        <Animate><div ref={smallheading} className="marginBottom26 mainShortHeading smallheading alignCenter">{props.mainShortHeading}</div></Animate>
        <Animate><div ref={mainheading} className="marginBottom55 mainHeading smallHeading alignCenter">{props.smallHeading}</div></Animate>
        <Animate><div ref={desc} className="desc description">{props.desc}</div></Animate>
      </div>
      <style jsx>{`
        .desc {
          padding:0 23.8%;
        }
        .mainHeading {
          padding: 0 27.3%;
        }
        .smallheading {
          margin-top: 5.5rem;
        }
        .img {
          padding-right: 2.1rem;
        }
        .sliderContainer {
          padding:0 20.8%;
          align-items: center;
        }
        .dotsWrapper {
          left: 50%;
        }
        .circleWithRightArrow {
          position: absolute;
          top: 15rem;
          right: 85px;
          transform: translateY(-50%);
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .circleWithLeftArrow {
          position: absolute;
          top: 15rem;
          left: 85px;
          transform: translateY(-50%);
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .sliderSection:hover .circleWithRightArrow,
        .sliderSection:hover .circleWithLeftArrow {
          opacity: 1;
          transition: all 0.3s ease-out;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .desc {
            padding:0 23.8%;
          }
          .mainHeading {
            padding: 0 26.3%;
          }
          .sliderContainer {
            padding:0 19%;
            align-items: center;
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .desc {
            padding:0 18.8%;
          }
          .mainHeading {
            padding: 0 24.3%;
          }
          .sliderContainer {
            padding:0 17%;
            align-items: center;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .sliderContainer {
            padding: 9.5%;
          }
          .img {
            padding-right: 1.4rem;
          }
          .circleWithRightArrow {
            position: absolute;
            top: 45%;
            right: 4%;
            transform: translateY(-50%);
            opacity: 0;
            transition: all 0.3s ease-out;
          }
          .circleWithLeftArrow {
            position: absolute;
            top: 45%;
            left: 3.2%;
            transform: translateY(-50%);
            opacity: 0;
            transition: all 0.3s ease-out;
          }
          .smallheading {
            margin-top: 4.5rem;
          }
          .mainHeading {
            padding: 0 16.9%;
          }
          .desc {
            padding: 0 9.5%;
            text-align: center;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .img {
            width: 100%;
            height: 100%;
            padding-right: 0rem;
          }
          .smallheading {
            margin-top: 2.9rem;
          }
          .sliderContainer {
           padding:0;
          }
          .desc {
            padding:0 15.5%;
            text-align: center;
          }
          .mainHeading {
            padding: 0 22%;
          }
          .circleWithRightArrow {
            position: absolute;
            top: 23rem;
            right: 23px;
          }
          .circleWithLeftArrow {
            position: absolute;
            top: 23rem;
            left: 23px;
          }
        }
      `}</style>
    </>
  );
}
