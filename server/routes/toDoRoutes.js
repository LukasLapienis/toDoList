const express = require('express');
const router = express.Router();

const {
  createToDo,
  getAllToDos,
  updateToDoById,
  deleteToDoById,
  deleteAll,
} = require('../controllers/toDoController.js');

// @ /api/toDo

router.post('/', createToDo);
router.get('/', getAllToDos);
router.put('/:id', updateToDoById);
router.delete('/:id', deleteToDoById);
router.delete('/', deleteAll);

module.exports = router;
