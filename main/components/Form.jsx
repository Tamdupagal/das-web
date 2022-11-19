import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { LOGIN_FORM_SCHEMA } from '../helpers/Schema';
import { toast} from 'react-toastify'
import Notification from '../components/Notification'
import styles from './Form.module.scss';
import { AppContext } from '../../AppContext';
import { leadForm, adminLogin, fetchLead, otpVerify} from '../action/action';
import {FaUserAlt} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ImPhone } from 'react-icons/im' 
import { GiWhiteBook } from 'react-icons/gi' 
import { RiLockPasswordFill } from 'react-icons/ri' 
import { HiKey } from 'react-icons/hi' 
import logo from '../assets/das.webp';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { CgClose } from 'react-icons/cg';
import HubspotForm from "react-hubspot-form";


const HubSpot = (props) => {

    return (
      <div>

      <div style={{width: '380px', height:'600px',padding: '10px'}}>
      <h1 style={{padding: '2px' ,fontSize:'20px',textAlign: 'center',color: '#FD7E14'}}> DIGITAL AIDED SCHOOL</h1>
      <h1 style={{padding: '2px' ,fontSize:'14px',textAlign: 'center',color: '#005778'}}> Game Development & Web3 Courses</h1>
   
      <HubspotForm 
      portalId='22780892'
      formId='a4d8ce7b-fd88-402e-a36c-7c38c6dc65b2'
      onSubmit={() => console.log('Submit!')}
      onReady={(form) => console.log('Form ready!')}
      loading={<div style={{fontSize:'20px',textAlign:'center'}}>Loading...</div>}
      />
      </div>
      </div>
    )
  }




function Form() {
    const {setToggleLoginForm, toggleLoginForm} = useContext(AppContext)
    
    const router = useRouter();

    const { dispatch, isAdmin } = useContext(AppContext)
    

    const [form, setOtp] = useState({
        dataSubmitted: false,
        otp: "",
        userName : ""
    })

    const [details, setDetails] = useState({
        username: "",
        password: "",
        email : "",
        number: "",
        qualification : "",
    })
    
    const { register, handleSubmit, formState : {errors}} = useForm({
        resolver : yupResolver(LOGIN_FORM_SCHEMA(isAdmin))
    })
    
    const handleFormError = function (error) {
        if (!toggleLoginForm) return;
            toast.warn(<Notification>{error[Object.keys(error)[0]].message}</Notification>, {
                    style: {
                    backgroundColor: '#fffef8',
            }
        })
    }

    
    const handleLeadsForm = async () => {
        if (form.dataSubmitted) {
            await otpVerify(dispatch, { userName: form.userName, otp: form.otp }, toast)
            setToggleLoginForm(false)
            setOtp(prev => ({ ...prev, dataSubmitted: false }))
            return;
        }
        if (isAdmin) {

            const { email, password } = details
            const adminData = {email , password}

            await adminLogin(dispatch, adminData, router, toast);
            setToggleLoginForm(false)
            return;

        }
        if(!details.qualification) {
            toast.warn(<Notification>Qualification is required!</Notification>, {
                    style: {
                    backgroundColor: '#fffef8',
                }
            })
            return
        }




        const data = {
            userName: details.username,
            email: details.email,
            phoneNumber: details.number,
            qualification : details.qualification
        }

        leadForm(dispatch, data, setOtp, toast)

    }

    return (
        <div className={styles.form__wrapper}>
        <form className={styles.feedback__form}>
                <CgClose onClick={()=>setToggleLoginForm(false)} className={styles.close__btn__cross__form}/>
            <HubSpot/>
        </form>
            <div className={styles.overlay__panel} >
                <figure className={styles.logo}>
                    <Image src={logo} objectFit="fill"  alt="Digital Aided School" /> 
                </figure>
                <h1 className={styles.panel__title}>Game Development </h1>
                <h1 className={styles.panel__title}>& </h1>
                <h1 className={styles.panel__title}>Web3 Courses</h1>
              
                <CgClose onClick={()=>setToggleLoginForm(false)} className={styles.close__btn__cross}/>
            </div>
        </div>
        )
}

export default Form
