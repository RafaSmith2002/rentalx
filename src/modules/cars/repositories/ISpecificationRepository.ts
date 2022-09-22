import { Specification } from "../model/Specifications"

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecifitacionsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
}

export { ICreateSpecificationDTO, ISpecifitacionsRepository };