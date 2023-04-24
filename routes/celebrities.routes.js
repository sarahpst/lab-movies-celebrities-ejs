// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const Celebrity = require('../models/Celebrity.model')

const router = require('express').Router()

// all your routes here
//(iteration3)
router.get('/create', (req, res) => {
    res.render('celebrities/new-celebrity')
})

router.post('/create', async (req, res) => {
    try {
        await Celebrity.create(req.body)
        res.redirect('/')
    }
    catch (error) {
        console.log(error)
        res.render('celebrities/new-celebrity')
    }
})


//listing our celebrities (iteration4)
router.get('/', async (req, res) => {
    try {
        const allCelebrities = await Celebrity.find()
        res.render('celebrities/celebrities', { celebrities: allCelebrities })
    }
    catch (error) {
        console.log(error)
    }
})
module.exports = router 