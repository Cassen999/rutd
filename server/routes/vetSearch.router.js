const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// GETs all vets by name limited to 10

router.get("/", rejectUnauthenticated, (req, res) => {
    const searchText = req.query.searchText
    console.log('vetSearch req.query ', req.query)
    const sqlText = `SELECT "first_name", "last_name", "match".received, "organization"."name" FROM "user"
                        JOIN "veteran" ON "vet_id" = "user".id
                        JOIN "match" ON "match".vet_id = "veteran".id
                        JOIN "organization" ON "organization".id = "match".org_id
                        WHERE "user".type_id = '1' AND "veteran".first_name || "veteran".last_name 
                        ILIKE '%$1%';`;
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
