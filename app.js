const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db/conexion')
const productsRouter = require('./routes/products')
const path = require('path')

const db = process.env.MONGO_URL
const unPuerto = process.env.PUERTO
const ipStatic = process.env.IPESTATICA

app.use(express.static('public'))

const iniciar = async () => {
     try {
          await connectDB(db, ipStatic)
          app.listen(unPuerto, console.log(`el servidor se inició ${unPuerto}`))
     } catch (error) {
          console.log(error)
     }
}

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
     res.render('pages/index')
})

app.use('/prod',productsRouter)

iniciar() 