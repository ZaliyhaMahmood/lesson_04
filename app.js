const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        title: 'Simple Server',
        stack: 'Mocha, expect, supertest'
    });
});


app.get('/users', (req, res) => {
    res.send([{
        user: 'admin',
        status: 'administrator'
    }, {
        user: 'guest',
        status: 'guest'
    }, {
        user: 'super',
        status: 'superuser'
    }]);
});

app.listen(3000, () => {
    console.log('server started on port 3000');
});

module.exports.app = app;
