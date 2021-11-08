const functions = require("firebase-functions");

const express= require("express");
const cors=require("cors");
const stripe= require("stripe")('sk_test_51JdCsbSDjgMnau9nxI19Ps8mwEBWzESAjcS9t5HPNFr4OR2LhUiZbj8WF1TfT0jeGyd006H0c47ZP0UJd47mDFeI00gjPj0tDE')


//API


//App Config
const app= express();

//API routes

app.use(cors({origin:true}));
app.use(express.json());

//Listen command
app.get('/',(request, response) => response.status(200).send
('hello world'))

app.post('/payments/create',async(request,response)=>{
    const total=request.query.total;
    console.log('payment request recieved BOOM!!! for this maount' ,total)
    const paymentIntent=await stripe.paymentIntent.create({
        amount:total,
        currency:"Rs",
    });
//ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api= functions.https.onRequest(app)

http://localhost:5001/challenge-c2c10/us-central1/api).