import React from 'react'
import {useRouter} from 'next/router'

function Dashboard() {

  const router = useRouter()
    
    return (
      <>
            <button onClick={()=> router.push('Dashboard/leads')}>Show Leads</button>
            <button className="button" onClick={()=> router.push('/')}>Back</button>
      </>
  )
}


Dashboard.withoutLayout = true;

export default Dashboard