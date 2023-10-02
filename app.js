const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db/conexion')
const productsRouter = require('./routes/products')

const unPuerto = process.env.PUERTO

const iniciar = async () => {
     try {
          // await connectDB(process.env.MONGO_URL)
          app.listen(unPuerto, console.log('el servidor se inició'))
     } catch (error) {
          console.log(error)
     }
}

app.use(express.static('public'))

app.get('/', (req, res) => {
     res.send('hola mundo')
})

app.use('/pepe',productsRouter)

iniciar() 