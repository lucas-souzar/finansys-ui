import { InMemoryDbService } from  "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService{
    createDb() {
        const categories: Category[] = [
            {id: 1, name: 'Moradia', description: 'Pagamentos de Contas de Casa'},
            {id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios'},
            {id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc.'},
            {id: 4, name: 'Salaŕio', description: 'Recebimento de Salário'}
        ];

        return { categories }
    }
}