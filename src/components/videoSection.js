import React, { useRef, useState, useEffect } from 'react'
import Button from './button'
import Image from "./Image";
import useOnScreen from '../hooks/useOnScreen'
import {MOBILE_BREAKPOINT} from '../config'

export default function VideoSection(props) {
    const [hideContent, setHideContent] = useState(false)
    const videoRef = useRef(null)
    const videoIsOnScreen = useOnScreen(videoRef)
    useEffect(()=>{
        if(hideContent){
            videoRef.current.play()
        } 
    },[hideContent])
    function onPause(){
        setHideContent(false)
    }
    // useEffect(()=>{
    //     videoRef.current.addEventListener("pause",onPause)
    //     return ()=>{
    //         if(videoRef.current)
    //         videoRef.current.removeEventListener("pause",onPause)
    //     }
    // },[])
    useEffect(() => {
        if(!videoIsOnScreen && !!videoRef.current){
            videoRef.current.pause()
        }
    },[videoIsOnScreen])
    function videoFinishedPlaying(){
        setTimeout(() => {
            setHideContent(false)
        }, 1000);
    }
    return (
        <>

            <div className="positionRelative videoSection">
                <div className="video">  
                    <video onEnded={()=>videoFinishedPlaying()} className="width-100"  controls={true} ref={videoRef} playsInline>
                        <source src={props.videoUrl} type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </div>
                <div  className={`bannerImage positionAbsolute ${hideContent?"hide":""}`}>
                    <Image height={950} width={1440}  alt="video placeholder" className="width-100 height-100" originalSrc={props.mainImg}/>
                </div>
                <div className={`videoPauseContent positionAbsolute ${hideContent?"hide":""}`}>                    
                    <div className="videoPauseContentWrapper alignCenter lesserAdditionalPadding">
                        <div className="shortHeading mainShortHeading richText mbBelowShortHeading">{props.shortHeading}</div>
                        {props.cmsRichContent?
                            <h1 className="mainHeading bigHeading alignCenter" dangerouslySetInnerHTML={{__html:props.mainHeading}}></h1>
                        :
                            <h1 className="mainHeading bigHeading alignCenter">{props.mainHeading}</h1>
                        }
                        <div className="ctaContent">
                           {!!props.buttonText && props.buttonTextOnHover &&<div  onClick={() => setHideContent(true)} className="cta ctaAbove positionRelative">
                                <Button buttonType="rectangleButton" buttonText={props.buttonText} textOnHover={props.buttonTextOnHover}/>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .videoPauseContent{
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    z-index:3;
                }
                .videoPauseContentWrapper{
                    display:flex;
                    flex-flow:column wrap;
                    justify-content:center;
                    height:100%;
                }
                .cta{
                    display:inline-block;
                }
                .bannerImage{
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index:2;
                }
                .videoPauseContent.hide{
                    opacity:0;
                    pointer-events:none;
                }
                .bannerImage.hide{
                    opacity:0;
                    pointer-events:none;
                }
                .shortHeading,.mainHeading{
                    color:${!!props.enableTextColor?'#ffffff':'#414042 !important'};
                }
                .videoPauseContentWrapper{
                    top: 50%;
                    left: 25%;
                    z-index: 999;
                }
                .hideImage{
                    display:none;
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .mainHeading.bigHeading{
                        font-size: 2rem;
                        line-height: 3rem;
                    }
                }
            `}</style>
        </>
    )
}