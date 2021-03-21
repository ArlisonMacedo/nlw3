import express from 'express'
import cors from 'cors'
import path from 'path'

import 'express-async-errors'
import './database/connection'

import errorHandler from './errors/handler'

import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333)