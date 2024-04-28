const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const scoreRouter=require('./routes/scoreRoute.js')

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://khushnoodsaeed21:CE18ocG1zfniYzDX@board.4ew6qbl.mongodb.net/?retryWrites=true&w=majority&appName=Board")
    .then(() => console.log('ScoreDB has been successfully connected'))
    .catch((err) => console.log('Database Connection failed ', err))

    

app.use(bodyParser.json());
app.use(cors()); 



app.use('/',scoreRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});