const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GETs all vets by name limited to 10

router.get('/', (req, res) => {
    const sqlText = `SELECT "first_name", "last_name", "match".received, "organization"."name" FROM "user"
                        JOIN "veteran" ON "vet_id" = "user".id
                        JOIN "match" ON "match".vet_id = "veteran".id
                        JOIN "organization" ON "organization".id = "match".org_id
                        ORDER BY "last_name" ASC
                        LIMIT 10;`;
    pool.query(sqlText)
    .then((result) => {
        console.log('Getting vets by name result', result.rows)
        res.send(result.rows)
    })
    .catch((error) => {
        console.log('ERROR in vet GET', error)
        res.sendStatus(500)
    })
});

module.exports = router;