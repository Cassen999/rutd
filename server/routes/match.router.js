//import mapStoreToProps from '../../redux/mapStoreToProps';





const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('in /match GET route');
  console.log('Is User logged in?', req.isAuthenticated());
  console.log('req.user:', req.user);

  let queryText = `SELECT * FROM "categories"`;
                    
  
  pool.query(queryText).then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });


});

router.get('/complete/:id', (req, res) => {
  // GET route for complete matches 
  console.log('in /match/complete GET route');
  console.log('Is User logged in?');
  console.log('req.user:', req.user);
  let vetId = req.params.id;
  let queryText = `SELECT match.*, veteran.first_name, organization.* FROM match
                  INNER JOIN veteran ON veteran.id = match.vet_id
                  INNER JOIN organization ON organization.id = match.org_id
                  WHERE veteran.id = $1;`;
                    
  pool.query(queryText, [vetId]).then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });


});




    module.exports = router;
