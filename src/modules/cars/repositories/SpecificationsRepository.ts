import { Specification } from "../model/Specifications";
import { ICreateSpecificationDTO, ISpecifitacionsRepository } from "../../ISpecificationRepository";

class SpecificationsRepository implements ISpecifitacionsRepository {
    // dando acesso para meu array
    private specifications: Specification[];
    // acessando o arrya
    
    constructor(){
        this.specifications = [];
    }
    // recebendo e cadastrando os dados enviados via request.body
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign( specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specifications.push(specification);
    } 
    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );
        return specification;
    }
}

export { SpecificationsRepository };