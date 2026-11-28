import React from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../config";

function DiversityAndInclusion(props) {
  return (
    <>
      <div className="container flexItems">
        <div className="textArea">
          <div className="mainShortHeading">{props.shortHeading}</div>
          <div className="smallHeading">{props.smallHeading}</div>
          <div className="firstDescription description">
            {props.firstDescription}
          </div>
          <div className="secondDescription description">
            {props.secondDescription}
          </div>
        </div>
        <div className="image">
          <img alt="Image" className=" img width-100" src={props.image} />
        </div>
      </div>
      <style jsx>{`
        .container {
          padding-bottom: 19.2rem;
        }
        .textArea {
          padding-left: 17.7rem;
        }
        .mainShortHeading {
          margin-bottom: 2.7rem;
        }
        .smallHeading {
          margin-right: 25.8rem;
          margin-bottom: 1.4rem;
        }
        .firstDescription {
          margin-bottom: 2rem;
          margin-right: 18rem;
        }
        .secondDescription {
          margin-right: 19rem;
        }
        .image {
          //width: 150%;
          padding-right: 14.3rem;
          flex: 1 0 40%;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            padding-bottom: 22.8rem;
          }
          .textArea {
            padding-left: 8.1rem;
          }
          .firstDescription {
            margin-right: 6rem;
          }
          .mainShortHeading {
            margin-bottom: 3.2rem;
          }
          .smallHeading {
            margin-right: 5.1rem;
            margin-bottom: 1.5rem;
          }
          .firstDescription {
            margin-bottom: 3.2rem;
          }
          .secondDescription {
            margin-bottom: 4.3rem;
            margin-right: 6rem;
          }
          .image {
            //  width: 150%;
            padding-right: 8.1rem;
            flex: 1 0 50%;
          }
          // .img {
          //   width: 100%;
          // }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .container {
            padding-bottom: 13.2rem;
            flex-direction: column-reverse;
          }
          .image {
            order: 1;
            width: 100%;
            padding: 0 2.1rem 2.9rem;
          }
          .textArea {
            padding-left: 3rem;
          }
          .mainShortHeading {
            margin-bottom: 1.3rem;
          }
          .smallHeading {
            margin-right: 7.1rem;
            margin-bottom: 4.2rem;
          }
          .firstDescription {
            margin-bottom: 2rem;
            margin-right: 8rem;
          }
          .secondDescription {
            margin-bottom: 4.3rem;
            margin-right: 8rem;
          }
        }
      `}</style>
    </>
  );
}

export default DiversityAndInclusion;
