var express = require('express');
var router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* Routes skills. */
router.route('/')
    .get(async function(req, res) {
        const skills = await prisma.skill.findMany({})
        res.send(skills)
    })
    .post(async function(req, res) {
        console.log(req.body)
        const skill = await prisma.skill.create({
            data: { 
                ...req.body 
            },
        })
        res.send(`L'attaque a bien était ajoutée`);
    });

router.route('/:id')
    .get(async function(req, res) {
        const skill = await prisma.skill.findUnique({where: {
            id: parseInt(req.params.id)
        }})
        res.send(skill)
    })
    .put(async function(req, res) {
        console.log(req.body)
        const skill = await prisma.skill.update({
            data: { 
                ...req.body 
            },
            where: { 
                id: parseInt(req.params.id)  
            },
        })
        res.send(`L'attaque a bien était modifiée`);
    })
    .delete(async function(req, res) {
        const skill = await prisma.skill.delete({
            where: { 
                id: parseInt(req.params.id) 
            },
        })
        res.send(`L'attaque a bien était supprimée`)
    });

module.exports = router;
