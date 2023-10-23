const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async (dbURL) => {
     try {
          await mongoose.connect(dbURL, {
               useNewUrlParser: true, useUnifiedTopology: true
          })
     } catch (error) {
          console.log('Error en la conexión:', error)
     }
}

module.exports = connectDB