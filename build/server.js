"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiGetTours_1 = require("./api/tours/apiGetTours");
const apiGetTourDetail_1 = require("./api/tours/apiGetTourDetail");
const apiCreateTour_1 = require("./api/tours/apiCreateTour");
const apiDeleteTour_1 = require("./api/tours/apiDeleteTour");
const apiUpdateTour_1 = require("./api/tours/apiUpdateTour");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const bodyParser = __importStar(require("body-parser"));
const jsonParser = bodyParser.json();
// TEST ROUTE : 
app.get('/', (req, res, next) => {
    res.send("Tour Booking API");
});
// GET API ROUTES
app.get("/tours", apiGetTours_1.apiGetTours);
app.get("/tours/:id", apiGetTourDetail_1.apiGetTourDetail);
// POST API ROUTE - jsonParser arg is passed in as middleware (will run each time first)
app.post('/tours', jsonParser, apiCreateTour_1.apiCreateTour);
// DELETE API ROUTE
app.delete("/tours/:id", apiDeleteTour_1.apiDeleteTour);
// PATCH API ROUTE
app.patch("/tours/:id", jsonParser, apiUpdateTour_1.apiUpdateTour);
app.listen(process.env.PORT || 8091, () => {
    console.log('Server started...');
});
