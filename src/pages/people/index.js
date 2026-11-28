import { getSite } from '@/lib/legacy/site'
import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../../redux/actions";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SmoothScrollContext } from '../../function';
import HeroModule from "../../components/heroModule";
import Sanity from "../../sanity"
import {serialiser} from "../../serialiser"
import BlockContent from "@sanity/block-content-to-react"
gsap.registerPlugin(ScrollTrigger);
import {buildFileUrl, parseAssetId} from '@sanity/asset-utils'
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import SEO from "../../components/seo"

let heroData = [
    {
        scrollDownText:"Join Us",
        mainImage:"/images/careers.png",
        mainImageMobile:"/images/pageTwoHeroMobile.png",
        shortHeading:"Careers",
        mainHeading:"Walking Tree X People",
        desc:"We are building on a formidable past to create an even more incredible future. We explore, inspire and protect. We live and breathe our craft. We are unique, we are innovative. Together, we make Walking Tree."
    }
]
const points = [
  {
    _key:"dsku3",
    heading:"Responsibility",
    text:"As a global group, we are passionate about driving positive change for our industry, our communities and the people."
  },
  {
    _key:"dsku33",
    heading:"Diversity & Inclusion",
    text:"We know that in our diversity lies our strength, and our creative spirit. Everyone is someone at Walking Tree."
  },
  {
    _key:"dsku3543",
    heading:"Learning & Development",
    text:"Working here is all about creating exceptional experiences for all our customers. That’s why we make working here, exceptional for you."
  }
]
function People(props) {
  // console.log("culture data",props.data.banner.desc)
  const [scroll, setScroll] = useState(null);
  const [windowScroll, setWindowScroll] = useState(null);
  const scrollWrapper = useRef();

  useEffect(() => {
    ScrollTrigger.defaults({
      scroller: scrollWrapper.current,
      // scroller:"#collectionPage",
      toggleActions:"play none none none",
      scrub: false,
      start: "top 80%",
    });
  }, []);
  let seo =props.data.seo;
  console.log(props.data.banner);
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
              mainImageMobile={!!props?.data?.banner?.mainImageMobile? urlFor(props?.data?.banner?.mainImageMobile).quality(100).url():null}
              mainImage={!!props?.data?.banner?.mainImage ?  urlFor(props?.data?.banner?.mainImage).quality(100).url():null}
              shortHeading={props.data?.banner?.shortHeading}
              mainHeading={props.data?.banner?.mainHeading}
              desc={!!props.data.banner.desc?<BlockContent  blocks={props.data.banner.desc} serializers={serialiser}></BlockContent>:<p className="marginBottom10"></p>}
              button={props?.data?.banner?.cta?.buttonText ? true : false}
              cta={props?.data?.banner?.cta}
              mediaType={props?.data?.banner?.mediaType}
              video={!!props?.data?.banner?.video? props?.data?.banner?.video:null}
              videoUrl={!!props?.data?.banner?.video?.videoDesktop?.asset?._ref ?buildFileUrl(parseAssetId(props?.data?.banner?.video?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null}
              videoUrlMobile={!!props?.data.banner?.video?.videoMobile?.asset?._ref ?buildFileUrl(parseAssetId(props?.data?.banner?.video?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null}
            />
              <BlockContent blocks={props.data.content} serializers={serialiser}/>
              {/* <Space desktopHeight="20rem" tabletLandscapeHeight="15rem" mobileHeight="6rem"/>
              <ThreeStepTextWithUpAndDownImages 
                shortHeading="All about how we make it" 
                topText1="Walking Tree enables entry into a world of unlimited possibilities." 
                topText2="We aspire to create simply beautiful workspaces that in turn inspire creativity and collaboration. pooling our years of collective expertise and forensic eye for detail, we ensure every Walking Tree™ workspace is infused with the same combination of quality, consistency and comfort, resulting in office spaces that are a joy to spend time in."
                img1="/images/culture1.png"
                img2="/images/culture2.png"
                img1Caption1={{showArrow:true,text:"<strong>Lonnie Castle</strong>, Culture And Concepts Manager"}} 
                img1Caption2={{showArrow:true,text:`Design Studio & India Headquarters, <strong>Mumbai</strong>`}}
                img2Caption1=""
                img2Caption2=""
                />
              <Space desktopHeight="30rem" tabletLandscapeHeight="15rem" mobileHeight="13rem" />
              <OurCulture 
                shortHeading="Our Culture"
                heading="Women Leadership and key Workforce strengthening"
                leftDesc1="Our culture pillar is focused on building an inclusive workplace where employees feel all aspects of themselves are valued, and leaders demonstrate and model inclusive behaviors. "
                leftDesc2="In our efforts to build an inclusive workplace, we have focused on creating safe spaces and opportunities for meaningful and open conversations amongst our employees."
                rightDesc1="We believe in the power of community to celebrate diversity, belonging, and self-love."
                rightDesc2="We strive to create workforce policies and practices that respond to our employees’ unique needs."
                img1="/images/career1.png"
                img2="/images/career2.png"
                caption1={{showArrow:true,text:"<strong>Signe Hytte</strong>, Head Of Design."}}
                caption2=""
              />
              <Space desktopHeight="30rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
              <ThreeStepTextOnTheRightSurroundedByImages
                shortHeadingTop='Diversity & Collaborations'
                topText1Top="Space to explore culture through a collision of ideas, perspectives, and industries."
                topText2Top="We are driven by collaboration, bringing together local creators and makers from different industries and diverse backgrounds to explore culture through common ideologies, conversation, art, and food."
                image1="/images/diversity1.png"
                image2="/images/diversity2.png"
                caption1={{showArrow:false,text:"The Supply Team gather in downtown <strong>Devoción cafe</strong> for lunch"}}
                caption2=""
                image3="/images/diversity3.png"
                caption3=""
              />
              <Space desktopHeight="30rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
              <InfoCtaLeftImageRight
               text="We operate offices across the world. We’re always looking to connect with individuals who want to make the best work of their lives with the world’s greatest brands. If you’re interested in working with us or learning more, drop us a note, portfolio link, or résumé."
               img="/images/office.png"
               buttonText="APPLY NOW"
               buttonTextOnHover="APPLY NOW"
              />
              <Space desktopHeight="30rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
              <InfoAndPointsWithLines 
                shortHeading="Our Employee Value System" 
                heading1="Build great relationships" 
                heading2="and trust" 
                description="We have the courage to find new possibilities and solutions, creating opportunity and magic. We are open and transparent." 
                img1="/images/values1.png" 
                img2="/images/values2.png" 
                points={points}
              />
              <Space desktopHeight="30rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
              <FullImage img="/images/openings.png" objectFitInMobile={true}/>
              <Space desktopHeight="30rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
              <Openings 
                shortHeading="Current Openings" 
                heading1="Explore all our " 
                heading2="openings" 
                description="Build your path. Explore. Inspire. Protect."
              />
              <Space desktopHeight="30rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
              <BannerCta 
                  img="/images/bannerCta.png"
                  text={"<p>To talk about<br /> your project</p>"}
                  buttonText="LETS CONNECT"
                  buttonTextOnHover="LETS CONNECT"
                  cmsRichContent={true}
                />
              <Space desktopHeight={"12.2rem"} tabletLandscapeHeight={"8.5rem"} mediumHeight={"10rem"} mobileHeight={"5rem"} /> */}
            </div>
            {/* <div className="footerSpace"></div>  */}
          </div> 
        <style jsx>{`
          .footerSpace{
            height:${props.common.footerHeight >= props.common.windowHeight ?"100vh":`${props.common.footerHeight}px`};
            background:transparent;
          }
          .topSections{
            background:white;
          }
        `}</style>
    </Layout>
    </>
  );
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(People);



export async function getStaticProps({params}) {
    let data=null;
    let errors=false
    let query=`*[_id=="cultureAndCareers_en"]`
    try{
      data=await Sanity.fetch(query);
      data=Array.isArray(data) ? data[0] : null
      if(Array.isArray(data.content)){
        for(let i=0;i<data.content.length;i++){
          if(data.content[i]._type=="openings"){
            // console.log(data.content[i].jobOpening)
            let position=null;
            let name="";
            let jobOpenings=data.content[i].jobOpening
            // console.log(jobOpenings)
            if(Array.isArray(jobOpenings)){
              for(let j=0;j<jobOpenings.length;j++){
                let ref=jobOpenings[j]._ref;
                let query1=`*[_type=="department" && _id=="${ref}"]
                {
                  name,
                  "positions":*[_type=="jobOpening" && references(^._id)]{
                  "department":department->,
                  "slug":slug.current,
                  title1,
                  title2,
                  shortDescription
                }
                }`
                let content=await Sanity.fetch(query1);
                content=Array.isArray(content)?content[0]:null;
                name=content.name;
                position=content.positions;
                jobOpenings[j].name=name;
                jobOpenings[j].position=position;
              }
            }
          }
        }
      }
      return {props:{site: await getSite(), data}, revalidate:60}
    }catch(err){
      return {props:{site: await getSite(), errors,data}, revalidate:60}
    }
  }