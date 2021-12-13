const express = require("express");
const { getAllUser, login, signup } = require("../controllers/user-controller");

const { check } = require("express-validator");

const userRoutes = express.Router();

userRoutes.get("/", getAllUser);
userRoutes.post(
  "/signup",
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail() // Test@test.com => test@test.com
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],

  signup
);
userRoutes.post("/login", [
    check("email").not().isEmpty(),
    check("password").isLength({ min: 8 }),
  ], login);

module.exports = userRoutes;
