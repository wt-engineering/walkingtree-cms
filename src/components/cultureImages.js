import React ,{useEffect, useRef}from 'react'
import LongArrow from './longArrow'
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT,MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from '../config'
import Image from './Image';
import Animate from './animate'

export default function CultureImages(props) {
    // console.log(props)
    const col1SmallImgRef = useRef();
    const col1BigImgRef = useRef();
    const shortHeadingRef = useRef();
    const mobileImg1Ref = useRef();
    const mobileSmallImagesRef = useRef();
    const mobileImg2Ref = useRef();
    const col3Img1Ref = useRef();
    const col3Img2Ref = useRef();
    const tabletImagesRef = useRef();
    const mainHeadingRef = useRef();
    const paraOneRef = useRef();
    const paraTwoRef = useRef();
    const paraThreeRef = useRef();

    return (
        <>
            <div className="cultureSection">
                <div className="sectionWrapper flexItems">
                    <div className="col1 hideForMobile">
                        <div ref={col1SmallImgRef} className="col1Small">
                            <Animate> 
                            <div className="marginBottom12"><Image alt={"Image"} originalSrc={props.img1} width={198} height={158} /></div>
                            <div className="textAndArrow flexItems marginBottom10">
                                <div className="arrow">
                                    <LongArrow
                                        arrowLength="5px"
                                        lineLength="10px"
                                        transformX="3.3px"
                                        transformY="1px"
                                        arrowWidth="1px"
                                        color="black"
                                        direction="up"
                                        marginTop="6px"
                                    />
                                </div>
                                {props.cmsRichContent == true && <div className="text greyCaption richText" dangerouslySetInnerHTML={{__html:props.caption1}}></div>}
                                {!props.cmsRichContent && <div className="text greyCaption richText">{props.caption1}</div>}
                                
                            </div>
                            </Animate>
                        </div>
                        <div ref={col1BigImgRef} className="col1Big">
                            <Animate>
                                <div className="marginBottom12"><Image alt={"Image"} originalSrc={props.img2} width={269} height={359} /></div>
                                <div className="textAndArrow flexItems marginBottom10">
                                    <div className="arrow">
                                        <LongArrow
                                            arrowLength="5px"
                                            lineLength="10px"
                                            transformX="3.3px"
                                            transformY="1px"
                                            arrowWidth="1px"
                                            color="black"
                                            direction="up"
                                            marginTop="7px"
                                        />
                                    </div>
                                    {props.cmsRichContent == true && <div className="text greyCaption richText" dangerouslySetInnerHTML={{__html:props.caption2}}></div>}
                                    {!props.cmsRichContent  && <div className="text greyCaption richText">{props.caption2}</div>}
                                </div>
                            </Animate>
                        </div>
                        
                    </div>
                    <div className="col2">
                        <div className="middleText">
                        <Animate><div className="shortHeading mbBelowShortHeading mainShortHeading" ref={shortHeadingRef}>{props.shortHeading}</div></Animate>
                            {props.cmsRichContent == true && <Animate><div className="mainHeading smallHeading black richText" ref={mainHeadingRef} dangerouslySetInnerHTML={{__html: props.heading}}></div></Animate>}
                            {!props.cmsRichContent  && <Animate><div className="mainHeading mbHeading smallHeading black richText" ref={mainHeadingRef}>{props.heading}</div></Animate>}
                            <Animate> 
                                <div ref={mobileImg1Ref} className="showForMobile">
                                   <div className="col3-img1"><Image alt={"Image"} originalSrc={props.img3} width={418} height={557}/></div>
                                </div>
                            </Animate>
                            <Animate><p className="paraOne description grey richText" ref={paraOneRef}>{props.desc1}</p></Animate>
                            <Animate><p className="paraTwo description grey richText " ref={paraTwoRef}>{props.desc2}</p></Animate>
                            <div className="showForMobile mobileSmallImagesWrapper" ref={mobileSmallImagesRef}>
                             <Animate>
                                <div className="flexItems mobileSmallImages marginBottom15">
                                    <div className="mobileSmallImage1">
                                        <Image alt={"Image"} adjustHeight={true} originalSrc={props.img1} width={198} height={173}/>
                                    </div>
                                    <div className="mobileSmallImage2">
                                        <div className="col3-img2"><Image alt={"Image"} originalSrc={props.img4} width={198} height={173}/></div> 
                                    </div>
                                </div>
                                <div className="textAndArrow flexItems mobileSmallImageLeftCaption">
                                    <div className="arrow">
                                        <LongArrow
                                            arrowLength="5px"
                                            lineLength="7px"
                                            transformX="2px"
                                            transformY="1px"
                                            arrowWidth="1px"
                                            color="black"
                                            direction="up"
                                            marginTop="5px"
                                        />
                                    </div>
                                    {props.cmsRichContent == true && <div className="text greyCaption richText" dangerouslySetInnerHTML={{__html:props.caption1}}></div>}
                                    {!props.cmsRichContent && <div className="text greyCaption richText">{props.caption1}</div>}
                                </div>
                                </Animate>
                            </div>
                            <Animate><p className="paraThree description grey" ref={paraThreeRef}>{props.desc3}</p></Animate>
                            <div ref={mobileImg2Ref} className="showForMobile">
                            <Animate>
                                <div className="col1Big mobile">
                                    <div className="marginBottom12"><Image alt={"Image"} originalSrc={props.img2} width={269} height={359} /></div>
                                    <div className="textAndArrow flexItems">
                                        <div className="arrow">
                                            <LongArrow
                                                arrowLength="5px"
                                                lineLength="7px"
                                                transformX="2px"
                                                transformY="1px"
                                                arrowWidth="1px"
                                                color="black"
                                                direction="up"
                                                marginTop="5px"
                                            />
                                        </div>
                                        {props.cmsRichContent == true && <div className="text greyCaption richText" dangerouslySetInnerHTML={{__html:props.caption2}}></div>}
                                        {!props.cmsRichContent  && <div className="text greyCaption richText">{props.caption2}</div>}
                                    </div>
                                </div>
                             </Animate>
                            </div>
                        </div>
                    </div>
                    <div className="col3 hideForMobile">
                        <Animate><div ref={col3Img1Ref} className="col3-img1"><Image alt={"Image"} originalSrc={props.img3} width={418} height={557} /></div></Animate>
                        <Animate><div ref={col3Img2Ref} className="col3-img2"><Image alt={"Image"} originalSrc={props.img4} width={198} height={173} /></div></Animate>
                    </div>
                </div>
            </div>  
            <Animate><div ref={tabletImagesRef} className="col3Tab flexItems hideForMobileAndDesktop">
                <div className="col3-img1Tab"><Image alt={"Image"} originalSrc={props.img3ForTablet} width={319} height={430} /></div>
                <div className="col3-img2Tab"><Image alt={"Image"} originalSrc={props.img3} width={319} height={430} /></div>
            </div> </Animate>
            <style jsx>{`
                .hideForMobileAndDesktop {
                    display: none;
                }
                .cultureSection{
                    padding-left:12.29%;
                }
                .col3-img1{
                    margin-bottom:62.3px;
                }
                .col3-img2{
                    padding-right:22rem;
                }
                .col2{
                    width: 45.7%;
                    padding-left: 4%;
                    padding-right: 5%;
                }
                .col1{
                    width: 21.3%;
                }
                .col3{
                    width: 33%;
                }
                .textAndArrow{
                    align-items: flex-start;
                }
                .textAndArrow .arrow{
                    margin-right:1.3rem;
                    margin-bottom: 4px;
                    margin-left: 3px;
                }
                .col1Small > div:first-child, .col1Big > div:first-child{
                    margin-bottom:1.5rem;
                }
                .col1Small{
                    margin-bottom:7.5rem;
                    padding-right:7.1rem;
                }
                // .paraOne{
                //     margin-bottom:2.6rem;
                // }
                // .paraTwo{
                //     margin-bottom:3rem;
                // }
                .paraThree{
                    padding-right: 31px;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .cultureSection{
                        padding-left:7%;
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .col3-img2{
                        padding-right:0rem;
                    }
                    .col1Small{
                        margin-bottom:7.5rem;
                        padding-right:0rem;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .hideForIpad{
                        display: none;
                    }
                   .hideForDesktopAndMobile {
                        display: flex;
                    }
                    .col1Small{
                        margin-bottom:7.5rem;
                        padding-right:0rem;
                    }
                    .forTablet {
                        display: none;
                    }
                    .col1{
                        padding-right:4rem;
                        width: 30%;
                    }
                    .col2 {
                        width: 70%;
                        padding-right: 5%;
                    }
                    .col3 {
                        display: none;
                        padding:0 8.1rem;
                    }
                    .col3-img1{
                        margin-bottom:0px;
                        padding-right: 0rem;
                    }
                    .col3-img2{
                        // width:50%;
                        padding-right:0rem;
                    }
                    .col3-img1Tab,.col3-img2Tab {
                        padding-right: 2.5rem;
                        width:50%;
                    }
                    .col3Tab {
                        display: flex;
                        margin-top: 11.2rem;
                        padding: 0 9.7%;
                        margin-right:-2.5rem;
                    }
                    .paraOne{
                        margin-bottom:2.7rem;
                    }
                    .sectionWrapper {
                        flex-wrap: wrap;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .hideForMobileAndDesktop {
                        display: none;
                    }
                    .sectionWrapper{
                        display:block;
                    }
                    .cultureSection{
                        padding-left:0%;
                        width:100%;
                    }
                    .col2{
                        width: auto;
                        padding:0 2.1rem;
                    }
                    .middleText{
                        padding-right:0rem;
                    }
                    .col3-img2{
                        padding-right:0rem;
                    }
                    .mobileSmallImages{
                        margin-right:-1.1rem;
                        padding:0 0rem;
                    }
                    .mobileSmallImagesWrapper{
                        margin-bottom:2.6rem;
                        opacity:1;
                    }
                    .mobileSmallImage2,.mobileSmallImage1{
                        width:50%;
                        height:100%;
                        padding-right:1.1rem;
                    }
                    .mobileSmallImage1{
                        height:auto;
                    }
                    .mobileSmallImage1 img{
                        height:98%;
                    }
                    .mobileSmallImageLeftCaption{
                        padding-left:0rem;
                        width:50%;
                    }
                    .paraThree{
                        padding-right: 0px;
                        margin-bottom:2.6rem;
                    }
                    .mainHeading{
                        padding-right:6%;
                    }
                    .paraOne{
                        margin-bottom:1.8rem;
                    }
                    .paraTwo{
                        margin-bottom:2.6rem;
                    }
                    .col1Big.mobile .textAndArrow{
                        padding-left:0%;
                    }
                    .col1Big.mobile .arrow{
                        margin-right:0.8rem;
                    }
                    .col3-img1{
                        margin-bottom:2.6rem;
                    }
                    .textAndArrow .arrow{
                        margin-right:0.5rem;
                        margin-bottom: 4px;
                    }
                }
            `}</style>
        </>
    )
}