import Header from '../main/components/Header'
import Footer from '../main/components/Footer'
import { toast } from 'react-toastify'
import { AppContext, AppContextProvider } from '../AppContext'
import '../styles/globals.scss'
import { useContext, useEffect } from 'react'
import Form from '../main/components/Form'
import ReactLoading from 'react-loading'
import Script from 'next/script'

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
  if (Component.withoutLayout === true) {
    return (
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    )
  }

  return (
    <AppContextProvider>
      <Header />
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=UA-223710261-1'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-223710261-1');
        `}
      </Script>
      <Component {...pageProps} />
      <Footer />
      <FormWrapper />
      <LoaderWrapper />
    </AppContextProvider>
  )
}

export default MyApp
