import express from 'express'
import morgan from 'morgan'
import config from './config'

import productsRoute from './routes/products.route'
import usersRoute from './routes/users.route'
import testspRoute from './routes/testsp.route'

const app = express()

// settings
app.set('port', config.PORT)

// middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api', productsRoute)
app.use('/api', usersRoute)
app.use('/api', testspRoute)

export default app