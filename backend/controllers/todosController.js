// Importing database from models dir
const Todo = require('./../models/Todo');

// Home controller
exports.home = (req, res) => {
    res.status(200).send('Todo Lists');
};
// Getall controller
exports.getAllTodos = async (req, res) => {
    const todos = await Todo.find();
    res.status(200).json(todos)
    //{     status: 'success',
    //     data: {
    //         todos
    //     }
    // }
};
// Create controller
exports.createTodo = async (req, res) => {
    const todo = await new Todo({
        text: req.body.text
    });
    todo.save();
    res.status(201).json(todo)
        // status: 'success',
        // data: {
        //     todo
        // }
};
// Delete controller
exports.deleteTodo = async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.status(204).json(result)
    //     status: 'success',
    //     data: {
    //         result
    //     }
    // }
};
// Update controller
exports.updateTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.status(200).json(todo)
    //     status: 'success',
    //     data: {
    //         todo
    //     }
    // }
};
// Catch all controller
exports.catchAll = (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
};