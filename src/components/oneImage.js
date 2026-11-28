import React, { useRef,useEffect } from "react";
import LongArrow from "./longArrow";
import { MOBILE_BREAKPOINT,MEDIUM_BREAKPOINT,TABLET_BREAKPOINT,scrollTriggerStartValue } from "../config";
import { gsap } from "gsap/dist/gsap";
import Image from "./Image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Animate from "./animate";

function OneImage(props) {
  const imageWrapperRef = useRef();
  useEffect(()=>{
    const animationT16 = gsap.timeline();
    ScrollTrigger.create({
      trigger: imageWrapperRef.current,
      animation: animationT16,
      start:`top ${scrollTriggerStartValue}`,
    });
    animationT16.from(imageWrapperRef.current, {
      opacity:0,
      y:30,
    });
    animationT16.to(imageWrapperRef.current, {
      opacity:1,
      y:0,
    });
},[])
  return (
    <>
        <Animate>
          <div ref={imageWrapperRef} className="Image">
            <Image height={507} width={949} alt="Image" className="width-100" originalSrc={props.img} />
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
                  marginTop="5px"
                />
              </div>
              <div>
                {props.cmsRichContent == true && <div className=" marginBottom16 greyCaption" dangerouslySetInnerHTML={{__html: props.caption1}}></div>}
                {!props.cmsRichContent && <div className="marginBottom16 text greyCaption" >{props.caption1}</div>}
            
                {props.cmsRichContent == true && <div className= " link greyCaption" dangerouslySetInnerHTML={{__html: props.caption2}}></div>}
                {!props.cmsRichContent && <div className="greyCaption">{props.caption2}</div>}
              </div>
            </div>
          </div>
        </Animate>
      <style jsx>{`
        .arrow {
          padding-right: 1.3rem;
        }
        .Image {
          width: 80%;
          padding-left: 12.29%;
        }
        .textAndArrow {
          margin-top: 1.6rem;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .Image {
            width: 80%;
            padding-left: 8%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .Image {
            width: 100%;
            padding-left: 8%;
            padding-right: 8%;
          }
          .textAndArrow {
            margin-top: 1.2rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .Image{
            width: 100%;
            padding-left: 0;
            padding-right: 0%;
          }
          .textAndArrow {
            margin-left: 1.7rem;
          }
          .textAndArrow {
            margin-top: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}

export default OneImage;
