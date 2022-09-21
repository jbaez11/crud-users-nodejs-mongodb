const store = require('./store');

function getUsers(){
    return new Promise((resolve,reject) => {
        //console.log(store.list())
        resolve(store.list());  
    });
}

function addUsers(name,username,email,address,phone,website,company){
    
     
    return new Promise((resolve,reject) => {
        if(!name || !username || !email || !address || !phone || !website || !company){
            console.log('[Message Controller] no hay name, username,email,address,phone,website,company');
            reject('Los datos son incorrectos');
            return false;
        }

        const  fullUsers = {
            name:name,
            username:username,
            email:email,
            address:address,
            phone:phone,
            website:website,
            company:company
        }
        store.add(fullUsers);
        resolve(fullUsers);
        
    })
    
}

function updateUsers(id, name,username,email,address,phone,website,company){//
    return new Promise(async(resolve,reject) => {
        
        if(!id || !username || !email || !address || !phone || !website || !company ){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,name,username,email,address,phone,website,company);

        resolve(result);
    })
}

function deleteUsers(id){
    return new Promise((resolve,reject) => {
        if(!id){
            reject('ID Invalido');
            return false;
        }
        store.remove(id)
            .then(()=> {
                resolve();
            })
            .catch(e => {
                reject(e)
            });
    });
}
module.exports = {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers,
}