// Importing database from models dir
const Todo = require('./../models/Todo');

// Home controller
exports.home = (req, res) => {
    res.status(200).send('Todo Lists');
};
// Getall controller
exports.getAllTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};
// Create controller
exports.createTodo = async (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save();
    res.json(todo);
};
// Delete controller
exports.deleteTodo = async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
};
// Update controller
exports.updateTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
};
// Catch all controller
exports.catchAll = (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
};