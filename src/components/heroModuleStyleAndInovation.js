import React, { useEffect, useRef, useState,useContext } from "react";import LongArrow from "./longArrow";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT,lineAnimationTiming} from "../config";
import Space from "../components/space";
import Image from "./Image"

function HeroModuleStyleAndInovation(props) {
  return (
    <>
    <div className="topContainer">
        <div className="container alignCenter">
          <h2 style={{animationDelay:"0.1s"}}  className="marginBottom26 shortLine mainShortHeading fadeUpAnimation">{props.category}</h2>
          {props.cmsRichContent == true && <div style={{animationDelay:"0.2s"}} className="marginBottom26 mainHeading bannerHeading fadeUpAnimation" dangerouslySetInnerHTML={{__html:props.topText}}></div>}
          {!props.cmsRichContent && <div style={{animationDelay:"0.2s"}} className="marginBottom26 mainHeading bannerHeading fadeUpAnimation">{props.topText}</div>}
         {props.image == true && <div className="marginBottom55 image"><Image height={527} width={420}  style={{animationDelay: "0.6s"}} alt="Image" className="fadeUpAnimation img width-100" originalSrc={props.img}/></div>}
         {/* {!props.image && <div className="marginBottom55 image"><img style={{animationDelay: "0.6s"}} alt="Image" className="fadeUpAnimation img width-100" src={props.img}/></div>} */}
         {props.cmsRichContent == true && <div style={{animationDelay:"0.3s"}} className="marginBottom26 text fadeUpAnimation desc greyCaption" dangerouslySetInnerHTML={{__html:props.desc}}></div>}
         {!props.cmsRichContent && <div style={{animationDelay:"0.3s"}} className="marginBottom26 text fadeUpAnimation desc greyCaption">{props.desc}</div>}
          <div className="svgImage flexItems">
            <div style={{animationDelay:"0.4s"}} className="fadeUpAnimation"><img alt="Image" className="fb" src={props.facebook_image} /></div>
            <div style={{animationDelay:"0.5s"}} className="fadeUpAnimation"><img alt="Image" className="twitter" src={props.twitter_image}/></div>
            <div style={{animationDelay:"0.6s"}} className="fadeUpAnimation"><img alt="Image" className="pintrest" src={props.pintrest_image}/></div>
            <div style={{animationDelay:"0.7s"}} className="fadeUpAnimation"><img alt="Image" className="mail" src={props.mail_image}/></div>
          </div>
        </div>
      </div>
      <style jsx>{`
          .topContainer {
            padding-top:25rem;
          }
          .fb,.twitter,.pintrest,.mail {
            padding-right: 2.5rem;
          }
          .svgImage {
            justify-content: center;
            margin-right: -2.5rem;
          }
          .shortLine {
            color: #020202;
          }
          .mainHeading {
            color: #020202;
            padding: 0 22%;
          }
          .image {
            padding: 0 35%;
          }
          @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
            .image {
            }
            .topContainer{
              padding=top:30rem;
            }
          }
          @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px){
            .topContainer{
              padding-top:20rem ;
            }
          }
          @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
            .topContainer{
              padding-top:20rem ;
            }
            .mainHeading {
              padding:0 17%;
            }
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .mainHeading {
              padding: 0 15.2%;
            }
          }
        `}
      </style>
    </>
  );
}

export default HeroModuleStyleAndInovation;
