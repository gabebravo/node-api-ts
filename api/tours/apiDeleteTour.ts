import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { ApiError, PublicInfo } from "../../model/shared/messages";

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item:any) => item.id == tourID);
    if (tourIndex > -1) {
        DataStore.tours.splice(tourIndex, 1);
        res.json(new PublicInfo("Tour Deleted", 200))
    }
    else {
        return next(new ApiError("Validation Error", "Tour Not Found", 400))
    }
}
