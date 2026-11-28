
import Button from './button'
import ImageAndCaption from './imageAndCaption'
import { MOBILE_BREAKPOINT, MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import { useRef } from 'react';
import ImageAndCaptionRichContent from "../components/imageAndCaptionRichContent";
import Animate from './animate';

export default function TextSurroundedByImagesAndCta(props){
    const leftImageRef = useRef();
    const ctaTabRef = useRef();
    const shortHeadingRef = useRef();
    const ctaRef = useRef();
    const rightTopImageRef = useRef();
    const rightBottomImageRef = useRef();
    const headingRef = useRef();
    const descRef = useRef();
    const descTabRef = useRef();

    return (
        <>
            <div className="wrapper">
                <Animate><div ref={shortHeadingRef} className="mainShortHeading marginBottom26 showForTabletAndBelow">{props.shortHeading}</div></Animate>
                {props.cmsRichContent===true && <Animate><div ref={headingRef} className="smallHeading marginBottom55 showForTabletAndBelow" dangerouslySetInnerHTML={{__html:props.heading}}></div></Animate>}
                {props.cmsRichContent==false && <Animate><div ref={headingRef} className="smallHeading marginBottom55 showForTabletAndBelow" >{props.heading}</div></Animate>}
                <div className="flexItems flexcols">
                    <div className="row1">
                        {props.cmsRichContent == true && <Animate><div ref={leftImageRef} className="marginBottom30 leftImageBig"><ImageAndCaption height={291} width={371} img={props.image1} caption={{showArrow:true,text:props.image1Caption}} /></div></Animate>}
                        {!props.cmsRichContent && <Animate><div ref={leftImageRef} className="marginBottom30 leftImageBig"><ImageAndCaptionRichContent height={291} width={371} img={props.image1} caption={{showArrow:true,text:props.image1Caption}} /></div></Animate>}
                        <div className="row2ForSmallerScreens">
                            <Animate><div ref={descTabRef} className="description marginBottom55">{props.desc}</div></Animate>
                            <Animate>
                                <div ref={ctaTabRef} className="cta">
                                    <Button buttonText={props.buttonText} buttonType="rectangle" textOnHover={props.buttonTextOnHover}/>
                                </div>
                            </Animate>
                        </div>
                    </div>
                    <div className="row2">
                        <Animate><div ref={shortHeadingRef} className="mainShortHeading marginBottom26">{props.shortHeading}</div></Animate>
                        {props.cmsRichContent==true && <Animate><div ref={headingRef} className="smallHeading marginBottom55" dangerouslySetInnerHTML={{__html:props.heading}}></div></Animate>}
                        {props.cmsRichContent==false && <Animate><div ref={headingRef} className="smallHeading marginBottom55">{props.heading}</div></Animate>}
                        <Animate><div ref={descRef} className="description marginBottom55">{props.desc}</div></Animate>
                        <Animate><div ref={ctaRef} className="cta"><Button buttonText={props.buttonText} buttonType="rectangle" textOnHover={props.buttonTextOnHover}/></div></Animate>
                    </div>
                    <div className="row3">
                        {props.cmsRichContent== true && <Animate><div ref={rightTopImageRef} className="rightTopImage"><ImageAndCaption height={258} width={283} img={props.image2} caption={{showArrow:true,text:props.image2Caption}} /></div></Animate>}
                        {!props.cmsRichContent && <Animate><div ref={rightTopImageRef} className="rightTopImage"><ImageAndCaptionRichContent height={258} width={283} img={props.image2} caption={{showArrow:true,text:props.image2Caption}} /></div></Animate>}
                        <Animate><div ref={rightBottomImageRef} className="row3BottomImage"><ImageAndCaption height={283} width={258} img={props.image3} caption=""/></div></Animate>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .row2ForSmallerScreens{
                    display:none;
                }
                .rightTopImage{
                    margin-bottom:10rem;
                }
                .wrapper{
                    padding:0 12.29% 0 6.6rem;
                }
                .row1{
                    width:31%;
                    flex: 1 0 auto;
                }
                .row2{
                    flex: 0 1 auto;
                    padding-left:5.5%;
                    padding-right:6%;
                }
                .row3{
                    width:24%;
                    flex: 1 0 auto;
                }
                .showForTabletAndBelow{
                    display:none;
                    padding:0 24.5%;
                    text-align:center;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .row1,.row3{
                        width:50%;
                    }
                    .row2ForSmallerScreens,.showForTabletAndBelow{
                        display:block;
                    }
                    .row2{
                        width:0;
                        display:none;
                    }
                    .row1{
                        padding-right: 2%;
                        display: flex;
                        flex-direction: column;
                    }
                    .row3{
                        padding-left: 15%;
                    }
                    .wrapper{
                        padding:0 13.7% 0 9.7%;
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .showForTabletAndBelow{
                        padding:0 12.5%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .row3{
                        display:flex;
                        flex-direction: column;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .flexcols{
                        display:block;
                    }
                    .wrapper{
                        padding:0 2.1rem;
                    }
                    .showForTabletAndBelow{
                        padding:0 0;
                    }
                    .row1,.row3{
                        width:100%;
                    }
                    .row1{
                        padding-right:0%;
                        flex-direction: column-reverse;
                    }
                    .row3{
                        padding-left:0%;
                        margin-top:2.2rem;
                        display:flex;
                        flex-direction: row;
                    }
                    .row2ForSmallerScreens{
                        padding:0 0;
                        text-align:center;
                        margin-bottom:3.5rem;
                    }
                    .row3BottomImage{
                        width:50%;
                        padding-left:0.55rem;
                    }
                    .rightTopImage{
                        width:50%;
                        padding-right:0.55rem;
                        margin-bottom:0rem;
                    }
                    .leftImageBig{
                        //padding:0 2.9rem;
                    }
                }
            `}</style>
        </>
    )
}