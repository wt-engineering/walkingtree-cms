import React, { useEffect, useRef,useContext, useState } from 'react'
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT,scrollTriggerStartValue} from '../config'
import Button from './button'
import { gsap } from "gsap/dist/gsap";
import Space from './space'
import Image from './Image';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Animate from "./animate"

export default function ChangeContentOnScroll(props) {
    const [cardIndex, setCardIndex] = useState(null)
    const [cardIndexNegative, setCardIndexNegative] = useState(null)
    const nextSlide=useRef();
    const prevSlide=useRef();
    const shortHeadingRef=useRef();
    const headingRef=useRef();
    const descRef=useRef();
    const imageCardsRef=useRef();
    const imageCardsMobileRef=useRef();
    SwiperCore.use([Navigation]);
    useEffect(()=>{

        const animationT2 = gsap.timeline();
        ScrollTrigger.create({
            trigger: ".changeContentOnScroll .imageCards .imageCardSlider",
            animation: animationT2,
            pin:".changeContentOnScroll .imageCards .imageCardSlider .swiperCardContainer",
            scrub: true,
            start: "top 20%",
            end: "bottom-=2.5% 69%",
            pinSpacing:false,
        });

        const animationForImageCards = gsap.timeline();
        var sections = gsap.utils.toArray('.changeContentOnScroll .cardScroller .singleCardScroller');
        sections.forEach((section,id) => {
            ScrollTrigger.create({
            trigger: section,
            animation: animationForImageCards,
            scrub: true,
            start: "bottom 20%",
            end: "bottom 30%",
            onEnter:()=>setCardIndex(id+3),
            onEnterBack:()=>setCardIndexNegative(id),
            });
        });
  
        const animationT17 = gsap.timeline();
        ScrollTrigger.create({
          trigger: shortHeadingRef.current,
          animation: animationT17,
          start:`top ${scrollTriggerStartValue}`,
        });
        animationT17.from(shortHeadingRef.current, {
          opacity:0,
          y:30,
        });
        animationT17.to(shortHeadingRef.current, {
          opacity:1,
          y:0,
        });
  
        const animationT18 = gsap.timeline();
        ScrollTrigger.create({
          trigger: imageCardsRef.current,
          animation: animationT18,
          start:`top ${scrollTriggerStartValue}`,
        });
        animationT18.from(imageCardsRef.current, {
          opacity:0,
        });
        animationT18.to(imageCardsRef.current, {
          opacity:1,
        });

        const animationT19 = gsap.timeline();
        ScrollTrigger.create({
          trigger: imageCardsMobileRef.current,
          animation: animationT19,
          start:`top ${scrollTriggerStartValue}`,
        });
        animationT19.from(imageCardsMobileRef.current, {
          opacity:0,
        });
        animationT19.to(imageCardsMobileRef.current, {
          opacity:1,
        });
  
        const animationT20 = gsap.timeline();
        ScrollTrigger.create({
          trigger: descRef.current,
          animation: animationT20,
          start:`top ${scrollTriggerStartValue}`,
        });
        animationT20.from(descRef.current, {
          opacity:0,
          y:30,
        });
        animationT20.to(descRef.current, {
          opacity:1,
          y:0,
        });

        const animationT21 = gsap.timeline();
        ScrollTrigger.create({
          trigger: headingRef.current,
          animation: animationT21,
          start:`top ${scrollTriggerStartValue}`,
        });
        animationT21.from(headingRef.current, {
          opacity:0,
          y:30,
        });
        animationT21.to(headingRef.current, {
          opacity:1,
          y:0,
        });

    },[])
    useEffect(()=>{
        if(window.innerWidth > TABLET_BREAKPOINT){
            nextSlide.current.click();
        }
    },[cardIndex])
    useEffect(()=>{
        if(window.innerWidth > TABLET_BREAKPOINT){
            prevSlide.current.click();
        }
    },[cardIndexNegative])
    return (
        <>
            <div className="changeContentOnScroll">
            <Space desktopHeight="30rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>  
                <div className="container">
                    <div className="paddedContent topPaddingContainer">
                        <div className="topTextSection">
                        <Animate><h2 ref={shortHeadingRef} className="marginBottom26 shortHeading mainShortHeading">{props.shortHeading}</h2></Animate>
                        <Animate> <h1 ref={headingRef} className="marginBottom55 mainHeading bigHeading black">{props.mainHeading}</h1></Animate>
                        <Animate> <div ref={descRef} className="colText">
                                <div><p className="p1 bigDescription grey">{props.colText1}</p></div>
                                <div><p className="p2 description black">{props.colText2}</p></div>
                            </div></Animate>
                        </div>
                    </div>
                    <Animate>
                        <div ref={imageCardsRef} className="imageCards">
                            <div className="imageCardSlider">
                                <div className="swiperCardContainer ">
                                    <div className="usingSwiperPin">
                                        <Swiper 
                                            slidesPerView={2} 
                                            spaceBetween={20} 
                                            slidesPerGroup={1} 
                                            navigation={{nextEl: ".swipeNext", prevEl: ".swipePrev",}}
                                            className="mySwiper"
                                        >
                                            {props.imageCards.map((card,id)=>{
                                                return(
                                                    <SwiperSlide key={id}>
                                                        <div className="singleCardWrapper">
                                                            <div className="cardImage"><Image width={311} height={208} className="width-100" alt="cardImage" originalSrc={card.img}/></div>
                                                            <div className="sNum moderatMedium font16 black">{card.sn}.</div>
                                                            <div className="artistName mainShortHeading">{card.artist}</div>
                                                            <p className="desc description black">{card.desc}</p>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>
                                    <div ref={nextSlide} className="swipeNext positionAbsolute cursorPointer">
                                        {/* <div className="height-100 width-100 positionRelative">
                                            <div className="nextArrow positionAbsolute"><Caret color="black" direction="right" width="0.1rem" length="0.6rem" marginBottom="0rem"/></div>
                                        </div> */}
                                        <Button buttonType="circleIconRight"/>
                                    </div>
                                    <div ref={prevSlide} className="swipePrev positionAbsolute cursorPointer">
                                        {/* <div className="height-100 width-100 positionRelative">
                                            <div className="prevArrow positionAbsolute"><Caret color="black" direction="left" width="0.1rem" length="0.6rem" marginBottom="0rem"/></div>
                                        </div> */}
                                        <Button buttonType="circleIconLeft"/>
                                    </div>
                                </div>
                            </div>
                            <div className="cardScroller">
                                {props.imageCards.slice(2, props.imageCards.length).map((card,id)=>{
                                    return(
                                        <div key={id} className="singleCardScroller">
                                            <div className="sNum moderatMedium font16 black">{card.sn}.</div>
                                            <div className="artistName mainShortHeading">{card.artist}</div>
                                            <p className="about bigDescription grey">{card.about}</p>
                                            {/* <p className="desc description">{card.desc}</p> */}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Animate>
                    <div ref={imageCardsMobileRef} className="imageCardSlider mobile showForMobile">
                        <div className="swiperCardContainer positionRelative">
                            <div className="usingSwiperPin">
                                <Swiper 
                                    slidesPerView={1} 
                                    spaceBetween={0} 
                                    slidesPerGroup={1} 
                                    navigation={{
                                        nextEl: ".swipeNext",
                                        prevEl: ".swipePrev",
                                    }}
                                    className="mySwiper"
                                    loop={true}
                                >
                                    {props.imageCards.map((card,id)=>{
                                        return(
                                            <SwiperSlide key={id}>
                                                <div className="singleCardWrapper">
                                                    <div className="cardImage"><Image height={226} width={339} className="width-100" alt="cardImage" originalSrc={card.img}/></div>
                                                    <div className="cardDetailsMobile">
                                                        <span className="sNum moderatMedium font16">{card.sn}.</span>
                                                        <span className="marginBottom30 artistName mainShortHeading">{card.artist}</span>
                                                        <p className="desc description">{card.desc}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                            <div ref={nextSlide} className="swipeNext positionAbsolute">
                                <Button 
                                    buttonType="circleIconRight"
                                />
                            </div>
                            <div ref={prevSlide} className="swipePrev positionAbsolute">
                                <Button 
                                    buttonType="circleIconLeft"
                                />
                            </div>
                        </div>
                    </div>
                    <Space desktopHeight="9rem" tabletLandscapeHeight="6rem" mobileHeight="4rem"/>
                </div>
            </div>   
            <style jsx>{`
                .showForTab{
                    display: none;
                }
                .hideForTab {
                    display: none;
                }
                .container{
                    border-bottom:1px solid #9E9E9E;
                    // padding-top:14.67rem;
                    // padding-bottom:12.5rem;
                }
                .changeContentOnScroll {
                    border-top:1px solid #9E9E9E;
                }
                .swipeNext{
                    top:8rem;
                    right:-4rem;
                    display:none;
                }
                .swipePrev{
                    top:8rem;
                    left:-4rem;
                    display:none;
                }
                .slideAsFlex{
                    display:flex;
                }
                .slideAsFlex .singleCardWrapper{
                    width:50%;
                }
                .about{
                    margin-bottom:3rem;
                }
                .cardScroller .singleCardScroller{
                    margin-bottom:3.92rem;
                }
                .cardScroller .singleCardScroller:last-child{
                    margin-bottom:0rem;
                }
                .desc{
                    padding-right: 5%;
                }
                .imageCards{
                    display:flex;
                    padding-left:12.29%;
                    padding-right:7.15%;
                }
                .imageCardSlider{
                    width:56.3%;
                }
                .cardScroller{
                    width:43.7%;
                    padding-left:11.2rem;
                    padding-bottom:55rem;
                }
                .sNum{
                    margin-bottom:5px;
                }
                .cardImage{
                    margin-bottom:3rem;
                }
                .topTextSection{
                    padding:0 3.8% 22.1rem 7.7%;
                }  
                .mainHeading{
                    width: 50%;
                }
                .colText{
                    display:flex;
                }
                .colText div:nth-child(1){
                    width:56.3%;
                }
                .colText div:nth-child(2){
                    width:43.7%;
                }
                .colText .p1{
                    padding-right: 30%;
                }
                .colText .p2{
                    padding-right: 7%;
                    padding-left: 2%;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .mainHeading{
                        width: 60%;
                    } 
                    .colText .p1{
                        padding-right: 24%;
                    }
                    .imageCards{
                        padding-left:7%;
                        padding-right:7%;
                    }
                    .cardScroller{
                        width:43.7%;
                        padding-left:5%;
                        padding-bottom:55rem;
                    }
                    
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .mainHeading{
                        width: 50%;
                    } 
                    .imageCardSlider{
                        width:70%;
                    }
                    .cardScroller{
                        width:30%;
                        padding-bottom:40rem;
                    }
                    .topPaddingContainer{
                        padding:0;
                    }
                    .topTextSection{
                        padding:0 3.8% 10rem 7%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .colText .p1{
                        padding-right: 0%;
                    }
                    .colText .p2{
                        display:none;
                    }
                    .hideForTab {
                        display: none;
                    }
                    .showForTab{
                        display: block;
                        padding-left: 7.7rem; 
                    }
                    .mainHeading{
                        width: 60%;
                    }
                    .cardScroller {
                        display: none;
                        width:0%;
                        padding-left:0;
                        padding-bottom:0;
                    } 
                    .swipeNext,.swipePrev{
                        top:10.8rem;
                        display:block;
                        z-index:9;
                    }
                    .swipeNext{
                        right:0rem;
                        transform:translateX(100%);
                    }
                    .swipePrev{
                        left:0rem;
                        transform:translateX(-100%);
                    }
                    .imageCardSlider{
                        width:100%;
                    }
                    .topTextSection{
                        padding:0 3.8% 12.1rem 7%;
                    }
                    
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .showForTab{
                        display: none;
                    }
                    .container{
                        border-top:none;
                        border-bottom:none;
                        padding-top:0;
                        padding-bottom:12.8rem;
                    }
                    .topTextSection{
                        padding:0 2.1rem;
                    }
                    .mainHeading{
                        width: 100%;
                        font-size:2.1rem;
                        padding-right: 10%;
                        line-height:2.8rem;
                    }
                    .colText{
                        display:block;
                        margin-bottom:3.5rem;
                    }
                    .colText div:nth-child(1){
                        width:100%;
                    }
                    .colText .p1{
                        padding-right: 0%;
                    }
                    .imageCards{
                        display:none;
                    }
                    .imageCardSlider{
                        width:100%;
                    }
                    .swiperCardContainer{
                        padding:0 2.1rem;
                    }
                    .cardDetailsMobile{
                        padding:0 1.2rem;
                    }
                    .sNum{
                        display:inline-block;
                        margin-bottom:0.8rem;
                        margin-right:0.8rem;
                    }
                    .swipeNext,.swipePrev{
                        top:10.8rem;
                        display:block;
                        z-index:9;
                    }
                    .swipeNext{
                        right:3rem;
                        top:26%;
                        transform:translateX(0%);
                    }
                    .swipePrev{
                        left:3rem;
                        top:26%;
                        transform:translateX(0%);
                    }
                }
            `}</style>
        </>
    )
}
