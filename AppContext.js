// import jwt_decode from "jwt-decode";
import React, {createContext,useReducer, useState} from "react";
import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, FETCH_LEADS_FAIL, FETCH_LEADS_REQUEST, FETCH_LEADS_SUCCESS, LEAD_FORM_FAIL, LEAD_FORM_REQUEST, LEAD_FORM_SUCCESS } from "./main/action/actionType";
const AppContext = createContext({});


const initialState = {
    lead: {
        data: null,
        isLoading: false,
    },
    admin: {
        token: null,
        auth : false,
        isLoading: false,
    },
    leads: {
        data: null,
        isLoading: false,
    },
}

const reducer = (state, {type, payload})=>{
    console.log(type);
    switch (type){
        case LEAD_FORM_REQUEST:
            return {...state, lead : {...state.lead, isLoading : true}}
        case LEAD_FORM_SUCCESS:
            return { ...state, lead: { ...state.lead,  data : payload, isLoading: false } }
        case LEAD_FORM_FAIL:
            return { ...state, lead: { ...state.lead, isLoading: false } }
        
        
        case ADMIN_LOGIN_REQUEST:
            return {...state, admin : {...state.admin, isLoading : true}}
        case ADMIN_LOGIN_SUCCESS:
            return { ...state, admin: { ...state.admin, auth : payload.auth, token : payload.token, isLoading: false } }
        case ADMIN_LOGIN_FAIL:
            return { ...state, admin: { ...state.admin, isLoading: false } }
        
        
        case FETCH_LEADS_REQUEST:
            return {...state, leads : {...state.leads, isLoading : true}}
        case FETCH_LEADS_SUCCESS:
            return { ...state, leads: { ...state.leads, data : payload.data, isLoading: false } }
        case FETCH_LEADS_FAIL:
            return { ...state, leads: { ...state.leads, isLoading: false } }
        
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