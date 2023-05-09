var express = require('express');
var router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* Routes classes. */
router.route('/')
    .get(async function(req, res) {
        const classes = await prisma.class.findMany({})
        res.send(classes)
    })
    .post(async function(req, res) {
        console.log(req.body)
        const classe = await prisma.class.create({
            data: { 
                ...req.body 
            },
        })
        res.send(`La classe a bien était ajoutée`);
    });

router.route('/:id')
    .get(async function(req, res) {
        const classe = await prisma.class.findUnique({where: {
            id: parseInt(req.params.id)
        }})
        res.send(classe)
    })
    .put(async function(req, res) {
        console.log(req.body)
        const classe = await prisma.class.update({
            data: { 
                ...req.body 
            },
            where: { 
                id: parseInt(req.params.id)  
            },
        })
        res.send(`La classe a bien était modifiée`);
    })
    .delete(async function(req, res) {
        const classe = await prisma.class.delete({
            where: { 
                id: parseInt(req.params.id) 
            },
        })
        res.send(`La classe a bien était supprimée`)
    });

module.exports = router;
