const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
     nombre: {
          type: String,
          required: true
     },
     imagen: {
          type: String,
          required: true,
          validate: {
               validator: function (value) {
                    // Utiliza una expresión regular para verificar la extensión de la imagen
                    return /\.(jpg|jpeg|png|gif)$/.test(value.toLowerCase());
               },
               message: 'La URL de la imagen no es válida.'
          }
     },
     genero: {
          type: String,
          required: true
     },
     calificacion: {
          type: Number,
          required: true
     },
     precio: {
          type: Number,
          required: true
     },
     talles: {
          type: Schema.Types.Mixed,
          validate: {
               validator: function tipoDeTalle(value) {
                    return (
                         (typeof value === 'number' && value >= 4 && value <= 14) ||
                         (typeof value === 'string' && value.trim() !== '')
                    )
               }
          },
          required: true
     },
     reseñas: {
          type: String,
          required: true
     },
     descripcion: {
          type: String,
          required: true
     },
     detalles: {
          type: String,
          required: true
     },
     stock: {
          type: Number,
          required: true
     },
     tipo: {
          type: String,
          required: true
     }
})

module.exports = mongoose.model('ProductSchema', productSchema, 'products')
