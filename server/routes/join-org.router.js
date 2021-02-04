const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post("/:vet_id/:org_id", (req, res) => {
  const { vet_id, org_id } = req.params;

  const queryText = `INSERT INTO match
  (vet_id, org_id)
  VALUES ($1, $2) RETURNING *`;
  pool
    .query(queryText, [vet_id, org_id])
    .then(() => {
      res.json("Joined the org");
    })
    .catch((err) => {
      console.log("Joining org failed: ", err);
      res.sendStatus(500);
    });
});
module.exports = router;
