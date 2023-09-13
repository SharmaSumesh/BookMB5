const express = require("express");
const app = express();
const router = require("./routes/book_routes");
const mongoose = require("mongoose");
app.use("/",(req,res,next)=>
{
    res.send("HOME PAGE")
})
app.use("/books",router);

    try
    {
mongoose.connect("mongodb+srv://BookMB:MB5@cluster0.k7besmm.mongodb.net/?retryWrites=true&w=majority")

console.log("connected")
}catch(error)
{
    console.log("Error")
}
app.listen(3000,()=>{
    console.log("done");
});