const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const {
    rejectUnauthenticatedGeneral,
  } = require("../modules/authentication-middleware");
require('dotenv').config();

// put route for the email question component

// NODEMAILER && POST ROUTE to send an email
router.post('/', rejectUnauthenticatedGeneral, (req, res) => {
    console.log('email', req.body);
    const vet_email = req.body.vetEmail;
    const org_email = req.body.org_email;
    const detailText = req.body.text;
    const orgName = req.body.orgName;
    const vetFirstName = req.body.vetFirstName;
    const vetLastName = req.body.vetLastName;
    const sender_type = req.body.sender_type;
    // This will be the generic email body for a vet
    const vetHtmlBody = `<p>Veteran's name is ${vetFirstName} ${vetLastName}</p>
                            <p>Veteran's message ${detailText} </p>
                            <p>and can be reached at ${vet_email}</p>`;
    // This will be the generic email body for an org
    const orgHtmlBody = '';
    // This will be the generic email body for the admin
    const adminHtmlBody = '';
    // This is the type_id of who is the SENDER
    // This will make the conditional work
    
    const password = process.env.password;

    // Conditional to decide which email to send
    if (sender_type === 1) {
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
            to: org_email,
            subject: `A new Veteran is requesting to connect!`,
            html: vetHtmlBody
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
    }
    else if (sender_type === 2) {
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
            to: org_email,
            subject: `A Veteran is waiting to hear back from you!`,
            html: adminHtmlBody
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
    }
    else if (sender_type === 3) {
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
            to: vet_email,
            subject: ``,
            html: orgHtmlBody
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
    }

});
module.exports = router;