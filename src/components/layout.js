import React, { useEffect, useRef, createContext, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { connect } from "react-redux";
import { setNavShow, setMenuBarShow, setWindow, setPreventBodyScroll,setPageTransitioning, setHeroImageLoaded } from "../redux/actions";
import Loader from "./loader";
import Head from "next/head";
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Menu from "./Menu";
import { withRouter } from 'next/router'

function Layout(props) {
  const mainContentRef = useRef();
  const [footerIndexValue, setFooterIndexValue] = useState(-1);
  const [initialBgForNav, setInitialBgForNav] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  var lastScrollTop = 0;

  function pageTransitionLoader(){
    props.router.events.on('routeChangeStart', () => {
      props.setHeroImageLoaded(false)
      props.setPageTransitioning(true)
    });
    props.router.events.on('routeChangeComplete', () => {
      props.setPageTransitioning(false);
    });
    props.router.events.on('routeChangeError', () => {
        props.setPageTransitioning(null);
    })
  }

  // useEffect(() => {
  //   const threshold = 0;
  //   let lastScrollY = window.pageYOffset;
  //   let ticking = false;

  //   const updateScrollDir = () => {
  //     const scrollY = window.pageYOffset;

  //     if (Math.abs(scrollY - lastScrollY) < threshold) {
  //       ticking = false;
  //       return;
  //     }
  //     props.setNavShow(scrollY > lastScrollY ? false : true);
  //     lastScrollY = scrollY > 0 ? scrollY : 0;
  //     ticking = false;
  //   };

  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(updateScrollDir);
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => {
    pageTransitionLoader()
    props.setWindow(window.innerWidth,window.innerHeight)
    function handleResize() {
      props.setWindow(window.innerWidth,window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  }, [])
// console.log("heightWIndow", props.common.windowWidth, props.common.windowHeight)
  useEffect(() => {
    props.setPreventBodyScroll(props.common.menuShow)
  }, [props.common.menuShow])

  function scrollHandler(){
    let mainContentBottomValue = mainContentRef.current?.getBoundingClientRect().bottom;
    if(mainContentBottomValue <= window.innerHeight+2){
      setFooterIndexValue(9)
      props.setNavShow(false)
    }else{
      setFooterIndexValue(-1)
    } 

    if(!props.initialBgForNav){
      if(mainContentRef.current?.getBoundingClientRect().top <= -400){
        setInitialBgForNav(true)
      } else {
        setInitialBgForNav(false)
      }
    }
    var st = window.pageYOffset || document.documentElement.scrollTop
    if(st > 100){
        if (st > lastScrollTop){
          props.setNavShow(false);
        } else {
          props.setNavShow(true);
        }
    } else {
      props.setNavShow(true);
    }
    lastScrollTop = st <= 0 ? 0 : st
  };
  
  useEffect(() => {
    setInitialBgForNav(!!props.initialBgForNav)
    setTimeout(() => {
      props.setNavShow(true);
    }, 500);
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
        window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

    // useEffect(() => {
    //   props.setPreventBodyScroll(!props.common.heroImageLoaded)
    // },[props.common.heroImageLoaded])

  // const onMouseMove = event => {
  //   const { pageX: x, pageY: y } = event;
  //   setMousePosition({ x, y });
  // };

  // useEffect(() => {
  //   document.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", onMouseMove);
  //   };
  // });

  let loaderCondition = false
  if(props.noHeroModule) {
    loaderCondition = true
  } else {
    loaderCondition = !props.common.heroImageLoaded
  }
  return (
    <>
      <Head>
        <link  rel="stylesheet" href="https://use.typekit.net/ind7sjv.css" />
        <link rel='stylesheet' href='https://use.typekit.net/gip7xuo.css' />
        {/* <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/0336610b4b5508f582611fa71/7a5e71ff2d837f1648a29e79e.js");</script> */}
      </Head>
      <div className={`pageLayout positionRelative ${props.common.menuCursorOpacity?"menuCursorImageActive":""} ${props.common.navShow?"navActive":""}`}>
        <div className="navBarWrapper">
          <Navbar background={initialBgForNav}/>
        </div>
        <div ref={mainContentRef} className={`mainContent ${props.paddingTop ? "paddingTop" : ""}`}>
          {props.children}
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
        <div style={{height:props.common.windowHeight?props.common.windowHeight:"100vh"}} className={`menuWrapper ${props.common.menuShow?"active":""}`}>
          <Menu />
        </div>
        {/* {props.common.menuShow && <div style={{top:mousePosition.y, left:mousePosition.x}} className="mouseCursorImage positionAbsolute">
          <img src={props.common.menuCursorImage} className="width-100" alt="Image"/>
        </div>} */}
      </div>
      {/* <div style={{top:mousePosition.y-30, left:mousePosition.x-30}} className="cursor blueBg grey positionAbsolute"></div> */}
      {/* {(props.common.pageTransitioning || loaderCondition) && <Loader/>} */}
    
      <style jsx>{`
        .mainContent.paddingTop {
          padding-top: 17.1rem;
        }
        .mouseCursorImage{
          z-index: 100;
          width:13rem;
          height:13rem;
          border-radius:50%;
          overflow:hidden;
          pointer-events: none;
          opacity:0; 
          transition:all 0.3s ease-out;
        }
        .menuCursorImageActive .mouseCursorImage{
          opacity:1;
          transition:all 0.3s ease-out;
        }
        .cursor{
          display: flex;
          pointer-events: none;
          z-index: 100;
          background: #ecebea;
          opacity: 1;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          mix-blend-mode: difference;
          transform: scale(0.2);
        }
        .menuWrapper{
          background:#AAAAAA;
          position:fixed;
          z-index:1000;
          top:0;
          left:0;
          width:100%;
          // transform:translateY(-100%);
          pointer-events:none;
          opacity:0;
          transition:opacity 0s ease;
        }
        .menuWrapper.active{
          // transform:translateY(0%);
          transition:opacity 0.3s ease;
          pointer-events:auto;
          opacity:1;
          
        }
        .pageLayout{
          overflow-x:hidden;
        }
        .navBarWrapper {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 999;
          transform:translateY(-100%);
          transition:all 0.3s ease-out;
        }
        .navActive .navBarWrapper{
          transform:translateY(0%);
          transition:all 0.3s ease-out;
        }
        .footerWrapper {
          position: ${!!props.static && props.static ? "static" : "fixed"};
          bottom: 0;
          z-index: ${footerIndexValue};
          width:100%;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .footerWrapper{
            height:${props.common.footerHeight >= props.common.windowHeight ?"100vh":"auto"};
          }
          .mouseCursorImage{
            display:none;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .mainContent.paddingTop {
            padding-top: 2rem;
          }
        }
      `}</style>
      <style jsx global>{`
          body{
              overflow-y: ${props.common.preventBodyScroll?"hidden !important":"auto"};
              height:${props.common.preventBodyScroll?"100% !important":"auto"};
          }
      `}</style>
    </>
  );
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setPageTransitioning, setNavShow, setMenuBarShow, setWindow, setPreventBodyScroll, setHeroImageLoaded })(withRouter(Layout));