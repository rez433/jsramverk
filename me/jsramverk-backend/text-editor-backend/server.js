require('dotenv').config();
// const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 1337;
const docRoutes = require('./routes/route');



const app = express();

// Middleware
app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: false }));   

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')));
    
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
//     })
// } else {
//     app.get('/', (req, res) => {
//         res.send('set NODE_ENV to production!')
//     })
// }

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on port: ${port}`)
        })
    })
    .catch((error) => {
        console.log(error);
    })

app.use('/api/docs', docRoutes);
