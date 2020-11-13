const fs = require('fs');
const path = require('path');

const jobDetailsData = path.join(__dirname, '../data/jobsFullDetails.json');
const jobListData = path.join(__dirname, '../data/jobsList.json');

const getJobDetails = () => JSON.parse(fs.readFileSync(jobDetailsData));
const getListDetails = () => JSON.parse(fs.readFileSync(jobListData));

const getJobByID = (id) => getJobDetails().find((job) => job.id === parseInt(id));

module.exports = {
    getJobDetails,
    getListDetails,
    getJobByID
}