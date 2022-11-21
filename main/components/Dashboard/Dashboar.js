import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Pagination from './Pagination';

const Dashboar = () => {
    const [leadsData, setLeadsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get('https://guarded-peak-36082.herokuapp.com/api/users-data');
            setLeadsData(res.data);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <h2>Loading.....</h2>
    };

    console.log(leadsData);

    //Get Current posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = leadsData.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handlePrevBtn = () => setCurrentPage(currentPage - 1);
    const handleNextBtn = () => setCurrentPage(currentPage + 1);


    return (
        <div >
            <h2 style={{ fontSize: "30px", marginBottom: "25px", color: "#FD7E14", textAlign: "center" }}>DAS Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        {/* <th>No.</th> */}
                        <th>Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Qualification</th>
                    </tr>
                </thead>
                {currentPosts.map((val, index) => {
                    return (
                        <tbody key={index}>
                            <tr >
                                {/* <td>{index + 1}</td> */}
                                <td>{val.name}</td>
                                <td>{val.phoneNumber}</td>
                                <td>{val.email}</td>
                                <td>{val.qualification}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>

            <Pagination
                currentPage={currentPage}
                postPerPage={postPerPage}
                totalPost={leadsData.length}
                handlePrevBtn={handlePrevBtn}
                handleNextBtn={handleNextBtn}
                paginate={paginate} />


        </div>
    );
};

export default Dashboar;