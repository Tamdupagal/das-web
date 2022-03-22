import React, { useContext } from 'react'
import { AppContext } from '../AppContext';
import Table from '../main/components/Table'
import {useRouter} from 'next/router' 


const COLUMNS = [
    {
        Header: 'Username',
        accessor: 'userName',
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
        Header: 'Qualification',
        accessor: 'qualification',
    },
]

function Leads() {

    const { state: { leads: data } } = useContext(AppContext)

    const router = useRouter()

    

    if (!data?.data) return <button className="button" onClick={()=> router.push('/Dashboard')}>Back</button>

    const tableData = data.data.map(item => {
        return ({
            userName : item.userName,
            email : item.email,
            qualification : item.qualification,
            phoneNumber : item.phoneNumber,
        })
    })
        
        return (
          <div>
                <Table data={tableData} column={COLUMNS} />
                <button className="button" onClick={()=> router.push('/Dashboard')}>Back</button>
          </div>
        )

}


Leads.withoutLayout = true;

export default  Leads