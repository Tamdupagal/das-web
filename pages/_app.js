import Header from '../main/components/Header';
import Footer from '../main/components/Footer';
import {toast} from 'react-toastify'
import {AppContext, AppContextProvider } from '../AppContext';
import '../styles/globals.scss'
import { useContext } from 'react';
import Form from '../main/components/Form';



toast.configure()


const FormWrapper = function () {

  
  const { toggleLoginForm } = useContext(AppContext)
  
  console.log(toggleLoginForm)
  
  return (
     toggleLoginForm ? <div className='modal'><Form /> </div> : null  
  )

}


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
      <Footer />
      <FormWrapper/>
    </AppContextProvider>
  )
}

export default MyApp
