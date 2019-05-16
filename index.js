import express from 'express';

const PORT = process.env.PORT || 8000

const app = express();


app.get('/', (req, res) => {
  res.send("hello")
})

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`)
})