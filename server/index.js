const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URI, () => console.log('connected to db'));

// const universityIdGenerator = () => {
    
// };

// MIDDLEWARES
app.use(cors());
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