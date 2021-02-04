const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GETs all vets by name limited to 10
// This sqlText will have to change once there is info in vet table
// Include a limit and order by

router.get("/", (req, res) => {
  const sqlText = `SELECT "first_name", "last_name", "match".received, "organization"."name" FROM "user"
                        JOIN "veteran" ON "vet_id" = "user".id
                        JOIN "match" ON "match".vet_id = "veteran".id
                        JOIN "organization" ON "organization".id = "match".org_id
                        ORDER BY "last_name" ASC
                        LIMIT 10;`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log("Getting vets by name result", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("ERROR in vet GET", error);
      res.sendStatus(500);
    });
});

/**
 * GET all veterans
 */

router.get("/all", (req, res) => {
  const queryText = "SELECT * FROM veteran;";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET Veteran failed: ", err);
      res.sendStatus(500);
    });
});

/**
 * POST veteran
 */
router.post("/", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const date_of_birth = req.body.date_of_birth;
  const number = req.body.number;
  const gender_id = req.body.gender_id;
  const married_id = req.body.married_id;
  const children = req.body.children;
  const homeless = req.body.homeless;
  const current_address = req.body.current_address;
  const city = req.body.city;
  const state_id = req.body.state_id;
  const zipcode = req.body.zipcode;
  const country_id = req.body.country_id;
  const mailing_address = req.body.mailing_address;
  const city2 = req.body.city2;
  const state_id2 = req.body.state_id2;
  const zipcode2 = req.body.zipcode2;
  const country_id2 = req.body.country_id2;
  const branch_id = req.body.branch_id;
  const rank_id = req.body.rank_id;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;
  const status_id = req.body.status_id;
  const discharge_id = req.body.discharge_id;
  const injury_id = req.body.injury_id;
  const compensation = req.body.compensation;
  const percentage = req.body.percentage;
  const danger_areas = req.body.danger_areas;
  const purple_heart = req.body.purple_heart;
  const queryText = `INSERT INTO veteran	
      (first_name, last_name, email, date_of_birth, number, gender_id, married_id, children, homeless, current_address, city, state_id, zipcode, country_id, mailing_address, city2, state_id2, zipcode2, country_id2, branch_id, rank_id, start_date, end_date, status_id, discharge_id, injury_id, compensation, percentage, danger_areas, purple_heart )	
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30) RETURNING "id";`;
  pool
    .query(queryText, [
      first_name,
      last_name,
      email,
      date_of_birth,
      number,
      gender_id,
      married_id,
      children,
      homeless,
      current_address,
      city,
      state_id,
      zipcode,
      country_id,
      mailing_address,
      city2,
      state_id2,
      zipcode2,
      country_id2,
      branch_id,
      rank_id,
      start_date,
      end_date,
      status_id,
      discharge_id,
      injury_id,
      compensation,
      percentage,
      danger_areas,
      purple_heart,
    ])
    .then((result) => res.json(result.rows))
    .catch((err) => {
      console.log("POST Veteran FAILED: ", err);
      res.sendStatus(500);
    });
});

module.exports = router;
