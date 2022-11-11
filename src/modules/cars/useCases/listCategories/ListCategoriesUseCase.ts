import { inject, injectable } from 'tsyringe';

import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { CategoriesRepository } from '../../repositories/implements/CategoriesRepository';
@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject(CategoriesRepository)
        private categoriesRepository: ICategoriesRepository
    ) {}
    
    async execute(): Promise<Category[]> {
        const categories = this.categoriesRepository.list();
        return categories;        
    }
}

export { ListCategoriesUseCase };
