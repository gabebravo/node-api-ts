import express from 'express';
const app = express();

// EXTERNAL MIDDLEWARE
import morgan from 'morgan'
const logger = morgan('dev')
import * as bodyParser from 'body-parser';
const jsonParser = bodyParser.json()

// MIDDLEWARE FUNCTIONS WILL RUN EVERY TIME
app.use(logger) 

// IMPORTED ROUTES
import { apiGetTours } from "./api/tours/apiGetTours";
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail";
import { apiCreateTour } from "./api/tours/apiCreateTour";
import { apiDeleteTour } from "./api/tours/apiDeleteTour";
import { apiUpdateTour } from "./api/tours/apiUpdateTour";

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

// PATCH API ROUTE
app.patch("/tours/:id", jsonParser, apiUpdateTour);

app.listen(process.env.PORT || 8091, () => {
  console.log('Server started...')
})
