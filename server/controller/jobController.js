const jobModel = require('../model/jobModel');

const getJobDetails = (req, res) => res.status(200).send(jobModel.getJobDetails());
const getJobList = (req, res) => res.status(200).send(jobModel.getListDetails());
const getJobByID = ({ params }, res) => {

    console.log(params.id);
    jobModel.getJobByID(params.id) === undefined
        ? res.sendStatus(404)
        : res.status(200).send(jobModel.getJobByID(params.id));
}

module.exports = {
    getJobDetails,
    getJobList,
    getJobByID
}