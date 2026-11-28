import React from "react";
import { MOBILE_BREAKPOINT} from "../config";
import Image from "./Image"
import Animate from './animate'

export default function FooterHero(props) {

  return (
    <>
      <div className="paddingBottom">
        <div className="image positionRelative">
        <Animate>
          <div className="bigImage width-100 height-100">
            <Image height={896} width={1440} originalSrc={props.mainImage} alt="Product image" className="width-100 height-100"/>
          </div>
          <div className="centerText positionAbsolute alignCenter">
              <Animate><h2 className="marginBottom26 shortLine mainShortHeading black">{props.shortHeading}</h2> </Animate>
              <Animate><h1 className="marginBottom26 mainHeading bannerHeading black">{props.mainHeading}</h1> </Animate>
              <Animate><div className="desc moderatLight font16 black">{props.bannerDescription}</div> </Animate>
          </div>
          </Animate>
        </div>
      </div>
      <style jsx>{`
        .bigImage img{
          object-fit: cover;
          object-position: center;
        }
        .centerText {
          top: 39%;
          left: 50%;
          transform: translateX(-50%);
        }
        .desc {
          padding: 0 29%;
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .desc {
            padding: 0 11%;
          }
          .bigImage {
            width: 100%;
          }
          .centerText {
            left: 50%;
            right: -11.2rem;
          }
        }
      `}</style>
    </>
  );
}
