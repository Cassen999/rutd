const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticatedVet,
} = require("../modules/authentication-middleware");

// GET gender dropdown fields
router.get('/gender', rejectUnauthenticatedVet, (req, res) => {
  const queryText = 'SELECT * FROM gender';
  pool.query(queryText)
    .then((data) => res.send(data.rows))
    .catch((err) => {
      console.log('GET gender failed: ', err);
      res.sendStatus(500);
    });
});

// GET percentage dropdown fields
router.get("/percentage", rejectUnauthenticatedVet, (req, res) => {
  const queryText = "SELECT * FROM percentage";
  pool.query(queryText).then((result) => {
      res.send(result.rows);
    }).catch((err) => {
      console.log("GET percentage failed: ", err);
      res.sendStatus(500);
    });
});

// GET married dropdown fields
router.get('/married', rejectUnauthenticatedVet, (req, res) => {
  const queryText = 'SELECT * FROM married';
  pool.query(queryText)
    .then((data) => res.send(data.rows))
    .catch((err) => {
      console.log('GET married failed: ', err);
      res.sendStatus(500);
    });
});

// GET branch dropdown fields
router.get('/branch', rejectUnauthenticatedVet, (req, res) => {
  const queryText = 'SELECT * FROM branch';
  pool.query(queryText)
    .then((data) => res.send(data.rows))
    .catch((err) => {
      console.log('GET branch failed:', err);
      res.sendStatus(500);
    });
});

// GET rank dropdown fields
router.get('/rank', rejectUnauthenticatedVet, (req, res) => {
  const queryText = 'SELECT * FROM rank';
  pool
    .query(queryText)
    .then((data) => res.send(data.rows))
    .catch((err) => {
      console.log('GET rank failed: ', err);
      res.sendStatus(500);
    });
});

// GET status dropdown fields
router.get('/status', rejectUnauthenticatedVet, (req, res) => {
  const queryText = 'SELECT * FROM status';
  pool
    .query(queryText)
    .then((data) => res.send(data.rows))
    .catch((err) => {
      console.log('GET status failed:', err);
      res.sendStatus(500);
    });
});

// GET discharge dropdown fields
router.get('/discharge', rejectUnauthenticatedVet, (req, res) => {
  const queryText = 'SELECT * FROM discharge';
  pool
    .query(queryText)
    .then((data) => res.send(data.rows))
    .catch((err) => {
      console.log('GET discharge failed: ', err);
      res.sendStatus(500);
    });
});

// GET injury dropdown fields
router.get('/injury', rejectUnauthenticatedVet, (req, res) => {
  const queryText = 'SELECT * FROM injury';
  pool
    .query(queryText)
    .then((data) => res.send(data.rows))
    .catch((err) => {
      console.log('GET injury failed: ', err);
      res.sendStatus(500);
    });
});

// GET categories dropdown fields
router.get('/categories', rejectUnauthenticatedVet, (req, res) => {
  const queryText = 'SELECT * FROM categories';
  pool
    .query(queryText)
    .then((data) => res.send(data.rows))
    .catch((err) => {
      console.log('GET categories failed: ', err);
      res.sendStatus(500);
    });
});

// GET state dropdown fields
router.get('/state', rejectUnauthenticatedVet, (req, res) => {
  const queryText = 'SELECT * FROM state';
  pool
    .query(queryText)
    .then((data) => res.send(data.rows))
    .catch((err) => {
      console.log('GET state failed: ', err);
      res.sendStatus(500);
    });
});

// GET country dropdown fields
router.get('/country', rejectUnauthenticatedVet, (req, res) => {
  const queryText = 'SELECT * FROM country';
  pool
    .query(queryText)
    .then((data) => res.send(data.rows))
    .catch((err) => {
      console.log('GET country failed: ', err);
      res.sendStatus(500);
    });
});




  module.exports = router;