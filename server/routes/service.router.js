const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticatedVet,
} = require('../modules/authentication-middleware');

router.put('/', rejectUnauthenticatedVet, (req, res) => {
  console.log('in PUT');
  
  let service = req.body;
  
  let id = req.params.id;
  console.log('Updating');

  let queryText = `UPDATE "veteran"
                  SET "branch_id" = $1, "rank_id" = $2, "start_date" = $3, 
                  "end_date" = $4, "status_id" = $5, "discharge_id" = $6
                  WHERE "id" = $7;`;

  pool.query(queryText, [serviceHistory.branch_id, 
    serviceHistory.rank_id, serviceHistory.start_date, serviceHistory.end_date, 
    serviceHistory.status_id, serviceHistory.discharge_id ])
    .then( (result) => {
      res.sendStatus(200);
    })
    .catch( (error) => {
      console.log('Error from db:', error);
      res.sendStatus(500);
    })
});

module.exports = router;
