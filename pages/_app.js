import '../styles/globals.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../main/components/Header';
import Footer from '../main/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <><Header />
        <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
