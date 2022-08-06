const router = require('express').Router();
const toDoController = require('../controllers/toDoController')

router.route('/toDo')
    .post(toDoController.create)
    .get(toDoController.index)
    .put(toDoController.update)
    .delete(toDoController.destroy);
router.route('/toDo/:toDoId')
     .get(toDoController.show)
module.exports = router;