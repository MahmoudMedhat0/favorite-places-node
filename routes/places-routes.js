const express = require("express");
const { check } = require("express-validator");
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

placesRoutes.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],

  createPlace
);

placesRoutes.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  updatePlaceById
);

placesRoutes.delete("/:pid", deltePlace);

module.exports = placesRoutes;
