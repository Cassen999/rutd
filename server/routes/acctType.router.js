const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // Get all account types
    const sqlText = `SELECT * FROM type`
    pool.query(sqlText)
    .then((result) => {
        console.log(`Account type GET result.rows, ${result.rows}`)
        res.send(result.rows)
    })
    .catch((error) => {
        console.log('ERROR in acct type GET', error)
        res.sendStatus(500)
    })
  });

  module.exports = router;