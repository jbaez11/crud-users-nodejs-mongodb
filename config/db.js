require('dotenv').config();
const mongoose = require('mongoose');


function makeNewConnection() {
    const db = mongoose.createConnection(`${process.env.MONGO_STRING}`, 
    {
        useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect:true,
       
    });

    db.on('error', function (error) {
        console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
        db.close().catch(() => console.log(`MongoDB :: failed to close connection ${this.name}`));
    });

    db.on('connected', function () {
        mongoose.set('debug', function (col, method, query, doc) {
            console.log(`MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(query)},${JSON.stringify(doc)})`);
        });
        console.log(`MongoDB :: connected ${this.name}`);
    });

    db.on('disconnected', function () {
        console.log(`MongoDB :: disconnected ${this.name}`);
    });

    return db;
}

const UsersConn = makeNewConnection('users');

module.exports = {
    UsersConn
};

