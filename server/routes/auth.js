const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();
const salt = 10;
router.post('/signin', (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Credentials required.' });
  }
  User.findOne({ email })
    .then((userInDB) => {
      if (!userInDB) return res.status(400).json({ message: 'Invalid credentials' });
      const isValidPassword = bcrypt.compareSync(password, userInDB.password);
      if (!isValidPassword) return res.status(400).json({ message: 'Invalid credentials' });
      const sendableUser = userInDB.toObject();
      delete sendableUser.password;
      req.session.currentUser = sendableUser;
      res.status(200).json(sendableUser);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.post('/signup', (req, res, next) => {
  const { email, password, username } = req.body;

  User.findOne({ email })
    .then((userInDb) => {
      if (userInDb) {
        return res.status(400).json({ message: 'Email already taken' });
      }
      const newUser = { email, password, username };
      if (req.file) {
        newUser.avatar = req.file.secure_url;
      }

      const hashedPassword = bcrypt.hashSync(password, salt);
      newUser.password = hashedPassword;

      User.create(newUser)
        .then((createdUser) => {
          const sendabledUser = createdUser.toObject();
          delete sendabledUser.password;

          // Log user on signup
          req.session.currentUser = sendabledUser;
          res.status(200).json(sendabledUser);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get('/is-loggedin', (req, res, next) => {
  if (req.session.currentUser) {
    res.status(200).json(req.session.currentUser);
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

router.get('/signout', (req, res, next) => {
  req.session.destroy(err, () => {
    if (!err) {
      res.status(200).json({ message: 'Signed out successfully' });
    }
  });
});

module.exports = router;
