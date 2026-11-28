import React, { useRef } from "react";
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Animate from "./animate";
export default function PlanetPropductPeople(props) {
  const headingRef = useRef();
  const topText1 = useRef();
  const bigDescRef = useRef();
    return (
         <> 
          <div className="container alignCenter">
              <Animate><div ref={headingRef} className="marginBottom26 heading mainShortHeading">{props.shortHeading}</div></Animate>
              <Animate>
                <h1 ref={topText1} className="marginBottom26 topText1 smallHeading">{props.topText1_1}
                  <span className="lpItalic"> {props.topText1_2} </span>{props.topText1_3}
                </h1>
              </Animate>
              <Animate><div ref={bigDescRef} className="bigDesc bigDescriptionLight">{props.bigDescription}</div></Animate>
          </div>
            <style jsx>{`
              .topText1 {
                padding: 0 30%
              }
              .bigDesc {
                padding: 0 20%;
              }
              @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                .topText1 {
                  padding: 0 29%
                }
                .bigDesc {
                  padding: 0 17%;
                }  
              }
              @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                .topText1 {
                  padding: 0 25%
                }
                .bigDesc {
                  padding: 0 15%;
                }
              } 
              @media screen and (max-width: ${TABLET_BREAKPOINT}px) { 
                .topText1 {
                  padding: 0 20%
                }
                .bigDesc {
                  padding: 0 7%;

                }
              }
              @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                .topText1 {
                  padding: 0 14%
                }
                .bigDesc {
                  padding: 0 5%;
                }
              }
            `}</style>
        </> 
    )
}

