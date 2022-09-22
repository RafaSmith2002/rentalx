import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
// criando uma interface para receber as informações 
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    // Iinicializando meu objeto
    constructor(private categoriesRepository: ICategoriesRepository) {}
    // o "execute" executa a minha tarefa quando eh chamado
    execute({ name, description }: IRequest) {
        // verificação de cadastro
        const categoryAlreadyExists = 
            this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists) {
        //retornando erro caso exista o nome já cadastrado 
           throw new Error ("Category Already Exists!!") 
        }        
   
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
