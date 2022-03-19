import Header from '../main/components/Header';
import Footer from '../main/components/Footer';
import {toast} from 'react-toastify'
import { AppContextProvider } from '../AppContext';
import '../styles/globals.scss'



toast.configure()

function MyApp({ Component, pageProps }) {

  if (Component.withoutHeader === true) {
    return (
      <AppContextProvider>
        <Component {...pageProps} />
    </AppContextProvider>
    )
  }

  return (
    
    <AppContextProvider>
      <Header />
        <Component {...pageProps} />
      <Footer/>
    </AppContextProvider>
  )
}

export default MyApp
