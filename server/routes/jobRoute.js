const express = require('express');
const router = express.Router();

const jobController = require('../controller/jobController');

router.route('/').get(jobController.getJobList);
router.route('/details').get(jobController.getJobDetails);
router.route('/details/:id').get(jobController.getJobByID);

module.exports = router;