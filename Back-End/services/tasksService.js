const { insertTask } = require('../models/tasksModel');

const insertTaskService = async (task, details, status) => {
  if (!task || !details || !status) return (
    {
      status: 401,
      message: "é necessário informar tarefa, detalhes e status"
    });

  await insertTask(task, details, status);
  return ({
    status: 201,
    message: "Nova tarefa inserida com sucesso"
  });
};

// const findTaskService = async (task) => {
//   if (!task === null) return (
//     {
//       status: 401,
//       message: "Tarefa não encontrada"
//     });
// };

module.exports = {
  insertTaskService
};