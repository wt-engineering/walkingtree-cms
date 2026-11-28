import React,{useRef} from 'react'
import Button from './button'
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Image from "./Image";
import Video from './video';
import Animate from './animate';
import {useRouter}  from "next/router"
export default function TwoImageTwoText(props) {
    const shortHeadingRef2 = useRef();
    const headingRef2 = useRef();
    const descRef2 = useRef();
    const buttonRef2 = useRef();
    const leftImageRef = useRef();
    const leftImageBigRef = useRef();
    const rightImageRef = useRef();
    const rightImageBigRef = useRef();
    let router = useRouter()
    return (
        <>
            <div className="twoImageTwoText paddedContent standardPaddingBottom">
                {!!props.smallImageFirst && !!props.leftSideData && <div className="marginBottom90 topContent flexItems">
                    <div className="topLeft">
                        <Animate>
                            <div ref={leftImageRef} className="leftImageWrapper">
                                {!!props.leftSideData.leftMediaType && props.leftSideData.leftMediaType==="image" ?  
                                    <Image height={585} width={390} originalSrc={props.leftSideData.leftImage} alt="Image"/>:
                                    <Video video={props.leftSideData.leftVideo} videoUrl={props.leftSideData.leftVideoUrl} videoUrlMobile={props.leftSideData.leftVideoUrlMobile}/>
                                }
                            </div>
                        </Animate>
                    </div>
                    <div className="topRight">
                        <Animate>
                            <div ref={rightImageRef} className="rightImageWrapper">
                                {!!props.leftSideData.rightMediaType && props.leftSideData.rightMediaType==="image" ?
                                    <Image height={585} width={892} originalSrc={props.leftSideData.rightImage} alt="Image"/>:
                                    <Video video={props.leftSideData.rightVideo} videoUrl={props.leftSideData.rightVideoUrl} videoUrlMobile={props.leftSideData.rightVideoUrlMobile} />
                                }
                            </div>
                        </Animate>
                    </div>
                </div>}
                {!props.smallImageFirst && !!props.rightSideData && <div className="marginBottom90 topContent flexItems">
                    <div className="topLeft">
                        <Animate>
                            <div ref={leftImageBigRef} className="leftImageWrapper">
                                {!!props?.rightSideData?.leftMediaType && props.rightSideData.leftMediaType==="image" ?
                                    <Image height={585} width={877} originalSrc={props.rightSideData.rightImage} alt="Image"/> :
                                    <Video video={props.rightSideData.rightVideo} videoUrl={props.rightSideData.rightVideoUrl} videoUrlMobile={props.rightSideData.rightVideoUrlMobile} />
                                }
                            </div> 
                        </Animate>
                    </div>
                    <div className="topRight">
                        <Animate>
                            <div ref={rightImageBigRef} className="rightImageWrapper mbBelowMobile">
                                {!!props?.rightSideData?.rightMediaType && props.rightSideData.rightMediaType==="image" ?
                                    <Image height={585} width={390} originalSrc={props.rightSideData.leftImage} alt="Image"/>
                                    :
                                    <Video video={props.rightSideData.leftVideo} videoUrl={props.rightSideData.leftVideoUrl} videoUrlMobile={props.rightSideData.leftVideoUrlMobile}/>
                                }
                            </div>
                        </Animate>
                    </div>
                </div>}
                {!!props.smallImageFirst &&<div className="bottomContent flexItems">
                    <div className="bottomLeft">
                        <Animate><div ref={headingRef2} className="mbBelowShortHeading  heading smallHeading black richText">{props.heading}</div></Animate>
                        <Animate><h2 ref={shortHeadingRef2} className="mbHeading shortHeading mainShortHeading grey richText">{props.shortHeading}</h2></Animate>

                        {/* <h1 ref={headingRef2} className="marginBottom55 heading smallHeading" dangerouslySetInnerHTML={{ __html: props.heading }}></h1> */}
                        {!!props.buttonText && !!props.buttonTextOnHover && !!props.link &&
                            <Animate>
                                <div ref={buttonRef2} className="buttonWrap cursorPointer hideForMobile ctaAbove">
                                    <Button
                                        buttonType="rectangle"
                                        buttonText={props.buttonText}
                                        textOnHover={props.buttonTextOnHover}
                                        href={props.link}
                                    />
                                </div>
                            </Animate>
                        }
                    </div>
                    <div className="bottomRight ">
                       {!!props.cmsRichContent && <Animate><div ref={descRef2} className=" desc richText" dangerouslySetInnerHTML={{ __html: props.description }}></div></Animate>}
                       {!props.cmsRichContent && <Animate><div ref={descRef2} className=" desc richText">{props.description}</div></Animate>}
                    </div>
                    {!!props.buttonText && !!props.buttonTextOnHover && !!props.link &&
                            <Animate>
                                <div ref={buttonRef2} className="buttonWrap cursorPointer showForMobile alignCenter ctaAbove">
                                    <Button
                                        buttonType="rectangle"
                                        buttonText={props.buttonText}
                                        textOnHover={props.buttonTextOnHover}
                                        href={props.link}
                                    />
                                </div>
                            </Animate>
                        }
                </div>}
                {!props.smallImageFirst &&<div className="bottomContent flexItems">
                    <div className="bottomRight ">
                    <Animate><div ref={headingRef2} className="mbBelowShortHeading heading smallHeading black richText">{props.heading}</div></Animate>
                        <Animate><h2 ref={shortHeadingRef2} className="mbHeading shortHeading mainShortHeading grey richText">{props.shortHeading}</h2></Animate>
                        {!!props.buttonText &&  !!props.buttonTextOnHover && !!props.link && 
                        <Animate>
                            <div ref={buttonRef2} className="buttonWrap cursorPointer hideForMobile ctaAbove">
                                <Button
                                    buttonType="rectangle"
                                    buttonText={props.buttonText}
                                    textOnHover={props.buttonTextOnHover}
                                    href={props.link}
                                />
                            </div>
                        </Animate>
                        }
                    </div>
                    <div className="bottomLeft hideForMobile">
                       {!!props.cmsRichContent && <Animate><div ref={descRef2} className="richText desc" dangerouslySetInnerHTML={{ __html: props.description }}></div></Animate>}
                        {!props.cmsRichContent && <Animate><div ref={descRef2} className=" desc richText">{props.description}</div></Animate>}
                    </div>
                    <div className="bottomLeft showForMobile marginTop">
                        {!!props.cmsRichContent && <Animate><div ref={descRef2} className="richText" dangerouslySetInnerHTML={{ __html: props.description }}></div></Animate>}
                        {!props.cmsRichContent && <Animate><div ref={descRef2} className="richText ">{props.description}</div></Animate>}
                    </div>
                    {!!props.buttonText &&  !!props.buttonTextOnHover && !!props.link && 
                        <Animate>
                            <div ref={buttonRef2} className="buttonWrap cursorPointer showForMobile alignCenter ctaAbove">
                                <Button
                                    buttonType="rectangle"
                                    buttonText={props.buttonText}
                                    textOnHover={props.buttonTextOnHover}
                                    href={props.link}
                                />
                            </div>
                        </Animate>
                        }
                </div>}
            </div>   
            <style jsx>{`
                .heading p{
                    margin-bottom:0;
                }
                .textForTablet_hiddenInDesktop{
                    display:none;
                }
                .bottomLeft{
                    padding: ${!props.smallImageFirst? "0 5% 0 14%": "0 9% 0 6%"};
                }
                .shortHeading{
                    // padding-right: 17%;
                }
                .bottomRight{
                    padding: ${!!props.smallImageFirst? "0 5% 0 14%": "0 9% 0 6%"};
                }
                .topLeft{
                    padding-right:1rem;
                }
                .topLeft{
                    width:${!!props.smallImageFirst?"32%":"72.8%"}
                }
                .bottomLeft{
                    width:${!!props.smallImageFirst?"32%":"72.8%"}
                }
                .topRight{
                    width:${!!props.smallImageFirst?"72.8%":"32%"}
                }
                .bottomRight{
                    width:${!!props.smallImageFirst?"72.8%":"32%"}
                } 
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .bottomLeft{
                        padding: 0 6% 0 2%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .topContent{
                        margin-right: -1.5rem;
                    }
                    .topLeft{
                        padding-right:1.5rem;
                    }
                    .topRight{
                        padding-right:1.5rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .topContent,.bottomContent{
                        display:block;
                    }
                    .bottomContent{
                        display:block;
                    }
                    .topLeft{
                        width:${!!props.smallImageFirst?"100%":"100%"}
                    }
                    .bottomLeft{
                        width:${!!props.smallImageFirst?"100%":"100%"};
                        padding: 0 3rem;
                        text-align:center;
                    }
                    .topRight{
                        width:${!!props.smallImageFirst?"100%":"100%"};
                    }
                    .bottomRight{
                        width:${!!props.smallImageFirst?"100%":"100%"};
                        padding: 0 3rem;
                        text-align:center;
                    }
                    .textForTablet_hiddenInDesktop{
                        width:100%;
                        padding-right: 5.1rem;
                        padding-left: 5.1rem;
                    }
                    .twoImageTwoText{
                        padding-left:0%;
                        padding-right:0%;
                    }
                    .leftImageWrapper,.rightImageWrapper{
                        width:100%;
                        padding-left: 2.1rem;
                        padding-right: 2.1rem;
                        margin-bottom:1.5rem;
                    }
                    .topLeft{
                        flex-direction: column-reverse;
                        margin-bottom:1.5rem;
                    }
                }
            `}</style>
            <style jsx global>{`
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .twoImageTwoText .bottomLeft .heading p{
                        margin:0;
                    }
                }
            `}</style>
        </>
    )
}
