import React, { useRef } from 'react'
import Button from './button'
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from '../config'
import Animate from './animate';
import Image from "../components/Image"
export default function ShowsAndEvents(props) {
    const headingRef = useRef();
    const descRef = useRef();
    const serialNumRef = useRef();
    const serialNum2Ref = useRef();
    const shortHeadingRef = useRef();
    const shortHeading2Ref = useRef();
    const contentRef = useRef();
    const content2Ref = useRef();
    const buttonRef = useRef();
    const rightContentRef = useRef();

    return (
        <>
            <div className="showsAndEvents">
                <Animate><h1 ref={headingRef} className="mbSmallheading mainHeading bigHeading black">{props.mainHeading}</h1></Animate>
                <Animate><p ref={descRef} className="space40 desc  grey">{props.desc}</p></Animate>
                <div className="details flexItems">
                    <div className="leftContent">
                        <Animate>
                          <div className="leftContentContainer">
                              <div ref={serialNumRef} className="sNum moderatMedium font16 black mbBelowShortHeading">{props.sNum}.</div>
                              <h2 ref={shortHeadingRef} className="mbBelowShortHeading shortHeading mainShortHeading">{props.shortHeading}</h2>
                              <p ref={contentRef} className="mbSmallheading content description grey">{props.content}</p>
                              <div ref={serialNum2Ref} className="sNum moderatMedium font16 black mbBelowShortHeading">{props.sNum2}</div>
                              <h2 ref={shortHeading2Ref} className="mbBelowShortHeading shortHeading mainShortHeading">{props.shortHeading2}</h2>
                              <p ref={content2Ref} className="mbBelowShortHeadi content description grey">{props.content2}</p>
                              {!!props.buttonText && !!props.buttonTextOnHover &&<div ref={buttonRef} className="hideForMobile">
                                  <Button
                                      buttonType="rectangle"
                                      buttonText={props.buttonText}
                                      textOnHover={props.buttonTextOnHover}
                                  />
                              </div>}
                          </div>
                        </Animate>
                    </div>
                    <div ref={rightContentRef} className="rightContent">
                        <Animate>
                          <div className="marginBottom16 eventImage"><Image height={541} width={751} originalSrc={props.eventImage} className="width-100" alt="event image"/></div>
                          {props.cmsRichContent== true && <div className="smallText greyCaption" dangerouslySetInnerHTML={{__html:props.caption}}></div>}
                          {!props.cmsRichContent && <div className="smallText greyCaption">{props.caption}</div>}
                        </Animate>
                    </div>
                </div>
            </div>  
            <style jsx>{`
                .showsAndEvents{
                    padding:0 4.5% 0 12.29%;
                }
                .leftContentContainer{
                    padding-right: 8%;
                }
                .desc{
                    padding-right: 16%;
                }
                .rightContent{
                    width:62.74%;
                }
                .leftContent{
                    width:37.26%;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .leftContentContainer{
                        padding-right: 6%;
                    }
                    .showsAndEvents{
                        padding:0 7%
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) { 
                  .showsAndEvents{
                      padding:0 7%;
                  }
                  .rightContent{
                      width:100%;
                  }
                  .leftContent{
                       width:100%;
                  }
                  .content {
                      padding-right: 8%;
                  }
                  .leftContentContainer{
                      padding-right: 0%;
                      padding-top: 6rem;
                  }
                  .desc{
                      padding-right: 0%;
                  }
                  .details{
                      flex-direction:column-reverse;
                  }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .showsAndEvents{
                        padding:0 7%;
                    }
                    .rightContent{
                        width:100%;
                    }
                    .leftContent{
                         width:100%;
                    }
                    .content {
                        padding-right: 8%;
                    }
                    .leftContentContainer{
                        padding-right: 0%;
                        padding-top: 6rem;
                    }
                    .desc{
                        padding-right: 0%;
                    }
                    .details{
                        flex-direction:column-reverse;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .showsAndEvents{
                        padding:0 2.1rem;
                    }
                    .mainHeading{
                        text-align:center;
                    }
                    .desc{
                        padding-right: 0%;
                        text-align:center;
                    }
                    .details{
                        flex-direction:column-reverse;
                        display: flex;
                    }
                    .rightContent{
                        width:100%;
                    }
                    .leftContent{
                        width:100%;
                    }
                    .leftContentContainer{
                        padding-right: 0%;
                        padding-top: 0rem;
                    }
                    .rightContent{
                        margin-bottom:3.3rem;
                    }
                    .sNum,.shortHeading{
                        display: inline-block;
                        
                    }
                    .sNum{
                        padding-right: 1rem;
                    }
                    .content{
                        padding-right: 7%;
                        margin-bottom:1rem;
                    }
                }
            `}</style> 
        </>
    )
}
