import React from "react";
import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT,MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

function Intepret(props) {

  return (
    <>
      <div className="container flexItems lesserAdditionalPadding">
        <div className="textArea">
          <Animate><div className="mainShortHeading mbBelowShortHeading ">{props.shortHeading}</div></Animate>
          <Animate>
            {props.cmsRichContent ?
              <div className="smallHeading heading black richText mbHeading" dangerouslySetInnerHTML={{__html:props.smallHeading}}></div>
            :
              <div className="smallHeading heading black richText mbHeading">{props.smallHeading}</div>
            }
          
          </Animate>
          {!!props.cmsRichContent && <Animate><div className="firstDescription" dangerouslySetInnerHTML={{__html: props.description}}></div></Animate>}
          {!props.cmsRichContent && <Animate><div className="firstDescription">{props.description}</div></Animate>}
        </div>
        <div className="image"><Animate><Image height={557} width={418} alt="Image" className=" img width-100" originalSrc={props.image}/></Animate></div>
      </div>
      <style jsx>{`
        .container {
        }
        .textArea{
          width:50%;
          padding-right: 5%;
        }
        .image{
          width:50%;
        }
        .heading{
          padding-right:9%;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .container {
          }
          .textArea{
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .container {
          }
          .textArea,{
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
              flex-direction: column-reverse;
              margin-right:0;
          }
          .image{
            margin-bottom: 2rem;
          }
          .textArea,.image{
            width:100%;
            text-align: center;
            padding-right: 0%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
        }
      `}</style>
    </>
  );
}

export default Intepret;
