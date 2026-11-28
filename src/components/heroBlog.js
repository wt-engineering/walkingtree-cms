import React from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import Animate from './animate'

export default function HeroBlog(props) {

  return (
    <>
      <div className="container alignCenter">
      <h2 style={{animationDelay:"0.1s"}} className="shortLine mainShortHeading  fadeUpAnimation">{props.shortHeading}</h2>
      <div style={{animationDelay:"0.2s"}} className="mainHeading bannerHeadingBlack fadeUpAnimation">{props.mainHeading}</div>
      <p style={{animationDelay:"0.3s"}} className="desc bannerDescription fadeUpAnimation">{props.desc}</p>
      </div>
      <style jsx>
        {`
          .container {
            padding:26.6rem 0 30rem;
          }
          .shortLine {
            margin-bottom: 3.2rem;
            color: #020202;
          }
          .mainHeading {
            margin-bottom: 2.6rem;
          }
          .desc {
            color: #020202;
            padding: 0 33%;
          }
          @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
            .container {
              padding:20rem 0 22.5rem;
            }
            .shortLine {
              margin-bottom: 1rem;
            }
            .mainHeading {
              font-size: 6rem;
              line-height: 6.6rem;
              letter-spacing: -0.24px;
              margin-left: 10rem;
              margin-right: 10rem;
              margin-bottom: 5.4rem;
            }
            .desc {
              padding: 0 17rem;
              margin-bottom: 0rem;
            }
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .container {
              padding:12rem 0 16rem;
            }
            .shortLine {
              margin-bottom: 2.5rem;
            }
            .mainHeading {
              font-size: 3rem;
              line-height: 4rem;
              letter-spacing: -0.42px;
              margin-bottom: 3.3rem;
              margin-left: 5.4rem;
              margin-right: 5.4rem;
            }
            .desc {
              padding-right: 4rem;
              padding-left: 5.5rem;
              margin-bottom: 3.1rem;
            }
          }
        `}
      </style>
    </>
  );
}
