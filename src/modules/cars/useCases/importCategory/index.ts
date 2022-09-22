import { CategoriesRepository } from "../../repositories/implements/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepositories = new CategoriesReposi.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
    );

export { importCategoryController };