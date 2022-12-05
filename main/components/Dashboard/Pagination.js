import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import style from './Pagination.module.scss';

const Pagination = ({ postPerPage, totalPost, paginate, handlePrevBtn, handleNextBtn, currentPage }) => {
    const pageNumber = [];
    const totalPage = totalPost / 10;

    //Get Btn
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i);
    };


    return (
        <nav className={style.pagi_nav} >
            <button
                className={style.pagi_btn}
                onClick={() => handlePrevBtn()}
                disabled={currentPage <= 1}
            >
                <IoIosArrowBack />
            </button>

            <ul>
                {
                    pageNumber.map(number => (
                        <li key={number} >
                            <button
                                onClick={() => paginate(number)}
                                className={currentPage === number ? style.focused_Btn : style.pagi_btn}
                            >{number}</button>
                        </li>
                    ))
                }
            </ul>

            <button
                className={style.pagi_btn}
                onClick={() => handleNextBtn()}
                disabled={currentPage >= totalPage}
            >
                <IoIosArrowForward />
            </button>
        </nav>
    );
};

export default Pagination;