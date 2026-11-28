export const SET_WINDOW = "SET_WINDOW";
export const SET_WINDOW_2 = "SET_WINDOW_2";
export const SET_MODE = "SET_MODE";
export const NAV_SHOW = "NAV_SHOW";
export const HERO_IMAGE_LOADED = "HERO_IMAGE_LOADED";
export const CAROUSEL_ANIMATION_DONE="CAROUSEL_ANIMATION_DONE"
export const GETTING_SELECTION = "GETTING_SELECTION";
export const MENU_BAR_SHOW = "MENU_BAR_SHOW";
export const PREVENT_BODY_SCROLL = "PREVENT_BODY_SCROLL";
export const NO_JOB_OPENING_FORM = "NO_JOB_OPENING_FORM";
export const SET_DEFAULT_PANEL_DATA = "SET_DEFAULT_PANEL_DATA";
export const SET_PANEL_ONE_DATA = "SET_PANEL_ONE_DATA";
export const SET_PANEL_TWO_DATA = "SET_PANEL_TWO_DATA";
export const SET_PANEL_THREE_DATA = "SET_PANEL_THREE_DATA";
export const SET_FOOTER_HEIGHT = "SET_FOOTER_HEIGHT";
export const MENU_CURSOR_IMAGE = "MENU_CURSOR_IMAGE";
export const MENU_CURSOR_OPACITY = "MENU_CURSOR_OPACITY";
export const PAGE_TRANSITIONING = "PAGE_TRANSITIONING";


export function setPageTransitioning(bool){
  return{
    type:PAGE_TRANSITIONING,
    bool
  }
}
export function setCollectionCarouselAnimationDone(bool){
  return{
    type:CAROUSEL_ANIMATION_DONE,
    bool
  }
}
export function setMenuCursorOpacity(bool){
  return{
    type:MENU_CURSOR_OPACITY,
    bool
  }
}
export function setMenuCursorImage(menuCursorImage){
  return{
    type:MENU_CURSOR_IMAGE,
    menuCursorImage
  }
}
export function setFooterHeight(footerHeight){
  return{
    type:SET_FOOTER_HEIGHT,
    footerHeight
  }
}
export function setPanelOneData(panelOneData){
  return{
    type:SET_PANEL_ONE_DATA,
    panelOneData
  }
}
export function setDefaultPanelData(defaultData){
  return{
    type:SET_DEFAULT_PANEL_DATA,
    defaultData
  }
}
export function setPanelTwoData(panelTwoData){
  return{
    type:SET_PANEL_TWO_DATA,
    panelTwoData
  }
}
export function setPanelThreeData(panelThreeData){
  return{
    type:SET_PANEL_THREE_DATA,
    panelThreeData
  }
}
export function setOpenNoJobOpeningsForm(bool){
  return{
    type:NO_JOB_OPENING_FORM,
    bool
  }
}
export function setPreventBodyScroll(bool) {
  return {
    type: PREVENT_BODY_SCROLL,
    bool,
  };
}
export function setMenuBarShow(bool) {
  return {
    type: MENU_BAR_SHOW,
    bool,
  };
}
export function setSiteReady(bool) {
  return {
    type: SITE_READY,
    bool,
  };
}
export function setWindow(windowWidth, windowHeight) {
  return {
    type: SET_WINDOW,
    windowWidth,
    windowHeight,
  };
}
export function setWindow2(windowWidth2, windowHeight2) {
  return {
    type: SET_WINDOW_2,
    windowWidth2,
    windowHeight2,
  };
}
export function setMode(mode) {
  return {
    type: SET_MODE,
    mode,
  };
}
export function setNavShow(bool) {
  return {
    type: NAV_SHOW,
    bool,
  };
}
export function setHeroImageLoaded(bool) {
  return {
    type: HERO_IMAGE_LOADED,
    bool,
  };
}
