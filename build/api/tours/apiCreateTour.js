"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
// class NewTour {
//   constructor(
//     public id: string,
//     public location: string,
//     public tourTitle: string,
//     public tourCategory: string,
//     public tourDescription: string,
//     public price: number,
//     public currency: string
//   ){}
// }
exports.apiCreateTour = (req, res, next) => {
    // const newTour = new NewTour(
    //   uuid(),
    //   req.body.location || "",
    //   req.body.tourTitle || "",
    //   req.body.tourCategory || "",
    //   req.body.tourDescription || "",
    //   req.body.price || 0,
    //   req.body.currency || ""
    // )
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
