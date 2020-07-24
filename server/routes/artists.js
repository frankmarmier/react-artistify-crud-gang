/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/
const express = require('express');
const router = new express.Router();

const albumModel = require('../models/Album');
const artistModel = require('../models/Artist')

/* GET /artists => get's us all the artists from the database.  
GET /artists/:id get's us one artist matching an id.  
POST /artists => create an artist.  
PATCH /artists/:id => updates an artist with the specified id.  
/DELETE /artists/:id => deletes an artist with the specified id. */

router.get("/",(req,res,next)=>{
    artistModel
    .find()
    .then((artists)=>{
        res.status(200).json(artists)
    })
    .catch(next)
})

router.get("/:id", (req,res,next) =>{
    artistModel
    .findById(req.params.id)
    .then((oneArtist) =>{
        res.status(200).json(oneArtist)
    })
    .catch(next)
})

router.post("/",(req,res,next)=>{
    artistModel
    .create(req.body)
    .then((newArtist) =>{
        res.status(201).json(newArtist)
    })
    .catch(next)
})

router.patch("/:id", (req,res, next) =>{
    artistModel
    .findByIdAndUpdate(req.params.id, req.body,{new: true})
    .then((updateArtist)=>{
        res.status(200).json(updateArtist)
    })
    .catch(next)
})

router.delete("/:id", (req, res, next) => {
    artistModel.findByIdAndRemove(req.params.id)
    .then((artist) => {
        res.sendStatus(204)
    })
    .catch((err) => {
        res.sendStatus(500)
    })
})

module.exports = router;
