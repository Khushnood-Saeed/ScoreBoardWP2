const mongoose=require('mongoose')

const boardSchema = mongoose.Schema({
    TeamName: { type: String},
    TotalGamesPlayed: { type: String},
    Score: { type: Number},
})

const boardModel = mongoose.model('board', boardSchema)
module.exports=boardModel