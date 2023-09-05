/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express= require("express");
const cors= require("cors");
const stripe =require("stripe")
('sk_test_51NmwiKSDEgFsfmUBjSUtVElNRKAWrvRhd6SdYjlPYfDsMwQXL8m9WxUi0H1slkRD3NQTCnRBLBUJvGcu7f1Qesi900qLmaTuvs')
//API


//app config
const app=express();

//middlewares
app.use(cors({origin:true}));
app.use(express.json());


//API routes
app.get('/', (request,response)=>response.status(200).send('hello world'))

//-  Listen command
exports.api=functions.https.onRequest(app);