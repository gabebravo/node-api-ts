"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const data_1 = require("../../data/data");
const messages_1 = require("../../model/shared/messages");
exports.apiCreateTour = (req, res, next) => {
    const requiredFields = ['location', 'tourTitle'];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requiredFields.every(field => givenFields.includes(field))) {
        return next(new messages_1.ApiError("Data missing", "Not all required fields supplied", 400));
    }
    const testTour = {
        id: v4_1.default(),
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        tourDescription: req.body.tourDescription || "",
        price: req.body.price || 0,
        currency: req.body.currency || ""
    };
    data_1.DataStore.tours.push(testTour);
    res.json(new messages_1.PublicInfo("Tour Added", 200, { tour: testTour }));
};
