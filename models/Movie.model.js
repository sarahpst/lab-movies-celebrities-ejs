//  Add your code here
const Celebrity = require('../models/Celebrity.model')
const { Schema, model } = require('mongoose')

//name, occupation, catchPhrase
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    genre: {
        type: String,
        default: 'unknown',
    },

    plot: {
        type: String,
        default: 'unknown',
    },
    cast: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Celebrity',
        }
    ],


})


const Movie = model('Movie', movieSchema)

module.exports = Movie