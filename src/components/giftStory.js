import React, { useRef, useState } from "react";
import LongArrow from "./longArrow";
import Slider from "react-slick";
import Button from "../components/button";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";


export default function GiftStory(props) {
  const [bottomText1, setBottomText1] = useState(true);
  const slider = useRef();
  const shortHeadingRef = useRef();
  const headingRef = useRef();
  const sliderWrapperRef = useRef();
  const bottomLeftTextRef = useRef();
  const bottomRightTextRef = useRef();

  // useEffect(()=>{
  //     const animationT16 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: shortHeadingRef.current,
  //       animation: animationT16,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT16.from(shortHeadingRef.current, {
  //       opacity:0,
  //       y:30,
  //     });
  //     animationT16.to(shortHeadingRef.current, {
  //       opacity:1,
  //       y:0,
  //     });

  //     const animationT19 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: headingRef.current,
  //       animation: animationT19,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT19.from(headingRef.current, {
  //       opacity:0,
  //       y:30,
  //     });
  //     animationT19.to(headingRef.current, {
  //       opacity:1,
  //       y:0,
  //     });

  //     const animationT17 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: sliderWrapperRef.current,
  //       animation: animationT17,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT17.from(sliderWrapperRef.current, {
  //       opacity:0,
  //       y:30,
  //     });
  //     animationT17.to(sliderWrapperRef.current, {
  //       opacity:1,
  //       y:0,
  //     });

  //     const animationT18 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: bottomLeftTextRef.current,
  //       animation: animationT18,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT18.from(bottomLeftTextRef.current, {
  //       opacity:0,
  //       y:30,
  //     });
  //     animationT18.to(bottomLeftTextRef.current, {
  //       opacity:1,
  //       y:0,
  //     });

  //     const animationT20 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: bottomRightTextRef.current,
  //       animation: animationT20,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT20.from(bottomRightTextRef.current, {
  //       opacity:0,
  //       y:30,
  //     });
  //     animationT20.to(bottomRightTextRef.current, {
  //       opacity:1,
  //       y:0,
  //     });
  // },[])

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slider variable-width",
    variableWidth: true,
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

  return (
    <>
        <div className="giftImagesSlider">
          <div className="firstTextSection">
          <Animate><div ref={shortHeadingRef} className="marginBottom26 shortHeading mainShortHeading black">{props.shortHeading}</div></Animate>
          <Animate><div ref={headingRef} className="marginBottom90 topText smallHeading black">{props.topText1}</div></Animate>
          </div>
          <div ref={sliderWrapperRef} className="marginBottom55 allImagesSlider positionRelative">
            <Animate>
              <Slider ref={slider} {...settings}>
                {props.giftStory.map((image, id) => {
                  return (
                    <div className="sliderImage" key={id}>
                      <div className="slides" style={{width:`${image.width}px`}}><Image alt="Image" width={image.width} height={image.height} originalSrc={image.img} /></div> 
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
              </Animate>
          </div>
          {bottomText1 && (
            <div className="bottomText first flexItems">
              <div ref={bottomLeftTextRef} className="leftText">
               <Animate>
                <div className="textAndArrow flexItems">
                  <div className="arrow">
                    <LongArrow
                      arrowLength="5px"
                      lineLength="10px"
                      transformX="3.3px"
                      transformY="1px"
                      arrowWidth="1px"
                      color="black"
                      direction="up"
                      marginTop="7px"
                    />
                  </div>
                  <div className="text greyCaption">
                   {props.cmsRichContent ==true && <div className="greyCaption" dangerouslySetInnerHTML={{__html: props.bottomSubText}}></div>}
                   {!props.cmsRichContent  && <div className="greyCaption" >{props.bottomSubText}</div>}
                  </div>
                </div>
                </Animate>
              </div>
              <div ref={bottomRightTextRef} className="rightText">
              <Animate>
                <div className="rightTextContainer">
                  <div className="rightTextOne bigDescription grey">{props.bottomRightText1}
                  </div>
                  {props.cmsRichContent == true &&<div className="designer greyCaption" dangerouslySetInnerHTML={{__html: props.bottomRightSubText}}></div>} 
                  {!props.cmsRichContent  &&<div className="designer greyCaption" >{props.bottomRightSubText}</div>} 
                </div>
                </Animate>
              </div>
            </div>
          )}
        </div>
      <style jsx>{`
        .giftImagesSlider {
          padding-left: 12.29%;
        }
        .slides{
          padding:0 1%;
        }
        .circleWithRightArrowContainer,
        .circleWithLeftArrowContainer {
          top: 50%;
          z-index: 9;
          transform: translateY(-50%);
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .circleWithRightArrowContainer {
          right: 8.5rem;
        }
        .circleWithLeftArrowContainer {
          left: -9.2rem;
        }
        .allImagesSlider:hover .circleWithRightArrowContainer,
        .allImagesSlider:hover .circleWithLeftArrowContainer {
          opacity: 1;
          transition: all 0.3s ease-out;
        }
        .text {
          padding-right: 1.2rem;
        }
        .rightTextOne {
          margin-bottom: 0.9rem;
          margin-right: -2.1rem;
        }
        .leftText,.rightText {
          width: 50%;
        }
        .topText {
          padding-right: 47%;
        }
        .topText.two {
          padding-right: 53%;
        }
        .sliderImage img {
          height: 100%;
          width: 100%;
        }
        .textAndArrow {
          align-items: flex-start;
          padding-right: 30%;
        }
        .textAndArrow .arrow {
          margin-right: 1.3rem;
          margin-bottom: 4px;
        }
        .rightTextContainer {
          padding-right: 25%;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .topText {
            padding-right: 5%;
          }
          .topText.two {
            padding-right: 53%;
          }
          .rightTextOne {
            margin-bottom: 2.1rem;
            margin-right: -2.1rem;
          }
          .designer {
            margin-left: 1rem;
          }
          .circleWithRightArrowContainer {
            right: 5.5rem;
          }
          .circleWithLeftArrowContainer {
            left: -5.5rem;
          }
          .circleWithRightArrowContainer,
          .circleWithLeftArrowContainer {
            opacity: 1;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .giftImagesSlider {
            padding-left: 0%;
            overflow: hidden;
            width: auto;
          }
          .circleWithRightArrowContainer {
            right: 1.8rem;
          }
          .circleWithLeftArrowContainer {
            left: 1.8rem;
          }
          .bottomText {
            display: block;
          }
          .leftText,
          .rightText {
            width: auto;
          }
          .textAndArrow {
            padding-right: 0%;
          }
          .leftText,
          .shortHeading {
            padding: 0 5.6%;
          }
          .leftText {
            margin-bottom: 3rem;
          }
          .rightText {
            padding:0 5.6%;
          }
          .rightTextContainer {
            padding-right: 0%;
          }
          .topText {
            margin-bottom: 3.8rem;
            padding-right: 5.6%;
            padding-left:5.6%;
          }
          .topText.two {
            padding-right: 5.6%;
            padding-left: 5.6%;
          }
          .textAndArrow .arrow {
            margin-right: 0.7rem;
            margin-bottom: 4px;
          }
          .text {
            padding-right: 0rem;
          }
          .designer {
            margin-left: 0rem;
          }
        }
      `}</style>
    </>
  );
}
