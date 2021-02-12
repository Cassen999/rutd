const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticatedVet,
} = require('../modules/authentication-middleware');

router.post('/name', (req, res) => {
  // POST route code here
  let name = req.body;
  console.log(`Posting name:`, name);
 // console.log('RS:', props.store)
//console.log(this.state.user.id);

  let queryText = `INSERT INTO "veteran" ("first_name", "last_name")
  VALUES ($1, $2)
  RETURNING "id";`;
  pool.query(queryText, [name.first_name, name.last_name])
    .then(result => {
      const veteranId = result.rows[0].id

      res.send(veteranId);
    })
    .catch(error => {
      console.log(`Error adding new artwork`, error);
      res.sendStatus(500);
    });

});

router.get('/', rejectUnauthenticatedVet, (req, res) => {
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

router.put('/email',  (req, res) => {
  console.log('in PUT email');
  
  let email = req.body;
  console.log('email:', email);
  

  let queryText = `UPDATE "veteran"
                    SET "email" = $1
                    WHERE "id" = $2;`;

  pool.query(queryText, [email,]).then( (result) => {
    res.sendStatus(200);
  })
  .catch( (error) => {
    console.log('Error from db:', error);
    res.sendStatus(500);
  })
});







module.exports = router;
