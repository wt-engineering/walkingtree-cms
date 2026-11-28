import React, { useRef } from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../config";
import Image from "./Image";
import Animate from "./animate";

export default function SocialMediaImages(props) {
  const titleRef = useRef(); 
  const imagesLineRef = useRef(); 

  return (
    <>
      <Animate><div ref={titleRef} className="title smallHeading alignCenter">{props.exerpt}</div></Animate>
      <Animate>
        <div ref={imagesLineRef} className="images flexItems">
          <div className="imgOne"><Image height={201} width={202}alt="Image" className="width-100" originalSrc={props.imgOne} /></div>
          <div className="imgTwo"><Image height={201} width={202}alt="Image" className="width-100" originalSrc={props.imgTwo} /></div>
          <div className="hideForMobile imgThree"><Image height={201} width={202}alt="Image" className="width-100" originalSrc={props.imgThree} /></div>
          <div className="imgFour positionRelative"><Image height={201} width={202} alt="Image" className="width-100" originalSrc={props.imgFour} />
              <div className="playButtonWrapper"><img alt="svg" className="playButton width-100" src={props.playButton}/></div>
          </div>
          <div className="hideForMobile imgFive"><Image height={201} width={202} alt="Image" className="width-100" originalSrc={props.imgFive} /></div>
          <div className="imgSix positionRelative"><Image height={201} width={202} alt="Image" className="width-100" originalSrc={props.imgSix} />
            <div className="playButtonWrapper"><img alt="svg" className="playButton width-100" src={props.playButton1}/></div>
          </div>
          <div className="imgSeven"><Image height={201} width={202} alt="Image" className="width-100" originalSrc={props.imgSeven}/></div>
          <div className="imgEight positionRelative"><img alt="Image" className="width-100" src={props.imgEight} />
            <div className="playButtonWrapper"><img alt="svg" className="playButton width-100" src={props.playButton2}/></div></div>
          <div className="hideForMobile imgNine"><Image height={201} width={202} alt="Image" className="width-100" originalSrc={props.imgNine} /></div>
          <div className="hideForMobile imgTen"><Image height={201} width={202} alt="Image" className="width-100" originalSrc={props.imgTen} /></div>
          <div className="hideForMobile imgEleven"><Image height={201} width={202} alt="Image" className="width-100" originalSrc={props.imgEleven} /></div>
          <div className="hideForMobile imgTwelve"><Image height={201} width={202} alt="Image" className="width-100" originalSrc={props.imgTwelve} /></div>
        </div>
      </Animate>
      <style jsx>{`
        .playButtonWrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: transparent;
        }
        .title {
          padding-top: 12.5rem;
          padding-bottom: 12.5rem;
        }
        .images {
          flex-wrap: wrap;
          padding-right: 4.5%;
          padding-left: 4.5%;
          margin-right:-1%;
        }
        .imgOne,.imgTwo,.imgThree,.imgFour,.imgFive,.imgSeven,.imgEight,.imgNine,.imgTen,.imgEleven,.imgSix,.imgTwelve {
          padding-right: 1%;
          width: 16.6%;
        }
        .imgSeven,.imgEight,.imgNine,.imgTen,.imgEleven,.imgTwelve {
          margin-top: 2rem;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .title {
            padding-top: 8.5rem;
            padding-bottom: 8.5rem;
          }
          .imgSeven,.imgEight,.imgNine,.imgTen,.imgEleven {
            margin-top: 1.2rem;
          }
          .playButtonWrapper{
            width: 3rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .title {
            padding-top:5rem;
            padding-bottom:5rem;
          }
          .images{
             padding-right: 5.6%;
             padding-left: 5.6%;
             margin-right:-1.6rem;
          }
          .imgOne,.imgTwo,.imgFour,.imgSix,.imgSeven,.imgEight{
            width: 50%;
            padding-right: 1.6rem;
            margin-top: 2rem;
          }
          .playButtonWrapper{
            width: 2rem;
          }
        }

      `}</style>
    </>
  );
}
