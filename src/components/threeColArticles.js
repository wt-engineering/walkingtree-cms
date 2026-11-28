import React, { useRef } from "react";
import { MOBILE_BREAKPOINT } from "../config";
import Animate from "./animate";
import ArticleLists from "./articleLists";
export default function ThreeColArticles(props) {
  const articlesSectionTitleRef = useRef();
  return (
    <>
      <div className="container">
        {props.title && <Animate><h1 ref={articlesSectionTitleRef} className="marginBottom55 smallHeading title">{props.title}</h1></Animate>}
        <div className={`marginBottom125 items flexItems ${props.removeMarginBottom?"removeMargin":""}`}>
          {Array.isArray(props.articleCol) &&
            props.articleCol.map((article, index) => {
              return (
                <div className="item marginBottom90" key={index}>
                  <ArticleLists article={article} />
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>{`
          .item {
            width: 33.33%;
            padding-right: 1.5rem;
          }
          .items .item:nth-last-child(-n+3){
            margin-bottom:0;
          }
          .removeMargin{
            margin-bottom:0;
          }
          .items {
            flex-wrap: wrap;
            margin-right:-1.5rem;
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .items {
              display: block;
              margin-right:0rem;
            }
            .item {
              width: 100%;
              padding-right: 0rem;
            }
            .title {
              text-align: center;
            }
            .items .item:nth-last-child(-n+3){
              margin-bottom:3.5rem;
            }
            .items .item:last-child{
              margin-bottom:0;
            }
          }
        `}
      </style>
    </>
  );
}
