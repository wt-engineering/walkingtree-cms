import React, { useState } from "react";
import Caret from "./caret";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import LongArrow from './longArrow'
import Link from "next/link";
export default function Button(props) {
  const [nextButtonHover, setNextButtonHover] = useState(false);
  const [prevButtonHover, setPrevButtonHover] = useState(false);
  const [textChange, setTextChange] = useState(false);
  return (
    <>
      <div className="buttonWrapper" onClick={()=>!!props.onClick && props.onClick()}>
        {props.buttonType === "rectangleButton" && (
          <button
            onMouseEnter={() => setTextChange(true)}
            onMouseLeave={() => setTextChange(false)}
            className={`btn rectangle moderatRegular fontClass rectangleButton cursorPointer ${textChange ? "hovered" : "" }`}
          >
            <span className="defaultText width-100 black positionAbsolute">{props.buttonText}</span>
            <span className="hoveredText white width-100 positionAbsolute">{props.textOnHover}</span>
          </button>
        )}
        {props.buttonType === "rectangle" && !!props.href &&(
          <Link
            href={props.href}
            onMouseEnter={() => setTextChange(true)}
            onMouseLeave={() => setTextChange(false)}
            className={`btn richText linkElement rectangle positionRelative moderatRegular fontClass cursorPointer  ${textChange ? "hovered" : "" }`}>

            <span className="defaultText width-100 black richText">{props.buttonText}</span>
            <span className="hoveredText white width-100 richText">{props.textOnHover}</span>

          </Link>
        )}
        {props.buttonType === "rectangleActiveClassButton"&&(
            <button
              onMouseEnter={() => setTextChange(true)}
              onMouseLeave={() => setTextChange(false)}
              className={`btn richText linkElement rectangle positionRelative moderatRegular fontClass cursorPointer  ${textChange ? "hovered" : "" } ${!!props.class?"active":"inactive"}`}
            >
              <span className="defaultText width-100 black richText">{props.buttonText}</span>
              <span className="hoveredText white width-100 richText">{props.textOnHover}</span>
            </button>
        )}
        {props.buttonType === "rectangleWithArrow" && (
          <a
            onMouseEnter={() => setTextChange(true)}
            onMouseLeave={() => setTextChange(false)}
            className={`btn rectangle linkElement positionRelative moderatRegular font12 ${
              textChange ? "hovered" : ""
            }`}
          >
            <span className="defaultText width-100">
              {props.buttonText}
              <span className="rectangleWithArrowContainer">
                <LongArrow
                  arrowLength="5px"
                  lineLength="9px"
                  transformX="2.8px"
                  transformY="1px"
                  arrowWidth="1px"
                  color="black"
                  direction="up"
                  marginTop="0px"
                />
              </span>
            </span>
            <span className="hoveredText white width-100">
              {props.textOnHover}
              <span className="rectangleWithArrowContainer">
                <LongArrow
                  arrowLength="5px"
                  lineLength="9px"
                  transformX="2.8px"
                  transformY="1px"
                  arrowWidth="1px"
                  color="#ffffff"
                  direction="up"
                  marginTop="0px"
                />
              </span>
            </span>
            
          </a>
        )}
        {props.buttonType === "circleIconRight" && (
          <div onMouseEnter={() => setNextButtonHover(true)} onMouseLeave={() => setNextButtonHover(false)} className="swipeNext cursorPointer" >
            <div className="height-100 width-100 positionRelative">
              <div className="nextArrow positionAbsolute">
                <Caret
                  color={`${nextButtonHover ? "white" : "grey"}`}
                  direction="right"
                  width="0.1rem"
                  length="1rem"
                  marginBottom="2px"
                />
              </div>
            </div>
          </div>
        )}
        {props.buttonType === "circleIconLeft" && (
          <div onMouseEnter={() => setPrevButtonHover(true)} onMouseLeave={() => setPrevButtonHover(false)} 
          className="swipePrev cursorPointer" >
            <div className="height-100 width-100 positionRelative">
              <div className="prevArrow positionAbsolute">
                <Caret
                  color={`${prevButtonHover ? "white" : "grey"}`}
                  direction="left"
                  width="0.1rem"
                  length="1rem"
                  marginBottom="2px"
                />
              </div>
            </div>
          </div>
        )}
        {props.buttonType === "circleWithRightArrowTransparent" && (
          <div className="swipeNext transparent cursorPointer">
            <div className="height-100 width-100 positionRelative">
              <div className="nextArrow positionAbsolute">
                <Caret
                  color="white"
                  direction="right"
                  width="0.1rem"
                  length="0.6rem"
                  marginBottom="0rem"
                />
              </div>
            </div>
          </div>
        )}
        {props.buttonType === "circleWithLeftArrowTransparent" && (
          <div className="swipePrev transparent cursorPointer">
            <div className="height-100 width-100 positionRelative">
            <div className="prevArrow positionAbsolute hideForMobile">
                <Caret
                  color={`${prevButtonHover ? "white" : "grey"}`}
                  direction="left"
                  width="0.1rem"
                  length="1.2rem"
                  marginBottom="2px"
                />
              </div>
              <div className="prevArrow positionAbsolute showForMobile">
                <Caret
                  color={`${prevButtonHover ? "white" : "grey"}`}
                  direction="left"
                  width="0.1rem"
                  length="0.5rem"
                  marginBottom="2px"
                />
              </div>
            </div>
          </div>
        )}
         {props.buttonType === "circleIconDownHero" && (
          <div onMouseEnter={() => setPrevButtonHover(true)} onMouseLeave={() => setPrevButtonHover(false)} className="swipePrev cursorPointer" >
            <div className="height-100 width-100 positionRelative">
              <div  className=" prevArrow2 positionAbsolute hideForMobile">
                <Caret
                  color={`${prevButtonHover ? "white" : "grey"}`}
                  direction="down"
                  width="0.1rem"
                  length="1.2rem"
                  marginBottom="2px"
                />
              </div>
              <div className="prevArrow2 positionAbsolute showForMobile">
                <Caret
                  color={`${prevButtonHover ? "white" : "grey"}`}
                  direction="down"
                  width="0.1rem"
                  length="1rem"
                  marginBottom="2px"
                />
              </div>
            </div>
          </div>
        )}
        {props.buttonType === "playButton" && (
          <div className="playButtonWrapper cursorPointer positionRelative">
            <div className="triangle positionAbsolute"></div>
          </div>
        )}
      </div>
      {props.buttonType === "playButtonOnImage" && (
        <div className="playButtonOnImage cursorPointer positionRelative">
          <div className="triangleOnImage positionAbsolute"></div>
        </div>
      )}
      {props.buttonType === "rectangleIconRight" && (
          <div
            onMouseEnter={() => setNextButtonHover(true)}
            onMouseLeave={() => setNextButtonHover(false)}
            className={`circleIconRight cursorPointer ${
              nextButtonHover ? "active" : ""
            }`}
          >
            <img
              src={`${
                nextButtonHover
                  ? "/images/rectangleIcon.png"
                  : "/images/rectanleHoverIcon.png"
              }`}
              className="width-100 height-100 white"
              alt="Arrow"
            />
            {/* <img src="/images/blackArrowIcon.png" className="width-100 black" alt="Arrow"/> */}
          </div>
        )}
      {props.buttonType === "rectangleIconLeft" && (
        <div
          onMouseEnter={() => setPrevButtonHover(true)}
          onMouseLeave={() => setPrevButtonHover(false)}
          className={`circleIconLeft cursorPointer ${
            prevButtonHover ? "active" : ""
          }`}
        >
          <img
            src={`${
              prevButtonHover
                ? "/images/blackArrowIcon.png"
                : "/images/whiteArrowIcon.png"
            }`}
            className="width-100 height-100 white"
            alt="Arrow"
          />
          {/* <img src="/images/blackArrowIcon.png" className="width-100 black" alt="Arrow"/> */}
        </div>
      )}
      {props.buttonType === "circleIconDown" && (
        <div
          onMouseEnter={() => setNextButtonHover(true)}
          onMouseLeave={() => setNextButtonHover(false)}
          className={`circleIconRight positionRelative ${
            nextButtonHover ? "active" : ""
          }`}
        >
          <div className="positionRelative">
            <div className="circleDown swipeNext ">
            
            </div>
          </div>
          {/* <img
            src={`${
              nextButtonHover
                ? "/images/blackArrowIcon.png"
                : "/images/whiteArrowIcon.png"
            }`}
            className="width-100 height-100 white"
            alt="Arrow"
          /> */}
          {/* <img src="/images/blackArrowIcon.png" className="width-100 black" alt="Arrow"/> */}
        </div>
      )}
      <style jsx>{`
        .rectangle {
          width: ${!!props.width ? props.width : "244px"};
          height: 4.8rem;
        }
        a.linkElement{
          display: block;
          text-align: center;
        }
        .active {
          cursor:pointer;
        }
        .inactive {
          cursor: default;
        }
        .buttonWrapper{
          display:inline-block;
        }
        .fontClass{
          font-size:1.2rem;
        }
        .circleIconRight,
        .circleIconLeft {
          width: 4.9rem;
          height: 4.9rem;
        }
        .circleIconRight {
          transform: rotate(180deg);
        }
        .rectangleWithArrowContainer{
          display:inline-block;
          margin-left:5px;
          transform: rotate(45deg);
          margin-bottom: 3px;
        }
        .rectangle {
          background: #ecebea;
        }
        .rectangle.hovered {
          background: #6d6e71;
        }
        .rectangle .hoveredText {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -30%);
          opacity: 0;
        }
        .rectangle.hovered .hoveredText {
          transform: translate(-50%, -50%);
          opacity: 1;
        }
        .rectangle .defaultText {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          opacity: 1;
        }
        .rectangle.hovered .defaultText {
          transform: translate(-50%, -80%);
          opacity: 0;
        }
        .swipeNext,
        .swipePrev {
          width: 4.9rem;
          height: 4.9rem;
          border-radius: 50%;
          background: #ebebeb;
          top: 50%;
          z-index: 9;
          transform: translateY(-50%);
          transition: all 0.3s ease-out;
        }
        .swipeNext:hover,
        .swipePrev:hover {
          background: #6D6E71;
          transition: all 0.3s ease-out;
        }
        .swipePrev {
          left: -9rem;
        }
        .swipeNext {
          right: 8.5rem;
        }
        .nextArrow,
        .prevArrow,.prevArrow2 {
          top: 50%;
          left: 50%;
        }
        .nextArrow {
          transform: translate(-77%, -56%);
        }
        .prevArrow {
          transform: translate(-36%, -56%);
        }
        .prevArrow2 {
          transform: translate(-49%,-59%);
        }
        .swipeNext.transparent,
        .swipePrev.transparent {
          background: transparent;
        }
        .swipeNext.transparent:hover,
        .swipePrev.transparent:hover {
          background: transparent;
        }
        .playButtonWrapper {
          width: 4.9rem;
          height: 4.9rem;
          background: #ffffff;
          border-radius: 50%;
        }
        .playButtonOnImage {
          width: 3.2rem;
          opacity: 1;
        }
        .triangleOnImage {
          width: 0rem;
          height: 0rem;
          border: 20px solid #ffffff;
          border-right-color: transparent;
          border-top-color: transparent;
          border-bottom-color: transparent;
          bottom: 150%;
          left: 250%;
          transform: translate(1%, -180%);
        }
        .triangle {
          width: 0rem;
          height: 0rem;
          border: 6px solid black;
          border-right-color: transparent;
          border-top-color: transparent;
          border-bottom-color: transparent;
          top: 50%;
          left: 50%;
          transform: translate(-7%, -50%);
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .rectangle {
            width: ${!!props.width ? props.width : "210px"};
            height: 4.1rem;
          }
          .fontClass{
            font-size:1rem
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .rectangle {
            width: ${!!props.width ? props.width : "200px"};
            height: 4.5rem;
          }
          .circleIconRight,
          .circleIconLeft {
            width: 3.6rem;
            height: 3.6rem;
          }
          .playButtonWrapper {
            width: 2.7rem;
            height: 2.7rem;
          }
          .triangle {
            border: 4px solid black;
            border-right-color: transparent;
            border-top-color: transparent;
            border-bottom-color: transparent;
          }
          .fontClass{
            font-size:1.2rem;
            letter-spacing: 0.4px;
          }
          .swipeNext,
          .swipePrev {
            width: 3.6rem;
            height: 3.6rem;
          }
          .prevArrow {
            transform: translate(-38%,-44%)
          }
          .prevArrow2{
            transform: translate(-47%,-56%)
          }
          .nextArrow {
            transform: translate(-69%,-45%);
          }
        }
      `}</style>
    </>
  );
}