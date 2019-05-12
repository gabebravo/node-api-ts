"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const messages_1 = require("../../model/shared/messages");
exports.apiDeleteTour = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((item) => item.id == tourID);
    if (tourIndex > -1) {
        data_1.DataStore.tours.splice(tourIndex, 1);
        res.json(new messages_1.PublicInfo("Tour Deleted", 200));
    }
    else {
        return next(new messages_1.ApiError("Validation Error", "Tour Not Found", 400));
    }
};
