import React, {useEffect,useRef, useState} from 'react'

export default function Animate(props) {
    const elementRef = useRef();
    // const [reached, setReached] = useState(false);
    
    // function scrollListener(){
    //     let animationTriggerValue = window.innerHeight - 10;
    //     let sectionTopPosition = elementRef.current?.getBoundingClientRect().top;
    //     if(sectionTopPosition < animationTriggerValue ) {
    //         elementRef.current.classList.add('fadeUp')
    //         if(!reached && !!props.callback){
    //           setReached(true)
    //           props.callback();
    //         }
    //     }
    //   }
    // useEffect(() => {
    //   window.addEventListener("scroll", scrollListener, {passive: true});
    //   return () => {
    //     window.removeEventListener("scroll", scrollListener, {passive: true});
    //   };
    // });
  return (
    <>
        <div ref={elementRef} className="customAnimate">{props.children}</div>
        <style jsx>{`
            // .customAnimate{
            //     opacity: 0;
            // }
        `}</style>
    </>
  )
}