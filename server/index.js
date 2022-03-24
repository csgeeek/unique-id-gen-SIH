const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 5000 || process.env.PORT;

mongoose.connect('mongodb+srv://user:user123@cluster1.gle5k.mongodb.net/student', () => console.log('connected to db'));


const randomeIdGenerator = (uni) => {
    const getRandomPin = (chars, len)=>[...Array(len)].map(
        (i)=>chars[Math.floor(Math.random()*chars.length)]
     ).join('');


};

// MIDDLEWARES

// app.use(cors());
app.use(express.json());
const govtRoutes = require('./routes/govt');
app.use('/govt', govtRoutes);

const institutionRoutes = require('./routes/institution');
app.use('/institution', institutionRoutes);




app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
    console.log('Server up and running');
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
