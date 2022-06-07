// Dependencies
require('dotenv').config();
const cors = require('cors');
const express = require('express');
// Configuration
const app = express();
app.use(express.json());
app.use(cors())
// Connecting to mongoose
const connection = require('./tododb');
connection();
// Routes
// Importing todocontroller handlers
const todosController = require('./controllers/todosController');
// app.get('/', todosController.home);
app.get('/todos', todosController.getAllTodos);
app.post('/todo/new', todosController.createTodo);
app.delete('/todo/delete/:id',todosController.deleteTodo)
app.get('/todo/complete/:id', todosController.updateTodo);
app.get('*', todosController.catchAll);
module.exports = app;