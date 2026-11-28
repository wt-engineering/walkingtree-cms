// import Head from 'next/head'
// import { useEffect, useState } from 'react';
// import Caret from '../components/caret'
// import {MOBILE_BREAKPOINT} from "../config"

// export default function Map(props){
//     // console.log(props.mapItems)
//     const [ready,setReady] = useState(false)
//     const [dropDownActive, setDropDownActive] = useState(false);
//     const [locationName, setLocationName] = useState("Location");
//     const [infoWindowsData, setInfoWindowsData] = useState([])
//     const [markersData, setMarkersData] = useState([])
//     const [mapData, setMapData] = useState(null)
//     var map,infowindows_array=[],markers_array=[],current_open_window=false;
//     var map_styles=[
//       {
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#f5f5f5"
//           }
//         ]
//       },
//       {
//         "elementType": "labels.icon",
//         "stylers": [
//           {
//             "visibility": "off"
//           }
//         ]
//       },
//       {
//         "elementType": "labels.text.fill",
//         "stylers": [
//           {
//             "color": "#616161"
//           }
//         ]
//       },
//       {
//         "elementType": "labels.text.stroke",
//         "stylers": [
//           {
//             "color": "#f5f5f5"
//           }
//         ]
//       },
//       {
//         "featureType": "administrative.land_parcel",
//         "elementType": "labels.text.fill",
//         "stylers": [
//           {
//             "color": "#bdbdbd"
//           }
//         ]
//       },
//       {
//         "featureType": "poi",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#eeeeee"
//           }
//         ]
//       },
//       {
//         "featureType": "poi",
//         "elementType": "labels.text.fill",
//         "stylers": [
//           {
//             "color": "#757575"
//           }
//         ]
//       },
//       {
//         "featureType": "poi.park",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#e5e5e5"
//           }
//         ]
//       },
//       {
//         "featureType": "poi.park",
//         "elementType": "labels.text.fill",
//         "stylers": [
//           {
//             "color": "#9e9e9e"
//           }
//         ]
//       },
//       {
//         "featureType": "road",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#ffffff"
//           }
//         ]
//       },
//       {
//         "featureType": "road.arterial",
//         "elementType": "labels.text.fill",
//         "stylers": [
//           {
//             "color": "#757575"
//           }
//         ]
//       },
//       {
//         "featureType": "road.highway",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#dadada"
//           }
//         ]
//       },
//       {
//         "featureType": "road.highway",
//         "elementType": "labels.text.fill",
//         "stylers": [
//           {
//             "color": "#616161"
//           }
//         ]
//       },
//       {
//         "featureType": "road.local",
//         "elementType": "labels.text.fill",
//         "stylers": [
//           {
//             "color": "#9e9e9e"
//           }
//         ]
//       },
//       {
//         "featureType": "transit.line",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#e5e5e5"
//           }
//         ]
//       },
//       {
//         "featureType": "transit.station",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#eeeeee"
//           }
//         ]
//       },
//       {
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#c9c9c9"
//           }
//         ]
//       },
//       {
//         "featureType": "water",
//         "elementType": "labels.text.fill",
//         "stylers": [
//           {
//             "color": "#9e9e9e"
//           }
//         ]
//       }
//     ]
//     function initMap(data){
//         let latVal = data.location.lat
//         let lngVal = data.location.lng
//         let contentString = `<div class="contentOnMap black">
//         <h1 class="mapHeading smallHeading marginBottom16 black">${data.place}</h1>
//           <div class="mapBody black">
//             <p class="bannerDescription black"><b>Address:</b> ${data.address}</p>
//             <p class="bannerDescription black"><b>Phone:</b> <a className="blackColor" style="color:#414042;" href="tel:${data.phoneNumber1}">${data.phoneNumberDisplay1}</a></p>
//             <p class="bannerDescription black"><a className="blackColor" style="color:#414042;" target="_blank" href="${data.mapLink}">View in Google Maps</a></p>
//           </div>
//         </div>`
//         var infowindow = new google.maps.InfoWindow({
//             content: contentString
//         });
//         infowindows_array.push(infowindow);
//         var marker = new google.maps.Marker({position: {lat: latVal, lng: lngVal}, map: map,icon: '/images/markerOrange.png'});
//         markers_array.push(marker);
//         marker.addListener('click', function() {
//             setLocationName("Location")
//             if(current_open_window)
//                 current_open_window.close();
//             infowindow.open(map, marker);
//             current_open_window = infowindow;
//         });
//     }
    
