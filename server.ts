import { DataStore } from './data/data'
import express from 'express';
const app = express();

// FORMATTING OF JSON
// console.log('tours:', JSON.parse(JSON.stringify(DataStore.tours)))

// TEST ROUTES : 
app.get('/', (req, res, next) => {
  res.send("Tour Booking API")
})

app.get('/tours', (req, res, next) => {
  res.send(DataStore.tours)
})

app.post('/tours', (req, res, next) => {
  res.send("Add a new tour...")
})

app.listen(process.env.PORT || 8091, () => {
  console.log('Server started...')
})
