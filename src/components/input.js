import React, { useState,useRef } from 'react'
import { MOBILE_BREAKPOINT } from '../config'
import Button from '../components/button'

export default function Input(props) {
console.log("setFileUploadTextUpdate",props);
    const fileUploadLabelRef = useRef();
    const [fileUploadTextUpdate, setFileUploadTextUpdate] = useState(props.placeholder)

    function onChangeValue(e){
        if(!!props.onChange){
            props.onChange(e)
        }
        
        if(props.fileType && !e?.target?.files[0]?.size>2e6){
            setFileUploadTextUpdate(`${!!e.target.files[0] ? e.target.files[0].name : "Select File"} - ${!!e.target.files[0] ? ((e.target.files[0].size)/1000).toFixed(2) : "0"}KB`)
        }  
    }
    return (
        <>
            <div className={`inputComponent positionRelative borderBottom mainShortHeading  ${props.errMsg? "errMsg": "borderBottom"} ${props.fileType?"fileType":""}`}>
                {!!props.fileType && props.fileType && <label ref={fileUploadLabelRef} htmlFor={props.id} className={` fileUploadLabel cursorPointer mainShortHeading ${!!props.color?"changeColor":""}`}>{fileUploadTextUpdate}</label>}
                <input
                    placeholder={props.placeholder}
                    onChange={(e)=>onChangeValue(e)}
                    className={`inputTag width-100 mainShortHeading`}
                    type={props.type} 
                    id={`${props.fileType?props.id:""}`}
                    required={props.required}
                    pattern={props.pattern}
                />
                 {!!props.errMsg &&  
                    <div className={`erorMsg blackCaption positionAbsolute`}>{props.errMsg}</div>
                } 
                {!!props.fileType &&
                    <div onClick={()=>fileUploadLabelRef.current.click()} className="fileUploadButton positionAbsolute">
                    <Button width="14rem" buttonText="CHOOSE FILES" buttonType="rectangleButton" textOnHover="CHOOSE FILES"/>                   
                 </div>
                }
                          
                </div>
               
            <style jsx>{`
                    .erorMsg {
                        color: #D90000; 
                        padding-top:3%;
                        // border-top: 1px solid #D90000;
                    }
                    input::placeholder { 
                        color: hsla(225,2%,44%,.678);;
                    }
                    .borderBottom {
                        padding-bottom: 0.3rem;
                        border-bottom: 1px solid #707070;
                        margin-bottom: 5.5rem;
                    }
                    .fileType.inputComponent .inputTag{
                        visibility:hidden;
                        position:absolute;
                    } 
                    .animate.inputComponent::after{
                        width:100%;
                    }
                    .fileUploadButton {
                        right: 0;
                        bottom: 3%;
                    }
                    .fileUploadLabel {
                        pointer-events: none;
                        cursor: default;
                    }
                    .inputComponent{
                        padding:1rem 1.5rem;
                    }
            `}</style>

        </>
    )
}