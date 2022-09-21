const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    
    controller.getUsers()
    .then((usersList) => {
        response.success(req,res, usersList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

router.post('/', function(req,res){
   
    controller.addUsers(req.body.name, req.body.username,req.body.email,req.body.address,req.body.phone,req.body.website,req.body.company)
        .then((fullUsers) => {0
            response.success(req,res, fullUsers, 201 );
        })
        .catch(e => {
            response.error(req,res,'Informacion Invalida', 400, 'error en el controller post');
        })
});

router.post('/api', function(req,res){
   
    controller.postInsertUsers()
        .then((users) => {
            response.success(req,res, users, 201 );
        })
        .catch(e => {
            response.error(req,res,'Informacion Invalida', 400, 'error en el controller post');
        })
});

router.patch('/:id', function(req,res){
   
    controller.updateUsers(req.params.id, req.body.name, req.body.username,req.body.email,req.body.address,req.body.phone,req.body.website,req.body.company)
        .then((data) => {
            response.success(req,res,data,200);

        })
        .catch(e => {
            response.error(req,res, 'Error interno',500,e)
        });
});

router.delete('/:id', function(req,res){
    
    controller.deleteUsers(req.params.id)
        .then(() => {
            response.success(req,res, `User ${req.params.id} eliminado `,200);
        })
        .catch(e => {
            response.error(req,res, 'Error Interno', 500, e);
        });
});

module.exports = router;
