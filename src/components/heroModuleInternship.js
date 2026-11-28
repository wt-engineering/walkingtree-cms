import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT, paddedContentLeftTablet, TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Image from "./Image";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import React, { useEffect,useState,useRef } from "react";

 function HeroModuleInternship(props) {
   useEffect(() => {
     props.setHeroImageLoaded(true);
   },[])
  return (
    <>
      <div className="container flexItems paddedContent">
          <div className="wrapper">
            <div style={{animationDelay:"0.1s"}} className="mainHeading bigHeading fadeUpAnimation mbBelowShortHeading black">{props.heading}</div>
           {props.cmsRichContent ?<div style={{animationDelay:"0.2s"}} className="desc description grey fadeUpAnimation mbHeading" dangerouslySetInnerHTML={{__html:props.description}}></div>:
            <div style={{animationDelay:"0.2s"}} className="desc description grey fadeUpAnimation mbHeading">{props.description}</div>}
          </div>
          <div style={{animationDelay:"0.1s"}} className="image fadeUpAnimation">
            <Image height={581} width={774} alt="hero" className=" width-100 " originalSrc={props.image} loading='eager'/>
          </div>
      </div>
      <style jsx>{`
        .container{
          padding-top: 100px;
        }
        .shortHeading{
          margin-top:2rem;
        }
        .image{
          width:61%;
        }
        .wrapper{
          width:50%;
          padding-right: 4%;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
            .container{
                display: block
            }
            .mainHeading{
                text-align: center;
            }
            .desc{
                text-align:justify;
            }
            .image{
                width:100%;
            }
            .wrapper{
                width:100%;
                padding-right: 0%;
            }
        }
      `}</style>
    </>
  );
}

function mapStateToProps({ common }) {
  return { common };
}

export default connect(mapStateToProps,{ setHeroImageLoaded})(HeroModuleInternship)
