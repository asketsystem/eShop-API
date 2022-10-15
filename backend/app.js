const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hi API !')
})

app.listen(3000, () => {
    console.log('server is running on port http://localhost:3000')
})
