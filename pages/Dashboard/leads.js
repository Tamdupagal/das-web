import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext';
import Table from '../../main/components/Table'
import {MdModeEdit} from 'react-icons/md'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {useRouter} from 'next/router' 
import { fetchLead } from '../../main/action/action';
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
                Header: 'Disposition',
                accessor: 'disposition',
                Cell: props => {
                    return (
                        <select   name="qualification" id="qualification">
                            <option value="10">Ringing</option>
                            <option value="12">Call back</option>
                            <option value="graduation">Not interested</option>
                            <option value="graduation">Sale</option>
                        </select>
                    )
                }
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
]
        



const getTableData = (data) => {

    const filteredData = data.map(item => {
            return ({
                    userName : item.userName,
                    email : item.email,
                    qualification : item.qualification,
                    phoneNumber : item.phoneNumber,
        })
    })
        
    return filteredData
}


function Leads() {

    const { dispatch, state: { admin: { token }, leads: { data } } } = useContext(AppContext)
       
    const router = useRouter()


    
    useEffect(async () => {
        if(data?.length) return
        fetchLead(dispatch, token, toast)
    }, [])

            
    return (
        data?.length ?
            <div>
                <Table data={getTableData(data)} column={col} />
                <button className="button" onClick={()=> router.push('/Dashboard')}>Back</button>
          </div> : null
        )

}


Leads.withoutLayout = true;

export default  Leads