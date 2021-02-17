const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticatedAdmin,
} = require("../modules/authentication-middleware");

// GETs all organizations
router.get("/", rejectUnauthenticatedAdmin, (req, res) => {
  const queryText = "SELECT * FROM organization;";
  pool.query(queryText)
  .then((data) => res.send(data.rows))
  .catch((err) => {
    console.log("GET Organization FAILED: ", err);
    res.sendStatus(500);
  });
});

// POST into organization database table
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
    .query(queryText, [name, number, email, city, state_id, pdf, website,
            pictures, description, approved])
    .then((result) => res.json(result.rows))
    .catch((err) => {
      console.log("POST Organization FAILED: ", err);
      res.sendStatus(500);
    });
});

// PUT route for org
router.put("/:id", rejectUnauthenticatedAdmin, (req, res) => {
  let orgID = req.params.id;
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
  const queryText = `UPDATE organization SET name=$1, number=$2, email=$3, 
                    city=$4, state_id=$5, pdf=$6, website=$7, pictures=$8, 
                    description=$9, approved=$11 WHERE id= $10;`;
  pool.query(queryText, [name, number, email, city, state_id, pdf, website,
                        pictures, description, orgID, approved])
    .then((result) => {
      // Delete existing mapping records
      const queryText = `DELETE FROM organization_categories WHERE org_id= $1;`;
      pool.query(queryText, [orgID]).then(() => {
        // Insert new category mapping
        categories.forEach((cat_id) => {
          const queryText = `INSERT INTO organization_categories (org_id, categories_id) values($1, $2);`;
          pool.query(queryText, [orgID, cat_id]);
        });
        res.status(200).json({ result: "success" });
      });
    })
    .catch((err) => {
      console.log("POST Organization FAILED: ", err);
      res.sendStatus(500);
    });
});

// GETS one specific resource
router.get("/:id", rejectUnauthenticatedAdmin, (req, res) => {
  let id = req.params.id;
  const queryText = `SELECT organization.id as org_id, organization.name,
                      organization.number, organization.email, organization.city,
                      organization.pdf, organization.website, organization.pictures,
                      organization.description, state.description AS state,
                      array_agg(categories_id) as categories
                      FROM "organization"
                      LEFT JOIN state ON state.id = "organization".state_id
                      LEFT JOIN organization_categories ON organization.id = organization_categories.org_id
                      WHERE organization.id = $1
                      GROUP BY organization.id, organization.name, organization.number,
                      organization.email, organization.city, organization.pdf,
                      organization.website, organization.pictures, organization.description,
                      state.description;`;
  pool
    .query(queryText, [id])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log("Error inside GET RESOURCE ID route:", error);
      res.sendStatus(500);
    });
});

// GET for resource search bar
router.get("/resource/search", rejectUnauthenticatedAdmin, (req, res) => {
  const searchText = `%${req.query.searchText}%`
  const sqlText = `SELECT "organization"."id", "name" FROM "organization"
                      JOIN "user" ON "user".id = "organization".org_id
                      WHERE "user".type_id = '3' AND "organization".name 
                      ILIKE $1;`;
  pool.query(sqlText, [searchText])
  .then((result) => {
      res.send(result.rows);
  })
  .catch((error) => {
      console.log("ERROR in resources GET", error);
      res.sendStatus(500);
  });
});

// DELETE a resource
router.delete('delete/:id', rejectUnauthenticatedAdmin, (req, res) => {
  let id = Number(req.params.id)
  const sqlText = `DELETE FROM "organization" WHERE id=$1;`
  pool.query(sqlText, [id])
    .then(result => {
      res.sendStatus(201)
    })
    .catch(err => {
      console.log('ERROR in DELETE resource router', err)
      res.sendStatus(500)
    })
});

module.exports = router;
