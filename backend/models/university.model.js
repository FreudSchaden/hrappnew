const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const universitySchema = new Schema({

    universityname: { type: String, required: true },
    cricos: { type: String, required: true },
    location: { type: String, required: true },
    qsWorldRanking: { type: String, required: true },
    qsNationalRanking: { type: Number, required: true },
    tuitionFee: { type: Number, required: true },
    ielts: { type: Number, required: true },
    numberOfStudents: { type: Number, required: true },
    percentageOfInternationalStudents: { type: String, required: true },
    intakes: { type: String, required: true },
    fieldOfStudy1: { type: String, required: true },
    fieldOfStudy2: { type: String, required: true },
    fieldOfStudy3: { type: String, required: true },
    fieldOfStudy4: { type: String, required: true },
    fieldOfStudy5: { type: String, required: true },
    fieldOfStudy6: { type: String, required: true }

}, {
  timestamps: true,
});

const University = mongoose.model('University', universitySchema);

module.exports = University;