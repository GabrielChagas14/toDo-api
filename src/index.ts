const express = require('express');
const app = express();

const PORT = 3000;

const toDoRouter = require('./routes/toDo');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', toDoRouter);

function onStart(){
    console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, onStart);

module.exports = app;