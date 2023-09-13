const express = require("express");
const router = express.Router();
// const Book = require("../model/Book");
const Book = require("../model/Book");
router.get("/",async(req,res,next)=>{
    let books;
    try
    {
        books = await Book.findOne();
    }
    catch(Error)
    {
        console.log(Error);
    }
    if(!books)
    {
        return res.status(404).json({message:"No Book Found"});
    }
    return res.status(200).json({books})

})
module.exports =  router;