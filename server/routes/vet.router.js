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

router.get("/all", rejectUnauthenticatedAdmin, (req, res) => {
  const queryText = "SELECT * FROM veteran;";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET Veteran failed: ", err);
      res.sendStatus(500);
    });
});

router.post("/", rejectUnauthenticatedVetAdmin, (req, res) => {
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
                      (first_name, last_name, email, date_of_birth, number, 
                      gender_id, married_id, children, homeless, 
                      current_address, city, state_id, zipcode, country_id, 
                      mailing_address, city2, state_id2, zipcode2, 
                      country_id2, branch_id, rank_id, start_date, end_date, 
                      status_id, discharge_id, injury_id, compensation, 
                      percentage, danger_areas, purple_heart )	
                      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 
                      $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, 
                      $23, $24, $25, $26, $27, $28, $29, $30) RETURNING "id";`;
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

// GET one specific veteran by ID
// TO DO - MAKE SURE joins are rendering correctly
router.get("/:id", rejectUnauthenticatedAdmin, (req, res) => {
  let id = req.params.id;
  console.log("--- This is the ID of the veteran you clicked on: ", id);
  const queryText = `SELECT 
    veteran.first_name, 
    veteran.last_name, 
    veteran.email, 
    veteran.date_of_birth, 
    veteran.number,
    veteran.children, 
    veteran.homeless, 
    veteran.current_address, 
    veteran.city, 
    veteran.city2, 
    veteran.zipcode,
    veteran.state_id2,
    veteran.country_id2,
    veteran.mailing_address, 
    veteran.zipcode2, 
    veteran.start_date, 
    veteran.end_date, 
    veteran.compensation, 
    veteran.danger_areas, 
    veteran.purple_heart,
    injury.description AS injury,
    discharge.description AS discharge,
    gender.description AS gender,
    married.description AS married ,
    state.description AS state,
    country.description AS country,
    branch.description AS branch ,
    rank.description AS rank ,
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

// Get a vet's id from vet table
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

router.put("/:id", rejectUnauthenticatedAdmin, (req, res) => {
  console.log("Updating Org ", req.body); // not coming through
  let orgID = req.params.id;
  // capture
  const name = req.body.name;
  const number = req.body.number;
  const email = req.body.email;
  const city = req.body.city;
  const state_id = req.body.state_id;
  const pdf = req.body.pdf;
  const website = req.body.website;
  const pictures = req.body.pictures;
  const description = req.body.description;
  const approved = req.body.approved;
  const categories = req.body.categories;
  const queryText = `UPDATE organization SET name=$1, number=$2, email=$3, city=$4, state_id=$5, pdf=$6, website=$7, pictures=$8, description=$9, approved=$11 WHERE id= $10;`;
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
      orgID,
    ])
    .then((result) => {
      // Delete existing mapping records
      const queryText = `DELETE FROM veteran_categories WHERE vet_id= $1;`;
      pool.query(queryText, [orgID]).then(() => {
        // Insert new category mapping
        categories.forEach((cat_id) => {
          const queryText = `INSERT INTO veteran_categories (vet_id, categories_id) values($1, $2);`;
          pool.query(queryText, [orgID, cat_id]);
        });
        res.status(200).json({ result: "success" });
      });
    })
    .catch((err) => {
      console.log("POST Veteran FAILED: ", err);
      res.sendStatus(500);
    });
});
module.exports = router;
