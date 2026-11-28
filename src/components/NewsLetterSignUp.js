import React from 'react'
import Image from './Image'
import { TABLET_LANDSCAPE_BREAKPOINT } from '../config'

export default function NewsLetterSignUp(props) {
    return (
        <>
            {!!props.defaultActive &&
                <div className="container positionRelative">
                    <div className="imagebg width-100 height-100"><img className="width-100 height-100" src="/images/over5.png" alt="img"/></div>
                    <div className="newsLetterSignUp positionAbsolute">
                        <div className="width-100 ">
                            <h1 className="bigHeading fontColor title alignCenter marginBottom26">Subscribe to our Newsletter</h1>
                            <div className="emailForm positionRelative width-100 ">
                                <div className="fontColor">
                                    <input className="fontColor font12 greyCaption email" type="email" placeholder="Email Address" />
                                    <div className="fontColor emailSubmitButton cursorPointer positionAbsolute  moderatMedium font12">Submit</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            }
            <style jsx>{`
                .imagebg img{
                    object-fit: cover;
                    // opacity: 1;
                }
                .fontColor{
                    color:#414042;
                }
                .newsLetterSignUp{
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
                .container{
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .email{
                    color: #414042;
                }
                .emailSubmitButton{
                    top: 0;
                    right: 16%;
                }
                .emailForm{
                    padding:0 15%;
                }
                .emailForm > div{
                    border-bottom:1px solid #414042;
                    padding-bottom:0.9rem;
                }
                .emailForm input{
                    padding-right: 22%;
                    font-family: moderatLight, sans-serif;
                    font-size:1.2rem;
                    width:100%;
                    background:transparent;
                }
                .emailForm input::placeholder { 
                    color: #414042;
                }
                .title{
                   margin-bottom:26px;
                   padding: 0 1%;
                }
                .header{
                    margin-bottom:2rem;
                }
                .newsLetterSignUp > div{
                    flex-direction: column;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px){
                    .container{
                        display:none;
                    }
                }
            `}</style>
        </>
    )
}
