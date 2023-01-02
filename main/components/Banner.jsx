import Typewriter from "typewriter-effect";
import styles from "./Banner.module.scss";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import Link from "next/link";
import Popup from "reactjs-popup";
import LeadForm from "./Form/LeadForm";

const phrases = ["Game Development.", "Web3 Courses."];

export default function Banner() {
  const { setToggleLoginForm, setIsAdmin } = useContext(AppContext);

  /*  const handleForm = function () {
         setIsAdmin(false);
         setToggleLoginForm(true);
     } */

  return (
    <section className={styles.container}>
      <div className={styles.banner_info}>
        <h1 className={styles.title}>Study Now and Pay later</h1>
        <div className={styles.typewriter}>
          <Typewriter
            onInit={(t) => t.changeDeleteSpeed(1).changeDelay(0.4)}
            options={{
              strings: phrases,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className={styles.para}>
          <h1 className={styles.title2}>
            Be a Fullstack Game Developer As Per Industry Standards
            <br /> Portfolio & Interview Ready Program.
          </h1>
          <h1 className={styles.title3}>
            Connect with the real gaming community.
          </h1>
          <h1 className={styles.title3}>Be a Creator, Not a Player</h1>
        </div>
        <button className={styles.button}>
          <Popup
            trigger={
              <a target="_blank" className={styles.Link}>
                Study now and pay later
              </a>
            }
            position="center"
          >
            {(close) => <LeadForm close={close} />}
          </Popup>
        </button>

       {/*  <p className={styles.regis}>Registration Charge</p>
        <div
          className={styles.price}
          style={{ marginTop: "12px", padding: "8px", borderRadius: "8px" }}
        >
          <b style={{ color: "#fff" }}>₹30000 + GST</b>
        </div> */}
      </div>
    </section>
  );
}
