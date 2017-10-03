var Map = require("collections/map");
class Commande {

    constructor(unId,uneDate){
        this._id = unId;
        this._dateCreation = uneDate;
        this._lesLignes = new Map();
    }

    get lignes(){
        return this._lesLignes;
    }

    ajouterLigne(unProd,uneQte){

        let qteRestante = unProd.qteRestante;
        if (uneQte > qteRestante) {
            uneQte = qteRestante;
        }
        if (uneQte >=0) {
            this._lesLignes.set(unProd, uneQte)
        }
    }


}
module.exports = Commande;