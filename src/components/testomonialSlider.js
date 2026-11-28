import React, { useEffect, useRef, useState } from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import DotNavigation from "./dotNavigation";
import Button from "./button";
import Image from "./Image"
import Slider from "react-slick";

export default function TestomonialSlider(props) {
  const [indexSlider, setIndexSlider] = useState(0);
  const [activeAnimation, setActiveAnimation] = useState("none")
  const [sectionData, setSectionData] = useState(props.sectionData[0]);
  const slider = useRef();
console.log(props);
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

  function nextSlide() {
    if (indexSlider >= 0 && indexSlider < props.sectionData.length) {
      setIndexSlider(indexSlider + 1);
      setSectionInformation(indexSlider + 1);
    }
    if (indexSlider + 1 == props.sectionData.length) {
      setIndexSlider(0);
      setSectionInformation(0);
    }
  }
  function prevSlide() {
    if (indexSlider > 0 && indexSlider < props.sectionData.length) {
      setIndexSlider(indexSlider - 1);
      setSectionInformation(indexSlider - 1);
    }
    if (indexSlider == 0) {
      setIndexSlider(props.sectionData.length - 1);
      setSectionInformation(props.sectionData.length - 1);
    }
  }

  function setSectionInformation(id) {
    setSectionData(props.sectionData[id]);
  }

  function indexChange(indexId) {
    slider.current.slickGoTo(indexId);
    setIndexSlider(indexId);
    setSectionInformation(indexId);
  }

  useEffect(()=>{
    setSectionInformation(indexSlider)
  },[indexSlider])

  return (
    <>
      <div className="container lesserAdditionalPadding">
      {!!sectionData && (
        <div className="sliderSection positionRelative">
          <div className="sliderContainer positionRelative">
              <div className="sliderImage" >
                  <div className="content flexItems">
                    <div className="leftImage hideForMobile">
                        <div className={`image`} ><Image height={524} width={420} className="width-100"  alt="Image" originalSrc={sectionData.img}/></div>
                        {!!props.cmsRichContent && <div className={`captionForIpad description black showForIpad alignCenter`} dangerouslySetInnerHTML={{__html: sectionData.caption}}></div>}
                        {!props.cmsRichContent && <div className={`captionForIpad description black showForIpad alignCenter`}>{sectionData.caption}</div>}
                    </div>
                    <div className="textArea">
                        <div className={`mbBelowShortHeading shortHeading mainShortHeading ${activeAnimation}`}>{sectionData.shortHeading}</div>
                        <div className={`mbHeading heading smallHeading black`}>{sectionData.heading}</div>
                        <div className={`mbHeading desc description grey moderatLight`}>{sectionData.description}</div>
                        {!!props.cmsRichContent && <div className={`mbHeading caption description black hideForIpad`} dangerouslySetInnerHTML={{__html: sectionData.caption}}></div>}
                        {!props.cmsRichContent && <div  className={`mbHeading caption description black hideForIpad`}>{sectionData.caption}</div>}
                    </div>  
                    <div className="leftImage showForMobile positionRelative">
                        <Slider ref={slider} {...settings}>
                            {!!props.sectionData && props.sectionData.map((image, id) => {
                            return (
                              <div key={id} className={`image`}><Image width={420} height={520} className="width-100"  alt="Image" originalSrc={image.img}/></div>
                            );
                            })}
                        </Slider>
                        {/* <div className={`image mbHeading`} ><Image width={420} height={520} className="width-100"  alt="Image" originalSrc={sectionData.img}/></div> */}
                        {!!props.cmsRichContent && <div className={`captionForIpad description black showForIpad alignCenter`} dangerouslySetInnerHTML={{__html: sectionData.caption}}></div>}
                        {!props.cmsRichContent && <div className={`captionForIpad description black showForIpad alignCenter`}>{sectionData.caption}</div>}
                        <div onClick={() => slider.current.slickNext()} className="circleWithRightArrowContainer positionAbsolute showForMobile">
                          <Button buttonType="circleIconRight" />
                        </div>
                        <div onClick={() => slider.current.slickPrev()} className="circleWithLeftArrowContainer positionAbsolute showForMobile">
                          <Button buttonType="circleIconLeft" />
                        </div>
                    </div>
                  </div>
              </div>
              {/* <div className="dotsWrapper positionAbsolute ctaAbove">
                  <DotNavigation
                    sliderData={props.sectionData}
                    indexValue={indexSlider}
                    onClick={(id) => indexChange(id)}
                    dotColor="#BDBDBD"
                    activeDotColor="#000000"
                  />
              </div>   */}
              <div onClick={() => nextSlide()} className="circleWithRightArrowContainer positionAbsolute hideForMobile">
                <Button buttonType="circleIconRight" />
              </div>
              <div onClick={() => prevSlide()} className="circleWithLeftArrowContainer positionAbsolute hideForMobile">
                <Button buttonType="circleIconLeft" />
              </div>
          </div>
        </div>
        )}
      </div>
      <style jsx>{` 
        .showForIpad{
          display:none;
        }
        .shortHeading{
            margin-bottom: 1rem;
        }
        .desc{
          font-size: 1.7rem;
          line-height: 3rem;
        }
        .dotsWrapper{
          left: 50%;
          transform: translateX(-50%);
        } 
        .content{
          margin-right:-4%;
        }
        .leftImage,.textArea{
          width:50%;
          padding-right: 4%;
        }
        .circleWithRightArrowContainer{
            right:-8%;
            top:50%;
        }  
        .circleWithLeftArrowContainer{
            left:-8%;
            top:50%;
        }
        .sliderSection {
          padding-bottom: 1.6rem;
        }
    
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
          .content{
            display:block;
            margin-right:0;
          }
          .sliderSection {
            padding-bottom: 0rem;
          }
          .leftImage{
            width:100%;
            padding-right: 0;
          }
          .textArea{
            text-align: center;
            width:100%;
            padding-right: 0;
          }
          .shortHeading{
            margin-bottom:1rem;
          }
          .circleWithRightArrowContainer,.circleWithLeftArrowContainer{
            top: 50%;
            transition:all 0.3s ease-out;
          }
          .circleWithRightArrowContainer{
            right:0%;
            transform: translateX(0%);
          }  
          .circleWithLeftArrowContainer{
            transform: translateX(0%);
            left:0%;
          }
          .desc{
            font-size: 16px;
            line-height: 25px;
          }
        }      
      `}</style>
    </>
  )
}

 