const express = require('express')
const app = express()

require('dotenv/config')

const api = process.env.API_URL

app.get('/', (req, res) => {
    res.send('hi API !')
})

app.listen(3000, () => {
    console.log(api)
    console.log('server is running on port http://localhost:3000')
})
