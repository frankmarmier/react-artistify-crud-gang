/*------------------------------------------
// ALBUMS ROUTING
------------------------------------------*/

// GET /albums => get's us all the albums from the database.
// GET /albums/:id get's us one album matching an id.
// POST /albums => create an album.
// PATCH /albums/:id => updates an album with the specified id.
// /DELETE /albums/:id => deletes an album with the specified id.

const express = require('express');
const router = new express.Router();
const albumModel = require('../models/Album');

router.get('/', (req, res) => {
  albumModel
    .find()
    .then((albums) => {
      res.status(200).json(albums);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    albumModel
      .findById(req.params.id)
      .then((album) => {
        res.status(200).json(album);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
    albumModel
      .create(req.body)
      .then((album) => {
        res.status(201).json(album);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  router.patch('/:id', (req, res) => {
    albumModel
      .findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then((updatedAlbum) => {
        res.status(200).json(updatedAlbum);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  router.delete('/:id', (req, res) => {
    albumModel
      .findByIdAndDelete(req.params.id)
      .then(() => {
        res.sendStatus(204)
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

module.exports = router;
