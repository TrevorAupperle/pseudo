import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = '3000'
const uri = "mongodb+srv://pseudo:NPqik4rwuKwP5TuS@pseudo.xgrdlaa.mongodb.net/?retryWrites=true&w=majority";


//Mongoose Connections
mongoose.connect(uri, { autoCreate: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);