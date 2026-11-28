import React,{ useEffect, useRef} from "react";
import { TABLET_LANDSCAPE_BREAKPOINT, TABLET_BREAKPOINT,MOBILE_BREAKPOINT,scrollTriggerStartValue} from "../config";
import Animate from "./animate";
import Image from "./Image";
import Video from "./video";

function VideoWithTwoStepText(props) {

const shortHeadingref = useRef()
const imageRef = useRef()
const headingRef = useRef()
const desc3Ref = useRef()

  return (
    <>
      <div className="container lesserAdditionalPadding">
          {props.displayShortHeadingFirst ? 
          <div className={`text`}>
            {!!props.shortHeading && <Animate><div  className="shortHeading mainShortHeading alignCenter richText mbBelowShortHeading">{props.shortHeading}</div></Animate>}
            {!!props.heading && <Animate><div className="heading bigHeading alignCenter richText black mbHeading">{props.heading}</div></Animate>}
          </div>
          :
          <div className={`text`}>
            {!!props.heading && <Animate><div className={`heading bigHeading alignCenter richText black ${!!props.shortHeading?"mbBelowShortHeading":"mbHeading"}`}>{props.heading}</div></Animate>}
            {!!props.shortHeading && <Animate><div  className="shortHeading mainShortHeading alignCenter richText mbHeading">{props.shortHeading}</div></Animate>}
          </div>
          }
            
            <div className="imageOrVIdeo marginBottom55 ">
                {props.mediaType =="image"?  <Animate><div  className="image"><Image height={539} width={1086} alt="image" originalSrc={props.img}/></div></Animate> :
                <Animate><div  className="video"><Video video={props.video} videoUrl={props.videoUrl} videoUrlMobile={props.videoUrlMobile} /></div></Animate>}
            </div>
          {!!props.cmsRichContent && <Animate><div className="desc alignCenter" dangerouslySetInnerHTML={{__html: props.description}}></div></Animate>}
          {!props.cmsRichContent && <Animate><div className="desc alignCenter">{props.description}</div></Animate>}
      </div> 
        <style jsx>{`
        .desc{
          width:860px;
          max-width:100%;
          margin:0 auto;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px){
          .desc{
            width:100%;
            padding: 0 11%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px){
          .desc{
            padding: 0 8%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
          .desc{
            padding:0;
          }
          .video{
            padding:0;
          }
        }
        `}</style>
    </>
  )
}

export default VideoWithTwoStepText
