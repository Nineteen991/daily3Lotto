import express, { Request, Response } from 'express'
import * as dotenv from 'dotenv'

import connectDB from './db/connect'

dotenv.config()

const app = express()

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send("Lotto app probably running")
})

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