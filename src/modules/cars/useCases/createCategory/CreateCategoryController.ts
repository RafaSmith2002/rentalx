import { Request, Response } from "express";
// importar o container
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    // constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

        await createCategoryUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController };