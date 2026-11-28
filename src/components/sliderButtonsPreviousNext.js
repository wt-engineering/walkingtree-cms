import React, { useRef } from "react";
import LongArrow from "./longArrow";
import Slider from "react-slick";
import Button from "./button";

function SliderButtonsPreviousNext(props) {
  const slider = useRef();

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current, next) => setIndexSlider(next),
  };
  return (
    <>
      <div className="container">
        <div className="sliderContainer positionRelative">
          <Slider ref={slider} {...settings}>
            {props.slides.map((slide, index) => {
              return (
                <div key={index} className={`slide `}>
                  <div className="items flexItems">
                    <div className="leftImage">
                      <img
                        alt="Image"
                        className="width-100"
                        src={slide.imgLeft}
                      />

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
                            marginTop="5px"
                          />
                        </div>

                        <div className="textOne">
                          <span className="greyCaption">
                            {slide.caption1Left}
                          </span>
                          <span className="blackCaption">
                            {slide.caption1left1}
                          </span>
                        </div>
                      </div>

                      <div className="textAndArrow flexItems">
                        <div className="arrow">
                          <LongArrow
                            arrowLength="5px"
                            lineLength="10px"
                            transformX="3.3px"
                            transformY="1px"
                            arrowWidth="1px"
                            color="black"
                            direction="right"
                            marginTop="5px"
                          />
                        </div>

                        <div className="textTwo">
                          <span className="blackCaption">
                            {slide.caption2Left}
                          </span>
                          <span className="greyCaption">
                            {slide.caption2Left1}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rightImage ">
                      <img
                        alt="Image"
                        className="width-100"
                        src={slide.imgRight}
                      />
                      <p className="rightText">{slide.captionRight}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="borderBottom">
            <div
              onClick={() => slider.current.slickNext()}
              className="circleWithRightArrow"
            >
              <Button buttonType="circleIconRight" />
              <div className="nextArticle font12 moderatRegular  ">
                {props.nextArticle}
              </div>
            </div>
            <div
              onClick={() => slider.current.slickPrev()}
              className="circleWithLeftArrow"
            >
              <Button buttonType="circleIconLeft" />
              <div className="previousArticle font12 moderatRegular">
                {props.previousArticle}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .previousArticle {
          padding-right: 3rem;
        }
        .items {
          padding-left: 12.29%;
          padding-right: 12.29%;
        }
        .borderBottom {
          padding-left: 6.6rem;
        }
        .leftImage {
          width: 41%;
          margin-right: 21.9rem;
        }
        .rightText {
          font-size: 2.7rem;
          font-family: moderatLight;
          line-height: 3.9rem;
          letter-spacing: -0.27px;
          color: #9e9e9e;

          margin-top: 4.8rem;
        }
        .arrow {
          margin-right: 1.3rem;
        }
        .rightImage {
          width: 41%;
        }
        .textAndArrow {
          margin-top: 1.4rem;
          padding-right: 5px;
        }
        .textTwo {
          width: 42rem;
        }
        .circleWithRightArrow {
          position: absolute;
          right: 66px;
          transition: all 0.3s ease-out;
        }
        .circleWithLeftArrow {
          left: 66px;
          transition: all 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default SliderButtonsPreviousNext;
