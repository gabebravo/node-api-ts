import { apiGetTours } from "./api/tours/apiGetTours";
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail";
import { apiCreateTour } from "./api/tours/apiCreateTour";
import { apiDeleteTour } from "./api/tours/apiDeleteTour";

import express from 'express';
const app = express();

import * as bodyParser from 'body-parser';
const jsonParser = bodyParser.json()

// TEST ROUTE : 
app.get('/', (req, res, next) => {
  res.send("Tour Booking API")
})

// GET API ROUTES
app.get("/tours", apiGetTours);
app.get("/tours/:id", apiGetTourDetail);

// POST API ROUTE - jsonParser arg is passed in as middleware (will run each time first)
app.post('/tours', jsonParser, apiCreateTour)

// DELETE API ROUTE
app.delete("/tours/:id", apiDeleteTour);

app.listen(process.env.PORT || 8091, () => {
  console.log('Server started...')
})
