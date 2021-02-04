//import mapStoreToProps from '../../redux/mapStoreToProps';

const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// GET route for matches
router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = `
    SELECT 'match.*', 'veteran.*', 'organization.*' 
    FROM match 
    INNER JOIN veteran ON 'veteran.id' = 'match.vet_id'
    INNER JOIN organization ON 'organization.id' = 'match.org_id';`;

  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("Get Matches failed: ", err);
      res.sendStatus(500);
    });
});

module.exports = router;
