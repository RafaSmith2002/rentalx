import { Router } from "express"; //o router nos ajuda a manipular as rotas de forma modular.
// importar a biblioteca multer
import multer from "multer";

//import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
//import { importCategoryController } from "../modules/cars/useCases/ImportCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
//import { CreateCategoryService } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase.ts";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
}); 

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);

});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
  
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    //return importCategoryController.handle(request, response);
    return createCategoryController.handle(request, response);
    // const { file } = request;
    // console.log(file);
    // return response.send();
   
});

export { categoriesRoutes };




// NÃO SERÁ USADO

 //const { file } = request;
    //console.log(file);
    //return response.send();


//const { name, description } = request.body;

  // // verificção de cadastro
  //const categoryAlreadyExists = categoriesRepository.findByName(name);

  //if (categoryAlreadyExists) {
  //  return response
  //      .status(400)
  //      .json({ error: "Category already exists!!" });
  //}

//const categoriesRepository = new CategoriesRepository();
  //categoriesRepository.create({ name, description });

    //});
  //const { name, description } = request.body; //verificção de cadastro
  // criando service para chamar o execute
  //const createCategoryService = new CreateCategoryService(
   //   categoriesRepository
  //);
  
  //createCategoryService.execute({ name, description });

  
 // return response.status(201).send();

 //const lista = categoriesRepository.list();
  //return response.json(lista);

  //import { CategoriesRepository } from "../modules/cars/repositories/implements/CategoriesRepository";
//import { CreateCategoryService } from "../modules/cars/useCases/CreateCategoryUseCase";

//import { CreateCategoryUseCase } from '.CreateCategoryUseCase/';
//import { CreateCategoryController } from "../modules/cars/UseCase/CreateCategoryController";
//import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
//import { CreateCategoryService } from "../modules/cars/UseCases/createCategory/CreateCategoryUseCase";