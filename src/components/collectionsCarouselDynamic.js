import React,{useRef, useState, useEffect} from 'react'
import Button from './button'
import DotNavigation from './dotNavigation'
import { gsap } from "gsap/dist/gsap";
import {MOBILE_BREAKPOINT,scrollTriggerStartValue, TABLET_BREAKPOINT,MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from '../config'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "./Image";
import Animate from "./animate";

export default function CollectionsCarousel(props) {
    const [indexSlider, setIndexSlider] = useState(0);
    const [sectionData, setSectionData] = useState(props.carouselData[0]);
    const [activeAnimation, setActiveAnimation] = useState("none")
    const [collectionCarouselAnimationDone, setCollectionCarouselAnimationDone] = useState(true);
    const shortHeading=useRef(null);
    const mainHeading=useRef(null);
    const leftCarousel=useRef(null);
    const smallMsg=useRef(null);
    const desc=useRef(null);
    const buttonWrapper=useRef(null);
    const smallImage1=useRef(null);
    const smallImage2=useRef(null);
    const smallImage3=useRef(null);
    const sectionName=useRef(null);
    const collectionSliderWrapper=useRef(null);

    function setSectionInformation(id){
        setActiveAnimation("opacityNone")
        setSectionData(props.carouselData[id]);
        let setData = setTimeout(() => {
            setActiveAnimation("")
        }, 10);
    }

    function indexChange(indexId){
        setIndexSlider(indexId);
        setSectionInformation(indexId)
    }

    function nextSlide(){
        if(indexSlider>=0 && indexSlider<props.carouselData.length){
            setIndexSlider(indexSlider+1)
            setSectionInformation(indexSlider+1)
        }
        if((indexSlider+1)==props.carouselData.length){
            setIndexSlider(0)
            setSectionInformation(0)
        }
    }
    function prevSlide(){
        if(indexSlider>0 && indexSlider<props.carouselData.length){
            setIndexSlider(indexSlider-1)
            setSectionInformation(indexSlider-1)
        }
        if(indexSlider==0){
            setIndexSlider(props.carouselData.length-1)
            setSectionInformation(props.carouselData.length-1)
        }
    }
    return (
        <>
            <div ref={collectionSliderWrapper} className="collectionCarousel paddedContent">
                <div className="carouselTextSectionTab alignCenter black">
                    <h2 style={{animationDelay:"0s"}} className={`marginBottom18 shortHeadingTab mainShortHeading ${collectionCarouselAnimationDone?activeAnimation:""}`}>{sectionData.shortHeading}</h2>
                    <div style={{animationDelay:"0.1s"}} className={`mainHeadingTab bigHeading black ${collectionCarouselAnimationDone?activeAnimation:""}`}>{sectionData.mainHeading}</div>
                    <p style={{animationDelay:"0.2s"}} className={`marginBottom30 smallMsgTab hideForMobile moderatThin font16 black ${collectionCarouselAnimationDone?activeAnimation:""}`}>{sectionData.smallMsg}</p>
                    <p style={{animationDelay:"0.3s"}} className={`marginBottom55 descTab description grey ${collectionCarouselAnimationDone?activeAnimation:""}`}>{sectionData.desc}</p>
                </div>
                <div className="container positionRelative">
                    <div className="leftCarousel" ref={leftCarousel}>
                        <div className="leftCarouselWrap positionRelative">
                            {!!sectionData && <div style={{animationDelay:"0s"}} className={`${collectionCarouselAnimationDone?activeAnimation:""}`}><Image height={675} width={450} originalSrc={sectionData.mainImage} className="width-100" alt="Carousel Main Image" loading="eager"/></div>}
                            <div className="dotsWrapper positionAbsolute hideForTablet"> 
                                <DotNavigation
                                    sliderData={props.carouselData}
                                    indexValue={indexSlider}
                                    onClick={(id)=>indexChange(id)}
                                    dotColor="#ffffff"
                                    activeDotColor="#000000"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="rightSection">
                        <div className="rightSectionWrap">
                            {!!sectionData &&
                            <>
                                <div className="carouselTextSection hideForTablet">
                                 <Animate><h2 style={{animationDelay:"0s"}} ref={shortHeading} className={`marginBottom18 shortHeadingTab mainShortHeading ${collectionCarouselAnimationDone?activeAnimation:""}`}>{sectionData.shortHeading}</h2></Animate>
                                 <Animate> <div style={{animationDelay:"0.1s"}} ref={mainHeading} className={`mainHeadingTab bigHeading black ${collectionCarouselAnimationDone?activeAnimation:""}`}>{sectionData.mainHeading}</div></Animate>
                                <Animate> <p style={{animationDelay:"0.2s"}} ref={smallMsg} className={`marginBottom40 smallMsgTab hideForMobile moderatThin font18 black ${collectionCarouselAnimationDone?activeAnimation:""}`}>{sectionData.smallMsg}</p></Animate>
                                <Animate> <p style={{animationDelay:"0.3s"}} ref={desc} className={`descTab description grey ${collectionCarouselAnimationDone?activeAnimation:""}`}>{sectionData.desc}</p></Animate>
                                {props.buttonText && props.buttonTextOnHover ? 
                                    <Animate>
                                        <div style={{animationDelay:"0.4s"}} ref={buttonWrapper} className={`buttonWrapper hideForMobile forTabAndMobile alignCenter ${collectionCarouselAnimationDone?activeAnimation:""}`}>
                                        <Button
                                            buttonType="rectangle"
                                            buttonText={props.buttonText}
                                            textOnHover={props.buttonTextOnHover}
                                        />
                                        </div>
                                    </Animate>
                                    : 
                                    <p></p>
                                }
                                </div>
                                <Animate>
                                    <div style={{animationDelay:"0.5s"}} className={`smallImages ${collectionCarouselAnimationDone?activeAnimation:""}`}>
                                        <div className="smallImage" ref={smallImage2}><Image height={234} width={175} originalSrc={sectionData.subImage1} className="width-100" alt="Carousel Main Image" loading="eager"/></div>
                                        <div className="smallImage" ref={smallImage1}><Image height={234} width={175} originalSrc={sectionData.subImage2} className="width-100" alt="Carousel Main Image" loading="eager"/></div>
                                        <div className="smallImage" ref={smallImage3}><Image height={234} width={175} originalSrc={sectionData.subImage3} className="width-100" alt="Carousel Main Image" loading="eager"/></div>
                                    </div>
                                    <div className="sectionHeadingNavigation">
                                        {props.carouselData.map((heading,index)=>{
                                            return(
                                                <div key={index} onClick={()=>indexChange(index)} ref={sectionName} className={`sectionName underlineLR cursorPointer font16 black ${indexSlider===index?"moderatMedium active":"moderatRegular"}`}>{heading.sectionName}</div>
                                            )
                                        })}
                                    </div>
                                </Animate>
                                {props.buttonText && props.buttonTextOnHover ?<div style={{animationDelay:"0.4s"}} ref={buttonWrapper} className={`buttonWrapper hideForMobile forTabAndMobile alignCenter ${collectionCarouselAnimationDone?activeAnimation:""}`}>
                                    <Button
                                        buttonType="rectangle"
                                        buttonText={props.buttonText}
                                        textOnHover={props.buttonTextOnHover}
                                    />
                                </div> : <p></p>}
                            </>}
                        </div>
                    </div>
                    <div onClick={() => nextSlide()} className="rightArrow positionAbsolute">
                        <Button buttonType="circleIconRight"/>
                    </div>
                    <div onClick={() => prevSlide()} className="leftArrow positionAbsolute">
                        <Button buttonType="circleIconLeft"/>
                    </div>
                </div>
            </div>   
            <style jsx>{`
                .container, .smallImages,.sectionHeadingNavigation{
                    display:flex;
                }
                .carouselTextSectionTab, .forTabAndMobile {
                    display: none;
                }
                .opacityNone{
                    opacity:0;
                }
                .rightArrow,.leftArrow{
                    top:50%;
                    transform:translateY(-50%);
                }
                .rightArrow{
                    right:1.8rem;
                }
                .leftArrow{
                    left:1.8rem;
                }
                .dotsWrapper{
                    bottom:3.5rem;
                    left:50%;
                    transform: translateX(-50%);
                }
                .sectionHeadingNavigation{
                    justify-content: space-evenly;
                    width: 100%;
                }
                .carouselTextSection{
                    padding-right: 17%;
                    min-height:46rem;
                }
                .smallImages{
                    margin-right:-1.6rem;
                    margin-bottom:3rem;
                }
                .smallImages .smallImage{
                    padding-right:1.6rem;
                    width:33.33%;
                }
                .leftCarousel{
                    width:38.7%;
                    padding-top:4rem;
                }
                .rightSection{
                    width:61.3%;
                }
                .rightSectionWrap{
                    padding-left:17%;
                }
                .shortHeading{
                    margin-bottom:2.4rem;
                }
                .smallMsg{
                    letter-spacing: -0.26px;
                    margin-bottom:5.3rem;
                }
                .desc{
                    margin-bottom:5.4rem;
                }
                .buttonWrapper{
                    margin-bottom:3.8rem;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .carouselTextSection{
                        padding-right: 0%;
                    }
                    .rightSectionWrap{
                        padding-left:10%;
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .carouselTextSection{
                        padding-right: 5%;
                    }
                    .container{
                        align-items:center;
                    }
                    .leftCarousel{
                        width:38.7%;
                        padding-top:0rem;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) { 
                    .container , .forTabAndMobile{
                        display: block;
                    }
                    .smallImages,.leftCarousel{
                        padding:0 23%;
                    }
                    .forTabAndMobile {
                        margin-top: 4.5rem;
                        margin-bottom:0;
                    }
                    .leftCarousel{
                        width:100%;
                        padding-top:0rem;
                    }
                    .rightSectionWrap{
                        padding-left:0rem;
                         margin-left: 0;
                         margin-top: 1.5rem;
                    }
                    .rightSection{
                        width:100%;
                    }
                    .smallImages{
                        margin-right:-1.6rem;
                        margin-bottom:2.6rem;
                    }
                    .hideForTablet {
                        display: none;
                    }
                    .carouselTextSectionTab{
                        padding-right: 0%;
                    }
                    .carouselTextSectionTab {
                        display: block;
                    }
                    .leftCarouselTab{
                        width:50.7%;
                        margin: 0 25%;
                        padding-top:6rem;
                    }
                   
                    .mainHeadingTab {
                        margin-bottom: 5px;
                    }
                    .descTab {
                        margin: 0 12% 4.5rem;
                    }
                    .rightArrow,.leftArrow{
                        top:34%;
                        transform:translateY(-50%);
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .descTab {
                        margin: 0 3% 3.5rem;
                    }
                    .smallImages,.leftCarousel{
                        padding:0 0%;
                    }
                    .sectionName{
                        font-size:10px;
                    }
                    .rightArrow,.leftArrow{
                        top:32%;
                        transform:translateY(-50%);
                    }
                }
            `}</style>
        </>
    )
}




// import React,{useRef, useState, useEffect} from 'react'
// import Button from './button'
// import DotNavigation from './dotNavigation'
// import { gsap } from "gsap/dist/gsap";
// import {MOBILE_BREAKPOINT} from '../config'


// export default function CollectionsCarousel(props) {
//     const [indexSlider, setIndexSlider] = useState(0);
//     const [sectionData, setSectionData] = useState(props.carouselData[0]);
//     const [activeAnimation, setActiveAnimation] = useState("none")
 
//     function setSectionInformation(id){
//         setActiveAnimation("opacityNone")
//         setSectionData(props.carouselData[id]);
//         let setData = setTimeout(() => {
//             setActiveAnimation("fadeUpAnimation")
//         }, 100);
//     }

//     function indexChange(indexId){
//         setIndexSlider(indexId);
//         setSectionInformation(indexId)
//     }

//     function nextSlide(){
//         if(indexSlider>=0 && indexSlider<props.carouselData.length){
//             setIndexSlider(indexSlider+1)
//             setSectionInformation(indexSlider+1)
//         }
//         if((indexSlider+1)==props.carouselData.length){
//             setIndexSlider(0)
//             setSectionInformation(0)
//         }
//     }
//     function prevSlide(){
//         if(indexSlider>0 && indexSlider<props.carouselData.length){
//             setIndexSlider(indexSlider-1)
//             setSectionInformation(indexSlider-1)
//         }
//         if(indexSlider==0){
//             setIndexSlider(props.carouselData.length-1)
//             setSectionInformation(props.carouselData.length-1)
//         }
//     }
//     return (
//         <>
//             <div className="collectionCarousel paddedContent">
//                 <div className="container positionRelative">
//                     <div className="leftCarousel hideForMobile">
//                         <div className="leftCarouselWrap positionRelative">
//                             {!!sectionData && <div style={{animationDelay:"0s"}} className={`${props.animationDone?activeAnimation:""}`}><img src={sectionData.mainImage} className="width-100" alt="Carousel Main Image"/></div>}
//                             <div className="dotsWrapper positionAbsolute"> 
//                                 <DotNavigation
//                                     sliderData={props.carouselData}
//                                     indexValue={indexSlider}
//                                     onClick={(id)=>indexChange(id)}
//                                     dotColor="#ffffff"
//                                     activeDotColor="#000000"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="rightSection">
//                         <div className="rightSectionWrap">
//                             {!!sectionData &&
//                             <>
//                                 <div className="carouselTextSection">
//                                     <h2 style={{animationDelay:"0s"}} className={`shortHeading mainShortHeading ${props.animationDone?activeAnimation:""}`}>{sectionData.shortHeading}</h2>
//                                     <div style={{animationDelay:"0.1s"}} className={`mainHeading bigHeading ${props.animationDone?activeAnimation:""}`}>{sectionData.mainHeading}</div>
//                                     <p style={{animationDelay:"0.2s"}} className={`smallMsg hideForMobile moderatThin font16 ${props.animationDone?activeAnimation:""}`}>{sectionData.smallMsg}</p>
//                                     <p style={{animationDelay:"0.3s"}} className={`desc description ${props.animationDone?activeAnimation:""}`}>{sectionData.desc}</p>
//                                     <div style={{animationDelay:"0.4s"}} className={`buttonWrapper hideForMobile ${props.animationDone?activeAnimation:""}`}>
//                                         <Button
//                                             buttonType="rectangle"
//                                             buttonText="DISCOVER THE LOOKBOOK"
//                                             textOnHover="CLICK TO EXPLORE"
//                                         />
//                                     </div>
//                                     <div className="leftCarousel positionRelative showForMobile">
//                                         <div className="leftCarouselWrap">
//                                             {!!sectionData && <div style={{animationDelay:"0.4s"}} className={`${props.animationDone?activeAnimation:""}`}><img src={sectionData.mainImage} className="width-100" alt="Carousel Main Image"/></div>}
//                                             <div className="dotsWrapper positionAbsolute"> 
//                                                 <DotNavigation
//                                                     sliderData={props.carouselData}
//                                                     indexValue={indexSlider}
//                                                     onClick={(id)=>indexChange(id)}
//                                                     dotColor="#ffffff"
//                                                     activeDotColor="#000000"
//                                                 />
//                                             </div>
//                                             <div onClick={() => nextSlide()} className="rightArrow positionAbsolute">
//                                                 <Button
//                                                     buttonType="circleIconRight"
//                                                 />
//                                             </div>
//                                             <div onClick={() => prevSlide()} className="leftArrow positionAbsolute">
//                                                 <Button 
//                                                     buttonType="circleIconLeft"
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div style={{animationDelay:"0.5s"}} className={`smallImages ${props.animationDone?activeAnimation:""}`}>
//                                     <div className="smallImage"><img src={sectionData.subImage1} className="width-100" alt="Carousel Main Image"/></div>
//                                     <div className="smallImage"><img src={sectionData.subImage2} className="width-100" alt="Carousel Main Image"/></div>
//                                     <div className="smallImage"><img src={sectionData.subImage3} className="width-100" alt="Carousel Main Image"/></div>
//                                 </div>
//                                 <div className="sectionHeadingNavigation">
//                                     {props.carouselData.map((heading,index)=>{
//                                         return(
//                                             <div key={index} onClick={()=>indexChange(index)} className={`sectionName underlineLR cursorPointer font16 ${indexSlider===index?"moderatMedium active":"moderatRegular"}`}>{heading.sectionName}</div>
//                                         )
//                                     })}
//                                 </div>
//                             </>}
//                         </div>
//                     </div>
//                     <div onClick={() => nextSlide()} className="rightArrow positionAbsolute hideForMobile">
//                         <Button
//                             buttonType="circleIconRight"
//                         />
//                     </div>
//                     <div onClick={() => prevSlide()} className="leftArrow positionAbsolute hideForMobile">
//                         <Button 
//                             buttonType="circleIconLeft"
//                         />
//                     </div>
//                 </div>
//             </div>   
//             <style jsx>{`
//                 .container, .smallImages,.sectionHeadingNavigation{
//                     display:flex;
//                 }
//                 .opacityNone{
//                     opacity:0;
//                 }
//                 .rightArrow,.leftArrow{
//                     top:50%;
//                     transform:translateY(-50%);
//                 }
//                 .rightArrow{
//                     right:1.8rem;
//                 }
//                 .leftArrow{
//                     left:1.8rem;
//                 }
//                 .dotsWrapper{
//                     bottom:3.5rem;
//                     left:50%;
//                 }
//                 .sectionHeadingNavigation{
//                     justify-content: space-evenly;
//                     width: 100%;
//                 }
//                 .carouselTextSection{
//                     padding-right: 20%;
//                 }
//                 .smallImages{
//                     margin-right:-1.6rem;
//                     margin-bottom:5.1rem;
//                 }
//                 .smallImages .smallImage{
//                     padding-right:1.6rem;
//                     width:33.33%;
//                 }
//                 .leftCarousel{
//                     width:38.7%;
//                     padding-top:6rem;
//                 }
//                 .rightSection{
//                     width:61.3%;
//                 }
//                 .rightSectionWrap{
//                     padding-left:13.5rem;
//                 }
//                 .shortHeading{
//                     margin-bottom:2.4rem;
//                 }
//                 .smallMsg{
//                     letter-spacing: -0.26px;
//                     margin-bottom:5.3rem;
//                 }
//                 .desc{
//                     margin-bottom:5.4rem;
//                 }
//                 .buttonWrapper{
//                     margin-bottom:3.8rem;
//                 }
//                 @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
//                     .container{
//                         display:block;
//                     }
//                     .leftCarousel{
//                         width:100%;
//                         padding-top:0rem;
//                         margin-bottom:1.1rem;
//                     }
//                     .rightSection{
//                         width:100%;
//                     }
//                     .rightSectionWrap{
//                         padding-left:0rem;
//                     }
//                     .carouselTextSection{
//                         padding-right: 0%;
//                         text-align:center;
//                     }
//                     .desc{
//                         padding: 0 1.2rem;
//                         margin-bottom:3.5rem;
//                     }
//                     .shortHeading{
//                         margin-bottom:1.4rem;
//                     }
//                     .mainHeading{
//                         margin-bottom:3.2rem;
//                     }
//                     .dotsWrapper{
//                         bottom:1.9rem;
//                         left:50%;
//                     }
//                     .smallImages{
//                         margin-right:-1.1rem;
//                         margin-bottom:1.5rem;
//                     }
//                     .smallImages .smallImage{
//                         padding-right:1.1rem;
//                     }
//                     .sectionHeadingNavigation{
//                         justify-content: space-between;
//                         width: 100%;
//                     }
//                     .sectionName{
//                         font-size:1rem;
//                     }
//                     .rightArrow{
//                         right:1.2rem;
//                     }
//                     .leftArrow{
//                         left:1.2rem;
//                     }
//                     .buttonWrapper{
//                         margin-bottom:0rem;
//                         position:absolute;
//                         bottom:0;
//                         left:50%;
//                         transform:translateX(-50%);
//                     }
//                 }
//             `}</style>
//         </>
//     )
// }
