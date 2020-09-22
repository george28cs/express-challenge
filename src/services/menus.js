const menuMocks = require('../utils/mocks/menus')

class menusService {

  constructor(){
  }

  getMenus( {tags} ){
    return Promise.resolve(menuMocks)
  }  

  getMenu ( {menuId} ){
    const menu = menuMocks.filter( menu => menu.id == menuId)
    return Promise.resolve(menu)
  }

  createMenu ( { menu } ){
    menuMocks.push(menu)
    return Promise.resolve(menu)
  }

  updateMenu ( {menuId, menu} ){
    const indexUpdated = menuMocks.findIndex( menuIndex => menuIndex.id == menuId)
    menuMocks[indexUpdated] = menu
    return Promise.resolve(menu)
  }

  deleteMenu ( {menuId} ){
    const indexDeleted = menuMocks.findIndex( menuIndex => menuIndex.id == menuId)
    menuMocks.pop(indexDeleted)
    return Promise.resolve('Menu Deleted')
  }
}

module.exports = menusService