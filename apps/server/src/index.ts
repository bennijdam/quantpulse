import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import analyticsRoutes from './routes/analytics'

dotenv.config()

const app = express()
const port = process.env.PORT || 3002

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'quantpulse-server' })
})

app.use('/api/analytics', analyticsRoutes)

app.listen(port, () => {
  console.log(`QuantPulse server running on port ${port}`)
})
