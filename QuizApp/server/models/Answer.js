const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const answerSchema = new mongoose.Schema({
    answer: String,
  isCorrect: Boolean,
  questionId: {type: Schema.Types.ObjectId, ref: 'Question'}

});
module.exports = mongoose.model("Answer", answerSchema);
