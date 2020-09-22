// Modules
const express = require('express')
const path = require('path')
const config = require('./config/config')
const restaurantMenuRouter = require('./routes/views/menu')
const restaurantMenuApiRouter = require('./routes/api/menu')
const notFoundHandler = require("./utils/middleware/notFoundHandler")

// App
const app = express()

// Middlewares
app.use(express.json())

//View engine setup
app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "pug")

// Routes
app.use('/menus', restaurantMenuRouter)
app.use('/api/menus', restaurantMenuApiRouter)

// Catch 404
app.use(notFoundHandler)

// Server
const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})



