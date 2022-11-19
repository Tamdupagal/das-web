import React, { useContext } from 'react'
import {useRouter} from 'next/router'
import { fetchLead } from '../../main/action/action'
import { toast } from 'react-toastify'
import { AppContext } from '../../AppContext'

function Dashboard() {

    const router = useRouter()

    const {dispatch, state : { leads : {data}, admin : {token} }} = useContext(AppContext)
    

    const handleShowLeads = async () => {
        
        if (!data?.length) {
            await fetchLead(dispatch, token, toast)
        }
        router.push('/Dashboard/leads')
    }
    
    return (
      <>
            <button  onClick={handleShowLeads} >Show Leads</button>
            <button className="button" onClick={()=> router.push('/')}>Back</button>
      </>
  )
}


Dashboard.withoutLayout = true;

export default Dashboard