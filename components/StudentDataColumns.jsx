// export const COLUMNS = [
//     {
//         Header: 'Name',
//         accessor: 'fullName'
//     },
//     {
//         Header: 'Email',
//         accessor: 'email'
//     },
//     {
//         Header: 'Number',
//         accessor: 'phoneNumber'
//     },
//     {
//         Header: 'Course',
//         accessor: 'course'
//     },
//     {
//         Header: 'Disposition',
//         accessor: 'disposition'
//     },
//     {
//         Header: 'Data',
//         accessor: 'Data'
//     }
// ]

import axios from 'axios';
import baseUrl from '../helpers/Baseurl';

const usersUrl = `${baseUrl}/api/userdata`;

export const getUsers = async (id) => {
    id = id || '';
    const response = await axios.get(`${usersUrl}/${id}`);
    const data = response.data;
    return data;
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}