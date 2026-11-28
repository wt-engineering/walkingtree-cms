import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
export default function Space(props){
    return (
    <>
            <div className="wrapper"></div>
            <style jsx>{`
                .wrapper{
                    height: ${props.desktopHeight};
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                 .wrapper {   
                    height: ${props.mediumHeight};
                 }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .wrapper{
                        height: ${props.tabletLandscapeHeight};
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .wrapper{
                        height: ${props.tabletHeight};
                    }
                }
                @media only screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .wrapper{
                        height: ${props.mobileHeight};
                    }
                }
            `}</style>
        </>
    )
}