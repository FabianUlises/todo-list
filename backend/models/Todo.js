const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creating mongoose schema
const TodoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
});
// Creating mongoose model with schema
const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;