const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticatedAdmin,
} = require("../modules/authentication-middleware");

router.get("/", rejectUnauthenticatedAdmin, (req, res) => {
  const queryText = "SELECT * FROM organization;";
  pool
    .query(queryText)
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log("GET Organization FAILED: ", err);
      res.sendStatus(500);
    });
});

router.post("/", rejectUnauthenticatedAdmin, (req, res) => {
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
  const queryText = `INSERT INTO organization	
                      (name, number, email, city, state_id, pdf, website, 
                      pictures, description, approved)	
                      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)  RETURNING "id";`;

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
      approved,
    ])
    .then((result) => res.json(result.rows))
    .catch((err) => {
      console.log("POST Organization FAILED: ", err);
      res.sendStatus(500);
    });
});

// PUT route for org

router.put("/id", rejectUnauthenticatedAdmin, (req, res) => {
  console.log("Updating Org ", req.body); // not coming through
  let orgID = req.params.id;
  // let userID = req.user.id;
  console.log("ROUTER PUT: ID of the dream you are updating: ", orgID);
  console.log("ROUTER PUT: user ID:", userID);
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
  const categories_id = req.body.categories_id;
  const approved = req.body.approved;
  const queryText = `UPDATE organization SET
    name=$1, number=$2, email=$3, city=$4, state_id=$5, pdf=$6,
    website=$7, pictures=$8, description=$9, approved=$11 WHERE id= $10;`;
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
    .then((data) => {
      console.log(data);
      const queryText =
        "SELECT * FROM organization LEFT JOIN (SELECT model.id, model.name as model, make.name as make from model left join make on model.make_id = make.id) as model ON vehicle.model_id = model.id;";
      pool
        .query(queryText)
        .then((data) => res.json(data.rows))
        .catch((err) => {
          console.log("Get Vehicles failed: ", err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log("Update Vehicles failed: ", err);
      res.sendStatus(500);
    });
});
// GETS one specific resource
router.get("/:id", rejectUnauthenticatedAdmin, (req, res) => {
  let id = req.params.id;
  console.log("--- This is the ID of the RESOURCE you clicked on: ", id);
  const queryText = `SELECT organization.org_id,
    organization.name,
    organization.number,
    organization.email,
    organization.city,
    organization.pdf,
    organization.website,
    organization.pictures,
    organization.description,
    state.description AS state,
    categories.description AS categories
    FROM "organization"
    LEFT JOIN state ON state.id = "organization".state_id
    LEFT JOIN categories ON categories.id = "organization".categories_id
    WHERE organization.id = $1;`;
  pool
    .query(queryText, [id])
    .then((result) => {
      console.log("GET This is the RESOURCE you've selected: ", result.rows); // WORKING
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log("Error inside GET RESOURCE ID route:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
