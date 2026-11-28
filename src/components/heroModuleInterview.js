import React,{ useEffect, useRef, useState,useContext} from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";

function HeroModuleInterview(props) {

  return (
    
    <>
    <div className="topContainer">
       <div className="container">
              <div className="centerText alignCenter">
                <h2 style={{animationDelay:"0.2s"}} className="marginBottom16 fadeUpAnimation shortLine mainShortHeading ">{props.shortHeading}</h2>
                <div style={{animationDelay:"0.3s"}} className="marginBottom55 fadeUpAnimation mainheading bannerHeading lpItalic">{props.topText1_1}<span style={{animationDelay:"0.4s"}} className="fadeUpAnimation"> {props.topText1_2} </span><span style={{animationDelay:"0.5s"}} className="fadeUpAnimation lpItalic">{props.topText1_3}</span></div>
                <div className="marginBottom55 image">
                  <img style={{animationDelay: "0.6s"}} alt="Image" className="fadeUpAnimation img width-100" src={props.img} />
                </div>
                <div style={{animationDelay:"0.7s"}} className="marginBottom26 text fadeUpAnimation desc greyCaption" dangerouslySetInnerHTML={{__html:props.desc}}></div>
                <div style={{animationDelay:"0.8s"}} className="svgImage smallIcons flexItems">
                  <img alt="Image" className="fb" src={props.facebook_image}/>
                  <img alt="Image" className="twitter" src={props.twitter_image}/>
                  <img alt="Image" className="pintrest" src={props.pintrest_image}/>
                  <img alt="Image" className="mail" src={props.mail_image}/>
                </div>
              </div>
        </div>
      </div>
      <style jsx>{`
        .topContainer {
          // height: 100vh;
          // display: flex;
          // justify-content: center;
          // align-items: center;
          padding-top: 25rem;
        }
        .smallIcons {
          justify-content: center;
          margin-right: -2.5rem;
        }
        .fb,.twitter,.pintrest,.mail {
          padding-right: 2.5rem;
        }
        .mainheading {
          padding: 0 30%;
          color: #000;
        }          
        .image {
          padding: 0 35%;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .mainheading {
            padding: 0 28%; 
          }
          .image {
            padding: 0 32%;
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .image {
            padding: 0 30%;
          }
          .mainheading {
            padding: 0 20%; 
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .image {
            padding: 0 20%;
          }
          .mainheading {
            padding: 0 25%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .mainheading {
            padding: 0 14%;
          }
          .topContainer {
            padding-top: 15rem;
          }
        }
      `}</style>
    </>
  );
}

export default HeroModuleInterview;
