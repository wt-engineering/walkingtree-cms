import Link from 'next/link'
import React, { useState } from "react";
import Caret from "./caret";
import {MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT,MOBILE_BREAKPOINT} from "../config";

export default function LinkButton(props) {
  const [textChange, setTextChange] = useState(false);
  const [nextButtonHover, setNextButtonHover] = useState(false);
  const [prevButtonHover, setPrevButtonHover] = useState(false);

  return (
    <>
    <div className="buttonWrapper" >
        <Link legacyBehavior href={props.link}>
        <a>
        <button
            onMouseEnter={() => setTextChange(true)}
            onMouseLeave={() => setTextChange(false)}
            className={`btn rectangle positionRelative moderatRegular fontClass  ${textChange ? "hovered" : "" } ${!!props.class?"active": "inactive"}`}
          >
            <span className="defaultText width-100 black">{props.buttonText}</span>
            <span className="hoveredText white width-100">{props.textOnHover}</span>
          </button>
        </a>
        </Link>
    </div>   
        <style jsx>{`
        .rectangle {
          width: ${!!props.width ? props.width : "244px"};
          height: 4.8rem;
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
          transition: all 0.5s ease-out;
        }
        .rectangle.hovered {
          background: #6d6e71;
          transition: all 0.5s ease-out;
        }
        .rectangle .hoveredText {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -30%);
          opacity: 0;
          transition: all 0s ease-out;
        }
        .rectangle.hovered .hoveredText {
          transform: translate(-50%, -50%);
          opacity: 1;
          transition: all 0.5s ease-out;
        }
        .rectangle .defaultText {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          opacity: 1;
          transition: all 0.5s ease-out;
        }
        .rectangle.hovered .defaultText {
          transform: translate(-50%, -80%);
          opacity: 0;
          transition: all 0s ease-out;
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
          background: #000000;
          transition: all 0.3s ease-out;
        }
        .swipePrev {
          left: -9rem;
        }
        .swipeNext {
          right: 8.5rem;
        }
        .nextArrow,
        .prevArrow {
          top: 50%;
          left: 50%;
        }
        .nextArrow {
          transform: translate(-77%, -56%);
        }
        .prevArrow {
          transform: translate(-53%, -56%);
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
            width: ${!!props.width ? props.width : "144px"};
            height: 3rem;
          }
          .circleIconRight,
          .circleIconLeft {
            width: 2.6rem;
            height: 2.6rem;
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
            font-size:0.8rem;
          }
          .swipeNext,
          .swipePrev {
            width: 2.6rem;
            height: 2.6rem;
          }
          .prevArrow {
            transform: translate(-35%, -56%);
          }
        }
      `}</style>
    </>
  )
}
