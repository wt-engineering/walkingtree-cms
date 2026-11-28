import React from 'react'
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from '../config'
import Animate from './animate';
import Image from './Image';
export default function NewBrandIncubation(props) {
    return (
        <>
            <div className="container flexItems lesserAdditionalPadding">
                <div className="textSection">
                    <Animate><div className="marginBottom26 mainShortHeading shortHeading fontWeight">{props.mainShortHeading}</div></Animate>
                    <Animate><div className="marginBottom55 description desc fontWeight black">{props.description}</div></Animate>
                    <Animate><div className="marginBottom16 bigDescription grey descBig fontWeight ">{props.bigDescription}</div> </Animate>
                    {props.cmsRichContent == true && <Animate><div className="captionText greyCaption fontWeight" dangerouslySetInnerHTML={{__html: props.caption}}></div></Animate>}
                    {!props.cmsRichContent && <Animate><div className="captionText greyCaption fontWeight">{props.caption}</div></Animate>}
                </div>
                <Animate><div className="image"><Image height={523} width={345}  className="width-100" originalSrc={props.image} alt="img"/></div></Animate>
            </div>  
            <style jsx>{`
                .descBig{
                    padding-right: 32%;
                }
                .textSection{
                    width:68.3%;
                    padding-right: 7%;
                }
                .image{
                    width:31.7%;
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                  .textSection{
                      width:50%;
                      padding-right: 7%;
                  }
                  .image{
                      width:50%;
                  }
                  .descBig{
                      padding-right: 0%;
                  }
                  .container{
                      padding-left:9%;
                      padding-right:9%;
                  }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                  .container {
                      display:block;
                      padding-left:2.1rem;
                      padding-right:2.1rem;
                  }
                  .textSection{
                      width:100%;
                      padding: 0 2%;
                      margin-bottom:3.5rem;
                  }
                  .image{
                      width:100%;
                  }
                }
            `}</style>
        </>
    )
}

