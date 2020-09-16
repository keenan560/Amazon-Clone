const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { json } = require('express');
const stripe = require("stripe")(
  `sk_test_51HQhQtKmdphqYh3kUU7rGPITvS0aQey8mPYxaToiSn8T6AImmjBWim0eRR1157ctfkdgFZmg80yF4s9hrpkLP8Ok00bqd0K0yp`
);

// API

// App config
const app = express();


// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/',(req, res)  => res.status(200).send('HELLO WORLD'));

app.post('/payments/create', async (req, res) => {

    
    const total = req.query.total;
        console.log(
          `Payment request received BOOM! for this amount >>> ${total}`
        );
        const paymentIntent = await stripe.paymentIntents.create({
          amount: total, //subunits of the currency
          currency: "usd",
        });
    

 

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
// To turn on a cloud function
exports.api = functions.https.onRequest(app);

// http://localhost:5001/challenge-7803c/us-central1/api