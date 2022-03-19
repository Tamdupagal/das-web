import { useState } from 'react'
import { useRouter } from 'next/router'
import baseUrl from '../helpers/Baseurl'
import cookie from 'js-cookie'

function AdminLogin (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrormessage] = useState(false)
  const router = useRouter()

  async function submitForm (e) {
    e.preventDefault();

    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({
      email: username,
      password: password
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    const login = await fetch(`${baseUrl}/api/adminlogin`, requestOptions)
    if (login.status == 401) {
      setErrormessage(true)
    }

    const loginResponse = await login.json()
    if (loginResponse.error) {
      M.toast({ html: loginResponse.error, classes: 'red' })
    } else {
      console.log(loginResponse)
      cookie.set('token', loginResponse.token)
      cookie.set('user', loginResponse.admin)
      //  router.push('/account')
    }
    props.setTrigger(true)

    // setCookie(null,'jwt', loginResponse.jwt,{
    //   maxAge: 30 * 24 * 60 *60,
    //   path: '/'
    // })
    // Router.push('/adminDashboard');
    // const withAuth = () => {
    //   return (props) => {
    //     // checks whether we are on client / browser or server.
    //     if (typeof window !== "undefined") {
    //       const accessToken = localStorage.getItem("accessToken"); //Fetch the token
    //       // If there is no access token we redirect to "/" page.
    //       if (accessToken) {
    //         props.setTrigger(true)
    //         return null;
    //       }s
    //       // If this is an accessToken we just render the component that was passed with all its props
    //       return null;
    //     }
    //     // If we are on server, return null
    //     return null;
    //   };
    // };
    // withAuth();
  }

  return (
    <div className='outer_div1'>
      <div className='form_wrapper'>
        <form className='form_cont' onSubmit={submitForm}>
          <label htmlFor='username' className='label'>
            Username:
          </label>
          <input
            type='text'
            id='username'
            name='email'
            className='inp_i'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <br />
          <label htmlFor='lname' className='label'>
            Password:
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='inp_i'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <a href='' className='forgot_password'>
            Forgot Password?
          </a>
          {errorMessage ? (
            <p id='errormsg'> Please enter correct details ! </p>
          ) : (
            ''
          )}
          <button type='submit' className='btn' id='submit'>
            Log In
          </button>
        </form>
      </div>
      {/* <Display trigger={display} setTrigger={setDisplay}/>  */}
    </div>
  )
}

export default AdminLogin
