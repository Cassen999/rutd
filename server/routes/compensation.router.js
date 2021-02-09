const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticatedVet,
} = require('../modules/authentication-middleware');

router.get("/percentage", rejectUnauthenticatedVet, (req, res) => {
  console.log('in /percentage GET route');
  console.log('Is User logged in?', req.isAuthenticated());
  console.log('req.user:', req.user);

  const queryText = `SELECT * FROM "percentage"`;
  
  pool
    .query(queryText).then((result) => {
      res.send(result.rows);
    }).catch((err) => {
      console.log("GET percentage failed: ", err);
      res.sendStatus(500);
    });
});

router.put('/', rejectUnauthenticatedVet,  (req, res) => {
  console.log('in PUT');
  
  let compensation = req.body;
  
  let id = req.params.id;
  console.log(compensation);

  let queryText = `UPDATE "veteran"
                    SET "compensation" = $1, "percentage" = $2, "danger_areas" = $3, 
                    "purple_heart" = $4
                    WHERE "id" = $5;`;

  pool.query(queryText, [compensation.compensation, compensation.percentage, 
    compensation.danger_areas, compensation.purple_heart, ])
    
    .then( (result) => {
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
