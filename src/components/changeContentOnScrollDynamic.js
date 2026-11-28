import React, { useEffect, useRef,useState } from 'react'
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import Caret from './caret'
import {MOBILE_BREAKPOINT} from '../config'
import Button from './button'
import Sanity from '../sanity'
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = source => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
export default function ChangeContentOnScroll(props) {
    SwiperCore.use([Navigation]);
    const [cardIndex, setCardIndex] = useState(null);
    const [cardIndexReduce, setCardIndexReduce] = useState(null);
    const nextSlide=useRef();
    const prevSlide=useRef();

    useEffect(()=>{
        if(window.innerWidth > MOBILE_BREAKPOINT){
            nextSlide.current.click();
        }
    },[cardIndex])

    useEffect(()=>{
        if(window.innerWidth > MOBILE_BREAKPOINT){
            prevSlide.current.click();
        }
        
    },[cardIndexReduce])
    const shortHeading=useRef(null);
    const mainHeading=useRef(null);
    const colText=useRef(null);
    const imageCardSlider=useRef(null);
    const imageCard=useRef(null);
    const imageCardDesktop=useRef(null)
    const swiperCardContainer=useRef(null);    
    return (
        <>
            <div className="changeContentOnScroll">
                <div className="container">
                    <div className="paddedContent">
                        <div className="topTextSection">
                            <h2 className="shortHeading mainShortHeading" ref={shortHeading}>{props.shortHeading}</h2>
                            <h1 className="mainHeading bigHeading" ref={mainHeading}>{props.mainHeading}</h1>
                            <div className="colText" ref={colText}>
                                <div><p className="p1 bigDescription grey">{props.colText1}</p></div>
                                <div><p className="p2 hideForMobile description black">{props.colText2}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="imageCards" ref={imageCard}>
                        <div className="imageCardSlider" ref={imageCardDesktop}>
                            <div className="swiperCardContainer positionRelative" ref={swiperCardContainer}>
                                <div className="usingSwiperPin">
                                    <Swiper 
                                        slidesPerView={2} 
                                        spaceBetween={20} 
                                        slidesPerGroup={1} 
                                        navigation={{
                                            nextEl: ".swipeNext",
                                            prevEl: ".swipePrev",
                                        }}
                                        className="mySwiper"
                                    >
                                        {props.imageCards.map((card,id)=>{
                                            return(
                                                <SwiperSlide key={id}>
                                                    <div className="singleCardWrapper">
                                                        <div className="cardImage"><img className="width-100" alt="cardImage" src={urlFor(card.img).url()}/></div>
                                                        <div className="sNum moderatMedium font16 ">{card.sn}.</div>
                                                        <div className="artistName mainShortHeading">{card.artist}</div>
                                                        <p className="desc description">{card.desc}</p>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                                <div ref={nextSlide} className="swipeNext positionAbsolute cursorPointer">
                                    <div className="height-100 width-100 positionRelative">
                                        <div className="nextArrow positionAbsolute"><Caret color="black" direction="right" width="0.1rem" length="0.6rem" marginBottom="0rem"/></div>
                                    </div>
                                </div>
                                <div ref={prevSlide} className="swipePrev positionAbsolute cursorPointer">
                                    <div className="height-100 width-100 positionRelative">
                                        <div className="prevArrow positionAbsolute"><Caret color="black" direction="left" width="0.1rem" length="0.6rem" marginBottom="0rem"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardScroller">
                            {props.imageCards.slice(2, props.imageCards.length).map((card,id)=>{
                                return(
                                    <div key={id} className="singleCardScroller">
                                        <div className="sNum moderatMedium font16 ">{card.sn}.</div>
                                        <div className="artistName mainShortHeading">{card.artist}</div>
                                        <p className="about bigDescription grey">{card.about}</p>
                                        <p className="desc description">{card.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="imageCardSlider mobile showForMobile" ref={imageCardSlider}>
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
                                                    <div className="cardImage"><img className="width-100" alt="cardImage" src={urlFor(card.img).url()}/></div>
                                                    <div className="cardDetailsMobile">
                                                        <span className="sNum moderatMedium font16">{card.sn}.</span>
                                                        <span className="artistName mainShortHeading">{card.artist}</span>
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
                </div>
            </div>   
            <style jsx>{`
                .container{
                    border-top:1px solid #9E9E9E;
                    border-bottom:1px solid #9E9E9E;
                    padding-top:14.67rem;
                    padding-bottom:12.5rem;
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
                    margin-bottom:1.93rem;
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
                .artistName{
                    margin-bottom:1.5rem;
                }
                .sNum{
                    margin-bottom:5.9px;
                }
                .cardImage{
                    margin-bottom:3.5rem;
                }
                .topTextSection{
                    padding:0 3.8% 22.1rem 7.7%;
                }
                .shortHeading{
                    margin-bottom:28.05px;
                }
                .mainHeading{
                    margin-bottom:48.91px;
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
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .container{
                        border-top:none;
                        border-bottom:none;
                        padding-top:0;
                        padding-bottom:12.8rem;
                    }
                    .topTextSection{
                        padding:0;
                    }
                    .mainHeading{
                        margin-bottom:3.2rem;
                        width: 100%;
                    }
                    .shortHeading{
                        margin-bottom:1.3rem;
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
                    }
                    .swipePrev{
                        left:3rem;
                    }
                }
            `}</style>
        </>
    )
}
