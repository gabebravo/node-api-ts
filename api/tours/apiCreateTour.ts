import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";

interface INewTour {
  id: string,
  location: string,
  tourTitle: string,
  tourCategory: string,
  tourDescription: string,
  price: number,
  currency: string
}

export const apiCreateTour: RequestHandler = (req, res, next) => {

    const testTour: INewTour = {
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