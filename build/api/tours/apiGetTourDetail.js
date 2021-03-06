"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const tourDetail_1 = require("../../model/shared/tourDetail");
const messages_1 = require("../../model/shared/messages");
exports.apiGetTourDetail = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = data_1.DataStore.tours.find((element) => element.id == tourID);
    if (selectedTour) {
        const selectedReviews = data_1.DataStore.reviews.filter((item) => item.tourID == tourID);
        res.json(new messages_1.PublicInfo("Tour Added", 200, new tourDetail_1.TourDetail(selectedTour, selectedReviews)));
    }
    else {
        return next(new messages_1.ApiError("Validation Error", "Tour Not Found", 400));
    }
};
