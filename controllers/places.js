const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) => {
    res.render('places/new')
  })

  router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })

router.get('/', (req, res) => {
    res.render('places/index', {places})
})

module.exports = router
//atributions for pics
//restrant | Photo by <a href="https://unsplash.com/@seitamaaphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sandra Seitamaa</a> on <a href="https://unsplash.com/s/photos/restaurants?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//latte| Photo by <a href="https://unsplash.com/@fahmipaping?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fahmi Fakhrudin</a> on <a href="https://unsplash.com/s/photos/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  