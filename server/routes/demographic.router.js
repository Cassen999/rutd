//import mapStoreToProps from '../../redux/mapStoreToProps';





const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 */
router.post('/', (req, res) => {
  // POST route code here
  let demographic = req.body;
  console.log(`Adding art`, art);
 // console.log('RS:', props.store)
//console.log(this.state.user.id);

  let queryText = `INSERT INTO "veteran" ("first_name", "last_name", "email", "date_of_birth", 
  "number", "gender_id", "married_id", "children", "homeless", "current_address", "city", 
  "state_id", "zipcode", "country_id", "mailing_address", "branch_id", "rank_id", "start_date", 
  "end_date", "status_id", "discharge_id", "injury_id", "compensation", "percentage", "danger_areas", "purple_heart")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26);
  `;
  pool.query(queryText, [demograhpic.first_name, demographic.last_name, demograhpic.email, demograhpic.date_of_birth, demograhpic.number, demograhpic.gender_id])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new artwork`, error);
      res.sendStatus(500);
    });

});



    module.exports = router;
