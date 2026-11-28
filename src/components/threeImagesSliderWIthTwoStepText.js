import React, { useRef, useState } from "react";
import { TABLET_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,MOBILE_BREAKPOINT} from "../config";
import Slider from "react-slick";
import DotNavigation from "./dotNavigation";
import Button from "./button";
import Animate from "./animate";
import Image from "./Image";

export default function ThreeImagesSliderWIthTwoStepText(props) {
    const [indexSlider, setIndexSlider] = useState(0);
    const sliderImgRef = useRef();
    const slider = useRef();
    const shortHeadingRef = useRef();
    const sectionHeadingRef = useRef();

    function sliderUpdate(id) {
        slider.current.slickGoTo(id);
        setIndexSlider(id);
      }
    
      var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplaySpeed:1000,
        autoplay: false,
        variableWidth: true,
        beforeChange: (current, next) => setIndexSlider(next),
        // responsive: [
        //     {
        //         breakpoint: TABLET_BREAKPOINT,
        //         settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         dots: false,
        //         variableWidth: true,
        //       },
        //     },
        //   ],
      };
    
      let springConfig = {
        duration: "0.9s",
        easeFunction: "cubic-bezier(0.1, 0.35, 0.2, 1)",
        delay: "0s",
      };

  return (
   <>
        <div className="container alignCenter">
            <Animate><div ref={sectionHeadingRef} className="mbBelowShortHeading bigHeading heading  black richText">{props.heading}</div></Animate>
            <Animate><div ref={shortHeadingRef} className="shortHeading mainShortHeading space40 richText">{props.shortHeading}</div></Animate>
            <Animate>
              <div className="sliderSection positionRelative space40 hideForMobile">
                  <div className="sliderContainer positionRelative flexItems">
                      <Slider ref={slider} {...settings}>
                        {Array.isArray(props.randomThreeImages) &&
                          props.randomThreeImages.map((slide, index) => {
                          return (
                            <div
                              ref={sliderImgRef}
                              key={index}
                              className="slide"
                            >
                              <div className="imagesAraay">
                                {/* <img alt="Image" className="width-100" src={slide.img}/> */}
                                <Image
                                  alt={"Image"}
                                  originalSrc={slide.img}
                                  width={slide.width}
                                  height={slide.height}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                      <div onClick={() => slider.current.slickNext()} className="positionAbsolute circleWithRightArrowContainer"><Button buttonType="circleIconRight" /></div>
                      <div onClick={() => slider.current.slickPrev()} className="positionAbsolute circleWithLeftArrowContainer"> <Button buttonType="circleIconLeft"/></div>
                  </div>
                  <div className="dotsWrapper positionAbsolute ">
                      <DotNavigation
                        sliderData={props.randomThreeImages}
                        indexValue={indexSlider}
                        onClick={(id) => sliderUpdate(id)}
                        dotColor="#BDBDBD"
                        activeDotColor="#000000"
                      />
                  </div>
              </div>
              <div className="showForMobile">
                  <div className="imagesScrollMobile">
                      {Array.isArray(props.randomThreeImages) &&
                        props.randomThreeImages.map((slide, index) => {
                        return (
                          <div
                            ref={sliderImgRef}
                            style={{ minWidth: `${slide.width}px` }}
                            key={index}
                            className="singleSlide"
                          >
                            {/* <img alt="Image" className="width-100" src={slide.img}/> */}
                            <Image
                              alt={"Image"}
                              originalSrc={slide.img}
                              width={slide.width}
                              height={slide.height}
                            />
                          </div>
                        );
                      })}
                  </div>
              </div>
            </Animate>
            {props.cmsRichContent ?
            <Animate> <div className="desc lesserAdditionalPadding" dangerouslySetInnerHTML={{__html:props.description}}></div></Animate>
            :
            <Animate>
              <div className="desc lesserAdditionalPadding">{props.description}</div>
            </Animate>
            }
            {/* <div className="desc bigDescription"></div> */}
        </div>
        <style jsx>{`
            .circleWithRightArrowContainer,.circleWithLeftArrowContainer{
                top: 50%;
                transition:all 0.3s ease-out;
              }
              .circleWithRightArrowContainer{
                right:5.9%;
              }  
              .circleWithLeftArrowContainer{
                left:5.9%;
              }
              .sliderSection {
                overflow: hidden;
                padding-bottom: 1.6rem;
              }
              .imagesAraay{
                padding-right: 1rem;
              }
              .imagesAraay > div:first-child{
                padding-right:0%;
              }
              .sliderContainer {
                margin-bottom: 3.5rem;
              }
              .dotsWrapper{
                left: 50%;
                transform: translateX(-50%);
              }
              @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px){
                .desc{
                  padding:0 10%;
                }
              }
              @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                .desc{
                  padding:0 2.1rem
                }
                .imagesScrollMobile{
                  display: flex;
                  overflow-y:scroll;
                  margin-right: -15px;
                  margin-bottom: 4rem;
                }
                .imagesScrollMobile::-webkit-scrollbar {
                  display: none;
                }
                .imagesScrollMobile {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
                .singleSlide{
                  margin-right: 15px;
                }
              }
        `}</style>
    </>
  )
}

