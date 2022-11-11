import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };



//const specificationsRepository = new SpecificationsRepository();
// const { name, description } = request.body;

    // const createSpecificationService = new CreateSpecificationService(
    //     specificationsRepository
    // );

    // createSpecificationService.execute({ name, description });

    // return response.status(201).send();