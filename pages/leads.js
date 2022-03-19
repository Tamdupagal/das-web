import React, { useContext } from 'react'
import { AppContext } from '../AppContext';
import withLoader from '../HOC/withLoader';
import Table from '../main/components/Table'



const COLUMNS = [
    {
        Header: 'Username',
        accessor: 'username',
    },
    {
        Header: 'Number',
        accessor: 'phoneNumber',
    },
    {
        Header: 'Email',
        accessor: 'email',
    },
    {
        Header: 'Interests',
        accessor: 'interests',
    },
]

function leads() {

    const { state: { leads: data } } = useContext(AppContext)

    
    
    console.log("Inside leads -----> ", data)
    
        return (
          <div>
                <Table data={data} columns={COLUMNS}/>
          </div>
        )

}


leads.withoutHeader = true;

export default withLoader({ Component: leads })