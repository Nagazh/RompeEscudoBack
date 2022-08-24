const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email:String,
    telefono:String,
    idUsuario:String
})

const ModeloUsuario = mongoose.model('usuarios',eschemausuario)
module.exports = router

router.post('/agregarusuario',(req,res) =>{
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idUsuario: req.body.idUsuario
    })
    nuevoUsuario.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente')
        }
        else{
            res.send(err)
        }
    })
})