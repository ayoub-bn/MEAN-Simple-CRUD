const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017/CRUD_MEAN',(err)=>{
    if (!err)
    console.log('DB Connected Successfully.');
    else
    console.log('error connecting to DB : '+JSON.stringify(err,undefined,2));
});

module.exports = mongoose;