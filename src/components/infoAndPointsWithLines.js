import React, { useEffect, useRef } from "react";
import { MOBILE_BREAKPOINT, MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Image from "./Image";

import Animate from "./animate";

export default function InfoAndPointsWithLines(props){
    const itemsRef = useRef([]);
    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, props.points.length);
     }, [props.points]);

    return (
        <>
            <div className="wrapper">
                <div className="top flexItems lesserAdditionalPadding">
                    <div className="left">
                        <Animate> <div className="headingAndLine mbHeading bigHeading line1 black richText">{props.heading1}</div></Animate>
                       {!!props.cmsRichContent && <Animate><div className=" descTop" dangerouslySetInnerHTML={{__html:props.description}}></div></Animate>}
                       {!props.cmsRichContent && <Animate><div className=" descTop ">{props.description}</div></Animate>}
                    </div>
                    <div className="right">
                        <div className="imagesWrapper">
                            <Animate>
                                <div className="imageWrapper marginBottom16"><Image height={794} width={529} alt="Image" originalSrc={props.img1}/></div>
                                {!!props.cmsRichContent && <div className="captions greyCaption" dangerouslySetInnerHTML={{__html: props.caption}}></div>}
                                {!props.cmsRichContent && <div className="captions greyCaption">{props.caption}</div>}
                            </Animate>
                        </div>
                    </div>
                </div>
                {!!props.points &&
                    <div className="points lesserAdditionalPadding">
                        {props.points.map((point,id)=>{
                            return (
                                <div className="singlePoint" key={point._key}>
                                    <Animate>
                                        <div ref={el => itemsRef.current[id] = el}  className="point">
                                            <div className="pointLeft mainShortHeading black">
                                                {point.heading}
                                            </div>
                                            <div className="pointRight description" dangerouslySetInnerHTML={{__html:point.text}}></div>
                                        </div>
                                    </Animate>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
            <style jsx>{`
                .points{
                    margin-top:12rem;
                }
                .descTop{
                    color:#9e9e9e;
                }
                .points .singlePoint .point{
                    border-bottom:1px solid #000000;
                }
                .points .singlePoint:first-child .point{
                    border-top:1px solid #000000;
                }
                .point{
                    display:flex;
                    padding-top:3rem;
                    padding-bottom:3rem;
                }
                .pointLeft{
                    flex:1 0 auto;
                    width:30%;
                    padding-left:1rem;
                    
                }
                .pointRight{
                    flex:1 0 auto;
                    width:70%;
                }
                .line{
                    width:5rem;
                    border-bottom:1px solid #000000;
                    flex:0 0 auto;
                    transform: translateY(-0.7rem);
                }
                .smallHeading{
                    flex:1 1 auto;
                }
                .headingAndLine{
                    padding-right:24%;
                }
                .top{
                    margin-right: -7%
                }
                .left,.right{
                    flex:1 0 auto;
                    width:50%;
                    padding-right: 7%;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .points{
                        margin-top:10rem;
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .points{
                        margin-top:8.5rem;
                    }
                    .top{
                        margin-right: -5%
                    }
                    .left,.right{
                        padding-right: 5%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .top{
                        display:block;
                    }
                    .left{
                        width:100%;
                        text-align: center;
                        // padding: 0 12%;
                        margin-bottom:5.5rem;
                    }
                    .captions{
                        text-align: center;
                    }
                    .right{
                        width:100%;
                    }
                    .headingAndLine{
                        padding-right:0%;
                    }
                    .top{
                        margin-right: 0%
                    }
                    .left,.right{
                        padding-right: 0%;
                    }
                    .points{
                        margin-top:6rem;
                    }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .left{
                        padding: 0 0%;
                        margin-bottom:3rem;
                        text-align: center;
                    }
                    .points{
                        margin-top:3rem;
                    }
                    .imagesWrapper{
                        margin-right:0rem;
                        display:block;
                    }
                    .imagesWrapper .imageWrapper:first-child{
                        margin-bottom:2.3rem;
                    }
                    .imageWrapper{
                        padding-right:0rem;
                    }
                    .headingAndLine{
                        margin-top:1.3rem;
                    }
                }
            `}</style>
        </>
    )
}