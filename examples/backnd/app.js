const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const cnctDB = require('./config/db');
const port = process.env.PORT || 1337;


cnctDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', require('./routes/goalsRoutes.js'));
app.use(errorHandler);


app.listen(port, () => console.log(`server is running on port: ${port}`))
