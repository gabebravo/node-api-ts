"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const data_1 = require("../../data/data");
// TYPING ALTERNATIVE, RATHER THAN CLASS INSTANCE
class NewTour {
    constructor(id, location, tourTitle, tourCategory, tourDescription, price, currency) {
        this.id = id;
        this.location = location;
        this.tourTitle = tourTitle;
        this.tourCategory = tourCategory;
        this.tourDescription = tourDescription;
        this.price = price;
        this.currency = currency;
    }
}
// type TNewTour = {
//   id: string,
//   location: string,
//   tourTitle: string,
//   tourCategory: string,
//   tourDescription: string,
//   price: number,
//   currency: string
// }
exports.apiCreateTour = (req, res, next) => {
    const newTour = new NewTour(v4_1.default(), req.body.location || "", req.body.tourTitle || "", req.body.tourCategory || "", req.body.tourDescription || "", req.body.price || 0, req.body.currency || "");
    // const testTour: TNewTour = {
    //   id: uuid(),
    //   location: req.body.location || "",
    //   tourTitle: req.body.tourTitle || "",
    //   tourCategory: req.body.tourCategory || "",
    //   tourDescription: req.body.tourDescription || "",
    //   price: req.body.price || 0,
    //   currency: req.body.currency || ""
    // }
    data_1.DataStore.tours.push(newTour);
    res.json({ "tour": newTour });
};
