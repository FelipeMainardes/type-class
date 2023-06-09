
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest{
    name: string;
    description: string;
}
/*
 Definir o tipo de retorno [x]
 Alterar o retorno de erro [x] 
 Acesar o repositorio [x]
 Retornar algo [x]
 Done [x]
*/
class CreateCategoryUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){

    }

    async execute({description, name}: IRequest): Promise<void> {

    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists){
         throw new Error ("Category already exists!");
    }

    this.categoriesRepository.create({name, description});
    }
}


export{ CreateCategoryUseCase }