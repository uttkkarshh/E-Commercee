// JavaScript source code
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Urouter = require('./Routes/routes');
const product = require('./model/product.js');
const session = require('express-session');
const cors = require('cors');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const uniqid = require('uniqid');
const order=require('./model/order.js')
const stripe = require("stripe")("Stripe Key")
app.get('/', (req, res) => {
   
  
    const a = uniqid();
    console.log(`gsg${a}`)
   async function  b ()  { 
        const j = await order.create({ id:a ,details:"d"});
        console.log(j)
    }
    b();
    res.send("fdsf");

});
const endpointSecret = "whsec_fbb453b9a93fd8f44c5426aa9841621c6a97da58c97eeeeed83c2d8809033f8d";
//encrypt


function encryptText(plainText,k) {
    return crypto.publicEncrypt({
        key: k,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256'
    },
        // We convert the data string to a buffer
        Buffer.from(plainText)
    )
}
function decryptText(encryptedText,k) {
    return crypto.privateDecrypt(
        {
            key:k,
            // In order to decrypt the data, we need to specify the
            // same hashing function and padding scheme that we used to
            // encrypt the data in the previous step
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'sha256'
        },
        encryptedText
    )
}
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'utkarshtiwari.437@gmail.com',
        pass: 'soediubmuymxmvwb'
    }
});
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    // The standard secure default length for RSA keys is 2048 bits
    modulusLength: 2048,
})
app.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
    const sig = request.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    // Handle the event
    switch (event.type) {
        case 'charge.succeeded':
            const chargeSucceeded = event.data.object;
            console.log(chargeSucceeded);
            const email = chargeSucceeded.billing_details.email;
            let reciet = chargeSucceeded.description;
            const det = reciet;
            const uid = uniqid();
            reciet = `${reciet}-${uid}`;
          let encryptedText = encryptText(reciet,publicKey);
            console.log(reciet);
            console.log(email);
            var mailOptions = {
                from: 'utkarshtiwari.437@gmail.com',
                to: `${email}`,
                subject: 'ORDER SUCCESSFULL YOUR TOKEN FOR ORDER IS',
                text: `${encryptedText.toString('base64') }-VALID FOR NEXT 30 MINS`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                    async function b() {
                        const j = await order.create({ id: uid, details:reciet });
                        console.log(j)
                    }
                    b();
                }
            });
           

            break;
        case 'payment_intent.succeeded':
            const paymentIntentSucceeded = event.data.object;
            console.log("succes");
            break;

        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
});

mongoose.connect('mongodb+srv://utkarsh:AvNYlRg1wkuKwUM7@cluster.uwudm9u.mongodb.net/test')
    .then(() => {
        console.log('data');
       
    })
    .catch((error) => {
        console.log(error)
    })
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge:99000
    }
}));
app.use((req, res, next) => {
    console.log(req.session);
    next();

})
app.use('/user', Urouter);


app.listen(4000, () => {
    console.log('listening')
})