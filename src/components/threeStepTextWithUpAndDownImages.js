import Space from "./space";
import ThreeStepText from "./threeStepText";
import UpAndDownImages from "./upAndDownImages"
import ThreeStepTextRichContent from "./threeStepTextRichContent"
export default function ThreeStepTextWithUpAndDownImages(props){
    return (
        <>
            <div className="wrapper">
                {props.cmsRichContent==true && <ThreeStepText center={true} topText2Class="grey bigDescription" shortHeading={props.shortHeading} topText1={props.topText1} topText2={props.topText2} />}
                {!props.cmsRichContent && <ThreeStepTextRichContent center={true} topText2Class="grey bigDescription" shortHeading={props.shortHeading} topText1={props.topText1} topText2={props.topText2} />}
                <Space desktopHeight="19.7rem" tabletLandscapeHeight="14.5rem" mobileHeight="7.1rem"/>
                <div className="upAndDownImgs">
                    <UpAndDownImages 
                     heightImg1={props.height1}
                     widthImg1={props.width1}
                     heightImg2={props.height2}
                     widthImg2={props.width2}
                     img1={props.img1}
                     img2={props.img2}
                     img1Caption1={props.img1Caption1}
                     img1Caption2={props.img1Caption2} 
                     img2Caption1={props.img2Caption1}
                     img2Caption2={props.img2Caption2}
                     cmsRichContent={props.cmsRichContent}
                    />
                </div>
            </div>
        </>
    )
}