const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticatedVet,
} = require('../modules/authentication-middleware');

router.put('/', rejectUnauthenticatedVet, (req, res) => {
  const branch_id = req.body.branch
  const rank_id = req.body.rank
  const start_date = req.body.startDate
  const end_date = req.body.endDate
  const status_id = req.body.status
  const discharge_id = req.body.discharge
  const user_id = req.user.id

  console.log('Updating service', req.body);

  const queryText = `UPDATE "veteran"
                  SET "branch_id" = $1, "rank_id" = $2, "start_date" = $3, 
                  "end_date" = $4, "status_id" = $5, "discharge_id" = $6
                  WHERE "id" = $7;`;

  pool.query(queryText, [branch_id, 
    rank_id, start_date, end_date, 
    status_id, discharge_id, user_id ])
    .then( (result) => {
      res.sendStatus(200);
    })
    .catch( (error) => {
      console.log('Error from db:', error);
      res.sendStatus(500);
    })
});

module.exports = router;
