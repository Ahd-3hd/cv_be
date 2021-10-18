import express from "express";
import routes from "./routes";

const app = express();

app.listen(3000, () => {
  console.info("Running at 3000");
  routes(app);
});
