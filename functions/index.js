const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQvfzGnX6tvw2VTj0G9UyqrnWsGNRbAVwBE7Tshilq4ZEEdkS0labBfhJFhxRJSm0pINEcmX9KI9qB2ISbm8nVF00zoxxBl9M')

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());
//API routes
app.get('/', (request, response)=> response.status(200).send('hello, world'))

app.post('/payments/create', async(request, response) =>{
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for tihs amount >>>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,//subunits of the currency
        currency: "usd",
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//Listen command

exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/clone-a7207/us-central1/api