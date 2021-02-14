const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticatedVet,
} = require("../modules/authentication-middleware");

router.get("/gender", rejectUnauthenticatedVet, (req, res) => {
    console.log("in dropdown GET gender");
    const queryText = `SELECT * FROM "gender"`;
    pool.query(queryText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });

  router.get("/marriage", rejectUnauthenticatedVet, (req, res) => {
    console.log("in dropdown GET marriage");
    const queryText = `SELECT * FROM "married"`;
    pool.query(queryText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });

  module.exports = router;