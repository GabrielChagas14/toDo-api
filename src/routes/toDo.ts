const router = require('express').Router();
const toDoController = require('../controllers/toDoController')

router.route('/toDo')
    .post(toDoController.create)
    .get(toDoController.index);
router.route('/toDo/:toDoId')
     .get(toDoController.show)
module.exports = router;