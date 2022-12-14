require('dotenv').config();
const express = require('express');
const cors = require('cors');
const docRoutes = require('./routes/route');



const app = express();


// Middleware
app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: false }));   

app.use('/api/docs', docRoutes);


module.exports = {app}
