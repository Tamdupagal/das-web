import axios from 'axios';

export default axios.create({
    baseURL: 'https://test123haroon.herokuapp.com/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
});