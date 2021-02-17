const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticatedVetAdmin,
} = require("../modules/authentication-middleware");

router.get("/", rejectUnauthenticatedVetAdmin, (req, res) => {
  let queryText = `SELECT * FROM "categories"`;
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
