const router = require('express').Router();
let University = require('../models/university.model'); //loads as module

router.route('/').get((req, res) => {
  University.find()
    .then(universities => res.json(universities))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const universityname = req.body.universityname;
    const cricos = req.body.cricos;
    const location = req.body.location;
    const qsWorldRanking = req.body.qsWorldRanking;
    const qsNationalRanking = Number(req.body.qsNationalRanking);
    const tuitionFee = Number(req.body.tuitionFee);
    const ielts = Number(req.body.ielts);
    const numberOfStudents = Number(req.body.numberOfStudents);
    const percentageOfInternationalStudents = req.body.percentageOfInternationalStudents;
    const intakes = req.body.intakes;
    const fieldOfStudy1 = req.body.fieldOfStudy1;
    const fieldOfStudy2 = req.body.fieldOfStudy2;
    const fieldOfStudy3 = req.body.fieldOfStudy3;
    const fieldOfStudy4 = req.body.fieldOfStudy4;
    const fieldOfStudy5 = req.body.fieldOfStudy5;
    const fieldOfStudy6 = req.body.fieldOfStudy6;

    const newUniversity = new University({
        universityname,
        cricos,
        location,
        qsWorldRanking,
        qsNationalRanking,
        tuitionFee,
        ielts,
        numberOfStudents,
        percentageOfInternationalStudents,
        intakes,
        fieldOfStudy1,
        fieldOfStudy2,
        fieldOfStudy3,
        fieldOfStudy4,
        fieldOfStudy5,
        fieldOfStudy6,

  });

  newUniversity.save()
  .then(() => res.json('University added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    University.findById(req.params.id)
      .then(university => res.json(university))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    University.findByIdAndDelete(req.params.id)
      .then(() => res.json('University deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    University.findById(req.params.id)
      .then(university => {
        university.universityname = req.body.universityname;
        university.cricos = req.body.cricos;
        university.location = req.body.location;
        university.qsWorldRanking = req.body.qsWorldRanking;
        university.qsNationalRanking = Number(req.body.qsNationalRanking);
        university.tuitionFee = Number(req.body.tuitionFee);
        university.ielts = Number(req.body.ielts);
        university.numberOfStudents = Number(req.body.numberOfStudents);
        university.percentageOfInternationalStudents = req.body.percentageOfInternationalStudents;
        university.intakes = req.body.intakes;
        university.fieldOfStudy1 = req.body.fieldOfStudy1;
        university.fieldOfStudy2 = req.body.fieldOfStudy2;
        university.fieldOfStudy3 = req.body.fieldOfStudy3;
        university.fieldOfStudy4 = req.body.fieldOfStudy4;
        university.fieldOfStudy5 = req.body.fieldOfStudy5;
        university.fieldOfStudy6 = req.body.fieldOfStudy6;
  
        university.save()
          .then(() => res.json('University updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;

/*{
    "universityName": "Australian Catholic University",
    "cricos": "00004G",
    "location": "Queensland, Australia", 
    "qsWorldRanking": "801-1000",
    "qsNationalRanking": 34,
    "tuitionFee": 27960,
    "IELTS": 6.5,
    "numberOfStudents": 32000,
    "percentageOfInternationalStudents": "11%",
    "intakes": "Feb - August",
    "fieldOfStudy1": "MBA",
    "fieldOfStudy2": "Clinical Exercise Psychology",
    "fieldOfStudy3": "Education",
    "fieldOfStudy4": "Finance", 
    "fieldOfStudy5": "Health Administration",
    "fieldOfStudy6": "Information Technology"
}*/