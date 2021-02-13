const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticatedVetAdmin
} = require("../modules/authentication-middleware");

router.put('/id', (req,res) => {
    console.log('In router.put')
    const id = req.user.id;
    console.log('params', req.body, id)
    const sqlText = `UPDATE "user" SET username=$1, first_name=$2,
      last_name=$3, phone_number=$4 WHERE id=${id} 
      RETURNING id`
    pool.query(sqlText, [req.body.username, req.body.first_name, req.body.last_name, req.body.phone_number])
    .then((result) => {
      res.send(result.rows)
    })
    .catch((error) => {
      console.log('Error in router.post', error)
      res.sendStatus(500)
    })
  })

  // put route for the email question component
router.put('/email',  (req, res) => {
  console.log('In, PUT email.');
  
  let email = req.body.email; 
  let id = req.body.user_id; // user id
  
console.log(`Updating email: ${email} for user id: ${id}`);

let queryText = `UPDATE "veteran"
                  SET "email" = $1
                  WHERE "id" = $2;
                  `;

  // TODO - REPLACE BELOW WITH YOUR CODE
  pool.query(queryText, [email, id]).then( (result) => {
            res.sendStatus(200);
        })
        .catch( (error) => {
            console.log('Error from Updating email:', error);
            res.sendStatus(500);
        })
});//END PUT


module.exports = router;