const app = require('./app')
const PORT = process.env.PORT || 3000;

// Server Litening
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});