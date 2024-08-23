const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors=require('cors')
const router = require("./routes/book-routes");

// Middleware
// it will converts all data in json format
app.use(express.json())
app.use(cors())
app.use("/books",router); //localhost:5000/books

mongoose
    .connect(
        "mongodb+srv://admin:zDi7xYdxfE2rOVBE@cluster0.dl2vku1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Connected to Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));
