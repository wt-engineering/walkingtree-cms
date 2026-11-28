import '../styles/global.scss'
// import "swiper/swiper-bundle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { wrapper }  from '../redux/store'
import { SiteContext } from '../lib/siteContext'
function MyApp({ Component, pageProps }) {
  return (
    <SiteContext.Provider value={pageProps?.site ?? null}>
      <Component {...pageProps} />
    </SiteContext.Provider>
  )
}
export default wrapper.withRedux(MyApp)