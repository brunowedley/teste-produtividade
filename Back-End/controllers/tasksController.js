// const { insertTaskService } = require('../services/tasksService');
const { insertTask, findAllTasks, removeTask, updateTask } = require('../models/tasksModel');
const { StatusCodes } = require('http-status-codes');

const insertTaskController = async (req, res) => {
  try {
    const { task, details, status } = req.body;
    const newTask = await insertTask(task, details, status);

    return res.status(StatusCodes.OK).json(newTask)
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro interno', error: err });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await findAllTasks();
    return res.status(StatusCodes.OK).json(tasks);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro interno' });
  }
}

const deleteTask = async (req, res) => {
  const id = req.params.id;
  await removeTask(id);
  return res.status(StatusCodes.NO_CONTENT).send();
}

const updateTaskController = async (req, res) => {
  const { task, details, status } = req.body;
  const id = req.params.id;
  const updatedTaskStatus = await updateTask(id, task, details, status);
  return res.status(StatusCodes.OK).json(updatedTaskStatus);
}

module.exports = {
  insertTaskController,
  getAllTasks,
  deleteTask,
  updateTaskController
};
