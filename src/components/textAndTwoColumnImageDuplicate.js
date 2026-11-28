import React  from "react";
import { MOBILE_BREAKPOINT } from "../config";
export default function TextAndTwoColumnImage(props) {  
  return (
    <>
      <div className="textAndTwoColumnImage alignCenter">
        <h2 className="shortHeading mainShortHeading">{props.shortHeading}</h2>
        <h1 className="topText1 smallHeading">
          {props.topText1_1}
          <span className="lpItalic"> {props.topText1_2} </span>
          {props.topText1_3}
          <span className="lpItalic"> {props.topText1_4} </span>
          {props.topText1_5}
        </h1>
        <p className="topText2 bigDescription grey">{props.topText2}</p>
        <div className="twoColImage">
          <div>
            <img alt="Image 1" className="width-100" src={props.img1} />
          </div>
          <div>
            <img alt="Image 2" className="width-100" src={props.img2} />
          </div>
        </div>
        <p className="bottomText description">{props.bottomText}</p>
      </div>
      <style jsx>{`
        .textAndTwoColumnImage {
          padding: 12rem 20.3% 0rem;
        }
        .twoColImage {
          display: flex;
          margin-right: -2.4rem;
          margin-bottom: 11.4rem;
        }
        .twoColImage div {
          width: 50%;
          padding-right: 2.4rem;
        }
        .shortHeading {
          margin-bottom: 4rem;
        }
        .topText1 {
          margin-bottom: 4.4rem;
        }
        .topText2 {
          margin-bottom: 7.5rem;
          padding: 0 2%;
        }
        .bottomText {
          padding: 0 8%;
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .textAndTwoColumnImage {
            padding: 7.2rem 2.5rem 0rem;
          }
          .shortHeading {
            margin-bottom: 1.3rem;
          }
          .topText1 {
            margin-bottom: 3.1rem;
          }
          .topText2 {
            margin-bottom: 2.9rem;
            padding: 0 6%;
          }
          .twoColImage {
            display: block;
            margin-right: 0rem;
            margin-bottom: 6rem;
          }
          .twoColImage div {
            width: 100%;
            padding-right: 0rem;
            margin-bottom: 1.1rem;
          }
          .twoColImage div:last-child {
            margin-bottom: 0rem;
          }
          .bottomText {
            padding: 0 2%;
          }
        }
      `}</style>
    </>
  )
}
