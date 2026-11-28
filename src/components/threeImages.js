import React,{ useRef} from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import Animate from "./animate";

function ThreeImages(props) {
  const image1 = useRef();
  const image2 = useRef();
  const image3 = useRef();
  const mobileImageTop = useRef();

  return (
    <>
      <div className="container">
        <Animate><div ref={mobileImageTop}><img alt="Image" className="showForMobile mobileImageTop width-100" src={props.mobileImageTop}/></div></Animate>
        <div className="image flexItems">
           <div ref={image1} className="firstImg"><Animate><img alt="Image" className=" width-100" src={props.firstImg}/></Animate></div>
           <div ref={image2} className="secondImg hideForMobile"><Animate><img alt="Image" className="width-100" src={props.secondImg}/></Animate></div>
           <div ref={image3} className="thirdImg"><Animate><img alt="Image" className="width-100" src={props.thirdImg} /></Animate></div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 0 20.8%;
          margin-right: -1.8rem;
        }
        .firstImg,.secondImg,.thirdImg {
          padding-right: 1.8rem;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            padding: 0 9.5%;
            margin-right: -1.4rem;
          }
          .firstImg,.secondImg,.thirdImg {
            padding-right: 1.4rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .container {
            padding: 0 5.6%;
            margin-right: -1.4rem;
           }
          .firstImg {
            width: 50%;
          }
          .mobileImageTop {
            width: 100%;
            margin-bottom: 1.1rem;
          }
          .thirdImg {
            width: 50%;
          }
          .firstImg,.thirdImg {
            padding-right: 1.4rem;
          }
        }
      `}</style>
    </>
  );
}

export default ThreeImages;
