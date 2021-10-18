import { Express } from "express";
import { healthCheck } from "./controllers/healthCheck";

function routes(app: Express) {
  app.get("/ping", healthCheck);
}

export default routes;
