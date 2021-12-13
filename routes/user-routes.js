const express = require('express')


const userRoutes = express.Router();


userRoutes.get('/users',(req,res,next)=>{
    console.log('res works')
    res.json({"token":"!lhlkj#lwe6adjfl8aam.76dd"})
})


module.exports = userRoutes