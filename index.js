const cors = require ('cors');
const express = require('express')
const app = express()

//Importar conexion MongoDB
const archivoDB = require('./baseDeDatos/conexion')

//Importar rutas y modelo de usuario
const rutaUsuario = require('../back/rutas/usuario')

//
app.use(cors());

//Import body parser
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutaUsuario)

app.get('/',(req,res) => {
    res.end('Hola Slan')
})

//Configurar servidor
app.listen(5000,()=>{
    console.log('el servidor esta corriendo en el puerto 5000')
})
