import Slider from 'react-slick'
import SliderDots from './sliderDots'
import { useState, useRef} from 'react'
import Button from "../components/button"
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from '../config'
import Image from './Image';
import Animate from './animate';

export default function TwoStepTextWithSmallCarousel(props){
    const [indexSlider, setIndexSlider] = useState(0)
    const slider = useRef(null);
    const shortHeadingRef = useRef(null);
    const headingRef = useRef(null);
    const sliderImagesRef = useRef(null);

    var settings = {
        dots: false,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setIndexSlider(next),
    }
    function sliderUpdate(id) {
        slider.current.slickGoTo(id);
        setIndexSlider(id);
    }
    return (
        <>
            <div className="wrapper alignCenter">
                <Animate><div ref={shortHeadingRef} className="shortHeading mainShortHeading marginBottom26">{props.shortHeading}</div></Animate>
                <Animate><div ref={headingRef} className="bigHeading heading marginBottom90">{props.heading}</div></Animate>
                <Animate>
                    <div ref={sliderImagesRef} className="slider">
                        <div className="imagesSliderWrapper positionRelative">
                            <Slider {...settings} ref={slider}>
                                {Array.isArray(props.historyImages) && props.historyImages.map((data,index)=>{
                                    return (
                                        <div className="sliderImage" key={index}><Image height={522} width={467} alt="Image" className="width-100" originalSrc={data.img}/></div>
                                    )
                                })}
                                {/* <div className="sliderImage"><img alt="Image" className="width-100" src="/images/history.png"/></div>
                                <div className="sliderImage"><img alt="Image" className="width-100" src="/images/history.png"/></div>
                                <div className="sliderImage"><img alt="Image" className="width-100" src="/images/history.png"/></div> */}
                            </Slider>
                            <div onClick={()=> slider.current.slickNext()} className="positionAbsolute circleWithRightArrowContainer">
                                <Button buttonType="circleIconRight"/>
                            </div>
                            <div onClick={()=> slider.current.slickPrev()} className="positionAbsolute circleWithLeftArrowContainer">
                                <Button buttonType="circleIconLeft"/>
                            </div>
                        </div>
                        <div className="alignCenter">
                            <div className="dotsWrapper">
                                <SliderDots
                                    length = {props.historyImages.length}
                                    indexValue={indexSlider}
                                    onClick={(id) => sliderUpdate(id)}
                                    dotColor="#BDBDBD"
                                    activeDotColor="#000000"
                                />
                            </div>
                        </div>
                    </div>
                </Animate>
            </div>
            <style jsx>{`
                .circleWithRightArrowContainer,
                .circleWithLeftArrowContainer{
                    top:50%;
                    transform:translateY(-50%);
                }
                .circleWithRightArrowContainer{
                    right:-30%;
                }
                .circleWithLeftArrowContainer{
                    left:-30%;
                }
                .wrapper{
                    padding-left:33.8%;
                    padding-right:33.8%;
                }
                .dotsWrapper{
                    margin:3rem auto 0 auto;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .wrapper{
                        padding-left:23.8%;
                        padding-right:23.8%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {

                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .wrapper{
                        padding-left:2.1rem;
                        padding-right:2.1rem;
                    }
                    .circleWithRightArrowContainer{
                        right:5%;
                    }
                    .circleWithLeftArrowContainer{
                        left:5%;
                    }
                    .dotsWrapper{
                        margin:1rem auto 0 auto;
                    }
                }

            `}</style>
        </>
    )
}