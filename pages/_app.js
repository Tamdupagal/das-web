import Header from '../main/components/Header'
import Footer from '../main/components/Footer'
import { toast } from 'react-toastify'
import { AppContext, AppContextProvider } from '../AppContext'
import { useContext, useEffect } from 'react'
import Form from '../main/components/Form'
import ReactLoading from 'react-loading'
import { useRouter } from 'next/router'
import TagManager from 'react-gtm-module';
import '../styles/globals.scss'

//this is commit 

toast.configure()

const FormWrapper = function () {
  const { toggleLoginForm } = useContext(AppContext)

  return toggleLoginForm ? (
    <div className='modal'>
      <Form />{' '}
    </div>
  ) : null
}

const LoaderWrapper = function () {
  const {
    state: { isLoading },
  } = useContext(AppContext)

  return isLoading ? (
    <div className='loader'>
      <ReactLoading type='bars' height={70} width={70} color='#005778' />
    </div>
  ) : null
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

 /* A hook that is used to track page views. */
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('636396230770083') // facebookPixelId
        ReactPixel.pageView()
        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-SVC560TV66' });
}, []);
// GTM-WTLJF45
  if (Component.withoutLayout === true) {
    return (
      <AppContextProvider>
        <Component {...pageProps} />
        <LoaderWrapper />
      </AppContextProvider>
    )
  }

  return (
    <AppContextProvider>
    <Header />
    <Component {...pageProps} />
    <Footer />
    <FormWrapper />
    <LoaderWrapper />
    </AppContextProvider>
     
  )
}

export default MyApp
