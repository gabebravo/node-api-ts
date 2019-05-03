import { DataStore } from './data/data'
import { apiGetTours } from "./api/tours/apiGetTours";
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail";

import express from 'express';
const app = express();

// TEST ROUTE : 
app.get('/', (req, res, next) => {
  res.send("Tour Booking API")
})

// GET TOURS API ROUTES
app.get("/tours", apiGetTours);

app.get("/tours/:id", apiGetTourDetail);

app.listen(process.env.PORT || 8091, () => {
  console.log('Server started...')
})
