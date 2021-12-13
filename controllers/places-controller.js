const HttpError = require("../models/Http-error");
const { v4: uuid } = require("uuid");
let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => p.id === placeId);
  if (!place)
    return next(
      new HttpError(404, "could not find a place for the provider id")
    );

  res.json(place);
};
const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const places = DUMMY_PLACES.filter((p) => {
    return p.creator === userId;
  });
  if (!places || places.length === 0)
    return next(
      new HttpError(404, "could not find a place for the provider user id")
    );

  res.json(places);
};
const createPlace = (req, res, next) => {
  const { title, creator, description, address, coordinates } = req.body;
  const newPlace = {
    id: uuid(),
    title,
    creator,
    description,
    address,
    location: coordinates,
  };
  DUMMY_PLACES.push(newPlace);
  res.status(201).json({ palce: newPlace });
};

const updatePlaceById = (req, res, next) => {
  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatedPlace = { ...DUMMY_PLACES.find((p) => placeId === p.id) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);
  (updatedPlace.title = title), (updatedPlace.description = description);
  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ palce: updatedPlace });
};
const deltePlace = (req, res, next) => {
  const placeId = req.params.pid;
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId);
  res.status(200).json({ message: "Deleted Place." });
};

module.exports = {
    getPlacesByUserId,
  getPlaceById,
  createPlace,
  deltePlace,
  updatePlaceById,
};
