import React, { useRef,useState } from 'react'
import Button from './button';
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT,MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from '../config'
import Image from "./Image";
import Animate from './animate';

export default function RandomImages(props) {
    const [indexSlider, setIndexSlider] = useState(0);
    const [sectionData, setSectionData] = useState(props.randomImagesSlider[0]);
    const [activeAnimation, setActiveAnimation] = useState("none")   
    const shortHeadingRef = useRef();
    const descRef = useRef();
    const sliderWrapperRef = useRef();
 
    function setSectionInformation(id){
        setActiveAnimation("opacityNone")
        setSectionData(props.randomImagesSlider[id]);
        let setData = setTimeout(() => {
            setActiveAnimation("fadeUpAnimation")
        }, 100);
    }

    function nextSlide(){
        if(indexSlider>=0 && indexSlider<props.randomImagesSlider.length){
            setIndexSlider(indexSlider+1)
            setSectionInformation(indexSlider+1)
        }
        if((indexSlider+1)==props.randomImagesSlider.length){
            setIndexSlider(0)
            setSectionInformation(0)
        }
    }
    function prevSlide(){
        if(indexSlider>0 && indexSlider<props.randomImagesSlider.length){
            setIndexSlider(indexSlider-1)
            setSectionInformation(indexSlider-1)
        }
        if(indexSlider==0){
            setIndexSlider(props.randomImagesSlider.length-1)
            setSectionInformation(props.randomImagesSlider.length-1)
        }
    }
    return (
        <>
        <div className="container paddingBottom  paddedContent">
            <div className="randomImages ">
                <div className="topText alignCenter">
                    <Animate><h2 ref={shortHeadingRef} className="marginBottom26 shortHeading mainShortHeading">{props.shortHeading}</h2></Animate>
                    <Animate><h1 ref={descRef} className="marginBottom55 desc bigDescription black">{props.desc}</h1></Animate>
                </div>
                <div ref={sliderWrapperRef} className="marginBottom90 sliderRandomImages positionRelative">
                    {!!sectionData && 
                    <div className="singleSlide">
                        <div className="imgRow flexItems">
                            <div className="left">
                                <Animate>
                                    <div style={{animationDelay:"0s"}} className={`marginBottom16 sliderImagesRandom ${activeAnimation}`}>
                                        <div className="imgLeft1"><Image height={377} width={669} originalSrc={sectionData.bigImage} alt="Image" className="width-100"/></div>
                                    </div>
                                    <p style={{animationDelay:"0.2s"}} className={`content1 hideForMobile description hideForTab black ${activeAnimation}`}>{sectionData.content1}</p>
                                </Animate>
                            </div>
                            <div className="right">
                                <Animate>
                                    <div style={{animationDelay:"0s"}} className={`marginBottom55 buttonWrapper hideForMobile hideForTab  ${activeAnimation}`}>
                                        <Button
                                            buttonType="rectangle"
                                            buttonText="DISCOVER THE LOOKBOOK"
                                            textOnHover="CLICK TO EXPLORE"
                                        />
                                    </div>
                                </Animate>
                                <Animate>
                                    <div style={{animationDelay:"0.2s"}} className={`marginBottom16 rightImageRow flexItems ${activeAnimation}`}>
                                        <div className="rightImageCol"><Image height={282} width={212}  originalSrc={sectionData.smallImg1} className="width-100" alt="Right randam image"/></div>
                                        <div className="rightImageCol">
                                            <video className="width-100" autoPlay muted playsInline loop>
                                                <source src={sectionData.smallImg2} type="video/mp4" />
                                                Your browser does not support HTML video.
                                            </video>
                                        </div>
                                    </div>
                                </Animate>
                                <Animate><p style={{animationDelay:"0.4s"}} className={` content2 font16 moderatLight grey2 hideForTab ${activeAnimation}`}>{sectionData.content2}</p></Animate>
                                <Animate><p style={{animationDelay:"0.5s"}} className={`alignCenter lastContentMobile paddedContent showForMobile description black ${activeAnimation}`}>{sectionData.content1}</p></Animate>
                            </div>
                        </div>
                        <div className="forTabletOnly">
                            <Animate><p style={{animationDelay:"0.4s"}} className={`marginBottom55 content2 font16 moderatLight grey2 showForTabletOnly contentTab ${activeAnimation}`}>{sectionData.content2}</p></Animate>
                            <Animate><p style={{animationDelay:"0.2s"}} className={`content1 hideForMobile description showForTabletOnly contentTab2 black ${activeAnimation}`}>{sectionData.content1}</p></Animate>
                        </div>
                    </div>} 
                    <div onClick={() => nextSlide()} className="circleWithRightArrow positionAbsolute">
                        <Button 
                            buttonType="circleIconRight"
                        />
                    </div>
                    <div onClick={() => prevSlide()} className="circleWithLeftArrow positionAbsolute">
                        <Button 
                            buttonType="circleIconLeft"
                        />
                    </div>
                    </div>
                </div>
            </div>   
            <style jsx>{`
                .randomImages{
                    border-bottom:1px solid #9E9E9E;
                }
                .showForTabletOnly {
                    display: none;
                }
                .sliderRandomImages:hover .circleWithRightArrow,
                .sliderRandomImages:hover .circleWithLeftArrow{
                    opacity:1;
                    transition:all 0.3s ease-out;
                }
                .circleWithRightArrow{
                    top: 16.4rem;
                    right: 19px;
                    opacity:0;
                    transition:all 0.3s ease-out;
                }
                .circleWithLeftArrow{
                    top: 16.4rem;
                    left: 19px;
                    opacity:0;
                    transition:all 0.3s ease-out;
                }
                .content2{
                    letter-spacing: -0.26px;
                    line-height:2.1rem;
                }
                .rightImageRow{
                    margin-right:-2.1rem;
                }
                .rightImageRow .rightImageCol{
                    width:50%;
                    padding-right:2.1rem;
                }
                .topText{
                    padding: 0 17%;
                }
                .content1{
                    padding-left:7.63%;
                    padding-right: 9%;
                }
                .left{
                    width:60%;
                }
                .right{
                    width:40%;
                    padding: 0 6.6% 0 8.5%;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                .topText {
                    padding: 0 11%;   
                }
                .content1{
                    padding-left:11rem;
                    padding-right: 2%;
                }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .topText {
                        padding: 0 9%;   
                    }
                    .paddingBottom{
                        padding-bottom:6rem
                    }
                    .content1{
                        padding-left:0%;
                        padding-right: 0%;
                    }
                    .right{
                        width:40%;
                        padding: 0 0% 0 8.5%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px){
                    .showForTabletOnly {
                        display: block;
                    }
                    .topText{
                        padding: 0 7%;
                    }
                    .paddingBottom{
                        padding-bottom:3rem
                    }
                    .hideForTab {
                        display: none;
                    }
                    .imgRow {
                        flex-wrap: wrap;
                    }
                    .left{
                        width:100%;
                        padding: 0 12%;
                    }
                    .right{
                        width:100%;
                        padding:0 12%;
                    }
                    .contentTab {
                        padding: 0 30% 0 15%;
                    }
                    .content1{
                        padding-left:11rem;
                        padding-right: 18%;
                    }
                    .circleWithRightArrow,
                    .circleWithLeftArrow{
                        top:29rem;
                    }
                }
                @media screen and (max-width: 790px){
                    .circleWithRightArrow,
                    .circleWithLeftArrow{
                        top:27rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .showForTabletOnly {
                        display: none;
                    }
                    .topText{
                        padding: 0 3.4rem;
                    }
                    .imgRow{
                        display:block;
                    }
                    .left{
                        padding: 0;
                        width:100%;
                    }
                    .right{
                        width:100%;
                        padding:0;
                    }
                    .rightImageRow{
                        margin-right:0rem;
                        margin-bottom:1rem;
                        padding:0;
                    }
                    .rightImageRow .rightImageCol{
                        width:50%;
                        padding-right:1.1rem;
                    }
                    .content2{
                        font-size:1.2rem;
                        padding: 0 8%;
                        text-align: center;
                        letter-spacing: -0.16px;
                        line-height:1.1rem;
                        margin-bottom:1.4rem;
                    }
                    .circleWithRightArrow{
                        top: 7rem;
                        right: 1.5rem;
                    }
                    .circleWithLeftArrow{
                        top: 7rem;
                        left: 1.5rem;
                    }
                }
            `}</style>
        </>
    )
}
