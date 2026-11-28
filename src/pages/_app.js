import '../styles/global.scss'
// import "swiper/swiper-bundle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { wrapper }  from '../redux/store'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default wrapper.withRedux(MyApp)