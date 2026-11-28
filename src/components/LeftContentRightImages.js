import React from 'react'
import Button from './button'
import { MOBILE_BREAKPOINT, MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Image from './Image';
import Animate from "./animate"
import LongArrow from "./longArrow"
import {useRouter} from "next/router"
export default function LeftContentRightImages(props) {
    let router=useRouter()
    // console.log('hiji',props.link);
    return (
        <>
            <div className="leftContentRightImages flexItems">
                <div className="left">
                    <Animate> <h2 className="mbBelowShortHeading shortHeading mainShortHeading grey richText">{props.shortHeading}</h2></Animate>
                    <Animate><h1 className="mbHeading heading bigHeading black richText">{props.heading}</h1></Animate>
                    {props.cmsRichContent ? 
                        <Animate><div className="marginBottom118 desc richText" dangerouslySetInnerHTML={{__html:props.description}}></div></Animate>
                        :
                        <Animate><div className="marginBottom118 desc richText">{props.description}</div> </Animate>
                    }
                    {props.link && props.buttonText && props.buttonTextOnHover &&<Animate><div className="cta"><Button buttonText={props.buttonText}  buttonType="rectangle" textOnHover={props.buttonTextOnHover}  href={props.link}/></div></Animate>}
                </div>
                <div className="right">
                    <div className="rightImages flexItems">
                        <div className="img1Wrapper">
                            <Animate>
                                {/* <Image height={282} width={212} originalSrc={props.img1} alt="Image" className="width-100"/> */}
                                <div className="hideForMobile">
                                <div className="textAndArrow flexItems tabs ">
                                    <div className="arrow">
                                        <LongArrow
                                            arrowLength="5px"
                                            lineLength="10px"
                                            transformX="3.3px"
                                            transformY="1px"
                                            arrowWidth="1px"
                                            color="black"
                                            direction="up"
                                            marginTop="5.5px"
                                            marginTopMobile="2.5px"
                                        />
                                    </div>
                                    {props.cmsRichContent == true && <div className="text greyCaption richText" dangerouslySetInnerHTML={{__html: props.caption1}}></div> }
                                    {!props.cmsRichContent  && <div className="text greyCaption richText" >{props.caption1}</div> }
                                </div> 
                               
                                <div className="textAndArrow flexItems tabs ">
                                        <div className="arrow">
                                            <LongArrow
                                                arrowLength="5px"
                                                lineLength="10px"
                                                transformX="3.3px"
                                                transformY="1px"
                                                arrowWidth="1px"
                                                color="black"
                                                direction="right"
                                                marginTop="5.5px"
                                                marginTopMobile="2.5px"
                                            />
                                        </div>
                                        {props.cmsRichContent == true && <div className="text greyCaption richText" dangerouslySetInnerHTML={{__html: props.caption2}}></div> }
                                        {!props.cmsRichContent  && <div className="text greyCaption richText" >{props.caption2}</div> }
                                    </div> 
                                    </div>
                            </Animate>
                        </div>
                        <div className="img2Wrapper">
                            <Animate>
                                <Image height={425} width={278} originalSrc={props.img2} alt="Image" className="width-100"/>
                                <div className="showForMobile">
                                <div className="textAndArrow flexItems tabs  alignLeft forMobile">
                                    <div className="arrow1">
                                        <LongArrow
                                            arrowLength="5px"
                                            lineLength="10px"
                                            transformX="3.3px"
                                            transformY="1px"
                                            arrowWidth="1px"
                                            color="black"
                                            direction="up"
                                            marginTop="5.5px"
                                            marginTopMobile="2.5px"
                                        />
                                    </div>
                                    {props.cmsRichContent == true && <div className="text greyCaption richText" dangerouslySetInnerHTML={{__html: props.caption1}}></div> }
                                    {!props.cmsRichContent  && <div className="text greyCaption richText" >{props.caption1}</div> }
                                </div> 
                                </div>
                                <div className="showForMobile">
                                <div className="textAndArrow flexItems tabs">
                                        <div className="arrow">
                                            <LongArrow
                                                arrowLength="5px"
                                                lineLength="10px"
                                                transformX="3.3px"
                                                transformY="1px"
                                                arrowWidth="1px"
                                                color="black"
                                                direction="right"
                                                marginTop="5.5px"
                                                marginTopMobile="2.5px"
                                            />
                                        </div>
                                        {props.cmsRichContent == true && <div className="text greyCaption richText" dangerouslySetInnerHTML={{__html: props.caption2}}></div> }
                                        {!props.cmsRichContent  && <div className="text greyCaption richText" >{props.caption2}</div> }
                                    </div> 
                                    </div>
                            </Animate>
                        </div>
                    </div>
                </div>
            </div>   
            <style jsx>{`
                p{
                    margin-bottom:0;
                }
                .leftContentRightImages{
                    align-items:flex-end;
                    padding-left:11.4%;
                    padding-right:5.8%;
                }
                .textAndArrow{
                    margin-top: 10px;
                    padding-left: 2px;
                }
                .text p{
                    padding: 0;
                    margin: 0;
                }
                .arrow{
                    padding:3px 10px;
                }
                .left{
                    padding-right: 3%;
                }
                .leftCOntent{
                    min-height: calc(100% - 3rem); 
                }
                .cta{
                    align-items: flex-end;
                }
                .left,.right{
                    width:100%;
                }
                .rightImages{
                    margin-right:-2.1rem;
                }
                .right{
                    // padding-left: 13%;
                }
                .img1Wrapper{
                    width:50%;
                    padding-right:2.1rem;
                }
                .img2Wrapper{
                    width:50%;
                    padding-right:2.1rem;
                }
                .img1Wrapper{
                    display:flex;
                    align-items:flex-end;
                    justify-content: flex-end;
                }
                .desc{
                    padding-right: 9%;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .desc{
                        padding-right: 0%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .leftContentRightImages{
                        padding-left:9.7%;
                        padding-right:9.7%;
                        display: block;
                        text-align:center;
                    }
                    .left,.right{
                        width: 100%;
                    }
                    .rightImages{
                        margin-right:-2.1rem;
                    }
                    .img1Wrapper,.img2Wrapper{
                        width:100%;
                        padding-right:2.1rem;
                    }
                    .rightImages{
                        margin-right:0rem;
                        display:flex;
                        flex-flow: column-reverse wrap;
                    }
                    .right{
                        padding-left: 0%;
                    }
                    .cta{
                        margin-bottom:4.5rem;
                    }
                    .textAndArrow{
                        margin-top: 10px;
                        padding-left: 2px;
                    }
                    .img1Wrapper{
                        justify-content:flex-start;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .leftContentRightImages{
                        flex-direction: column-reverse;
                        padding-left:2.1rem;
                        padding-right:2.1rem;
                    }
                    .left,.right{
                        width:100%;
                    }
                    .img1Wrapper,.img2Wrapper{
                        width:100%;
                        padding-right:0;
                    }
                    .left{
                        padding-right:0;
                        margin-bottom: 4rem;
                    }
                    .desc{
                        margin-bottom: 2.6rem;
                    }
                    .textAndArrow{
                        margin-top: 10px;
                        padding-left: 1px;
                    }
                    .arrow1{
                        padding:3px 13px 0 1px;
                    }
                    .arrow{
                        padding:3px 10px 0 4px;
                    }
                }
            `}</style>
        </>
    )
}
