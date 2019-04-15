require('dotenv').config()

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'


console.log('host:', process.env.DB_HOST)
console.log('username:', process.env.DB_USER)
console.log('password:', process.env.DB_PASS)

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('hello')
})


// const port = 3030

app.listen(3030, () => {
  console.log(`Events API server is listening on port ${3030}`)
})

export default app