import React, { useRef,useContext,useEffect } from "react";
import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,lineAnimationTiming, scrollTriggerStartValue} from "../config";
import Animate from "./animate"
import Image from "./Image";

export default function LivingWage(props) {
 
  return (
    <>
      <div className="container lesserAdditionalPaddingLeft">
        <div className="topSection flexItems">
          <div className="textArea">
            <Animate><div className="mainShortHeading marginBottom26">{props.shortHeading}</div></Animate>
            <Animate><div className="smallHeading marginBottom26">{props.smallHeading}</div></Animate>
            <Animate><div className="desc1 description marginBottom26">{props.description}</div></Animate>
            <Animate><div className="desc2 description">{props.description2}</div></Animate>
          </div>
          <div  className="image">
            <Animate>
            <Image height={362} width={543} alt="image" className="img width-100" originalSrc={props.image} />
            {props.cmsRichContent == true && <div className="greyCaption" dangerouslySetInnerHTML={{__html: props.caption}}></div>}
            {!props.cmsRichContent  && <div className="greyCaption" >{props.caption}</div>}
            </Animate>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding-right: 6.6rem;
        }
        .smallHeading {
          margin-right: 10%;
        }
        .description {
          font-family: moderatLight, sans-serif;
        }
        .desc1 {
          margin-right: 30%;
        }
        .desc2 {
          margin-right: 30%;
        }
        .image {
          //width: 100%;
          padding-top: 6.1rem;
          
          flex: 1 0 42%;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .desc1 {
            margin-right: 15%;
          }
          .desc2 {
            margin-right: 15%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            padding:0 9.7%;
          }
          .smallHeading {
            margin-right: 2.6rem;
          }
          .description {
            font-family: moderatLight, sans-serif;
          }
          .desc1 {
            margin-right: 3.2rem;
          }
          .desc2 {
            display: block;
            margin-right: -18.2rem;
          }
          .image {
            // width: 200%;
            padding-top: 8%;
            flex: 1 0 40%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .container {
            padding:0 0%;
          }
          .topSection {
            flex-direction: column-reverse;
          }
          .image {
            order: 1;
            width: 100%;
            margin-bottom: 2.9rem;
            padding-top: 0;
            padding-right: 0;
          }
          .textArea {
            padding-left: 3rem;
            padding-right: 3rem;
          }
          .desc1 {
            margin-right: 0rem;
          }
          .desc2 {
            margin-right: 0rem;
          }
        }
      `}</style>
    </>
  );
}
