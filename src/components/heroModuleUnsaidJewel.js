import React, { useRef } from "react";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";

function HeroModuleUnsaidJewel(props) {
  const bannerDescription = useRef();
  const mainHeroHeadingText = props.mainHeading.split("");

  return (
    <>
      <div
        className={`heroModule positionRelative ${
          props.common.heroImageLoaded ? "imageLoaded" : ""
        }`}
      >
        <div className="hideForMobile width-100 height-100">
          {/* <LazyLoadImage
            alt="Product image"
            effect="opacity"
            src={props.mainImage}
            width="100%"
            height="100%"
            afterLoad={() => {
              // props.setHeroImageLoaded(true);
            }}
          /> */}
        </div>
        <div className="showForMobile width-100 height-100">
          {/* <LazyLoadImage
            alt="Product image"
            effect="opacity"
            src={props.mainImageMobile}
            width="100%"
            height="100%"
            afterLoad={() => {
              // props.setHeroImageLoaded(true);
            }}
          /> */}
        </div>
        <div className="centerText positionAbsolute alignCenter">
          <h2 className="marginBottom16 shortLine mainShortHeading">{props.shortHeading}</h2>
          <h1 className="marginBottom26 mainHeading bannerHeading">
            {mainHeroHeadingText.map((char, index) => {
              let delay = (index + 1) * 0.05 + 0.8;
              return (
                <span key={index} style={{animationDelay: `${delay}s`,animationDuration: "0.5s",}} className="wavyAnimation">{char}</span>
              );
            })}
          </h1>
          <div ref={bannerDescription} className="marginBottom26 desc1 bannerDescription">{props.bannerDescription1}</div>
          <div style={{animationDelay: `${mainHeroHeadingText.length * 0.05 + 1.3}s`,animationDuration: "0.8s",}} className="desc2 bannerDescription fadeUpAnimation">{props.bannerDescription2}</div>
        </div>
      </div>
      <style jsx>{`
        .heroModule {
          height: 100vh;
          width: 100%;
        }
        .heroModule {
          animation: blurMainImage 0.8s ease-out forwards;
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
        .centerText {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
        .shortLine {
          color: #9e9e9e;
        }
        .imageLoaded .shortLine {
          opacity: 0;
          animation: shortHeadingAppears 1s linear forwards;
        }
        .imageLoaded .desc2 desc1 {
          opacity: 0;
          animation: shortHeadingAppears 1s linear forwards 1.6s;
        }
        .desc2:hover {
          text-decoration: underline;
        }
        .mainHeading {
          color: #fffff;
        }
        .mainHeading span {
          display: inline-block;
          white-space: pre-wrap;
        }
        .desc1 {
          color: #fff;
          padding: 0 12%;
          opacity: 1;
        }
        @keyframes shortHeadingAppears {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .heroModule {
            height: 100vh;
            width: 100%;
          }
         .desc1 {
           padding:0;
         }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .heroModule {
            height: 100vh;
          }
          .shortLine {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(HeroModuleUnsaidJewel);
