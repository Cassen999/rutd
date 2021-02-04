//import mapStoreToProps from '../../redux/mapStoreToProps';
//comment




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
  
  let compensation = req.body; // Book with updated content
  
  let id = req.params.id; // id of the book to update
// console.log('Updating', health.title);
console.log(compensation);

  //console.log(`Updating book ${id} with `, book);
let queryText = `UPDATE "veteran"
SET "compensation" = $1, "percentage" = $2, "danger_areas" = $3, "purple_heart" = $4
WHERE "id" = $5;`;

  // TODO - REPLACE BELOW WITH YOUR CODE
  pool.query(queryText, [compensation.compensation, compensation.percentage, compensation.danger_areas, 
  compensation.purple_heart, ]).then( (result) => {
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
