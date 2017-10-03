class Produit {

    constructor(unLibelle, uneQte) {
        this._libelle = unLibelle;
        this._qteRestante = uneQte;
    }

    get libelle() {
        return this._libelle;
    }

    get qteRestante() {
        return this._qteRestante;
    }
}
module.exports = Produit;