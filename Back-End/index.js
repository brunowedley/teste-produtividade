require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const { insertTaskController, getAllTasks, deleteTask, updateTaskController, deleteAllTasks } = require('./controllers/tasksController');
// const { deleteAll } = require('./models/tasksModel');
const cors = require('cors');

// const cors = {
//   origin = 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE']
// }

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT

app.get('/getAllTasks', getAllTasks);
app.post('/createTask', insertTaskController);
app.put('/updateTask/:id', updateTaskController);
app.delete('/deleteTasks/:id', deleteTask);
app.delete('/DELETEALL', deleteAllTasks)

app.listen(PORT, () => {
  console.log(`Conexão estabelecida com sucesso na porta ${PORT}`)
});

module.exports = app;