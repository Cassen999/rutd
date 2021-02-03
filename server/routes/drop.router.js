const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET gender
router.get("/gender", (req, res) => {
  const queryText = "SELECT * FROM gender";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET gender failed: ", err);
      res.sendStatus(500);
    });
});

// GET married
router.get("/married", (req, res) => {
  const queryText = "SELECT * FROM married";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET married failed: ", err);
      res.sendStatus(500);
    });
});

module.exports = router;
