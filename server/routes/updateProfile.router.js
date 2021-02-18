const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticatedVet,
} = require('../modules/authentication-middleware');

// PUT route to update Veteran table on values from the Misc Question form
router.put('/misc/:id', (req,res) => {
    console.log('In PUT router for miscQuestions');
    const id = req.params.id;
    const { compensationId, registered, imminentDanger, purpleHeart } = req.body;
    const sqlText = `UPDATE "veteran" SET compensation=$1, percentage=$2,
                     danger_areas=$3, purple_heart=$4 WHERE vet_id=$5;`;
    pool.query(sqlText, [registered, compensationId, imminentDanger, purpleHeart, id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in PUT for miscQuestions', error);
      res.sendStatus(500);
    })
})

// PUT route to update Veteran table on values from the Malady/Health Question form
router.put('/malady/:id', (req,res) => {
    console.log('In PUT router for miscQuestions');
    const id = req.params.id;
    const malady = req.body.selectedMalady[0]; //this only targets the first value selected by the user
                                               //because the db isn't set up to hold more than one injury value per user
    console.log('updating malady to be:', malady);
    const sqlText = `UPDATE "veteran" SET injury_id=$1 WHERE vet_id=$2;`;
    pool.query(sqlText, [malady, id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in PUT for miscQuestions', error);
      res.sendStatus(500);
    })
})

// PUT route to update Veteran table on values from the Demographics Question form
router.put('/demographic', rejectUnauthenticatedVet, (req, res) => {

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

// Updates vet's service history
router.put('/service', rejectUnauthenticatedVet, (req, res) => {
    const branch_id = req.body.branch
    const rank_id = req.body.rank
    const start_date = req.body.startDate
    const end_date = req.body.endDate
    const status_id = req.body.status
    const discharge_id = req.body.discharge
    const user_id = req.user.id
  
    console.log('Updating service', req.body);
  
    const queryText = `UPDATE "veteran"
                    SET "branch_id" = $1, "rank_id" = $2, "start_date" = $3, 
                    "end_date" = $4, "status_id" = $5, "discharge_id" = $6
                    WHERE "id" = $7;`;
  
    pool.query(queryText, [branch_id, 
      rank_id, start_date, end_date, 
      status_id, discharge_id, user_id ])
      .then( (result) => {
        res.sendStatus(200);
      })
      .catch( (error) => {
        console.log('Error from db:', error);
        res.sendStatus(500);
      })
});

module.exports = router;