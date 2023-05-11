var express = require('express');
var router = express.Router();

const multer = require("multer");
const upload = multer({ dest: 'uploads/' })


const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* Routes cards. */
router.route('/')
    .get(async function(req, res) {
        const cards = await prisma.card.findMany({include: { skills: true }})
        res.send(cards)
    })
    .post(upload.single("image"), async function(req, res) {   
        console.log(req.file, req.body)
        
        const card = await prisma.card.create({
            data: { 
                ...req.body 
            },
        })
        res.send(`La carte a bien était ajoutée`);
    });

router.route('/:id')
    .get(async function(req, res) {
        const card = await prisma.card.findUnique({where: {
            id: parseInt(req.params.id)
        }, include: { skills: true }})
        res.send(card)
    })
    .put(async function(req, res) {
        console.log(req.body)
        const card = await prisma.card.update({
            data: { 
                ...req.body 
            },
            where: { 
                id: parseInt(req.params.id)  
            },
        })
        res.send(`La carte a bien était modifiée`);
    })
    .delete(async function(req, res) {
        const card = await prisma.card.delete({
            where: { 
                id: parseInt(req.params.id) 
            },
        })
        res.send(`La carte a bien était supprimée`)
    });

module.exports = router;
