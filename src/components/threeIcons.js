import React, { useRef } from "react";
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Animate from "./animate";

export default function ThreeIcons(props) {
    const shortHeadingLeftRef = useRef();
    const shortHeadingCenterRef = useRef();
    const shortHeadingRightRef = useRef();
    const descLeft = useRef();
    const descCenter= useRef();
    const descRight = useRef();
    const image1Ref = useRef();
    const image2Ref = useRef();
    const image3Ref = useRef();

    return (
        <>
            <div className="container flexItems alignCenter">
                <div className="leftIcon">
                    <Animate>
                      <div ref={image1Ref}><img alt="img" className="imgLeft marginBottom26 " src={props.iconLeft} /></div>
                      <div ref={shortHeadingLeftRef} className="marginBottom26 shortHeadingLeft mainShortHeading">{props.shortHeadingLeft}</div>
                      <div ref={descLeft} className="descLeft description black">{props.descriptionLeft}</div>
                    </Animate>
                </div>
                <div className="centerIcon">
                    <Animate>
                      <div ref={image2Ref} ><img alt="img" className="imgCenter marginBottom26" src={props.iconCenter} /></div>
                      <div ref={shortHeadingCenterRef} className="marginBottom26 shortHeadingCenter mainShortHeading">{props.shortHeadingCenter}</div>
                      <div ref={descCenter} className="descCenter description black">{props.descriptionCenter}</div>
                    </Animate>
                </div>
                <div className="rightIcon">
                    <Animate>
                      <div ref={image3Ref}><img alt="img" className="marginBottom26 imgRight" src={props.iconRight} /></div>
                      <div ref={shortHeadingRightRef} className="marginBottom26 shortHeadingRight mainShortHeading">{props.shortHeadingRight}</div>
                      <div ref={descRight} className="descRight description black">{props.descriptionRight}</div>
                    </Animate>
                </div>
            </div>  
            <style jsx>{`
            .container {
                padding: 0 12.29%;
                margin-right: -2.7%;
            }
            .leftIcon,.centerIcon,.rightIcon {
              width: 33.33%;
              padding-right: 2.7%;
            }
            @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
              .container {
                margin-right:-2.7%;
              }  
              .leftIcon,.centerIcon,.rightIcon {
                padding-right: 2.7%;
              }
            }
            @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
              .container {
                margin-right:-2.6%;
              }  
              .leftIcon,.centerIcon,.rightIcon {
                padding-right: 2.6%;
              }
            }
            @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                .container {
                    padding: 0 30%;
                    display: block;
                    margin-right: 0;
                }
                .leftIcon,.centerIcon,.rightIcon {
                    width: 100%;
                    padding-right:0;
                }
                .leftIcon,.centerIcon {
                    margin-bottom: 6rem;
                }
            }
            @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                .container {
                    padding: 0 13.6%;   
                }
                .leftIcon,.centerIcon {
                  margin-bottom: 3.5rem;
                }
            }
            `}</style>
        </>
    )
}

