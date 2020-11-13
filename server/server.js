const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./routes/jobRoute');

app.use(cors());

app.use('/jobs', router);

app.listen(5000, console.log("Listening on port 5000"));