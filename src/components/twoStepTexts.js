import React from 'react'

export default function TwoStepTexts(props) {
    return (
        <>
          <div className="container alignCenter">
            <div className="mainShortHeading">{props.shortHeading}</div>
            <h1 className="topText1 smallHeading">{props.topText1_1}
              <span className="lpItalic"> {props.topText1_2} </span>{props.topText1_3}
            </h1>
            <div className="bigDescription">{props.bigDescription}</div>
          </div>
          <style jsx>{`
            .mainShortHeading {
              margin-bottom: 2.6rem;
            }
            .topText1 {
              margin-bottom: 2.3rem;
            }
            .bigDescription {
              margin-bottom: 10.1rem;
            }
          `}</style>
        </>
    )
}
