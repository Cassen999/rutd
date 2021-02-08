const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();
// NODEMAILER && POST ROUTE to send an email to admin
router.post('/', (req, res) => {
    console.log('email', req.body);
    const data = req.body;
    const password = process.env.password;
    const smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: { // SENDING EMAIL FROM THIS ADDRESS
            user: 'cassenpt@gmail.com',
            pass: password
        },
        tls: {
            rejectUnauthorized: false 
        }
    });
    smtpTransport.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages!");
        }
      });
      // 'to' will change after development
      // this is the message that will send
    const mailOptions = {
        // from: `cassenthebarber@gmail.com`,
        to: 'cassen.gerber@gmail.com',
        subject: ``,
        html: '<p></p>'
    };
    smtpTransport.sendMail(mailOptions,
        (error, response) => {
            if (error) {
                console.log('error sending', error);
            } else {
                console.log('Success!');
            }
            // ULTRA MEGA IMPORTANT TO CLOSE THE TRANSPORT
            smtpTransport.close();
    });
});
module.exports = router;