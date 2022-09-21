const mongoose = require('mongoose');
const { UsersConn } = require('../../config/db');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name : {
        type: String,
        required:true,
    },
    username : {
        type: String,
        required:true,
    },
    email : {
        type: String,
        required:true,
    },
    address : {
        type: Object,
        required:true,
    },
    phone : {
        type: String,
        required:true,
    },
    website : {
        type: String,
        required:true,
    },
    
    company : {
        type: Object,
        required:true,
    },
    
    
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
}, 
{
    versionKey: false,
});

//const model = mongoose.model('BaseAgents', agentsSchema);
const usersModel = UsersConn.model('Users', usersSchema);


module.exports = {
    usersModel
};
