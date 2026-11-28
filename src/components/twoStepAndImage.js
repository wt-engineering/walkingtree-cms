import React, { useRef } from "react";
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Animate from "./animate";
import Image from "./Image";

export default function TwoStepAndImage(props) {
    const shortHeadingRef = useRef();
    const descRef = useRef();
    const bigDescRef= useRef();
    const caption1Ref = useRef();
    const caption2Ref = useRef();
    const imageRef = useRef();

    return (
        <>
            <div className="container flexItems lesserAdditionalPadding">
                <div  className="textSection">
                  <Animate><div ref={shortHeadingRef} className="mbHeading shortHeading  richText mainShortHeading">{props.shortHeading}</div></Animate>
                  <div ref={imageRef} className="imageSection showForMobile">
                      <Image height={486} width={365} alt="img" className="width-100" originalSrc={props.image} />
                  </div>
                  <Animate>
                      {props.cmsRichContent ?
                       <div ref={descRef} className="desc" dangerouslySetInnerHTML={{__html:description}}></div>
                        : 
                        <div ref={descRef} className="desc">{props.description}</div>
                      }
                    </Animate>
                  <Animate><p ref={bigDescRef} className="bigDescription black bigDesc richText">{props.bigDescription}</p></Animate>
                  {props.cmsRichContent == true && <Animate><div ref={caption1Ref} className="caption1 greyCaption richText" dangerouslySetInnerHTML={{__html: props.caption}}></div></Animate>}
                  {!props.cmsRichContent && <Animate><div ref={caption2Ref} className="caption1 greyCaption richText">{props.caption}</div></Animate>}
                </div>
                
                  <div className="imageSection hideForMobile">
                  <img alt="img" className="width-100" src={props.image} />
                  </div>
                   {/* <div className="imageSection marginBottom16 hideForMobile">
                   <Animate><Image height={486} width={365} alt="img" className="width-100" originalSrc={props.image} /></Animate>
                  </div> */}
            </div>
            <style jsx>{`
                .textSection {
                     padding-right: 5%;
                     width: 63%;
                }
                .imageSection {
                    width: 37%
                    flex: 1 1 100%;
                }
                .bigDesc{
                    padding-right:30%;
                    margin-bottom:3.2rem;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .textSection {
                        padding-right: 6%;
                        width: 63%;
                    }
                    .imageSection {
                        width: 37%
                        flex: 1 1 100%;
                   }
                   .bigDesc{
                    padding-right:25%;
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .textSection {
                        padding-right: 4%;
                        width: 63%;
                    }
                   .imageSection {
                        width: 37%
                        flex: 1 1 100%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .container {
                        display:block;
                    }
                    .textSection {
                        text-align: center;
                        width: 100%;
                        padding-right: 0;
                        margin-bottom:3rem;
                    }
                    .imageSection {
                        padding: 0 0%;
                        width: 100%;
                        flex: 1 1 100%;
                    }
                    .desc {
                        margin-right: 0%;  
                    }
                    .bigDesc{
                        padding-right:0%;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .textSection {
                        text-align: center;
                        width: 100%;
                    }
                    .imageSection {
                        padding: 0rem;
                        width: 100%;
                        flex: 1 1 100%;
                        margin-bottom:4rem;
                    }
                    .shortHeading{
                        margin-bottom:1.5rem;
                    }
                    .bigDesc{
                        padding:0 2rem;
                        margin-bottom:2rem;
                    }
                }
            `}</style>
        </>
    )
}


