import React, {useRef} from 'react'
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT,MEDIUM_BREAKPOINT} from '../config' 
import Image from './Image';
import Animate from "./animate"
function Services(props) {
    const desktopImageRef = useRef();
    const shortHeadingRef = useRef();
    const headingRef = useRef();
    const descRef = useRef();

    return (
        <>
            <div className="container alignCenter">
                {/* <div ref={mobileImageRef} className="imageForMobile"><img alt="img" className="width-100" src={props.image} /></div>   */}
                <Animate><div ref={shortHeadingRef} className="marginBottom26 mainShortHeading shortHeading ">{props.shortHeading}</div></Animate>
                <Animate><div ref={headingRef} className="marginBottom30 smallHeading heading black">{props.smallheading}</div></Animate>
                <Animate><div ref={descRef} className="marginBottom90 bigDescription desc black">{props.bigDescription}</div></Animate>
                <Animate><div ref={desktopImageRef} className="image"><Image height={596} width={885} alt="img" className="width-100" originalSrc={props.image}/></div></Animate>
            </div>
            <style jsx>{`
                  .heading {
                      padding:0 31%;
                  }
                  .desc {
                      padding: 0 18%; 
                  }
                  .image {
                      padding: 0 19.3%;
                  }
                  @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .heading {
                        padding: 0 23%;
                    }
                    .desc {
                        padding: 0 15%;
                    }
                    .image {
                        padding: 0 12%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .heading {
                        padding: 0 9.8%;
                    }
                    .desc {
                        padding: 0 5.6%;
                    }
                    .image {
                        padding: 0 5.6%;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .shortHeading {
                        margin-bottom: 1.6rem;
                    }
                    .heading {
                        padding: 0 13.5%;
                    }
                    .desc {
                        padding: 0 13.5%;
                    }
                    .image {
                        padding: 0;
                    }
                }
            `}</style>
        </>
    )
}

export default Services
