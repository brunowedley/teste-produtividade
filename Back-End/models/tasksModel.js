const connect = require('./connection');
const { ObjectId } = require('mongodb');

const insertTask = async (task, details, taskStatus) => {
  const db = await connect();
  const result = await db.collection('tasks').insertOne({ task, details, taskStatus });
  return result;
}

const findTask = async (task) => {
  const db = await connect();
  const result = await db.collection('tasks').findOne({ task });
  return result;
}

const findAllTasks = async (task) => {
  const db = await connect();
  const result = await db.collection('tasks').find().toArray();
  return result;
}

const removeTask = async (id) => {
  if (!ObjectId.isValid(id))
    return null;

  const db = await connect();
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
}

const updateTask = async (id, task, details, taskStatus) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connect();
  await db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { task, details, taskStatus } });
  return { id, task, details, taskStatus };
}

const deleteAll = async () => {
  // UTILIZAÇÃO APENAS PARA FACILITAR A REMOÇÃO DE TODAS AS INFORMAÇÕES EM CASO DE MUDANÇA DE TAGS
  const db = await connect();
  await db.collection('tasks').deleteMany();
}

module.exports = {
  insertTask,
  findTask,
  findAllTasks,
  removeTask,
  updateTask,
  deleteAll
};