const connect = require('./connection');

const insertTask = async (task, details, status) => {
  const db = await connect();
  const result = db.collection('tasks').insertOne({ task, details, status });
  return result;
}

const findTask = async (task) => {
  const db = await connect();
  const result = db.collection('tasks').findOne({ task });
  return result;
}

module.exports = {
  insertTask,
  findTask
};