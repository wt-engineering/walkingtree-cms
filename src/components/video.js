import React, { useState, useEffect,useRef } from 'react'
import { MOBILE_BREAKPOINT } from '../config';
import {connect} from 'react-redux'
import Button from './button';
import VideoSection from './videoSection';
function Video(props){
    const videoRef=useRef(null);
    const [videoOnScreen,setVideoOnScreen]=useState(props.heroImage?true:false)
    const [showPlayIcon,setShowPlayIcon]=useState(true)
    const [controlsShown,showControls] = useState(false)
    const [placeholderDesktop,setPlaceholderDesktop] = useState(null)
    const [placeholderMobile,setPlaceholderMobile] = useState(null)
    const [mute,setMute] = useState(true)
    const [videoLoaded, setVideoLoaded] = useState(false)
    const [displayMuteButton,setDisplayMuteButton] = useState(true)
    // console.log("video", props);
    function onLoadedData() {
        if(props.videoLoaded)
            props.videoLoaded()
    }
    
    useEffect(() => {
        videoRef.current.addEventListener("canplay",onLoadedData);
        ()=>{
            videoRef.current.removeEventListener("canplay",onLoadedData);
        }
    }, [])
    function playVideo(){
        setShowPlayIcon(false)
        videoRef.current.play()
    }
    function muteVideo(){
        videoRef.current.muted=!videoRef.current.muted
        setMute(videoRef.current?.muted)
    }
    function scrollListener(){
        let videoTopPosition = videoRef.current?.getBoundingClientRect().top - 150;
        let videoHeight = videoRef.current?.getBoundingClientRect().height;
        if(videoTopPosition < window.innerHeight && videoTopPosition > - (videoHeight)) setVideoOnScreen(true)
        else setVideoOnScreen(false)
    }
    useEffect(() => {
      window.addEventListener("scroll", scrollListener, {passive: true});
      return () => {
        window.removeEventListener("scroll", scrollListener, {passive: true});
      };
    });
    
    useEffect(()=>{
        if(videoOnScreen){
            if(props.video.autoplay){
                videoRef.current.play();
                setShowPlayIcon(false)
            }else{
                videoRef.current.pause();
                setShowPlayIcon(true)
            }
        }else{
            videoRef.current.pause();
        }
    },[videoOnScreen])

    useEffect(()=>{
        if(!!props.videoPause){
            videoRef.current.pause()
        } else {
            if(props.video.autoplay){
                videoRef.current.play()
            }
        }
        if(!!props.videoPause){
           setDisplayMuteButton(false) 
        }else{
            setDisplayMuteButton(true)
        }
      },[props.videoPause])
    return(
        <>
        <div className={`videoContainer positionRelative overflowHidden ${videoLoaded?"onVideoLoad":""} ${props.video.restrictedHeightAndWidth?"restrictHeightAndWidth":""}`} onMouseEnter={()=>showControls(props.video.controls===true ? true:false)} onMouseLeave={()=>showControls(props.video.controls===true?false:true)}>
            <video ref={videoRef} className="width-100"  controls={props.video.controls && controlsShown} autoPlay={props.video.autoplay}  muted loop={props.video.loop} playsInline onClick={()=>muteVideo()}>
                <source src={!!props.videoUrl ? props.videoUrl :props.videoUrlMobile} type="video/mp4" />
                Your browser does not support HTML video.
            </video>    
            {showPlayIcon &&
                <div className="playButton positionAbsolute cursorPointer">
                    {showPlayIcon && <Button buttonType="playButton" onClick={()=>playVideo()}/>}
                </div>
            }
            {props.video.showMuteButton && !!displayMuteButton &&
                <div className="showMuteIcon positionAbsolute cursorPointer">
                    {!!props.video.muted && <img src={mute ? "/images/mute3.png":"/images/sound.png"} alt="Mute Icon" className="width-100" onClick={()=>muteVideo()} />}
                </div>
            }
            {/* {props.placeholder === "image"  &&
                <div className="placeholderContainer">
                    <VideoSection 
                     mainImg='/images/WT/herStory/S5_1.png'
                     mainImgMobile='/images/WT/herStory/S5_1.png'
                     shortHeading="hello"
                     mainHeading='world'
                     buttonText='buttonText'
                     buttonTextOnHover="hello dcdsc"
                     bottomText=""
                     enableTextColor={false}
                     link="#"
                    />
                </div>
            } */}
        </div>
        <style jsx>{`
            .videoContainer{
                padding-top:${!!props.video.desktopHeight && props.video.desktopWidth ?  `${props.video.desktopHeight*100/props.video.desktopWidth}%`:""};
                height:${!props.video.desktopHeight? "100vh":`${props.video.desktopHeight}`};
                width:${!props.video.desktopWidth ? "100vw":`${props.video.desktopWidth}`};
            }
            .onVideoLoad.videoContainer{
                background:transparent;
            }
            .restrictHeightAndWidth{
                overflow:hidden;
            }
            .videoContainer video{
                position:absolute;
                width:100%;
                height:100%;
                left:0;
                top:0;
                object-fit:cover;
                z-index:2;
            }
            .playButton{
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                z-index:3;
            }
            .showMuteIcon{
                width:25px;
                height:25px;
                bottom:15px;
                right:25px;
                z-index:3;
                transform:translate(-50%,-50%);
            }
            .showMuteIcon img{
                height:100%;
            }
            @media only screen and (max-width: ${MOBILE_BREAKPOINT}px){
                .videoContainer{
                    background-image:${placeholderMobile?`url(${placeholderMobile})`:"none"};
                    padding-top:${props.video.mobileHeight*100/props.video.mobileWidth}%;
                }
                .showMuteIcon{
                    bottom:15px;
                    right:9px;
                }
            }
        `}</style>
        
        </>
        
    )
}
function mapStateToProps({common}){
    return {common}
}
export default connect(mapStateToProps,null)(Video)