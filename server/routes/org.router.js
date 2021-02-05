const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
/**
 * GET all organization
 */

router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = "SELECT * FROM organization;";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET Veteran failed: ", err);
      res.sendStatus(500);
    });
});

/**
 * POST organization
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  const name = req.body.name;
  const number = req.body.number;
  const email = req.body.email;
  const city = req.body.city;
  const state_id = req.body.state_id;
  const pdf = req.body.pdf;
  const website = req.body.website;
  const pictures = req.body.pictures;
  const description = req.body.description;
  const categories_id = req.body.categories_id;
  const approved = req.body.approved;
  const queryText = `INSERT INTO organization	
      (name, number, email, city, state_id, pdf, website, pictures, description, categories_id, approved)	
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING "id";`;
  pool
    .query(queryText, [
      name,
      number,
      email,
      city,
      state_id,
      pdf,
      website,
      pictures,
      description,
      categories_id,
      approved,
    ])
    .then((result) => res.json(result.rows))
    .catch((err) => {
      console.log("POST Organization FAILED: ", err);
      res.sendStatus(500);
    });
});

module.exports = router;
