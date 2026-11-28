import React, {useState } from 'react'
import LongArrow from './longArrow'
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT} from '../config'
import Animate from './animate'
import Image from './Image';

export default function HorizontalSection(props) {
    const [hover, setHover] = useState(false);
    return (
        <>
            <div className={`sectionContainer width-100 ${hover?"hover":""}`}>
                <div 
                 onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} 
                 className="imagesContainer marginBottom30 positionRelative">
                    <Animate>
                        <div className="imageStatic onHover"><Image alt={"Image"} originalSrc={props.defaultImage} width={1161} height={407} /></div>
                        {/* <div className="image hover"><Image  width={1161} height={407} alt="Image" className="width-100" originalSrc={props.hoverImage}/></div> */}
                        <div className="image default"><Image alt={"Image"} originalSrc={props.defaultImage} width={1161} height={407}/></div>
                        <div className="textOnImage white font20 moderatLight hideForMobile">{props.defaultText}</div>
                        <div className="textOnImage second white font20 moderatLight hideForMobile">{props.hoverText}</div>
                    </Animate>
                    </div>
                    <Animate>
                {/* <div className="textAndArrow flexItems">
                    
                    <div className="arrow">
                        <LongArrow
                            arrowLength="5px"
                            lineLength="10px"
                            transformX="3.3px"
                            transformY="1px"
                            arrowWidth="1px"
                            color="black"
                            direction="up"
                            marginTop="6px"
                        />
                    </div>
                    {props.cmsRichContent == true && <div className="text greyCaption" dangerouslySetInnerHTML={{__html:props.caption}}></div>}
                    {!props.cmsRichContent  && <div className="text greyCaption">{props.caption}</div>}
                  
                </div>  */}
                </Animate>
            </div>   
            <style jsx>{`
                .imagesContainer{
                    width:85.7%;
                }
                .image{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                }
                .image.default{
                    opacity:1;
                    filter: blur(0px);
                    transition:all 0s ease-out 0s 0.3s;
                }
                .sectionContainer.hover .image.default{
                    opacity:0;
                    filter: blur(4px);
                    transition:all 0.3s ease-out;
                }
                .image.hover{
                    opacity:0;
                    filter: blur(4px);
                    transition:all 0.3s ease-out;
                }
                .sectionContainer.hover .image.hover{
                    opacity:1;
                    filter: blur(0px);
                    transition:all 0s ease-out 0s;
                }
                .imageStatic img{
                    opacity:0;
                }
                .textOnImage{
                    opacity:1;
                    position: absolute;
                    bottom:3.7rem;
                    right:5.6rem;
                    width:37%;
                    transform:translateY(0px);
                    transition:all 0.3s ease-in;
                }
                .sectionContainer.hover .textOnImage{
                    opacity:0;
                    transform:translateY(10px);
                    transition:all 0s ease-in;
                }
                .textOnImage.second{
                    opacity:0;
                    transform:translateY(10px);
                    transition:all 0s ease-in;
                }
                .sectionContainer.hover .textOnImage.second{
                    opacity:1;
                    transform:translateY(0px);
                    transition:all 0.3s ease-in;
                }
                .textAndArrow{
                    width:80.7%;
                    align-items: flex-start;
                    justify-content: center;
                }
                .textAndArrow .arrow{
                    margin-right:1.3rem;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .textAndArrow{
                        justify-content:left;
                        margin-left:3rem;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .font20 {
                        font-size: 1.6rem;
                    }
                    .textOnImage{
                        opacity:1;
                        position: absolute;
                        bottom:1.4rem;
                        right:4.6rem;
                        width:51%;
                        transform:translateY(0px);
                        transition:all 0.3s ease-in;
                    }
                    .textAndArrow{
                        width:78.7%;
                        // align-items: flex-start;
                        justify-content: center;
                    }
                    .arrow {
                        margin-left: 1.3rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .imagesContainer{
                        width:100%;
                    }
                    .textAndArrow{
                        width:100%;
                        padding:0 2.6rem;
                    }
                    .arrow {
                        margin-left: 0rem;
                    }
                }
            `}</style>
        </>
    )
}
