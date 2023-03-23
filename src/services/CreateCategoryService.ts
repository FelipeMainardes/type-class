
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";


interface IRequest{
    name: string;
    description: string;
}
/*
 Definir o tipo de retorno []
 Alterar o retorno de erro [x] 
 Acesar o repositorio []
 Retornar algo []
*/
class CreateCategoryService{
    constructor(private categoriesRepository: ICategoriesRepository){

    }

    execute({description, name}: IRequest): void {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists){
         throw new Error ("Category already exists!");
    }

    this.categoriesRepository.create({name, description});
    }
}


export{ CreateCategoryService }