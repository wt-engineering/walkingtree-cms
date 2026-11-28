import React, { useRef } from "react";
import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT, MEDIUM_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT, scrollTriggerStartValue } from "../config";
import Image from "./Image";
import Animate from "./animate";

function ChampioningWomen(props) {
  const shortHeadingRef = useRef();
  const shortHeadingMobileRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const headingRef = useRef();
  const headingMobileRef = useRef();
  const desc1Ref = useRef();
  const desc2Ref = useRef();
  const desc1MobileRef = useRef();
  const desc2MobileRef = useRef();


  // useEffect(()=>{
  //     const animationT1 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: shortHeadingRef.current,
  //       animation: animationT1,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT1.from(shortHeadingRef.current, {
  //       opacity:0,
  //       y:30,
  //     });
  //     animationT1.to(shortHeadingRef.current, {
  //       opacity:1,
  //       y:0,
  //     });

  //     const animationT2 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: shortHeadingMobileRef.current,
  //       animation: animationT2,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT2.from(shortHeadingMobileRef.current, {
  //       opacity:0,
  //       y:30,
  //     });
  //     animationT2.to(shortHeadingMobileRef.current, {
  //       opacity:1,
  //       y:0,
  //     });

  //     const animationT3 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: image1Ref.current,
  //       animation: animationT3,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT3.from(image1Ref.current, {
  //       opacity:0,
  //       y:30,
  //     });
  //     animationT3.to(image1Ref.current, {
  //       opacity:1,
  //       y:0,
  //     });

  //     const animationT4 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: image2Ref.current,
  //       start:`top ${scrollTriggerStartValue}`,
  //       animation: animationT4,
  //     });
  //     animationT4.from(image2Ref.current, {
  //       opacity:0,
  //       y:30,
  //     });
  //     animationT4.to(image2Ref.current, {
  //       opacity:1,
  //       y:0,
  //     });

  //     const animationT5 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: image3Ref.current,
  //       animation: animationT5,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT5.from(image3Ref.current, {
  //       opacity:0,
  //       y:30,
  //     });
  //     animationT5.to(image3Ref.current, {
  //       opacity:1,
  //       y:0,
  //     });

  //     const animationT6 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: headingRef.current,
  //       animation: animationT6,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT6.from(headingRef.current, {
  //       opacity:0,
  //       y:30
  //     });
  //     animationT6.to(headingRef.current, {
  //       opacity:1,
  //       y:0
  //     });

  //     const animationT7 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: headingMobileRef.current,
  //       animation: animationT7,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT7.from(headingMobileRef.current, {
  //       opacity:0,
  //       y:30
  //     });
  //     animationT7.to(headingMobileRef.current, {
  //       opacity:1,
  //       y:0
  //     });

  //     const animationT8 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: desc1Ref.current,
  //       animation: animationT8,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT8.from(desc1Ref.current, {
  //       opacity:0,
  //       y:30
  //     });
  //     animationT8.to(desc1Ref.current, {
  //       opacity:1,
  //       y:0
  //     });

  //     const animationT9 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: desc2Ref.current,
  //       animation: animationT9,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT9.from(desc2Ref.current, {
  //       opacity:0,
  //       y:30
  //     });
  //     animationT9.to(desc2Ref.current, {
  //       opacity:1,
  //       y:0
  //     });

  //     const animationT10 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: desc1MobileRef.current,
  //       animation: animationT10,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT10.from(desc1MobileRef.current, {
  //       opacity:0,
  //       y:30
  //     });
  //     animationT10.to(desc1MobileRef.current, {
  //       opacity:1,
  //       y:0
  //     });

  //     const animationT11 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: desc2MobileRef.current,
  //       animation: animationT11,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT11.from(desc2MobileRef.current, {
  //       opacity:0,
  //       y:30
  //     });
  //     animationT11.to(desc2MobileRef.current, {
  //       opacity:1,
  //       y:0
  //     });
    
  // },[])
  
  return (
    <>
      <div className="container lesserAdditionalPaddingLeft">
        <div className="textArea hideForMobile">
          <Animate><div ref={shortHeadingRef} className="shortHeading mainShortHeading marginBottom26">{props.shortHeading}</div></Animate>
          <Animate><div ref={headingRef} className="heading smallHeading marginBottom30">{props.smallHeading}</div></Animate>
          <div className="twoText flexItems">
            <div className="leftText">
              <Animate><div ref={desc1Ref} className="description">{props.descriptionLeft}</div></Animate>
            </div>
            <div className="rightText">
              <Animate><div ref={desc2Ref} className="descMobile grey bigDescription">{props.descriptionRight}</div></Animate>
            </div>
          </div>
        </div>
        <div className="imageSection flexItems">
          <div className="mobileTextFirst showForMobile">
          <Animate><div ref={shortHeadingMobileRef} className="shortHeading mainShortHeading marginBottom26">{props.shortHeading}</div></Animate>
          <Animate> <div ref={headingMobileRef} className="heading smallHeading marginBottom30">{props.smallHeading}</div></Animate>
          <Animate><div ref={desc1MobileRef} className="description">{props.descriptionLeft}</div></Animate>
          </div>
          <Animate><div ref={image1Ref} className="image1">
            <Image height={433}width={347} alt="Image" className="img width-100" originalSrc={props.image1} />
            {props.cmsRichContent == true && <div className="greyCaption" dangerouslySetInnerHTML={{__html: props.caption1}}></div>}
            {!props.cmsRichContent && <div className="greyCaption">{props.caption1}</div>}
          </div></Animate>
          <Animate><div ref={image2Ref} className="image2">
            <Image height={433}width={347} alt="Image" className="img width-100" originalSrc={props.image2} />
            {props.cmsRichContent == true && <div className="greyCaption" dangerouslySetInnerHTML={{__html: props.caption2}}></div>}
            {!props.cmsRichContent  && <div className="greyCaption">{props.caption2}</div>}
          </div></Animate>
          <Animate><div ref={desc2MobileRef} className="desc2Mobile grey bigDescription showForMobile">{props.descriptionRight}</div></Animate>
          <Animate><div ref={image3Ref} className="image3">
            <Image height={433} width={347} alt="Image" className="img width-100" originalSrc={props.image3} />
            {props.cmsRichContent == true && <div className="greyCaption" dangerouslySetInnerHTML={{__html: props.caption3}}></div>}
            {!props.cmsRichContent && <div className="greyCaption" >{props.caption3}</div>}
          </div></Animate>
        </div>
      </div>
      <style jsx>{`
        .container{
          padding-right:9.9%;
        }
        .twoText{
          margin-bottom:5.5rem;
        }
        .imageSection{
          margin-right:-3.8rem;
        }
        .imageSection > div{
          width:33.33%;
          padding-right:3.8rem;
        }
        .leftText{
          padding-right:8%;
        }
        .twoText > div{
          width:50%;
        }
        .heading{
          padding-right: 60%;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .heading{
            padding-right: 50%;
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .heading{
            padding-right: 45%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container{
            padding-right:9.7%;
            padding-left:9.7%;
          }
          .leftText{
            padding-right:0%;
          }
          .heading{
            padding-right: 0%;
          }
          .twoText > div{
            width:100%;
          }
          .twoText{
            display:block;
            margin-bottom:4.5rem;
            padding-right:11%;
          }
          .leftText{
            margin-bottom:3rem;
          }
          .textArea{
            padding-right: 5%;
          }
          .imageSection{
            margin-right:-2rem;
          }
          .imageSection > div{
            width:33.33%;
            padding-right:2rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .imageSection{
            display:block;
            margin-right:0rem;
          }
          .imageSection > div{
            width:100%;
            padding-right:0rem;
          }
          .container{
            padding-right:2.1rem;
            padding-left:2.1rem;
          }
          .description,.desc2Mobile{
            margin-bottom:3rem;
          }
          .image1,.image2{
            margin-bottom:3rem;
          }
          .mobileTextFirst,.desc2Mobile{
            padding: 0 2%;
          }
        }
      `}</style>
    </>
  );
}

export default ChampioningWomen;
