const { usersModel} = require('./model');

async function getUsers(){
   //const agents = await Model.find();
   const users = await usersModel.find();
   return users;    
}

function addUsers(users){

   const myUsers = new usersModel(users);
   myUsers.save(); 
   return myUsers;
}

function addManyUsers(users){
    usersModel.insertMany(users).then(function(){
        console.log("Data inserted")  // Success
        return users
    }).catch(function(error){
        return console.log(error)      // Failure
    });; 
     ;
 }

async function updateUsers(id,name,username,email,address,phone,website,company){
   
    foundUsers = await usersModel.findOne({_id : id});
    foundUsers.name = name ;
    foundUsers.username = username ;
    foundUsers.email = email ;
    foundUsers.address = address ;
    foundUsers.phone = phone ;
    foundUsers.website = website ;
    foundUsers.company = company ;
    newUsers = await foundUsers.save();
    return newUsers;

}


function removeUsers(id){
    return usersModel.deleteOne({
        _id:id
    });

}


module.exports = {
   list:getUsers,
   add: addUsers,
   updateText: updateUsers,
   remove:removeUsers,
   addManyUsers
}