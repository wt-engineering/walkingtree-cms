import React, { useRef } from "react";
import FeaturedArticlesTop from "./featuredArticleTop";
import Animate from './animate'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
export default function FeaturedArticles(props) {
  const titleRef = useRef();
  const link1Ref = useRef();
  return (
    <>
      <div className="container">
        <Animate>
          <div ref={titleRef} className="titleWrapper">
            {props.title && <h1 className="smallHeading title marginBottom55">{props.title}</h1>}
          </div>
        </Animate>
        <Animate>
        <div ref={link1Ref} className="featuredArticlesTop">
          <FeaturedArticlesTop articles={props.article} />
        </div>
        </Animate>
      </div>
      <style jsx>{`
        .container {
          padding-bottom: 12rem;
          padding-right: 6.6rem;
          padding-left: 6.6rem;
          // padding-top: 20.3rem;
        }
        .titleWrapper,.featuredImageLandscape,.featuredImageSquare{
          opacity:0;
        }
        .leftContent {
          padding-right: 2.1rem;
        }
        .heading {
          margin-right: 5rem;
        }
        .descTop {
          margin-right: 12.8rem;
        }
        .descTop2 {
          margin-right: 1.5rem;
        }
        .shortHeadingReadOn,
        .shortHeadingReadOn2 {
          text-decoration: none;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            padding-bottom: 8.5rem;
            padding-right: 3.8rem;
            padding-left: 3.8rem;
          }
          .leftContent {
            padding-right: 1.3rem;
          }
          .heading {
            margin-right: 0rem;
            font-size: 2.5rem;
          }
          .descTop {
            margin-right: 1rem;
          }
          .descTop2 {
            margin-right: 0rem;
            font-size: 1.7rem;
          }
          .title {
            font-size: 2.7rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .container {
            padding-bottom: 0rem;
            padding-right: 0rem;
            padding-left: 0rem;
          }
          .title {
            font-size: 3rem;
            text-align: center;
          }
          .leftContent {
            padding-right: 0rem;
            padding-bottom: 3rem;
          }
          .rightContent {
            padding-bottom: 3rem;
          }
          .heading {
            font-size: 2.1rem;
          }
          .images {
            display: block;
          }
          .shortHeading,
          .heading,
          .shortHeading2,
          .descTop2,
          .descTop,
          .shortHeadingReadOn,
          .shortHeadingReadOn2 {
            padding-left: 2.9rem;
          }
          .shortHeadingReadOn,
          .shortHeadingReadOn2 {
            margin-bottom: 5rem;
          }
        }
      `}</style>
    </>
  );
}
