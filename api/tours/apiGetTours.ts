import { DataStore } from '../../data/data'
import { RequestHandler } from 'express';

export const apiGetTours: RequestHandler = (req, res, next) => {
  res.json(DataStore.tours)
}