import { Category } from "../../model/category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
//import { ICategoriesRepository, ICreateCategoryDTO } from "../model/category";


// //DTO - Data Tranfer Object - Interface tranferencia para o arquivo de interface: ICategoriesRepository.TS
// interface ICreateCategoryDTO {
//    name: string;
//    description: string;
//}

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[]; //private define como o atributo vai ser acessado.
    
    // criar um metodo para verificar e instanciar o repositorio
    private static INSTANCE: CategoriesRepository;


    private constructor() {
        this.categories = [];

    }

    public static getInstance(): CategoriesRepository{
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const category = new Category();
    
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
        }
        // listar cadastros das categorias    
        list(): Category[] {
            return this.categories;
        }
        // verificando cadastros
        findByName(name: string): Category {
            const category = this.categories.find(
                (category) => category.name === name
            );
            return category; 
        }
        // //fim da verificação de cadastro  
}

export { CategoriesRepository };
