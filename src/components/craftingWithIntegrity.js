import React from "react";
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from "../config";
export default function CraftingWithIntegrity(props) {
    return (
        <>
            <div className="container positionRelative">
                 <div className="centerText">
                    <h2 className="mbBelowShortHeading shortLine mainShortHeading" >{props.shortHeading}</h2>
                    {!!props.cmsRichContent &&  <div className="mbHeading mainheading smallHeading" dangerouslySetInnerHTML={{__html:props.mainHeading}}></div>}
                    {!props.cmsRichContent &&  <div className="mbHeading mainheading smallHeading">{props.mainHeading}</div>}
                    {!!props.cmsRichContent && <div className="desc1 description descTop " dangerouslySetInnerHTML={{__html:props.description}}></div>}
                    {!props.cmsRichContent && <div className="desc1 description descTop ">{props.description}</div>}
                </div>
            </div>
            <style jsx>{`
            .container{
                background-size:cover;
                background-position: center;
                background-image:${`url(${props.mainImage})`}
            }
            .image{
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9;
            }
            .imgDesktop{
                object:fit-cover;
                object-position: center;
            }
            .centerText{
                width: 50%;
                padding: 5rem 0 5rem 12.29%;
                position:relative;
                z-index:3;
            }
            .shortLine,.mainheading,.desc1{
                color:${!!props.enableTextColor?'#ecebea':'#414042 !important'};
            }
            .mainheading p{
                margin:0;
            }
            @media screen and (max-width:${TABLET_LANDSCAPE_BREAKPOINT}px){
                .centerText{
                    width: 65%;
                    padding: 5rem 0 5rem 8%;
                }
            }
            @media screen and (max-width: ${TABLET_BREAKPOINT}px){
                .centerText{
                    width: 100%;
                    padding: 5rem 0 5rem 8%;
                }
            }
            @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                .centerText{
                    padding: 5rem 2.1rem 5rem 2.1rem;
                }
                .container2{
                    align-items: center;
                    justify-content: center; 
                }

            }
            `}</style>
        </>
    )
}

