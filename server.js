const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Backend is running'
  })
})

app.post('/contact', (req, res) => {

  const { name, email, message } = req.body

  console.log(name, email, message)

  res.json({
    success: true,
    message: 'Message received successfully'
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
