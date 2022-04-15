import axios from '../../axios'
import Notification from '../components/Notification'
import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, FETCH_LEADS_FAIL, FETCH_LEADS_REQUEST, FETCH_LEADS_SUCCESS, LEAD_FORM_FAIL, LEAD_FORM_REQUEST, LEAD_FORM_SUCCESS, OTP_FAIL, OTP_REQUEST, OTP_SUCCESS } from './actionType'





export const otpVerify = async (dispatch, otpData, toast) => {
        dispatch({ type: OTP_REQUEST })
            try {
                const { data } = await axios.post(`User/OTPVerify`, otpData)
                console.log("data", data)
                dispatch({ type: OTP_SUCCESS, payload: data })
                toast.success(<Notification>{data.message}</Notification>)
            } catch (err) {
                console.log("message ", err.messsdfsdfsdfsdfage)
                dispatch({ type: OTP_FAIL })
                toast.error(<Notification>{err.message}</Notification>)
        }        
}




export const leadForm = async (dispatch, formData, setOtp, toast) => {
        dispatch({ type: LEAD_FORM_REQUEST })
            try {
                const { data } = await axios.post(`User/LeadSave`, formData)
                if (data.status == 400) {
                    dispatch({ type: LEAD_FORM_FAIL })
                    toast.error(<Notification>{data.message}</Notification>)
                    return;
                }
                console.log(data)
                dispatch({ type: LEAD_FORM_SUCCESS, payload: data })
                setOtp(prev=> ({...prev, userName : data.userName, dataSubmitted : true}))
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
        const { auth, data, status, token = null } = response.data
                 if (!token) {
                    dispatch({ type: ADMIN_LOGIN_FAIL })
                    toast.error(<Notification>{data}</Notification>)
                    return
        }
                sessionStorage.setItem('token', token)
                dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: { auth, token } })
                toast.success(<Notification>Signed in Successfully!</Notification>)
                router.push("/Dashboard")
                
    } catch (err) {
        dispatch({ type: ADMIN_LOGIN_FAIL })
        toast.error(<Notification>{err.data || err.response.data.message}</Notification>)
        }        
}

export const fetchLead = async (dispatch, token, toast) => {
        dispatch({ type: FETCH_LEADS_REQUEST })
    try {
        const response = await axios.get(`Admin/Dashboard/Leads`, { headers: { Authorization: token } })
        if (response.data.status != 200) throw response.data.message
            dispatch({ type: FETCH_LEADS_SUCCESS, payload : response.data.leads })
    } catch (err) {
        console.log(err)
            dispatch({ type: FETCH_LEADS_FAIL })
            toast.error(<Notification>{err.data || err.response.data.message || err}</Notification>)
        }        
}

