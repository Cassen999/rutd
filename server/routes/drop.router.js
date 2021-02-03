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
// GET branch
router.get("/branch", (req, res) => {
  const queryText = "SELECT * FROM branch";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET branch failed: ", err);
      res.sendStatus(500);
    });
});
// GET rank
router.get("/rank", (req, res) => {
  const queryText = "SELECT * FROM rank";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET rank failed: ", err);
      res.sendStatus(500);
    });
});
// GET status
router.get("/status", (req, res) => {
  const queryText = "SELECT * FROM status";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET status failed: ", err);
      res.sendStatus(500);
    });
});

// GET discharge
router.get("/discharge", (req, res) => {
  const queryText = "SELECT * FROM discharge";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET discharge failed: ", err);
      res.sendStatus(500);
    });
});

// GET injury
router.get("/injury", (req, res) => {
  const queryText = "SELECT * FROM injury";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET injury failed: ", err);
      res.sendStatus(500);
    });
});

// GET percentage
router.get("/percentage", (req, res) => {
  const queryText = "SELECT * FROM percentage";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET percentage failed: ", err);
      res.sendStatus(500);
    });
});

// GET categories
router.get("/categories", (req, res) => {
  const queryText = "SELECT * FROM categories";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET categories failed: ", err);
      res.sendStatus(500);
    });
});
// GET state
router.get("/state", (req, res) => {
  const queryText = "SELECT * FROM state";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET state failed: ", err);
      res.sendStatus(500);
    });
});

module.exports = router;
