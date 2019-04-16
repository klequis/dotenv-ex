require('dotenv').config()

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
// import { testConnection } from '../mongo-db'


console.log('host:', process.env.DB_HOST)
console.log('username:', process.env.DB_USER)
console.log('password:', process.env.DB_PASS)
console.log('PORT:', process.env.PORT)

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('hello')
})


const port = process.env.PORT

app.listen(port, () => {
  console.log(`Events API server is listening on port ${port}`)
})

export default app

// testConnection()