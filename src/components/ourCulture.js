import ImageAndCaption from "./imageAndCaption";
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import { useRef} from "react";
import ImageAndCaptionRichContent from "./imageAndCaptionRichContent";
import Animate from "./animate";
export default function OurCulture(props){
    const shortHeadingRef = useRef();
    const shortHeadingRefTab = useRef();
    const image1Ref = useRef();
    const image2Ref = useRef();
    const headingRef = useRef();
    const leftDesc1Ref = useRef();
    const leftDesc2Ref = useRef();
    const rightDesc1Ref = useRef();
    const rightDesc2Ref = useRef();
    const headingRefTab = useRef();
    const leftDesc1RefTab = useRef();
    const leftDesc2RefTab = useRef();
    const rightDesc1RefTab = useRef();
    const rightDesc2RefTab = useRef();

    return (
        <>
            <div className="wrapper">
                <div className="topTextSection lesserAdditionalPadding space90">
                    <h2 ref={shortHeadingRef} className="shortHeading mainShortHeading mbBelowShortHeading">{props.shortHeading}</h2>
                    <h1 ref={headingRef} className="heading smallHeading black mbHeading">{props.heading}</h1>
                    <div className="descContainer flexItems">
                        <div className="left">
                            <p ref={leftDesc1Ref} className="leftDesc1  mbHeading">{props.leftDesc1}</p>
                            <p ref={leftDesc2Ref} className="leftDesc2 ">{props.leftDesc2}</p>
                        </div>
                        <div className="right">
                            <div className="mbHeading">
                                <p ref={rightDesc1Ref} className="rightDesc1 bigDescription black mbBelowShortHeading">{props.rightDesc1}</p>
                                <p className="rightDescCaption greyCaption">{props.rightCaption1}</p>
                            </div>
                            <div className=''>
                                <p ref={rightDesc2Ref} className="rightDesc2 bigDescription black mbBelowShortHeading">{props.rightDesc2}</p>
                                <p className="rightDescCaption greyCaption">{props.rightCaption2}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flexItems bottom lesserAdditionalPaddingLeft">
                    <div className="left">
                        <div className="tabletTextTopLeft">
                            <h2 ref={shortHeadingRefTab} className="shortHeading mainShortHeading marginBottom26">{props.shortHeading}</h2>
                            <h1 ref={headingRefTab} className="heading smallHeading marginBottom26">{props.heading}</h1>
                            <p ref={leftDesc1RefTab} className="leftDesc1 description marginBottom26">{props.leftDesc1}</p>
                            <p ref={leftDesc2RefTab} className="leftDesc2 description">{props.leftDesc2}</p>
                        </div>
                        <div ref={image1Ref} className="portraitImage">{props.cmsRichContent===true ? <ImageAndCaption height={585} width={390} img={props.img1} caption={props.caption1} />:<ImageAndCaptionRichContent height={603} width={390} img={props.img1} caption={props.caption1}/>}</div>
                    </div>
                    <div className="right">
                        <div ref={image2Ref} className="landscapeImage">{props.cmsRichContent==true ?<ImageAndCaption height={585} width={849} img={props.img2} caption={props.caption2} />:<ImageAndCaptionRichContent  height={585} width={849} img={props.img2} caption={props.caption2}/>}</div>
                        {/* caption={{showArrow:true,text:"<strong>Signe Hytte</strong>, Head Of Design."}} */}
                        <div className="tabletTextBottomRight">
                            <p ref={rightDesc1RefTab} className="rightDesc1 bigDescription grey">{props.rightDesc1}</p>
                            <p ref={rightDesc2RefTab} className="rightDesc2 bigDescription grey">{props.rightDesc2}</p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`  
                .tabletTextTopLeft,.tabletTextBottomRight{
                    display:none;
                }
                .heading{
                    padding-right: 55%;
                }
                .left{
                    width:38%;
                    flex:1 0 auto;
                }
                .right{
                    padding-left:15%;
                    width:62%;
                    flex:1 0 auto;
                }
                .bottom .left{
                    width:24.2%;
                    flex:1 0 30.1%;
                }
                .bottom .right{
                    padding-left:2.2%;
                    width:64%;
                    flex:1 0 69.9%;
                }
                // .bottom{
                //     margin-top:11.3rem;
                // }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .topTextSection{
                        display:none;
                    }
                    .heading{
                        padding-right: 0%;
                    }
                    .bottom .left{
                        width:100%;
                        display:flex;
                        margin-bottom:8.2rem;
                    }
                    .bottom .right{
                        padding-left:0%;
                        width:100%;
                        display:flex;
                    }
                    .bottom{
                        margin-top:0rem;
                        padding:0 9.7%;
                        display:block;
                    }
                    .tabletTextTopLeft,.tabletTextBottomRight{
                        display:block;
                    }
                    .tabletTextTopLeft{
                        width:58%;
                        padding-right: 7%;
                    }
                    .portraitImage{
                        width:42%;
                    }
                    .landscapeImage{
                        width:58%;
                    }
                    .tabletTextBottomRight{
                        width:42%;
                        padding-left: 5%;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .topTextSection,.descContainer{
                        display:block;
                    }
                    .bottom .left{
                        margin-bottom:1.6rem;
                    }
                    .tabletTextTopLeft,.tabletTextBottomRight{
                        display:none;
                    }
                    .portraitImage{
                        width:100%;
                    }
                    .landscapeImage{
                        width:100%;
                    }
                    .bottom{
                        padding:0 2.1rem;
                    }
                    .topTextSection .left{
                        width:100%;
                    }
                    .leftDesc2{
                        margin-bottom:3rem;
                    }
                    .rightDesc1{
                        margin-bottom:1.6rem;
                    }
                    .topTextSection .right{
                        padding-left:0%;
                        width:100%;
                        margin-bottom:3rem;
                    }
                }
            `}</style>
        </>
    )
}