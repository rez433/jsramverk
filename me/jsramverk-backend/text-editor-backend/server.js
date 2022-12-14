require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 1337;
const {app} = require("./app");


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
    });
