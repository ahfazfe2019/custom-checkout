const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.status(200).json({message : "This is user api rout"});
});

router.post("/register",(req,res) => {
    console.log('register para',req);
});