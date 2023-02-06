const mongoose = require('mongoose');

var User = mongoose.model('User',{
    name : {type:String},
    mail : {type:String},
    age : {type:Number},
    number : {type:Number}
});


module.exports = {User};