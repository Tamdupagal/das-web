import axios from '../../axios'
import Notification from '../components/Notification'
import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, FETCH_LEADS_FAIL, FETCH_LEADS_REQUEST, FETCH_LEADS_SUCCESS, LEAD_FORM_FAIL, LEAD_FORM_REQUEST, LEAD_FORM_SUCCESS } from './actionType'


export const leadForm = async (dispatch, formData, toast) => {
    console.log("toast ---> ", toast)
        dispatch({ type: LEAD_FORM_REQUEST })
            try {
                const { data } = await axios.post(`User/LeadSave`, formData)
                dispatch({ type: LEAD_FORM_SUCCESS, payload: data })
                toast.success(<Notification>{data.message}</Notification>)
            } catch (err) {
                dispatch({ type: LEAD_FORM_FAIL })
                toast.error(<Notification>{err.message}</Notification>)
        }        
}

export const adminLogin = async (dispatch, formData,router, toast) => {
        dispatch({ type: ADMIN_LOGIN_REQUEST })
    try {
                const response = await axios.post(`Admin/login`, formData)
        const { auth, data, token = null} = response.data
                if (!token) {
                    dispatch({ type: ADMIN_LOGIN_FAIL })
                    toast.error(<Notification>{data}</Notification>)
                    return
                }
                dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: { auth, token } })
                toast.success(<Notification>Signed in Successfully!</Notification>)
                fetchLead(dispatch, token, toast);
                router.push("/leads")
                
    } catch (err) {
        dispatch({ type: ADMIN_LOGIN_FAIL })
        if (err instanceof NetworkError) {
            toast.error(<Notification>{err.response.data.message}</Notification>)
            return;
        }
        toast.error(<Notification>{err.data}</Notification>)
        }        
}

export const fetchLead = async (dispatch, token, toast) => {
        dispatch({ type: FETCH_LEADS_REQUEST })
    try {
        const { data } = await axios.get(`Admin/Dashboard/leads`, {
                    headers: {
                        authToken: token
                    }
        })
                dispatch({ type: FETCH_LEADS_SUCCESS, payload : data })
            } catch (err) {
                dispatch({ type: FETCH_LEADS_FAIL })
                toast.error(<Notification>{err.data}</Notification>)
        }        
}