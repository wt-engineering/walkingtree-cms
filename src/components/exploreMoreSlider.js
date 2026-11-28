import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import DotNavigation from "./dotNavigation";
import Button from "./button";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import Link from 'next/link'
import Animate from './animate'
import Image from "./Image";

export default function ExploreMoreSlider(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const sliderImgRef = useRef();
  const slider = useRef();
  const shortHeadingRef = useRef();
  const headingRef = useRef();
  const sliderWrapperRef = useRef();
  const bottomText1Ref = useRef();
  const bottomText2Ref = useRef();
  
  function sliderUpdate(id) {
    slider.current.slickGoTo(id);
    setIndexSlider(id);
  }

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1.5,
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
        },
      },
    ],
  };


  return (
    <>
      <div className="">
        <div className="textAndImage alignCenter">
          <Animate> <h2 ref={shortHeadingRef} className="marginBottom26 shortHeading mainShortHeading">{props.mainShortHeading}</h2></Animate>
          <Animate><h1 ref={headingRef} className="marginBottom55 topText1 bigHeading black">{props.bigHeading}</h1></Animate>
          <div ref={sliderWrapperRef} className="sliderSection positionRelative ">
          <Animate>
            <div className="sliderContainer positionRelative">
              <div className="marginBottom26 sliderElement">
                <Slider ref={slider} {...settings}>
                  {props.sliderImages.map((image, id) => {
                    return (
                      <div className="slideImage" ref={sliderImgRef} key={id} ><Animate><Image height={574} width={1017} alt="Image" className="width-100" originalSrc={image.img}/></Animate></div>
                    );
                  })}
                </Slider>
              </div>
              <div className="dotsWrapper positionAbsolute">
                <DotNavigation
                  sliderData={props.sliderImages}
                  indexValue={indexSlider}
                  onClick={(id) => sliderUpdate(id)}
                  dotColor="#BDBDBD"
                  activeDotColor="#000000"
                />
              </div>
              <div onClick={() => slider.current.slickNext()} className="circleWithRightArrow">
                <Button buttonType="circleIconRight" />
              </div>
              <div onClick={() => slider.current.slickPrev()} className="circleWithLeftArrow">
                <Button buttonType="circleIconLeft" />
              </div>
            </div>
            </Animate>
          </div>
          <Animate><div ref={bottomText1Ref} className="marginBottom55 text description black">{props.description}</div></Animate>
          <Animate><div ref={bottomText2Ref} className="linkText"><Link href={props.link}>{props.linkText}</Link></div></Animate>
        </div>
      </div>
      <style jsx>{`
        .circleWithRightArrow {
          position: absolute;
          top:50%;
          transform:translateY(-50%);
          right: 85px;
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .linkText a{
          color:#000000;
        }
        .circleWithLeftArrow {
          position: absolute;
          top:50%;
          transform:translateY(-50%);
          left: 85px;
          opacity: 0;
          transition: all 0.3s ease-out;
        }
        .sliderSection:hover .circleWithRightArrow,
        .sliderSection:hover .circleWithLeftArrow {
          opacity: 1;
          transition: all 0.3s ease-out;
        }
        .slideImage {
          padding-left: 1%;
        }
        .text {
          padding: 6.5rem 28% 0;
        }
        .dotsWrapper {
          left: 50%;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .text {
            padding: 6.5rem 21% 0;
          }
          .circleWithLeftArrow,.circleWithRightArrow{
            opacity:1;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .dotsWrapper {
            left: 50%;
          }
          .topText1 {
            font-size: 2.1rem;
          }
          .slideImage {
            padding-left: 0rem;
          }
          .circleWithRightArrow {
            right: 3rem;
          }
          .circleWithLeftArrow {
            left: 3rem;
          }
          .text {
            padding: 3rem 5% 0;
          }
        }
    `}</style>
    </>
  );
}
