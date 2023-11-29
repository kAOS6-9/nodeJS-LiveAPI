import * as dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/connectDB.js'
import router from './routes/data.routes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Welcome to the API')
})

app.use('/api/data', router)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_CONN_STRING)
    app.listen(PORT, ()=>{
      console.log(`Server initialized at Port: ${PORT}`)
    })
  } catch (error) {
    console.log(error);
  }
}

start()