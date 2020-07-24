/*------------------------------------------
// STYLES ROUTING
------------------------------------------*/
const express = require('express');
const router = new express.Router();
const styleModel = require('../models/Style');


router.get("/", (req,res,next) => {
    styleModel.find()
    .then((dbRes) => {
        res.status(200).json(dbRes)
    })
    .catch((err) => res.status(500).json(err))
})

module.exports = router;
