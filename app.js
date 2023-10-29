const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db/conexion')
const productsRouter = require('./routes/products')
const userRouter = require('./routes/user')
const path = require('path')

const db = process.env.MONGO_URL
const unPuerto = process.env.PUERTO

app.use(express.static('public'))

const iniciar = async () => {
     try {
          await connectDB(db)
          app.listen(unPuerto, console.log(`el servidor se inició ${unPuerto}`))
     } catch (error) {
          console.log(error)
     }
}

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
     res.status(200).render('pages/index')
})
// rednderizado de todas las webs de productos
app.use('/prod',productsRouter)

// renderizado de todas las webs respecto a usuarios
app.use('/user',userRouter)

iniciar() 