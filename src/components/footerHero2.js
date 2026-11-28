import React from "react";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import { MOBILE_BREAKPOINT } from "../config";
function FooterHero2(props) {
  const mainHeroHeadingText = props.mainHeading.split("");
  return (
    <>
      <div className="paddingTop">
        <div
          className={`heroModule positionRelative ${
            props.common.heroImageLoaded ? "imageLoaded" : ""
          }`}
        >
          <div className="hideForMobile width-100 height-100">
            {/* <LazyLoadImage
              alt={"Product image"}
              effect="opacity"
              src={props.mainImage}
              width="100%"
              height="100%"
              // afterLoad={() => props.setHeroImageLoaded(true)}
            /> */}
          </div>
          <div className="showForMobile width-100 height-100">
            {/* <LazyLoadImage
              alt={"Product image"}
              effect="opacity"
              src={props.mainImageMobile}
              width="100%"
              height="100%"
              // afterLoad={() => props.setHeroImageLoaded(true)}
            /> */}
          </div>
          {/* <img alt="Image" className="heroImg width-100" src="/images/hero.png"/> */}
          <div className="centerText positionAbsolute alignCenter">
            <h2 className="shortLine mainShortHeading">{props.shortHeading}</h2>
            <h1 className="mainHeading bannerHeading">
              {mainHeroHeadingText.map((char, index) => {
                let delay = (index + 1) * 0.05 + 0.8;
                return (
                  <span
                    key={index}
                    style={{
                      animationDelay: `${delay}s`,
                      animationDuration: "0.5s",
                    }}
                    className="wavyAnimation"
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
            <h3 className="descriptionDown bannerDescription">
              {props.descriptionDown}
            </h3>
            <div className="desc moderatLight font16">
              {props.bannerDescription}
            </div>
            <div
              style={{
                animationDelay: `${mainHeroHeadingText.length * 0.05 + 1.5}s`,
                animationDuration: "1s",
              }}
              className="scrollDown alignCenter fadeUpAnimation"
            ></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .paddingTop {
          padding-top: 159px;
          // padding-bottom: 252px;
        }
        .heroModule {
          height: 100vh;
          width: 100%;
        }
        .imageLoaded.heroModule {
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
        .heroImg {
          height: 100%;
        }
        .centerText {
          width: 39%;
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
        }
        .shortLine {
          margin-bottom: 1.6rem;
          color: #000;
        }
        .imageLoaded .shortLine {
          animation: shortHeadingAppears 1s linear forwards;
        }
        .mainHeading {
          margin-bottom: 2.6rem;
          color: #000;
        }
        .mainHeading span {
          display: inline-block;
          white-space: pre-wrap;
        }
        .desc {
          margin-bottom: 2.8rem;
          padding: 0 29%;
          color: #000;
        }
        @keyframes shortHeadingAppears {
          from {
            transform: translateY(10px);
          }
          to {
            transform: translateY(0px);
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .shortLine {
            margin-bottom: 0.9rem;
          }
          .mainHeading {
            margin-bottom: 3.3rem;
          }
          .desc {
            margin-bottom: 3.1rem;
            padding: 0 11%;
          }
        }
      `}</style>
    </>
  );
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(FooterHero2);

// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { setFooterImageLoaded } from "../redux/actions";
// import { connect } from "react-redux";
// import { MOBILE_BREAKPOINT } from "../config";

// export default function FooterHero(props) {
//   return (
//     <>
//       <div className="paddingTop">
//         <div className="heroModule1 positionRelative ">
//           <div className="hideForMobile width-100 height-100">
//             <LazyLoadImage
//               alt={"Product image"}
//               effect="opacity"
//               width="100%"
//               height="100%"
//               src={props.mainImage}
//             />
//           </div>
//           <div className="centerText positionAbsolute alignCenter">
//             <h2 className="shortLine alignCenter mainShortHeading">
//               {props.shortHeading}
//             </h2>
//             <h1 className="mainHeading bannerHeading ">{props.mainText}</h1>
//             <div className="desc moderatLight font16">
//               {props.bannerDescription}
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         .paddingTop {
//           padding-top: 159px;
//         }
//         .heroModule1 {
//           height: 100vh;
//           width: 100%;
//         }
//         .imageLoaded.heroModule {
//           animation: blurMainImage 0.8s ease-out forwards;
//         }
//         @keyframes blurMainImage {
//           from {
//             filter: blur(5px);
//             transform: scale(1.1);
//           }
//           to {
//             filter: blur(0);
//             transform: scale(1);
//           }
//         }
//         .heroImg {
//           height: 100%;
//         }
//         .centerText {
//           width: 532px;
//           top: 39%;
//           left: 50%;
//           transform: translateX(-50%);
//         }
//         .shortLine {
//           margin-bottom: 1.6rem;
//           color: #000;
//         }
//         .imageLoaded .shortLine {
//           animation: shortHeadingAppears 1s linear forwards;
//         }
//         .mainHeading {
//           margin-bottom: 2.6rem;
//           color: #000;
//         }
//         .mainHeading span {
//           display: inline-block;
//           white-space: pre-wrap;
//         }
//         .desc {
//           margin-bottom: 2.8rem;
//           padding: 0 29%;
//           color: #000;
//         }
//         @keyframes shortHeadingAppears {
//           from {
//             transform: translateY(10px);
//           }
//           to {
//             transform: translateY(0px);
//           }
//         }
//         @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
//           .shortLine {
//             margin-bottom: 0.9rem;
//           }
//           .mainHeading {
//             margin-bottom: 3.3rem;
//           }
//           .desc {
//             margin-bottom: 3.1rem;
//             padding: 0 11%;
//           }
//         }
//       `}</style>
//     </>
//   );
// }
