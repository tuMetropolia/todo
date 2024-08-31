const ToDo = require("./todoLib.js");

function getAllTodos(req, res) {
  const toDo = ToDo.getAll();
  res.json(toDo);
}

function createTodo(req, res) {
  const { task, completed, dueDate } = req.body;
  const newTask = ToDo.addOne(task, completed, dueDate);
  if (newTask) {
    res.json(newTask);
  } else {
    res.status(500).json({ message: "Invalid task" });
  }
}

function getTodoById(req, res) {
  const taskId = req.params.todoId;
  const getTask = ToDo.findById(taskId);
  if (getTask) {
    res.json(getTask);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
}

function updateTodo(req, res) {
  const taskId = req.params.todoId;
  const taskUpdate = req.body;
  const updateData = ToDo.updateOneById(taskId, taskUpdate);
  if (updateData) {
    res.json(updateData);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
}

function deleteTodo(req, res) {
  const taskId = req.params.todoId;
  const deleteTask = ToDo.deleteOneById(taskId);
  if (deleteTask) {
    res.json({ message: "Task deleted" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
}

module.exports = {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
