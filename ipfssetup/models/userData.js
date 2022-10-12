const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserFiles = new Schema({
    address:{
        type:String,
    },
    url:{
        type:String,
    },
    desc:{
        type:String,
    }
})

const Files = mongoose.model('user-creds', UserFiles);

module.exports = Files;