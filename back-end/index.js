const PORT = 4000
const express = require('express')
const { rows } = require('./postgres')
const cors = require('cors')

const app = express()
app.use(cors)

const getAllMovies = `select * from movies;`

app.get('/', async (req, res) => {
    res.send('root')
})

app.get('/movies', async (req, res) => {
    // console.log('fetch')
    let data = await rows(getAllMovies)
    res.send(data)
})

app.listen(PORT, () => {
    console.log(PORT)
})
