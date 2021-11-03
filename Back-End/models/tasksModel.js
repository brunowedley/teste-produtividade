const connect = require('./connection');
const { ObjectId } = require('mongodb');

const insertTask = async (task, details, status) => {
  const db = await connect();
  const result = await db.collection('tasks').insertOne({ task, details, status });
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

const updateTask = async (id, task, details, status) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connect();
  await db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { task, details, status } });
  return { id, task, details, status };
}

module.exports = {
  insertTask,
  findTask,
  findAllTasks,
  removeTask,
  updateTask,
};