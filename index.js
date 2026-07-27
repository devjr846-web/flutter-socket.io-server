const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const port = process.env.PORT;


//node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/sockets');

//path public
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Server is running on http://localhost:${port}`);
});