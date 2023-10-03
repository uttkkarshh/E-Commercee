// JavaScript source code
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const user = new Schema({
    fname: String,
    email: String,
    lname: String,
    password: String,

});

const MyModel = mongoose.model('User', user);


module.exports = MyModel;