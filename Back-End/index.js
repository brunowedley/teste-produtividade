require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const { insertTaskController, getAllTasks, deleteTask, updateTaskController } = require('./controllers/tasksController')

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT

app.get('/getAllTasks', getAllTasks);
app.post('/', insertTaskController);
app.put('/updateTask/:id', updateTaskController);
app.delete('/deleteTasks/:id', deleteTask);

app.listen(PORT, () => {
  console.log(`Conexão estabelecida com sucesso na porta ${PORT}`)
});

module.exports = app;