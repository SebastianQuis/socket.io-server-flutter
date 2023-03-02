// Importaciones
const express = require('express'); // importando express
const path = require('path'); // importando path
require('dotenv').config(); // establece variables de entorno

// Empezando express, compatible con server
const app = express();

// Servidor de sockets
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server); // exportando con variable io
require('./sockets/socket.js'); // llamar a socket.js === ./


// path publico - carpeta publica
const publicPath = path.resolve( __dirname, 'public' ); // __dirname apuntando a la carpeta o dominio
app.use( express.static( publicPath )); // express utiliza el app publico


// iniciar con express
server.listen( process.env.PORT, (err) => {
    if ( err ) throw new Error(err); // ver el error si es que lo hay
    console.log('Servidor corriendo en puerto', process.env.PORT);
});