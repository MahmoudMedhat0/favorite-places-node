const express = require("express");
const {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlaceById,
  deltePlace,
} = require("../controllers/places-controller");

const placesRoutes = express.Router();

placesRoutes.get("/:pid", getPlaceById);

placesRoutes.get("/user/:uid", getPlacesByUserId);

placesRoutes.post("/", createPlace);

placesRoutes.patch("/:pid", updatePlaceById);

placesRoutes.delete("/:pid", deltePlace);

module.exports = placesRoutes;
