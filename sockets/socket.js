const { io } = require('../index'); // importando io

// Mensajes de sockets - dispositivo (usuario) que se conecta al socket!
io.on('connection', client => {
    console.log('Cliente conectado: ');
    
    client.on('disconnect', () => { 
        console.log('Cliente desconectado'); 
    });
    
    client.on('mensaje', ( payload ) => { // 'mensaje' mismo de html
        console.log('mensaje', payload);
        
        io.emit('mensaje', { admin: 'Nuevo mensaje' }); 
    });
});