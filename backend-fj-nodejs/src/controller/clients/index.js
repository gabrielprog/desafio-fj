import clients from '../../gateway/clients';
import DistanceCalculator from '../../usecase/routeDelivery';

class ClientsController {

    responseFormatUser(row) {
        return {
            nome: row.nome,
            email: row.email,
            telefone: row.telefone,
            coordenada_x: row.coordenada_x,
            coordenada_y: row.coordenada_y
        };
    }

    async readAll() {
        const readWithoutFilter = await clients.readWithoutFilter();

        const jsonResponse = readWithoutFilter.rows.map(row => {
            return this.responseFormatUser(row);
        });

        return jsonResponse;
    }

    async readSortedByCities() {
        const readWithoutFilter = await clients.readWithoutFilter();

        const responseSortedCities = DistanceCalculator.sortCitiesByDistance(readWithoutFilter.rows);
        const jsonResponse = responseSortedCities.map(row => {
            return this.responseFormatUser(row);
        });

        return jsonResponse;
        
    }

    async readById(id) {
        const readWithId = await clients.readById(id);

        const jsonResponse = readWithId.rows.map(row => {
            return this.responseFormatUser(row);
        });

        return jsonResponse;
    }
    
    async save(name, email, phone, cord_x, cord_y ) {
        return clients.create(name, email, phone, cord_x, cord_y);
    }
}

export default new ClientsController();