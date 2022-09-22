import { ISpecifitacionsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}


class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecifitacionsRepository) {}
    
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = 
        this.specificationRepository.findByName(name);
        
        if (specificationAlreadyExists) {
            throw new Error("Specification Already Exists");
        }
        this.specificationRepository.create({ 
            name,
            description,
        });
    }
}

export{ CreateSpecificationUseCase };