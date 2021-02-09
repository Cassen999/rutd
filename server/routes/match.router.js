const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticatedVet,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticatedVet, (req, res) => {
  
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

// GET route for complete matches 
router.get('/complete/:id', (req, res) => {
  console.log('in /match/complete GET route');
  console.log('Is User logged in?');
  console.log('req.user:', req.user);
  let vetId = req.params.id;
  let queryText = `SELECT match.*, veteran.first_name, organization.name, organization.number, organization.email, organization.website, organization.pictures, organization.description FROM match
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
