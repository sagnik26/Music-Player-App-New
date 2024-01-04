import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/note-app")
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log("DB connection failed");
})

// create a server
const app = express();

// this will parse post request body coming from fetch.post() method
app.use(express.json());

// this will parse post request coming from html form
app.use(express.urlencoded({ extended: false }));

app.post('/', (req, res) => {
    // here we need data so that we can create new note/todo
    console.log(req.body); 
    res.json({ message: "I am listening!" });
});

app.post('/create', (req, res) => {
    // here we need data so that we can create new note/todo
    console.log(req.body);
    res.json({ message: "I am listening to create!" });
});

// listen to some port
app.listen(8000, () => {
    console.log('Listening...');
})
