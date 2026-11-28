import React from 'react'
// import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../components/button";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT,lineAnimationTiming} from "../config";

export default  function HeroSustainaibility(props) {
    return (
        <>
            <div className= "heroModule positionRelative">
                <div className=" width-100 height-100">
                        {/* <LazyLoadImage
                            alt="Product image"
                            effect="opacity"
                            src={props.mainImage}
                            width="100%"
                            height="100%"
                        /> */}
                        </div>
                        <div  className="centerText positionAbsolute alignCenter">
                        <h2 style={{animationDelay:"0.1s"}} className="shortLine mainShortHeading fadeUpAnimation">{props.shortHeading}</h2>
                        <h1 style={{animationDelay:"0.2s"}} className="mainHeading bannerHeading fadeUpAnimation">{props.mainHeading}</h1>
                        <div style={{animationDelay:"0.3s"}} className="desc bannerDescription fadeUpAnimation"> {props.bannerDescription}</div>
                        <div style={{animationDelay:"0.4s"}} className="buttonWrapper fadeUpAnimation">
                            <Button
                                buttonText="WATCH THE FILM"
                                textOnHover="WATCH THE FILM"
                                buttonType="rectangle"
                            />
                        </div>
                        {/* <div className="scrollDown alignCenter fadeUpAnimation"><ScrollDownArrow /> </div> */}
                     </div>
            </div>
             
          <style jsx>{`
          .heroModule {
              height: 100vh; 
          }
          .centerText {
            top: 35%;
            left: 50%;
            transform: translateX(-50%);
          }
          .shortLine {
            color: white;
            margin-bottom: 2.2rem;
          }
          .mainHeading {
              margin-bottom: 2.1rem;
          }
          .desc {
              margin: 0 31% 2.1rem;
          }
          .buttonWrapper {
              margin-bottom: 3.2rem;
          }
          .imageLoaded .shortLine {
            opacity: 0;
            animation: shortHeadingAppears 1s linear forwards;
          }
          .imageLoaded .desc  {
            opacity: 0;
            animation: shortHeadingAppears 1s linear forwards 1.6s;
          }
          @keyframes blurMainImage {
            from {
              filter: blur(5px);
              transform: scale(1.1);
            }
            to {
              filter: blur(0);
              transform: scale(1);
            }
          }
          @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
            .desc {
              margin: 0 29% 2.1rem;
          }
          }
          @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
            .heroModule {
              height: 100vh; 
          }
          .centerText {
            top: 35%;
            left: 50%;
            transform: translateX(-50%);
          }
          .shortLine {
            color: white;
            margin-bottom: 4.7rem;
          }
          .mainHeading {
              margin-bottom: 1.5rem;
          }
          .desc {
              margin: 0 9.5rem 6rem;
          }
          .buttonWrapper {
              margin-bottom: 3.2rem;
          }
         
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .heroModule {
              height: 85vh; 
          }
          .centerText {
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
          }
          .shortLine {
            color: white;
            margin-bottom: 1.6rem;
          }
          .mainHeading {
            margin-bottom: 2.8rem;
          }
          .desc {
              margin: 0 -1rem 2.2rem;
          }
          .buttonWrapper {
              margin-bottom: 0rem;
          } 
          ]}
          
          `}</style>
        </>
    )
}


