import React,{useRef} from 'react'
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Animate from "./animate";
export default  function BrandManufacturing(props) {
    const shortHeadingRef = useRef();
    const imageOneRef = useRef();
    const imageTwoRef = useRef();
    const imageThreeRef = useRef();
    const headingRef = useRef();
    const text1Mobileref = useRef();
    const text2Mobileref = useRef();
    const text1ref = useRef();
    const text2ref = useRef();
    return (
        <>
          <div className="container">
              <div className="marginBottom55 topContainer">
              <Animate><div ref={shortHeadingRef} className="marginBottom26 mainShortHeading shortHeading fontWeight">{props.mainShortHeading}</div></Animate>
              <Animate><div ref={headingRef} className="marginBottom90 smallHeading heading fontWeight black">{props.smallHeading}</div></Animate>
                  <div className="imageSection flexItems">
                  <Animate><div ref={imageOneRef} className="imageWrapper one"><img alt="image" className="imageOne width-100" src={props.imageOne}/></div></Animate>
                  <Animate><div ref={text1Mobileref} className="text1 blackCaption showForMobile fontWeight black">{props.description}</div></Animate>
                  <Animate><div ref={imageTwoRef} className="imageWrapper two"><img alt="image" className="imageTwo width-100" src={props.imageTwo}/></div></Animate>
                  <Animate><div ref={text2Mobileref} className="rightTextMobile showForMobile">
                          <div className="rightMainText bigDescription grey fontWeight ">{props.bigDescription}</div>
                          <div className="captionText fontWeight"><span className="blackCaption black">{props.blackCaption}</span><span className="greyCaption">{props.greyCaption}</span></div>
                      </div></Animate>
                      <div ref={imageThreeRef} className="imageWrapper three"><img alt="image" className="imageThree width-100" src={props.imageThree}/></div>
                  </div>  
              </div>
              <div className="bottomTextSection flexItems">
                  <div className="left">
                      <div ref={text1ref} className="text1 blackCaption fontWeight black">{props.description}</div>
                  </div>
                  <div ref={text2ref} className="right">
                      <div className="marginBottom16 rightMainText bigDescription grey fontWeight">{props.bigDescription}</div>
                      {props.cmsRichContent == true && <div className="captionText greyCaption boldText fontWeight" dangerouslySetInnerHTML={{__html: props.caption}}></div>}
                      {!props.cmsRichContent && <div className="captionText greyCaption fontWeight">{props.caption}</div>}
                  </div>
              </div>
            </div>
          <style jsx>{`
              .container{
                  padding-left:12.29%;
                  padding-right:19.1%;  
              }
              .bottomTextSection{
                margin-right:-12%;
              }
              .left{
                  padding-right: 12%;
              }
              .right{
                  padding-right: 12%;
              }
              .bottomTextSection > div{
                  width:50%;
              }
              .heading{
                  padding-right: 32%;
              }
              .imageSection{
                  margin-right:-1.5rem;
              }
              .imageSection .imageWrapper{
                  padding-right:1.5rem;
              }
              @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                  .container{
                      padding-left:12.29%;
                      padding-right:12.29%;
                  }
                  .bottomTextSection{
                    margin-right: -8%;
                  }
                  .left{
                    padding-right: 8%;
                  }
                  .right{
                    padding-right: 8%
                  }
              }
              @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                  .container{
                      padding-left:5.8%;
                      padding-right:5.8%;
                  }
                  .heading,.shortHeading{
                      padding-right: 20%;
                      padding-left: 5%;
                  }
              }
              @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                  .bottomTextSection{
                      display:none;
                  }
                  .container{
                      padding-left:2.1rem;
                      padding-right:2.1rem;
                  }
                  .imageSection{
                      display:block;
                  }
                  .heading,.shortHeading {
                      padding-right: 3%;
                      padding-left: 3%;
                  }
                  .imageWrapper.one{
                      margin-bottom:1.2rem;
                  }
                  .imageWrapper.two{
                      margin-bottom:3.8rem;
                  }
                  .imageSection{
                      margin-right:0rem;
                  }
                  .imageSection .imageWrapper{
                      padding-right:0rem;
                  }
                  .text1{
                      margin-bottom:5.5rem;
                  }
                  .rightTextMobile{
                      margin-bottom:5.5rem;
                  }
                  .topContainer{
                      margin-bottom:0rem;
                  }
              }
          `}</style>
        </>
    )
}
