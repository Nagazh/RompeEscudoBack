const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/tablaDePuntuacion');

const objetobd = mongoose.connection

objetobd.on('connected',()=>{console.log('Conexion correcta a MongoDB')})
objetobd.on('error',()=>{console.log('Error al correcta a MongoDB')})

module.exports = mongoose

//SI NO FUNCIONA VE A SERVICIOS E INICIA EL MONGO DB!!!!!!!!!!!