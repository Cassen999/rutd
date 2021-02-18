const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticatedAdmin,
  rejectUnauthenticatedVet,
  rejectUnauthenticatedVetAdmin,
} = require("../modules/authentication-middleware");

// GETs all vets by name 
router.get("/", rejectUnauthenticatedAdmin, (req, res) => {
  const sqlText = `SELECT "first_name", "last_name", "match".received, 
                  "match".org_id, "organization"."name", "veteran".id, 
                  "organization".id 
                  FROM "user"
                  JOIN "veteran" ON "vet_id" = "user".id
                  JOIN "match" ON "match".vet_id = "veteran".id
                  JOIN "organization" ON "organization".id = "match".org_id
                  ORDER BY "last_name" ASC;`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("ERROR in vet GET", error);
      res.sendStatus(500);
    });
});

// GET one specific veteran's info by ID
router.get("/:id", rejectUnauthenticatedVetAdmin, (req, res) => {
  let id = req.params.id;
  const queryText = `SELECT veteran.first_name, veteran.last_name, veteran.email, veteran.status_id, 
                      veteran.date_of_birth, veteran.number, veteran.children, 
                      veteran.homeless, veteran.current_address, veteran.city, 
                      veteran.city2, veteran.zipcode, veteran.state_id2,
                      veteran.country_id2, veteran.mailing_address, veteran.zipcode2, 
                      veteran.start_date, veteran.end_date, veteran.compensation, 
                      veteran.danger_areas, veteran.purple_heart, 
                      injury.description AS injury, discharge.description AS discharge,
                      gender.description AS gender, married.description AS married ,
                      state.description AS state, country.description AS country,
                      branch.description AS branch, rank.description AS rank ,
                      percentage.description AS percentage
                      FROM veteran
                      LEFT JOIN injury ON injury.id = veteran.injury_id
                      LEFT JOIN discharge ON discharge.id = veteran.discharge_id
                      LEFT JOIN gender ON gender.id = veteran.gender_id
                      LEFT JOIN married ON married.id = veteran.married_id
                      LEFT JOIN state ON state.id = veteran.state_id
                      LEFT JOIN country ON country.id = veteran.country_id
                      LEFT JOIN branch ON branch.id = veteran.branch_id
                      LEFT JOIN rank ON rank.id = veteran.rank_id
                      LEFT JOIN percentage ON percentage.id = veteran.percentage
                      WHERE veteran.id = $1;`;
  pool
    .query(queryText, [id])
    .then((result) => {
      console.log("GET This is the VETERAN you've selected: ", result.rows); // WORKING
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error inside GET ID route:", error);
      res.sendStatus(500);
    });
});

// GET a vet's id from vet table
router.get("/vetid/:id", rejectUnauthenticatedVet, (req, res) => {
  const sqlText = `SELECT "veteran".id, "veteran".first_name, 
                      "veteran".last_name, "veteran".email FROM "veteran"
                    JOIN "user" ON "user".id = "veteran".vet_id
                    WHERE "user".id = $1;`;
  const id = req.params.id;
  pool
    .query(sqlText, [id])
    .then((result) => {
      console.log("Getting vets id", result.rows);
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log("ERROR in get vets id", error);
      res.sendStatus(500);
    });
});

// POST new vet into vet table 
// Only vet_id so that they can use PUT route to update profile info
router.post("/newVet/:id", rejectUnauthenticatedVetAdmin, (req, res) => {
  const user_id = req.params.id;
  const queryText = `INSERT INTO  "veteran" ("vet_id")
                      VALUES ($1);`;
  pool
    .query(queryText, [user_id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("POST new Veteran FAILED: ", err);
      res.sendStatus(500);
    });
});

router.get("/exist/:id", rejectUnauthenticatedVet, (req, res) => {
  const user_id = req.params.id;
  console.log("exist router user_id", user_id);
  const queryText = `SELECT EXISTS
                    (SELECT 1 FROM "veteran" WHERE "veteran".vet_id = $1);`;
  pool
    .query(queryText, [user_id])
    .then((result) => {
      console.log("exist result.rows", result.rows);
      res.send(result.rows[0]);
    })
    .catch((err) => {
      console.log("GET exist FAILED: ", err);
      res.sendStatus(500);
    });
});

// GET for vet search bar
router.get("/vetSearch/vetSearch", rejectUnauthenticatedAdmin, (req, res) => {
  const searchText = `%${req.query.searchText}%`
  console.log('vetSearch req.query ', req.query)
  const sqlText = `SELECT "first_name", "last_name", "match".received, 
                      "organization"."name" FROM "user"
                      JOIN "veteran" ON "vet_id" = "user".id
                      JOIN "match" ON "match".vet_id = "veteran".id
                      JOIN "organization" ON "organization".id = 
                      "match".org_id
                      WHERE "user".type_id = '1' AND "veteran".first_name || 
                      "veteran".last_name 
                      ILIKE $1;`;
  pool.query(sqlText, [searchText])
  .then((result) => {
      console.log("Getting searched for vets result", result.rows);
      res.send(result.rows);
  })
  .catch((error) => {
      console.log("ERROR in vetSearch GET", error);
      res.sendStatus(500);
  });
});

module.exports = router;
