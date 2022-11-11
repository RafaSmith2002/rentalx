import { Category } from "../../entities/category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

// criando uma classe e implementando uma interface ICategoriesRepository
class PostgresCategoriesRespository implements ICategoriesRepository {
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
    }
}

export { PostgresCategoriesRespository };