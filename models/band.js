const { v4: uuidV4 } = require('uuid');

class Band {

    constructor( nombre = 'no-name' ) {
        
        this.id = uuidV4.v4(); // uuid identificador unico
        this.nombre = nombre;
        this.votos = 0;
    }
}

module.exports =  Band;