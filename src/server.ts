import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";
//import { categoriesRoutes } from "./routes/categories.routes";
//import { specificationsRoutes } from "./routes/specification.routes";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

//app.use("/categories", categoriesRoutes);
//app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("Server is running!"));