import {PAGE_TRANSITIONING,MENU_CURSOR_OPACITY,MENU_CURSOR_IMAGE,SET_DEFAULT_PANEL_DATA,SET_FOOTER_HEIGHT,SET_PANEL_ONE_DATA,SET_PANEL_TWO_DATA,SET_PANEL_THREE_DATA,NO_JOB_OPENING_FORM, PREVENT_BODY_SCROLL,MENU_BAR_SHOW,CAROUSEL_ANIMATION_DONE,SET_MODE,GETTING_SELECTION, NAV_SHOW,HERO_IMAGE_LOADED,SET_WINDOW} from './actions'
import { combineReducers } from 'redux';
function commonReducer(state={mode:"landscape",pageTransitioning:false,menuCursorOpacity:true,menuCursorImage:"/images/transparent.png",footerHeight:null,defaultData:null,panelOneData:null,panelTwoData:null,panelThreeData:null,noJobOpeningForm:false,preventBodyScroll:false,menuShow:false,carouselAnimation:false,navShow:false,heroImageLoaded:false},action){
	switch(action.type){
		case SET_MODE:
			return Object.assign({},state,{mode:action.mode})
		case NAV_SHOW:
			return Object.assign({},state,{navShow:action.bool}) 
		case HERO_IMAGE_LOADED:
			return Object.assign({},state,{heroImageLoaded:action.bool})
		case SET_WINDOW:
			return Object.assign({},state,{windowWidth:action.windowWidth,windowHeight:action.windowHeight})
		case CAROUSEL_ANIMATION_DONE:
			return Object.assign({},state,{carouselAnimation:false})
		case MENU_BAR_SHOW:
			return Object.assign({},state,{menuShow:action.bool})
		case PREVENT_BODY_SCROLL:
			return Object.assign({},state,{preventBodyScroll:action.bool})
		case NO_JOB_OPENING_FORM:
			return Object.assign({},state,{noJobOpeningForm:action.bool})
		case SET_PANEL_ONE_DATA:
			return Object.assign({},state,{panelOneData:action.panelOneData})
		case SET_DEFAULT_PANEL_DATA:
			return Object.assign({},state,{defaultData:action.defaultData})
		case SET_PANEL_TWO_DATA:
			return Object.assign({},state,{panelTwoData:action.panelTwoData})
		case SET_PANEL_THREE_DATA:
			return Object.assign({},state,{panelThreeData:action.panelThreeData})
		case SET_FOOTER_HEIGHT:
			return Object.assign({},state,{footerHeight:action.footerHeight})
		case MENU_CURSOR_IMAGE:
			return Object.assign({},state,{menuCursorImage:action.menuCursorImage})
		case MENU_CURSOR_OPACITY:
			return Object.assign({},state,{menuCursorOpacity:action.bool})
		case PAGE_TRANSITIONING:
			return Object.assign({},state,{pageTransitioning:action.bool})
		default:
			return state;
	}
}
function selectionReducer(state={gettingSelection:true,selection:null,loggedIn:false},action){
	switch(action.type){
		case GETTING_SELECTION:
			return Object.assign({},state,{gettingSelection:action.bool})
		default:
			return state;
	}

}
const combinedReducer = combineReducers({
	common:commonReducer,
	selection:selectionReducer
});
export default combinedReducer;
