//  Add your code here
const { Schema, model } = require('mongoose')

//name, occupation, catchPhrase
const celebritySchema = new Schema({
name: {
    type: String,
    required: true,
},

occupation:{
    type: String,
    default: 'unknown',
},

catchPhrase: {
   type: String,
   required: true, 
}
}) 


const Celebrity = model('Celebrity', celebritySchema)

module.exports = Celebrity