import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

//Routers import
import usersRouter from "./Routers/usersRouter.js";
import postsRouter from "./Routers/PostsRouter.js";

const app = express();
const PORT = '3001'
const uri = "mongodb+srv://pseudo:NPqik4rwuKwP5TuS@pseudo.xgrdlaa.mongodb.net/?retryWrites=true&w=majority";

// Mongoose Connections
mongoose.connect(uri, { autoCreate: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// Set up uses
app.use(cors({
  origin: "http://localhost:3000",
  credentials: false,
}))
app.use(bodyParser.json())

// Attach routers to express
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);