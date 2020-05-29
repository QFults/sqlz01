const router = require('express').Router()
const { User, Pet } = require('../models')

router.get('/', (req, res) => {
  res.render('login')
})

router.get('/dashboard/:id', (req, res) => {
  User.findOne({ id: req.params.id, include: [Pet] })
    .then(user => {
      res.render('dashboard', { user: user.dataValues })
    })
    .catch(err => console.error(err))
})

router.get('/test', (req, res) => {
  res.render('test')
})
module.exports = router
