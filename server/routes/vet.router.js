const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GETs all vets by name limited to 10
// This sqlText will have to change once there is info in vet table
// Include a limit and order by

router.get('/', (req, res) => {
    const sqlText = `SELECT "user".username FROM "user" 
                    WHERE "user".type_id = 1;`;
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