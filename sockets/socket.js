
const { io } = require('../index'); // importando io
const Teams = require('../models/teams');
const Team = require('../models/team');

const teams = new Teams();

teams.addTeam( new Team('Bad Bunny') );
teams.addTeam( new Team('Don Omar') );
teams.addTeam( new Team('Sabrina Carpanter') );
teams.addTeam( new Team('Wiz Khalifa') );

// console.log(teams);

// Mensajes de sockets - dispositivo (usuario) que se conecta al socket!
io.on('connection', client => {
    console.log('Cliente conectado: ');
    
    client.emit('active-teams', teams.getTeams());


    client.on('disconnect', () => { 
        console.log('Cliente desconectado'); 
    });
    
    client.on('mensaje', ( payload ) => { // 'mensaje' mismo de html
        console.log('mensaje', payload);
        io.emit('mensaje', { admin: 'Nuevo mensaje' }); 
    });


    // ESCUCHANDO EVENTOS DESDE EL NAVEGADOR WEB
    client.on('emitir-mensaje', ( payload ) => {
        // console.log(payload);
        // io.emit('nuevo-mensaje', payload); // emite a todos 
        client.broadcast.emit('nuevo-mensaje', payload);  // emite a todos menos al que emite
    });

});