//     // function openInfoWindow(marker){
//     //   if(current_open_window)
//     //       current_open_window.close();
//     //   infowindow.open(map, marker);
//     //   current_open_window = infowindow;
//     // }
//     function initAllMaps() {
//         // console.log("init all maps",props.mapItems)
//         var options = {
//             center: {lat:29.5309626,lng: 75.4183747 },
//             zoom: 3,
//             styles: map_styles
//         };
//         let map_container = document.getElementById('googlemap');
//         map = new google.maps.Map(map_container, options);
//         google.maps.event.addListener(map, 'mousedown', function(){
//             enableScrollingWithMouseWheel(map)
//         });
//         props.mapItems.forEach(mapItem=>{
//           initMap(mapItem)
//         })
//         setInfoWindowsData(infowindows_array)
//         setMapData(map)
//         setMarkersData(markers_array)
//         //Add click events to list
//         // $('#locations ul li').click(function(){
//         //     $('#locations ul li.selected').removeClass('selected');
//         //     $(this).addClass('selected');
//         //     if(current_open_window)
//         //         current_open_window.close();
//         //     var inf_win = infowindows_array[$(this).index()];
//         //     inf_win.open(map,markers_array[$(this).index()]);
//         //     current_open_window = inf_win;
//         // });
//         // $('#mob-locations').change(function(){
//         //     var i=$('#mob-locations option').index($( "#mob-locations option:selected")[0]);
//         //     if(i!=0){
//         //         if(current_open_window)
//         //             current_open_window.close();
//         //         var inf_win = infowindows_array[i-1];
//         //         inf_win.open(map,markers_array[i-1]);
//         //         current_open_window = inf_win;
//         //     }
//         // });
//         // $(window).scroll(function() {
//         //     disableScrollingWithMouseWheel();
//         // });
//     }
//     function enableScrollingWithMouseWheel(map) {
//         map.setOptions({ scrollwheel: true });
//     }
//     function disableScrollingWithMouseWheel() {
//         !!map && map.setOptions({ scrollwheel: false });
//     }
//     // $('body').on('mousedown', function(event) {
//     //     var clickedInsideMap = $(event.target).parents('.gmap-wrapper').length > 0;
//     //     if(!clickedInsideMap) {
//     //         disableScrollingWithMouseWheel();
//     //     }
//     // });
//     // $(window).resize(function(){
//     //     resizeGoogleMap();
//     // });
//     function handleScroll(){
//         disableScrollingWithMouseWheel()
//     }
//     useEffect(()=>{
//         window.addEventListener('initGoogleMap',initAllMaps)
//         window.addEventListener('scroll',handleScroll)
//         setReady(true)
//         return ()=>{
//             window.removeEventListener('initGoogleMap',initAllMaps)
//             window.removeEventListener('scroll',handleScroll)
//         }

//     },[]) 
//     function openInfoWindow(markerRef,index){
//       setDropDownActive(false)
//       for (let i = 0; i < infoWindowsData.length; i++) {
//         infoWindowsData[i].close();
//       }
//       infoWindowsData[index]?.open(mapData, markerRef);
//     }
//     return (
//         <>
//             {!!ready &&
//             <>
//                 <Head>
//                     <script
//                         dangerouslySetInnerHTML={{
//                         __html: `
//                             function initMaps(){
//                               const event = new Event('initGoogleMap');
//                               window.dispatchEvent(event);
//                             }   
//                     `,
//                     }}
//                     ></script>
//                     <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8pLYiMdVWAteXO5MA3napmHQPWGio9yA&callback=initMaps"></script>
//                 </Head>
//                 <div className={`locationDropDownContainer marginBottom90 lesserAdditionalPaddingLeft positionRelative ${dropDownActive?"dropDownActive":""}`}>
//                     <div onClick={()=>setDropDownActive(!dropDownActive)} className={`defaultName flexItems cursorPointer description ${locationName=="Location"?"grey":""}`}>
//                       <span>{locationName}</span>
//                       <span className="ddArrow"><Caret color="black" direction={dropDownActive?"up":"down"} width="0.1rem" length="0.6rem" marginBottom="0rem" /></span>
//                     </div>
//                     <ul className="dropDownLists listStyleNone description">
//                       <li onClick={()=>{setLocationName("Location"),openInfoWindow(markersData[null],null)}}>All</li>
//                       {props.mapItems.map((mapItem,index)=>{
//                           return (
//                             <li key={index} onClick={()=>{setLocationName(mapItem.place),openInfoWindow(markersData[index],index)}}>{mapItem.place}</li>
//                           )
//                       })}
//                     </ul>
//                 </div>
//                 </>
//             }
//             <div className="wrapper">
//                 <div id="googlemap"></div>
//             </div>
//             <style jsx>{`
//                 #googlemap{
//                     height:500px;
//                 }
//                 .dropDownLists li{
//                   margin-bottom:1.5rem;
//                   cursor:pointer;
//                 }
//                 .dropDownLists{
//                   padding:0 0 0 1.5rem;
//                   transition:all 0.3s ease-out;
//                   height:0;
//                   overflow:hidden;
//                 }
//                 .dropDownActive .dropDownLists{
//                   padding:1.5rem;
//                   height:auto;
//                   transition:all 0.3s ease-out;
//                 }
//                 .defaultName{
//                   padding:1rem 1.5rem;
//                   border-bottom:1px solid #000000;
//                   width:40rem;
//                   justify-content: space-between;
//                 }
//                 .blackColor a {
//                   color:#414042;
//                 }
             
//                 @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
//                   .defaultName {
//                     width:100%;
//                   }
//                   .locationDropDownContainer{
//                     padding:0 2.1rem;
//                   }
//                 }
//             `}</style>
//         </>
//     )
// }