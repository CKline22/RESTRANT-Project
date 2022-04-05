const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restrant-table.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/latte-cup.jpg'
      }]
    res.render('places/index', {places})
})

module.exports = router
//atributions for pics
//restrant | Photo by <a href="https://unsplash.com/@seitamaaphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sandra Seitamaa</a> on <a href="https://unsplash.com/s/photos/restaurants?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//latte| Photo by <a href="https://unsplash.com/@fahmipaping?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fahmi Fakhrudin</a> on <a href="https://unsplash.com/s/photos/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  