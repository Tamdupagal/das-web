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




const AdminForm = ({register, details, setDetails, errors}) => {
    return (
        <>
                <div className={styles.form__input}>
                        <label htmlFor="email">Email</label>
                        <div tabIndex={0} className={styles.input__box}>
                            <MdEmail className={styles.icon} />
                            <input
                                type="email" name="email"   {...register("email")} value={details.email} onChange={(e) => setDetails(prev => ({ ...prev, email: e.target.value }))} />
                            {/* <p className={styles.login__error}>{errors.email?.message}</p> */}
                        </div>
                </div>
                <div className={styles.form__input}>
                    <label htmlFor="password">password</label>
                    <div tabIndex={0} className={styles.input__box}>
                    <HiKey className={styles.icon} />
                    <input type="password" name="password"  {...register("password")} value={details.password} onChange={(e) => setDetails(prev => ({ ...prev, password: e.target.value }))} />
                    {/* <p className={styles.login__error}>{errors.password?.message}</p> */}
                </div>
            </div>
        </>
    )
}



const LeadForm = ({register, details, setDetails, errors}) => {
    return (
        <>
            <div className={styles.form__input}>
                        <label htmlFor="username">Name</label>
                        <div tabIndex={0} className={styles.input__box}>
                            <FaUserAlt className={styles.icon} />
                            <input
                                type="username" name="username"  {...register("username")} value={details.username} onChange={(e) => setDetails(prev => ({ ...prev, username: e.target.value }))} />
                            {/* <p className={styles.login__error}>{errors.username?.message}</p> */}
                        </div>
                    </div>
                    <div className={styles.form__input}>
                        <label htmlFor="email">Email</label>
                        <div tabIndex={0} className={styles.input__box}>
                            <MdEmail className={styles.icon} />
                            <input
                                type="email" name="email"   {...register("email")} value={details.email} onChange={(e) => setDetails(prev => ({ ...prev, email: e.target.value }))} />
                            {/* <p className={styles.login__error}>{errors.email?.message}</p> */}
                        </div>
                    </div>
                    <div className={styles.form__input}>
                            <label htmlFor="number">Number</label>
                            <div tabIndex={0} className={styles.input__box}>
                                <ImPhone className={styles.icon} />
                                <input type="tel" name="number"  {...register("number")} value={details.number} onChange={(e) => setDetails(prev => ({ ...prev, number: e.target.value }))} />
                                <p className={styles.login__error}>{errors.number?.message}</p>
                            </div>
                        </div>
                    <div className={styles.form__input}>
                            <label htmlFor="qualification">Qualification</label>
                            <div tabIndex={0} className={styles.input__box}>
                                <GiWhiteBook className={styles.icon} />
                            <select {...register("qualification")} defaultValue={details.qualification} value={details.qualification} onChange={(e) => setDetails(prev => ({ ...prev, qualification: e.target.value }))} className={styles.select} name="qualification" id="qualification">
                                    <option value="10">10th</option>
                                    <option value="12">12th</option>
                                    <option value="graduation">Graduation</option>
                            </select>
                              {/* <p className={styles.login__error}>{errors.qualification?.message}</p> */}
                            </div>
                    </div>
        </>
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
        <form
            onSubmit={handleSubmit(handleLeadsForm, handleFormError)}
                className={styles.feedback__form}>
                <CgClose onClick={()=>setToggleLoginForm(false)} className={styles.close__btn__cross__form}/>
            <div className={styles.form__area}>
                    {form.dataSubmitted ? 
                        <div className={styles.form__input}>
                            <label htmlFor="otp">OTP</label>
                            <div tabIndex={0} className={styles.input__box}>
                                <RiLockPasswordFill className={styles.icon} />
                            <input type="password" name="otp" value={form.otp} onChange={(e) => setOtp(prev =>
                                ({ ...prev, otp: e.target.value }))} />
                                {/* <p className={styles.login__error}>{errors.number?.message}</p> */}
                            </div>
                    </div> : 
                    <>
                        {isAdmin ?
                         <AdminForm register={register} details ={details} setDetails={setDetails} errors={errors}/> 
                            : 
                        <LeadForm register={register} details ={details} setDetails={setDetails} errors={errors}/> 
                        }   
                    </>
                     }
            </div>
            <div className={styles.button__wrapper}>
                <button type="submit" className={styles.form__submit__btn}>Submit</button>
            </div>
        </form>
            <div className={styles.overlay__panel} >
                <figure className={styles.logo}>
                    <Image src={logo} objectFit="fill"  alt="Digital Aided School" /> 
                </figure>
                <h1 className={styles.panel__title}>Digital Aided School</h1>
                <CgClose onClick={()=>setToggleLoginForm(false)} className={styles.close__btn__cross}/>
            </div>
        </div>
        )
}

export default Form
