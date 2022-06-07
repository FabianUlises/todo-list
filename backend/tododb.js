const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://admin:secretPassword1!@cluster0.9mgft6t.mongodb.net/?retryWrites=true&w=majority';
module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(dbUrl, connectionParams);
        console.log('Connected to database')
    } catch (error) {
        console.log('Could not connect to database', error)
    }
};