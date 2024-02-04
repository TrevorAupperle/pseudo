import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//Routers import
import usersRouter from './routers/usersRouter.js';
import postsRouter from './routers/PostsRouter.js';

const app = express();
const PORT = '3000'
const uri = "mongodb+srv://pseudo:NPqik4rwuKwP5TuS@pseudo.xgrdlaa.mongodb.net/?retryWrites=true&w=majority";

// Mongoose Connections
mongoose.connect(uri, { autoCreate: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// Parse Json Body 
app.use(bodyParser.json())

// Attach routers to express
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);