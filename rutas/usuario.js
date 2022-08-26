const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    puntaje: String
})

const ModeloUsuario = mongoose.model('usuarios',eschemausuario)
module.exports = router

router.post('/agregarusuario',async(req,res) =>{

    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        puntaje: req.body.puntaje
    })
    nuevoUsuario.save(function(err){
        if(!err){
            res.send('Puntaje agregado correctamente')
        }
        else{
            res.send(err)
        }
    })
})
router.get('/obtenerPuntaje',(req,res)=>{
    ModeloUsuario.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})