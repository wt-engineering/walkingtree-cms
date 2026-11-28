import React, {useState,useEffect} from "react"
import { connect } from "react-redux"
import { setHeroImageLoaded,setMenuBarShow,setWindow2 } from "../redux/actions"
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config"
import NextImage from 'next/image'
import Video from "./video"
import Button from "./button"
function HeroModule(props) {
  const [mobileBreakPoint, setMobileBreakPoint] = useState(false)
  useEffect(() => {
    if(props.common.windowWidth <= MOBILE_BREAKPOINT)
      setMobileBreakPoint(true)
    else 
      setMobileBreakPoint(false)
  }, [props.common.windowWidth])

  function scroll(){
    window.scrollTo({
      top: 780,
      behavior: 'smooth'
    });
  }
  return (
    <>
    <div className="standardPaddingBottom container">
      <div className={`heroModule positionRelative `}>
        <div
            className={`hero height-100 width-100  ${props.common.heroImageLoaded ? "imageLoaded": ""}`}>
                   {props.mediaType=="image"?
                      <NextImage 
                        alt={"Banner Image"} 
                        src={mobileBreakPoint ? props.mainImageMobile : props.mainImage} 
                        layout="fill" 
                        quality={100}
                        loading="eager"
                        priority={true}
                        onLoadingComplete={() => {
                         setTimeout(() => {props.setHeroImageLoaded(true)}, 200);
                        }}
                     /> 
                  :
                    <Video heroImage={true} video={props.video} videoUrl={props.videoUrl} videoUrlMobile={props.videoUrlMobile} videoLoaded={()=>{props.setHeroImageLoaded(true)}}/>  
                  }
          </div>
        <div className="centerText positionAbsolute alignCenter spaceRichText">
          <h2 className="mbHeading shortLine mainShortHeading">{props.shortHeading}</h2>
          <h1 className="mbHeading mainHeading bannerHeading">{props.mainHeading} </h1>
            {!!props.cmsRichContent && props.desc? 
              <div  className={`desc  whiteCaption spacingAbove ${props.button?"marginBottom55":""}`} dangerouslySetInnerHTML={{__html:props.desc}}></div>
            :
              <div className={`desc whiteCaption spacingAbove ${props.button?"marginBottom55":""}`}>{props.desc}</div>
            }
        </div>
        <div className="scrollDownArrowReq positionAbsolute cursorPointer">
            <div onClick={()=>scroll()} className="scrollDownArrowContainer positionRelative">
                  <Button buttonType="circleIconDownHero"/> 
            </div>
        </div>
      </div>
    </div>  
      <style jsx>{`
        .heroModule {
          height:95vh;
          background:#414042;
        }
        .hero{
          filter: blur(15px);
          transform: scale(1);
        }
        .imageLoaded.hero{
          animation: blurMainImage 1s ease-out forwards;
          overflow: hidden;
        }
        @keyframes blurMainImage {
          from {
            filter: blur(15px);
            background:transparent;
            transform: scale(1);
          }
          to{
            filter: blur(0);
            background:transparent;
            transform: scale(1);
          }
        }
        .scrollDownArrowReq{
          z-index: 3;
          left: 50%;
          bottom:0;
          transform: translate(-50%, 100%);
        }
        .centerText {
          width: 100%;
          top: 36%;
          left: 50%;
          transform: translateX(-50%);
          z-index:2;
        }
        .shortLine {
          color: #ffffff;
        }
        .imageLoaded .shortLine {
          animation: shortHeadingAppears 1s linear forwards;
        }
        .mainHeading span {
          display: inline-block;
          white-space: pre-wrap;
        }
        .desc {
          padding: 0 29%;
        }
        
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .shortLine {
            color: #ffffff;
          }
          .heroModule {
            height:92vh;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .centerText {
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
          .desc {
            padding: 0 11%;
          }
          .heroModule {
            height:87vh;
          }
        }
      `}</style>
    </>
  );
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setWindow2,setHeroImageLoaded,setMenuBarShow })(HeroModule);