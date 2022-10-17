const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

require('dotenv/config')

const api = process.env.API_URL

//Middleware
app.use(express.json())
app.use(morgan('tiny'))

//Routers
const categoriesRoutes = require('./routers/categories')
const productsRoutes = require('./routers/products')
const usersRoutes = require('./routers/users')
const ordersRoutes = require('./routers/orders')

app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productsRoutes)
app.use(`${api}/orders`, ordersRoutes)
app.use(`${api}/users`, usersRoutes)

//Database Connection
mongoose
  .connect(process.env.CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'e-shop',
  })
  .then(() => {
    console.log('DB Connection is ready...')
  })
  .catch((err) => {
    console.log(err)
  })

//Server
app.listen(3000, () => {
  console.log('server is running on port http://localhost:3000')
})
