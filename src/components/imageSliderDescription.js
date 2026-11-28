import React, {useRef, useState} from "react";
import { MOBILE_BREAKPOINT,TABLET_BREAKPOINT, MEDIUM_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Slider from "react-slick";
import Button from "./button";
import Image from "./Image";
import Animate from "./animate";
export default function ImageSliderDescription(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const slider = useRef();
  // let router = useRouter();
  var settings = {
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (current, next) => setIndexSlider(next),
  };
//  console.log("djsjkdshj",props.sliderDesign[0].link);
  return (
    <>
     <Animate>
     <div className="container">
        {props.displayShortHeadingFirst ? <div className="textAndImage alignCenter">
          <h2 className="mbBelowShortHeading shortHeading mainShortHeading richText">{props.shortHeading}</h2>
          <h1 className="topText1 bigHeading black richText">{props.topText1}</h1>
          </div>
         :
         <div className="textAndImage alignCenter">
                <h1 className="topText1 bigHeading black richText mbBelowShortHeading ">{props.topText1}</h1>
                <h2 className="shortHeading mainShortHeading richText">{props.shortHeading}</h2>
          </div>
         }
        <div className="sliderSection">
          <div className="sliderContainer ctaAbove positionRelative marginBottom55 alignCenter">
            <Slider ref={slider} {...settings}>
              {props.sliderDesign.map((image, id) => {
                return (
                  <div className="sliderImage alignCenter" key={id}>
                    {!!image.img && <div className="image" ><Image width={1086} height={539}  alt="Image" originalSrc={image.img}/></div>}
                  </div>
                );
              })}
            </Slider>
            {props.sliderDesign.length>1 && <div onClick={() => slider.current.slickNext()} className="positionAbsolute circleWithRightArrowContainer cursorPointer">
              <Button buttonType="circleIconRight" />
            </div>}
            {props.sliderDesign.length>1 && <div onClick={() => slider.current.slickPrev()} className="positionAbsolute circleWithLeftArrowContainer cursorPointer">
                  <Button buttonType="circleIconLeft"/>
            </div>}
          {/* <Button buttonType="rectangle" href={props.sliderDesign[indexSlider].link} buttonText={props.sliderDesign[indexSlider].buttonText} textOnHover={props.sliderDesign[indexSlider].buttonTextOnHover}/> */}
          </div>
          <div className="slideContent alignCenter">
            {!!props.sliderDesign[indexSlider].shortHeading && <h2 className="mbBelowShortHeading shortHeading mainShortHeading richText grey">{props.sliderDesign[indexSlider].shortHeading}</h2>}
            {!!props.sliderDesign[indexSlider].desc && props.sliderDesign[indexSlider].cmsRichContent ? 
              <div className="desc richText" dangerouslySetInnerHTML={{__html:props.sliderDesign[indexSlider].desc}}></div>
              :
              <div className="desc richText">{props.sliderDesign[indexSlider].desc}</div>  
            }
            {!!props.sliderDesign[indexSlider].buttonText && !!props.sliderDesign[indexSlider].buttonTextOnHover && !!props.sliderDesign[indexSlider].link &&
              <div className="cta ctaAbove"><Button buttonType="rectangle" href={props.sliderDesign[indexSlider].link} buttonText={props.sliderDesign[indexSlider].buttonText} textOnHover={props.sliderDesign[indexSlider].buttonTextOnHover} /></div>
            }
          </div>
        </div>
      </div>
     </Animate>

      <style jsx>{`
        .desc{
          padding: 0 11%;
        }
        .shorHeading1{
          margin-top: 1.2rem;
        }
        .container {
          overflow: hidden;
        }
        .circleWithRightArrowContainer,.circleWithLeftArrowContainer{
          top:50%;
        }
        .circleWithRightArrowContainer{
          right:-10%;
        }  
        .circleWithLeftArrowContainer{
          left:-10%;
        }
        .sliderSection {
          overflow: hidden;
          padding-left: 12.29%;
          padding-right: 12.29%;
        }
        .slide {
          margin-bottom: 5.5rem;
        }
        .textAndImage {
          margin: 0 20.3%;
        }
        .colImage {
          display: flex;
          margin-right: -2.4rem;
          margin-bottom: 11.4rem;
        }
        .bottomText {
          letter-spacing: -0.27px;
          color: #9e9e9e;
          text-transform: uppercase;
          opacity: 1;
          font-family: Moderat;
          font-siz: 27px;
        }
        .dotsWrapper {
          left: 50%;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px){
          .desc{
            padding: 0 9%;
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          desc{
            padding:0  7%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            overflow: hidden;
          }
          .textAndImage {
            margin: 0 9.6rem;
          }  
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .sliderSection {
            padding-left: 0;
            padding-right: 0;
          }
          .textAndImage {
            margin: 0 0;
          }
          .topText1 {
            margin-right: 5.1rem;
            margin-left: 5.1rem;
          }
          .topText2 {
            margin-left:15.2%;
            margin-right:15.2%;
          }   
          .colImage {
            display: block;
            margin-right: 0rem;
            margin-bottom: 6rem;
          }
          .colImage div {
            width: 100%;
            padding-right: 0rem;
            margin-bottom: 1.1rem;
          }
          .colImage div:last-child {
            margin-bottom: 0rem;
          }
          .bottomText {
            padding: 0 2%;
          }
          .circleWithRightArrowContainer{
            right:2.9%;
          }  
          .circleWithLeftArrowContainer{
            left:2.9%;
          }
        }
      `}</style>
    </>
  );
}