import React, { useRef} from "react";
import Slider from "react-slick";
import Button from "../components/button";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../config";
import Image from "./Image";
import Animate from "./animate";

function HorizontalSlider(props) {
  const slider = useRef();
  
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slider variable-width",
    // initialSlide: 0,
    variableWidth: true,
    // fade: true,
    responsive: [
      {
        breakpoint: TABLET_BREAKPOINT,
        settings: {
          slidesToShow: 2,
          slidesToScrol1: 1,
          infinite: true,
          dots: false,
          // initialSlide: 1,
        },
      },
      {
        breakpoint: MOBILE_BREAKPOINT,
        settings: {
          slidesToShow: 1,
          // initialSlide: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="container horizontalSlider">
        <Animate>
          <div className="allImagesSlider positionRelative hideForMobile">
            <Slider ref={slider} {...settings}>
              {props.horizontalSection.map((image, id) => {
                return (
                  <div className="sliderImage" key={id}>
                    <div
                      className="images"
                      style={{ width: `${image.width}px` }}
                    >
                      {/* <img className="width-100" alt="Image" src={image.img}/> */}
                      <Image
                        alt={"Image"}
                        originalSrc={image.img}
                        width={image.width}
                        height={image.height}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div onClick={() => slider.current.slickNext()} className="buttonRight positionAbsolute  circleWithRightArrowContainer">
              <Button buttonType="circleIconRight" />
            </div>
            <div onClick={() => slider.current.slickPrev()} className="buttonLeft positionAbsolute circleWithLeftArrowContainer">
              <Button buttonType="circleIconLeft" />
            </div>
          </div>
          <div className="showForMobile">
              <div className="scrollImagesMobile">
                {props.horizontalSection.map((image, id) => {
                  console.log("image",image)
                  return (
                    <div className="sliderImage" key={id}>
                      <div
                        className="images"
                        style={{ width: `${image.width}px` }}
                      >
                        <Image
                          alt={"Image"}
                          originalSrc={image.img}
                          width={image.width}
                          height={image.height}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
        </Animate>
      </div>
      <style jsx>{`
        .images{
          margin:0 2.5rem 0 0;
        }
        .circleWithRightArrowContainer,
        .circleWithLeftArrowContainer {
          position: absolute;
          top: 50%;
          z-index: 9;
          transition: all 0.3s ease-out;
        }
        .circleWithRightArrowContainer {
          right: 8.5rem;
          position: absolute;
        }
        .circleWithLeftArrowContainer {
          position: absolute;
          left: 0rem;
          padding-left: 8.5rem;
        }
        .img {
          padding-right: 2.4rem;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            overflow: hidden;
          }
          .allImagesSlider {
            overflow: hidden;
          }
          .circleWithRightArrowContainer {
            right: 3.5rem;
            top: 50%;
            position: absolute;
          }
          .circleWithLeftArrowContainer {
            position: absolute;
            top: 50%;
            left: -6rem;
            padding-left: 8.5rem;
          }
          .img {
            padding-right: 2.5rem;
            overflow: hidden;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .container {
            padding-bottom: 0rem;
          }
          .scrollImagesMobile{
            display: flex;
            overflow-y: scroll;
            padding: 0 21px;
            margin-right: -15px;
          }
          .scrollImagesMobile::-webkit-scrollbar {
            display: none;
          }
          .scrollImagesMobile {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .sliderImage {
            margin-right: 15px;
          }
          .images{
            margin:0;
          }
          .img {
            padding-right: 2.4rem;
            overflow: hidden;
          }
          .circleWithRightArrowContainer,
          .circleWithLeftArrowContainer {
            display: block;
            position: absolute;
            top: 50%;
            opacity: 1;
            transition: all 0.3s ease-out;
          }
        }
      `}</style>
    </>
  );
}

export default HorizontalSlider;
