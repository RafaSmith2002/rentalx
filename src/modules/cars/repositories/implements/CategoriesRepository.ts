/* eslint-disable no-use-before-define */
import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    // private categories: Category[]; --remove

    private repository: Repository<Category>;

    private static INSTANCE: CategoriesRepository;

    constructor() {
        // this.categories = []; --remove
        this.repository = getRepository(Category);
    }

    // --remove
    // public static getInstance(): CategoriesRepository {
    //     if (!CategoriesRepository.INSTANCE) {
    //         CategoriesRepository.INSTANCE = new CategoriesRepository();
    //     }
    //     return CategoriesRepository.INSTANCE;
    // }
    // --remove

    async create({ description, name }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description,
        });
        await this.repository.save(category);

        // const category = new Category();

        // Object.assign(category, {
        //     name,
        //     description,
        //     created_at: new Date(),
        // });

        // this.categories.push(category);
    }
    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }
    async findByName(name: string): Promise<Category> {
        // select * from categories where name = name limit 1
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository };