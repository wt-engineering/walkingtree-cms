import React from 'react'
import ArticleListItem from "./articleListItem";
import { MOBILE_BREAKPOINT } from "../config";
import ArticleLists from './articleLists';


function ThreeColNewArticle(props) {
  return (
    <>
      <div className="container paddedContent">
          <div className="items flexItems">
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
  )
}

export default ThreeColNewArticle