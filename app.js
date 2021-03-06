const express = require("express");
const bodyParser = require("body-parser");
const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/user-routes");
const HttpError = require("./models/Http-error");

const app = express();
app.use(bodyParser.json());
app.use("/api/user", userRoutes);
app.use("/api/places", placesRoutes);
app.use((req,res,next)=>{
    throw (new HttpError(404,'could not find this route. '))
})


app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(err.code || 500);
  res.json({ message: err.message || "An unknown error occurred!!!" });
});



app.listen(5000);
