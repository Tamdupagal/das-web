
import { useContext } from 'react'
import React from 'react'
import styles from './Banner.module.scss'
import { GoPrimitiveDot as Dot } from 'react-icons/go'
import { AppContext } from '../AppContext'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import { borderRadius } from '@mui/system'


const FadeIn = {
  initial: {
    y: "5rem",
    opacity: 0,
  },
  vissible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bouces: 0.25,
      delay: 0.2,
    },
  },
};

function Banner({ data, checkBanner }) {
  const { setToggleLoginForm, setIsAdmin } = useContext(AppContext)
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen( false );
    const router = useRouter();
    const [details, setDetails] = useState([]);
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      const { name, email, phoneNumber, qualification } = data;

      //post lead form to server
      const url = `https://back-das-web-server.onrender.com/api/new-register`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setDetails(result);
          toast.success("Submitted Successfully!");
          router.push("/thankyou");
      
        });
    };


  return (
    <div className={styles.topcont}>
      <section className={styles.container} id="home">
        <div className={styles.content__box1}>
          <h2
            style={{
              textAlign: "left",
              fontSize: "15px",
              color: "#005778",
              border: "2px solid #fd7e14",
              borderRadius: "25px",
              padding: "10px",
            }}
          >
            6 Month Program
          </h2>
          <h1 className={styles.heading}>Full-Stack Game Development Course</h1>
          <div className={styles.desc}>
            <p
              style={{
                textAlign: "left",
                fontSize: "2.6rem",
                color: "#005778",
                paddingTop: ".4rem",
                fontWeight: "bold",
              }}
            >
              with Guaranteed Placement
            </p>
            <p
              style={{
                textAlign: "left",
                fontSize: "2.3rem",
                fontWeight: "600",
                color: "#005778",
                paddingBottom: "1.5rem",
                paddingTop: "1.5rem",
              }}
            >
              Average ₹3 LPA salary
            </p>
            <p
              style={{
                textAlign: "left",
                fontSize: "2.3rem",
                fontWeight: "600",
                color: "#005778",
                paddingBottom: "2rem",
                paddingTop: "2rem",
              }}
            >
              Admissions close on February 1st.
            </p>
            <p
              style={{
                textAlign: "left",
                fontSize: "2.8rem",
                color: "#005778",
                paddingBottom: "2rem",
                fontWeight: "600",
                paddingTop: "2rem",
              }}
            >
              Registration Charge ₹20,00/- <strike>30,000/- </strike>
            </p>
            <p
              style={{
                textAlign: "left",
                fontSize: "2rem",
                color: "#005778",
                paddingBottom: "1rem",
                fontWeight: "500",
                paddingTop: "1rem",
                paddingLeft: "10px",
                borderLeft: "4px solid #fd7e14",
              }}
            >
              100% refund if not hired
            </p>
            <p
              style={{
                textAlign: "left",
                fontSize: "2rem",
                fontWeight: "500",
                color: "#005778",
                paddingLeft: "10px",
                borderLeft: "4px solid #fd7e14",
              }}
            >
              Study first, then pay once you are placed.
            </p>
            <p
              style={{ textAlign: "left", fontSize: "16px", color: "#005778" }}
            ></p>
          </div>
        </div>

        <div className={styles.content__box}>
          <form className={styles.formL} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__area}>
              <div className={styles.form__input}>
                <label htmlFor="username">Name</label>
                <div tabIndex={0} className={styles.input__box}>
                  <input
                    type="username"
                    name="username"
                    {...register("name")}
                    value={details.username}
                    onChange={(e) =>
                      setDetails((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
                    required
                  />
                  {/* <p className={styles.login__error}>{errors.username?.message}</p> */}
                </div>
              </div>
              <div className={styles.form__input}>
                <label htmlFor="email">Email</label>
                <div tabIndex={0} className={styles.input__box}>
                  <input
                    type="email"
                    name="email"
                    {...register("email")}
                    value={details.email}
                    onChange={(e) =>
                      setDetails((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                  />
                  {/* <p className={styles.login__error}>{errors.email?.message}</p> */}
                </div>
              </div>
              <div className={styles.form__input}>
                <label htmlFor="number">Number</label>
                <div tabIndex={0} className={styles.input__box}>
                  <input
                    type="tel"
                    name="number"
                    {...register("phoneNumber")}
                    value={details.number}
                    onChange={(e) =>
                      setDetails((prev) => ({
                        ...prev,
                        number: e.target.value,
                      }))
                    }
                    required
                  />
                  {/* <p className={styles.login__error}>{errors.number?.message}</p> */}
                </div>
              </div>
              <div className={styles.form__input}>
                <label htmlFor="qualification">Qualification</label>
                <div tabIndex={0} className={styles.input__box}>
                  <select
                    {...register("qualification")}
                    defaultValue={details.qualification}
                    value={details.qualification}
                    onChange={(e) =>
                      setDetails((prev) => ({
                        ...prev,
                        qualification: e.target.value,
                      }))
                    }
                    className={styles.select}
                    name="qualification"
                    id="qualification"
                    required
                  >
                    <option value="10">10th</option>
                    <option value="12">12th</option>
                    <option value="graduation">Graduation</option>
                  </select>
                  {/* <p className={styles.login__error}>{errors.qualification?.message}</p> */}
                </div>
              </div>
              <div className={styles.button__wrapper}>
                <button type="submit" className={styles.form__submit__btn}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default Banner;


