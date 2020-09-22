const joi = require("@hapi/joi")

const menuSchema = {
  id: joi.number().integer().min(0).max(100),
  name: joi.string().max(100).required(),
  ingredients: joi.string().max(500).required(),
  price: joi.number().max(500).required(),
  image: joi.string().max(100).required(),
  available: joi.boolean()
}

module.exports = menuSchema