const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticatedVet,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticatedVet, (req, res) => {
  console.log('in /health GET route');
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
  
  let health = req.body;
  console.log(health);
  
  let id = req.params.id;

  let queryText = `UPDATE "veteran"
                    SET "injury_id" = $1
                    WHERE "id" = $2;`;

  pool.query(queryText, [health.injury_id,]).then( (result) => {
    res.sendStatus(200);
  })
  .catch( (error) => {
    console.log('Error from db:', error);
    res.sendStatus(500);
  })
});

module.exports = router;
