import React from "react";
import Button from './button'
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config"
import Animate from "./animate";


function NextAndPreviousButtonWithText(props) {
    return (
        <>  <div className="items flexItems">
                <div  className= "leftItem flexItems">
                    <Animate>
                      <div className="circleWithLeftArrow"><Button buttonType="circleIconLeft"/></div>
                      <div className="previousArticle font12 moderatRegular">Previous Article</div>
                    </Animate>
                  </div>   
                <div className="rightItem flexItems">
                  <Animate>
                    <div className="circleWithRightArrow"><Button buttonType="circleIconRight"/></div>
                    <div className="nextArticle font12 moderatRegular">Next Article</div>
                  </Animate>
                </div>
            </div>
            <style jsx>{`
                .items {
                    margin: 0 4.5%;
                    padding-bottom: 5.4rem;
                    border-bottom: 1px solid #707070;
                    justify-content: space-between;
                }
                .leftItem {
                    align-items: center;
                }
                .rightItem {
                    align-items: center;
                    flex-direction: row-reverse;
                }
                .previousArticle {
                    margin-left: 1rem;
                }
                .nextArticle {
                    margin-right: 1rem;
                }
                .circleWithRightArrow,.circleWithLeftArrow {
                    opacity: 1;
                    transition: all 0.3s ease-out;
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .items {
                        padding-bottom: 8.3rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .item {
                        margin-bottom: 13rem;
                    }
                    .rightItem,.leftItem{
                        flex-direction: column-reverse;
                    }
                    .previousArticle,.nextArticle{
                        margin-bottom: 0.5rem;
                    }
                }
                
            `}</style>
        </>
    )
}

export default NextAndPreviousButtonWithText
