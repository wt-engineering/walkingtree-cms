import React, { useRef,useState } from 'react'
import Button from './button';
import {MOBILE_BREAKPOINT} from '../config'
import Sanity from '../sanity'
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = source => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import {buildFileUrl, parseAssetId} from '@sanity/asset-utils'
import Animate from './animate';

export default function RandomImages(props) {
    const [indexSlider, setIndexSlider] = useState(0);
    const [sectionData, setSectionData] = useState(props.randomImagesSlider[0]);
    const [activeAnimation, setActiveAnimation] = useState("none");

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
    // console.log("cta",sectionData)   
    let video=buildFileUrl(parseAssetId(sectionData?.smallImg2?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"})
    const shortHeading=useRef(null);
    const desc=useRef(null);
    const lastContentMobile=useRef(null);
    const content1=useRef(null);
    const sliderRandomImages=useRef(null)
    const buttonWrapper=useRef(null);
    const rightImage=useRef(null)
    const content2=useRef(null);

    return (
        <>
            <div className="randomImages paddedContent">
                <div className="topText alignCenter">
                    <Animate><h2 className="shortHeading mainShortHeading" ref={shortHeading}>{props.shortHeading}</h2></Animate>
                    <Animate><h1 className="desc bigDescription" desc={desc}>{props.desc}</h1></Animate>
                </div>
                <div className="sliderRandomImages positionRelative">
                    {!!sectionData && 
                    <div className="singleSlide">
                        <div className="imgRow flexItems">
                            <div className="left">
                                <Animate>
                                    <div style={{animationDelay:"0s"}} ref={sliderRandomImages} className={`sliderImagesRandom ${activeAnimation}`}>
                                        <div><img src={urlFor(sectionData.bigImage).url()} alt="Image" className="width-100"/></div>
                                    </div>
                                    <p style={{animationDelay:"0.2s"}} ref={content1} className={`content1 hideForMobile description ${activeAnimation}`}>{sectionData.content1}</p>
                                </Animate>
                            </div>
                            <div className="right">
                                <Animate>
                                    <div style={{animationDelay:"0s"}} ref={buttonWrapper} className={`buttonWrapper hideForMobile ${activeAnimation}`}>
                                        <Button
                                            buttonType="rectangle"
                                            buttonText="DISCOVER THE LOOKBOOK"
                                            textOnHover="CLICK TO EXPLORE"
                                        />
                                    </div>
                                </Animate>
                                <Animate>
                                    <div style={{animationDelay:"0.2s"}} ref={rightImage} className={`rightImageRow flexItems ${activeAnimation}`}>
                                        <div className="rightImageCol"><img src={urlFor(sectionData.smallImg1).url()} className="width-100" alt="Right randam image"/></div>
                                        {/* <div className="rightImageCol"><img src={sectionData.smallImg2} className="width-100" alt="Right randam image"/></div> */}
                                        <div className="rightImageCol">
                                            <video className="width-100" autoPlay muted playsInline loop>
                                                <source src={video} type="video/mp4" />
                                                Your browser does not support HTML video.
                                            </video>
                                        </div>
                                    </div>
                                </Animate>
                                <Animate><p style={{animationDelay:"0.4s"}} ref={content2} className={`content2 font16 moderatLight grey2 ${activeAnimation}`}>{sectionData.content2}</p></Animate>
                                <Animate><p style={{animationDelay:"0.5s"}} ref={lastContentMobile} className={`alignCenter lastContentMobile paddedContent showForMobile description ${activeAnimation}`}>{sectionData.content1}</p></Animate>
                            </div>
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
            <style jsx>{`
                .randomImages{
                    padding-bottom:15.6rem;
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
                .shortHeading{
                    margin-bottom:2.5rem;
                }
                .sliderImagesRandom{
                    margin-bottom:3.4rem;
                }
                .content2{
                    letter-spacing: -0.26px;
                    line-height:2.1rem;
                }
                .buttonWrapper{
                    margin-bottom:4.7rem;
                }
                .rightImageRow{
                    margin-right:-2.1rem;
                    margin-bottom:1.5rem;
                }
                .rightImageRow .rightImageCol{
                    width:50%;
                    padding-right:2.1rem;
                }
                .desc{
                    margin-bottom:6rem;
                }
                .topText{
                    padding: 0 18%;
                }
                .content1{
                    padding-left:11rem;
                    padding-right: 9%;
                }
                .left{
                    width:60%;
                }
                .right{
                    width:40%;
                    padding: 0 6.6% 0 8.5%;
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .topText{
                        padding: 0 3.4rem;
                    }
                    .shortHeading{
                        margin-bottom:0.7rem;
                    }
                    .desc{
                        margin-bottom:2.4rem;
                    }
                    .imgRow{
                        display:block;
                    }
                    .left{
                        width:100%;
                    }
                    .right{
                        width:100%;
                        padding:0;
                    }
                    .randomImages{
                        padding:0 0 11.6rem;
                    }
                    .sliderImagesRandom{
                        margin-bottom:1.1rem;
                    }
                    .rightImageRow{
                        margin-right:0rem;
                        margin-bottom:1rem;
                        padding:0 7.4rem;
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
                        top: 9.5rem;
                        right: 3rem;
                        opacity:1;
                    }
                    .circleWithLeftArrow{
                        top: 9.5rem;
                        left: 3rem;
                        opacity:1;
                    }
                }
            `}</style>
        </>
    )
}
