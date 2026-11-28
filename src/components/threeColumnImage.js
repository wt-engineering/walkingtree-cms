import React from "react";

function ThreeColumnImage(props) {
  return (
    <>
      <div className="threeColumn flexItems">
        <div className="singleBlog">
          <img alt="Image" className="images width-100" src={props.img} />
        </div>
        <h2 className="shortHeading mainShortHeading">{props.shortHeading}</h2>
        <div className="desc description">{props.description}</div>
        <div className="shortHeading2 mainShortHeading">
          {props.shortHeadingGrey}
        </div>
        <div className="shortHeadingReadOn readMoreButton moderatRegular font15 grey cursorPointer">
          {props.shortHeadingReadON}
        </div>
      </div>
      <style jsx>{`
        .threeColumn {
          flex-wrap: wrap;
          margin-right: -2.8rem;
        }
        .images {
          padding: 0px 10px;
        }
        .singleBlog {
          padding-right: 2.8rem;
        }
        .heading {
          padding-right: 10rem;
        }
        .shortHeading {
          margin-top: 5rem;
          margin-bottom: 2rem;
        }
        .shortHeading2 {
          margin-top: 1.2rem;
          margin-bottom: 1.1rem;
        }
        .desc {
          margin-top: 1.6rem;
          padding-right: 6.2rem;
        }
        .shortHeadingReadOn {
          margin-bottom: ;
        }
      `}</style>
    </>
  );
}

export default ThreeColumnImage;
