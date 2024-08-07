import express from 'express'
import { booksRouter } from './routes/booksRouters'
import { errorHandler } from './middleware/errorHandler'

export const app = express()

app.use(express.json())

app.use('/books', booksRouter)

app.use(errorHandler)