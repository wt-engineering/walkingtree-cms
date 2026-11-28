import React,{ useRef} from 'react'
import Button from './button'
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Image from "./Image";
export default function ImageTextButton(props) {
    const imageRef = useRef();
    const shortHeadingRef = useRef();
    const descRef = useRef();
    const buttonRef = useRef();
    return (
        <>
            <div className="imageTextButton lesserAdditionalPadding alignCenter">
                <div ref={imageRef} className="marginBottom90 imageWrapper"><Image originalSrc={props.img} height={539} width={1086} alt="Image" className="width-100"/></div>
                <h2 ref={shortHeadingRef} className="marginBottom26 shortHeading mainShortHeading grey">{props.shortHeading}</h2>
                <h1 ref={descRef} className="marginBottom55 desc bigDescription black">{props.desc}</h1>
                <div ref={buttonRef} className="cta">
                    <Button buttonText={props.buttonText}  buttonType="rectangle" textOnHover={props.buttonTextOnHover} />
                </div>
            </div>   
            <style jsx>{`
                .desc{
                    padding: 0 13%;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .desc{
                        padding: 0 5%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .desc{
                        padding: 0 0%;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .imageTextButton{
                        padding:0;
                    }
                    .desc,.shortHeading{
                        padding: 0 5.1rem;
                    }
                    .desc{
                        font-size: 16px;
                        line-height: 22px;
                    }
                }
            `}</style>
        </>
    )
}
