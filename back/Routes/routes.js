
require('dotenv').config()

const express = require('express');
const product = require('../model/product.js');
const user = require('../model/User.js');
const router = express.Router();
const crypto = require('crypto');
const date = require('date-and-time');
const stripe = require("stripe")("sk_test_51MtKCBSEgQuj72w77grDQauUdstdsCkWQqIY7B2qS3bDhifif4cJZ0HeNEa9N4TOeXl7FERf8J8izs7cro1Cy4b600wYdqTOUi")
 router.get('/',async (req, res) => {
    console.log('hello')
  let mss = '';
     const data = [{name:"ff"}]
     let prod = data.map(item => { return `${item.name}-${item.price}` });
     let now = new Date();
     date.format(now, 'YYYY/MM/DD HH:mm:ss');
     now = JSON.stringify(now);
     prod = JSON.stringify(prod);
     mss = `${now}-${prod}`;
     console.log(mss);
    res.json({ mss: "hello" }) 
});
/*
router.post('/signup', async (req, res) => {
    const { name, email } = req.body
    try {
        const user = await User.create({ name, email })
        res.status(200).json(user)

    } catch (error) {
        console.log(error)

    }
});*/
/*
router.post('/order', async (req, res) => {
    const { product } = req.body
    if (req.session.user) {

        res.status(200).json(req.session);
    }
    else {
        res.status(400).json({ mss: "no-user-loggedin" });
    }




});*/


router.post('/order', async (req, res) => {
    const { data } = req.body;
   
    
    if (req.session.user) {
        let mss = '';
        
        let prod = data.map(item => { return `${item.name}-${item.price}` });
        let now = new Date();
        date.format(now, 'YYYY/MM/DD HH:mm:ss');
        now = JSON.stringify(now);
        prod = JSON.stringify(prod);
        mss = `${now}-${prod}`;
        console.log(mss);
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                mode: "payment",
                line_items: data.map(item => {
                   
                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.name,
                            },
                            unit_amount: item.price,
                        },
                        quantity: 1,
                    }
                }),
                payment_intent_data: {
                    description:mss
                },
                success_url: `http://localhost:3000/Success`,
                cancel_url: `http://localhost:3000/Failed`,
            })
           
            res.json({ url: session.url })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
     
    }
    else {
        res.status(200).json({ mss: "no-user-loggedin" });
    }

   


});

router.post('/products', async (req, res) => {
    const { desc } = req.body
    if (desc == null) {
        console.log("return all");
    }
    
    try {
        const produc = await product.find({ "desc": new RegExp(desc, 'i') }); 
        res.status(200).json(produc);

    } catch (error) {
        console.log(error);

    }


});
router.post('/sign-up', async (req, res) => {
    const { fname,
        email,
        lname,
        password } = req.body;
    

    try {
        const produc = await user.create({
            fname,
            email,
            lname,
            password
});
        res.status(200).json(produc);

    } catch (error) {
        console.log(error);

    }


});
router.post('/Login', async (req, res) => {
    const { 
        email,
        password } = req.body;
    
        
        
    try {
        const produc = await user.findOne({ email: email }, (err, data) => {
            if (err) {
                console.log(err);
                res.status(400);
            }
            else {
                console.log(data);
                if (data === null) {
                    return res.status(200).json({mss:"Incorrect"})
                }
                if (password === data.password) {
                    req.session.user = data;
                    console.log(req.session);
                    res.status(200).json({
                        mss: "LoginSucces",
                        name: data.fname
                    });
                }
                else {
                    res.status(200).json({ mss: "PIncorrect" });
                }
            }
           

        });
        
   
    } catch (error) {
        console.log(error);

    }


});

        



module.exports =router;
