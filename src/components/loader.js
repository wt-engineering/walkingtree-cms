import React from 'react'
import Image from './Image'
import {MOBILE_BREAKPOINT} from "../config"
import NextImage from 'next/image'

export default function Loader(props) {
    return (
        <>
         <div className="loader">
                <div className="spinnerWithoutImage "></div>
            </div>
            <style jsx>{`
                .loader {
                  width: 100vw;
                  height: 100vh;
                  position: fixed;
                  top: 0;
                  left: 0;
                  background: #d5e4ee;
                  z-index: 9;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .spinnerWithoutImage{
                    height:65px;
                    width:65px;
                    border:3px solid #414042;
                    border-left-color: transparent;
                    border-radius:50%;
                    background: #d5e4ee;
                    animation: spinnerWithoutImage 1s linear infinite;
                }  
              @keyframes spinnerWithoutImage {
                  from {
                      transform: rotate(0deg);
                  } to {
                      transform: rotate(360deg);
                  }
                }
         `}</style>
        </>
    )
}
