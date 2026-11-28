import ImageAndCaption from "./imageAndCaption";
import ImageAndCaptionRichContent from "./imageAndCaptionRichContent"
import {MOBILE_BREAKPOINT} from "../config"
import { useRef} from "react";
import Animate from "./animate";

export default function UpAndDownImages(props){
    const leftImageRef = useRef();
    const rightImageRef = useRef();
    
    let rightPaddingBottom = "0"
    if(props.img1Caption1 && !props.img1Caption2)
        rightPaddingBottom = "2.8rem"
    if(props.img1Caption1 && props.img1Caption2)
        rightPaddingBottom = "6.8rem"
    
    // let rightPaddingBottomTabletLandscape = '0'
    // if(props.img1Caption1 && !props.img1Caption2)
    //   rightPaddingBottomTabletLandscape = "2.8rem"
    // if(props.img1Caption1 && props.img1Caption2)
    //   rightPaddingBottomTabletLandscape = "5.6rem"

    
    return (
        <>
            <div className="wrapper lesserAdditionalPadding">
                <div ref={leftImageRef} className="left">
                    <Animate>
                        {props.cmsRichContent ===true && <ImageAndCaption height={props.heightImg1} width={props.widthImg2} img={props.img1} caption={props.img1Caption1} caption2={props.img1Caption2} />}
                        {!props.cmsRichContent && <ImageAndCaptionRichContent height={props.heightImg1} width={props.widthImg2} img={props.img1} caption={props.img1Caption1} caption2={props.img1Caption2} />}
                    </Animate>
                </div>
                <div ref={rightImageRef} className="right">
                    <Animate>
                        {props.cmsRichContent==true && <ImageAndCaption height={props.heightImg2} width={props.widthImg2} img={props.img2} caption={props.img2Caption1} caption2={props.img2Caption2} />}
                        {!props.cmsRichContent && <ImageAndCaptionRichContent height={props.heightImg2} width={props.widthImg2} img={props.img2} caption={props.img2Caption1} caption2={props.img2Caption2} />}
                    </Animate>
                </div>
            </div>
            <style jsx>{`
                .wrapper{
                    display:flex;
                    align-items:flex-end;
                }
                .left{
                    padding-right:10%;
                    width:50%;
                }
                .right{
                    width:50%;
                    padding-bottom:${rightPaddingBottom};
                }
                @media screen and (max-width: 900px){
                    .right{
                        padding-bottom: 10rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .wrapper{
                        display:block;
                        margin-right:0;
                    }
                    .left{
                        padding-right:0;
                        width:100%;
                        margin-bottom:7.1rem;
                    }
                    .right{
                        padding-right:0%;
                        width:100%;
                        padding-bottom:0;
                    }
                }
            `}</style>
        </>
    )
}