const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get("/", rejectUnauthenticated, (req, res) => {
    const searchText = `%${req.query.searchText}%`
    console.log('vetSearch req.query ', req.query)
    const sqlText = `SELECT "organization"."id", "name" FROM "organization"
                        JOIN "user" ON "user".id = "organization".org_id
                        WHERE "user".type_id = '3' AND "organization".name 
                        ILIKE $1;`;
    pool.query(sqlText, [searchText])
    .then((result) => {
        console.log("Getting searched for resources result", result.rows);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log("ERROR in resources GET", error);
        res.sendStatus(500);
    });
});

module.exports = router;