const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticatedVet,
} = require('../modules/authentication-middleware');

router.put('/', rejectUnauthenticatedVet, (req, res) => {

  let demographic = req.body;
  let id = req.body.user_id; // user id

  console.log(`Updating demographics for vet_id: ${id}.`);

  let queryText = `INSERT INTO "veteran" ("first_name", "last_name", 
                    "email", "date_of_birth", "gender_id", "number",  
                    "married_id", "children", "homeless", "current_address", 
                    "city", "state_id", "zipcode", "country_id", "mailing_address")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 
                    $12, $13, $14, $15)
                    WHERE "vet_id" = $16;`;

  pool.query(queryText, [demograhpic.first_name, demographic.last_name, 
    demograhpic.email, demograhpic.date_of_birth, demograhpic.number, 
    demograhpic.gender_id, demographic.married_id, demographic.chilren, 
    demographic.homeless, demographic.current_address,demographic.city, 
    demographic.state_id, demographic.zipcode, demographic.country_id,
    demographic.mailing_address, id])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new veteran`, error);
      res.sendStatus(500);
    });

});

module.exports = router;
