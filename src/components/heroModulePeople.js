import React from "react";
import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT, paddedContentLeftTablet, TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Image from "./Image";
export default function HeroModulePeople(props) {
  return (
    <>
      <div className="container">
        <div className="hero flexItems">
          <div style={{animationDelay:"0.1s"}} className="image fadeUpAnimation">
            <Image height={516} width={774} alt="hero" className=" width-100 " originalSrc={props.image} />
          </div>
          <div className="wrapper">
            <div style={{animationDelay:"0.2s"}} className="shortHeading mainShortHeading fadeUpAnimation marginBottom26 black">{props.shortHeading}</div>
            <div style={{animationDelay:"0.3s"}} className="mainHeading bigHeading fadeUpAnimation marginBottom16 black">{props.heading}</div>
            <div style={{animationDelay:"0.4s"}} className="desc bigDescription grey fadeUpAnimation marginBottom30 black">{props.description}</div>
            <p style={{animationDelay:"0.5s"}} className="shortHeadingReadOn readMoreButton moderatRegular font15 grey cursorPointer fadeUpAnimation">{props.label}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero{
          padding:0 7.2% 0 4.6%;
        }
        .shortHeading{
          margin-top:2rem;
        }
        .image{
          width:61%;
        }
        .wrapper{
          width:39%;
          padding-right: 4%;
          padding-left: 4%;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .wrapper{
            padding-right: 0%;
            padding-left: 3%;
          }
          .shortHeading{
            margin-top:0rem;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .hero{
            padding: 0 9.2% 0 4.6%;
            align-items:center;
          }
          .image{
            width:57%;
          }
          .wrapper{
            width:43%;
            padding-right: 0%;
            padding-left: 4%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .hero{
            padding:10rem 0 0 0;
            display:block;
          }
          .mainHeading{
            padding: 0 10%;
          }
          .image{
            width:100%;
            margin-bottom:4.8rem;
          }
          .wrapper{
            width:100%;
            padding:0 2.7rem;
            text-align:center;
          }
        }
      `}</style>
    </>
  );
}
