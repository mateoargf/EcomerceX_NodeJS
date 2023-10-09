const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db/conexion')
const productsRouter = require('./routes/products')

const unPuerto = process.env.PUERTO

app.use(express.static('public'))

const iniciar = async () => {
     try {
          await connectDB(process.env.MONGO_URL)
          app.listen(unPuerto, console.log(`el servidor se inició ${unPuerto}`))
     } catch (error) {
          console.log(error)
     }
}

app.set('view engine','ejs')

app.get('/', (req, res) => {
     res.render('index')
})

app.use('/pepe',productsRouter)


iniciar() 