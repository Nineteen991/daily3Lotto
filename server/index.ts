import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import * as dotenv from 'dotenv'

import connectDB from './db/connect'
import winningNumbersRouter from './routes/winningNumbersRoutes'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send("Lotto app probably running")
})
app.use('/api/v1/winning-numbers', winningNumbersRouter)

const PORT = Number(process.env.PORT as string) || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string)
    app.listen(PORT, () => {
      console.log(`Server started on port ${ PORT }`)
    })
  }
  catch (error) {
    console.error("Server is definately broken :( ", error)
  }
}

start()