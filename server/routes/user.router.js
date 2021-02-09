const express = require('express');
const {
  rejectUnauthenticatedGeneral
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/',rejectUnauthenticatedGeneral, (req, res) => {
  res.send(req.user);
});

router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const type_id = req.body.type

  const queryText = `INSERT INTO "user" (username, password, type_id)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, type_id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
