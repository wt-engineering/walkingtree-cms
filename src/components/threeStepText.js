import { MOBILE_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT} from "../config"
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
                  {props.cmsRichContent ? <div ref={text1Ref} className="marginBottom26 topText1 smallHeading black" dangerouslySetInnerHTML={{ __html: props.topText1}}></div>
                   :
                   <div ref={text1Ref} className="mbHeading  topText1 smallHeading black">{props.topText1}</div>  
                  }
                  {props.cmsRichContent ?<div ref={text2Ref} className={`topText2`} dangerouslySetInnerHTML={{ __html: props.topText2}}></div>
                  :
                  <div ref={text2Ref} className={`topText2`}>{props.topText2}</div>
                  }
            </div>
            <style jsx>{`
                .centered .topText1{
                    padding: 0 20%;
                }
                .centered .topText2{
                    padding: 0 21%;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .centered .topText1{
                        padding: 0px 19%;
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