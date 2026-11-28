import React, { useRef } from "react";
import { MEDIUM_BREAKPOINT, MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT } from '../config'
import Image from './Image'
import Video from './video'
import { connect } from "react-redux";
import Animate from "./animate";

function TwoStepTextAndImageOrVideo(props) {

  return (
    <>
        <div className="container flexItems lesserAdditionalPadding">
            <div className="textArea">
               {props.cmsRichContent ? <Animate><div className="mbHeading heading bigHeading black richText" dangerouslySetInnerHTML={{__html:props.heading}}></div></Animate> :
                <Animate><div className="heading bigHeading mbHeading black richText">{props.heading}</div></Animate>
                }   
                {props.cmsRichContent ? <Animate><div className="desc" dangerouslySetInnerHTML={{__html:props.description}}></div></Animate>:
                <Animate><div className="desc">{props.description}</div></Animate>}
             </div>
            <div className="imageOrVIdeo">
                {props.mediaType =="image"?  <Animate><div className="image"><Image height={637} width={500} alt="image" originalSrc={props.img}/></div></Animate> :
                <Animate><div className="video"><Video video={props.video} videoUrl={props.videoUrl} videoUrlMobile={props.videoUrlMobile} /></div></Animate>}
            </div>
        </div>
        <style jsx>{`
            .container{
                margin-right: -6.5%;
            }
            .heading{
                padding-right:5%;
            }
            .textArea,.imageOrVIdeo{
                width:50%;
                padding-right: 6.5%
            }
            @media screen and (max-width: ${MEDIUM_BREAKPOINT}PX){
                .container{
                    margin-right: -5%;
                }
                .heading{
                    padding-right:4%;
                }
                // .desc{
                //     font-size:2.7rem;
                // }
                .textArea,.imageOrVIdeo{
                    width:50%;
                    padding-right: 5%
                }
            }
            @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px){
                .container{
                    margin-right: 0%;
                    display: block;
                }
                .heading{
                    padding:0 17%;
                }
                .desc{
                    margin-bottom:4rem;
                }
                .textArea,.imageOrVIdeo{
                    text-align: center;
                    width:100%;
                    padding-right: 0%;
                }
            }
            @media screen and (max-width: ${TABLET_BREAKPOINT}px){
                // .desc{
                //     font-size:2.3rem;
                // }
            }
            @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                // .desc{
                //     font-size:2rem;
                //     line-height: 2.3rem;
                // }
                .heading{
                  padding:0 2%;
              }
            }
        `}</style>
    </>
  )
}

function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, null)(TwoStepTextAndImageOrVideo);