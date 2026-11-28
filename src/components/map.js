// import Head from 'next/head'
// import { useEffect, useState } from 'react';
// import Caret from '../components/caret'
// import {MOBILE_BREAKPOINT} from "../config"

// export default function Map(props){
//     const [ready,setReady] = useState(false)
//     const [dropDownActive, setDropDownActive] = useState(false);
//     const [locationName, setLocationName] = useState("Location");
//     const [infoWindowsData, setInfoWindowsData] = useState([])
//     const [markersData, setMarkersData] = useState([])
//     const [mapData, setMapData] = useState(null)
//     var map,infowindows_array=[],markers_array=[],current_open_window=false;
//     var map_styles=[
//       //   {
//       //     "elementType": "geometry",
//       //     "stylers": [
//       //       {
//       //         "color": "#212121"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "elementType": "labels.icon",
//       //     "stylers": [
//       //       {
//       //         "visibility": "off"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "elementType": "labels.text.fill",
//       //     "stylers": [
//       //       {
//       //         "color": "#757575"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "elementType": "labels.text.stroke",
//       //     "stylers": [
//       //       {
//       //         "color": "#212121"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "administrative",
//       //     "elementType": "geometry",
//       //     "stylers": [
//       //       {
//       //         "color": "#757575"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "administrative.country",
//       //     "elementType": "labels.text.fill",
//       //     "stylers": [
//       //       {
//       //         "color": "#9e9e9e"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "administrative.land_parcel",
//       //     "stylers": [
//       //       {
//       //         "visibility": "off"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "administrative.locality",
//       //     "elementType": "labels.text.fill",
//       //     "stylers": [
//       //       {
//       //         "color": "#bdbdbd"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "poi",
//       //     "elementType": "labels.text.fill",
//       //     "stylers": [
//       //       {
//       //         "color": "#757575"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "poi.park",
//       //     "elementType": "geometry",
//       //     "stylers": [
//       //       {
//       //         "color": "#181818"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "poi.park",
//       //     "elementType": "labels.text.fill",
//       //     "stylers": [
//       //       {
//       //         "color": "#616161"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "poi.park",
//       //     "elementType": "labels.text.stroke",
//       //     "stylers": [
//       //       {
//       //         "color": "#1b1b1b"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "road",
//       //     "elementType": "geometry.fill",
//       //     "stylers": [
//       //       {
//       //         "color": "#2c2c2c"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "road",
//       //     "elementType": "labels.text.fill",
//       //     "stylers": [
//       //       {
//       //         "color": "#8a8a8a"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "road.arterial",
//       //     "elementType": "geometry",
//       //     "stylers": [
//       //       {
//       //         "color": "#373737"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "road.highway",
//       //     "elementType": "geometry",
//       //     "stylers": [
//       //       {
//       //         "color": "#3c3c3c"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "road.highway.controlled_access",
//       //     "elementType": "geometry",
//       //     "stylers": [
//       //       {
//       //         "color": "#4e4e4e"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "road.local",
//       //     "elementType": "labels.text.fill",
//       //     "stylers": [
//       //       {
//       //         "color": "#616161"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "transit",
//       //     "elementType": "labels.text.fill",
//       //     "stylers": [
//       //       {
//       //         "color": "#757575"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "water",
//       //     "elementType": "geometry",
//       //     "stylers": [
//       //       {
//       //         "color": "#000000"
//       //       }
//       //     ]
//       //   },
//       //   {
//       //     "featureType": "water",
//       //     "elementType": "labels.text.fill",
//       //     "stylers": [
//       //       {
//       //         "color": "#3d3d3d"
//       //       }
//       //     ]
//       //   }
//       // ]
      
