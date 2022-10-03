const express = require('express');
const router = express.Router();
const { getGoals, setGoal, upd8Goal, delGoal } = require('../controllers/goalController');

// router.get('/', getGoals);
// router.post('/', setGoal);
// router.put('/:id', upd8Goal);
// router.delete('/:id', delGoal);

router.route('/').get(getGoals).post(setGoal);

router.route('/:id').put(upd8Goal).delete(delGoal);



module.exports = router;
