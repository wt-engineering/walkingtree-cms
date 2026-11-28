import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Button from "./button";
import DotNavigation from "./dotNavigation";
import Sanity from "../sanity";
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

export default function ThreeImageslider(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const slider = useRef();
  const shortHeadingRef = useRef();
  const mainHeadingRef = useRef();
  const sliderSecRef = useRef();
  const leftTextRef = useRef(); 
  const rightTextRef = useRef();
  const rightTextMobileRef = useRef();

  function sliderUpdate(id) {
    slider.current.slickGoTo(id);
    setIndexSlider(id);
  }
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    className: "center",
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setIndexSlider(next),
    responsive: [
      {
        breakpoint: TABLET_BREAKPOINT,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          initialSlide: 1,
        },
      },  
      {
        breakpoint: MOBILE_BREAKPOINT,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          initialSlide: 1,
          centerMode: false,
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
      <div className="container threeImageSlider">
        <div className="textAndImage alignCenter">
          <Animate><h2 ref={shortHeadingRef} className="mbBelowShortHeading shortHeading mainShortHeading">{props.shortHeading}</h2></Animate>
          <Animate><h1 ref={mainHeadingRef} className="mbHeading topText1 smallHeading black">{props.mainHeading}</h1></Animate>
        </div>
        <div className="sliderSection positionRelative">
          <Animate>
            <div ref={sliderSecRef} className="sliderContainer positionRelative">
              <div className="slickSlider positionRelative">
                <Slider ref={slider} {...settings}>
                  {props.sliderPage.map((slide, index) => {
                    return (
                      <div key={index} className={`slide alignCenter hideForMobile`}>
                        <Image width={309} height={387}  alt="Image" originalSrc={slide.img}/>
                      </div>
                      
                      
                    );
                  })}
                </Slider>
                <div onClick={() => slider.current.slickNext()} className="circleWithRightArrow">
                  <Button buttonType="circleIconRight" />
                </div>
                <div onClick={() => slider.current.slickPrev()} className="circleWithLeftArrow">
                  <Button buttonType="circleIconLeft" />
                </div>
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
          {!!props.text1 && props.text2Desktop && props.text2Mobile && 
            <div className="text flexItems">
              <div ref={leftTextRef} className="text1 bigDescription grey"><Animate>{props.text1}</Animate></div>
              <div ref={rightTextRef} className="text2 hideForMobile descc description black"><Animate>{props.text2Desktop}</Animate></div>
              <div ref={rightTextMobileRef} className="mobileDesc showForMobile">
                <Animate>
                  {props.cmsRichContent == true && <p className="descc description black" dangerouslySetInnerHTML={{ __html: props.text2Mobile }} ></p>}
                  {!props.cmsRichContent  && <p className="descc description black">{props.text2Mobile}</p>}
                </Animate>
              </div>
            </div>
          }
        </div>
      </div>
      <style jsx>{`
        .text1,.text2{
          width:50%;
        }
        .text1{
          padding-right: 10%;
        }
        .text2{
          padding-left: 6%;
        }
        .text {
          margin-top: 13rem;
        }
        .sliderSection {
          padding: 0 9.29% 0rem;
        }
        .circleWithRightArrow {
          position: absolute;
          top: 50%;
          right: -6%;
          transform: translateY(-50%);
          transition: all 0.3s ease-out;
        }
        .circleWithLeftArrow {
          position: absolute;
          top: 50%;
          left: -6%;
          transform: translateY(-50%);
          transition: all 0.3s ease-out;
        }
        .dotsWrapper {
          bottom: -2.6rem;
          left: 50%;
          transform: translateX(-50%);
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .sliderSection {
            padding: 0;
          }
          .dotsWrapper {
            bottom: -0rem;
            left: 50%;
          }
          .sliderContainer {
            align-items: center;
          }
          .text{
            margin-top:3rem;
          }
          .slideImage {
            margin-bottom: 2.9rem;
          }
          .textSection {
            padding: 0 8%;
          }
          .circleWithRightArrow {
            top: 50%;
            right: 3rem;
          }
          .circleWithLeftArrow {
            top: 50%;
            left: 3rem;
          }
          .text {
            display: block;
          }
          .text1,.text2{
            width:100%;
          }
          .text1{
            padding:0 3.3rem 0;
            margin-bottom:4rem;
          }
          .mobileDesc{
            padding:0 3.3rem 0;
          }
          .topText1{
            margin-bottom:0
          }
        }
      `}</style>
    </>
  );
}