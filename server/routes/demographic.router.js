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
                    "city", "state_id", "zipcode", "country_id", "mailing_address",
                    "city2", "state_id2", "zipcode2", "country_id2")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 
                    $12, $13, $14, $15, $16, $17, $18, $19)
                    WHERE "vet_id" = $20;`;

  pool.query(queryText, [demographic.first_name, demographic.last_name, 
    demographic.email, demographic.birth, demographic.gender,
    demographic.phone, demographic.marriage, demographic.chilren, 
    demographic.homeless, demographic.homeAddress,
    demographic.homeCity, demographic.homeState, demographic.homeZip, demographic.homeCountry,
    demographic.mailAddress, demographic.mailCity,demographic.mailState, demographic.mailZip, demographic.mailCountry, id])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new veteran`, error);
      res.sendStatus(500);
    });

});

module.exports = router;
