require('dotenv').config();
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

// Express Route
const studentRoute = require("./routes/student.routes");
const noteRoute = require("./routes/note.routes");
const employeeRoute = require("./routes/employee.routes");

// Connecting mongoDB Database
 async function dbConnection(){
    const mongoString = process.env.DATABASE_URI;
    await mongoose.connect(mongoString).then((x) => {
      console.log(
        `Connected to MongoDB Successfuly! Database name:"${x.connections[0].name}"`,
      )
    });
  }
  dbConnection().catch(err => console.error(err));
  
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use("/students", studentRoute);
app.use("/notes", noteRoute);
app.use("/employee", employeeRoute);

// PORT
const port = process.env.PORT || 8080;
const host=process.env.HTTP_HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server is running on port ${4000}`)
})












// 404 Error

app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});