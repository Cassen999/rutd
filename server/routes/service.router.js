const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticatedVet,
} = require('../modules/authentication-middleware');

router.put('/', rejectUnauthenticatedVet, (req, res) => {
  console.log('in PUT');
  //might need id parameter that i deleted
  let service = req.body;
  
  let userId = req.user.id; // id of the book to update
console.log('Updating');
console.log(service);

  //console.log(`Updating book ${id} with `, book);
let queryText = `UPDATE "veteran"
SET "branch_id" = $1, "rank_id" = $2, "start_date" = $3, "end_date" = $4, "status_id" = $5, "discharge_id" = $6
WHERE "vet_id" = $7;`;

  // TODO - REPLACE BELOW WITH YOUR CODE
  pool.query(queryText, [service.branch_id, 
    service.rank_id, service.start_date, service.end_date, 
    service.status_id, service.discharge_id, userId]).then( (result) => {
            // Delete sends back an OK status, 
            // client will then ask for all the data with a GET
            res.sendStatus(200);
        })
        .catch( (error) => {
            console.log('Error from db:', error);
            res.sendStatus(500);
        })

});

module.exports = router;
