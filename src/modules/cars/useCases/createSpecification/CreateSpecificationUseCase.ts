import { inject, injectable } from "tsyringe";

import { SpecificationsRepository } from "../../repositories/implements/SpecificationsRepository";
import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject(SpecificationsRepository)
        private specificationRepository: ISpecificationsRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadryExists =
            await this.specificationRepository.findByName(name);

        if (specificationAlreadryExists) {
            throw new Error("Specification Already Exists!");
        }
        await this.specificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };