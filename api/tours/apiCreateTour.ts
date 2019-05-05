import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";

// CLASS ALTERNATIVE, RATHER THAN TYPE INSTANCE

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

// const newTour = new NewTour(
//   uuid(),
//   req.body.location || "",
//   req.body.tourTitle || "",
//   req.body.tourCategory || "",
//   req.body.tourDescription || "",
//   req.body.price || 0,
//   req.body.currency || ""
// )

type TNewTour = {
  id: string,
  location: string,
  tourTitle: string,
  tourCategory: string,
  tourDescription: string,
  price: number,
  currency: string
}

export const apiCreateTour: RequestHandler = (req, res, next) => {

    const testTour: TNewTour = {
      id: uuid(),
      location: req.body.location || "",
      tourTitle: req.body.tourTitle || "",
      tourCategory: req.body.tourCategory || "",
      tourDescription: req.body.tourDescription || "",
      price: req.body.price || 0,
      currency: req.body.currency || ""
    }
    
    DataStore.tours.push(testTour);
    res.json({ "tour": testTour })
}