//         {
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#f5f5f5"
//             }
//           ]
//         },
//         {
//           "elementType": "labels.icon",
//           "stylers": [
//             {
//               "visibility": "off"
//             }
//           ]
//         },
//         {
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#616161"
//             }
//           ]
//         },
//         {
//           "elementType": "labels.text.stroke",
//           "stylers": [
//             {
//               "color": "#f5f5f5"
//             }
//           ]
//         },
//         {
//           "featureType": "administrative.land_parcel",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#bdbdbd"
//             }
//           ]
//         },
//         {
//           "featureType": "poi",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#eeeeee"
//             }
//           ]
//         },
//         {
//           "featureType": "poi",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#757575"
//             }
//           ]
//         },
//         {
//           "featureType": "poi.park",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#e5e5e5"
//             }
//           ]
//         },
//         {
//           "featureType": "poi.park",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#9e9e9e"
//             }
//           ]
//         },
//         {
//           "featureType": "road",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#ffffff"
//             }
//           ]
//         },
//         {
//           "featureType": "road.arterial",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#757575"
//             }
//           ]
//         },
//         {
//           "featureType": "road.highway",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#dadada"
//             }
//           ]
//         },
//         {
//           "featureType": "road.highway",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#616161"
//             }
//           ]
//         },
//         {
//           "featureType": "road.local",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#9e9e9e"
//             }
//           ]
//         },
//         {
//           "featureType": "transit.line",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#e5e5e5"
//             }
//           ]
//         },
//         {
//           "featureType": "transit.station",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#eeeeee"
//             }
//           ]
//         },
//         {
//           "featureType": "water",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#c9c9c9"
//             }
//           ]
//         },
//         {
//           "featureType": "water",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#9e9e9e"
//             }
//           ]
//         }
//       ]
//     var bangalore1_content_string = '<div id="content">'+
//     '<h1 class="mapHeading smallHeading marginBottom16">Bangalore, India.</h1>'+
//     '<div class="mapBody">'+
//     '<p class="bannerDescription black"><b>Address:</b> No 5, 10th A Cross, Begur Main Road,​Hongasandra, Bommanahalli, Bangalore- 560 068.</p>' +
//     '<p class="bannerDescription black"><b>Phone1:</b> <a href="tel:+918040960204">+91-80-40960204​</a></p>' +
//     '<p class="bannerDescription black"><b>Phone2:</b> <a href="tel:+918040960203">+91-80-40960203</a></p>' +
//     '<p class="bannerDescription black"><b>Timings:</b> 10AM to 6PM</p>' +
//     '<p class="bannerDescription black"><a target="_blank" href="https://goo.gl/maps/PF4FCksygLz">View in Google Maps</a></p>' +
//     '</div>'+
//     '</div>';
//     var bangalore1 = [12.892718,77.625409,bangalore1_content_string];
//     var bangalore2_content_string = '<div id="content">'+
//     '<h1 class="mapHeading smallHeading marginBottom16">Bangalore, India.</h1>'+
//     '<div class="mapBody">'+
//     '<p class="bannerDescription black"><b>Address:</b> No 257/1-13, Bannerghatta road, N.S Palya, Bangalore – 560076.</p>' +
//     '<p class="bannerDescription black"><b>Phone:</b> <a href="tel:+918041200849">+91-80-41200849</a></p>' +
//     '<p class="bannerDescription black"><b>Timings:</b> 10AM to 6PM</p>' +
//     '<p class="bannerDescription black"><a target="_blank" href="https://goo.gl/maps/rWqSu3eKNNs">View in Google Maps</a></p>' +
//     '</div>'+
//     '</div>';
//     var bangalore2 = [12.9049876,77.6040423,bangalore2_content_string];
//     var pune_content_string = '<div id="content">'+
//     '<h1 class="mapHeading smallHeading marginBottom16">Pune, India.</h1>'+
//     '<div class="mapBody">'+
//     '<p class="bannerDescription black"><b>Address:</b> No 273, Bhatewaranagar, Hinjewadigoan, Taluk Mulshi, Pune - 411001.</p>' +
//     '<p class="bannerDescription black"><b>Phone:</b> <a href="tel:+919561098816">+91-9561098816</a></p>' +
//     '<p class="bannerDescription black"><b>Timings:</b> 10AM to 6PM </p>' +
//     '</div>'+
//     '</div>';
//     var pune = [18.5204303,73.8567437,pune_content_string];
//     var ahmedabad_content_string = '<div id="content">'+
//     '<h1 class="mapHeading smallHeading marginBottom16">Ahmedabad, India.</h1>'+
//     '<div class="mapBody">'+
//     '<p class="bannerDescription black"><b>Address:</b> Plot No 313, GIDC, Sanand - 2, Near UGVAI Sub Station, Sanand-382110.</p>' +
//     '<p class="bannerDescription black"><b>Phone:</b> <a href="tel:+919561098816">+91-9561098816</a></p>' +
//     '<p class="bannerDescription black"><b>Timings:</b> 10AM to 6PM </p>' +
//     '</div>'+
//     '</div>';
//     var ahmedabad = [23.022505,72.5713621,ahmedabad_content_string];
//     var gurgaon1_content_string = '<div id="content">'+
//     '<h1 class="mapHeading smallHeading marginBottom16">Gurgaon, India.</h1>'+
//     '<div class="mapBody">'+
//     '<p class="bannerDescription black"><b>Address:</b> Plot No 79, Industrial Estate, Udyog vihar, Gurgoan-122001.  </p>' +
//     '<p class="bannerDescription black"><b>Phone:</b> <a href="tel:+91919560741421">+91-919560741421</a></p>' +
//     '<p class="bannerDescription black"><b>Timings:</b> 10AM to 6PM</p>' +
//     '</div>'+
//     '</div>';
//     var gurgaon1 = [28.4594965,77.0266383,gurgaon1_content_string];
//     var gurgaon2_content_string = '<div id="content">'+
//     '<h1 class="mapHeading smallHeading marginBottom16">Gurgaon, India.</h1>'+
//     '<div class="mapBody">'+
//     '<p class="bannerDescription black"><b>Address:</b> 101, 1st floor, Main Govt School Road Sec 18 Village Sirhol, Gurgaon Haryana-122002. </p>' +
//     '<p class="bannerDescription black"><b>Phone:</b> <a href="tel:+918800382444">+91-8800382444</a></p>' +
//     '<p class="bannerDescription black"><b>Timings:</b> 10AM to 6PM</p>' +
//     '</div>'+
//     '</div>';
//     var gurgaon2 = [28.4594965,77.0266383,gurgaon2_content_string];
//     var chennai_content_string = '<div id="content">'+
//     '<h1 class="mapHeading smallHeading marginBottom16">Chennai, India.</h1>'+
//     '<div class="mapBody">'+
//     '<p class="bannerDescription black"><b>Address:</b>No 165,Indospace Industrial Park oragadam 2, phase 2, venpakkam village walajabad talk,Kanchipuram - tamilnadu 603111 </p>' +
//     '<p class="bannerDescription black"><b>Phone:</b> <a href="tel:+918884456633">+91-8884456633</a></p>' +
//     '<p class="bannerDescription black"><a target="_blank" href="https://goo.gl/maps/Wfq8TvzB9qn">View in Google Maps</a></p>' +
//     '</div>'+
//     '</div>';
//     var chennai = [13.0826802,80.2707184,chennai_content_string];
//     var milan_content_string = '<div id="content">'+
//     '<h1 class="mapHeading smallHeading marginBottom16">Milan, Italy(Saddles)</h1>'+
//     '</div>';
//     var milan = [45.4790671,9.8452433,milan_content_string];
//     var dubai_content_string = '<div id="content">'+
//     '<h1 class="mapHeading smallHeading marginBottom16">Dubai, UAE(Saddles)</h1>'+
//     '</div>';
//     var dubai = [25.2048493,55.2707828,dubai_content_string];
//     var markerReference;
//     function initMap(mapcontainerid){
//         var map_container,latVal,lngVal,contentString;
//         if(mapcontainerid == 'bangalore1'){
//             latVal = bangalore1[0];
//             lngVal = bangalore1[1];
//             contentString = bangalore1[2];
//         } 
//         if(mapcontainerid == 'bangalore2'){
//             latVal = bangalore2[0];
//             lngVal = bangalore2[1];
//             contentString = bangalore2[2];
//         } 
//         if(mapcontainerid == 'pune'){
//             latVal = pune[0];
//             lngVal = pune[1];
//             contentString = pune[2];
//         } 
//         if(mapcontainerid == 'ahmedabad'){
//             latVal = ahmedabad[0];
//             lngVal = ahmedabad[1];
//             contentString = ahmedabad[2];
//         } 
//         if(mapcontainerid == 'gurgaon1'){
//             latVal = gurgaon1[0];
//             lngVal = gurgaon1[1];
//             contentString = gurgaon1[2];
//         } 
//         if(mapcontainerid == 'gurgaon2'){
//             latVal = gurgaon2[0];
//             lngVal = gurgaon2[1];
//             contentString = gurgaon2[2];
//         } 
//         if(mapcontainerid == 'chennai'){
//             latVal = chennai[0];
//             lngVal = chennai[1];
//             contentString = chennai[2];
//         } 
//         if(mapcontainerid == 'milan'){
//             latVal = milan[0];
//             lngVal = milan[1];
//             contentString = milan[2];
//         } 
//         if(mapcontainerid == 'dubai'){
//             latVal = dubai[0];
//             lngVal = dubai[1];
//             contentString = dubai[2];
//         }  
//         var infowindow = new google.maps.InfoWindow({
//             content: contentString
//         });
//         infowindows_array.push(infowindow);
//         var marker = new google.maps.Marker({position: {lat: latVal, lng: lngVal}, map: map,icon: '/images/markerRed.png'});
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
//         // initMap('bangalore1');
//         initMap('bangalore2');
//         initMap('pune');
//         // initMap('ahmedabad');
//         initMap('gurgaon1');
//         initMap('gurgaon2');
//         initMap('chennai');
        
//         setInfoWindowsData(infowindows_array)
//         setMapData(map)
//         setMarkersData(markers_array)
//         // initMap('milan');
//         // initMap('dubai');
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
//                       <li onClick={()=>{setLocationName("Bangalore, India"),openInfoWindow(markersData[0],0)}}>Bangalore, India</li>
//                       <li onClick={()=>{setLocationName("Pune, India",openInfoWindow(markersData[1],1))}}>Pune, India</li>
//                       <li onClick={()=>{setLocationName("Gurgaon 1, India"),openInfoWindow(markersData[2],2)}}>Gurgaon 1, India</li>
//                       <li onClick={()=>{setLocationName("Gurgaon 2, India"),openInfoWindow(markersData[3],3)}}>Gurgaon 2, India</li>
//                       <li onClick={()=>{setLocationName("Chennai, India"),openInfoWindow(markersData[4],4)}}>Chennai, India</li>
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