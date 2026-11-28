import React from 'react'
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import NextImage from './Image';
export default  function BrandManufacturingDynamic(props) {
    return (
        <>
          <div className="container">
              <div className="marginBottom55 topContainer">
                  <div className="marginBottom26 mainShortHeading shortHeading fontWeight">{props.mainShortHeading}</div>
                  <div className="marginBottom90 smallHeading heading fontWeight black">{props.smallHeading}</div>
                  <div className="imageSection flexItems">
                      <div className="imageWrapper one" >{props.imageOne}</div>
                      <div className="imageWrapper two"><NextImage width={332} height={223} alt="image" className="imageTwo width-100" originalSrc={props.imageTwo}/></div>
                      <div className="imageWrapper three"><NextImage height={359} width={233} alt="image" className="imageThree width-100" originalSrc={props.imageThree}/></div>
                  </div>  
              </div>
            </div>
          <style jsx>{`
              .container{
                  padding-left:12.29%;
                  padding-right:19.1%;  
              }
              .bottomTextSection{
                margin-right:-12%;
              }
              .left{
                  padding-right: 12%;
              }
              .right{
                  padding-right: 12%;
              }
              .bottomTextSection > div{
                  width:50%;
              }
              .heading{
                  padding-right: 32%;
              }
              .imageSection{
                  margin-right:-1.5rem;
              }
              .imageSection .imageWrapper{
                  padding-right:1.5rem;
              }
              @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                  .container{
                      padding-left:12.29%;
                      padding-right:12.29%;
                  }
                  .bottomTextSection{
                    margin-right: -8%;
                  }
                  .left{
                    padding-right: 8%;
                  }
                  .right{
                    padding-right: 8%
                  }
              }
              @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                  .container{
                      padding-left:5.8%;
                      padding-right:5.8%;
                  }
                  .heading,.shortHeading{
                      padding-right: 20%;
                      padding-left: 5%;
                  }
              }
              @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                  .bottomTextSection{
                      display:none;
                  }
                  .container{
                      padding-left:2.1rem;
                      padding-right:2.1rem;
                  }
                  .imageSection{
                      display:block;
                  }
                  .heading,.shortHeading {
                      padding-right: 3%;
                      padding-left: 3%;
                  }
                  .imageWrapper.one{
                      margin-bottom:1.2rem;
                  }
                  .imageWrapper.two{
                      margin-bottom:3.8rem;
                  }
                  .imageSection{
                      margin-right:0rem;
                  }
                  .imageSection .imageWrapper{
                      padding-right:0rem;
                  }
                  .text1{
                      margin-bottom:5.5rem;
                  }
                  .rightTextMobile{
                      margin-bottom:5.5rem;
                  }
                  .topContainer{
                      margin-bottom:0rem;
                  }
              }
          `}</style>
        </>
    )
}
