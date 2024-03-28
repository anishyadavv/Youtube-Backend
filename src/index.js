import dotenv from "dotenv";
import connect from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connect()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("App is listening on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("Mongo db connection error: " + error);
  });

