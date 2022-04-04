const { faker } = require('@faker-js/faker')
const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios').default;
const cheerio = require('cheerio')
const PORT = 4000
app.use(cors())
const url_2 = 'https://jsonplaceholder.typicode.com/todos/1'

app.get('/', (req, res) => {
    axios.get(url_2)
      .then(function (response) {
        console.log('response', response.data)
        res.json(response.data)
      })
      .catch(err => console.log('error', err))
})




app.listen(PORT, () => console.log(`app listen on port ${PORT}`))