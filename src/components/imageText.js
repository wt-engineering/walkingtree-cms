import React from "react";
import SingleImage from "./singleImage";
import SingleText from "./singleText";
import Space from "../components/space";

function ImageText(props) {
  return (
    <>
      <div className="container">
        <div className="firstText"><SingleText bigText={props.bigText} desc={props.descriptionUp}/></div>
        <Space desktopHeight="9rem" mediumHeight="8rem" tabletLandscapeHeight="6rem" mobileHeight="4rem"/>
        <div className="image"><SingleImage height={527} width={420}  singleImage={props.image} /></div>
        <Space desktopHeight="9rem" mediumHeight="8rem" tabletLandscapeHeight="6rem" mobileHeight="4rem"/>
        <div className="secondText"><SingleText desc={props.descriptionDown} /></div>
      </div>
    </>
  );
}

export default ImageText;
