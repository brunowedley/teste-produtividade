// const { insertTaskService } = require('../services/tasksService');
const { insertTask, findAllTasks, removeTask, updateTask, deleteAll } = require('../models/tasksModel');
const { insertTaskService } = require('../services/tasksService')
const { StatusCodes } = require('http-status-codes');

const insertTaskController = async (req, res) => {
  try {
    const { task, details, taskStatus } = req.body;
    const newTask = await insertTask(task, details, taskStatus);

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

const deleteAllTasks = async (req, res) => {
  const areThereTask = await findAllTasks();
  if (areThereTask !== []) {
    await deleteAll();
    return res.status(StatusCodes.OK).json({ message: 'Coleção deletada com sucesso' })
  } else {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro interno' });
  }
}

const updateTaskController = async (req, res) => {
  const { task, details, taskStatus } = req.body;
  const id = req.params.id;
  const updatedTaskStatus = await updateTask(id, task, details, taskStatus);
  return res.status(StatusCodes.OK).json(updatedTaskStatus);
}

module.exports = {
  insertTaskController,
  getAllTasks,
  deleteTask,
  updateTaskController,
  deleteAllTasks
};
