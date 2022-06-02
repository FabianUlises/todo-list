const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/todo-list', connectionParams
        );
        console.log('Connected to database')
    } catch (error) {
        console.log('Could not connect to database', error)
    }
};