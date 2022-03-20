import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { LOGIN_FORM_SCHEMA } from '../helpers/Schema';
import { toast} from 'react-toastify'
import Notification from '../components/Notification'
import styles from './Form.module.scss';
import { AppContext } from '../../AppContext';
import { leadForm, adminLogin, fetchLead} from '../action/action';
import {FaUserAlt} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ImPhone } from 'react-icons/im' 
import { HiKey } from 'react-icons/hi' 
import logo from '../assets/das.webp';
import Image from 'next/image'
import withLoader from '../../HOC/withLoader';
import { useRouter } from 'next/router';
import {CgClose} from 'react-icons/cg';




function Form() {

    const { toggleLoginForm, setToggleLoginForm} = useContext(AppContext)
    
    const router = useRouter();

    const {dispatch, isAdmin} = useContext(AppContext)

    const [details, setDetails] = useState({
        username: "",
        password: "",
        email : "",
        number : "",
        course :[]
        
    })
    const handleCheckBox = function (e) {
        const target = e.target;
        const course = target.getAttribute("data-item")
        if (target.checked) {
            setDetails(prev => ({ ...prev, course : [...prev.course, course] }))
        } else {
            let filter = details.course.filter(c => c !== course)
            setDetails(prev => ({ ...prev, course : filter }))
        }
    }
    
    const { register, handleSubmit} = useForm({
        resolver : yupResolver(LOGIN_FORM_SCHEMA(isAdmin))
    })

    const handleCloseForm = function () {
        setToggleLoginForm(false);
    }
    
    
    const handleFormError = function (error) {
        if(!toggleLoginForm) return;
        Object.keys(error).forEach(field => {
            toast.warn(<Notification>{error[field].message}</Notification>, {
                    style: {
                    backgroundColor: '#fffef8',
                }
            })
        })
    }

    
    const handleLeadsForm = async() => {
        if (isAdmin) {

            const { email, password } = details
            const adminData = {email , password}

            await adminLogin(dispatch, adminData, router, toast);
            return;
        }


        if (!details.course.length ) {
            
            toast.warn(<Notification>Choose atleast one course!</Notification>, {
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
            interests : details.course
        }




        leadForm(dispatch, data, toast)
    }

    return (
        <div className={styles.form__wrapper}>
        <form
            onSubmit={handleSubmit(handleLeadsForm, handleFormError)}
                className={styles.feedback__form}>
                    <div className={styles.form__area}>
                    {!isAdmin && <div className={styles.form__input}>
                        <label htmlFor="username">Name</label>
                        <div tabIndex={0} className={styles.input__box}>
                            <FaUserAlt className={styles.icon} />
                            <input
                                type="username" name="username" placeholder='Name' {...register("username")} value={details.username} onChange={(e) => setDetails(prev => ({ ...prev, username: e.target.value }))} />
                        </div>
                    </div>}
                    <div className={styles.form__input}>
                        <label htmlFor="email">Email</label>
                        <div tabIndex={0} className={styles.input__box}>
                            <MdEmail className={styles.icon} />
                            <input
                                type="email" name="email" placeholder='Email'  {...register("email")} value={details.email} onChange={(e) => setDetails(prev => ({ ...prev, email: e.target.value }))} />
                        </div>
                    </div>
                    {isAdmin && <div className={styles.form__input}>
                            <label htmlFor="password">password</label>
                            <div tabIndex={0} className={styles.input__box}>
                                <HiKey className={styles.icon} />
                                <input
                                    type="password" name="password" placeholder='Password' {...register("password")} value={details.password} onChange={(e) => setDetails(prev => ({ ...prev, password: e.target.value }))} />
                            </div>
                                
                    </div>}
                        {!isAdmin && <div className={styles.form__input}>
                            <label htmlFor="number">Number</label>
                            <div tabIndex={0} className={styles.input__box}>
                                <ImPhone className={styles.icon} />
                                <input type="tel" name="number" placeholder='Number' {...register("number")} value={details.number} onChange={(e) => setDetails(prev => ({ ...prev, number: e.target.value }))} />
                            </div>
                        </div>}
                        {!isAdmin && <div className={styles.checkbox_container}>
                            <label htmlFor="email">Available Courses</label>
                            <div className={styles.checkbox}>
                            <input  onClick={handleCheckBox} data-item={'Digital Marketing'} type="checkbox"/>
                                <p>Digital Marketing</p>
                            </div>
                            <div className={styles.checkbox}>
                            <input onClick={handleCheckBox} data-item={'Web Development'} type="checkbox"/>
                                <p>Web Development</p>
                            </div>
                        </div>}
            </div>
            <div className={styles.button__wrapper}>
                <button type="submit" className={styles.form__submit__btn}>Submit</button>
                <button onClick={handleCloseForm} type="button" className={styles.close__btn}>back</button>
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

export default withLoader({ Component : Form})
