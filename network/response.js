exports.success = function(req,res, users, status){
    res.status(status || 200).send({
        error: '',
        body:users
    });
}

exports.error = function(req,res, users , status, details){
    console.error('[ Response Error Components/DATA]' + details);
    res.status(status || 500).send({
        error : users,
        body: ''
    })
}