const express = require('express');
const {
  rejectUnauthenticatedAdmin,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.delete('/:id', rejectUnauthenticatedAdmin, (req, res) => {
  let id = Number(req.params.id)
  console.log('delete router req.params', req.params)
  console.log('delete router id', id)
  const sqlText = `DELETE FROM "organization" WHERE id=$1;`
  pool.query(sqlText, [id])
    .then(result => {
      console.log('DELETE router result.rows', result.rows)
      res.sendStatus(201)
    })
    .catch(err => {
      console.log('ERROR in DELETE resource router', err)
      res.sendStatus(500)
    })
});

module.exports = router;