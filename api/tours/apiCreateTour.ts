import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";
import { ApiError, PublicInfo } from "../../model/shared/messages";

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
    const requiredFields = ['location', 'tourTitle']
    const givenFields = Object.getOwnPropertyNames(req.body)

    if(!requiredFields.every( field => givenFields.includes(field))){
      return next(new ApiError("Data missing", "Not all required fields supplied", 400))
    }

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
    res.json(new PublicInfo("Tour Added", 200, {tour: testTour}))
}