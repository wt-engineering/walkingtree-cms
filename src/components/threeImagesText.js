import React from "react";
import ThreeImages from "./threeImages";
import SingleText from "./singleText";

function ThreeImagesText(props) {
  return (
    <>
      <div className="container">
        <div className="marginBottom55 images">
          <ThreeImages
            mobileImageTop={props.mobileImageTop}
            firstImg={props.firstImg}
            secondImg={props.secondImg}
            thirdImg={props.thirdImg}
          />
        </div>
        <div className="textArea">
          <SingleText desc={props.desc} />
        </div>
      </div>
    </>
  );
}

export default ThreeImagesText;
