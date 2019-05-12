import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { TourDetail } from "../../model/shared/tourDetail";
import { ApiError, PublicInfo } from "../../model/shared/messages";

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = DataStore.tours.find((element: any) => element.id == tourID);
    if (selectedTour) {
        const selectedReviews = DataStore.reviews.filter((item: any) => item.tourID == tourID);
        res.json(new PublicInfo("Tour Added", 200, new TourDetail(selectedTour, selectedReviews)))
    }
    else {
        return next(new ApiError("Validation Error", "Tour Not Found", 400))
    }
};