import React, {useState, useRef,useEffect} from 'react'
import Slider from "react-slick";
import Button from "../components/button"
import { MOBILE_BREAKPOINT, MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Image from './Image';
import Animate from './animate';

export default function OurTeam(props) {
    const [animation, setAnimation] = useState("none");
    const [indexSlider, setIndexSlider] = useState(0);
    const slider1 = useRef();
    const slider2 = useRef();
    const slider3 = useRef();
    const shortHeadingRef = useRef();
    const descRef = useRef();
    const contentSectionRef = useRef();
    var settings = {
        dots: false,
        swipe:false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        beforeChange: (current, next) => setIndexSlider(next)
    };
    var settings2 = {
        dots: false,
        swipe:false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };
    useEffect(() => {
        slider2.current.slickGoTo(1);
        slider3.current.slickGoTo(2);
    }, [])
    useEffect(() => {
        setAnimation("opacityOff");
        setAnimation("");
    }, [indexSlider])

    return (
        <>
            <div className="teamDetails">
                <Animate><h2 ref={shortHeadingRef} className="marginBottom18 shortHeading mainShortHeading alignCenter grey">{props.shortHeading}</h2></Animate>
                <Animate><p ref={descRef} className="desc description black alignCenter marginBottom90">{props.desc}</p></Animate>
                <Animate>
                    <div ref={contentSectionRef} className="teamMemberDetails flexItems positionRelative">
                        <div className="col1 ">
                            <div className={`personalDetails ${animation}`}>
                                <h2 className="designation mainShortHeading black mbHeading richText">{props.teamMembers[indexSlider].designation}</h2>
                                <h1 className="name black bigHeading mbHeading richText">{props.teamMembers[indexSlider].name}</h1>
                                <p className="empDesc description richText">{props.teamMembers[indexSlider].desc}</p>
                            </div>
                            <div className="slidesButton">
                                {/* <p className="knowMore font12 moderatRegular grey cursorPointer">KNOW MORE</p> */}
                                <div className="sliderButtons flexItems">
                                    <div onClick={() => {slider1.current.slickPrev(),slider2.current.slickPrev(),slider3.current.slickPrev()}} className="circleWithLeftArrow">
                                        <Button buttonType="circleIconLeft" />
                                    </div>
                                    <div onClick={() => {slider1.current.slickNext(),slider2.current.slickNext(),slider3.current.slickNext()}} className="circleWithRightArrow">
                                        <Button buttonType="circleIconRight" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col2">
                            <h2 className="designation mainShortHeading black showForMobile marginBottom30">{props.teamMembers[indexSlider].designation}</h2>
                            <div className="positionRelative">
                                <Slider ref={slider1} {...settings}>
                                    {props.teamMembers?.map((teamMember,index)=>{
                                        return(
                                            <div key={index} className="singleImageSlider1" style={{width:`${teamMember.width}px`}}><Image height={587} width={381} alt="Image" originalSrc={teamMember.img}/></div>
                                        )
                                    })}
                                </Slider>
                                <div onClick={() => {slider1.current.slickPrev(),slider2.current.slickPrev(),slider3.current.slickPrev()}} className="circleWithLeftArrow showForMobile positionAbsolute">
                                    <Button buttonType="circleIconLeft" />
                                </div>
                                <div onClick={() => {slider1.current.slickNext(),slider2.current.slickNext(),slider3.current.slickNext()}} className="circleWithRightArrow showForMobile positionAbsolute">
                                    <Button buttonType="circleIconRight" />
                                </div>
                            </div>
                            <div className={`personalDetails ${animation} showForMobile alignCenter`}>
                                <h1 className="name bigHeading marginBottom30 black richText">{props.teamMembers[indexSlider].name}</h1>
                                <p className="empDesc marginBottom26 richText ">{props.teamMembers[indexSlider].desc}</p>
                                {/* <p className="knowMore font12 moderatRegular grey cursorPointer">KNOW MORE</p> */}
                            </div>
                        </div>
                        <div className="col3">
                            <div>
                                <Slider ref={slider2} {...settings2}>
                                    {props.teamMembers?.map((teamMember,index)=>{
                                        return(
                                            <div key={index} className="singleImageSlider2" ><Image  height={547} width={381} alt="Image" originalSrc={teamMember.img}/></div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                        <div className="col4">
                            <div>
                                <Slider ref={slider3} {...settings2}>
                                    {props.teamMembers?.map((teamMember,index)=>{
                                        return(
                                            <div key={index} className="singleImageSlider2"><Image height={547} width={381} alt="Image" originalSrc={teamMember.img}/></div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </Animate>
            </div>   
            <style jsx>{`
                .opacityOff{
                    opacity:0;
                }
                .circleWithLeftArrow{
                    margin-right:2rem;
                }
                .personalDetails{
                    // min-height: calc(100% - 6rem);
                }
                .circleWithLeftArrow ,.circleWithRightArrow {
                    top: 1;
                }
                .empDesc{
                    padding-right: 10%;
                }
                .designation{
                    padding-bottom:2.5rem;
                    border-bottom:1px solid #707070;
                }
                .col4 > div{
                    width: 548%;
                }
                .col3,.col4{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .col1{
                    width:34.3%;
                    padding-right:3rem;
                }
                .col2{
                    width:33%;
                    padding-right:2.8rem;
                }
                .col3{
                    width:28%;
                    padding-right:2.8rem;
                }
                .col4{
                    width:4.7%;
                }
                .teamMemberDetails{
                    padding-left:12.29%;
                    position:relative;
                }
                .desc{
                    padding: 0 24%;
                }
                .slidesButton{
                    position: absolute;
                    bottom: 0;
                    // left: 12.29%;
                    transform: translateY(50%);
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .col1{
                        width:50%;
                        padding-right:5rem;
                    }
                    .col2{
                        width:30%;
                    }
                    .col3{
                        width:20%;
                        padding-right:0rem;
                    }
                    .col4{
                        display:none;
                    }
                    .teamMemberDetails{
                        // align-items:center;
                    }
                    .slidesButton{
                        position: absolute;
                        bottom: 0;
                        // left: 12.29%;
                        transform: translateY(50%);
                    }
                    
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .col1{
                        width:50%;
                        padding-right:5rem;
                    }
                    .col2{
                        width:43%;
                    }
                    .col3{
                        width:7%;
                        padding-right:0rem;
                    }
                    .col3 > div{
                        width:450%;
                    }
                    .col4{
                        display:none;
                    }
                    .teamMemberDetails{
                        align-items:center;
                        padding-left:8rem;
                    }
                    .desc{
                        padding: 0 17%;
                    }
                    .col3,.col4{
                        display: flex;
                        flex-direction: column;
                        justify-content: start;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .designation{
                        padding-bottom:1.5rem;
                        border-bottom:1px solid #707070;
                    }
                    .desc{
                        padding: 0 10%;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .desc{
                        padding: 0 5rem;
                    }
                    .teamMemberDetails{
                        display:block;
                        padding:0 5rem;
                    }
                    .col1,.col3,.col4{
                        display:none;
                    }
                    .col2{
                        width:100%;
                        padding-right:0rem;
                    }
                    .designation{
                        padding-bottom:0rem;
                        border-bottom:none;
                        text-align:center;
                        min-height: 4rem;
                    }
                    .circleWithLeftArrow,.circleWithRightArrow{
                        top:50%;
                        transform:translateY(-50%);
                    }
                    .circleWithLeftArrow{
                        left:-4rem;
                    }
                    .circleWithRightArrow{
                        right:-4rem;
                    }
                    .empDesc{
                        padding-right: 0%;
                    }
                    .personalDetails{
                        margin-top:3rem;
                    }
                }
            `}</style>
        </>
    )
}
