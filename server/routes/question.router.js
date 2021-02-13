const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticatedVetAdmin
} = require("../modules/authentication-middleware");

// Make a put for each resgistration category
router.put('/:id', (req,res) => {
    console.log('In router.put')
    const id = req.user.id;
    console.log('params', req.body, id)
    const sqlText = `UPDATE "veteran" SET username=$1, first_name=$2,
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

module.exports = router;