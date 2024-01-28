let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Student Model
let employeeSchema = require("../models/Employee.js");

// CREATE Student
router.route("/create-employee").post(async (req, res, next) => {
  await employeeSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Employee successfully added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// READ employee .find()
router.route("/").get(async (req, res, next) => {
  await employeeSchema.aggregate([{$project:{name: "$name", cnic: "$cnic", job:"$job", phone: "$phone", idate:"$idate", edate:"$edate" ,days:{$dateDiff:{startDate: "$edate",endDate: new Date(),unit: "day"}},_id: 0}}])
    .then((result) => {
      res.json({
        data: result,
        message: "Employee Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// Get Single employee
router.route("/get-employee/:id").get(async (req, res, next) => {
  await employeeSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Employee ID Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// Update employee
router.route("/update-employee/:id").put(async (req, res, next) => {
  await employeeSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        msg: "Employee Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// Delete employee
router.route("/delete-employee/:id").delete(async (req, res, next) => {
  await employeeSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;