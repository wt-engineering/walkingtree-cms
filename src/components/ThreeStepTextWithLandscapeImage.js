import { MOBILE_BREAKPOINT,MEDIUM_BREAKPOINT, TABLET_BREAKPOINT} from "../config"
import { useRef } from "react";
import Image from "./Image";
import Animate from "./animate";
import Video from "./video"

export default function ThreeStepTextWithLandscapeImage(props){
    const shortHeadingRef = useRef();
    const text1Ref = useRef();
    const text2Ref = useRef();
    const imageRef = useRef();

    return (
        <>  
        <div className="container lesserAdditionalPadding">
            <div className={`${props.center?"alignCenter  centered":""} ${props.paddingClass?props.paddingClass:""} ${props.noPadding?"noPadding":""}`}>
                <Animate><div ref={shortHeadingRef} className="mbBelowShortHeading shortHeading mainShortHeading richText">{props.shortHeading}</div></Animate>
                <Animate>
                {props.cmsRichContent?
                    <div ref={text1Ref} className="mbHeading topText1 smallHeading black richText" dangerouslySetInnerHTML={{ __html: props.topText1}}></div>
                    :
                    <div ref={text1Ref} className="mbHeading topText1 smallHeading black richText" >{props.topText1}</div>
                }
                </Animate>
                <Animate>
                    {props.cmsRichContent?
                        <div ref={text2Ref} className=" topText2 marginBottom55 richText"  dangerouslySetInnerHTML={{ __html: props.topText2}}></div>
                        :
                        <div ref={text2Ref} className="topText2 marginBottom55 richText">{props.topText2}</div>
                    }
                </Animate>
            </div>
            {!!props.img &&
                <Animate><div ref={imageRef} className="imageContainer"><Image width={1086} height={565} alt="Image" originalSrc={props.img}/></div></Animate>
            }
             <div className="imageVIdeo">
                {props.mediatype =='image' ?
                    // <Image height={900} width={1440} originalSrc={props.img} alt={"optionalImage"} /> 
                
                    <Image height={565} width={1086} originalSrc={props.img} alt={"optionalImage"} />
                    : 
                    // <Video video={props.video} videoUrl={props.videoUrl} videoUrlMobile={props.videoUrlMobile}/> 
                    <></>
                
                }
             </div>  
        </div>    
            <style jsx>{`
                .shortHeading p{
                    margin-bottom:0;
                }
                .centered .topText1{
                    padding: 0 22%;
                }
                .centered .topText2{
                    padding: 0 9%;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px){
                 .centered .topText1{
                    padding: 0 18%;
                 }
                 .centered .topText2{
                    padding: 0 7%;
                 }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                .centered .topText1{
                    padding: 0 14%;
                 }
                 .centered .topText2{
                    padding: 0 5%;
                 }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .centered .topText1,.toptext1{
                        padding: 0 ;
                    }
                    .topText2,.centered .topText2 {
                        padding: 0 ;
                    }
                    .noPadding .topText2, .noPadding.centered .topText2 {
                        padding: 0 0rem;
                    }
                }
            `}</style>
        </>
    )
}