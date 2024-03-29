import styles from "./Header.module.scss";
import Images from "next/image";
import logo from "../assets/das.webp";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { GiGameConsole } from "react-icons/gi";
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../AppContext";
// import { useSession } from "next-auth/react";
import LeadForm from "./Form/LeadForm";
import Modal from "react-responsive-modal";

function Header(props) {
  const { setIsAdmin, setToggleLoginForm } = useContext(AppContext);
  // const { status } = useSession();

  const headerRef = useRef();
  const btnRef = useRef();
  const btnRef1 = useRef();
  const headRef = useRef();

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [toggleSocial, setToggleSocial] = useState(false);

  // useEffect(() => {
  //   const closeDropDown = (e) => {
  //     if (e.path[0] !== btnRef.current) {
  //       setToggleDropDown(false);
  //     }
  //   };

  //   document.body.addEventListener("click", closeDropDown);
  //   return () => document.body.removeEventListener("click", closeDropDown);
  // }, [] );

  useEffect(() => {
    const closeDropDown = (e) => {
      if (e.path[0] !== btnRef.current) {
        setToggleDropDown(false);
      }
      if (e.path[0] !== btnRef1.current) {
        setToggleSocial(false);
      }
    };

    document.body.addEventListener("click", closeDropDown);
    return () => document.body.removeEventListener("click", closeDropDown);
  }, []);

  // useEffect(() => {
  //   const closeDropDown1 = (e) => {
  //     if (e.path[0] !== btnRef1.current) {
  //       setToggleSocial(false);
  //     }
  //   };

  //   document.body.addEventListener("click", closeDropDown1);
  //   return () => document.body.removeEventListener("click", closeDropDown1);
  // }, []);

  const router = useRouter();

  const handleAdminLogin = function () {
    setIsAdmin(true);
    setToggleLoginForm(true);
  };

  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <figure className={styles.logo} onClick={() => router.push("/")}>
          <Images
            src={logo}
            objectFit="contain"
            layout="responsive"
            alt="logo"
            className={styles.image}
          />
        </figure>
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li
            className={`${styles.navitem} ${styles.btn}`}
            onClick={() => {
              router.push("/");
              setIsOpen(false);
            }}
          >
            Home
          </li>

          {/* {status === "authenticated" ? (
            <li
              className={`${styles.navitem} ${styles.btn}`}
              onClick={() => {
                router.push("/info");
                setIsOpen(false);
              }}
            >
              Dashboard
            </li>
          ) : (
            ""
          )} */}

          <li className={styles.navitem}>
            <button
              ref={btnRef}
              onClick={() => setToggleDropDown(!toggleDropDown)}
              className={styles.btn}
            >
              Courses
              {toggleDropDown && (
                <ul className={styles.dropdown}>
                  <li
                    onClick={() => {
                      router.push("/gen-ai");
                      setToggleDropDown(false);
                      setIsOpen(false);
                    }}
                  >
                    <FaAngleRight className={styles.arrow_right} /> Generative AI
                  </li>
                  <li
                    onClick={() => {
                      router.push("/web3Course");
                      setToggleDropDown(false);
                      setIsOpen(false);
                    }}
                  >
                    <FaAngleRight className={styles.arrow_right} /> Web3 Course
                  </li>
                </ul>
              )}
            </button>
          </li>
          <li
            className={`${styles.navitem} ${styles.btn}`}
            onClick={() => {
              router.push("/blog");
              setIsOpen(false);
            }}
          >
            Blog
          </li>
          <li
            className={`${styles.navitem} ${styles.btn}`}
            onClick={() => {
              router.push("/frequently-asked-question");
              setIsOpen(false);
            }}
          >
            FAQ
          </li>

          <li className={styles.navitem}>
            <button className={styles.bttn} onClick={onOpenModal}>
              <GiGameConsole style={{ fontSize: "16px" }} /> Careers /
              Partnerships
            </button>

            <Modal open={open} onClose={onCloseModal} center>
              <LeadForm />
            </Modal>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          {(close) => <LeadForm close={close} />}
        </button>

        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
