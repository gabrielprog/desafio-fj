import clients from "../../database/repository/clients";

class ClientsGateway {

    async create(name, email, phone, cord_x, cord_y) {
        const result = await clients.create(name, email, phone, cord_x, cord_y);
        return result;
    }

    async readById(id) {
        const result = await clients.findById(id);
        return result;
    }

    async readWithoutFilter() {
        const result = await clients.findAll();
        return result;
    }
}

export default new ClientsGateway();