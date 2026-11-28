import ImageAndCaption from './imageAndCaption'
import ThreeStepText from './threeStepText'
import ThreeStepTextRichContent from './threeStepTextRichContent';
import { MOBILE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import { useRef } from 'react';
import ImageAndCaptionRichContent from './imageAndCaptionRichContent'
import Animate from './animate';
export default function ThreeStepTextOnTheRightSurroundedByImages(props){
    const imageOneRef = useRef();
    const imageTwoRef = useRef();
    const imageThreeRef = useRef();

    return (
        <>
            <div className="wrapper lesserAdditionalPadding flexItems imageTextAndBottomImages">
                <div className="left">
                    <div className="topText showForMobile">
                        {props.cmsRichContent===true && <ThreeStepText noPadding={true} topText2Class="description grey" shortHeading={props.shortHeadingTop} topText1={props.topText1Top} topText2={props.topText2Top} />}
                       {!props.cmsRichContent && <ThreeStepTextRichContent noPadding={true} topText2Class="description grey" shortHeading={props.shortHeadingTop} topText1={props.topText1Top} topText2={props.topText2Top} />}
                    </div>
                    <Animate><div ref={imageOneRef}>{props.cmsRichContent==true ?<ImageAndCaption  height={524} width={420} img={props.image1} caption={props.caption1}/>:<ImageAndCaptionRichContent height={524} width={420} img={props.image1} caption={props.caption1}/>}</div></Animate>
                    <Animate>
                        <div ref={imageTwoRef} className="leftImgBottom">
                            {props.cmsRichContent==true ?<ImageAndCaption height={357} width={420} img={props.image2} caption={props.caption2}/>:<ImageAndCaptionRichContent height={357} width={420} img={props.image2} caption={props.caption2}/>}
                        </div>
                    </Animate>
                </div>
                <div className="right">
                    <div className="top hideForMobile">
                        {props.cmsRichContent===true && <ThreeStepText noPadding={true} topText2Class="description grey" shortHeading={props.shortHeadingTop} topText1={props.topText1Top} topText2={props.topText2Top} />}
                        {!props.cmsRichContent && <ThreeStepTextRichContent noPadding={true} topText2Class="description grey" shortHeading={props.shortHeadingTop} topText1={props.topText1Top} topText2={props.topText2Top} />}
                    </div>
                    <div className="bottom alignRight">
                        <Animate>
                            <div ref={imageThreeRef} className="rightBottomImg">
                                {props.cmsRichContent==true ?<ImageAndCaption height={524} width={420}  img={props.image3} caption={props.caption3}/>:<ImageAndCaptionRichContent height={524} width={420} img={props.image3} caption={props.caption3}/>}
                            </div>
                        </Animate>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .left{
                    flex:1 0 38%;
                }
                .right{
                    flex:1 0 62%;
                    padding-left:12.5%;
                    display:flex;
                    flex-flow:column nowrap;
                    justify-content:space-between;
                }
                .leftImgBottom{
                    margin-top:11rem;
                }
                .rightBottomImg{
                    margin-left: 30%;
                    width: 70%;
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .rightBottomImg{
                        margin-left: 0%;
                        width: 100%;
                    }
                    .left{
                        flex:1 0 50%;
                        padding-right:2%;
                    }
                    .right{
                        flex:1 0 50%;
                        padding-left:2%;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .wrapper{
                        display:block;
                    }
                    .left{
                        padding-right:0%;
                    }
                    .right{
                        padding-left:0%;
                    }
                    .topText{
                        margin-top:0rem;
                        padding: 0 0%;
                        margin-bottom:3rem;
                    }
                    .leftImgBottom{
                        margin-top:3rem;
                        margin-bottom:3rem;
                    }
                }
            `}</style>
        </>
    )
}