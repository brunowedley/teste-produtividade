const { StatusCodes } = require('http-status-codes');
const { insertTask } = require('../models/tasksModel');

const onGoing = 'Em andamento';
const ready = 'Pronto';
const pending = 'Pendente';

const insertTaskService = async (task, details, taskStatus) => {
  if (!task || !details)
    return (
      {
        status: StatusCodes.BAD_REQUEST,
        message: "é necessário informar tarefa e detalhes"
      });
  if (!taskStatus || taskStatus !== onGoing || taskStatus !== pending || taskStatus !== ready) {
    return (
      {
        status: StatusCodes.BAD_REQUEST,
        message: "status deve estar 'Em andamento', 'Pendente' ou 'Pronto'"
      }
    )
  }
  await insertTask(task, details, taskStatus);
  return ({
    status: StatusCodes.CREATED,
    message: "Nova tarefa inserida com sucesso"
  });
}

// switch (true) {
//   case (!task || !details):
//     {
//       status = StatusCodes.BAD_REQUEST,
//         message = 'é necessário informar tarefa e detalhes';
//     }
//     break;
//   case (!taskStatus === 'Em andamento' || !taskStatus === 'Pendente' || !taskStatus === 'Pronto'):
//     {
//       status = StatusCodes.BAD_REQUEST;
//       message = `status deve estar 'Em andamento', 'Pendente' ou 'Pronto'`
//     }
//     break;
//   default:
//     status = StatusCodes.BAD_REQUEST;
//     message = 'Declarações não estão de acordo com o pedido'
// }



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