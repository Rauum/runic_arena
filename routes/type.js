var express = require('express');
var router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* Routes types. */
router.route('/')
    .get(async function(req, res) {
        const types = await prisma.type.findMany({})
        res.send(types)
    })
    .post(async function(req, res) {
        console.log(req.body)
        const type = await prisma.type.create({
            data: { 
                ...req.body 
            },
        })
        res.send(`Le type a bien était ajouté`);
    });

router.route('/:id')
    .get(async function(req, res) {
        const type = await prisma.type.findUnique({where: {
            id: parseInt(req.params.id)
        }})
        res.send(type)
    })
    .put(async function(req, res) {
        console.log(req.body)
        const type = await prisma.type.update({
            data: { 
                ...req.body 
            },
            where: { 
                id: parseInt(req.params.id)  
            },
        })
        res.send(`Le type a bien était modifié`);
    })
    .delete(async function(req, res) {
        const type = await prisma.type.delete({
            where: { 
                id: parseInt(req.params.id) 
            },
        })
        res.send(`Le type a bien était supprimé`)
    });

module.exports = router;
