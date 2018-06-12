const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const quizSchema = new mongoose.Schema({
  date: String,
  duration: String,
  answers: [{questionId: String, answerid: String}],
  user_id: {type: Schema.Types.ObjectId, ref: 'User'}

});

module.exports = mongoose.model("Quiz", quizSchema);
