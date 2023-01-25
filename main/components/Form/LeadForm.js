import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CgClose } from 'react-icons/cg';
import { FaUserAlt } from 'react-icons/fa';
import { GiWhiteBook } from 'react-icons/gi';
import { HiKey } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { useRouter } from 'next/router';

import logo from '../../assets/das.webp';
import styles from '../Form.module.scss';
import { AppContext } from "../../../AppContext";
import { toast } from 'react-toastify';

const LeadForm = ({ close }) => {
    // const { setToggleLoginForm, toggleLoginForm } = useContext(AppContext);
    const router = useRouter();
    const [details, setDetails] = useState([])
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        const { name, email, phoneNumber, qualification } = data;
        //post lead form to server
        const url = `https://back-das-web-server.onrender.com/api/new-register`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                setDetails(result);
                toast.success('Submitted Successfully!')
                router.push('/thankyou');
                reset();
                close();

            })
    };

    return (
        <div>
            <div className={styles.form__wrapper}>
                <div style={{ backgroundColor: "white", padding: "10px" }}>
                    {/* <CgClose className={styles.close__btn__cross} onClick={close} /> */}
                    <div style={{ paddingTop: "50px", marginLeft: "16px" }}>
                        <h2 style={{ fontSize: "27px", color: "#FD7E14" }}>DIGITAL AIDED SCHOOL</h2>
                        <h4 style={{ fontSize: "18px", color: "#005778", marginTop: "5px" }}>Game Development & Web3 Courses</h4>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.feedback__form}>
                        {/* <CgClose className={styles.close__btn__cross__form} /> */}

                        <div className={styles.form__area}>

                            <div className={styles.form__input}>
                                <label htmlFor="username">Name</label>
                                <div tabIndex={0} className={styles.input__box}>
                                    <input
                                        type="username" name="username"  {...register("name")} value={details.username} onChange={(e) => setDetails(prev => ({ ...prev, username: e.target.value }))} required />
                                    {/* <p className={styles.login__error}>{errors.username?.message}</p> */}
                                </div>
                            </div>
                            <div className={styles.form__input}>
                                <label htmlFor="email">Email</label>
                                <div tabIndex={0} className={styles.input__box}>
                                    <input
                                        type="email" name="email"   {...register("email")} value={details.email} onChange={(e) => setDetails(prev => ({ ...prev, email: e.target.value }))} required />
                                    {/* <p className={styles.login__error}>{errors.email?.message}</p> */}
                                </div>
                            </div>
                            <div className={styles.form__input}>
                                <label htmlFor="number">Number</label>
                                <div tabIndex={0} className={styles.input__box}>
                                    <input type="tel" name="number"  {...register("phoneNumber")} value={details.number} onChange={(e) => setDetails(prev => ({ ...prev, number: e.target.value }))} required />
                                    {/* <p className={styles.login__error}>{errors.number?.message}</p> */}
                                </div>
                            </div>
                            <div className={styles.form__input}>
                                <label htmlFor="qualification">Qualification</label>
                                <div tabIndex={0} className={styles.input__box}>
                                    <select {...register("qualification")} defaultValue={details.qualification} value={details.qualification} onChange={(e) => setDetails(prev => ({ ...prev, qualification: e.target.value }))} className={styles.select} name="qualification" id="qualification" required>
                                        <option value="10">10th</option>
                                        <option value="12">12th</option>
                                        <option value="graduation">Graduation</option>
                                    </select>
                                    {/* <p className={styles.login__error}>{errors.qualification?.message}</p> */}
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
                    {/* <CgClose className={styles.close__btn__cross} /> */}
                </div>
            </div>





        </div>
    );
};

export default LeadForm;