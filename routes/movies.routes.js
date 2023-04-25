// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')
const router = require('express').Router()

// all your routes here
router.get('/create', async (req, res) => {
    try {
        const allCelebrities = await Celebrity.find()
        res.render('movies/new-movies', { celebrities: allCelebrities })
    }
    catch (error) { console.log('error in movies route', error) }
})
router.post('/create', async (req, res) => {
    try {
        await Movie.create(req.body)
        res.redirect('/')
    }

    catch (error) { console.log(error) }


    // res.render('movies', {})
})

router.get('/', async (req, res) => {
    try {
        const allMovies = await Movie.find()
        res.render('movies/movies', { movies: allMovies })
    }
    catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const movie = await Movie.findById(id).populate('cast')
        res.render('movies/movie-details', { movie })
    }
    catch (error) {
        console.log(error)
    }
})
module.exports = router