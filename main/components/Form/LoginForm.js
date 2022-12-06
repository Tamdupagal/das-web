import { useState } from "react";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import { MdEmail } from "react-icons/md";
import { HiKey } from "react-icons/hi";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg";
import Image from "next/image";


import logo from '../../assets/das.webp';
import { useContext } from "react";
import styles from '../Form.module.scss';
import { AppContext } from "../../../AppContext";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";




const LoginForm = ({ close }) => {
    const [details, setDetails] = useState([])
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    let router = useRouter();

    const onSubmit = async (data) => {
        const { email, password } = data;

        const res = await signIn("credentials", { email, password, redirect: false });
        // console.log(res);
        toast.success('Signin Successfully!')

        router.push('/info');

    };


    return (
        <div>

            <div className={styles.form__wrapper}>
                <div style={{ backgroundColor: "white" }}>
                    <CgClose className={styles.close__btn__cross} onClick={close} />
                    <div style={{ paddingTop: "70px", marginLeft: "16px" }}>
                        <h2 style={{ fontSize: "40px", color: "#005778" }}>Welcome Back !</h2>
                        <h4 style={{ fontSize: "30px", color: "#FD7E14", marginTop: "5px" }}>Login</h4>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.feedback__form}>

                        <div className={styles.form__area}>
                            <div className={styles.form__input}>
                                <label htmlFor="email">Email</label>
                                <div tabIndex={0} className={styles.input__box}>

                                    <input
                                        type="email" name="email"   {...register("email")} value={details.email} onChange={(e) => setDetails(prev => ({ ...prev, email: e.target.value }))} required />
                                </div>
                            </div>

                            <div className={styles.form__input}>
                                <label htmlFor="password">password</label>
                                <div tabIndex={0} className={styles.input__box}>
                                    <input type="password" name="password"  {...register("password")} value={details.password} onChange={(e) => setDetails(prev => ({ ...prev, password: e.target.value }))} required />
                                </div>
                            </div>

                        </div>
                        <div className={styles.button__wrapper}>
                            <button type="submit" className={styles.form__submit__btn}>Submit</button>
                        </div>
                    </form>
                </div>

                <div className={styles.overlay__panel} >

                    <figure className={styles.logo}>
                        <Image src={logo} objectFit="fill" alt="Digital Aided School" />
                    </figure>
                    {/* <h1 className={styles.panel__title}>Digital Aided School</h1> */}
                    {/* <CgClose className={styles.close__btn__cross}  /> */}
                </div>
            </div>
        </div>
    );
};

export default LoginForm;