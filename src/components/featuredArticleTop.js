import React from "react";
import ArticleListItem from "./articleListItem";
import ThreeColArticles from "./threeColArticles";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../config";

function FeaturedArticlesTop(props) {
  return (
    <>
      <div className="wrapper flexItems">
        {Array.isArray(props.articles) &&
          props.articles.map((article, index) => {
            return (
              <div className="articleTop" key={index}>
                <ArticleListItem article={article} />
              </div>
            );
          })}
        {/* 
        <div className="threeColArticles">
            {Array.isArray(props.articleCol) &&
            props.articleCol.map((article, index) => {
              return (
                <div className="articleBottom" key={index}>
                  <ThreeColArticles article={article} />
                </div>
              );
            })}
        </div> */}
      </div>
      <style jsx>{`
        .articleTop {
          padding-right: 2.1rem;
        }
        .wrapper {
          margin-right: -2.1rem;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .articleTop {
            padding-right: 1.3rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .wrapper {
            display: block;
            width: 100%;
            margin-right: 0rem;
            margin-left: 0rem;
          }
          .articleTop {
            padding:0 1.8rem;
            text-align:center;
            margin-bottom: 3rem;
          }
          .articleBottom {
            margin-bottom: 4.9rem;
            text-align: center;
          }
          .threeColArticles {
            text-align: center;
          }
          
        }
      `}</style>
    </>
  );
}

export default FeaturedArticlesTop;
