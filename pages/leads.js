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

function Leads() {

    const { state: { leads: data } } = useContext(AppContext)

    
    
    
        return (
          <div>
                <Table data={data} columns={COLUMNS}/>
          </div>
        )

}


Leads.withoutHeader = true;

export default withLoader({ Component: Leads })