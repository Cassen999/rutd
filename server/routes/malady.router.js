//import mapStoreToProps from '../../redux/mapStoreToProps';





const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('in /malady GET route');
  console.log('Is User logged in?', req.isAuthenticated());
  console.log('req.user:', req.user);

  let queryText = `SELECT * FROM "injury"`;
                    
  
  pool.query(queryText).then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });


});





router.put('/',  (req, res) => {
  console.log('in PUT');
  
  let maladyId = req.body; // Book with updated content
  
  let id = req.params.id; // id of the book to update
// console.log('Updating', health.title);
console.log('malady id:', maladyId);
console.log('in /malady GET route');
  console.log('Is User logged in?', req.isAuthenticated());
  console.log('req.user:', req.user);


  //console.log(`Updating book ${id} with `, book);
let queryText = `UPDATE "veteran"
SET "injury_id" = $1
WHERE "id" = $2;`;

  // TODO - REPLACE BELOW WITH YOUR CODE
  pool.query(queryText, [maladyId, ]).then( (result) => {
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
