"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiGetTours_1 = require("./api/tours/apiGetTours");
const apiGetTourDetail_1 = require("./api/tours/apiGetTourDetail");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// TEST ROUTE : 
app.get('/', (req, res, next) => {
    res.send("Tour Booking API");
});
// GET TOURS API ROUTES
app.get("/tours", apiGetTours_1.apiGetTours);
app.get("/tours/:id", apiGetTourDetail_1.apiGetTourDetail);
app.listen(process.env.PORT || 8091, () => {
    console.log('Server started...');
});
