
const { v4: uuidV4 } = require('uuid');

class Team {

    constructor( nombre = 'no-name' ) {
        
        this.id = uuidV4(); // uuid identificador unico
        this.nombre = nombre;
        this.votos = 0;
    }
}

// exportando archivo team.js
module.exports = Team;