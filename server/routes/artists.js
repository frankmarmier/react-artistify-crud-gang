/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/
const express = require('express');
const router = new express.Router();

const albumModel = require('../models/Album');
const artistModel = require('../models/Artist')

router.get("/",(req,res,next)=>{
    artistModel
    .find()
    .then((res)=>{
        console.log(res)
    })
    .catch(next)

})


module.exports = router;
