import React from "react";
import Animate from "./animate";
import Image from './Image'
import Video from './video'
import Button from './button'
import {useRouter} from "next/router"
export default  function LandscapeFullScreenVideo(props) {
  let router = useRouter()
  return (
    <>
      <div className="container">
          <Animate>
           <div className="video positionRelative">
                 {props.mediaType === 'image' ?
                    // <Image height={900} width={1440} originalSrc={props.img} alt={"optionalImage"} /> 
                    <Image width={1440} height={900} className="width-100" originalSrc={props.img} alt={"optionalImage"} />
                    : 
                    <Video video={props.video} videoUrl={props.videoUrl} videoUrlMobile={props.videoUrlMobile}/> 
                  }
                 <div className="centerText positionAbsolute alignCenter">
                    {props.shortHeading &&<h2 className="marginBottom16 shortLine mainShortHeading">{props.shortHeading}</h2>}
                    {props.cmsRichContent ? <h1 className="bigHeading heading" dangerouslySetInnerHTML={{__html: props.heading}}></h1> 
                    :
                    <h1 className="bigHeading heading">{props.heading}</h1> 
                    }  
                    {props.buttonText && props.buttonTextOnHover && !!props.img && !!props.link &&
                      <div className="cta cursorPointer" >
                          <Button buttonText={props.buttonText} buttonType="rectangle" textOnHover={props.buttonTextOnHover} onClick={()=>{router.push(props.link)}}/>
                      </div>
                    }
                  </div>
          </div>  
        </Animate>  
      </div>
      <style jsx>{`
        .centerText{
          width: 100%;
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
          z-index:2;
        }
        .shortLine,.heading{
          color:${!!props.enableTextColor?'#ecebea':'#414042 !important'};
        }
      `}</style>
    </>
  )
}
