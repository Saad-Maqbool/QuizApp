const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const quizSchema = new mongoose.Schema({
  question: String,
  answer: String,
  userId: {type: Schema.Types.ObjectId, ref: 'User'}

});

module.exports = mongoose.model("Quiz", quizSchema);
