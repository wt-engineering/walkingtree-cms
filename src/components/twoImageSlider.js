import React, { useRef, useState } from "react";
import Button from "./button";
import DotNavigation from "./dotNavigation";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Image from './Image'
import Animate from "./animate";
import Slider from "react-slick";

export default function TwoImageSlider(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const [sectionData, setSectionData] = useState(props.twoImageSliderData[0]);
  const [activeAnimation, setActiveAnimation] = useState("none");
  const shortHeadingRef = useRef();
  const headingRef = useRef();
  const sliderWrapperRef = useRef();
  const slider = useRef();
  const slider1 = useRef();

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    // fade: true,
    beforeChange: (current, next) => setIndexSlider(next),
  };

  function setSectionInformation(id) {
    setActiveAnimation("opacityNone");
    setSectionData(props.twoImageSliderData[id]);
    let setData = setTimeout(() => {
      setActiveAnimation("");
    }, 100);
  }

  function indexChange(indexId) {
    slider.current.slickGoTo(indexId);
    setIndexSlider(indexId);
    setSectionInformation(indexId);
  }

  function nextSlide() {
    if (indexSlider >= 0 && indexSlider < props.twoImageSliderData.length) {
      setIndexSlider(indexSlider + 1);
      setSectionInformation(indexSlider + 1);
    }
    if (indexSlider + 1 == props.twoImageSliderData.length) {
      setIndexSlider(0);
      setSectionInformation(0);
    }
  }
  function prevSlide() {
    if (indexSlider > 0 && indexSlider < props.twoImageSliderData.length) {
      setIndexSlider(indexSlider - 1);
      setSectionInformation(indexSlider - 1);
    }
    if (indexSlider == 0) {
      setIndexSlider(props.twoImageSliderData.length - 1);
      setSectionInformation(props.twoImageSliderData.length - 1);
    }
  }
  let mobileImagesArray= [];
  for(let i=0;i<props.twoImageSliderData.length;i++){
    let obj1 = {}, obj2 = {};
    obj1.img = props.twoImageSliderData[i].img1;
    obj2.img = props.twoImageSliderData[i].img2;
    mobileImagesArray.push(obj1)
    mobileImagesArray.push(obj2)
  }
  return (
    <>
      <div className="twoImageSlider ">
        <div className="topText alignCenter">
          <Animate><h1 ref={headingRef} className="marginBottom12 mainHeading bigHeading black ">{props.mainHeading}</h1></Animate>
          <Animate><h2 ref={shortHeadingRef} className="space90 shortHeading mainShortHeading ">{props.shortHeading}</h2></Animate>
        </div>
        <Animate>
          <div ref={sliderWrapperRef} className="slider positionRelative">
            {/* {!!sectionData && (
              <>
                <div className="slide alignCenter hideForMobile">
                  <div style={{ animationDelay: "0s" }} className={`marginBottom90 images positionRelative`}>
                    <div className={`image one ${activeAnimation}`}><Image height={527} width={420} originalSrc={sectionData.img1} className="width-100" alt="Slide img1"/></div>
                    <div className={`image two ${activeAnimation}`}><Image height={527} width={420} originalSrc ={sectionData.img2} className="width-100" alt="Slide img2"/></div>
                    <div className="dotsWrapper positionAbsolute">
                      <DotNavigation
                        sliderData={props.twoImageSliderData}
                        indexValue={indexSlider}
                        onClick={(id) => indexChange(id)}
                        dotColor="#BDBDBD"
                        activeDotColor="#000000"
                      />
                    </div>
                    <div onClick={() => nextSlide()} className="circleWithRightArrow positionAbsolute hideForMobile">
                      <Button buttonType="circleIconRight" />
                    </div>
                    <div onClick={() => prevSlide()} className="circleWithLeftArrow positionAbsolute hideForMobile">
                      <Button buttonType="circleIconLeft" />
                    </div>
                  </div>
                  {!!sectionData.desc && <p style={{ animationDelay: "0.2s" }} className={`marginBottom55 desc richText ${activeAnimation}`}>{sectionData.desc}</p>}
                  {!!props.desc && <p style={{ animationDelay: "0.2s" }} className="space40 desc richText">{props.desc}</p>}
                </div>
              </>
            )} */}
            <div className="hideForMobile">
              <div className="sliderDesktop marginBottom90 positionRelative">
                <Slider ref={slider1} {...settings}>
                    {!!props.twoImageSliderData && props.twoImageSliderData.map((image, id) => {
                    return (
                      <div key={id} className="slide alignCenter">
                        <div style={{ animationDelay: "0s" }} className={` images positionRelative`}>
                          <div className={`image one ${activeAnimation}`}><Image height={527} width={420} originalSrc={image.img1} className="width-100" alt="Slide img1"/></div>
                          <div className={`image two ${activeAnimation}`}><Image height={527} width={420} originalSrc ={image.img2} className="width-100" alt="Slide img2"/></div>
                        </div>
                      </div>
                    );
                    })}
                </Slider>
                <div className="dotsWrapper positionAbsolute">
                  <DotNavigation
                    sliderData={props.twoImageSliderData}
                    indexValue={indexSlider}
                    onClick={(id) => indexChange(id)}
                    dotColor="#BDBDBD"
                    activeDotColor="#000000"
                  />
                </div>
              </div>
              {!!props.desc && <p style={{ animationDelay: "0.2s" }} className="desc alignCenter richText">{props.desc}</p>}
            </div>
            <div className="showForMobile">
              <div className="sliderMobile positionRelative">
                <Slider ref={slider} {...settings}>
                    {!!mobileImagesArray && mobileImagesArray.map((image, id) => {
                    return (
                      <div key={id} className={`image`}><Image height={527} width={420} originalSrc={image.img} alt="Slide img1"/></div>
                    );
                    })}
                </Slider>
                <div className="dotsWrapper positionAbsolute">
                  <DotNavigation
                    sliderData={mobileImagesArray}
                    indexValue={indexSlider}
                    onClick={(id) => indexChange(id)}
                    dotColor="#BDBDBD"
                    activeDotColor="#000000"
                  />
                </div>
                {/* <div onClick={() => slider.current.slickNext()} className="circleWithRightArrow positionAbsolute showForMobile">
                  <Button buttonType="circleIconRight" />
                </div>
                <div onClick={() => slider.current.slickPrev()} className="circleWithLeftArrow positionAbsolute showForMobile">
                  <Button buttonType="circleIconLeft" />
                </div> */}
              </div>
              {!!props.desc && <p style={{ animationDelay: "0.2s" }} className="desc alignCenter richText">{props.desc}</p>}
            </div>
          </div>
        </Animate>
      </div>
      <style jsx>{`
        .twoImageSlider {
          padding-left: 20%;
          padding-right: 20%;
        }
        .opacityNone {
          opacity: 0;
        }
        .slider {
          //padding-bottom:10.3rem;
        }
        .circleWithRightArrow {
          top: 50%;
          right: -9.2rem;
        }
        .circleWithLeftArrow {
          top: 50%;
          left: -9.2rem;
        }
        .dotsWrapper {
          left: 50%;
          transform: translateX(-50%);
          bottom: -5.2rem;
        }
        .images {
          display: flex;
        }
        .images .image.one {
          padding-right: 1.2rem;
          width: 50%;
        }
        .images .image.two {
          padding-left: 1.2rem;
          width: 50%;
        }
        .topText {
          padding: 0 15%;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .twoImageSlider {
            padding-left: 16%;
            padding-right: 16%;
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .twoImageSlider {
            padding-left: 12%;
            padding-right: 12%;
          }
          .circleWithRightArrow {
            right: -2rem;
          }
          .circleWithLeftArrow {
            left: -2rem;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .twoImageSlider{
               padding: 0 9.4%;
           }
           .desc {
            padding: 0 2% 0rem;
          }
       }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .twoImageSlider {
            padding-left: 2.1rem;
            padding-right: 2.1rem;
          }
          .topText {
            padding: 0 6%;
          }
          .images {
            display: block;
            margin-right: 0rem;
          }
          .images .image {
            padding-right: 0rem;
            width: 100%;
          }
          .dotsWrapper {
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
          }
          .desc {
            margin-top: 30px;
            margin-bottom: 0;
          }
          .circleWithRightArrow {
            top: 50%;
            right: 0;
          }
          .circleWithLeftArrow {
            top: 50%;
            left: 0;
          }
        }
      `}</style>
    </>
  );
}
