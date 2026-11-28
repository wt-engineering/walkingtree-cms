import Caret from '../components/caret'
import React,{ useEffect, useRef, useState,useContext} from 'react'


function DropDownOption(props) {
    const [ready,setReady] = useState(false)
    const [dropDownActive, setDropDownActive] = useState(false);
    const [DropDownName, setDropDownName] = useState("Enquire Type *");
    const [infoWindowsData, setInfoWindowsData] = useState([])
    const [markersData, setMarkersData] = useState([])
    const [mapData, setMapData] = useState(null)

    function infoWindow(markerRef,index){
        setDropDownActive(false)
        for (let i = 0; i < infoWindowsData.length; i++) {
          infoWindowsData[i].close();
        }
        infoWindowsData[index]?.open(mapData, markerRef);
      }
    
  return (
    <>
        <div className={`locationDropDownContainer marginBottom55 positionRelative ${dropDownActive?"dropDownActive":""}`}>
            <div onClick={()=>setDropDownActive(!dropDownActive)} className={`defaultName flexItems cursorPointer mainShortHeading`}>
            <span>{DropDownName}</span>
            <span className="ddArrow"><Caret color="black" direction={dropDownActive?"up":"down"} width="0.1rem" length="0.6rem" marginBottom="0rem" /></span>
            </div>
            <ul className="dropDownLists listStyleNone mainShortHeading">
            <li onClick={()=>{setDropDownName("")}}>{props.dropDownType}</li>
            {props.mapItems.map((mapItem,index)=>{
                return (
                    <li 
                      key={index}
                     onClick={()=>{setDropDownName(mapItem.enquiryType),infoWindow(markersData[index],index),props.setEnquiryType(mapItem.enquiryType)}}>{mapItem.enquiryType}</li>
                )
            })}
            </ul>
        </div>
        <style jsx>{`
            .dropDownLists li{
                margin-bottom:1.5rem;
                cursor:pointer;
              }
              .dropDownLists{
                padding:0 0 0 1.5rem;
                transition:all 0.3s ease-out;
                height:0;
                overflow:hidden;
              }
              .dropDownActive .dropDownLists{
                padding:1.5rem;
                height:auto;
                transition:all 0.3s ease-out;
              }
              .defaultName{
                padding:1rem 1.5rem;
                border-bottom: 1px solid #707070;
                justify-content: space-between;
              }
              .blackColor a {
                color:#414042;
              }
        `}</style>
    </>
  )
}

export default DropDownOption