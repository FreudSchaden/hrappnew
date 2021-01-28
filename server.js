const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

//router loaded from file
const universitiesRouter = require('./routes/universities');
//rouuter added as middleware
app.use('/universities', universitiesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});