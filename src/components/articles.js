import React from "react";

function FeaturedArticles(props) {
  return (
    <>
      <div className="paddedContent">
        <h1 className="article smallHeading">{props.article}</h1>
        <div className="image flexItems">
          <div className="leftContent">
            <img
              alt="Image"
              className="leftImg width-100"
              src={prop.FeaturedArticles}
            />
            <h2 className="shortHeading mainShortHeading">
              {props.shortHeading}
            </h2>
            <h1 className="heading smallHeading">{props.heading}</h1>
            <p className="desc description">{props.desc}</p>
            <div className="shortHeading2 mainShortHeading">
              {props.shortHeading2}
            </div>
            <div className="shortHeading3 readMoreButton moderatRegular font15 grey cursorPointer">
              {props.shortHeading3}
            </div>
          </div>

          <div className="rightContent">
            <img
              alt="Image"
              className="rightImg width-100"
              src={props.featureImageSquare}
            />
            <h2 className="shortHeadingRight1 mainShortHeading">
              {props.shortHeadingRight1}
            </h2>
            <h1 className="headingRight smallHeading">{props.headingRight}</h1>
            <p className="desc2 description">{props.desc2}</p>
            <div className="shortHeadingRight2 mainShortHeading">
              {props.shortHeadingRight2}
            </div>
            <div className="shortHeadingReadOn readMoreButton moderatRegular font15 grey cursorPointer">
              {props.shortHeading3}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .desc2 {
          width: 49.7rem;
        }
        .shortHeadingReadOn {
          margin-bottom: 1.1rem;
        }

        .shortHeadingRight2 {
          padding-top: 1.2rem;
          margin-bottom: 1.1rem;
        }
        .headingRight {
          padding-bottom: 1.6rem;
        }

        .leftContent {
          width: 59.3%;
          padding-right: 2.1rem;
        }
        .shortHeading3 {
          // margin: 0 1.4rem;
          margin-top: -2.3rem;
          letter-spacing: -0.19px;
          padding-top: 2.4rem;
        }
        .shortHeading2 {
          // margin: 0 1.4rem;
          padding-top: 1.2rem;
          margin-bottom: 1.1rem;
        }
        .desc {
          width: 59.7rem;
          //margin: 0 1.4rem;
          padding-top: 1.6rem;
        }
        .heading {
          width: 63.3rem;
          // margin: 0 1.4rem;
        }
        .shortHeading {
          padding-top: 5rem;
          padding-bottom: 2rem;
        }
        .article {
          color: #000000;
          padding-bottom: 4.9rem;
        }
        .rightContent {
          width: 40.7%;
          //padding: 0 2.1rem;
          padding-bottom: 5rem;
        }
        .shortHeadingRight1 {
          padding-top: 5rem;
          padding-bottom: 2rem;
        }
      `}</style>
    </>
  );
}

export default FeaturedArticles;
