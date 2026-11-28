import React,{useRef} from 'react'
import Slider from "react-slick";
import Button from './button';
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT,MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from '../config'
import Animate from "./animate"
export default function ExploreMore(props) {
    const slider=useRef();
    const headingRef=useRef();
    const exploreCardContainerRef=useRef();

    var settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // beforeChange: (current, next) => setIndexSlider(next)
        responsive: [
            {
                breakpoint: TABLET_BREAKPOINT,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode:true,
                    centerPadding:"38rem",
                },
              },
            {
              breakpoint: MOBILE_BREAKPOINT,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode:true,
                centerPadding:"30rem",
                }
            },
        ]
    };

    // useEffect(()=>{
    //     if(!!scroll && !!ScrollTrigger){
    //         const animationT16 = gsap.timeline();
    //         ScrollTrigger.create({
    //             trigger: headingRef.current,
    //             animation: animationT16,
    //         });
    //         animationT16.from(headingRef.current, {
    //             opacity:0,
    //             y:30,
    //         });
    //         animationT16.to(headingRef.current, {
    //             opacity:1,
    //             y:0,
    //         });

    //         const animationT17 = gsap.timeline();
    //         ScrollTrigger.create({
    //             trigger: exploreCardContainerRef.current,
    //             animation: animationT17,
    //         });
    //         animationT17.from(exploreCardContainerRef.current, {
    //             opacity:0,
    //             y:30,
    //         });
    //         animationT17.to(exploreCardContainerRef.current, {
    //             opacity:1,
    //             y:0,
    //         });
    //     }   

    // },[scroll,ScrollTrigger])
    return (
        <>
            <div className="exploreMore">
             <Animate> <h1 ref={headingRef} className="marginBottom55 sectionHeading smallHeading">Explore More</h1></Animate>
                <div ref={exploreCardContainerRef} className="exploreCards positionRelative">
                <Animate>
                    <Slider ref={slider} {...settings}>
                        {props.cards.map((card,index)=>{
                            return(
                                <div key={index} className="exploreCard">
                                    <div className="marginBottom55 cardImage"><img src={card.cardImage} className="width-100" alt="Explore Cards"/></div>
                                    <h2 className="marginBottom26 cardHeading mainShortHeading">{card.cardHeading}</h2>
                                    <p className="marginBottom30 description cardContent">
                                        <span className="moderatMedium">{card.boldText} </span>
                                        <span className="">{card.normalText}</span>
                                    </p>
                                    <h2 className="marginBottom26 shortHeading mainShortHeading">{card.shortHeading}</h2>
                                    <h2 className="readMoreButton moderatRegular font12 grey cursorPointer">{card.readMoreText}</h2>
                                </div>
                            )
                        })}
                    </Slider>
                    <div onClick={() => slider.current.slickNext()} className="circleWithRightArrow positionAbsolute">
                        <Button 
                            buttonType="circleIconRight"
                        />
                    </div>
                    <div onClick={() => slider.current.slickPrev()} className="circleWithLeftArrow positionAbsolute">
                        <Button 
                            buttonType="circleIconLeft"
                        />
                    </div>
                </Animate>
                </div>
            </div> 
            <style jsx>{`
                .exploreMore{
                    padding:0 5.7%;
                }
                .readMoreButton:hover{
                    color:#000000;
                    transition:all 0.3s ease-out;
                }
                .exploreCards:hover .circleWithRightArrow,
                .exploreCards:hover .circleWithLeftArrow{
                    opacity:1;
                    transition:all 0.3s ease-out;
                }
                .circleWithRightArrow{
                    top:15.4rem;
                    right:1.9rem;
                    opacity:0;
                    transition:all 0.3s ease-out;
                }
                .circleWithLeftArrow{
                    top:15.4rem;
                    left:1.9rem;
                    opacity:0;
                    transition:all 0.3s ease-out;
                }
                .readMoreButton{
                    letter-spacing: -0.19px;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .circleWithRightArrow,
                    .circleWithLeftArrow{
                        opacity:1;
                        top:20%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .exploreMore {
                        padding: 0 0 0 4.5%; 
                    } 
                    .circleWithRightArrow,
                    .circleWithLeftArrow{
                        top:25%;
                    } 
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .circleWithRightArrow{
                        // top:10.9rem;
                        right:2.6rem;
                        opacity:1;
                    }
                    .circleWithLeftArrow{
                        // top:10.9rem;
                        left:1.2rem;
                        opacity:1;
                    }
                    .exploreMore{
                        padding:0 4.8%;
                    }
                }
            `}</style>  
        </>
    )
}
