const express = require('express');
const path = require('path');
const http = require('http');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGODB_URL);
mongoose.connect('mongodb://localhost/quizapp');
require('./server/models/Question');
require('./server/models/Answer');
require('./server/models/Quiz');
require('./server/models/User');

const userRouter = require('./server/routes/user');
// const quizRouter = require('./server/routes/quiz');
 const questionRouter = require('./server/routes/question');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, 'dist/QuizApp')));

app.use('/users', userRouter);
// app.use('/quiz', quizRouter);
 app.use('/question', questionRouter);
app.use(logger('dev'));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/QuizApp/index.html'));
});


const port = process.env.PORT || '5200';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
