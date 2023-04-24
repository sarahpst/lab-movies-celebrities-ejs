// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config')

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

const app = express()

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app)

// default value for title local
const projectName = 'lab-movies-celebrities'
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase()

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`

// 👇 Start handling routes here
const index = require('./routes/index')
app.use('/', index)

//celebs route
const celebRoutes = require ('./routes/celebrities.routes')
app.use('/celebrities', celebRoutes)

//movie routes
const moviesRoutes = require ('./routes/movies.routes')
app.use('/movies', moviesRoutes)









// /* GET one new celebrity (form) */
// app.get('/celebrities.routes.js', (req, res) => {
//     res.render('recipes/new', { isUpdating: false })
//   })
//   /* POST one new recipe */
//   app.post('/celebrities.routes.js', async (req, res) => {
//     try {
//       // We can get the req.body only on post request
//       const newRecipe = await Recipe.create({
//         ...req.body,
//         ingredients: req.body.ingredients.split(' '),
//       })
//       console.log(newRecipe)
//       res.redirect(`/recipes/${newRecipe._id}`)
//     } catch (error) {
//       console.log(error)
//     }
//   })

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app
