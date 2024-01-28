let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Note Model
let noteSchema = require("../models/Note.js");

// CREATE Student
router.route("/create-note").post(async (req, res, next) => {
  await noteSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Note Data successfully added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// READ Notes
router.route("/").get(async (req, res, next) => {
  await noteSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All Note items successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.route("/get-note/:id").get(async (req, res, next) => {
  await noteSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Note Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// Update Student
router.route("/update-note/:id").put(async (req, res, next) => {
  await noteSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        msg: "Note Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// Delete Student
router.route("/delete-note/:id").delete(async (req, res, next) => {
  await noteSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Note Data successfully updated.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;