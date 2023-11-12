const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('express-flash')
require('dotenv').config()
const connectDB = require('./server/db/conexion')
const productsRouter = require('./server/routes/products')
const userRouter = require('./server/routes/user')
const errRouter = require('./server/routes/err')
const path = require('path')
const layouts = require('express-ejs-layouts')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const db = process.env.MONGO_URL
const unPuerto = process.env.PUERTO
const secretSession = process.env.SECRET_SESSION
const secretPassport = process.env.SECRET_PASSPORT
const passport = require('passport')
// para uso de archivos estáticos
app.use(express.static('views'))



// para uso de ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


// conectamos con la base de datos y el puerto a través de dotenv
const iniciar = async () => {
     try {
          await connectDB(db)
          app.listen(unPuerto, console.log(`el servidor se inició ${unPuerto}`))
     } catch (error) {
          console.log(error)
     }
}

app.use(session({
     secret: secretSession,
     resave: false,
     saveUninitialized: true,
}));
app.use(flash());

app.use(passport.initialize())
app.use(passport.session({
     secret: secretPassport,
     resave: false,
     saveUninitialized: true
}))


// para layouts
app.set('layout', 'layouts/layout')
app.use(layouts)

app.get('/', (req, res) => {
     res.status(200).render('pages/index')
})

// renderizado de todas las web de errors
app.use('/err', errRouter)

// rednderizado de todas las webs de productos
app.use('/prod', productsRouter)

// renderizado de todas las webs respecto a usuarios
app.use('/user', userRouter)



iniciar() 