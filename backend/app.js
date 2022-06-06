// Dependencies
require('dotenv').config();
const cors = require('cors');
const express = require('express');
// Configuration
const app = express();
app.use(express.json());
app.use(cors());

// Connecting to mongoose
const connection = require('./tododb');
connection();

// Requiring database from models dir
const Todo = require('./models/Todo');


// Routes
const todoController = require('./controllers/todosController');
app.get('/', todoController.home);
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});
app.post('/todo/new', async (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save();
    res.json(todo);
});
app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
})
app.put('/todo/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

module.exports = app;