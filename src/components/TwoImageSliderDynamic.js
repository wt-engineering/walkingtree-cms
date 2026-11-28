import React,{useRef, useState} from 'react'
import Button from './button';
import DotNavigation from './dotNavigation';
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from '../config'
import Sanity from '../sanity'
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = source => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import Animate from './animate';

export default function TwoImageSlider(props) {
    const [indexSlider, setIndexSlider] = useState(0);
    const [sectionData, setSectionData] = useState(props.twoImageSliderData[0]);
    const [activeAnimation, setActiveAnimation] = useState("none")
 
    function setSectionInformation(id){
        setActiveAnimation("opacityNone")
        setSectionData(props.twoImageSliderData[id]);
        let setData = setTimeout(() => {
            setActiveAnimation("fadeUpAnimation")
        }, 100);
    }

    function indexChange(indexId){
        setIndexSlider(indexId);
        setSectionInformation(indexId)
    }

    function nextSlide(){
        if(indexSlider>=0 && indexSlider<props.twoImageSliderData.length){
            setIndexSlider(indexSlider+1)
            setSectionInformation(indexSlider+1)
        }
        if((indexSlider+1)==props.twoImageSliderData.length){
            setIndexSlider(0)
            setSectionInformation(0)
        }
    }
    function prevSlide(){
        if(indexSlider>0 && indexSlider<props.twoImageSliderData.length){
            setIndexSlider(indexSlider-1)
            setSectionInformation(indexSlider-1)
        }
        if(indexSlider==0){
            setIndexSlider(props.twoImageSliderData.length-1)
            setSectionInformation(props.twoImageSliderData.length-1)
        }
    }
    const shortHeading=useRef(null)
    const mainHeading=useRef(null)
    const images=useRef(null);
    const desc=useRef(null)
    const btnWrapper=useRef(null)

    return (
        <>
            <div className="twoImageSlider ">
                <div className="topText alignCenter">
                    <Animate><h2 className="shortHeading mainShortHeading" ref={shortHeading}>{props.shortHeading}</h2></Animate>
                    <Animate><h1 className="mainHeading bigHeading" ref={mainHeading}>{props.mainHeading}</h1></Animate>
                </div>
                <div className="slider positionRelative">
                    {!!sectionData &&
                    <div className="slide alignCenter">
                        <Animate>
                            <div style={{animationDelay:"0s"}}  ref={images} className={`images positionRelative`}>
                                <div className={`image ${activeAnimation}`}><img src={urlFor(sectionData.img1).url()} className="width-100" alt="Slide img1"/></div>
                                <div className={`image hideForMobile ${activeAnimation}`}><img src={urlFor(sectionData.img2).url()} className="width-100" alt="Slide img2"/></div>
                                <div className="dotsWrapper positionAbsolute"> 
                                    <DotNavigation
                                        sliderData={props.twoImageSliderData}
                                        indexValue={indexSlider}
                                        onClick={(id)=>indexChange(id)}
                                        dotColor="#BDBDBD"
                                        activeDotColor="#000000"
                                    />
                                </div>
                            </div>
                        </Animate>
                        <Animate><p style={{animationDelay:"0.2s"}} className={`desc description ${activeAnimation}`} ref={desc}>{sectionData.desc}</p></Animate>
                        <Animate>
                            <div className="buttonWrapper" ref={btnWrapper}>
                                <Button
                                    buttonType="rectangle"
                                    buttonText={sectionData?.cta?.buttonText}
                                    textOnHover={sectionData?.cta?.buttonTextOnHover}
                                />
                            </div>
                        </Animate>
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
                .twoImageSlider{
                    padding-left:20%;
                    padding-right:20%;
                }
                .opacityNone{
                    opacity:0;
                }
                .slider:hover .circleWithRightArrow,
                .slider:hover .circleWithLeftArrow{
                    opacity:1;
                    transition:all 0.3s ease-out;
                }
                .slider{
                    //padding-bottom:10.3rem;
                }
                .circleWithRightArrow{
                    top:23.9rem;
                    right:-9.2rem;
                    opacity:0;
                    transition:all 0.3s ease-out;
                }
                .circleWithLeftArrow{
                    top:23.9rem;
                    left:-9.2rem;
                    opacity:0;
                    transition:all 0.3s ease-out;
                }
                .dotsWrapper{
                    left:50%;
                    bottom:-5.2rem;
                }
                .desc{
                    padding: 0 6% 0rem;
                    margin-bottom:5.2rem;
                }
                .images{
                    display:flex;
                    margin-right:-2.4rem;
                    margin-bottom:11.8rem;
                }
                .images .image{
                    padding-right:2.4rem;
                    width:50%;
                }
                .topText{
                    padding: 0 15%;
                }
                .shortHeading{
                    margin-bottom:3rem;
                }
                .mainHeading{
                    margin-bottom:5rem;
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                   .twoImageSlider{
                        padding: 0 8.3rem;
                    }
                    .circleWithRightArrow{
                        top:20rem;
                        right:-6.2rem;
                        opacity:0;
                        transition:all 0.3s ease-out;
                    }
                    .circleWithLeftArrow{
                        top:20rem;
                        left:-6.2rem;
                        opacity:0;
                        transition:all 0.3s ease-out;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .twoImageSlider{
                        padding-left:2.1rem;
                        padding-right:2.1rem;
                    }
                    .topText{
                        padding: 0 6%;
                    }
                    .shortHeading{
                        margin-bottom:1.4rem;
                    }
                    .mainHeading{
                        margin-bottom:3.1rem;
                    }
                    .images{
                        display:block;
                        margin-right:0rem;
                        margin-bottom:5.8rem;
                    }
                    .images .image{
                        padding-right:0rem;
                        width:100%;
                    }
                    .dotsWrapper{
                        left:50%;
                        bottom:-2.8rem;
                    }
                    .desc{
                        padding: 0 3% 0rem;
                        margin-bottom:3rem;
                    }
                    .circleWithRightArrow{
                        top:20rem;
                        right:1.2rem;
                        opacity:1;
                    }
                    .circleWithLeftArrow{
                        top:20rem;
                        left:1.2rem;
                        opacity:1;
                    }
                }
            `}</style> 
        </>
    )
}
