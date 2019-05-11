import express from 'express';
const app = express();

import * as bodyParser from 'body-parser';
import { RequestHandler } from "express-serve-static-core";
import { runInNewContext } from "vm";
import { CustomRequestHandler } from "./model/express";
const jsonParser = bodyParser.json()

// INTERACTING MIDDLEWARE  - will change req/res objects
const authenticator: CustomRequestHandler = (req, res, next) => {
  const username = 'Andy123';
  req.user = username;
  next();
}

// PASSIVE MIDDLEWARE
const logger: CustomRequestHandler = (req, res, next) => {
  console.log(`User: ${req.user} ${new Date()} - ${req.method} Request to ${req.path}`)
  next();
}

// MIDDLEWARE FUNCTIONS WILL RUN EVERY TIME
app.use(authenticator)
app.use(logger) 
// if you wanted it just for a ceratin route, you could define that as the first arg - exmaple '/tours'

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
