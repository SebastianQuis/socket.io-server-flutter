
class Bands {
    
    constructor() {
        this.bands = [];
    }

    addBand( band = new Band() ) {
        this.bands.push(band);
    }

    getBands() {
        return this.bands;
    }

    deleteBand( id = '' ) { // regresar todas las bandas menos la que coincide con argumento
        this.bands = this.bands.filter( band => band.id !== id );
        return this.bands;
    }

    voteBand( id = '' ) { // aca se interactúa directamente con la bd
        // transformar la banda que se recibe en el map
        this.bands = this.bands.map( band => {
            
            if ( band.id === id ) {
                band.votos++;
                return band;
            } else {
                return band;
            }
        });
    }
    
}

module.exports = Bands;