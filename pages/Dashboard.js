import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { fetchLead } from '../main/action/action'

function Dashboard() {

    const {dispatch} = useContext(AppContext)

  return (
    <button onClick={()=> fetchLead(dispatch, token, toast)}>Show Leads</button>
  )
}


Dashboard.withLayout = true;

export default Dashboard