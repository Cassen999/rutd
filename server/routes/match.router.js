//import mapStoreToProps from '../../redux/mapStoreToProps';

const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log("in /match GET route");
  console.log("Is User logged in?", req.isAuthenticated());
  console.log("req.user:", req.user);

  let queryText = `SELECT * FROM "categories"`;

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.get("/complete/:id", (req, res) => {
  // GET route for complete matches
  console.log("in /match/complete GET route");
  console.log("Is User logged in?");
  console.log("req.user:", req.user);
  let vetId = req.params.id;
  let queryText = `SELECT * FROM (
    SELECT oc.org_id,
    count(oc.categories_id) AS org_needs,
    count(vc.categories_id) AS vet_has,
    (count(vc.categories_id) + 0.0) / (count(oc.categories_id) + 0.0) * 100 AS percent_match
    FROM organization_categories oc
    LEFT JOIN veteran_categories vc ON vc.categories_id = oc.categories_id
    AND vc.vet_id = 1	
    GROUP BY oc.org_id
    ORDER BY percent_match desc, vet_has desc) AS records WHERE percent_match > 0;`;

  pool
    .query(queryText, [vetId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
