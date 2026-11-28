import React, { useEffect, useRef, createContext, useState } from "react";
import Layout from '../../components/layout'
import {MOBILE_BREAKPOINT} from '../../config'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { connect } from "react-redux";
import { setHeroImageLoaded,setPageTransitioning } from "../../redux/actions";
import Space from '../../components/space'
import HeroModule from "../../components/heroModule";
import Sanity from '../../sanity'
import BlockContent from "@sanity/block-content-to-react"
import { serialiser } from "../../serialiser";
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import SEO from "../../components/seo"

function DesignStudioAsia(props) {
  const scrollWrapper = useRef();
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      scroller: scrollWrapper.current,
      // scroller:"#collectionPage",
      toggleActions:"play none none none",
      scrub: true,
      start: "top 80%",
    });
  }, []);


  let seo=props.data.pageDetails.seo
  // console.log("hero module",props?.data?.heroModule)
  return (
    <>
       {!!seo && <SEO
          title={seo.title}
          description={seo.description}
          image={urlFor(seo.image).quality(100).url()} 
        />}
      <Layout static={true}>
            <div data-scroll-container ref={scrollWrapper}>
              <div className="topSections">
              <HeroModule
                // mainImageMobile={urlFor(props?.data?.heroModule?.mainImageMobile).quality(100).url()}
                mainImageMobile={!!props?.data?.heroModule?.mainImageMobile? urlFor(props?.data?.heroModule?.mainImageMobile).quality(100).url():null}
                mainImage={!!props?.data?.heroModule?.mainImage ?  urlFor(props?.data?.heroModule?.mainImage).quality(100).url():null}
                // mainImage={urlFor(props?.data?.heroModule?.mainImage).quality(100).url()}
                shortHeading={props.data.heroModule.shortHeading}
                mainHeading={props.data.heroModule.mainHeading}
                desc={!!props.data.heroModule.desc?<BlockContent  blocks={props.data.heroModule.desc} serializers={serialiser}></BlockContent>:<p className="marginBottom10"></p>}
                button={props?.data?.heroModule?.cta?.buttonText ? true : false}
                cta={props?.data?.heroModule?.cta}
                mediaType={props?.data?.heroModule?.mediaType}
                video={!!props?.data?.heroModule?.video? props?.data?.heroModule?.video:null}
                videoUrl={!!props?.data?.heroModule?.video?.videoDesktop?.asset?._ref ?buildFileUrl(parseAssetId(props?.data?.heroModule?.video?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null}
                videoUrlMobile={!!props?.data.heroModule?.video?.videoMobile?.asset?._ref ?buildFileUrl(parseAssetId(props?.data?.heroModule?.video?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null}
              />
                <BlockContent blocks={props.data.pageDetails.content} serializers={serialiser}/>
                {/* <Space desktopHeight="21rem"  tabletLandscapeHeight="15rem" mobileHeight="8rem"/>
                <TextAndTwoColumnImage
                    shortHeading="All about how we make it"
                    topText1="The collections we create must have the special blend of <i>discovery</i> and <i>fimilarity</i> like reading a new poem about a well loved subject."
                    topText2="Jewellery to us is about bringing a point of view to the table. The symbolism for each collection is a sessential to us as the craft and design aspects of it. from reimagining an existing category to crafting something completely fresh."
                    img1="/images/second-1st.png"
                    img2="/images/second-2nd.png"
                    bottomText="As a full stack Design Studio, we know that every partner who comes to us has a unique challenge to resolve. Because we are the sum of many standalone parts, we are able to create a flexible structure that fits a specific set of needs. That is why every collaboration we do is unique and results in ways that always creates new desire for our partners."
                />
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
                <VideoSection
                    mainImg="/images/videoPicture.png"
                    mainImgMobile="/images/videoSectionImageMobile.png"
                    shortHeading="Design Studio Asia"
                    mainHeading="Our Collections"
                    bottomText="Craftsmen, engineers, designers and other specialists work closely at every stage on the development and manufacturing of the collections"
                    buttonText="Watch the film"
                    buttonTextOnHover="Learn more"
                  />
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
                <CollectionsCarousel
                    carouselData={collectionsCarousel}
                    animationDone={true}
                />
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
                <TwoImageSlider
                    twoImageSliderData={twoImageSliderData}
                    shortHeading="Our Signature Collections"
                    mainHeading="A roller coaster called love “Shades of Love”"
                />
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>  
                <RandomImages
                    randomImagesSlider={randomImagesSlider}
                    shortHeading="Our White Label Collections"
                    desc="Inspired by genuine scenes of love, the Engrave Me Collection is specially made and designed to be personalised. A design made for the unbreakable human ties."
                />
                <Space desktopHeight="9rem" tabletLandscapeHeight="6rem" mobileHeight="3rem"/>
                <ChangeContentOnScroll
                    shortHeading="Clients & Brand Partners"
                    mainHeading="Multifaceted Collaborative Experience centre & space"
                    colText1="Massa ultricies mi quis hendrerit dolor magna eget est lorem. Etiam non quam lacus suspendisse faucibus."
                    colText2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sunt in culpa qui officia deserunt mollit anim id est laborum."
                    imageCards={imageCards}
                    cardIndex={0}
                    cardIndexReduce={0}
                />
                <Space desktopHeight="21rem" tabletLandscapeHeight="15rem" mobileHeight="8rem"/> */}
                {/* <ShowsAndEvents
                    mainHeading="Shows & Events"
                    desc="Hosted and participated over 250 global events, ranging from product launches, exhibitions, panel discussions - With the help of our partners and team the showcase is a physical manifestation of sharing our ideas with our community and audience."
                    sNum="01"
                    shortHeading="HKTDC International Jewellery Show."
                    content="Magna ac placerat vestibulum lectus mauris ultrices. Venenatis cras sed felis eget velit. Eget duis at tellus at urna condimentum. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Tempus quam pellentesque nec nam aliquam sem et. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi."
                    defaultButtonText="READ MORE"
                    hoverButtontext="CLICK TO THE ARTICLE"
                    eventImage="/images/eventImage.png"
                    smallText1="Hong Kong Global Jewellery Show,"
                    smallText2="Hong Kong."
                />
                 <Space desktopHeight="30rem" mediumHeight="25rem"  tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>  */}
                
                {/* <ExploreMore
                    cards={exploreMoreCards}
                /> */}
                {/* <Space desktopHeight="30rem" mediumHeight="25rem"  tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/> */}
              </div> 
              <div className="footerSpace"></div> 
            </div> 
      </Layout>
      <style jsx>{`
        .footerSpace{
          height:${props.common.footerHeight >= props.common.windowHeight ?"100vh":`${props.common.footerHeight}px`};
          background:transparent;
        }
        .topSections{
          background:white;
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px){

        }
      `}</style>
    </>
  )
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded,setPageTransitioning })(DesignStudioAsia);

export async function getStaticPaths(){
    let paths=[]
    let query=`*[_type=="designStudio"]{"slugParams":pageDetails.uri}`
    let category=await Sanity.fetch(query);
    if(Array.isArray(category)){
        for(let i=0;i<category.length;i++){
            paths.push({params:{slug:category[i].slugParams}})
        }
    }else{
        // console.log("invalid slug")
    }
    return{
        paths,
        fallback:'blocking'
    }
}

export async function getStaticProps({params}){
    let data=null;
    let errors=false
    let allArticles=[]
    let query=`*[_type=="designStudio" && pageDetails.uri=="${params.slug}"]`
    try{
        data=await Sanity.fetch(query)
        data=Array.isArray(data)?data[0]:null
        if(Array.isArray(data.pageDetails.content)){
          for(let i=0;i<data.pageDetails.content.length;i++){
            // console.log(data.pageDetails.content[i]._type)
            if(data.pageDetails.content[i]._type=="articleList"){
              // console.log(data.pageDetails.content[i].articleCol.explore)
              let exploreArticles=data.pageDetails.content[i].articleCol.explore;
              for(let j=0;j<exploreArticles.length;j++){
                let ref=exploreArticles[j]._ref;
                // console.log(ref)
                let articleQuery=`*[_type=="article" &&_id=="${ref}"]{articleCategory[]->{"slug":slug.current,title},
                author,
                description,
                excerpt,
                title,
                articlePortraitImage,
                label,
                "slug":slug.current}`
                let article=await Sanity.fetch(articleQuery);
                article=Array.isArray(article) ? article[0]:null;
                allArticles.push(article)
              }
              data.pageDetails.content[i].allArticles=allArticles
            }
          }
        }


    return {props:{data,errors}, revalidate:60}
    }catch(err){
        // console.log(err)
        errors=true
        return {props:{errors,data}, revalidate:60}

    }
}