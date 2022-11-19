import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Dashboar = () => {
    const [leadsData, setLeadsData] = useState([]);
    useEffect(() => {
        const url = `https://guarded-peak-36082.herokuapp.com/api/users-data`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeadsData(data))
    }, []);

    console.log(leadsData);


    return (
        <div >
            <h2 style={{ fontSize: "30px", marginBottom: "25px", color: "#FD7E14" }}>DAS Dashboard</h2>
            <table>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Qualification</th>
                </tr>
                {leadsData.map((val, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{val.name}</td>
                            <td>{val.phoneNumber}</td>
                            <td>{val.email}</td>
                            <td>{val.qualification}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};

export default Dashboar;