
const { io } = require('../index'); // importando io
const Teams = require('../models/teams');
const Team = require('../models/team');

const teams = new Teams();

teams.addTeam( new Team('Boca Juniors') );
teams.addTeam( new Team('Flamengo') );
teams.addTeam( new Team('Universitario') );
teams.addTeam( new Team('Cienciano') );

// console.log(teams);

// Mensajes de sockets - dispositivo (usuario) que se conecta al socket!
io.on('connection', client => { // io = todos usuarios
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

    client.on('vote-teams', ( payload ) => {
        console.log(payload.id);
        teams.voteTeam(payload.id);
        io.emit('active-teams', teams.getTeams()); // io se refiere a todos usuarios del servidor
    });

});