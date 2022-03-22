import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { fetchLead } from '../main/action/action'
import {toast} from 'react-toastify'
import {useRouter} from 'next/router'

function Dashboard() {

    const { dispatch, state: { admin: token } } = useContext(AppContext)

    const router = useRouter()
    
    const handleLeads = async() => {
        await fetchLead(dispatch, token.token, toast)
        router.push('/leads')
    }

    return (
      <>
            <button onClick={handleLeads}>Show Leads</button>
            <button className="button" onClick={()=> router.push('/')}>Back</button>
      </>
  )
}


Dashboard.withoutLayout = true;

export default Dashboard