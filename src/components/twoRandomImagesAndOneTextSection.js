import React, { useRef } from "react";
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import LongArrow from './longArrow'
import Image from "./Image";
import Animate from "./animate";

export default function TwoRandomImagesAndOneTextSection(props) {
    const image1Ref = useRef();
    const image2Ref = useRef();
    const textAndArrow = useRef();

    return (
        <>
            <div className="container">
                <div className="bottomImages flexItems">
                    <div className="imageLeft">
                        <Animate><div ref={image1Ref}><Image height={365} width={676} alt="img" className="width-100" originalSrc={props.bottomImageLeft}/></div></Animate>
                        <Animate>
                            <div ref={textAndArrow} className="textAndArrow flexItems">
                                <div className="arrow">
                                    <LongArrow
                                        arrowLength="4px"
                                        lineLength="8px"
                                        transformX="2.5px"
                                        transformY="0px"
                                        arrowWidth="1px"
                                        color="black"
                                        direction="up"
                                        marginTop="7px"
                                    />
                                </div>
                            {props.cmsRichContent == true && <div className="text greyCaption" dangerouslySetInnerHTML={{__html:props.caption}}></div>}
                            {!props.cmsRichContent && <div className="text greyCaption">{props.caption}</div>}
                            </div> 
                        </Animate>
                    </div>
                    <div className="imageRight">
                        <Animate><div ref={image2Ref}><img alt="img" className="width-100" src={props.bottomImageRight}/></div></Animate>
                    </div>
                </div>
            </div> 
            <style jsx>{`
                .container {
                    padding-right: 12.29%;
                    padding-left: 4.5%;
                    margin-right:-10.7%;
                }
                .mobile {
                    display: none;
                }
                .imageLeft {
                    padding-right: 10.7%;
                    margin-top: 11.1rem;
                }
                .imageRight {
                    padding-right: 10.7%;
                }
                .arrow {
                    margin-right: 0.5rem;
                }
                .textAndArrow {
                    margin-top: 1.5rem;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .container {
                        padding-right: 12%;
                        padding-left: 4.5%;
                        margin-right: -10%
                    }  
                    .imageLeft {
                        padding-right: 10%;
                        margin-top: 9rem;
                    }
                    .imageRight {
                        padding-right: 10%;
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .container {
                        padding-right: 12%;
                        padding-left: 4.5%;
                        margin-right: -8%
                    }  
                    .imageLeft {
                        padding-right: 8%;
                        margin-top: 5rem;
                    }
                    .imageRight {
                        padding-right: 8%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .mobile {
                        display: none;
                    }
                    .container {
                        padding:0 9.71%;
                        margin-right:-12.9%
                    }
                    .imageLeft {
                        padding-right: 12.9%;
                        margin-top: 6rem;
                    }
                    .imageRight {
                        padding-right: 12.9%;
                    }
                }
               
            @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                .container {
                    padding: 0;
                    margin-right:0;
                }
                .bottomImages {
                    display: block;
                }
                .imageRight {
                    display: block;
                    padding: 0;
                }
                .imageLeft {
                    padding: 0;
                    margin-top:0; 
                }
                .arrow {
                    margin:0 2.1rem;
                }
                .textAndArrow {
                  margin-bottom: 3.8rem;
                }
            }
            `}
            </style> 
        </>
    )
}

