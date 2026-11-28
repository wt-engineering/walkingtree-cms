import React from 'react'
import Button from './button'
import ThreeStepText from './threeStepTextRichContent'
import { MOBILE_BREAKPOINT, MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Image from './Image';
import Animate from "./animate"

export default function CircleImages(props) {
    return (
        <>
                <div className="threeCommonImage flexItems lesserAdditionalPadding marginBottom90">
                    <div className="img1"><Animate><Image  height={306} width={422} className="width-100" alt={"Image"} originalSrc={props.img1}/></Animate></div>
                    <div className="img2"><Animate><Image  height={306} width={228} className="width-100" alt={"Image"} originalSrc={props.img2}/></Animate></div>
                    <div className="img3"><Animate><Image  height={306} width={422} alt={"Image"} originalSrc={props.img3}/></Animate></div>
                </div>
                <div className="threeTextContainer"><ThreeStepText center={true}  paddingClass="" shortHeading={props.shortHeading} topText1={props.topText1} topText2={props.topText2}/></div> 
                {!!props.link && props.buttonText &&<div className="buttonContainer alignCenter ctaAbove"><Animate><Button buttonText={props.buttonText} buttonType="rectangle" textOnHover={props.buttonText} href={props.link}/></Animate></div>}
            <style jsx>{`
                .threeCommonImage{
                    margin-right:-7px;
                }
                .img1,.img2,.img3{
                    padding-right: 7px;
                }
                .img1,.img3{
                    width:40%
                }
                .img2{
                    width:22%;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
        
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
   
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                   
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .img2{
                        width:22%;
                    }
                     .img1,.img3{
                        width:39%
                    }
                }
            `}</style>
        </>
    )
}
