import React, { useEffect, useRef } from "react";
import LongArrow from "./longArrow";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate"

export default function MeetTheTeam(props) {
  const shortHeadingRef = useRef();
  const teamDescRef = useRef();
  const leftImageWithCaption = useRef();
  const leftTextDescRef = useRef();
  const rightImageRef = useRef();

  // useEffect(() => {
  //     const animationT16 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: shortHeadingRef.current,
  //       animation: animationT16,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT16.from(shortHeadingRef.current, {
  //       opacity: 0,
  //       y: 30,
  //     });
  //     animationT16.to(shortHeadingRef.current, {
  //       opacity: 1,
  //       y: 0,
  //     });

  //     const animationT19 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: teamDescRef.current,
  //       animation: animationT19,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT19.from(teamDescRef.current, {
  //       opacity: 0,
  //       y: 30,
  //     });
  //     animationT19.to(teamDescRef.current, {
  //       opacity: 1,
  //       y: 0,
  //     });

  //     const animationT17 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: leftImageWithCaption.current,
  //       animation: animationT17,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT17.from(leftImageWithCaption.current, {
  //       opacity: 0,
  //       y: 30,
  //     });
  //     animationT17.to(leftImageWithCaption.current, {
  //       opacity: 1,
  //       y: 0,
  //     });

  //     const animationT1 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: leftTextDescRef.current,
  //       animation: animationT1,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT1.from(leftTextDescRef.current, {
  //       opacity: 0,
  //       y: 30,
  //     });
  //     animationT1.to(leftTextDescRef.current, {
  //       opacity: 1,
  //       y: 0,
  //     });

  //     const animationT2 = gsap.timeline();
  //     ScrollTrigger.create({
  //       trigger: rightImageRef.current,
  //       animation: animationT2,
  //       start:`top ${scrollTriggerStartValue}`,
  //     });
  //     animationT2.from(rightImageRef.current, {
  //       opacity: 0,
  //       y: 30,
  //     });
  //     animationT2.to(rightImageRef.current, {
  //       opacity: 1,
  //       y: 0,
  //     });
  // }, []);
  return (
    <>
      <div className="container">
        <div className="topText alignCenter">
          <Animate> <h2 className="marginBottom26 shortHeading mainShortHeading black">{props.shortHeading}</h2></Animate>
          <Animate><h1 className="marginBottom90 textArea bigDescription black">{props.text1}</h1></Animate>
        </div>
        <div className="imageAndTextSection flexItems">
          <div className="leftImage1">
            <Animate>
            <div className="marginBottom30 leftImageWithCaption">
              <div className=" leftImage width-100 marginBottom16"><Image height={487} width={365} alt="Image"  originalSrc={props.leftImage}/></div>
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
                    marginTop="7px"
                  />
                </div>
              {props.cmsRichContent == true && <div className="text greyCaption" dangerouslySetInnerHTML={{__html:props.caption}}></div>}
              {!props.cmsRichContent && <div className="text" >{props.caption}</div>}
              </div>
            </div>
            </Animate>
            <Animate><div ref={leftTextDescRef} className="hideForMobile text2 description black"> {props.text2}</div></Animate>
          </div>
          <Animate>
            <div className="right">
            <div className="rightImage">
              <Image height={692} width={642} alt="Image" className="rightImageMain width-100" originalSrc={props.rightImage}/>
              <div className="showForMobile textMobile description alignCenter black">{props.text2}</div>
            </div>
          </div>
          </Animate>
        </div>
      </div>
      <style jsx>{`
        .textAndArrow .arrow {
          margin-right: 1.3rem;
        }
        .imageAndTextSection {
          padding-left: 12.29%;
          padding-right: 12.29%;
          margin-right: -5.55%;
        }
        .textArea {
          margin-left:19%;
          margin-right:19%;
        }
        .right {
          width: 59%;
          flex:1 1 70%;
          padding-right: 5.55%;
        }
        .leftImage1 {
          width: 41%;
          padding-right: 5.55%;
        }
        @media screen and (max-width:${MEDIUM_BREAKPOINT}px) {
          .imageAndTextSection {
            padding-left: 8%;
            padding-right: 8%;
          }
        }
        @media screen and (max-width:${TABLET_BREAKPOINT}px) {
          .textArea {
            margin-left:8%;
            margin-right:8%;
          }
          .imageAndTextSection{
            margin-right: -3.59%;
          }
          .leftImage1 {
            width: 35%;
            padding-right: 3.59%;
          }
          .right {
            width: 60%;
            flex:1 1 70%;
            padding-right: 3.59%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .textArea {
            margin-left: 5.6%;
            margin-right: 5.6%;
          }
          .imageAndTextSection {
            display: block;
            padding: 0 5.6%;
          }
          .leftImage1 {
            width: 100%;
            padding-right: 0;
          }
          .right {
            width: 100%;
            padding-right: 0;
          }
          .rightImageMain {
            margin-bottom: 4.1rem;
          }
        }
      `}</style>
    </>
  );
}
