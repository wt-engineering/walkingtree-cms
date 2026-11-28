
import Button from "./button";
import React,{useRef} from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

export default function TextImageSection(props) {
  const text1Ref=useRef()
  const text2Ref=useRef()
  const text3Ref=useRef()
  const buttonWrapRef=useRef()
  const rightImageSectionRef=useRef()

  return (
    <>
      <div className="textImageSection flexItems">
        <div className="leftTextSection">
          <div className="leftContainer">
            <Animate><h1 className="text1 bigHeading marginBottom30 hideForMobile black" ref={text1Ref}>{props.text1}</h1></Animate>
            <Animate><p className="text2 bigDescription grey marginBottom55" ref={text2Ref}>{props.text2}</p></Animate>
            <Animate><p className="text3 description marginBottom55" ref={text3Ref}>{props.text3}</p></Animate>
            <Animate>
              <div className="buttonWrap" ref={buttonWrapRef}>
                <Button
                  buttonText={props.buttonText}
                  textOnHover={props.buttonTextOnHover}
                  buttonType="rectangle"
                />
              </div>
            </Animate>
          </div>
        </div>
        <div className="rightImageSection" ref={rightImageSectionRef}>
          <Animate>
            <h1 className="text1 bigHeading marginBottom30 showForMobile alignCenter black">{props.text1}</h1> 
            <div className="rightImgContainer marginBottom15">
              <Image
                  alt={"Image"} 
                  originalSrc={props.img} 
                  width={529} 
                  height={794} 
              />
            </div>
            {props.cmsRichContent == true && <div className="greyCaption" dangerouslySetInnerHTML={{__html: props.caption}}></div>}
            {!props.cmsRichContent && <div className="greyCaption" >{props.caption}</div>}
          </Animate>
        </div>
      </div>
      <style jsx>{`
        .textImageSection {
          padding: 0rem 12.29% 0rem;
        }
        .leftTextSection,
        .rightImageSection {
          width: 50%;
        }
        .leftContainer {
          padding-right: 18%;
        }
        .text2 {
          padding-right: 30px;
        }
        .text3 {
          padding-right: 20px;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .textImageSection {
            padding: 0rem 7% 0rem 7%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .textImageSection {
            padding: 0rem 9.7% 0;
          } 
          .leftTextSection,
          .rightImageSection {
            width: 50%;
          }
          .text1 {
            margin-right: 0rem;
          }
          .text2 {
            padding-right: 0;
          }
          .text3 {
            padding-right: 0;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .leftTextSection,
          .rightImageSection {
            width: 100%;
          }
          .leftContainer {
            padding-right: 0%;
            text-align: center;
          }
          .textImageSection {
            padding: 0rem 2.1rem;
            flex-direction: column-reverse;
          }
          .rightImageSection {
            margin-bottom: 3.4rem;
          }
          .text2 {
            padding: 0 0%;
          }
          .text3 {
            padding: 0 0%;
          }
        }
      `}</style>
    </>
  );
}
