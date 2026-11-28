import React from "react";
import { MOBILE_BREAKPOINT, MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Animate from "./animate";
import ImageAndCaption from "./imageAndCaption";
import ImageAndCaptionRichContent from "./imageAndCaptionRichContent"

export default function HeadingAndDescriptionLeftImageRight(props){

    return (
        <>
            <div className="wrapper lesserAdditionalPaddingLeft">
                <div className="flexItems columnWrapper">
                    <div className="left">
                     <Animate><div className="smallHeading heading marginBottom55">{props.heading}</div></Animate>
                     <Animate><div className="description desc">{props.desc}</div></Animate>
                    </div>
                    {props.cmsRichContent == true && <Animate><div  className="right"><ImageAndCaption height={520} width={749}  img={props.img} caption={props.caption}/></div></Animate>}
                    {!props.cmsRichContent  && <Animate><div className="right"><ImageAndCaptionRichContent height={520} width={749} img={props.img} caption={props.caption}/></div></Animate>}
                </div>
            </div>
            <style jsx>{`
                .left{
                    padding-right:9%;
                    width:40%;
                    flex:1 0 auto;
                }
                .right{
                    width:60%;
                    flex:1 0 auto;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .wrapper{
                        padding:0 6.6rem;
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .left{
                        padding-right:5%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .columnWrapper{
                        display:block;
                    }
                    .desc{
                      margin-bottom:4.5rem;
                    }
                    .left{
                        padding-right:0%;
                        width:100%;
                        text-align:center;
                    }
                    .right{
                        width:100%;
                        padding:0 9.7%;
                    }
                    .wrapper{
                        padding:0 0rem;
                    }
                    .heading,.desc{
                        padding:0 9.7%;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .right{
                        width:100%;
                        padding:0 0%;
                    }
                    .heading{
                        padding:0 2.1rem;
                    }
                    .desc{
                        padding: 0px 12%;
                        margin-bottom:3.5rem;
                    }
                }
            `}</style>
        </>
    )
}