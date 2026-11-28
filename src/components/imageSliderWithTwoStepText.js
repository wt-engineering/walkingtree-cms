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
import Video from "./video";
export default function TextAndTwoColumnImage(props) {
    const slider = useRef(null);
    const [indexSlider, setIndexSlider] = useState(0);
    const imagesSliderWrapperRef = useRef();

    var settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        arrows:false,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        className: "variable-width",
        variableWidth: true,
        swipeToSlide: true,
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
      {/* <div className="threeStepText">
      {props.cmsRichContent===true && <ThreeStepText center={true} topText2Class="grey bigDescription" paddingClass="" shortHeading={props.shortHeading} topText1={props.topText1} topText2={props.topText2} />}
      {!props.cmsRichContent && <ThreeStepTextRichContent center={true} topText2Class="grey bigDescription" paddingClass="" shortHeading={props.shortHeading} topText1={props.topText1} topText2={props.topText2}/>}
      </div> */}
      <Animate>
        <div ref={imagesSliderWrapperRef} className="threeStepTextCarousel">
          <div className="positionRelative">
            <Slider {...settings} ref={slider}>
                {Array.isArray(props.carouselImages) && props.carouselImages.map((data,index)=>{
                  return (
                    <>
                    <div className="sliderImage" key={index} >
                        {/* <Video video={data.video} videoUrl={data.videoUrl}  videoPause={indexSlider!=index}/>  */}
                        <div className="images" style={{width:`${data.width}px`,height:`${data.height}px`}}><img className="width-100" alt="Image" src={data.img}/></div>
                    </div>
                    {/* <div  className="sliderImage showForMobile" key={index}>
                        <Video video={data.video} videoUrlMobile={data.videoUrlMobile} videoPause={indexSlider!=index}/> 
                    </div> */}
                    </>

                  )
                })}
            </Slider>
           {props.carouselImages && props.carouselImages.length>1 &&<div onClick={() => slider.current.slickNext()} className="positionAbsolute circleWithRightArrowContainer">
                <Button buttonType="circleIconRight" />
            </div>}
           {props.carouselImages &&props.carouselImages.length>1 && <div onClick={() => slider.current.slickPrev()} className="positionAbsolute circleWithLeftArrowContainer">
                <Button buttonType="circleIconLeft"/>
            </div>}
          </div>
          <div className="dotsWrapper alignCenter"> 
            <DotNavigation
                sliderData={!!props.carouselImages?props.carouselImages :[]}
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
          margin-top: 15px;
        }
        .circleWithRightArrowContainer,.circleWithLeftArrowContainer{
            top: 50%;
            z-index: 9;
            transform:translateY(-50%);
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
        .images{
            padding-right:5px;
        }
        .shortHeading {
          margin-bottom: 4rem;
        }
        @media only screen and (max-width: ${MOBILE_BREAKPOINT}px){
          .circleWithRightArrowContainer{
            right:2rem;
          }  
          .circleWithLeftArrowContainer{
            left:2rem;
          }
        }
      `}</style>
    </>
  );
}
