import React from 'react'
import Button from './button'
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT,} from '../config'

function JobOpeningsDescription(props) {
    return (
         <>
            <div className="container">
                 <div className="desc description" dangerouslySetInnerHTML={{__html:props.text}}></div>
                <div className="buttonWrapper alignCenter">
                    <Button
                      buttonType="rectangleWithArrow"
                      buttonText="APPLY NOW"
                      textOnHover="APPLY NOW "
                      onClick={()=>!!props.onButtonClick && props.onButtonClick()}
                    />
                </div>
            </div>
            <style jsx>{`
                .container {
                    padding:0 12.29%;
                    margin-bottom: 13.5rem;
                }
                .desc {
                    margin-bottom: 11.1rem;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .container {
                       padding:0 12%;
                       margin-bottom: 12.5rem;
                    }
                    .desc {
                       margin-bottom: 10rem;
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .container {
                       padding:0 10%;
                       margin-bottom: 10rem;
                    }
                    .desc {
                        margin-bottom: 9rem;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .container {
                        padding: 0 7.2%;
                    }
                    .desc {
                        margin-bottom: 10.6rem;
                        font-size: 2.2rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                  .container {
                    text-align: center;
                  }
                }
            `}</style>
          </>
    )
}

export default JobOpeningsDescription