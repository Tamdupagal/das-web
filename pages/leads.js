import React, { useContext, useEffect } from 'react'
import { AppContext } from '../AppContext';
import Table from '../main/components/Table'
import {MdModeEdit} from 'react-icons/md'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {useRouter} from 'next/router' 
import { fetchLead } from '../main/action/action';
import { toast } from 'react-toastify';




const col  = [
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
            {
                Header: 'Action',
                accessor: 'action',
                Cell: props => {
                    return (
                        <div className="button__wraper">
                            <button className='act__btn'><MdModeEdit className="button__icon" /> Edit</button>
                            <button className='act__btn'><RiDeleteBin6Fill className="button__icon" /></button>
                        </div>
                    )
                }
            },
            {
                // onChange={(e) => setDetails(prev => ({ ...prev, qualification: e.target.value }))}
                Header: 'Disposition',
                accessor: 'disposition',
                Cell: props => {
                    // console.log(props)
                    // console.log(props)
                    return (
                        <select  defaultValue="str" value="str"  name="qualification" id="qualification">
                            <option value="10">Ringing</option>
                            <option value="12">Call back</option>
                            <option value="graduation">Not interested</option>
                            <option value="graduation">Sale</option>
                        </select>
                    )
                }
            },
]
        



const getTableData = (data) => {
    if (!data) return []
    return data.map(item => {
                return ({
                    userName : item.userName,
                    email : item.email,
                    qualification : item.qualification,
                    phoneNumber : item.phoneNumber,
        })
    })
}


function Leads() {

    const { dispatch, state: { admin: token, leads : data} } = useContext(AppContext)
   
    const router = useRouter()
    
    useEffect(async () => {
        await fetchLead(dispatch, token.token, toast)
        console.log(data)
    }, [])

            
    return (
        data?.data?.length ?
            <div>
                <Table data={getTableData(data.data)} column={col} />
                <button className="button" onClick={()=> router.push('/Dashboard')}>Back</button>
          </div> : null
        )

}


Leads.withoutLayout = true;

export default  Leads