import React, {useEffect, useRef, useState} from "react";
import { MOBILE_BREAKPOINT,TABLET_BREAKPOINT, MEDIUM_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Slider from "react-slick";
import Button from "./button";
import Image from "./Image";
import Animate from "./animate"
import DotNavigation from "./dotNavigation";
import Link from 'next/link'
import useOnScreen from "../hooks/useOnScreen";

function BigSliderwithContent(props) {
    const [indexSlider, setIndexSlider] = useState(0);
    const slider = useRef();
    const sectionRef1 = useRef(null);
    const imageSliderRef = useRef(null);
    const sectionIsOnScreen = useOnScreen(sectionRef1)
    const [imageSliderHeight, setImageSliderHeight] = useState(100);

    useEffect(()=>{
      setImageSliderHeight(imageSliderRef?.current?.getBoundingClientRect().height);
    },[sectionIsOnScreen])
  
    function sliderUpdate(id) {
      slider.current.slickGoTo(id);
      setIndexSlider(id);
    }
    var settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      swipeToSlide: true,
      // fade: true,
      beforeChange: (current, next) => setIndexSlider(next),
    };
  return (
    <>      
        <div ref={sectionRef1} className="container">
            <Animate><div className="mainShortHeading alignCenter mbBelowShortHeading">{props.shortHeading}</div></Animate>
            <Animate><h2 className="mbHeading black heading smallHeading alignCenter">{props.sliderDesign[indexSlider].heading}</h2></Animate>
            <div className="sliderSection positionRelative">
                <div className="sliderContainer positionRelative marginBottom40">
                  <Slider ref={slider} {...settings}>
                      {props.sliderDesign.map((image, id) => {
                      return (
                          <div className="sliderImage" key={id}>
                              {/* <Link  passHref={true}> */}
                              <a href={image.link}  target="_blank" rel="noreferrer">
                                  <div ref={imageSliderRef} className="image  flexItems" >
                                      <div className="image1"><Animate><Image width={309} height={387}  alt="Image" originalSrc={image.img1}/></Animate></div>
                                      <div className="image2"><Animate><Image width={418} height={524}  alt="Image" originalSrc={image.img2}/></Animate></div>
                                      <div className="image3"><Animate><Image width={309} height={387}  alt="Image" originalSrc={image.img3}/></Animate></div>
                                  </div>
                              </a>
                              {/* </Link> */}
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
                  <div className="dotsWrapper positionAbsolute">
                    <DotNavigation
                      sliderData={props.sliderDesign}
                      indexValue={indexSlider}
                      onClick={(id) => sliderUpdate(id)}
                      dotColor="#BDBDBD"
                      activeDotColor="#000000"
                    />
                  </div>
              </div>
              <div className="textContent flexItems">
                <Animate><div className="descLeft bigDescription grey">{props.sliderDesign[indexSlider].bigDescription}</div></Animate>
                <Animate> <div className="descRight description grey">{props.sliderDesign[indexSlider].smallDescription}</div></Animate>
              </div>
            </div>
        </div>
        
        <style jsx>{`
          // a {
          //     color: #414042;
          //     text-decoration: none;
          //   }
          .image1{
              width:30%;
              padding-right:1rem;
          }
          .image3{
              width:30%;
          }
          .image{
              align-items: center;
              justify-content: center; 
          }
          .image2{
              width:40%;
              padding-right:1rem;
          }
          .textContent{
              justify-content:space-between;
              align-items:center;
              padding-top:2rem;
          }
          .descLeft{
              width:400px;
              max-width:100%;
              margin:0 auto;
          }
          .descRight{
              width:400px;
              max-width:100%;
              margin:0 auto;
          }
          .container {
              overflow: hidden;
            }
            .circleWithRightArrow {
              position: absolute;
              top: 50%;
              right: -6%;
              transition: all 0.3s ease-out;
            }
            .circleWithLeftArrow {
              position: absolute;
              top: 50%;
              left: -6%;
              transition: all 0.3s ease-out;
            }
            .sliderSection {
              padding-left: 12.29%;
              padding-right: 12.29%;
            }
            .slide {
              margin-bottom: 5.5rem;
            }
            .dotsWrapper {
              left: 50%;
              bottom: -30px;
              transform: translateX(-50%);
            }
          
          @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px){
            .sliderSection {
                padding-left: 8%;
                padding-right: 8%;
              }
          }
          @media screen and (max-width: ${TABLET_BREAKPOINT}px){
              .textContent{
                display: block;
                text-align:center;
                padding-top: 4rem;
            }
            .descLeft{
                width:600px;
                max-width:100%;
                margin:0 auto;
            }
            .descRight{
                width:600px;
                max-width:100%;
                margin:0 auto;
            }
            .descLeft{
                margin-bottom:2rem;
            }
            .image1,.image2{
                padding-right: 7px;
            }
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
            .sliderSection {
                padding-left: 6%;
                padding-right: 6%;
            }
            .image1,.image2{
                padding-right: 5px;
            }
            .descLeft{
              margin-bottom:1.5rem;
            }
            .textContent{
              padding-top: 2rem;
            }
          }
        `}</style>
    </>
  )
}

export default BigSliderwithContent
