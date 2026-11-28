import { MOBILE_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT } from "../config"
import { useRef } from "react";
import Animate from "./animate";

export default function ThreeStepText(props){
    const shortHeadingRef = useRef();
    const text1Ref = useRef();
    const text2Ref = useRef();

    return (
        <>
           <div className={`${props.center?"alignCenter centered":""} ${props.paddingClass?props.paddingClass:""} ${props.noPadding?"noPadding":""}`}>
           <div ref={shortHeadingRef} className="mbBelowShortHeading richText  shortHeading mainShortHeading">{props.shortHeading}</div>
                  {props.cmsRichContent ? <div ref={text1Ref} className="mbHeading topText1  smallHeading black" dangerouslySetInnerHTML={{ __html: props.topText1}}></div>
                   :
                   <div ref={text1Ref} className="mbHeading topText1 smallHeading black richText">{props.topText1}</div>  
                  }
                  {props.cmsRichContent ?<div ref={text2Ref} className={`topText2 richText`} dangerouslySetInnerHTML={{ __html: props.topText2}}></div>
                  :
                  <div ref={text2Ref} className={`topText2 richText`}>{props.topText2}</div>
                  }
            </div>
            <style jsx>{`
                .centered .topText1{
                    padding: 0 28%;
                }
                .centered .topText2{
                    padding: 0 21%;
                }
                .shortHeading p{
                    margin-bottom:0;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .centered .topText1{
                        padding: 0px 25%;
                    }
                    .centered .topText2{
                        padding: 0 16%;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .centered .topText1,.toptext1{
                        padding: 0 2.1rem;
                    }
                    .topText2,.centered .topText2 {
                        padding: 0 2.1rem;
                    }
                    .noPadding .topText2, .noPadding.centered .topText2 {
                        padding: 0 0rem;
                    }
                }
            `}</style>
        </>
    )
}