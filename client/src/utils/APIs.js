import axios from 'axios';

export const getJobList = () => axios.get('http://localhost:5000/jobs')
    .then((response) => response.data);

export const getJobDetails = (id) => axios.get(`http://localhost:5000/jobs/details/${id}`)
    .then((response) => response.data);
