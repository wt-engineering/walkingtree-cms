import TwoStepTextWithSmallCarousel from "./twoStepTextWithSmallCarousel"

import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../config"
export default function History(props){
    return (
        <>
            <div className="wrapper">
                <div className="textAndCarousel">
                    <TwoStepTextWithSmallCarousel shortHeading={props.shortHeading} heading={props.heading} historyImages={props.historyImages}/>
                </div>
            </div>
        </>
    )
}