const mongoose = require('mongoose');
const {Schema} = mongoose

const shoeSchema = new Schema({
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Utiliza una expresión regular para verificar la extensión de la imagen
        return /\.(jpg|jpeg|png|gif)$/.test(value.toLowerCase());
      },
      message: 'La URL de la imagen no es válida.',
    },
  },
  talle: [
    {
    type: String,
    enum: ['6', '7', '8', '9', '10', '11', '12'],
    required: true,
  },
  ],
  color: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  descripción: {
    type: String,
    required: true,
  },
  categoría: {
    type: String,
    required: true,
  },
  valoraciones: {
    type: [
      {
        usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
        calificación: { type: Number, required: true },
        comentario: { type: String },
      },
    ],
  },
});

module.exports = mongoose.model('Zapatilla', shoeSchema);