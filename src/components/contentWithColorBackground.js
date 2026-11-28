import React, { useEffect, useRef} from "react";
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

export default function ContentWithColorBackground(props) {
  // console.log("cmsRichcontent",props.cmsRichContent)
  const shortHeadingRef = useRef();
  const topText1 = useRef();
  const imageRef = useRef();
  const heading = useRef();
  const bigDescRef = useRef();
  const mainShortLeft = useRef();
  const smallHeadingLeft = useRef();
  const leftList = useRef();
  const mainShortRight = useRef();
  const smallHeadingRight = useRef();
  const rightList = useRef();
  
  // console.log("points", props)
  useEffect(()=>{
        
    //   const animationT11 = gsap.timeline();
    //   ScrollTrigger.create({
    //     trigger: shortHeadingRef.current,
    //     animation: animationT11,
    //     start:`top ${scrollTriggerStartValue}`,
    //   });
    //   animationT11.from(shortHeadingRef.current, {
    //     opacity:0,
    //     y:30
    //   });
    //   animationT11.to(shortHeadingRef.current, {
    //     opacity:1,
    //     y:0
    //   });
    //   const animationT12 = gsap.timeline();
    //   ScrollTrigger.create({
    //     trigger: topText1.current,
    //     animation: animationT12,
    //     start:`top ${scrollTriggerStartValue}`,
    //   });
    //   animationT12.from(topText1.current, {
    //     opacity:0,
    //     y:30
    //   });
    //   animationT12.to(topText1.current, {
    //     opacity:1,
    //     y:0
    //   });
      
      
    //   const animationT13 = gsap.timeline();
    //   ScrollTrigger.create({
    //     trigger: bigDescRef.current,
    //     animation: animationT13,
    //     start:`top ${scrollTriggerStartValue}`,
    //   });
    //   animationT13.from(bigDescRef.current, {
    //     opacity:0,
    //     y:30
    //   });
    //   animationT13.to(bigDescRef.current, {
    //     opacity:1,
    //     y:0
    //   });
    //   const animationT14 = gsap.timeline();
    //   ScrollTrigger.create({
    //     trigger: heading.current,
    //     animation: animationT14,
    //     start:`top ${scrollTriggerStartValue}`,
    //   });
    //   animationT14.from(heading.current, {
    //     opacity:0,
    //     y:30
    //   });
    //   animationT14.to(heading.current, {
    //     opacity:1,
    //     y:0
    //   });
      
    //   const animationT17 = gsap.timeline();
    //   ScrollTrigger.create({
    //     trigger: rightList.current,
    //     animation: animationT17,
    //     start:`top ${scrollTriggerStartValue}`,
    //   });
    //   animationT17.from(rightList.current, {
    //     opacity:0,
    //     y:30
    //   });
    //   animationT17.to(rightList.current, {
    //     opacity:1,
    //     y:0
    //   });

    //   const animationT18 = gsap.timeline();
    //   ScrollTrigger.create({
    //     trigger: leftList.current,
    //     animation: animationT18,
    //     start:`top ${scrollTriggerStartValue}`,
    //   });
    //   animationT18.from(leftList.current, {
    //     opacity:0,
    //     y:30
    //   });
    //   animationT18.to(leftList.current, {
    //     opacity:1,
    //     y:0
    //   });
      
     
    // const animationT21 = gsap.timeline();
    // ScrollTrigger.create({
    // trigger: imageRef.current,
    // animation: animationT21,
    // start:`top ${scrollTriggerStartValue}`,
    // });
    // animationT21.from(imageRef.current, {
    //   opacity:0,
    //   y:30,
    // });
    // animationT21.to(imageRef.current, {
    //   opacity:1,
    //   y:0,
    // });

    // const animationT31 = gsap.timeline();
    // ScrollTrigger.create({
    //   trigger: mainShortLeft.current,
    //   animation: animationT31,
    //   start:`top ${scrollTriggerStartValue}`,
    // });
    // animationT31.from(mainShortLeft.current, {
    //   opacity:0,
    //   y:30,
    // });
    // animationT31.to(mainShortLeft.current, {
    //   opacity:1,
    //   y:0,
    // });

    // const animationT32 = gsap.timeline();
    // ScrollTrigger.create({
    //   trigger: mainShortRight.current,
    //   animation: animationT32,
    //   start:`top ${scrollTriggerStartValue}`,
    // });
    // animationT32.from(mainShortRight.current, {
    //   opacity:0,
    //   y:30,
    // });
    // animationT32.to(mainShortRight.current, {
    //   opacity:1,
    //   y:0,
    // });

    // const animationT33 = gsap.timeline();
    // ScrollTrigger.create({
    //   trigger: smallHeadingLeft.current,
    //   animation: animationT33,
    //   start:`top ${scrollTriggerStartValue}`,
    // });
    // animationT33.from(smallHeadingLeft.current, {
    //   opacity:0,
    //   y:30,
    // });
    // animationT33.to(smallHeadingLeft.current, {
    //   opacity:1,
    //   y:0,
    // });

    // const animationT34 = gsap.timeline();
    // ScrollTrigger.create({
    //   trigger: smallHeadingRight.current,
    //   animation: animationT34,
    //   start:`top ${scrollTriggerStartValue}`,
    // });
    // animationT34.from(smallHeadingRight.current, {
    //   opacity:0,
    //   y:30,
    // });
    // animationT34.to(smallHeadingRight.current, {
    //   opacity:1,
    //   y:0,
    // });
  },[])
  return (
    <>
      <div className="content positionRelative">
        <div className="topSection">
        <Animate><div ref={shortHeadingRef} className="marginBottom26 alignCenter mainShortHeading shortHeading">{props.shortHeading}</div></Animate>
          {props.cmsRichContent ?<div ref={topText1} className="marginBottom90 topText1 smallHeading white alignCenter" dangerouslySetInnerHTML={{__html:props.topText}}></div>
          :
          <div ref={topText1} className="marginBottom90 topText1 smallHeading white alignCenter">{props.topText}</div>}
          <div className="items flexItems ">
            <Animate> <div ref={imageRef} className="image"><Image height={500} width={413} alt="Image" className="img width-100" originalSrc={props.singleImage}/></div></Animate>
            <div className="textSectionRight">
            <Animate><div  ref={heading} className="smallHeading bigheading white">{props.heading}</div></Animate>
            <Animate><div ref={bigDescRef} className="bigDesc bigDescriptionLight white">{props.description}</div></Animate>
            </div>
          </div>
                <div className="container flexItems">
                  <div className="left">
                  <Animate><div ref={mainShortLeft} className="marginBottom26 smallheadingLastSection shortHeading mainShortHeading white">{props.shortHeadingLeft}</div></Animate>
                  <Animate><div ref={smallHeadingLeft} className="marginBottom55 heading smallHeading white">{props.smallHeadingLeft}</div></Animate>
                  <Animate>
                    <ul ref={leftList} className="listStyleNone unorderedList">
                      {props.pointsLeft.map((point,index)=>{
                        return (
                          <li  className="listItem flexItems"  key={index}>
                            <div className="dotWrapper"><div className="dot"></div></div>
                            <div className="pointItem description white">{point.pointItem}</div>
                          </li>
                        )
                      })}
                    </ul>
                  </Animate>
                  </div>
                  <div className="right">
                  <Animate><div ref={mainShortRight} className="marginBottom26 smallheadingLastSection shortHeading mainShortHeading">{props.shortHeadingRight}</div></Animate>
                  <Animate><div ref={smallHeadingRight} className="marginBottom55 headingRight smallHeading white">{props.smallHeadingRight}</div></Animate>
                  <Animate><ul ref={rightList} className="listStyleNone unorderedList">
                    {props.pointsRight.map((point,index)=>{
                        return (
                          <li  className="listItem flexItems" key={index}>
                            <div className="dotWrapper"><div className="dot"></div></div>
                            <div className="pointItem description white">{point.pointItem}</div>
                          </li>
                        )
                      })}
                    </ul>
                    </Animate>
                  </div>
                 
                </div>
        </div>
      </div>
      <style jsx>{`
      .shortHeading{
        color: #fff
      }
        .content {
          background: #24402c;
        }
        .dotWrapper{
          width:5%;
        }
        .dot{
          width:7px;
          height:7px;
          border-radius:50%;
          background:#FF6A00;
        }
        .pointItem{
          width:95%;
        }
        .bigheading {
          margin-bottom: 2rem;
        }
        .heading, .headingRight {
          padding-bottom: 3.5rem;
          border-bottom: 1px solid #FFFFFF;
        }
        .bigDesc {
          padding-right: 2%; 
        }
        .container {
          padding:0 12.29% 11.5rem;
          margin-right: -6.9%;
        }
        .left,.right {
          width: 50%;
          padding-right: 6.9%;
        }
        .unorderedList li{
          margin-bottom:2.9rem;
          align-items:center;
        }
        .unorderedList li:last-child{
          margin-bottom:2.9rem;
        }
        .topSection {
          padding-top: 11rem;
        }
        .image{
          width: 40%;
          padding: 0 ;
          margin-right: 19%; 
        }
        .items {
          padding: 0 19% 12.5rem 9.1%;
        }
        .textSectionRight {
          width: 50%;
          margin-top: 5%;
        }
        .textSectionRight {
          padding-top: 0;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .bigDesc {
            padding-right: 0;
            margin-right:-4%; 
          } 
          .textSectionRight {
            margin-top: 2%;
          }
          .container {
            padding:0 11% 10rem;
            margin-right: -6.9%;
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .textSectionRight {
            margin-top: 2%;
          }
          .items {
            padding: 0 14% 9rem 9.1%;
          }
          .image{
            width: 40%;
            padding: 0 ;
            margin-right: 15%; 
          }
          .container {
            padding:0 10% 10rem;
            margin-right: -6.9%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .content {
            background: #24402c;
          }
          .twoText,.container {
            display: block;
          }
          .container {
            padding: 0 18.6% 12.9rem;
            margin-right: 0;
          }
          .items {
            padding: 0 9.7% 9rem;
          }
          .bigheading {
            margin-bottom: 2rem;
            padding-right: 3%;
          }
          .heading, .headingRight {
            padding-bottom: 3.05rem;
          }
          .left,.right{
            width:100%;
            padding-right: 0;
          }
          .topSection {
            padding-top: 7.8rem;
          }
          .image{
            width: 40%;
            padding: 0;
            margin-right: 5.3%; 
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
          .content {
            background-color: #24402c;
          }
          .container {
            padding: 0 13.6% 6rem;
            margin-right: 0;
          }
          .heading, .headingRight {
            padding-bottom: 1.6rem;
          }
          .topSection {
            padding-top: 4.5rem;
          }
          .image{
            width: 100%;
            padding: 0 ;
            margin-right: 0%; 
            margin-bottom: 0rem;
            padding: 0 5.6%;
          }
          .textSectionRight {
            width: 100%;
            padding-top: 3rem;
          }
          .items {
            display: block;
            padding:0 0.48% 6rem;
          }
          .bigheading {
            text-align: center;
            padding: 0 13.6%;
            margin-bottom:1.3rem;
          }
          .bigDesc {
            padding: 0 13.6%;
            text-align: center;
          }
          .twoText {
            display: block;
          }        
        }
      `}</style>
    </>
  );
}