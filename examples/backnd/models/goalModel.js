const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        min: 3
    },
    text: {
        type: String,
        required: [true, 'Please add a text']
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema);
