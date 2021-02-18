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
    let id = req.user.id; // user id
  
    console.log(`Updating demographics for vet_id: ${id}.`);
  
    let queryText = `UPDATE "veteran" SET "first_name"=$1, "last_name"=$2, 
                      "email"=$3, "date_of_birth"=$4, "gender_id"=$5, "number"=$6,  
                      "married_id"=$7, "children"=$8, "homeless"=$9, "current_address"=$10, 
                      "city"=$11, "state_id"=$12, "zipcode"=$13, "country_id"=$14, "mailing_address"=$15,
                      "city2"=$16, "state_id2"=$17, "zipcode2"=$18, "country_id2"=$19
                      WHERE "vet_id" = ${id};`;
  
    pool.query(queryText, [demographic.first_name, demographic.last_name, 
      demographic.email, demographic.birth, demographic.gender,
      demographic.phone, demographic.marriage, demographic.chilren, 
      demographic.homeless, demographic.homeAddress,
      demographic.homeCity, demographic.homeState, demographic.homeZip, demographic.homeCountry,
      demographic.mailAddress, demographic.mailCity,demographic.mailState, demographic.mailZip, demographic.mailCountry])
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