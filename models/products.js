const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
     nombre: {
          type: String,
          required: true
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
     }
})

module.exports=mongoose.model('productSchema',productSchema)
