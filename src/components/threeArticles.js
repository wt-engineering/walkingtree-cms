import React from "react";
import ArticleListItem from "./articleListItem";

function ThreeArticles(props) {
  return (
    <>
      <div className="title">
        {props.title && <h1 className="smallHeading">{props.title}</h1>}
      </div>
      <div className="newsSection flexItems">
        <div className="newsSectionLeft">
          <ArticleListItem
            square="/images/889.png"
            shortHeading="Style & Innovation"
            description="Our global concept director Christie Max talks with the “show name” name on our approach with honouring craftsmanship …"
            shortHeadingGrey="By Raj Aditya Chaudhuri"
            shortHeadingReadON="READ ON"
            imageType="square"
          />
        </div>
        <div className="newsSectionCenter">
          <ArticleListItem
            square="/images/News2.png"
            shortHeading="Awards"
            description="We received the award for R&D and innovation in the jewellery industry by the prestigious annual International Gem & …"
            shortHeadingGrey="By Katerina Perez"
            shortHeadingReadON="READ ON"
            imageType="square"
          />
        </div>
        <div className="newsSectionRight">
          <ArticleListItem
            square="/images/887.png"
            shortHeading="Magazine"
            description="Our brand Her Story featured in the Vogue Magazine, Paris. The editorial talks about our recent spring line collection which takes …"
            shortHeadingGrey="By Anesha George"
            shortHeadingReadON="READ ON"
            imageType="square"
          />
        </div>
      </div>

      <style jsx>
        {`
          .title {
            padding-bottom: 5.2rem;
          }

          .newsSectionLeft {
            padding-right: 2.5rem;
          }
          .newsSectionCenter {
            padding-right: 2.5rem;
          }
          .newsSectionright {
            padding-right: 2.5rem;
          }
        `}
      </style>
    </>
  );
}

export default ThreeArticles;
