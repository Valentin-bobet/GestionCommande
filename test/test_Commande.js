const Commande = require('../metier/commande');
const Produit = require('../metier/produit');

const assert = require('assert');

describe("Commande",() =>{
    describe("nouvelleCommande",() =>{
        let commande1;

        before(function () {
            commande1 = new Commande(1,"08-01-1998");
        });

        it("la Commande existe", () => {
            assert.equal(commande1.lignes.length,0,"la commande n'est pas crée");
        });
    });

    describe("ajoutProduit",() =>{
        let commande2;
        let produit1;
        let produit2;
        let produit3;
        let produit4;

        before(function () {
            commande2 = new Commande(1,"08-01-1998");
            produit1 = new Produit("Babare le Barbare", 2000);
            produit2 = new Produit("the StormTroopers",3);
            produit3 = new Produit("Kenny le pas survivant",98);
            produit4 = new Produit("Satanas et Diaboulo",0);
        });

        afterEach(function () {
            commande2.lignes.clear();
        })


        it("On ne veut que 3 Barbares",() => {
            commande2.ajouterLigne(produit1,3);
            assert.equal(commande2.lignes.get(produit1),3,"Pourquoi y'a autant de barbares?");
        });

        it("Y a un peu moins de Kenny que prévu",() =>{
            commande2.ajouterLigne(produit3,100);
            assert.equal(commande2.lignes.get(produit3),98,"HAHA les Kenny resortent de leur tombes");
        });

        it("OUF plie asser de Soldats Tempête",() => {
            commande2.ajouterLigne(produit2,3);
            assert.equal(commande2.lignes.get(produit2),3,"Y'a une couille dans le potage");
        });

        it("une Armée d'éléphants et de Toopers",() => {
            commande2.ajouterLigne(produit1,1999);
            commande2.ajouterLigne(produit2,3);
            assert.equal(commande2.lignes.get(produit1),1999,"PAS ASSER DE BABARES");
            assert.equal(commande2.lignes.get(produit2),3,"Il me faut plus de Troopers");
        });

        it("Deux fois plus de Babar Barbares!!",() => {
            commande2.ajouterLigne(produit1,1000);
            commande2.ajouterLigne(produit1,1000);
            assert.equal(commande2.lignes.get(produit1),2000,"AHHH ENVOYEZ EN PLUUUS");
        });

        it("ILS ONT BUTES KENNY ESPECE D'ENFOIRE",() => {
            commande2.ajouterLigne(produit3,0);
            assert.equal(commande2.lignes.length,0,"AHH DES KENNY FANTOMES!!");
        });

        it("Satanas et Diabloulo n'existent pas",() => {
            commande2.ajouterLigne(produit4,5);
            assert.equal(commande2.lignes.length,0,"Ah ils ont encore trichés");
        });

    });
});