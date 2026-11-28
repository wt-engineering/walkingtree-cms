import React,{ useRef } from "react";
import Button from "./button";
import NextAndPreviousButtonWithText from "../components/nextAndPreviousButtonWithText"
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Animate from "./animate";
import Image from "./Image";

export default function SectionVideo(props) {
  const shortHeadingRef =useRef();
  const headingRef = useRef();
  const img = useRef();

  return (
    <>
      <div className="container">
          <div className="marginBottom55 videoSection gsap positionRelative">
            <Animate>
              <div ref={img} className="videoImage width-100 height-100">
                <Image height={900} width={1440} alt="video placeholder" className="width-100 height-100" src={props.mainImg}/>
              </div>
            </Animate>
            <div className="buttonOne positionAbsolute alignCenter white">
              <Animate><h2 ref={shortHeadingRef} className="shortLine mainShortHeading white">{props.shortHeading}</h2></Animate>
              <Animate>
                {props.cmsRichContent ?
                  <h1 ref={headingRef} className="marginBottom55 mainHeading bigHeading white" dangerouslySetInnerHTML={{__html: props.mainHeading}}></h1>
                  :
                  <h1 ref={headingRef} className="marginBottom55 mainHeading bigHeading white" >{props.mainHeading}</h1>
                  }

              </Animate>
              <div className="buttonWrapper">
                <Button
                  buttonText={props.buttonText}
                  textOnHover={props.textOnHover}
                  buttonType="rectangle"
                />
              </div>
            </div>
            <div className="buttonTwo positionAbsolute">
              <div className="marginBottom26 playButton desktop">
                <Button buttonType="playButton" />
              </div>
              <p className="bottomText bannerDescription white alignCenter">
                {props.bottomText}
              </p>
            </div>
            <div className="playButton mobile">
              <Button buttonType="playButton" />
            </div>
          </div>
        </div>
        <NextAndPreviousButtonWithText/>
      <style jsx>{`
        .container {
          padding-left: 4.5%;
          padding-right: 4.5%;
        }
        .videoSection {
          height: auto;
        }
        .playButton {
          display: flex;
          justify-content: center;
        }
        .buttonOne,
        .buttonTwo {
          width: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
        .buttonOne {
          top: 50%;
        }
        .buttonTwo {
          top:55%;
        }
        .playButton.mobile {
          display: none;
        }
        .videoImage{
          object-fit: cover;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .buttonTwo {
            top:70%;
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .container {
            padding:0 4%;
          }
          .buttonTwo {
            top:65%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            padding-left: 0rem;
            padding-right: 0rem;
          }
          .buttonTwo {
            top:80%;
          }
          .videoSection {
            height: 100vh;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .bottomText {
            padding: 0 11%;
          }
          .playButton.desktop {
            display: none;
          }
          .playButton.mobile {
            display: block;
            position: absolute;
            top: 65%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </>
  );
}
