// JavaScript source code
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const order = new Schema({
    id: String,
details:String,
    createdAt: { type: Date, expires: '30m', default: Date.now }

});

const MyModel = mongoose.model('Order', order);


module.exports = MyModel;