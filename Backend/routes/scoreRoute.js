const express = require('express');
const {getScore}=require('../controllers/scoreController.js')
const {addScore}=require('../controllers/scoreController.js')
const scoreRouter = express.Router();

scoreRouter.get('/',getScore)
scoreRouter.post('/add',addScore)
 
module.exports = scoreRouter;