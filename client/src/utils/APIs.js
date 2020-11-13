import axios from 'axios';

export const getJobList = () => axios.get('http://localhost:5000/jobs')
    .then((response) => response.data);