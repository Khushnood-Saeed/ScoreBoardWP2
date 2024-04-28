const boardModel = require('../models/boardSchema')



exports.addScore=async(req,res)=>{
 const {TeamName,TotalGamesPlayed,Score}=req.body
    try {
        // Creating a new board entry
        const newBoardEntry = new boardModel({
          TeamName,
          TotalGamesPlayed,
          Score,
        });
    
        // Saving the new board entry to the database
        await newBoardEntry.save();
    
        res.status(201).json({ success: true, message: "Board entry created successfully" });
      } catch (error) {
        console.error("Error creating board entry:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
      }
}
exports.getScore = async (req, res) => {

    try {
        const score = await boardModel.find({})
        res.status(200).json(score)
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }

}