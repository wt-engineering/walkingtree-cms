import React, { useRef } from 'react'
import SwiperCore, { Navigation } from 'swiper/core';
import LongArrow from './longArrow'
import Slider from "react-slick";
import Button from '../components/button'
import {MOBILE_BREAKPOINT} from '../config'
import Sanity from '../sanity'
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = source => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import Animate from './animate';

export default function Trends(props) {
    const slider = useRef();
    SwiperCore.use([Navigation]);

    // useEffect(()=>{
    //     if(changeTextInTrendsSection){
    //         setTopText1(false);
    //     }
    // },[changeTextInTrendsSection])

    var settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: "slider variable-width",
        variableWidth: true,
        // className: "center",
        // centerMode: true,
        responsive: [
            {
              breakpoint: MOBILE_BREAKPOINT,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            }
          ]
    };
   
    return (
        <>
            <Animate>
                <div className="trendsSection">
                    <div className="firstTextSection">
                        <div className="shortHeading mainShortHeading">{props.shortHeading}</div>
                        {topText1 && <div className="topText smallHeading">{props.topText1}</div>}
                        {!topText1 && <div className="topText two smallHeading fadeUpAnimation">{props.topText2}</div>}
                    </div>
                    <div className="allImagesSlider positionRelative">
                        <Slider ref={slider} {...settings}>
                            {props.trendCarouselData.map((image,id)=>{
                                return(
                                    <div className="sliderImage" key={id}><img alt="Image" className="width-100" src={urlFor(image).url()}/></div>
                                )
                            })}
                        </Slider>
                        <div onClick={() => slider.current.slickNext()} className="positionAbsolute circleWithRightArrowContainer">
                            <Button 
                                buttonType="circleWithRightArrow"
                            />
                        </div>
                        <div onClick={() => slider.current.slickPrev()} className="positionAbsolute circleWithLeftArrowContainer">
                            <Button 
                                buttonType="circleWithLeftArrow"
                            />
                        </div>
                    </div>
                    {bottomText1 &&
                    <div className="bottomText first flexItems">
                        <div className="leftText">
                            <div className="textAndArrow flexItems">
                                <div className="arrow">
                                    <LongArrow
                                        arrowLength="5px"
                                        lineLength="10px"
                                        transformX="3.3px"
                                        transformY="1px"
                                        arrowWidth="1px"
                                        color="black"
                                        direction="up"
                                        marginTop="7px"
                                    />
                                </div>
                                {/* chronicleRoman */}
                                <div className="text greyCaption">
                                    <span className="blackCaption">{props.bottomSubText1} </span> {props.bottomSubText2} <span className="blackCaption"> {props.bottomSubText3}</span> {props.bottomSubText4} <span className="blackCaption"> {props.bottomSubText5}</span>
                                </div>
                            </div> 
                        </div>  
                        <div className="rightText">
                            <div className="rightTextContainer">
                                <div className="rightTextOne bigDescription grey">{props.bottomRightText1}</div>
                                <div className=""><span className="blackCaption">{props.bottomRightSubText1} </span><span className="greyCaption"> {props.bottomRightSubText2}</span></div>
                            </div>
                        </div>
                    </div>}
                    {!bottomText1 &&
                    <div className="bottomText first flexItems">
                        <div className="leftText">
                            <div className="textAndArrow flexItems">
                                <div className="arrow">
                                    <LongArrow
                                        arrowLength="5px"
                                        lineLength="10px"
                                        transformX="3.3px"
                                        transformY="1px"
                                        arrowWidth="1px"
                                        color="black"
                                        direction="up"
                                        marginTop="4px"
                                    />
                                </div>
                                <div className="text greyCaption">
                                    She makes her draft by dragging her fingers through the malleable surface, generating shapes which are simultaneously organic ans architectural. Its is in the zone - this split - space between nature anD order that is signature to Anna Sui’s design philosophy.
                                </div>
                            </div> 
                        </div>  
                        <div className="rightText">
                            <div className="rightTextContainer">
                                <div className="rightTextOne description">Where aesthetic is to be placed in context, our team look to the layered and sculpted design principles, and the attention to form and texture is in play as well.</div>
                            </div>
                        </div>
                    </div>}
                </div>
            </Animate>
            <style jsx>{`
                .trendsSection{
                    padding-left:12.29%;
                }
                .sliderImage{
                    padding-right:10px;
                }
                .circleWithRightArrowContainer,.circleWithLeftArrowContainer{
                    top: 50%;
                    z-index: 9;
                    //transform: translateY(-50%);
                    opacity:0;
                    transition:all 0.3s ease-out;
                }
                .circleWithRightArrowContainer{
                    right:8.5rem;
                }  
                .circleWithLeftArrowContainer{
                    left:-8.5rem;
                }
                .allImagesSlider:hover .circleWithRightArrowContainer,.allImagesSlider:hover .circleWithLeftArrowContainer{
                    opacity:1;
                    transition:all 0.3s ease-out;
                }
                .text{
                    padding-right: 12px;
                }
                .rightTextOne{
                    margin-bottom:0.9rem;
                }
                .allImagesSlider{
                    margin-bottom:5.6rem;
                    opacity:0;
                    transform:translateY(50px)
                }
                .leftText,.rightText{
                    width: 50%;
                }
                .shortHeading{
                    margin-bottom:2.5rem;
                    opacity:0;
                    transform:trannslateY(30px);
                }
                .topText{
                    margin-bottom:10rem;
                    padding-right: 47%;
                    opacity:0;
                }
                .topText.two{
                    padding-right: 53%;
                }
                .sliderImage img{
                    height:100%;
                }
                .textAndArrow{
                    align-items: flex-start;
                    padding-right: 30%;
                }
                .textAndArrow .arrow{
                    margin-right:1.3rem;
                    margin-bottom: 4px;
                }
                .rightTextContainer{
                    padding-right: 25%;
                }
                .bottomText{
                    opacity:0;
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .trendsSection{
                        padding-left:0%;
                        overflow: hidden;
                        width: auto;
                    }
                    .circleWithRightArrowContainer{
                        right:2.1rem;
                    }  
                    .circleWithLeftArrowContainer{
                        left:2.1rem;
                    }
                    .bottomText{
                        display:block;
                    }
                    .leftText,.rightText{
                        width: auto;
                    }
                    .textAndArrow{
                        padding-right: 0%;
                    }
                    .allImagesSlider{
                        margin-bottom:2.9rem;
                    }
                    .leftText,.shortHeading{
                        padding:02.1rem;
                    }
                    .leftText{
                        margin-bottom:3.1rem;
                    }
                    .rightText{
                        padding-left:2.9rem;
                    }
                    .rightTextContainer{
                        padding-right: 0%;
                    }
                    .topText{
                        margin-bottom:3.8rem;
                        padding-right:2.1rem;
                        padding-left:2.1rem;
                    }
                    .topText.two{
                        padding-right:2.1rem;
                        padding-left:2.1rem;
                    }
                    .textAndArrow .arrow{
                        margin-right:0.7rem;
                        margin-bottom: 4px;
                    }
                }
            `}</style>
        </>
    )
}
