//import mapStoreToProps from '../../redux/mapStoreToProps';





const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 */
router.put('/',  (req, res) => {
  console.log('in PUT');
  
  let serviceHistory = req.body; // Book with updated content
  
  let id = req.params.id; // id of the book to update
console.log('Updating', art.title);
console.log(art);

  //console.log(`Updating book ${id} with `, book);
let queryText = `UPDATE "veteran"
SET "branch_id" = $1, "rank_id" = $2, "start_date" = $3, "end_date" = $4, "status_id" = $5, "discharge_id" = $6
WHERE "id" = $7;`;

  // TODO - REPLACE BELOW WITH YOUR CODE
  pool.query(queryText, [serviceHistory.branch_id, 
    serviceHistory.rank_id, serviceHistory.start_date, serviceHistory.end_date, 
    serviceHistory.status_id, serviceHistory.discharge_id ]).then( (result) => {
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
