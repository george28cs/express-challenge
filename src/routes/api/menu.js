const express = require('express')
const menuMocks = require('../../utils/mocks/menus')
const router = express.Router()
const menusService = require('../../services/menus')
const validationHandler = require('../../utils/middleware/validationHanlder')
const createOrUpdateMenuSchema = require('../../utils/schemas/menus')

const menuService = new menusService()
// Get all
router.get('/', async (req, res, next) => {
  const { tags } = req.query
  try{
    const menus = await menuService.getMenus( { tags } )

  res.status(200).json({
    data: menus,
    message: 'menus listed'
  })
  } catch(error){
    next(error)
  }
})

// Get menu
router.get('/:menuId', async (req, res, next) => {
  const { menuId } = req.params

  const menu = await menuService.getMenu({ menuId })
  res.status(200).json({
    data: menu,
    message: 'menu retrieved'
  })
})

// Create
router.post('/', validationHandler(createOrUpdateMenuSchema), async (req, res, next) => {
  const { body: menu } = req
  try{
    const menuCreated = await menuService.createMenu({ menu })

  res.status(201).json({
    data: menuCreated,
    message: 'menu created'
  })
  } catch (error){
    next(error)
  }
})

router.put('/:menuId', validationHandler(createOrUpdateMenuSchema), async (req, res, next) => {
  const { menuId } = req.params
  const { body: menu } = req
  try {
    const updatedMenu = await menuService.updateMenu({ menuId, menu })

  res.status(200).json({
    data: updatedMenu,
    message: 'menu updated'
  })
  } catch (error) {
    next(error)
  }
})

router.delete('/:menuId', async (req, res, next) => {
  const { menuId } = req.params
  try {
    const menu = await menuService.deleteMenu({ menuId })

  res.status(200).json({
    data: menu,
    message: 'menu deleted'
  })
  }catch (eror) {
    next(error)
  }
})

module.exports = router