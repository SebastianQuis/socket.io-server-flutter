const Team = require("./team");

class Teams {
    
    constructor() {
        this.teams = [];
    }

    addTeam( team = new Team() ) {
        this.teams.push(team);
    }

    getTeams() {
        return this.teams;
    }

    deleteTeam( id = '' ) { // regresar todas las bandas menos la que coincide con argumento
        this.teams = this.teams.filter( team => team.id !== id );
        return this.teams;
    }

    voteTeam( id = '' ) { // aca se interactúa directamente con la bd
        // transformar la banda que se recibe en el map
        this.teams = this.teams.map( team => {
            
            if ( team.id === id ) {
                team.votos++;
                return team;
            } else {
                return team;
            }
        });
    }
    
}

module.exports = Teams;