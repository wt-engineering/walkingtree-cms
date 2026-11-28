import { useRef, useContext, useEffect  } from "react";
import { MOBILE_BREAKPOINT, MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Animate from "./animate";


export default function FullWidthBoxWithTextOnTheLeft(props){

    return (
        <>
            <div className="wrapper lesserAdditionalPaddingLeft">
                <div className="left">
                    <Animate><div className="mainShortHeading">{props.shortHeading}</div></Animate>
                    <Animate><div className="smallHeading line1">{props.smallHeading1}</div></Animate>
                    <Animate><div className="smallHeading line2">{props.smallHeading2}<span className="line inlineBlock"></span></div></Animate>
                    <Animate><div className="description descTop grey"> {props.desc}</div></Animate>
                </div>
            </div>
            <style jsx>{`
                .wrapper{
                    padding-right: 60%;
                }
                .line1{
                    margin-top:2.8rem;
                }
                .descTop{
                    margin-top:3.4rem;
                }
                .line{
                    width:5rem;
                    border-bottom:1px solid #000000;
                    flex:0 0 auto;
                    transform: translateY(-0.7rem);
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .wrapper{
                        padding-right: 50%;
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .wrapper{
                        padding-right: 42%;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .wrapper{
                        padding-right: 5.1rem;
                        padding-left:5.1rem;
                        text-align:center;
                    }
                    .line1{
                        margin-top:1.7rem;
                    }
                }

            `}</style>
        </>
    )
}