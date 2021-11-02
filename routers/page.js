// const express = require("express");
// const router = express.Router();
const router = require('express').Router();

router.get('/',async (req,res) => {
    await res.send("From home page")    
});

router.get("/register",async (req,res) => {
    await res.send("from register page ");
});

module.exports = router;
