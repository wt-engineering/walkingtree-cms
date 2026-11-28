import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT, TABLET_BREAKPOINT } from "../config";
import Slider from 'react-slick'
import React,{useRef,useState} from 'react'
import Button from './button'
import SliderDots from './sliderDots'
import ShortHeadingAndDescriptionWithOptionalImage from "./shortHeadingAndDescriptionWithOptionalImage";
import ThreeStepText from "./threeStepText";
import ThreeStepTextRichContent from "./threeStepTextRichContent";
import Image from "./Image";
import Animate from "./animate";
import DotNavigation from "./dotNavigation";

export default function TextAndTwoColumnImage(props) {
    const slider = useRef(null);
    const [indexSlider, setIndexSlider] = useState(0);
    const imagesSliderWrapperRef = useRef();

    var settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 2,
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
              }
            }
        ],
        beforeChange: (current, next) => setIndexSlider(next),
    }
    function sliderUpdate(id) {
      slider.current.slickGoTo(id);
      setIndexSlider(id);
    }
  return (
    <>
      <div className="threeStepText">
      {props.cmsRichContent===true && <ThreeStepText center={true} topText2Class=" bigDescription" paddingClass="" shortHeading={props.shortHeading} topText1={props.topText1} topText2={props.topText2} />}
      {!props.cmsRichContent && <ThreeStepTextRichContent center={true} topText2Class=" bigDescription" paddingClass="" shortHeading={props.shortHeading} topText1={props.topText1} topText2={props.topText2}/>}
      </div>
      <Animate>
        <div ref={imagesSliderWrapperRef} className="threeStepTextCarousel">
          <div className="positionRelative">
            <Slider {...settings} ref={slider}>
                {Array.isArray(props.carouselImages) && props.carouselImages.map((data,index)=>{
                  return (
                    <div className="sliderImage" key={index}>
                      {/* <Image height={data.height} width={data.width} alt="Image" originalSrc={data.img}/> */}
                      {/* <img alt="Image" src={data.img} height={data.height} width={data.width} className="width-100"/> */}
                      <Image
                        alt={"Image"}
                        originalSrc={data.img}
                        width={data.width}
                        height={data.height}
                      />
                    </div>
                  );
                })}
            </Slider>
            <div onClick={() => slider.current.slickNext()} className="positionAbsolute circleWithRightArrowContainer">
                <Button buttonType="circleIconRight" />
            </div>
            <div onClick={() => slider.current.slickPrev()} className="positionAbsolute circleWithLeftArrowContainer">
                <Button buttonType="circleIconLeft"/>
            </div>
          </div>
          <div className="dotsWrapper alignCenter"> 
            <DotNavigation
                sliderData={props.carouselImages}
                indexValue={indexSlider}
                onClick={(id)=>sliderUpdate(id)}
                dotColor="#BDBDBD"
                activeDotColor="#000000"
            />
          </div>
        </div>
      </Animate>
      <div className="carouselText ctaAbove">
        <ShortHeadingAndDescriptionWithOptionalImage shortHeading={props.shortHeading1} desc={props.desc}/>
      </div>
      <style jsx>{`
        .dotsWrapper{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
        }
        .circleWithRightArrowContainer,.circleWithLeftArrowContainer{
            top: 50%;
            z-index: 9;
            transition:all 0.3s ease-out;
        }
        .circleWithRightArrowContainer{
            right:8.5rem;
        }  
        .circleWithLeftArrowContainer{
            left:8.5rem;
        }
        .threeStepTextCarousel{
            width:100%;
            overflow:hidden;
        }
        .sliderImage{
            padding:0 10px;
        }
        .sliderImage img{
            height:100%;
        }
        .shortHeading {
          margin-bottom: 4rem;
        }
        .threeStepText{
          margin-bottom:12.5rem;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .circleWithRightArrowContainer{
              right:5rem;
          }  
          .circleWithLeftArrowContainer{
              left:5rem;
          }
          .threeStepText{
            margin-bottom:8.5rem;
          }
        }
        @media only screen and (max-width: ${MOBILE_BREAKPOINT}px){
          .threeStepText{
            margin-bottom:3rem;
          }
          .sliderImage{
            padding:0 1px;
          }
          .circleWithRightArrowContainer{
            right:2rem;
          }  
          .circleWithLeftArrowContainer{
            left:2rem;
          }
          .dotsWrapper{
            margin-top: 25px;
          }
        }
      `}</style>
    </>
  );
}
