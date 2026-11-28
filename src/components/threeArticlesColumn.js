import React from "react";
import ArticleLists from "../components/articleLists";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../config";

export default function ThreeArticlesColumn(props) {
  return (
    <>
      <div className="container paddedContent">
        <div className="items flexItems">
          {Array.isArray(props.articles) &&
            props.articles.map((article, index) => {
              return (
                <div className="item" key={index}>
                  <ArticleLists article={article} />
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .item {
            width: 33.33%;
            padding-right: 2.4rem;
            margin-bottom: 0rem;
          }
          .items {
            flex-wrap: wrap;
            margin-right: -2.5rem;
          }
          @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
            .item {
              padding-right: 1.6rem;
            }
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .items {
              display: block;
              margin-right: -0rem;
            }
            .item {
              width: 100%;
              padding-right: 0rem;
              margin-bottom: 9.7rem;
              text-align:center;
            }
          }
        `}
      </style>
    </>
  );
}
