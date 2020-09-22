const express = require('express')
const router = express.Router()

const menuMocks = require('../../utils/mocks/menus')

router.get('/', (req, res, next) => {
  res.render('menus', {menuMocks})
})

module.exports = router
