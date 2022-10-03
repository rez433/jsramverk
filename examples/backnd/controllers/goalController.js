const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');



// @desc    Get Goals
// @route   Get /api/goals
// @access  Private

const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals)
})




// @desc    Set Goal
// @route   POST /api/goals
// @access  Private

const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.title) {
        res.status(400);
        throw new Error('please add a title')
    };
    if(!req.body.text) {
        res.status(400);
        throw new Error('please add a text')
    };

    const goal = await Goal.create({
        title: req.body.title,
        text: req.body.text
    })

    res.status(200).json(goal)
})



// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private

const upd8Goal = asyncHandler(async(req, res) => {

    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error('Goal not Find!');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal);
})



// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private

const delGoal = asyncHandler(async(req, res) => {

    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error('Goal not Find!')
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)

    res.status(200).json(deletedGoal)
})



module.exports = {
    getGoals,
    setGoal,
    upd8Goal,
    delGoal
};
