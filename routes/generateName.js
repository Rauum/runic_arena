var express = require('express');
var router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* Routes generate name. */
router.route('/')
    .get(async function(req, res) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        tableauAnimaux = ["Rat","Crocodile","Lapin","Souris","Lion","Tortue","Hydre","Serpent","Loup",
        "Cheval","Pyhton","Ours blanc","Ours Brun","Renard","Requin","Balaine","Criquet"]
        tableauAdjectif = ["maléfique","décousu","des ténèbres","de la pénombre","chaotique","magicien","fantastique",
    "malicieux","de la mort","du ciel","balaise","courageux","de la plaine","des montagnes","des enfers","de la jungle","des océans",
    "canbiale"]
        randomAnimal = getRandomInt(tableauAnimaux.length)
        randonAdjetif = getRandomInt(tableauAdjectif.length)
        nom = tableauAnimaux[randomAnimal] + " " + tableauAdjectif[randonAdjetif]
        res.send(nom)
    });
module.exports = router;
