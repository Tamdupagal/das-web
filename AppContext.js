// import jwt_decode from "jwt-decode";
import React, {createContext,useReducer, useState} from "react";
import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, FETCH_LEADS_FAIL, FETCH_LEADS_REQUEST, FETCH_LEADS_SUCCESS, LEAD_FORM_FAIL, LEAD_FORM_REQUEST, LEAD_FORM_SUCCESS, OTP_FAIL, OTP_REQUEST, OTP_SUCCESS } from "./main/action/actionType";
const AppContext = createContext({});


const initialState = {
    isLoading: false,
    lead: {
        data: null,
    },
    admin: {
        token: null,
        auth : false,
    },
    leads: {
        data: null,
    },
    otp: {
        message: null,
    }
}

const reducer = (state, {type, payload})=>{
    console.log(type);
    switch (type){
        case LEAD_FORM_REQUEST:
            return {...state, isLoading : true}
        case LEAD_FORM_SUCCESS:
            return { ...state,  isLoading: false, lead: { ...state.lead,  data : payload } }
        case LEAD_FORM_FAIL:
            return { ...state, isLoading: false }
        
        
        case ADMIN_LOGIN_REQUEST:
            return {...state, isLoading : true}
        case ADMIN_LOGIN_SUCCESS:
            return { ...state, isLoading: false, admin: { ...state.admin, auth : payload.auth, token : payload.token} }
        case ADMIN_LOGIN_FAIL:
            return {...state, isLoading : false}
        
        
        case FETCH_LEADS_REQUEST:
            return {...state, isLoading : true}
        case FETCH_LEADS_SUCCESS:
            return { ...state, isLoading: false, leads: { ...state.leads, data : payload.data } }
        case FETCH_LEADS_FAIL:
            return {...state, isLoading : false}
        
        
        case OTP_REQUEST:
            return {...state, isLoading : true}
        case OTP_SUCCESS:
            return { ...state, isLoading: false, otp: { ...state.otp, message : payload.message} }
        case OTP_FAIL:
            return {...state, isLoading : false}
        
        default:
            return state;
    }
}
 
const AppContextProvider = ({ children }) => {
    
    const [isAdmin, setIsAdmin] = useState();
    const [toggleLoginForm, setToggleLoginForm] = useState(false)

    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch, isAdmin, setIsAdmin, toggleLoginForm, setToggleLoginForm}

    return(
        <AppContext.Provider value={{...value }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider};