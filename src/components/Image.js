import NextImage from 'next/image'
import { useState,useEffect,useRef } from 'react'
// import useOnScreen from '../hooks/useOnScreen'
export default function Image(props){
    const imgWrapperRef = useRef(null)
    const [loadingComplete,setLoadingComplete] = useState(false)
    const [showPlaceholder,setShowPlaceholder] = useState(false)
    const [showGreyBackground,setShowGreyBackground] = useState(false)
    // const isOnScreen = useOnScreen(imgWrapperRef)
    function afterLoad(){
        setLoadingComplete(true)
        if(props.afterLoad)
            props.afterLoad()
    }
    useEffect(() => {
        if(!props.nextImage){
            setLoadingComplete(true)
        }
    }, [])
    // useEffect(()=>{
    //     setShowGreyBackground(true)
    // },1000)
    // useEffect(()=>{
    //     if(isOnScreen){
    //         setTimeout(()=>{
    //             if(!loadingComplete)
    //                 setShowPlaceholder(true)
    //                 setTimeout(()=>{
    //                     setShowGreyBackground(true)
    //                 },750)
    //         },750)
    //     }
    // },[isOnScreen])
    let bgColor = props.bgColor?props.bgColor:"#f2f2f2"

    
    return (
        <>
            <div className={`lazyImageWrapper ${loadingComplete?"loadComplete":""} ${props.noPadding?"noPadding":""}`}>
                <div className={`lazyImageContent ${loadingComplete?"show":""}`} ref={imgWrapperRef}>
                        <NextImage 
                            // priority
                            className="lazyImg"
                            alt={props.alt}
                            src={props.originalSrc} 
                            width={props.width} 
                            height={props.height} 
                            loading={props.loading?props.loading:"lazy"}
                            layout="responsive" 
                            quality={100}
                            onLoad={(e) => {
                                e.target.src.indexOf('data:image/gif;base64') < 0 && afterLoad()
                            }}
                            // onLoadingComplete={(e) => {afterLoad()}}
                        />
                </div>
            </div>
            {/* <img src={props.originalSrc} className="width-100"/> */}
            <style jsx>{`
                .lazyImageWrapper{
                    padding-top:${props.height*100/props.width}%;
                    position:relative;
                    background-image:${props.placeholderSrc && showPlaceholder && !loadingComplete?`url(${props.placeholderSrc})`:"none"};
                    background-size:cover;
                    background-color:${loadingComplete?bgColor:"#f2f2f2"}
                }
                .noPadding.lazyImageWrapper{
                    padding-top:unset;
                    height:100%;
                    widht:100%;
                }
                .lazyImageContent{
                    position:absolute;
                    width:100%;
                    height:100%;
                    overflow:hidden;
                    top:0;
                    left:0;
                    opacity:0;
                }
                .lazyImageContent.show{
                    opacity:1;
                    transform:scale(1);
                    transition:background 0.5s, opacity 0.5s, transform 0.5s
                }
              
            `}</style>
        </>
    )
}